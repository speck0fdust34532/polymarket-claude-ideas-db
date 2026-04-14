# LunarResearcher: Mass Wallet Analysis + Claude Code Weekend Bot

**Source:** X / @LunarResearcher  
**Original Posts:**
- Story post: https://x.com/LunarResearcher/status/2043791114252234873 (Apr 13, 2026 — 30.6K views, 287 bookmarks)
- Full article: https://x.com/LunarResearcher/status/2043690015675318360 (Apr 13, 2026 — 83.1K views, 199 bookmarks)
- Earlier wallet analysis article: https://x.com/LunarResearcher/status/2038622884642398503 (Mar 30, 2026 — 4.5M views, 4.2K bookmarks)

**Category:** Polymarket Strategy / Claude Code Implementation  
**Date Added:** 2026-04-13

---

## Summary

@LunarResearcher published two interconnected articles documenting a complete, open-source Polymarket trading bot built with Claude Code in a single weekend, starting from $800 and reaching +$11,400 over 16–19 days (71% win rate, 187 trades). The strategy is grounded in a mass analysis of 86 million historical Polymarket trades across 14,000+ wallets.

The origin story: an ex-OpenAI engineer at a meetup in SF told LunarResearcher: *"You're trading blind. The data is sitting in the open and you're writing prompts."* He pointed to a single GitHub repo — `warproxxx/poly_data` — and the entire system was built from there.

---

## The Core Insight: What the Top 0.1% Actually Do

From analyzing 47 wallets with >70% win rate and 100+ trades:

| Metric | Top Wallets | Average Traders |
|--------|-------------|-----------------|
| Profit captured per trade | 86% of expected move | 58% of expected move |
| Loss cut threshold | 12% drawdown | Hold to 41% drawdown |
| Hold to settlement | 9% of trades | ~60% of trades |
| Average hold time | 7 hours | Much longer |

**The exits make it a completely different game.** Top wallets don't hold to settlement — they buy at 40¢, sell at 65¢, and move on. The last 35 cents of profit isn't worth the resolution risk.

---

## The 3 Core Formulas

### Formula 1: Expected Value Filter

```
EV = P_true × (1 - P_market) - (1 - P_true) × P_market
```

**Rule:** EV < 5% → SKIP. No exceptions. This single filter eliminates 90% of losing trades.

*Example:* Market says 40%, you estimate 60%: EV = 0.60 × 0.60 − 0.40 × 0.40 = **$0.20 per dollar** (20% edge).

### Formula 2: Quarter Kelly Sizing

```
f* = (p × b - q) / b
where b = (1 - P_market) / P_market
```

**Rule:** Never use full Kelly. Always use **Quarter Kelly** (cap at 25% of f\*). Sweet spot: f\* between 0.05 and 0.15.

```python
def kelly_size(p_win, market_price, bankroll, max_fraction=0.25):
    b = (1 / market_price) - 1
    q = 1 - p_win
    f_star = (p_win * b - q) / b
    if f_star <= 0:
        return 0  # negative EV — kill trade
    f_capped = min(f_star, max_fraction)
    return round(bankroll * f_capped, 2)
```

### Formula 3: Bayesian Updating

```
P(H|E) = P(E|H) × P(H) / P(E)
```

*Example:* Prior on Fed rate cut = 55%. CPI data drops. Posterior = (0.80 × 0.55) / 0.50 = **88%**.

---

## The 4-Repo Stack (Total Cost: $25/month)

### Repo 1: `warproxxx/poly_data` (646★) — Data Layer

Every trade ever made on Polymarket. 86M+ trades. Every wallet, entry, exit, timestamp.

```bash
git clone github.com/warproxxx/poly_data
# Claude Code prompt:
# "analyze processed/trades.csv — find every wallet 
#  with 100+ trades and win rate above 70%. 
#  rank by profit. export top 50 to targets.json"
```

Claude scanned 14,000+ wallets in **4 minutes** and returned 47 targets.

### Repo 2: `Polymarket/polymarket-cli` (Official) — Scanner Layer

Rust CLI. No API key needed for read-only scanning.

```bash
polymarket markets list --limit 500 -o json     # all active markets
polymarket clob book $TOKEN_ID -o json          # order book
polymarket clob midpoint $TOKEN_ID -o json      # midpoint price
```

**Market scoring filter (Claude-generated):**

```python
def score_market(market, claude_estimate):
    gap = abs(claude_estimate - market["midpoint"])
    depth = min(market["bids_depth"], market["asks_depth"])
    hours_left = market["hours_to_resolution"]
    
    if gap < 0.07: return None      # edge too thin
    if depth < 500: return None     # can't fill
    if hours_left < 4: return None  # too late
    if hours_left > 168: return None # too slow
    
    return {"market": market["question"], "gap": round(gap, 3),
            "depth": depth, "hours": hours_left,
            "ev": round(gap * depth * 0.001, 2)}
```

**93% of markets get killed at this stage.** That's the point.

### Repo 3: `Polymarket/agents` (2,600★) — Brain Layer

Official LLM-powered agent framework. Claude runs 4 checks per market:

```
1. Base rate — what does historical data say?
2. News — has anything changed in last 6h?
3. Whale check — are any of the 47 targets in this market?
4. Disposition — is the crowd making a cognitive error?

If 3/4 agree → generate thesis
If thesis confidence > 75% → size with Kelly
If Kelly says overbet → cut to Quarter Kelly
```

### Repo 4: `dylanpersonguy/Polymarket-Trading-Bot` — Execution Layer

53,000 lines of TypeScript. Three strategy modules extracted:

