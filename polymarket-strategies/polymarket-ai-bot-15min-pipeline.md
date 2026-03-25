# Polymarket AI Trading Bot: 15-Minute + Daily Pipeline (2026)

## Overview
A Reddit post in r/SideProject (March 2026) described a two-timeframe Polymarket trading bot that combines a 15-minute intraday signal with a daily fundamental analysis pipeline. This architecture separates fast-moving technical signals from slower-moving fundamental analysis, allowing the bot to trade both momentum and value opportunities.

## Architecture
The bot operates on two parallel tracks:

**Track 1: 15-Minute Intraday Signal**
- Monitors Polymarket CLOB for rapid price movements in liquid markets.
- Identifies momentum signals (e.g., a market moving from 45% to 52% in under 15 minutes).
- Executes small, quick trades to capture the momentum continuation.
- Uses a tight stop-loss to limit downside.

**Track 2: Daily Fundamental Pipeline**
- Each morning, fetches the day's key events (elections, economic releases, sports games).
- Prompts Claude with structured context for each market (polling data, historical base rates, news).
- Claude generates a probability estimate and confidence score.
- Bot places positions in markets where Claude's estimate diverges from the current market price by more than a threshold (e.g., 5 percentage points).

## Key Technical Details
- **Language:** Python (with async for concurrent market monitoring).
- **Data Sources:** Polymarket CLOB API, NewsAPI, BLS API, polling aggregators.
- **Execution:** Polymarket CLOB API for order placement.
- **Risk Management:** Maximum 2% of portfolio per trade, daily loss limit of 5%.

## Performance Notes
The builder reported that the 15-minute momentum track had a higher win rate but lower average profit per trade, while the daily fundamental track had a lower win rate but significantly higher average profit per trade. The combination of both tracks produced a smoother equity curve than either track alone.

## References
- [Reddit: I built an AI-powered trading bot for Polymarket (r/SideProject)](https://www.reddit.com/r/SideProject/comments/1s1gewo/i_built_an_aipowered_trading_bot_for_polymarket/)
- [Polymarket CLOB API Documentation](https://docs.polymarket.com)
