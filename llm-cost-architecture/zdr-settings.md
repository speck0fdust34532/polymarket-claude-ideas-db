# Zero-Log / ZDR Settings for LLM Cost Architecture

- **Concept:** Implementing Zero Data Retention (ZDR) policies for sensitive LLM interactions to ensure privacy and security, especially for financial data.
- **How it Works (OpenRouter):**
    - **Training Toggle:** Explicitly turn OFF "Allow training on my data" in OpenRouter `Settings > Privacy`.
    - **Data Policy Header:** Include `data_policy: "zero-retention"` in API calls.
    - **Endpoint Selection:** Target ZDR-compliant endpoints (e.g., those labeled `(ZDR)` or `(No-Log)`).
- **Models:** Claude Opus, GPT-4o, DeepSeek V3.2 (ZDR-compliant endpoints).
- **Durability:** HIGH (Essential for maintaining data privacy and regulatory compliance).
- **Source:** [OpenRouter Privacy Docs](https://openrouter.ai/docs/privacy)
