# What Markdown Is

**Slug:** `what-markdown-is`

**Status:** Approved for course use

**Placement:** Lesson 03-06

**Source:** Recreated from the owner’s MIT-licensed [`startup-stack` visual at commit `ac1e81a`](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/what-markdown-is.webp). The source concept was rebuilt at the course aspect ratio with a new exact sample and without model-cost claims.

**Construction mode:** Built-in image generation, followed by deterministic resize and WebP export.

## Production prompt

```text
Use case: infographic-diagram
Asset type: 1200×675 teaching infographic for the AI Dev course

Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, rounded white cards with thin tinted borders, restrained soft shadows, flat line icons, and clearly labelled structure. Keep a 48-pixel safe margin. Simplify rather than shrinking text. Make all text horizontal, exact, and readable at presentation size. Encode meaning with labels and shapes as well as colour. Use no product logos.

Title exact: “What Markdown Is”

Use a split view.

Left panel title exact: “Plain text”
Display this exact five-line sample with monospaced styling and punctuation unchanged:
“# Project plan”
“## Next step”
“- Review the brief”
“- Build the first page”
“[Open the source](https://example.com)”

Right panel title exact: “Rendered document”
Show the same structure as rendered output:
A level-one heading “Project plan”
A level-two heading “Next step”
Two bullet items “Review the brief” and “Build the first page”
A linked label “Open the source”

Add three bottom cards:
Title exact: “Portable”
Copy exact: “supported by many tools”
Title exact: “Readable”
Copy exact: “opens without a special app”
Title exact: “Diff-friendly”
Copy exact: “changes are easy to inspect.”

Footer exact: “Markdown describes structure. It is not a design system or a database.”

Make the raw source and rendered structure easy to compare line by line. Keep every character of the raw sample verbatim. The rendered link label must omit the URL. Do not claim that Markdown is always cheaper for a model than Word or PDF.

No photorealism, glossy 3D, fake screenshots, fake code beyond the exact Markdown sample, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal. Do not add any unrequested copy.
```

## Accessibility text

**Alt text:** The same project plan appears as five lines of raw Markdown and as a rendered document with two heading levels, two bullets, and a link. Three cards describe Markdown as portable, readable without a special app, and easy to inspect in a diff.

**Caption:** Markdown is portable, inspectable plain text with lightweight structure.

## Known limitation

The retained generation source is a raster PNG, so its typography is not a separate editable layer. The exact copy and production prompt above are authoritative; any regeneration requires another complete text review.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- The five raw Markdown lines match the approved sample character for character.
- The rendered panel preserves the same heading hierarchy, two bullet items, and linked label.
- The raw link includes `https://example.com`; the rendered link displays only “Open the source”.
- Portable, readable, and diff-friendly cards match the approved copy.
- No model-cost, Word, PDF, provider, version, or performance claim appears.
- All text remains legible at the production course-page width.
