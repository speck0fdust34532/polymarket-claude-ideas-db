# DeFi Yield Farming, MEV Bots & Liquidity Provision (2026)

## Overview
Decentralized finance (DeFi) continues to offer systematic, automatable yield opportunities in 2026. The three primary strategies — yield farming, MEV extraction, and liquidity provision — can all be executed by AI agents with minimal human intervention.

## Strategy 1: Autonomous BTC Yield Farming Agent
The [btc-yield-bot](https://github.com/bob-collective/btc-yield-bot) is an open-source agent that farms DeFi yields on Base using USDC (funded from BTC via the BOB Gateway), then automatically sweeps profits back to a BTC wallet. This creates a "set and forget" BTC yield strategy that compounds in the background.

The agent handles deposit, claim, and compound operations automatically, interacting with protocols like Kamino, MarginFi, and Solend on Solana, or Aave and Compound on EVM chains.

**Key Tools:**
- [bob-collective/btc-yield-bot](https://github.com/bob-collective/btc-yield-bot) — BTC-native yield farming on Base.
- [nirholas/defi-agents](https://github.com/nirholas/defi-agents) — DeFi agent definitions JSON API with MCP compatibility.
- [OpenClaw](https://openclaw.ai) — Yield farming and liquidity provision automation via installable skills.

## Strategy 2: MEV Bot Strategies
Maximal Extractable Value (MEV) bots capture profit by reordering, inserting, or censoring transactions within a block. Common strategies include sandwich attacks, liquidation bots, and arbitrage between DEXs.

In 2026, MEV on Solana has become particularly competitive due to the chain's high throughput. Tools like **Jito Bundles** (Solana) and **Flashbots** (Ethereum) provide infrastructure for submitting MEV transactions with priority.

CloddsBot's architecture includes MEV protection and smart routing, which can be repurposed to *extract* MEV rather than just defend against it.

## Strategy 3: Concentrated Liquidity Provision (Uniswap v3 / Orca)
Providing liquidity in concentrated ranges on Uniswap v3 (Ethereum) or Orca (Solana) can generate significantly higher fee income than traditional AMM pools, but requires active range management. AI agents can automate this by:
- Monitoring the current price relative to the LP's range.
- Rebalancing the position when the price moves out of range.
- Selecting optimal fee tiers based on historical volatility.

**Claude Integration:** Claude can be used to analyze on-chain volatility data and recommend optimal LP ranges, reducing impermanent loss while maximizing fee capture.

## References
- [GitHub: btc-yield-bot](https://github.com/bob-collective/btc-yield-bot)
- [GitHub: nirholas/defi-agents](https://github.com/nirholas/defi-agents)
- [OpenClaw: Yield Farming Automation](https://aurpay.net/aurspace/use-openclaw-moltbot-clawdbot-for-crypto-traders-enthusiasts/)
