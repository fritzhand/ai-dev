# From Git Push to Live Site on Vercel

**Slug:** `vercel-deployment-chain`

**Status:** Approved for course use

**Placement:** Lesson 04-07

**Source:** Recreated from owner-supplied workshop material with permission on 2026-07-25. The copy follows the current course and prompt inventory rather than transcribing the older deck.

**Construction mode:** Built-in image generation, followed by deterministic resize and WebP export.

## Production prompt

```text
Create a 1200×675, 16:9 teaching infographic for the AI Dev course using the shared course palette and flat-vector editorial style.

Title: “From Git Push to Live Site on Vercel”.

Main chain: “Commit locally” → “Push to GitHub” → “Vercel detects the commit” → “Install and build”.

Split into two labelled branches:

- “Pull request or non-production branch” → “Preview deployment” → amber “Review the preview”.
- “Configured production branch” → “Production deployment” → “Domain serves that deployment”.

Add the coral recovery loop: “Build fails” → “read the log” → “fix” → “push again”.

Footer: “This flow applies when the repository and deployment settings are connected.”

Keep every phrase exact, horizontal, and readable. Distinguish branches and the review gate with labels and shapes as well as colour. Use generic line icons. Do not hard-code a branch name, promise an automatic deployment, or include price or speed claims. A failed build must not point to a live result. No logos, fake screenshots, tiny text, duplicated labels, or watermark.
```

## Accessibility text

**Alt text:** A connected Git repository moves from a local commit and GitHub push through a Vercel build, then branches to a reviewed preview or production deployment. A failed build loops through its log, a fix, and another push.

**Caption:** A connected Vercel project can turn a Git commit into a preview or production deployment.

## Review record

Reviewed 2026-07-25:

- Canvas is exactly 1200×675.
- The main chain, preview branch, production branch, and failed-build loop match the course lesson.
- The human preview review is explicit.
- The conditional footer prevents the flow from being read as a universal promise.
- A failed build returns to the build step and never points to a live deployment.
- Text remains legible at course-page width, and the reading order does not depend on colour.
