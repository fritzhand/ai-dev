# How a Model Gets Made

**Slug:** `how-a-model-gets-made`

**Status:** Approved for course use

**Placement:** Lesson 01-02

**Source:** Recreated from the owner’s MIT-licensed
[`startup-stack` upstream visual](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/how-a-model-gets-made.webp)
with owner permission on 2026-07-25. The copy follows the approved AI Dev
course packet rather than transcribing the older image.

**Construction mode:** Built-in image generation, followed by deterministic
resize and WebP export.

## Production prompt

The built-in generation used the base prompt and negative direction from
[`PROMPT-STYLE.md`](../PROMPT-STYLE.md), followed by:

```text
Use four equal numbered cards under “How a Model Gets Made” and the subtitle
“A common path, not one fixed recipe.”

Card 1, “Prepare data”: “Select, licence, clean and filter text, code, images
or other material.”
Card 2, “Pre-train”: “Learn statistical patterns by predicting missing or
next units.”
Card 3, “Post-train”: “Use examples and feedback to make the model more useful
and safer.”
Card 4, “Evaluate and operate”: “Test capabilities, limits and failure modes
before and after release.”

Footer: “The recipe differs by model maker. The model still does not know your
private project unless you provide access.”

Technical guardrail — do not render as copy: Include no training-cost figures,
corpus sizes, fixed universal stage names, or universal knowledge-cutoff
claim. Do not add any text beyond the quoted copy.
```

## Accessibility text

**Alt text:** A representative four-stage path from prepared data through
pre-training, post-training, and evaluation.

**Caption:** Model makers prepare data, pre-train, post-train, and evaluate;
the details vary.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- All four numbered cards and their descriptions match the approved copy.
- The subtitle and footer make the simplified, non-universal nature of the
  path explicit.
- No training cost, corpus size, version, provider, or knowledge-cutoff claim
  appears.
- The four-card sequence, arrow direction, contrast, and type remain legible
  at course-page width.
- Known limitation: exact instructional text is raster rather than editable;
  the final generated PNG and production prompt are retained.
