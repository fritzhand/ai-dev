---
summary: Choose model capability and reasoning effort from task difficulty, evidence, latency, and cost instead of habit.
requires: [01-01-models-predict-text]
infographics: []
---

# Pick a model for the job

**Requires:** A real task, a useful example input, and an observable check for a good result.

**Done when:** You have selected a starting model and effort level, named the trade-off, and recorded what evidence would make you change either choice.

## Step 0 — Check the ground

Open the provider's current model guide before naming a model. Product names, availability, prices, context limits, and supported effort settings change. This lesson teaches the decision, not a permanent model list.

## Steps

1. Separate two controls:

   - **Model choice** selects a capability, speed, and price profile.
   - **Reasoning effort** changes how much work a supporting model is asked to spend on a request.

   A higher effort setting does not turn one model into another, and not every surface exposes the same settings.

2. Classify the task:

   | Task shape | Sensible starting point |
   | --- | --- |
   | Reformatting supplied text with an exact schema | Fast, economical option; low extra effort |
   | Routine code change with tests and bounded files | Balanced option; moderate effort only if needed |
   | Architecture, difficult debugging, or a risky migration review | Stronger capability; enough effort to compare alternatives and verify |
   | High-volume production call | The least expensive configuration that passes repeatable evaluations |

3. Name the constraints: acceptable latency, maximum cost, required tools, data type, output shape, and consequence of an error.

4. Run the same representative task on the starting choice and one plausible alternative. Compare pass/fail evidence, not writing style.

5. Prefer the cheaper or faster configuration when both pass. Move up when the measured gain matters.

6. Ask for a recommendation that leaves the decision visible:

   ```prompt
   Context: My task is [task]. A passing result must [checks]. The consequence
   of an error is [impact]. My latency and cost constraints are [constraints].
   Available model and effort choices are [copy the current choices].

   Recommend a starting configuration and one comparison configuration.
   Explain the trade-off in capability, latency, and likely usage. Do not claim
   a price or feature that is absent from the supplied current documentation.
   Provide a small comparison test and a rule for choosing the winner.
   ```

## Approval gate

A human confirms the current model documentation, the cost boundary, and the evaluation before changing a production default. “Use the strongest model” is not approval.

## Verify

Run at least one representative case through both configurations. You pass when the recorded winner satisfies the checks and you can state why the other choice lost.

For current OpenAI choices, use the dated links in [Sources](../../reference/sources.md#openai-models-context-and-api-use).

## Save point

Record the provider, exact model identifier or pinned alias, effort setting if any, check date, evaluation cases, and decision. Keep pricing in a dated operational note rather than copying it into long-lived prompts.

## If it fails

- Both choices fail: fix the input, prompt, tools, or evaluation before spending more compute.
- Results vary between runs: add more representative cases and define acceptable variation.
- The surface hides model details: record the exposed choice exactly and do not assume it maps to an API model name.
- Cost is unclear: inspect the provider's current usage and pricing pages before enabling the workflow.
