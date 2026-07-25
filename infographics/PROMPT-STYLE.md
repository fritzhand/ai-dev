# Infographic production style

Use this production contract for every course visual. A generated image is a draft until its text, facts, contrast, and reading order have been checked.

## Canvas and palette

- Canvas: 1200×675 pixels, 16:9
- Background: off-white `#f8fbfc`
- Primary text: near-black `#10222c`
- Primary blue: `#0b5a86`
- Secondary green: `#0c7a63`
- Warm highlight: `#d98218`
- Warning and stop: `#c62c49`
- Safe margin: 48 pixels

Use an Instrument Sans–like sans serif. Prefer a large navy title, a short muted subtitle, rounded white cards, thin tinted borders, restrained shadows, numbered stage circles, flat line icons, and labelled arrows.

Keep text horizontal. Encode meaning with words or shapes as well as colour. Prefer five or fewer main chunks; simplify the visual before shrinking the type.

## Base prompt

```text
Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, a short muted subtitle, rounded white cards with thin tinted borders, restrained soft shadows, numbered stage circles, flat line icons, and clearly labelled arrows. Keep a 48-pixel safe margin. Prefer five or fewer main chunks; simplify rather than shrinking text. Make all text horizontal, exact, and readable at presentation size. Encode stages with labels or shapes as well as colour. Use product names in plain labelled badges unless an approved official mark will be overlaid later.
```

## Negative direction

```text
No photorealism, glossy 3D, fake screenshots, fake code, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal.
```

## Review gate

Before an asset moves into `web/infographics/`:

1. Compare every rendered word with the exact copy in its specification.
2. Check every technical claim against the lesson and its primary sources.
3. Confirm the visual remains legible at its actual course-page width.
4. Check contrast, reading order, colour-independent meaning, and useful alt text.
5. Export the approved WebP at exactly 1200×675.
6. Record the review date and any known limitation in the specification.

The complete prompt packet for all 31 planned visuals is in
[`planning/INFOGRAPHICS.md`](../planning/INFOGRAPHICS.md).
