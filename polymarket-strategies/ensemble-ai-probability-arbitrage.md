# Ensemble AI Probability Arbitrage

## Strategy Overview
Instead of relying on a single AI model's prediction, this strategy uses an ensemble of multiple LLMs (GPT-4, Claude 4.5, specialized models) to reach a consensus probability. This mitigates the biases and limitations of individual models.

## How it Works
1. **Input Generation:** Feed the same market question and context to multiple AI models.
2. **Specialized Roles:**
   - **GPT-4:** General trend and headline analysis.
   - **Claude 4.5:** Source credibility evaluation and deep reasoning.
   - **Specialized Model:** Trained on historical Polymarket/Kalshi data for pattern recognition.
3. **Consensus Mechanism:** Aggregate the probabilities using a weighted average or Bayesian aggregation to reach a final "Ensemble Consensus."
4. **Execution:** Compare the ensemble consensus to the market price. If the discrepancy (edge) is significant (e.g., >5%), execute the trade.

## Key Advantages
- **Reduces Individual Model Bias:** Different models have different strengths and weaknesses.
- **Improved Calibration:** Ensemble models often show better probability calibration than single models.
- **Increased Confidence:** High agreement across multiple models provides higher confidence in the trade.

## Reference
- [4 Polymarket Strategies Bots Actually Profit From in 2026 - Medium](https://medium.com/illumination/beyond-simple-arbitrage-4-polymarket-strategies-bots-actually-profit-from-in-2026-ddacc92c5b4f)
