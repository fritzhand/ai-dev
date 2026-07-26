# Which Model Should I Use?

**Slug:** `which-model-should-i-use`

**Status:** Approved for course use

**Placement:** Lesson 01-03

**Source:** Recreated from the concept in the owner's MIT-licensed
`startup-stack/web/infographics/which-model-should-i-use.webp`. The upstream
raster was not used as an image input; the course visual was generated from the
rewritten, approved prompt packet on 2026-07-25.

**Construction mode:** Built-in image generation, one targeted built-in edit,
then deterministic resize and WebP export.

## Production prompt

```text
Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, a short muted subtitle, rounded white cards with thin tinted borders, restrained soft shadows, numbered stage circles, flat line icons, and clearly labelled arrows. Keep a 48-pixel safe margin. Prefer five or fewer main chunks; simplify rather than shrinking text. Make all text horizontal, exact, and readable at presentation size. Encode stages with labels or shapes as well as colour. Use product names in plain labelled badges unless an approved official mark will be overlaid later.

Header: “Which Model Should I Use?” Show two controls. Left ladder, “Task need”: “Routine”; “Everyday”; “Hard or high-stakes”. Right dial, “Thinking effort”: “Low”; “Medium”; “High”. Centre decision path: “Start with a capable middle option” → “Check the result” → “Move up when reasoning is weak” or “Move down when the same simple task repeats.” Add a context card: “Context = the instruction, relevant material, tool results and working output.” Footer: “Names and prices change. Choose by task, test and budget.”

Guardrail: Include no current model names, price comparisons, or promise that higher effort always wins.

No photorealism, glossy 3D, fake screenshots, fake code, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal. Every quoted word must be rendered exactly as written.
```

## Final correction prompt

```text
Use case: precise-object-edit. Edit only the immediately previous “Which Model Should I Use?” infographic. Remove the unrequested subtitle “Match the model to your task and adjust as you learn.” Move the existing layout upward only as needed to use the space cleanly. Preserve every other element, color, icon, label, arrow, and all exact text unchanged. Do not add any replacement subtitle, label, or decorative pseudo-text. Keep the 16:9 landscape composition, safe margins, and crisp readable typography.
```

## Accessibility text

**Alt text:** Model capability and thinking effort shown as separate controls,
followed by a test-and-adjust loop.

**Caption:** Choose model and effort by the task, then test the result.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- Task need and thinking effort remain separate controls.
- The decision path starts in the middle, checks the result, and gives both an
  upward and a downward adjustment.
- The context card and footer match the approved copy.
- No provider, model name, price comparison, or claim that higher effort always
  wins appears.
- Known limitation: the retained source is an AI-generated raster, so future
  typography changes require regeneration rather than editing live type.
