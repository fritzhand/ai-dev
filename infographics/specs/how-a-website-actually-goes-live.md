# How a Website Goes Live

**Slug:** `how-a-website-actually-goes-live`

**Status:** Approved for course use

**Placement:** Lesson 04-07

**Source:** Recreated from the owner’s MIT-licensed [`startup-stack` visual at commit `ac1e81a`](https://github.com/fritzhand/startup-stack/blob/ac1e81a0c867f6cdde29651f21f7b007f19326ef/web/infographics/how-a-website-actually-goes-live.webp). The original was narrowed to the course’s common deployment path and rebuilt without universal automation, price, or speed claims.

**Construction mode:** Built-in image generation, followed by deterministic resize and WebP export.

## Production prompt

```text
Use case: infographic-diagram
Asset type: 1200×675 teaching infographic for the AI Dev course

Create a 1200×675, 16:9 teaching infographic for the AI Dev course. Use a clean flat-vector editorial style on an off-white #f8fbfc background. Primary text is near-black #10222c; primary blue is #0b5a86; secondary green is #0c7a63; warm highlight is #d98218; warning/action is #c62c49. Use an Instrument-Sans-like sans serif, a large navy title, a short muted subtitle, rounded white cards with thin tinted borders, restrained soft shadows, numbered stage circles, flat line icons, and clearly labelled arrows. Keep a 48-pixel safe margin. Simplify rather than shrinking text. Make all text horizontal, exact, and readable at presentation size. Encode stages with labels and shapes as well as colour. Use no product logos.

Header exact: “How a Website Goes Live”
Subtitle exact: “One common deployment path.”

Create a six-stage left-to-right chain using these exact card titles and supporting lines:
1. “Local project”
   “files on your computer”
2. “Git repository”
   “saved source and history”
3. “Build”
   “framework creates deployable output”
4. “Hosting”
   “serves the deployed result”
5. “DNS”
   “points a domain to the host”
6. “Visitor”
   “requests the site over HTTPS.”

Footer exact: “A later push changes production only when the host is configured to deploy it.”

Make the chain and arrow direction unmistakable. Git is one common path, not a technical requirement. Keep every supplied word verbatim. Include no hosting cost, deployment-speed claim, or suggestion that deployment is always automatic.

No photorealism, glossy 3D, fake screenshots, fake code, invented metrics, prices, version numbers, provider promises, decorative pseudo-text, lorem ipsum, tiny paragraphs, duplicated labels, cropped edges, misspellings, malformed product logos, colour-only meaning, or claims that one workflow is universal. Do not add any unrequested copy.
```

## Accessibility text

**Alt text:** A six-stage chain moves from local project files through a Git repository, framework build, hosting, and DNS to a visitor requesting the site over HTTPS. A footer says a later push changes production only when the host is configured to deploy it.

**Caption:** Source becomes a live website through version control, build, hosting, and DNS.

## Known limitation

The retained generation source is a raster PNG, so its typography is not a separate editable layer. The exact copy and production prompt above are authoritative; any regeneration requires another complete text review.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- All six stage titles, descriptions, and the footer match the approved copy.
- Arrows move from the local project toward the visitor, and DNS points the domain to the host.
- “One common deployment path” prevents Git from being presented as a technical requirement for every site.
- The footer makes later deployment conditional on host configuration.
- No provider, price, speed, version, or automatic-deployment promise appears.
- Generic line icons replace product marks.
