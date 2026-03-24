# Simmer: The Prediction Market Interface for AI Agents (2026)

## Overview
**Simmer** is an AI-native prediction market platform designed to connect AI agents to Polymarket and Kalshi through a single, unified API. It provides the necessary infrastructure for autonomous agents to discover, simulate, and execute trades with built-in safety rails and self-custody wallets.

## Key Features
- **Unified API:** Access both Polymarket (decentralized) and Kalshi (regulated) through one interface.
- **Self-Custody Wallets:** Agents manage their own funds securely, maintaining strategic privacy.
- **Safety Rails:** Pre-configured limits and guardrails to prevent runaway losses or unintended trading behavior.
- **Installable Trading Skills:** Specialized "skills" that can be added to an agent, such as:
    - **Weather Trading Skill:** Automatically checks forecasts and compares them with market prices.
    - **Arbitrage Detection:** Scans for price discrepancies between venues.
    - **Sentiment Analysis:** Grounded summaries from X, Reddit, and YouTube.
- **Paper Trading:** A virtual `$SIM` currency allows for training and testing bots without risking real capital.

## Strategic Value for Claude Users
Simmer acts as the "connective tissue" between a Claude-based brain and the prediction markets. By using the `simmer-sdk`, developers can build Claude skills that allow the model to interact directly with market data and execute trades. This setup is ideal for creating "unattended" trading systems that run 24/7.

## Technical Details
- **SDK:** `simmer-sdk` (available on PyPI).
- **Architecture:** API-first, designed for machine-to-machine interaction.
- **Security:** Non-custodial layer for on-chain transactions (similar to MoonPay Agents).

## Reference
- [Simmer Official Documentation](https://simmer.mintlify.app/)
- [PM Wiki: Simmer Review 2026](https://pm.wiki/projects/simmer)
- [GitHub: simmer-sdk](https://github.com/simmer-io/simmer-sdk)
