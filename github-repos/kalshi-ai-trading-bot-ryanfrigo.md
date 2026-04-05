# Kalshi AI Trading Bot (ryanfrigo)

A highly advanced, open-source multi-agent trading system designed specifically for Kalshi prediction markets. It leverages a five-model LLM ensemble via OpenRouter to debate and execute trades autonomously. [1]

## Core Architecture

The bot operates on a continuous four-stage pipeline: Ingest, Decide, Execute, and Track.

### 1. Ingest
Pulls market data via the Kalshi Events API (including nested markets), order book snapshots, and RSS news feeds to supplement the signal.

### 2. Decide (Multi-Model Ensemble)
The core innovation is a five-model debate system. Each model analyzes the data from a distinct assigned perspective, returning a probability estimate and a confidence score.

*   **Lead Analyst (30% weight):** Claude Sonnet 4.5
*   **Forecaster (30% weight):** Gemini 3.1 Pro
*   **Risk Manager (20% weight):** GPT-5.4
*   **Bull Researcher (10% weight):** DeepSeek V3.2
*   **Bear Researcher (10% weight):** Grok 4.1 Fast

*Consensus Gating:* If the weighted confidence falls below a configurable threshold (default: 0.45), the trade is skipped. If models disagree significantly, position size is automatically reduced. All models are routed through OpenRouter for a single API key setup.

### 3. Execute
Qualifying trades are sized using a fractional Kelly Criterion (0.25x for volatility control) and routed through Kalshi's order API.

### 4. Track
Every decision, AI reasoning log, and trade metric is written to a local SQLite database. A real-time Streamlit dashboard surfaces cumulative P&L, win rate, Sharpe ratio, and per-strategy breakdowns.

## Key Strategies & Guardrails

The repository author notes that trading without category enforcement and risk guardrails leads to significant losses (especially over-allocating to economic events with no real edge). The bot ships with discipline systems enabled by default.

### The "Safe Compounder" Strategy
The most consistently profitable edge found by the author was **NCAAB NO-side** trading (74% win rate, +10% ROI). The bot includes a "Safe Compounder" mode that executes a conservative, math-only, NO-side edge-based strategy without requiring AI intervention.

### Risk Management Features
*   Fractional Kelly position sizing
*   Hard daily loss limit (stops trading at 10% drawdown)
*   Max drawdown circuit breaker (halts at 15% portfolio drawdown)
*   Sector concentration cap (max 30% in any single category)
*   Category scoring (hard-blocks categories with proven negative edge)
*   Daily AI cost budget (stops spending when API costs hit the limit, default $10/day)

### Dynamic Exits
*   Trailing take-profit at 20% gain
*   Stop-loss at 15% per position
*   Confidence-decay exits when AI conviction drops
*   Time-based exits (10-day max hold)

## Why This Repo is Valuable

It represents a production-ready implementation of the "Multi-Agent Debate" concept for prediction markets. By forcing five frontier models to reach a consensus before risking capital, it significantly reduces the hallucination and overconfidence risks inherent in single-LLM trading bots. The inclusion of a paper-trading mode and a comprehensive Streamlit dashboard makes it highly accessible for research and strategy development.

---

### References
[1] GitHub - ryanfrigo/kalshi-ai-trading-bot (April 2026)
