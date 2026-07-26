# Where Your Words Actually Go

**Slug:** `where-your-words-actually-go`

**Status:** Approved for course use

**Placement:** Lesson 01-04

**Source:** Recreated from the concept in the owner's MIT-licensed
`startup-stack/web/infographics/where-your-words-actually-go.webp`. The
upstream raster was not used as an image input; the course visual was generated
from the rewritten, approved prompt packet on 2026-07-25.

**Construction mode:** Built-in image generation, followed by deterministic
resize and WebP export.

## Production prompt

```text
Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, a short muted subtitle, rounded white cards with thin tinted borders, restrained soft shadows, numbered stage circles, flat line icons, and clearly labelled arrows. Keep a 48-pixel safe margin. Prefer five or fewer main chunks; simplify rather than shrinking text. Make all text horizontal, exact, and readable at presentation size. Encode stages with labels or shapes as well as colour. Use product names in plain labelled badges unless an approved official mark will be overlaid later.

Build a horizontal flow titled “Where Your Words Actually Go”. “Your instruction” → “Context is assembled”, with small labels “system rules”, “conversation”, “selected files”, and “tool results” → “Text is split into tokens” → “The model produces output” → “The app shows or acts on the result.” Add a side card, “What may vary”: “The service may cache, retrieve, summarise or drop older material.” Footer lines: “Longer context can cost more and make relevant material harder to find.” “Do not assume the model remembers a past chat or can see a file you did not provide.”

Guardrail: This is the simplified text-request path. Do not say every service resends all content on every turn.

No photorealism, glossy 3D, fake screenshots, fake code, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal. Every quoted word must be rendered exactly as written. Do not add a subtitle or any explanatory filler.
```

## Accessibility text

**Alt text:** A request moves through context assembly, tokenisation, and model
output, with caching and retrieval shown as variable.

**Caption:** The app assembles context, tokenises it, and sends it to a model;
the details vary by service.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- The five-stage path and four context inputs match the approved copy.
- The side card makes caching, retrieval, summarisation, and dropping older
  material variable rather than universal.
- Both context and memory cautions are present and legible.
- No universal resend, price, or permanent-memory claim appears.
- Known limitation: the retained source is an AI-generated raster, so future
  typography changes require regeneration rather than editing live type.
