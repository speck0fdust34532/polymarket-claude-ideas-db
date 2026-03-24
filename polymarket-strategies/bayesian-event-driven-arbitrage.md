# Bayesian Event-Driven Arbitrage: Rust + Claude Code Architecture (2026)

## Overview
This strategy leverages a sophisticated, modular architecture for real-time arbitrage detection and execution across Polymarket and Kalshi. It uses a Bayesian engine for probability modeling and a high-performance Rust backend for execution.

## The Architecture
The system is built as a series of decoupled components that communicate through an event bus:
- **Event Bus:** Market data from Polymarket and Kalshi flows in as events.
- **Market Graph:** Maintains a real-time graph of all open markets and their current probabilities.
- **Bayesian Engine:** Updates probability models as new data arrives, identifying potential mispricing.
- **Strategy Agents:** Independent agents that look for specific arbitrage opportunities or inefficiencies.
- **Execution Layer:** A high-performance Rust backend that executes trades instantly when an edge is detected.

## The Claude Code Integration
Traders are using **Claude Code** to build plugins and extensions for this system. This allows for:
- **AI-Assisted Analysis:** Claude can be used to interpret complex event data (e.g., a breaking news story) and suggest updates to the Bayesian models.
- **Rapid Prototyping:** New strategy agents can be quickly drafted in natural language and implemented by Claude Code.
- **Monitoring & Control:** A Next.js-based live control panel provides real-time monitoring and allows the user to adjust parameters on the fly.

## Strategic Edge
The primary edge comes from the **speed** of the Rust execution layer combined with the **intelligence** of the Bayesian models. By separating the "Brain" (probability modeling) from the "Hands" (execution), the system can handle complex, multi-venue arbitrage that simpler bots miss.

## Implementation Details
- **Backend:** Rust (for event system, execution, and logic).
- **Frontend:** Next.js (for monitoring and control).
- **Communication:** WebSockets for real-time data streaming.
- **Modularity:** Bayesian engine, strategy agents, and execution layer are all independent.

## Reference
- [Reddit: I made a system that trades arbitrage on Polymarket and Kalshi](https://www.reddit.com/r/ClaudeCode/comments/1s0cnxy/i_made_a_system_that_trades_arbitrage_on/)
- [GitHub: Bayesian Trading Engine](https://github.com/8rxp/bayesian-trading-engine)
