# The Loops That Make Models Improve

**Slug:** `the-loops-that-make-models-improve`

**Status:** Approved for course use

**Placement:** Lesson 01-02

**Source:** Recreated from the owner’s MIT-licensed
[`startup-stack` upstream visual](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/the-loops-that-make-models-improve.webp)
with owner permission on 2026-07-25. The copy follows the approved AI Dev
course packet rather than transcribing the older image.

**Construction mode:** Built-in image generation, followed by deterministic
resize and WebP export.

## Production prompt

The built-in generation used the base prompt and negative direction from
[`PROMPT-STYLE.md`](../PROMPT-STYLE.md), followed by:

```text
Make a two-by-two loop grid titled “The Loops That Make Models Improve”.

“Human feedback”: “Answer → people compare or rate → training signal.”
“Model feedback”: “Draft → critique against rules → revised draft → filtered
example.”
“Verifiable checks”: “Attempt → test or checker → pass/fail signal → update.”
“Synthetic examples”: “Seed examples → generate more → filter → train.”

Footer: “A loop is only as good as its judge. Where no reliable checker
exists, human judgement remains.”

Technical guardrail — do not render as copy: Do not rank the loops, claim that
one always improves capability, or imply that unfiltered self-training is
reliable. Every loop must visibly contain its check or filter. Do not add
strength meters, unsupported performance language, or text beyond the quoted
copy.
```

## Accessibility text

**Alt text:** Four feedback loops using people, model critiques, verifiable
checks, and filtered synthetic examples.

**Caption:** Feedback loops improve models only when the signal judging the
result is useful.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- All four headings and loop sequences match the approved copy.
- Every loop contains a visible comparison, critique, checker, or filter.
- No ranking, strength meter, universal improvement claim, or unfiltered
  self-training claim appears.
- The two-by-two reading order, arrows, labels, and contrast remain legible at
  course-page width.
- Known limitation: exact instructional text is raster rather than editable;
  the final generated PNG and production prompt are retained.
