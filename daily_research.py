
import os
import requests
from bs4 import BeautifulSoup
import json
import subprocess
import datetime
import re

# --- Configuration --- #
REPO_ROOT = os.path.dirname(os.path.abspath(__file__))
DOCS_DIR = os.path.join(REPO_ROOT, "docs")
STRATEGIES_JSON_FILE = os.path.join(DOCS_DIR, "strategies.json")
INDEX_FILE = os.path.join(REPO_ROOT, "INDEX.md")

# --- Helper Functions --- #
def run_command(command, cwd=REPO_ROOT):
    try:
        result = subprocess.run(command, cwd=cwd, check=True, capture_output=True, text=True)
        print(f"Command output: {result.stdout}")
        if result.stderr:
            print(f"Command error: {result.stderr}")
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"Command failed: {e.cmd}")
        print(f"Error output: {e.stderr}")
        raise

def fetch_webpage_content(url):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()  # Raise an HTTPError for bad responses (4xx or 5xx)
        return response.text
    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error fetching {url}: {e.response.status_code} {e.response.reason}")
        return None
    except requests.exceptions.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return None

def parse_strategy_from_content(url, content):
    soup = BeautifulSoup(content, 'html.parser')
    title = soup.title.string if soup.title else "No Title"
    
    strategy_name = title.split('|')[0].strip() if '|' in title else title
    description_meta = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'property': 'og:description'})
    description = description_meta['content'] if description_meta else soup.get_text(separator=' ', strip=True)[:200] + "..."

    # Simple keyword-based classification (highly simplified)
    platform = "polymarket"
    if "kalshi" in content.lower():
        platform = "kalshi"
    elif "stock" in content.lower() or "option" in content.lower() or "future" in content.lower():
        platform = "stocks"
    elif "saas" in content.lower() or "business" in content.lower() or "consulting" in content.lower():
        platform = "saas"

    transaction_volume = "medium"
    if "hft" in content.lower() or "high frequency" in content.lower() or "many trades" in content.lower():
        transaction_volume = "high"
    elif "few trades" in content.lower() or "low volume" in content.lower() or "swing trade" in content.lower():
        transaction_volume = "low"

    tax_complexity = "medium"
    if "wash sale" in content.lower() or "60/40" in content.lower() or "complex tax" in content.lower():
        tax_complexity = "high"
    elif "simplified tax" in content.lower() or "easy tax" in content.lower():
        tax_complexity = "low"

    durability = "medium"
    if "durable" in content.lower() or "long-term edge" in content.lower():
        durability = "high"
    elif "dilute" in content.lower() or "crowded" in content.lower():
        durability = "low"

    claude_role = "both"
    if "claude research" in content.lower() or "claude analysis" in content.lower():
        claude_role = "research"
    elif "claude execution" in content.lower() or "claude automation" in content.lower():
        claude_role = "execution"

    edge_type = "General AI assistance"
    if "weather data" in content.lower() or "NOAA" in content.lower():
        edge_type = "Weather data integration"
    elif "political polling" in content.lower() or "election data" in content.lower():
        edge_type = "Political polling analysis"
    elif "on-chain data" in content.lower() or "dune analytics" in content.lower():
        edge_type = "Crypto on-chain data"
    elif "macro data" in content.lower() or "cpi" in content.lower() or "fed data" in content.lower():
        edge_type = "Economic data analysis"
    elif "arbitrage" in content.lower():
        edge_type = "Arbitrage detection"

    tax_notes = "Tax implications vary based on asset and volume."
    if "section 1256" in content.lower():
        tax_notes = "May qualify for Section 1256 tax treatment (60/40 long/short term capital gains)."
    elif "wash sale" in content.lower():
        tax_notes = "High volume may incur wash sale rules."

    return {
        "name": strategy_name,
        "platform": platform,
        "edgeType": edge_type,
        "durability": durability,
        "transactionVolume": transaction_volume,
        "taxComplexity": tax_complexity,
        "claudeRole": claude_role,
        "taxNotes": tax_notes,
        "description": description,
        "sources": [{
            "title": strategy_name,
            "url": url
        }]
    }

def load_strategies_from_json():
    if not os.path.exists(STRATEGIES_JSON_FILE):
        return []
    with open(STRATEGIES_JSON_FILE, 'r') as f:
        return json.load(f)

def save_strategies_to_json(strategies_list):
    with open(STRATEGIES_JSON_FILE, 'w') as f:
        json.dump(strategies_list, f, indent=4)

def update_index_md(strategy_name, strategy_path, category_heading_text):
    with open(INDEX_FILE, 'r+') as f:
        content = f.read()
        f.seek(0)

    # Find the category heading and insert the new link
    # This regex is more robust to match headings like ### [/polymarket-strategies/]
    heading_pattern = re.compile(r'(###\s*\[{}\]\(.*\))'.format(re.escape(category_heading_text.strip('/'))), re.IGNORECASE)
    match = heading_pattern.search(content)

    if match:
        insert_point = match.end()
        new_entry = f"- [{strategy_name}]({strategy_path})\n"
        
        # Check if entry already exists within the section to prevent duplicates
        # Find the end of the current section or the start of the next heading
        next_heading_match = re.search(r'###\s*\[.*\]\(.*\)', content[insert_point:])
        if next_heading_match:
            section_end = insert_point + next_heading_match.start()
        else:
            section_end = len(content)

        section_content = content[insert_point:section_end]
        if new_entry.strip() not in section_content:
            content = content[:insert_point] + "\n" + new_entry + content[insert_point:]
            with open(INDEX_FILE, 'w') as f_write:
                f_write.write(content)
            print(f"Updated {INDEX_FILE} with '{strategy_name}'")
        else:
            print(f"'{strategy_name}' already exists in {INDEX_FILE}. Skipping.")
    else:
        print(f"Could not find category heading '{category_heading_text}' in {INDEX_FILE}. Manual update needed.")

