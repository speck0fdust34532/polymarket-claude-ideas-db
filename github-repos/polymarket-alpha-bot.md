# Alphapoly: Polymarket Alpha Detection Platform

## Overview
[Alphapoly](https://github.com/chainstacklabs/polymarket-alpha-bot) is a sophisticated alpha detection and position management platform for Polymarket. It leverages a combination of predefined rules and Large Language Model (LLM) decision-making to identify "covering portfolios" across correlated prediction markets. By detecting logical relationships between markets, the system identifies hedging and arbitrage opportunities that are often missed by simple manual analysis.

## How It Works
The platform operates through a structured multi-stage pipeline:

1.  **Market Grouping:** Fetches active markets from Polymarket and groups them by event (e.g., "U.S. Presidential Election").
2.  **Implication Extraction (LLM):** Uses an LLM (via OpenRouter) to extract logical relationships between these groups (e.g., "If Candidate A wins the Presidency, Party B is likely to win the Senate").
3.  **Individual Validation (LLM):** Validates these high-level implications at the individual contract level to ensure the logic holds for specific betting outcomes.
4.  **Portfolio Computation:** Calculates the total cost and expected profit for these validated pairs using live market prices.
5.  **Position Tracking:** Provides a dashboard to enter detected pairs when profit opportunities exist and tracks the performance of open positions.

## Key Features
- **LLM-Driven Analysis:** Automates the complex task of finding correlations between disparate markets using advanced reasoning.
- **Unified Dashboard:** A smooth React-based UI for monitoring alpha opportunities and managing active trades.
- **Agentic Coding Support:** Fully configured for AI coding agents (like Claude Code) with specialized "skills" for pipeline management, trading, and experimentation.
- **On-Chain Experiments:** Includes experimental support for on-chain OTC trading, P2P transfers, and atomic escrow without relying on the Polymarket CLOB.
- **Cost Visibility:** Features built-in LLM pipeline visibility, including model selection and cost warnings to manage API expenses.

## Why It's Useful for Trading
- **Edge Detection:** Finds "alpha" by identifying mispriced correlations that other traders might overlook.
- **Risk Management:** Focuses on "covering portfolios" (hedged positions), which can reduce the overall risk profile of a trade compared to directional betting.
- **Automation:** Reduces the manual effort required to scan thousands of Polymarket contracts for logical inconsistencies or arbitrage.
- **Customizable:** Users can define their own rules and use different LLMs to tailor the bot's detection logic to specific market niches.

## How to Use
1.  **Setup Environment:** Copy `.env.example` to `.env` and add your OpenRouter API key and an RPC node (e.g., from Chainstack).
2.  **Install Dependencies:** Use `make install` or manually sync the Python backend (`uv sync`) and install the frontend (`npm install`).
3.  **Run Servers:** Start the backend (Uvicorn) and frontend (Next.js) using `make dev`.
4.  **Execute Pipeline:** Run the alpha detection pipeline via the UI or `make pipeline`.
5.  **Trade:** Monitor the dashboard for "Portfolios" with positive expected value and enter positions directly.

## References
- [GitHub: chainstacklabs/polymarket-alpha-bot](https://github.com/chainstacklabs/polymarket-alpha-bot)
- [Chainstack Blog: Polymarket Alpha Detection](https://chainstack.com/blog/)
