# PolyCue Automated Trading Strategy

## Overview
**PolyCue** is a systematic trading framework for Polymarket that allocates capital across four core bot-driven strategies based on risk profile (Conservative, Balanced, Aggressive).

## Core Strategies
1. **Automated Market Making (AMM)**:
   - **Mechanism**: Provides liquidity to both sides of a market to earn the spread.
   - **Operation**: Bots monitor orderbook depth, adjusting orders every 30 seconds.
   - **Risk Management**: Withdraws liquidity before major news events to avoid "toxic flow."
   - **Allocation**: 20% in Conservative profiles.

2. **AI-Powered Probability Arbitrage**:
   - **Mechanism**: Uses ensemble AI models (Claude, GPT, etc.) to analyze news faster than the market prices it in.
   - **Operation**: Compares AI-computed probabilities against market prices to identify mispricings.
   - **Performance**: 65–75% win rate.
   - **Allocation**: 30–50% in Balanced/Aggressive profiles.

3. **Correlation and Logical Arbitrage**:
   - **Mechanism**: Exploits inconsistencies between related markets (e.g., "Team A wins" vs "Conference B wins").
   - **Operation**: Continuous correlation analysis maps relationships and flags violations for multi-leg trades.
   - **Performance**: 70–80% win rate.

4. **High-Frequency Momentum Trading**:
   - **Mechanism**: Detects and rides short-term trends triggered by breaking news.
   - **Operation**: Monitors orderbook changes every 100ms and executes when multiple signals align.
   - **Performance**: 60–70% win rate (High Volatility).
   - **Allocation**: 50% in Aggressive profiles.

## Reference
- [4 Polymarket Strategies Bots Actually Profit From in 2026 - Medium](https://medium.com/illumination/beyond-simple-arbitrage-4-polymarket-strategies-bots-actually-profit-from-in-2026-ddacc92c5b4f)
