---
summary: Separate a model's plausible continuation from evidence you can trust.
requires: []
infographics: [what-this-thing-actually-is]
---

# What a model actually does

![A next-text prediction loop is flanked by useful capabilities and by things fluency cannot guarantee.](/infographics/what-this-thing-actually-is.webp)

**Requires:** One answer produced by a language model.

**Done when:** You can mark each important statement in that answer as supplied, derived, or externally checkable, and you have verified the claims that matter.

## Step 0 — Check the ground

Find the input and the complete model answer. Stop if the answer refers to files, web pages, or tool results you cannot inspect. You cannot verify an unseen source.

## Steps

1. Start with the useful mental model: a language model produces a likely continuation from its instructions and current input. Fluency is part of the output; it is not proof.

2. Mark important statements in the answer:

   - **Supplied:** restates something present in your input.
   - **Derived:** calculates, combines, or interprets supplied material.
   - **Externally checkable:** claims something about the world, a product, a person, a command, or current behaviour.

3. Inspect the evidence behind each externally checkable claim. Prefer the original file, official documentation, or another primary source. A link is not evidence until it opens and supports the claim.

4. Recalculate important derived results. For code, run the relevant check. For a summary, compare it with the source. For a recommendation, inspect its assumptions.

5. Ask the model to expose uncertainty and sources without asking it to defend its first answer:

   ```prompt
   Context: Below are my original input and the answer I received.

   Audit the answer; do not rewrite it yet. Create a table with:
   - claim,
   - supplied by my input / derived / externally checkable,
   - source actually available,
   - verification needed,
   - consequence if wrong.

   Do not invent citations. If the supporting material is absent, write
   "source not provided". End with the three checks I should perform first.
   ```

6. Correct the source material or prompt before requesting a polished revision. Better wording cannot repair a missing fact.

## Approval gate

Before using the answer in code, a public page, a database change, or a business decision, a human checks every high-consequence claim against evidence. The human owns the decision even when the model supplied the wording.

## Verify

Pick the most confident sentence in the answer and ask:

- Where did this come from?
- Can I open that source?
- Does the source say the same thing?
- What would reveal that it is wrong?

You pass when the answer is evidence, not “the model sounded certain.”

## Save point

Save the corrected source, the claim audit, or the passing test beside the work it supports. Record a source URL and check date for details that can change.

## If it fails

- The model supplies a citation that does not open: treat the claim as unsupported.
- The source exists but says something narrower: rewrite the claim to match it.
- Two primary sources disagree: record the disagreement and stop the affected decision.
- The claim cannot be checked: label it as an opinion or assumption and name who must decide.
- The thread is too long to audit: start a clean task with only the relevant material; see [context, tokens, and cost](01-04-context-tokens-and-cost.md).
