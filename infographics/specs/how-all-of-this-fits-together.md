# How an AI-Built Project Fits Together

**Slug:** `how-all-of-this-fits-together`

**Status:** Approved for course use

**Placement:** Lesson 03-07

**Source:** Recreated from the concept in the owner's MIT-licensed
`startup-stack/web/infographics/how-all-of-this-fits-together.webp`. The
upstream raster was not used as an image input; the course visual was generated
from the adapted, approved prompt packet on 2026-07-25.

**Construction mode:** Built-in image generation, one targeted built-in edit,
then deterministic resize and WebP export.

## Production prompt

```text
Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, rounded white cards with thin tinted borders, restrained soft shadows, numbered stage circles, flat generic line icons, and clearly labelled arrows. Keep a 48-pixel safe margin. Make all text horizontal, exact, and readable at presentation size. Encode stages with labels or shapes as well as colour.

Title: “How an AI-Built Project Fits Together”. Arrange exactly five clearly stacked horizontal layers or five compact connected layers in this order:
1. “You: goal, choices, approval.”
2. “AI tool: reads the brief, proposes edits, uses allowed tools.”
3. “Local project: files, Git history, runtime.”
4. “Online services: repository, hosting, database, external APIs.”
5. “People using the site or app.”
Put a distinct amber gate labelled exactly “Approval gate” between the AI tool and every change entering the local project. Footer: “You do not need every layer for every project. A landing page can be files + Git + hosting.”

These title, five layer labels, “Approval gate”, and footer are the complete allowed text. Do not add subtitles, bullet lists, examples, brand or provider names, explanatory captions, or any other words. Use generic icons only and no product logos.

Guardrail: Do not imply every project needs a database, API, paid subscription, or cloud AI.

No photorealism, glossy 3D, fake screenshots, fake code, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal. Every quoted word must be rendered exactly as written.
```

## Final correction prompt

```text
Use case: precise-object-edit. Edit only the immediately previous “How an AI-Built Project Fits Together” infographic. Remove only the letters “API” from the cloud icon in layer 4, leaving a plain generic cloud outline. Preserve every other element, arrow, icon, color, layout, and every line of existing text exactly unchanged. Add no replacement text and no new label.
```

## Accessibility text

**Alt text:** A person, AI tool, local project, online services, and end users
connected in layers with an approval gate.

**Caption:** A person, an AI tool, local files, and online services form one
working system.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- All five layers match the approved order and copy.
- The human remains at the top and the amber approval gate interrupts changes
  before they reach the local project.
- The footer states that not every project needs every layer.
- All service icons are generic; no provider name, logo, price, subscription,
  or universal database/API requirement appears.
- Known limitation: the retained source is an AI-generated raster, so future
  typography changes require regeneration rather than editing live type.
