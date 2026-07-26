# What a Database Is

**Slug:** `what-a-database-is`

**Status:** Approved for course use

**Placement:** Lesson 03-07

**Source:** Recreated from the owner’s MIT-licensed [`startup-stack` visual at commit `ac1e81a`](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/what-a-database-is.webp). The original’s broken copy, duplicated example, and over-broad decision rule were replaced with the approved persistence and query criteria.

**Construction mode:** Built-in image generation and targeted image edits, followed by deterministic resize and WebP export. The edits removed duplicated labels and a misleading arrow between the contrasted published-site and database panels.

## Production prompt

```text
Use case: infographic-diagram
Asset type: 1200×675 teaching infographic for the AI Dev course

Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, rounded white cards with thin tinted borders, restrained soft shadows, flat line icons, and clearly labelled arrows. Keep a 48-pixel safe margin. Prefer three main panels; simplify rather than shrinking text. Make all text horizontal, exact, and readable at presentation size. Encode meaning with words and shapes as well as colour. Use no product logos.

Title exact: “What a Database Is”

Use three panels.

Panel 1 title exact: “Published site”
Copy exact: “Pages and assets. The same published content can be served without stored user records.”

Panel 2 title exact: “Database”
Copy exact: “Keeps records the product must remember: users, bookings, orders, settings.”

Panel 3 title exact: “App request”
Copy exact: “Create, read, update or delete permitted records. Return the result.”

Add a decision strip with these two exact statements:
“Need one when submitted or business data must persist, change or be queried.”
“May not need one when content is published as files and no submitted data is kept.”

Footer exact: “Hosting and a database are different jobs, even when one vendor sells both.”

Make the published-site and database jobs visibly distinct, then show an app request interacting with permitted records. Keep every supplied word verbatim. Do not claim that a form always requires a database. Show persistence as the decision criterion. Include no provider comparison.

No photorealism, glossy 3D, fake screenshots, fake code, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal. Do not add any unrequested copy.
```

## Correction prompts

```text
Use case: precise-object-edit
Asset type: AI Dev teaching infographic correction

Remove only unapproved duplicate labels and explanatory filler:
1. In the centre “Database” card, remove the labelled “Permitted records” table and its repeated text “Users”, “Bookings”, “Orders”, and “Settings”. Replace that table with four small generic unlabeled record icons.
2. Remove the label “Content delivered to visitors” between panels 1 and 2, but preserve the arrow.
3. Remove the arrow labels “Request” and “Result” between panels 2 and 3, but preserve both arrows and their directions.
4. Remove the central “OR” text and circle between the two decision cards. Keep the two decision cards distinct and balanced.

Change nothing else. Preserve the title, all three panel titles, all three exact panel paragraphs, both exact decision statements, footer, palette, typography, borders, icons, arrows, safe margins, and 16:9 composition exactly. Do not add any new text.
```

```text
Use case: precise-object-edit
Asset type: AI Dev teaching infographic correction

Remove only the blue right-pointing arrow between the “Published site” card and the “Database” card. Leave clean whitespace between those two cards so they read as contrasted jobs, not a data flow.

Change nothing else. Preserve the title, all exact text, all panels, the two green app-request/database arrows, decision cards, footer, icons, palette, typography, safe margins, and 16:9 composition exactly. Do not add any new text or symbol.
```

## Accessibility text

**Alt text:** A published site with pages and assets is contrasted with a database that keeps persistent records. An app request can create, read, update, or delete permitted records and receive a result. A decision strip distinguishes persistent submitted or business data from content published only as files.

**Caption:** A database keeps data that must persist and be queried.

## Known limitation

The retained generation source is a raster PNG, so its typography is not a separate editable layer. The exact copy and production and correction prompts above are authoritative; any regeneration requires another complete text review.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- Every rendered sentence matches the approved copy.
- The published-site and database panels are contrasted without a data-flow arrow between them.
- The two arrows between the app request and database show a request and returned result without adding labels.
- Persistence and querying, not merely a form or a stranger typing, determine the need described in the visual.
- Hosting and database work remain distinct, with no provider comparison.
- Duplicated record labels and generated explanatory filler were removed before approval.
