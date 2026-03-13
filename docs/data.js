// Strategy data for the dashboard
const strategies = [
    {
        id: 1,
        name: "Weather Arbitrage",
        platform: "polymarket",
        edgeType: "NOAA/NWS data integration",
        durability: "medium",
        transactionVolume: "high",
        taxComplexity: "high",
        claudeRole: "execution",
        taxNotes: "Crypto-based transactions, high volume. Short-term capital gains.",
        description: "Exploiting lag between NOAA/NWS updates and market pricing by comparing forecasts to Polymarket weather market odds.",
        sources: [
            { title: "Publish0x Guide", url: "https://www.publish0x.com/omniai/ultimate-no-code-guide-build-your-polymarket-weather-trading-xnjkpxz" }
        ]
    },
    {
        id: 2,
        name: "CPI & Macro Data Trading",
        platform: "polymarket",
        edgeType: "BLS/Fed release timing",
        durability: "high",
        transactionVolume: "medium",
        taxComplexity: "medium",
        claudeRole: "research",
        taxNotes: "Event-driven trading. Short-term capital gains.",
        description: "Early action on BLS/Fed data releases before market adjustment. Claude rapidly parses raw reports and generates theses.",
        sources: [
            { title: "Reddit Discussion", url: "https://www.reddit.com/r/PredictionsMarkets/comments/1rnajy5/best_ai_for_prediction_market_trading_2026_i/" }
        ]
    },
    {
        id: 3,
        name: "Sports Betting Bots",
        platform: "polymarket",
        edgeType: "Multi-model ensemble predictions",
        durability: "medium",
        transactionVolume: "high",
        taxComplexity: "medium",
        claudeRole: "execution",
        taxNotes: "High-frequency trading. Short-term capital gains.",
        description: "Using ensemble of LLMs (Claude, GPT-4o, Gemini) to find mispriced odds in sports markets.",
        sources: [
            { title: "QuantVPS Blog", url: "https://www.quantvps.com/blog/automated-sports-betting-bots-on-polymarket" }
        ]
    },
    {
        id: 4,
        name: "On-Chain Data Edge",
        platform: "polymarket",
        edgeType: "Smart money tracking",
        durability: "medium",
        transactionVolume: "low",
        taxComplexity: "medium",
        claudeRole: "research",
        taxNotes: "Crypto capital gains, manual tracking required.",
        description: "Tracking high-win-rate wallets on Polygon blockchain using Dune Analytics and Nansen to identify copy-trading opportunities.",
        sources: [
            { title: "Phemex Article", url: "https://phemex.com/news/article/leveraging-onchain-tools-for-strategic-trading-on-polymarket-33346" }
        ]
    },
    {
        id: 5,
        name: "Polymarket HFT Arbitrage",
        platform: "polymarket",
        edgeType: "Market rebalancing & combinatorial",
        durability: "medium",
        transactionVolume: "high",
        taxComplexity: "high",
        claudeRole: "execution",
        taxNotes: "Very high volume. Complex cost-basis tracking required.",
        description: "Using AI models (Mistral-7B, Llama-3.2, DeepSeek) to identify arbitrage opportunities across Polymarket markets. Estimated $40M extracted April 2024-2025.",
        sources: [
            { title: "QuantVPS HFT Guide", url: "https://www.quantvps.com/blog/polymarket-hft-traders-use-ai-arbitrage-mispricing" }
        ]
    },
    {
        id: 6,
        name: "Political Polling Edge",
        platform: "polymarket",
        edgeType: "Alternative data signals",
        durability: "high",
        transactionVolume: "medium",
        taxComplexity: "medium",
        claudeRole: "research",
        taxNotes: "Event-driven. Short-term capital gains.",
        description: "Using alternative data (Google Search trends, Reddit/TikTok sentiment, news divergence) to identify mispriced political markets.",
        sources: [
            { title: "Paradox Intelligence", url: "https://www.paradoxintelligence.com/blog/how-to-use-alternative-data-predict-polymarket-outcomes-2026" }
        ]
    },
    {
        id: 7,
        name: "Claude as Trading Second Brain",
        platform: "stocks",
        edgeType: "Research & thesis generation",
        durability: "high",
        transactionVolume: "low",
        taxComplexity: "low",
        claudeRole: "research",
        taxNotes: "Low volume. Can avoid wash sales by holding >30 days. Futures qualify for 60/40 treatment.",
        description: "Integrating Claude with live market data (Polygon.io, Alpaca) to scan stocks, analyze earnings, and generate high-conviction trade ideas.",
        sources: [
            { title: "Reddit Example", url: "https://www.reddit.com/r/ClaudeAI/comments/1r7yuf2/i_spent_8_months_asking_claude_dumb_questions_now/" }
        ]
    },
    {
        id: 8,
        name: "Kalshi Section 1256 Tax Edge",
        platform: "kalshi",
        edgeType: "Tax-efficient trading",
        durability: "high",
        transactionVolume: "low",
        taxComplexity: "low",
        claudeRole: "research",
        taxNotes: "60/40 capital gains treatment. Simplified via 1099-B and Form 6781. No wash sale rules.",
        description: "Leveraging Kalshi's CFTC-regulated status for favorable Section 1256 tax treatment on prediction market contracts.",
        sources: [
            { title: "Tax Guides", url: "https://www.monacocpa.cpa/post/prediction-market-taxes-kalshi-polymarket-robinhood" }
        ]
    },
    {
        id: 9,
        name: "Kalshi vs Polymarket Arbitrage",
        platform: "kalshi",
        edgeType: "Cross-platform arbitrage",
        durability: "medium",
        transactionVolume: "high",
        taxComplexity: "high",
        claudeRole: "execution",
        taxNotes: "Mixed crypto and CFTC contracts. Complex reporting required.",
        description: "Arbitrage between identical events on Kalshi and Polymarket, exploiting regulatory segmentation and liquidity differences.",
        sources: [
            { title: "AhaSignals Research", url: "https://ahasignals.com/research/prediction-market-arbitrage-strategies/" }
        ]
    },
    {
        id: 10,
        name: "Claude-Powered SaaS",
        platform: "saas",
        edgeType: "Niche automation tools",
        durability: "high",
        transactionVolume: "low",
        taxComplexity: "low",
        claudeRole: "execution",
        taxNotes: "Standard business income tax.",
        description: "Building one-function AI tools or full SaaS platforms using Claude Code. Examples: faceless YouTube channels, Notion automation, micro-SaaS ($800-$8k MRR).",
        sources: [
            { title: "EntrepreneurLoop", url: "https://entrepreneurloop.com/15-best-claude-code-business-ideas-for-developers-in-2026/" }
        ]
    },
    {
        id: 11,
        name: "AI Consulting & Agency",
        platform: "saas",
        edgeType: "Automation consulting",
        durability: "high",
        transactionVolume: "low",
        taxComplexity: "low",
        claudeRole: "research",
        taxNotes: "Standard business income tax.",
        description: "Setting up AI automation for businesses. Services: prompt engineering, content writing, custom Claude Skill development.",
        sources: [
            { title: "Reddit Entrepreneur", url: "https://www.reddit.com/r/Entrepreneur/comments/1re4g86/how_are_people_actually_turning_ai_into_real/" }
        ]
    },
    {
        id: 12,
        name: "Hurricane Track Analysis",
        platform: "polymarket",
        edgeType: "Specialized weather data",
        durability: "high",
        transactionVolume: "low",
        taxComplexity: "medium",
        claudeRole: "research",
        taxNotes: "Event-driven. Short-term capital gains.",
        description: "Trading Polymarket weather markets using NOAA National Hurricane Center data and meteorological models for specialized edge.",
        sources: [
            { title: "NOAA NHC", url: "https://www.nhc.noaa.gov/" }
        ]
    }
];

// Last updated timestamp
const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});
