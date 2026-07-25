---
summary: Decide whether a failure needs clearer instructions, retrieved source material, or learned recurring behaviour.
requires: [01-01-models-predict-text, 01-04-context-tokens-and-cost]
infographics: [prompting-rag-or-fine-tuning]
---

# Choose the right adaptation

![Three connected columns compare prompting, retrieval, and fine-tuning by what each changes and when it is useful.](/infographics/prompting-rag-or-fine-tuning.webp)

**Requires:** A repeated task, examples of failures, and a check that separates acceptable from unacceptable output.

**Done when:** You have classified the failure, chosen the least complex intervention that addresses it, and defined an evaluation before implementation.

## Step 0 — Check the ground

Collect several representative inputs and outputs. Stop if the only evidence is “I did not like one answer.” You need a recurring failure pattern.

## Steps

1. Identify what is wrong:

   - The goal, constraints, or output shape are unclear.
   - The answer lacks source material that changes or is private.
   - The model repeatedly behaves inconsistently on a stable, well-defined task.
   - The base model lacks a required capability.

2. Match the intervention:

   | Intervention | Changes | Use it when | Does not solve |
   | --- | --- | --- | --- |
   | Prompting and examples | Instructions available for this request | The task or output contract is unclear | Missing facts or permissions |
   | Retrieval, often called RAG | Source passages added at request time | Answers must use current, private, or attributable material | Poor sources or an undefined task |
   | Fine-tuning | Recurring model behaviour learned from labelled examples | A stable pattern remains after simpler controls and can be evaluated | A live document store or authorization |
   | Different model or tool | Available capability | The current model cannot perform the required operation reliably | Bad acceptance criteria |

3. Start with the least complex option that targets the failure. Improve the instruction and source packet before building retrieval. Improve retrieval and evaluations before treating fine-tuning as a knowledge database.

4. Expect combinations. A production workflow can use a fine-tuned model, a precise instruction, retrieved sources, and human review.

5. Design an evaluation before changing the system. Keep the same test cases so you can compare the baseline with the intervention.

6. Request a decision memo:

   ```prompt
   Context: The recurring task is [task]. Here are representative failures:
   [examples]. A passing result must [checks]. Source material changes
   [frequency] and is located [location].

   Classify each failure as instruction, missing context, recurring behaviour,
   missing capability, or verification. Compare:
   1. a prompt/example change,
   2. request-time retrieval,
   3. fine-tuning,
   4. a different model or tool.

   Recommend the least complex next experiment. Include the same evaluation
   set for baseline and experiment, privacy considerations, expected
   maintenance, and a stop condition. Do not treat fine-tuning as live storage.
   ```

## Approval gate

A human approves the failure classification, source rights, privacy boundary, evaluation set, maintenance owner, and budget before retrieval infrastructure or fine-tuning work begins.

## Verify

Run the baseline and proposed intervention on the same cases. You pass when the intervention improves the named checks without introducing a more important failure.

## Save point

Save the decision memo, frozen evaluation cases, baseline results, and chosen experiment. Do not overwrite the baseline.

## If it fails

- No intervention wins: reconsider the task or the base capability.
- Retrieval returns irrelevant material: fix indexing, filtering, and source quality before changing the model.
- Fine-tuning looks good only on training examples: test on held-out representative cases.
- The system answers accurately but takes unsafe actions: add permissions and approval gates; this is a workflow problem.
