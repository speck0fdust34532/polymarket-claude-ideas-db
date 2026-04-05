# Kalshi Predict & Profit: Data Pipeline Trading Strategy

A sophisticated side-hustle architecture developed by a Senior Data Engineer (u/stfarm on Reddit) that focuses on finding mathematical edges in raw economic and weather data, rather than relying on LLM sentiment analysis. [1]

## Core Philosophy

Instead of guessing or using AI to interpret news, this strategy builds automated data pipelines to compare Kalshi's market prices against high-confidence statistical baselines. When a significant mathematical edge is detected, the system executes automatically.

## The Two-Bot System

### 1. The Econ Bot (Inflation Trading)
This bot focuses exclusively on CPI and Core PCE contracts on Kalshi.

*   **The Signal:** Scrapes the Cleveland Fed Inflation Nowcast and pulls macroeconomic indicators via the FRED API to establish a highly accurate baseline.
*   **The Logic:** Scans all active Kalshi inflation markets and compares the platform prices against the Nowcast projections.
*   **Execution:** Calculates a probability edge. If the edge and market volume meet predefined thresholds, it ranks the candidates and automatically executes limit orders on the most profitable options.

### 2. The Weather Bot (Ensemble Trading)
This bot continuously scans Kalshi weather markets (high/low temperatures, rain for specific cities) using a heavy, unthrottled data pipeline.

*   **The Signal:** Evaluates a massive 62-member HGEFS hybrid ensemble. This combines 31 traditional GFS members with 31 NOAA AIGEFS (AI-augmented) members.
*   **The Pipeline:** As of December 2025, NOAA made AIGEFS the operational replacement for EAGLE. The bot pulls AIGEFS data directly from the public AWS Open Data Registry (EAGLE/GraphCast S3 bucket). This method is unthrottled, requires no authentication, and is completely free, bypassing standard API rate limits.
*   **The Logic:** Calculates a composite edge score based on:
    *   Bid/ask spread
    *   Market volume
    *   Order book imbalance
    *   Dollar mispricing compared to the 62-member ensemble probability
*   **Execution:** Places small, continuous trades. To prevent correlated bets from ruining the budget if a major weather event hits, it enforces strict exposure limits (e.g., maximum of two open positions per city).

## Risk Management Architecture

Because prediction markets carry inherent risk, the architecture is heavily constrained to ensure steady, calculated growth rather than overnight riches.

*   **Kill Switches:** Both bots have a maximum daily loss parameter. If a session hits that loss limit, the bot halts trading for the rest of the UTC calendar day.
*   **Budget Caps:** Strict maximum deployed capital limits and maximum cost per single trade.
*   **Database Tracking:** Every scan cycle, trade decision, and skip reason is logged into a PostgreSQL database. This allows for continuous backtesting and analysis of why the bots chose to execute or ignore specific trades.

## Why This Strategy Works

1.  **Speed vs. Accuracy:** While HFT bots compete on microsecond latency to capture arbitrage, this system competes on data depth. By processing a 62-member weather ensemble faster than retail traders can check a weather app, it identifies structural mispricing.
2.  **Infrastructure Edge:** Pulling directly from AWS S3 buckets rather than standard weather APIs provides a massive data availability advantage without rate limits.
3.  **Discipline:** The PostgreSQL logging and strict daily kill switches prevent the emotional or algorithmic spirals that often drain automated trading accounts.

---

### References
[1] Reddit r/Kalshi - "Automating a side hustle: How I make money trading economic and weather data on Kalshi" (April 2026)
