# What a Connector Is

**Slug:** `what-a-connector-is`

**Status:** Approved for course use

**Placement:** Lesson 02-03

**Source:** Recreated from the owner’s MIT-licensed [`startup-stack` visual at commit `ac1e81a`](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/what-a-connector-is.webp). The original’s unfinished labels and one-adapter implication were replaced with an explicit service, account, permission, and action scope.

**Construction mode:** Built-in image generation and a targeted image edit, followed by deterministic resize and WebP export. The edit removed generated explanatory filler from the permission-scope card.

## Production prompt

```text
Use case: infographic-diagram
Asset type: 1200×675 teaching infographic for the AI Dev course

Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, rounded white cards with thin tinted borders, restrained soft shadows, numbered stage circles, flat line icons, and clearly labelled arrows. Keep a 48-pixel safe margin. Prefer five or fewer main chunks; simplify rather than shrinking text. Make all text horizontal, exact, and readable at presentation size. Encode meaning with words and shapes as well as colour. Use generic service icons and plain labels, not logos.

Header exact: “What a Connector Is”

Place a centre card:
Title exact: “Connector”
Supporting line exact: “a permissioned adapter”

Place “AI tool” on the left. On the right, place four generic service cards with these exact labels:
“Mail”
“Drive”
“Calendar”
“Repository”

Add a scope card with these four exact questions:
“Which service?”
“Which account or folder?”
“Read, write or send?”
“When may it act?”

Show this exact flow with arrows:
“Connect → authorise → request → inspect result.”

Small note exact: “MCP is one protocol connectors may use.”

Footer exact: “Start with the narrowest read access. Save relevant material and its origin if the result must remain auditable.”

Make permission scope and the difference between read, write, and send prominent. Keep every supplied word verbatim. Do not describe every connector as MCP. Do not imply read-only access is risk-free. The audit note must not imply copying restricted material is always permitted.

No photorealism, glossy 3D, fake screenshots, fake code, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal. Do not add any unrequested copy.
```

## Correction prompt

```text
Use case: precise-object-edit
Asset type: AI Dev teaching infographic correction

Edit only the large scope card beneath the connector:
- Remove the extra heading “Permission scope”.
- Remove the extra right-side mini-legend and all six labels “Read”, “View or retrieve”, “Write”, “Create or modify”, “Send”, and “Deliver or transmit”.
- Keep the four exact scope questions unchanged: “Which service?”, “Which account or folder?”, “Read, write or send?”, and “When may it act?”
- Rebalance those four questions and their existing generic icons cleanly within the scope card.

Change nothing else. Preserve the title, AI tool card, connector card, service labels, the exact connect/authorise/request/inspect result flow, MCP note, footer, all punctuation, palette, typography, arrows, safe margins, and 16:9 composition exactly. Do not add any new text.
```

## Accessibility text

**Alt text:** An AI tool reaches mail, drive, calendar, and repository services through a connector described as a permissioned adapter. A scope card asks which service, account or folder, permission type, and action timing are allowed. The flow is connect, authorise, request, and inspect the result.

**Caption:** A connector gives a tool scoped access to another service.

## Known limitation

The retained generation source is a raster PNG, so its typography is not a separate editable layer. The exact copy and production and correction prompts above are authoritative; any regeneration requires another complete text review.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- All service labels, scope questions, flow labels, note, and footer match the approved copy.
- Mail, drive, calendar, and repository use generic icons rather than product marks.
- Read, write, and send remain separate choices in the scope question.
- MCP is described as one possible protocol, not as every connector.
- Narrow read access is a starting point, not a claim that read-only access is risk-free.
- Generated permission definitions not present in the approved packet were removed before approval.
