---
summary: Distinguish training, weights, fine-tuning, and alignment without treating a model as a searchable document store.
requires: [01-01-models-predict-text]
infographics: [how-a-model-gets-made, what-weights-actually-means, the-loops-that-make-models-improve]
---

# How models are made

![A representative four-stage path moves from prepared data through pre-training, post-training, and evaluation.](/infographics/how-a-model-gets-made.webp)

![Training adjusts numerical weights, which are then loaded to calculate outputs, with open-weight and hosted access compared.](/infographics/what-weights-actually-means.webp)

![Four feedback loops use people, model critiques, verifiable checks, and filtered synthetic examples.](/infographics/the-loops-that-make-models-improve.webp)

**Requires:** The distinction between a plausible model output and sourced truth from [the previous lesson](01-01-models-predict-text.md).

**Done when:** You can place pretraining, weights, post-training, alignment, and fine-tuning in the right part of the model lifecycle and explain what none of them guarantees.

## Step 0 — Check the ground

Write down the claim you are trying to evaluate. Stop if the question is really “Does this answer contain current facts?” Model training history cannot answer that; you still need a source check.

## Steps

1. Use this simplified lifecycle:

   | Stage | What changes | What it does not guarantee |
   | --- | --- | --- |
   | Pretraining | The model learns statistical patterns from training material. | A current, attributable answer to every question. |
   | Weights | Numerical parameters are adjusted during training and used to produce outputs. | A row-by-row copy of the original material that you can query like a database. |
   | Post-training and alignment | Training and feedback shape instruction-following, safety, and preferred behaviour. | That every output is correct or suitable for your situation. |
   | Fine-tuning | Additional examples shape recurring behaviour for a defined task. | Live access to changing documents or automatic factual accuracy. |

2. Separate **model knowledge** from **working context**. Training influences the model before your request. Context is the material available during this request. Tools and retrieval can add fresh material to that context.

3. Separate **capability** from **behaviour**. A model may be capable of writing SQL, while your instructions, examples, tool permissions, and post-training affect how it behaves on a particular task.

4. Classify each statement:

   - “Put the current policy document into the request.” → context or retrieval.
   - “Make this output shape consistent across thousands of examples.” → possibly fine-tuning, after simpler controls and evaluation.
   - “Use a human review before a migration.” → instruction and workflow guardrail.
   - “The model must already know today's price.” → unsupported assumption.

5. Ask for a lifecycle explanation tied to your actual problem:

   ```prompt
   Context: I need an AI system to [describe the recurring job]. The source
   material changes [how often]. The output must pass [named checks].

   Explain which parts belong to:
   - base-model capability,
   - instructions and examples,
   - request-time context or retrieval,
   - possible fine-tuning,
   - human or automated verification.

   Do not recommend fine-tuning merely because the answer is inconsistent.
   List the simpler controls to test first and the evidence that would justify
   changing the model.
   ```

## Approval gate

Do not choose a training or fine-tuning project from vocabulary alone. A human first confirms the recurring task, representative examples, evaluation method, source freshness, privacy constraints, and the simpler options already tested.

## Verify

Explain the lifecycle to another person without using “the model stores the internet.” You pass when you can answer:

- What changed during training?
- What enters at request time?
- What must still be verified?

## Save point

Save the lifecycle classification with the product decision it informs. Record uncertain platform-specific claims as questions for official documentation, not as facts.

## If it fails

- You cannot tell whether information is trained or supplied: inspect the actual request, tools, and retrieved sources.
- Fine-tuning is being used as a synonym for “make it smarter”: move to [prompting, retrieval, or fine-tuning](01-05-prompting-rag-or-fine-tuning.md).
- The problem is wrong current facts: improve source retrieval and verification.
- The problem is unsafe action: add an approval gate; training is not an authorization system.
