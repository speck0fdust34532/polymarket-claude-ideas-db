# Automated Market Making (AMM) on Polymarket

## Strategy Overview
Market making involves providing liquidity to both sides of a prediction market (YES and NO) and earning the spread. This strategy focuses on slow, steady, compound growth rather than directional betting.

## How it Works
1.  **Limit Orders**: Place limit orders on both YES and NO sides of a market.
2.  **Earning the Spread**: For example, if you sell YES at $0.62 and buy it back at $0.58, you pocket a 4¢ spread (6.5% profit).
3.  **Bot Execution**: A bot monitors the orderbook depth 24/7 to:
    *   Stay competitive with other market makers.
    *   Adjust orders when real information moves the market.
    *   Manage inventory to avoid being stuck with one side.

## Why it Works in 2026
*   **Low Competition**: Most traders are directional, leaving the liquidity provision side underserved.
*   **Wide Spreads**: Prediction markets often have wider spreads than traditional finance, offering more "free money" for market makers.
*   **Predictable Flow**: Retail panic selling often creates opportunities for bots to buy at a discount.

## Real-World Example (Jan 2026)
A bot on the "Bitcoin to $100k" market performed:
*   42 round trips on YES (bought at $0.45, sold at $0.48).
*   38 round trips on NO (bought at $0.51, sold at $0.54).
*   **Net Profit**: $1,247 on $10k capital (12.47% in 3 weeks) regardless of the outcome.

## Key Risks
*   **Toxic Flow**: Getting "run over" by traders with superior information.
*   **Inventory Risk**: Being stuck with a large position on the losing side of a major market move.

## Source
*   [4 Polymarket Strategies Bots Actually Profit From in 2026 - Medium](https://medium.com/illumination/beyond-simple-arbitrage-4-polymarket-strategies-bots-actually-profit-from-in-2026-ddacc92c5b4f)
