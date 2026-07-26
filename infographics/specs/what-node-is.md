# What Node.js Is

**Slug:** `what-node-is`

**Status:** Approved for course use

**Placement:** Lesson 03-03

**Source:** Recreated from the owner’s MIT-licensed [`startup-stack` visual at commit `ac1e81a`](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/what-node-is.webp). The original’s time-sensitive version wording and text defects were replaced with the approved project-declared-version guidance.

**Construction mode:** Built-in image generation and targeted image edits, followed by deterministic resize and WebP export. The edits removed repeated result labels and replaced a generated brand-like mark with a generic runtime icon.

## Production prompt

```text
Use case: infographic-diagram
Asset type: 1200×675 teaching infographic for the AI Dev course

Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, rounded white cards with thin tinted borders, restrained soft shadows, numbered stage circles, flat line icons, and clearly labelled arrows. Keep a 48-pixel safe margin. Simplify rather than shrinking text. Make all text horizontal, exact, and readable at presentation size. Encode stages with labels and shapes as well as colour. Use plain text labels rather than product logos.

Header exact: “What Node.js Is”

Build a left-to-right three-stage flow:
1. Title exact: “JavaScript file”
   Supporting line exact: “instructions as text”
2. Title exact: “Node.js”
   Supporting line exact: “runs JavaScript outside the browser”
3. Title exact: “Result”
   Supporting line exact: “build a site, start a server, run a tool”

Add a compact vocabulary card with these four exact lines:
“npm: a package manager often installed with Node.js”
“package.json: project scripts and dependencies”
“node_modules: installed packages”
“node --version: shows the installed version”

Footer exact: “Use the version the project declares.”

Make the flow read unmistakably from JavaScript file through the Node.js runtime to several possible results. Keep every supplied word verbatim. Do not show a fixed minimum version. Do not imply npm is the only package manager. Do not suggest raw Node runs every TypeScript file directly.

No photorealism, glossy 3D, fake screenshots, fake code, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal. Do not add any unrequested copy.
```

## Correction prompts

```text
Use case: precise-object-edit
Asset type: AI Dev teaching infographic correction

Edit only the right-hand “Result” card. Remove the three repeated labels “Build a site”, “Start a server”, and “Run a tool” that sit beside the three orange icons. Keep the three orange icons. Preserve the exact supporting line at the top of that card: “build a site, start a server, run a tool”. Rebalance the three icons cleanly inside the card.

Change nothing else. Preserve the title “What Node.js Is”, the entire JavaScript file card, the entire Node.js card, every arrow, the entire vocabulary card, all punctuation, the footer, palette, typography, layout, safe margins, and 16:9 composition exactly. Do not add any new text.
```

```text
Use case: precise-object-edit
Asset type: AI Dev teaching infographic correction

Edit only the centre “Node.js” card. Replace the green hexagonal “JS” brand-like mark with a generic green runtime icon: a simple gear surrounding a small play triangle, with no letters, words, or product logo.

Change nothing else. Preserve the title “What Node.js Is”, all exact copy, every punctuation mark, all cards, arrows, the three orange result icons, the vocabulary card, footer, palette, typography, safe margins, and 16:9 composition exactly. Do not add any new text.
```

## Accessibility text

**Alt text:** A JavaScript file passes through the Node.js runtime to produce a site build, server, or tool result. A vocabulary card defines npm, package.json, node_modules, and the node version command, followed by guidance to use the version declared by the project.

**Caption:** Node.js runs JavaScript tools outside the browser.

## Known limitation

The retained generation source is a raster PNG, so its typography is not a separate editable layer. The exact copy and production and correction prompts above are authoritative; any regeneration requires another complete text review.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- The JavaScript file, Node.js runtime, and result form one clear left-to-right flow.
- Every rendered label and command matches the approved copy.
- `node --version` contains two hyphens and no fixed version number.
- npm is described as one package manager often installed with Node.js, not as the only choice.
- The visual does not imply that raw Node executes every TypeScript file directly.
- Repeated result labels and a generated brand-like mark were removed before approval.
