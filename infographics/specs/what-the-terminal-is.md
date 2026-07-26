# What the Terminal Is

**Slug:** `what-the-terminal-is`

**Status:** Approved for course use

**Placement:** Lesson 03-01

**Source:** Recreated from the concept in the owner's MIT-licensed
`startup-stack/web/infographics/what-the-terminal-is.webp`. The upstream raster
was not used as an image input; the course visual was generated from the
rewritten, approved prompt packet on 2026-07-25.

**Construction mode:** Built-in image generation, targeted built-in text
corrections, then deterministic resize and WebP export.

## Production prompt

```text
Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, rounded white cards with thin tinted borders, restrained soft shadows, numbered stage circles, flat line icons, and clearly labelled arrows. Keep a 48-pixel safe margin. Prefer five or fewer main chunks; simplify rather than shrinking text. Make all text horizontal, exact, and readable at presentation size. Encode meaning with labels or shapes as well as colour.

Header: “What the Terminal Is”. On the left, draw a clean terminal with three exact examples. `pwd` — “show the current folder”; `git status` — “show changed files”; `npm run dev` — “start this project locally”. Clearly label them “Examples”. Right card, “Your job”: “Check the command”; “Check the current folder”; “Check the target.” Coral card, “Stop and inspect”: “delete”; “overwrite”; “elevated permission”; “a path outside the project.” Footer: “The terminal records commands and output. Git provides recovery for tracked files; it does not undo every command.”

Guardrail: Mark the commands as examples. Do not claim that the terminal itself has either universal undo or no recoverability.

No photorealism, glossy 3D, fake screenshots, fake code beyond the three exact example commands, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal. Every quoted word and every command must be rendered exactly as written. Do not add a subtitle or any explanatory filler.
```

## Final correction prompts

Applied in this order:

```text
Use case: precise-object-edit. The edit target is the most recent “What the Terminal Is” infographic among the recent images. Remove only the three dollar-sign prompt symbols immediately before `pwd`, `git status`, and `npm run dev`, so each command box contains exactly the command text and nothing before it. Preserve every other element, icon, number, arrow, color, layout, and all remaining text exactly unchanged. Add no replacement symbols or text.
```

```text
Use case: precise-object-edit. Edit only the immediately previous “What the Terminal Is” infographic. Remove the entire extra blue-outlined card reading “Examples only. Not a complete list.” beneath the terminal. Extend the dark terminal panel downward into the freed space without adding text. Preserve the three command boxes exactly as `pwd`, `git status`, and `npm run dev` with no preceding symbols. Preserve every other element, icon, number, arrow, color, layout, and all remaining text exactly unchanged. Add no replacement label or filler.
```

```text
Use case: precise-object-edit. Edit only the immediately previous “What the Terminal Is” infographic. Restore a full-width footer card along the bottom, below both main panels, with the exact text: “The terminal records commands and output. Git provides recovery for tracked files; it does not undo every command.” Reduce the main panels vertically only as needed to fit this footer inside the safe margin. Preserve the title, all three exact command examples with no preceding symbols, their descriptions, “Your job” checklist, “Stop and inspect” card, icons, colors, and every other word exactly unchanged. Do not add “Examples only”, “Not a complete list”, or any other text.
```

```text
Use case: precise-object-edit. Edit only the immediately previous “What the Terminal Is” infographic. Make the full-width footer card taller and set its existing exact sentence in two balanced lines using the same readable body-text size as the command descriptions: “The terminal records commands and output. Git provides recovery for tracked files;” on line one and “it does not undo every command.” on line two. Reduce the two main panels vertically only as needed; keep all safe margins. Preserve the title, command examples, descriptions, checklists, icons, colors, and every other word exactly unchanged. Add no new text.
```

## Accessibility text

**Alt text:** A terminal with three example commands and a checklist for
reviewing the command, folder, and target.

**Caption:** The terminal is a text interface; review the command and its
target before running it.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- `pwd`, `git status`, and `npm run dev` are shown exactly and are labelled as
  examples.
- The three review checks and all four stop-and-inspect labels match the
  approved copy.
- The footer accurately limits Git recovery to tracked files and avoids a
  universal undo claim.
- No destructive command appears as a runnable example.
- Known limitation: the retained source is an AI-generated raster, so future
  typography changes require regeneration rather than editing live type.
