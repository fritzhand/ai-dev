# What This Thing Actually Is

**Slug:** `what-this-thing-actually-is`

**Status:** Approved for course use

**Placement:** Lesson 01-01

**Source:** Recreated from the owner’s MIT-licensed
[`startup-stack` upstream visual](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/what-this-thing-actually-is.webp)
with owner permission on 2026-07-25. The copy follows the approved AI Dev
course packet rather than transcribing the older image.

**Construction mode:** Built-in image generation, one targeted built-in image
edit, then deterministic resize and WebP export.

## Production prompt

The built-in generation used the base prompt and negative direction from
[`PROMPT-STYLE.md`](../PROMPT-STYLE.md), followed by:

```text
Build a three-column explainer. Header: “What This Thing Actually Is”.
Subtitle: “A language model predicts what text is likely to come next.”
Centre loop: “Predict the next piece of text” → “Add it” → “Repeat”.
Left card, “What it is good at”: “Following a clear brief”; “Producing and
transforming language”; “Repeating work without getting tired”.
Right card, “What that does not guarantee”: “Truth”; “Current information”;
“Knowledge of your project”; “A safe action”.
Footer: “Fluency is not proof. Check the source and the result.”

Technical guardrail — do not render as copy: Do not equate a token with a word
or claim that the model has permanent memory. Do not add any text beyond the
quoted copy.
```

The first render incorrectly displayed the technical guardrail. The final PNG
used this targeted built-in edit:

```text
Remove only the entire bottom red-bordered panel that begins with the word
“Guardrail:” and all text/icons inside that panel. Replace that removed panel
with clean off-white #f8fbfc background and balanced whitespace. Preserve the
title, subtitle, all three main columns, every arrow and icon, the orange
footer, all exact typography, colours, spacing, and wording unchanged. Do not
add any new text, icon, border, or decoration.
```

## Accessibility text

**Alt text:** A next-text prediction loop flanked by useful capabilities and
things fluency cannot guarantee.

**Caption:** A language model can produce fluent text without knowing whether
it is true.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- The title, subtitle, three loop labels, capability list, limitation list, and
  footer match the approved copy.
- The central claim remains technically plain and does not imply
  consciousness, permanent memory, or built-in project knowledge.
- The generated guardrail panel was removed; no unapproved explanatory copy
  remains.
- Cards, icons, arrows, labels, and contrast remain legible at course-page
  width.
- Known limitation: exact instructional text is raster rather than editable;
  the final generated PNG and complete prompt/edit record are retained.
