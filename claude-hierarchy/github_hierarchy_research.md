# GitHub Research: Claude Agent Hierarchy & Multi-Agent Orchestrator Designs

*Researched via GitHub CLI on 2026-03-12. All repos verified live.*

---

## Overview

This document catalogs the most relevant GitHub repositories implementing Claude-based multi-agent hierarchies, orchestrator-worker patterns, and Polymarket/trading agent architectures. These designs inform the architecture blueprints in the Opus analysis.

---

## Top Repositories by Category

### Category 1: Claude Multi-Agent Orchestration Frameworks

| Stars | Repo | Description |
|-------|------|-------------|
| 82 | [bobmatnyc/claude-mpm](https://github.com/bobmatnyc/claude-mpm) | Claude Multi-Agent Project Manager — subprocess orchestration layer with 60+ services, OAuth, session management, real-time dashboard |
| 40 | [yzyydev/claude_code_sub_agents](https://github.com/yzyydev/claude_code_sub_agents) | Infinite agentic loop orchestrator — wave-based parallel sub-agent deployment |
| 30 | [bobmatnyc/claude-multiagent-pm](https://github.com/bobmatnyc/claude-multiagent-pm) | Claude PM Framework — LangGraph-based orchestration with unlimited custom agents |
| 28 | [Kuneosu/Claude-Multi-Agent-System](https://github.com/Kuneosu/Claude-Multi-Agent-System) | 9-agent MAS with orchestrator → specialized workers, file-based IPC, web dashboard |
| 13 | [is0383kk/claude-multi-agent-api-server](https://github.com/is0383kk/claude-multi-agent-api-server) | Production-ready FastAPI service for concurrent Claude Agent session management |
| 10 | [xiaolai/claude-multi-agents](https://github.com/xiaolai/claude-multi-agents) | Shell-based personality switching — 4 specialized Claude roles (Architect, Analyst, Coder, Auditor) |
| 9 | [ahmedibrahim085/Claude-Multi-Agent-Research-System-Skill](https://github.com/ahmedibrahim085/Claude-Multi-Agent-Research-System-Skill) | Multi-agent research system inspired by Anthropic's patterns |
| 3 | [dasien/ClaudeMultiAgentTemplate](https://github.com/dasien/ClaudeMultiAgentTemplate) | 17-agent template with task queue, skills system, GUI |

### Category 2: Claude Agent SDK & Core Infrastructure

| Stars | Repo | Description |
|-------|------|-------------|
| 5,375 | [anthropics/claude-agent-sdk-python](https://github.com/anthropics/claude-agent-sdk-python) | Official Anthropic Python SDK for Claude Agent |
| 1,681 | [anthropics/claude-agent-sdk-demos](https://github.com/anthropics/claude-agent-sdk-demos) | Official demo patterns for Claude Agent SDK |
| 1,163 | [zed-industries/claude-agent-acp](https://github.com/zed-industries/claude-agent-acp) | ACP client integration for Claude Agent SDK |
| 681 | [AFK-surf/open-agent](https://github.com/AFK-surf/open-agent) | Open-source alternative to Claude Agent SDK |
| 453 | [browserbase/skills](https://github.com/browserbase/skills) | Claude Agent SDK with web browsing tool |
| 311 | [ben-vargas/ai-sdk-provider-claude-code](https://github.com/ben-vargas/ai-sdk-provider-claude-code) | Vercel AI SDK community provider for Claude Agent |
| 196 | [ErlichLiu/claude-agent-sdk-master](https://github.com/ErlichLiu/claude-agent-sdk-master) | Tutorial: basics to advanced Claude Agent SDK implementations |

### Category 3: Polymarket Trading Agents

| Stars | Repo | Description |
|-------|------|-------------|
| 125 | [llSourcell/Poly-Trader](https://github.com/llSourcell/Poly-Trader) | Siraj Raval's autonomous Polymarket agent — Research → Decision → Execution modules with Kelly Criterion sizing |
| 40 | [Myttyyytytyyttt/Polyagent](https://github.com/Myttyyytytyyttt/Polyagent) | Autonomous Polymarket trading agent |
| 36 | [Polymarket/agent-skills](https://github.com/Polymarket/agent-skills) | Official Polymarket skill for Claude agents — authentication, order placement, market data, WebSocket |
| 0 | [clawDANA/polypaper](https://github.com/clawDANA/polypaper) | Experimental Polymarket Agent Swarm (note: "clawDANA" — possible Clawdbot reference) |

### Category 4: Specialized Sub-Agent Collections

| Stars | Repo | Description |
|-------|------|-------------|
| 36 | [mylee04/claude-code-subagents](https://github.com/mylee04/claude-code-subagents) | 31 specialist agents with gamification — Python, DevOps, Security, Data, etc. |
| 0 | [maslennikov-ig/claude-orchestrator-agent-system](https://github.com/maslennikov-ig/claude-orchestrator-agent-system) | 33 agents (orchestrators + workers + research), 18 skills, 8 slash commands, Context7 integration |

---

## Key Architecture Patterns Observed

### Pattern 1: Orchestrator → Worker Hierarchy (Most Common)

Used by: `Kuneosu/Claude-Multi-Agent-System`, `bobmatnyc/claude-mpm`, `maslennikov-ig/claude-orchestrator-agent-system`

```
Orchestrator (Claude Opus / high-capability model)
    ├── Requirements Analyst
    ├── Architect / Planner
    ├── Implementer / Coder
    ├── Reviewer / Auditor
    ├── Tester / QA
    └── Documenter
```

**Key design principles:**
- Orchestrator holds the high-level goal and delegates subtasks
- Workers are specialized, stateless, and context-limited
- File-based IPC or message bus for inter-agent communication
- Each worker can be a cheaper model (Haiku, Sonnet) while orchestrator is Opus

**Relevant to trading:** Replace dev roles with: Research Analyst, Data Fetcher, Thesis Generator, Risk Manager, Execution Planner, Tax/Compliance Tracker.

---

### Pattern 2: Wave-Based Parallel Deployment

Used by: `yzyydev/claude_code_sub_agents`

```
Orchestrator spawns Wave 1 (N agents in parallel)
    → Collect results, summarize
    → Spawn Wave 2 with refined context
    → Repeat until task complete
```

**Key design principles:**
- Manages context window limits via progressive summarization
- Parallel agents prevent duplicate outputs via coordination
- "Infinite" scalability for large research tasks

**Relevant to trading:** Scan 500 stocks in parallel waves, each agent analyzing a sector, then Orchestrator synthesizes the best opportunities.

---

### Pattern 3: Personality / Role Switching via CLAUDE.md

Used by: `xiaolai/claude-multi-agents`

```
~/.claude/
    architect.md    → Wayne (strategic)
    analyst.md      → Selina (research)
    coder.md        → Shirley (execution)
    auditor.md      → Dylon (risk review)
```

Shell functions copy the appropriate personality file to `./CLAUDE.md` before launching Claude Code. Simple, no infrastructure needed.

**Relevant to trading:** Create role files for: `strategist.md` (macro thesis), `researcher.md` (data analysis), `executor.md` (trade planning), `risk_manager.md` (position sizing, stop losses).

---

### Pattern 4: Skills-Based Progressive Disclosure

Used by: `Polymarket/agent-skills`, `dasien/ClaudeMultiAgentTemplate`

```
SKILL.md (200 lines) → loaded first, covers 80% of tasks
Reference files (1,700 lines total) → loaded on demand
```

**Key design principles:**
- Keeps initial context small (saves tokens)
- Deep reference material available when needed
- Modular: add/remove skills without touching core agent

**Relevant to trading:** Create skills for: `polygon-io.md`, `kalshi-api.md`, `polymarket-api.md`, `options-greeks.md`, `macro-calendar.md`. Load only what's needed per session.

---

### Pattern 5: Poly-Trader's Research → Decision → Execution Pipeline

Used by: `llSourcell/Poly-Trader`

```
Research Module
    → Scrapes news, social sentiment, market data
    → Feeds structured summary to Decision Module

Decision Module
    → Evaluates edge percentage
    → Kelly Criterion bet sizing
    → Risk/bankroll management

Execution Module
    → Connects to Polymarket via official SDK
    → Places trades with verification
    → Safety measures and error handling
```

**This is the most directly relevant architecture for a solo trader using Claude.**

---

## Notable Observations for Trading Architecture

1. **Model tiering is standard practice.** All major frameworks use a high-capability model as orchestrator (Opus) and cheaper models (Haiku, Sonnet) as workers. This directly supports the user's zero-log Opus / cheap-worker philosophy.

2. **File-based IPC is simple and effective.** The Kuneosu MAS uses signal files for inter-agent communication — no complex message bus needed. Agents write to `/tmp/signals/` and the orchestrator polls.

3. **CLAUDE.md personality switching** (xiaolai pattern) is the simplest possible multi-agent setup — no code, just shell aliases. Perfect for a solo trader who wants different "modes."

4. **Skills-based progressive disclosure** (Polymarket/agent-skills) is the most token-efficient pattern. Load only the APIs and data sources relevant to the current task.

5. **The `clawDANA/polypaper` repo** ("Experimental Polymarket Agent Swarm") uses the name "clawDANA" — possibly a reference to the "Clawdbot" community. Worth monitoring.

6. **maslennikov-ig's system** includes a "Behavioral Operating System" concept — predictable agent behavior with fallback strategies and emergency protocols. This is critical for trading where unexpected behavior = financial loss.

---

## Raw GitHub Search Queries Used

```bash
gh search repos "claude multi-agent"
gh search repos "claude orchestrator agent"
gh search repos "claude code subagents"
gh search repos "polymarket agents"
gh search repos "polymarket bot"
gh search repos "claude agent sdk"
```

---

*All data collected 2026-03-12. Star counts current as of research date.*
