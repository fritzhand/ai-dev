# What Git Is

**Slug:** `what-git-is`

**Status:** Approved for course use

**Placement:** Lesson 03-04

**Source:** Recreated from the concept in the owner's MIT-licensed
`startup-stack/web/infographics/what-git-is.webp`. The upstream raster was not
used as an image input; the course visual was generated from the rewritten,
approved prompt packet on 2026-07-25.

**Construction mode:** Built-in image generation, followed by deterministic
resize and WebP export.

## Production prompt

```text
Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, rounded white cards with thin tinted borders, restrained soft shadows, numbered stage circles, flat generic line icons, and clearly labelled arrows. Keep a 48-pixel safe margin. Prefer five or fewer main chunks; simplify rather than shrinking text. Make all text horizontal, exact, and readable at presentation size. Encode meaning with labels or shapes as well as colour.

Build a timeline titled “What Git Is”. “Working folder” → “Commit: save a named snapshot” → “Make a change” → “Diff: inspect what changed” → “Next commit”. Add a checklist: “Before AI work: commit a clean state.” “After AI work: read the diff.” “If it is wrong: restore the specific tracked change.” Footer: “Git protects tracked files. It does not back up secrets, databases, untracked files or outside systems.”

Guardrail: Include no broad `checkout`, `reset --hard`, or destructive recovery command.

The title, five timeline labels, three checklist lines, and footer are the complete allowed text. Do not add subtitles, example commands, branch names, hashes, filenames, captions, or any other words.

No photorealism, glossy 3D, fake screenshots, fake code, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal. Every quoted word must be rendered exactly as written.
```

## Accessibility text

**Alt text:** A Git timeline showing a clean commit, a change, a diff, and a
second commit.

**Caption:** Commit before a risky change and read the diff after it.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- The working-folder, commit, change, diff, and next-commit sequence is ordered
  correctly.
- All three review checklist lines match the approved copy.
- The footer names tracked and untracked boundaries without presenting Git as a
  complete backup.
- No recovery command, branch name, hash, or filename appears.
- Known limitation: the retained source is an AI-generated raster, so future
  typography changes require regeneration rather than editing live type.