def save_raw_source(strategy_name, url, content, category_folder):
    # Sanitize strategy name for filename
    filename = re.sub(r'[^a-z0-9]+', '-', strategy_name.lower()).strip('-') + ".md"
    filepath = os.path.join(REPO_ROOT, category_folder, filename)
    
    # Ensure directory exists
    os.makedirs(os.path.join(REPO_ROOT, category_folder), exist_ok=True)

    with open(filepath, 'w') as f:
        f.write(f"# Source: {strategy_name}\n")
        f.write(f"**URL:** {url}\n\n")
        f.write("```markdown\n")
        f.write(content) # Save raw content for later parsing
        f.write("\n```\n")
    print(f"Saved raw source to {filepath}")
    return filepath

# --- Main Research Logic --- #
def perform_daily_research():
    print("Starting daily research for new Polymarket/Kalshi/Claude trading ideas...")

    # Consolidated list of URLs to check (simulated search results)
    # Removed blog.devgenius.io due to consistent 403 errors.
    urls_to_check = [
        "https://www.publish0x.com/omniai/ultimate-no-code-guide-build-your-polymarket-weather-trading-xnjkpxz",
        "https://www.quantvps.com/blog/polymarket-hft-traders-use-ai-arbitrage-mispricing",
        "https://www.paradoxintelligence.com/blog/how-to-use-alternative-data-predict-polymarket-outcomes-2026",
        "https://www.reddit.com/r/ClaudeAI/comments/1r7yuf2/i_spent_8_months_asking_claude_dumb_questions_now/",
        "https://www.reddit.com/r/PredictionsMarkets/comments/1rnajy5/best_ai_for_prediction_market-trading-2026_i/",
        "https://phemex.com/news/article/leveraging-onchain-tools-for-strategic-trading-on-polymarket-33346",
        "https://www.quantvps.com/blog/automated-sports-betting-bots-on-polymarket",
        "https://www.monacocpa.cpa/post/prediction-market-taxes-kalshi-polymarket-robinhood",
        "https://ahasignals.com/research/prediction-market-arbitrage-strategies/",
        "https://entrepreneurloop.com/15-best-claude-code-business-ideas-for-developers-in-2026/",
        "https://www.reddit.com/r/Entrepreneur/comments/1re4g86/how_are_people_actually_turning_ai_into_real/",
        "https://www.nhc.noaa.gov/", # Example of a data source, not a strategy page
        # Add more URLs as needed for comprehensive research
    ]

    found_strategies = []
    existing_strategies = load_strategies_from_json()
    processed_urls = set(source["url"] for s in existing_strategies for source in s["sources"])

    for url in urls_to_check:
        if url in processed_urls:
            print(f"Skipping already processed URL: {url}")
            continue

        print(f"Processing URL: {url}")
        content = fetch_webpage_content(url)
        if content:
            strategy_data = parse_strategy_from_content(url, content)
            # Check if a strategy with the same name already exists in our loaded strategies
            if strategy_data and not any(s["name"] == strategy_data["name"] for s in existing_strategies + found_strategies):
                found_strategies.append(strategy_data)
                processed_urls.add(url)
                
                # Determine category folder and heading for INDEX.md
                category_folder = "raw-sources"
                category_heading = "/raw-sources/"
                if strategy_data["platform"] == "polymarket":
                    category_folder = "polymarket-strategies"
                    category_heading = "/polymarket-strategies/"
                elif strategy_data["platform"] == "kalshi":
                    category_folder = "kalshi-strategies"
                    category_heading = "/kalshi-strategies/"
                elif strategy_data["platform"] == "stocks":
                    category_folder = "claude-trading-setups"
                    category_heading = "/claude-trading-setups/"
                elif strategy_data["platform"] == "saas":
                    category_folder = "claude-trading-setups" # Or a new 'saas-ideas' folder
                    category_heading = "/claude-trading-setups/"
                
                # Save raw source to a markdown file in the appropriate folder
                raw_source_path = save_raw_source(strategy_data["name"], url, content, category_folder)
                
                # Update INDEX.md (this is a simplified update, real one would be more robust)
                update_index_md(strategy_data["name"], os.path.relpath(raw_source_path, REPO_ROOT), category_heading)

    if found_strategies:
        print(f"Found {len(found_strategies)} new strategies. Updating strategies.json...")
        # Load existing strategies, add new ones, then save all at once
        all_strategies = load_strategies_from_json()
        for strategy in found_strategies:
            # Ensure unique IDs for new strategies
            strategy["id"] = max([s["id"] for s in all_strategies]) + 1 if all_strategies else 1
            all_strategies.append(strategy)
        save_strategies_to_json(all_strategies)

        # Git operations
        run_command(["git", "add", "."])
        commit_message = f"Automated daily research update: {len(found_strategies)} new strategies found on {datetime.date.today()}"
        run_command(["git", "commit", "-m", commit_message])
        run_command(["git", "push", "origin", "master"])
        print("Repository updated and pushed to GitHub.")
    else:
        print("No new strategies found.")

if __name__ == "__main__":
    perform_daily_research()
