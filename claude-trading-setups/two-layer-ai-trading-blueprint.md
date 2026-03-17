# Two-Layer AI Trading Blueprint: Brain and Hands (2026)

## Overview
A robust, unattended system for trading Polymarket and Kalshi requires separating high-level strategy from low-level execution. This architecture, known as the "Brain and Hands" model, ensures reliability, crash-resistance, and clear accountability.

## Architecture: The Two Layers

### 1. The Brain (Supervisory AI)
The "Brain" (typically a high-reasoning model like Claude 4.5) acts as the strategist. It does not execute trades directly but manages the overall logic.
- **Responsibilities:** Writes structured task specifications, analyzes execution logs, and decides on strategy refinements.
- **Communication:** Writes tasks into a shared workspace folder (e.g., `tasks/new/`) and reads results from `results/`.
- **Constraint:** Never touches production APIs or handles direct execution.

### 2. The Hands (Execution AI)
The "Hands" (typically a faster, more specialized agent or local model like Ollama) handles the mechanical work.
- **Responsibilities:** Picks up tasks autonomously, executes them using explicit tool constraints (e.g., calling Polymarket API), and writes outputs to `results/`.
- **Communication:** Atomically moves tasks from `tasks/new/` to `tasks/in_progress/` to claim them.
- **Constraint:** Only executes exactly what is specified in the task file.

## Technical Protocol: The Shared Workspace
The two layers communicate via a shared directory structure that acts as a communication bus:
- `tasks/new/`: Brain writes new task JSON files here.
- `tasks/in_progress/`: Hands claim tasks atomically (renaming files).
- `tasks/done/` & `tasks/failed/`: Archive for completed or failed operations.
- `brain_inbox/`: Hands write specific questions or blocks for the Brain to review.
- `state/`: JSON files maintaining the current system state for crash recovery.

## Prediction Market Logic
- **Arbitrage Math Layer:** Uses linear programming to check for inconsistencies (e.g., sum of probabilities ≠ 1 in categorical markets).
- **Adapter Pattern:** Separate adapters for Polymarket and Kalshi to handle different API formats and data structures.
- **Fee Incorporation:** All profit calculations must explicitly include gas fees, platform spreads, and execution slippage.

## Reference
- [Two-Layer AI System Blueprint - DevGenius](https://blog.devgenius.io/just-built-a-two-layer-ai-system-that-trades-polymarket-and-kalshi-while-i-sleep-heres-the-aa59ead275f6)
