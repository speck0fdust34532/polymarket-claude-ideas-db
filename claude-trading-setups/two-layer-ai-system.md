# Two-Layer AI System for Prediction Market Trading

## System Overview
A two-layer AI system separates the high-level research and strategy generation from the low-level execution and monitoring. This architecture is designed for autonomous operation on Polymarket and Kalshi with minimal human intervention.

## Layer 1: Strategy & Research (The Brain)
- **Model:** Advanced LLM like Claude 4.5 or 4.6.
- **Function:** Analyzes broad market news, social sentiment (Reddit, X), and historical data.
- **Output:** Generates high-probability trade theses and sets parameters for execution (e.g., target price, confidence level).

## Layer 2: Execution & Monitoring (The Hands)
- **Model:** Specialized, low-latency AI agents or rule-based bots.
- **Function:** Monitors real-time order books, detects price discrepancies (arbitrage), and executes trades based on Layer 1 parameters.
- **Output:** Rapid trade execution and real-time P&L monitoring.

## Key Advantages
- **Autonomous Operation:** Can run unattended for days while paper trading or live trading.
- **Scalability:** The same brain can manage multiple execution agents across different markets.
- **Efficiency:** Separating reasoning from execution reduces latency for critical trade entries.

## Reference
- [Just Built A Two-Layer AI System That Trades Polymarket and Kalshi While I Sleep - DevGenius](https://blog.devgenius.io/just-built-a-two-layer-ai-system-that-trades-polymarket-and-kalshi-while-i-sleep-heres-the-aa59ead275f6)