```python
async def execute_consensus(agents, market, wallet):
    votes = [agent.evaluate(market) for agent in agents]
    buy_votes = sum(1 for v in votes if v["action"] == "BUY")
    
    if buy_votes >= 2:
        size = kelly_size(...)          # full position
        await place_order(market, size, side="BUY")
    elif buy_votes == 1:
        size = kelly_size(...) * 0.5    # half position
        await place_order(market, size, side="BUY")
    # 0 votes → no trade
```

**Consensus filter alone killed 40% of losing trades.**

---

## The 3 Exit Triggers (The Part Nobody Talks About)

```python
# 1. Target hit — take profit at 85% of expected move
if current_price >= entry_price + (expected_gap * 0.85):
    exit("TARGET_HIT")

# 2. Volume spike — 3x normal = smart money leaving
if volume_10min > avg_volume_10min * 3:
    exit("VOLUME_EXIT")

# 3. Time decay — thesis is stale after 24h of no movement
if hours_since_entry > 24 and abs(price_change) < 0.02:
    exit("STALE_THESIS")
```

Exit trigger #2 is the critical insight from the wallet analysis: **91% of top wallet exits happen before resolution**, triggered by volume spikes indicating smart money is leaving.

---

## The 12-Tool Open-Source Stack (Full List)

| Layer | Tool | Stars | Purpose |
|-------|------|-------|---------|
| Data | `warproxxx/poly_data` | 646★ | 86M+ historical trades |
| Data | `Polymarket/py-clob-client` | 947★ | Official SDK, WebSocket streams |
| Data | `pmxt-dev/pmxt` | — | Unified API: Polymarket + Kalshi + Limitless |
| Data | `Jon-Becker/prediction-market-analysis` | — | Research framework |
| Intelligence | `NYTEMODEONLY/polyterm` | 32★ | 73 terminal screens, whale tracking, insider detection, Kalshi arb |
| Intelligence | `pselamy/polymarket-insider-tracker` | 63★ | ML + heuristics, flags unusual entries |
| Intelligence | `aaronjmars/MiroShark` | 285★ | Multi-agent simulation engine |
| Execution | `warproxxx/poly-maker` | 963★ | Market making bot, Google Sheets config |
| Execution | `Polymarket/agents` | 2,600★ | Official LLM agent framework |
| Execution | `RaphaelKrutLandau/polymarket-copy-trading-bot` | — | Low-latency copy trading |
| Infrastructure | Polysights / Insider Finder | — | 24K users, $25K Polymarket grant |
| Infrastructure | `archive.pmxt.dev` | — | Free hourly Parquet snapshots |

---

## The 20-Line Claude Brain

```python
import anthropic, json

def claude_probability(market_question, market_price):
    client = anthropic.Anthropic(api_key="sk-ant-...")
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=500,
        messages=[{"role": "user", "content": f"""
You are a calibrated prediction market analyst.

Market: {market_question}
Current price: {market_price}

Estimate the TRUE probability (0.00-1.00).
Consider base rates. Penalize extreme confidence.
If you say 70%, ~7 out of 10 such calls should resolve YES.

Return JSON only:
{{"probability": 0.XX, "confidence": "high/medium/low"}}
"""}]
    )
    return json.loads(response.content[0].text)
```

Pipeline: `poly_data → Claude scores wallets → insider-tracker → Claude cross-references news → polyterm whale data → Claude decides → py-clob-client executes`

That's ~50 lines of custom code. Everything else is open source.

---

## The 5 Mental Bugs That Cost More Than Bad Code

1. **Base Rate Neglect** — A 99% accurate test on a 0.1% event gives a 9% true positive. "Looks likely" ≠ "is likely."
2. **Sunk Cost Fallacy** — The only question when a position is down: "Would I buy at this price right now with fresh cash?"
3. **Survivorship Bias** — 87% of wallets are in the red. You never see their screenshots.
4. **Copying Without Filtering** — A wallet with 91% win rate on crypto and 15% on politics: copy only the category where they have edge.
5. **Overfitting** — "Every time X happens, market goes up" based on 3 examples is noise, not signal.

---

## Security Warning

In December 2025, a GitHub repo (`polymarket-copy-trading-bot`) contained malware hidden inside a dependency that extracted private keys from `.env` files. Rules:
- **Never use your main wallet** — create a dedicated trading wallet.
- **Audit dependencies** before running any bot.
- **Read-only mode** for scanning; only connect a funded wallet for execution.

---

## Performance Results

| Metric | Value |
|--------|-------|
| Starting capital | $800 |
| Result after 16 days | +$8,700 (from story post) |
| Result after 19 days | +$11,400 (from article title) |
| Win rate | 71% |
| Total trades | 187 |
| Monthly infrastructure cost | $25 (Claude API + $5 VPS) |

---

## Why This Is Valuable

This is the most complete, open-source, reproducible Polymarket trading system publicly documented as of April 2026. Key advantages:

- **Grounded in data** — 86M historical trades, not theory.
- **Fully open-source** — every repo linked, every command shown.
- **Minimal cost** — $25/month total infrastructure.
- **Claude Code native** — designed for Claude's codebase-reading capability, not prompt-chaining.
- **Exit-first design** — the wallet analysis revealed exits matter more than entries.

The key insight that separates this from generic "AI trading" content: the system was reverse-engineered from the actual behavior of the top 0.1% of wallets, not designed from first principles.

---

## Related Entries in This Repo

- `github-repos/polymarket-alpha-bot.md` — Chainstack's LLM-driven alpha detection
- `polymarket-strategies/prediction-market-hype-trading.md` — Hype-driven options strategy
- `claude-trading-setups/claude-code-trading-bot.md` — Claude Code bot setup guide
- `github-repos/kalshi-ai-trading-bot-ryanfrigo.md` — 5-model ensemble bot
