# What “Agentic” Actually Means

**Slug:** `what-agentic-actually-means`

**Status:** Approved for course use

**Placement:** Lesson 02-02

**Source:** Recreated from the owner’s MIT-licensed
[`startup-stack` upstream visual](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/what-agentic-actually-means.webp)
with owner permission on 2026-07-25. The copy follows the approved AI Dev
course packet rather than transcribing the older image.

**Construction mode:** Built-in image generation, one targeted built-in image
edit, then deterministic resize and WebP export.

## Production prompt

The built-in generation used the base prompt and negative direction from
[`PROMPT-STYLE.md`](../PROMPT-STYLE.md), followed by:

```text
Use the header “What ‘Agentic’ Actually Means”.

Left card, “Assistant”: “You ask → it answers → you act.”
Right card, “Agent”: a circular loop reading “Goal → plan → act → observe →
check → stop or repeat.”

Below the loop: “Tools it may use”; “A way to see results”; “A stopping rule.”
Add an amber gate: “Pause before destructive, external or irreversible
actions.”
Footer: “Short loops are easier to inspect and recover.”

Technical guardrail — do not render as copy: Do not define agentic as
unattended autonomy or imply that self-reported success is sufficient. Make
“observe” and “stop or repeat” visually prominent. The approval gate must
interrupt the loop. Do not add any text beyond the quoted copy.
```

The first render added an unrequested descriptive subtitle. The final PNG used
this targeted built-in edit:

```text
Remove only the subtitle line “Contrast a one-turn assistant with an agent
operating inside a controlled loop.” directly beneath the title. Replace only
that subtitle line with the same clean off-white #f8fbfc background and
rebalance the vertical whitespace naturally. Preserve every other element and
all wording exactly. Do not add replacement text, an icon, a border, or
decoration.
```

## Accessibility text

**Alt text:** A one-turn assistant contrasted with an agent that plans, acts,
observes, and checks inside a controlled loop.

**Caption:** An agent plans, acts, observes, and checks within tools,
permissions, and stop conditions.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- The assistant sequence, six-stage agent loop, three requirements, approval
  gate, and footer match the approved copy.
- “Observe” and “stop or repeat” remain prominent, and the amber approval gate
  visibly interrupts the transition from plan to act.
- The image does not define agentic work as unattended autonomy or treat
  self-reported success as evidence.
- The unrequested subtitle was removed; no explanatory filler remains.
- Known limitation: exact instructional text is raster rather than editable;
  the final generated PNG and complete prompt/edit record are retained.
