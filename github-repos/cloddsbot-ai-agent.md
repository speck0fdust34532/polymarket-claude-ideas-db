# CloddsBot: Open-Source AI Trading Agent (2026)

## Repository Overview
**CloddsBot** is a high-performance, open-source AI trading agent built on the Claude architecture. It is designed to operate autonomously across 1000+ markets, including prediction markets (Polymarket, Kalshi), DeFi (Solana, EVM), and perpetual futures (Binance, Hyperliquid).

## Key Features
- **Multi-Agent Architecture:** Features four distinct agent layers:
    - **Main (Claude):** High-level strategy and coordination.
    - **Trading (Exec):** Handles order execution and portfolio management.
    - **Research (Data):** Scans for edge and synthesizes data from 119+ skills.
    - **Alerts (Monitor):** Real-time monitoring of market conditions and risk levels.
- **Unified Strategy & Risk Layer:** Includes 118+ strategies, a robust risk engine (VaR/CVaR), Kelly sizing, and arbitrage detection.
- **Agent Commerce Protocol:** Supports machine-to-machine payments using USDC and other tokens.
- **Cross-Platform Support:** Seamlessly trades on Polymarket, Kalshi, Betfair, Smarkets, Drift, and more.

## Strategic Capabilities
- **5-Minute BTC Market Support:** Specialized strategies for high-frequency Polymarket Bitcoin markets.
- **Whale Tracking & Copy Trading:** Automatically detects and follows "smart money" wallet activity.
- **MEV Protection & Smart Routing:** Ensures optimal execution prices and protection from front-running.
- **Semantic Memory:** Uses LanceDB for long-term reasoning and pattern recognition across trades.

## Repository Link
- [GitHub - alsk1992/CloddsBot](https://github.com/alsk1992/CloddsBot)

## Technical Stack
- **AI Models:** Claude (Main), with support for Google and OpenAI models.
- **Database:** SQLite (local configs), LanceDB (semantic memory), PostgreSQL (trade history).
- **Communication:** WebChat, Telegram, Discord, Slack, Teams, Matrix.
