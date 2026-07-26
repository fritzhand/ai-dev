# The Model Is Only One Part of the Tool

**Slug:** `the-same-model-four-places`

**Status:** Approved for course use

**Placement:** Lesson 02-01

**Source:** Recreated from the owner’s MIT-licensed
[`startup-stack` upstream visual](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/the-same-model-four-places.webp)
with owner permission on 2026-07-25. The title and copy were rewritten to avoid
claiming that different surfaces necessarily use an identical model.

**Construction mode:** Built-in image generation, followed by deterministic
resize and WebP export.

## Production prompt

The built-in generation used the base prompt and negative direction from
[`PROMPT-STYLE.md`](../PROMPT-STYLE.md), followed by:

```text
Place four cards under “The Model Is Only One Part of the Tool”.
Subtitle: “The answer depends on the model, the context, the tools and the
permissions.”

“Chat”: “Sees the conversation and what you attach. Usually returns an
answer.”
“Connected app”: “May reach services you authorise. Access depends on scope.”
“IDE or agent”: “May read files, edit them and run commands. Actions depend on
approvals.”
“API”: “Another program assembles the request. No interface of its own.”

Footer: “Two surfaces may use different models or settings. Check, do not
assume.”

Technical guardrail — do not render as copy: Never say that the model is
necessarily identical across surfaces. Keep every capability qualification
exact. Do not depict the API as autonomous or add text beyond the quoted copy.
```

## Accessibility text

**Alt text:** Chat, connected apps, IDE agents, and APIs compared by context,
tools, and permissions.

**Caption:** A surface changes context, tools, and permissions — and may change
the model too.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- The title, subtitle, four surface descriptions, and footer match the
  approved copy.
- “Usually”, “may”, “depends”, and “different models or settings” remain
  visible; no identical-model claim appears.
- The API is shown as a program-controlled interface rather than an autonomous
  actor.
- Four-card reading order, contrast, and type remain legible at course-page
  width.
- Known limitation: exact instructional text is raster rather than editable;
  the final generated PNG and production prompt are retained.
