# How to Connect Claude to TradingView (MCP Integration)

**Date:** April 2, 2026  
**Source:** [X Article by @Tradesdontlie](https://x.com/i/article/2039065099554430976)  
**GitHub Repo:** [tradesdontlie/tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp)

---

## Executive Summary

TradingView does not offer a public API, making it difficult to integrate with AI coding agents directly. However, because the TradingView Desktop app is built on Electron (which runs Chromium), it contains a hidden Chrome DevTools Protocol (CDP) debugging interface. 

By launching TradingView Desktop with a specific flag (`--remote-debugging-port=9222`), developers can expose this interface. The `tradingview-mcp` project leverages this to create a Model Context Protocol (MCP) server with 78 tools. This allows Claude Code (or any MCP-compatible LLM) to directly read chart data, interact with indicators, and write/compile Pine Script natively within the user's local TradingView instance.

---

## Core Architecture & Security

### The Mechanism
The solution consists of three local components:
1.  **Claude Code:** The AI agent interface.
2.  **Node.js MCP Server:** Translates Claude's intents into CDP commands.
3.  **TradingView Desktop:** The local application running with CDP enabled.

### Security Posture
*   **100% Local:** Nothing touches TradingView's servers or third-party APIs. All data flows directly from the local app to the local MCP server.
*   **Opt-In Access:** The CDP port is closed by default and must be explicitly opened by the user via the command line.
*   **Terms of Service:** The tool surfaces data the user already has access to as a subscriber. It is an automation layer over the local client, not a scraping tool or backend API bypass.

---

## Key Capabilities & Tools

The MCP server provides 78 distinct tools for Claude to interact with TradingView. These fall into several primary categories:

### 1. Chart Data Extraction
Claude can read the exact data currently displayed on the chart, including:
*   Real-time OHLC and volume data.
*   Current symbol, timeframe, and indicator metadata.
*   Up to 500 price bars or a compact summary.
*   Data window values and order book depth.

### 2. Pine Script Drawings & Visuals Extraction
This is the most powerful feature. Claude can read the structured data of what indicators actually draw on the screen, even for protected indicators.
*   Reads `line.new()`, `label.new()`, `table.new()`, and `box.new()` outputs.
*   Can answer queries like: *"What levels is my NY Sessions indicator showing?"* or *"What does the session stats table say?"*

### 3. AI-in-the-Loop Pine Script Development
Claude can write Pine Script, inject it into the TradingView editor, compile it, read the resulting errors, fix them, and recompile. This creates a closed-loop development environment where the AI can verify its own code against live chart data.

### 4. CLI Automation & Streaming
The entire toolset ships as a `tv` CLI binary that outputs JSON.
*   **Streaming:** Commands like `tv stream all` can stream real-time JSONL data from a multi-pane layout (e.g., NQ, ES, YM, GC) directly into Python, Node, or shell scripts.
*   **Automation:** Users can script repetitive tasks like taking screenshots, switching layouts, or batch-configuring indicators.

---

## Setup Instructions

The setup is designed to be handled entirely by Claude.

1.  **Prerequisites:** Node.js 18+ and TradingView Desktop with a valid subscription.
2.  **Launch TradingView:** Open the desktop app with the `--remote-debugging-port=9222` flag.
3.  **Claude Prompt:**
    > *"Install the TradingView MCP server. Clone https://github.com/tradesdontlie/tradingview-mcp, run npm install, add to my MCP config at ~/.claude/.mcp.json, and launch TradingView with the debug port."*
4.  **Verification:**
    > *"Use tv_health_check to confirm TradingView is connected."*

---

## Strategic Value for Prediction Markets & Trading

While built for TradingView, this integration bridges the gap between high-level AI reasoning and low-level chart execution. 

For traders using Polymarket or Kalshi, this allows Claude to:
1.  **Analyze Correlated Assets:** Claude can read real-time chart data for SPY or BTC on TradingView and use that context to execute trades on Polymarket macro or crypto contracts.
2.  **Backtest AI Logic:** Traders can write custom Pine Script indicators that simulate prediction market logic, and have Claude verify the math against historical chart data.
3.  **Automate Context Gathering:** Instead of taking screenshots of charts for Claude to analyze visually, Claude can pull the exact structured data from the chart, leading to higher precision and lower token costs.
