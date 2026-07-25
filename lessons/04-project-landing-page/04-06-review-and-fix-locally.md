---
summary: Test the actual landing page at useful viewport, keyboard, content, link, and build boundaries and fix only evidenced issues.
requires: [04-05-build-the-astro-site-in-milestones]
infographics: [how-to-tell-if-it-works]
---

# Review and fix locally

**Requires:** A locally running site, the approved brief/design/plan, and a
clean save point before QA fixes.

**Done when:** The QA record identifies the reviewed commit, evidence for
narrow and wide layouts, content and links, keyboard behavior, accessibility
basics, and any consciously accepted issue.

## Step 0 — Check the ground

Copy the
[`qa-checklist.md`](../../project-templates/landing-page/qa-checklist.md).
Stop if the current code does not build or if you cannot identify the commit
under review. A moving target cannot be reviewed.

## Steps

1. Run the production build and start the local preview if the project defines
   one.
2. Review every route at a narrow and a wide viewport. Save screenshots with
   route, width, and date in the filename.
3. Compare visible words, numbers, names, images, and destinations with
   `knowledge-base.md`.
4. Use only the keyboard to traverse navigation, links, buttons, dialogs, and
   forms. Check focus and order.
5. Inspect the heading outline, labels, alt text, error states, contrast, zoom,
   reduced motion, and horizontal overflow.
6. Open every internal and required external link.
7. Record issues as reproducible observations: route, viewport/input, expected,
   actual, and evidence.

```prompt
Context: Review the running site against project-brief.md, knowledge-base.md,
design.md, implementation-plan.md, and qa-checklist.md. Do not change code yet.

Report only reproducible issues. For each, give route, viewport or input
method, expected rule/source, actual behavior, severity, and the smallest
likely file scope. Separate factual content errors from visual preferences.
End with a recommended fix order.
```

## Approval gate

The owner approves factual/content corrections. A reviewer approves the
prioritized technical fixes and explicitly accepts or defers non-blocking
issues. A redesign or new feature returns to the brief and plan. Do not edit
code until the fix list and file scope pass this gate.

## Continue after approval

8. Fix one approved issue group, rerun its check, and inspect the diff. Do not
   combine a QA fix with a new feature.

## Verify

Rerun the exact failed check after every fix, then run the full production
build and the critical browser route again. A screenshot alone does not prove
keyboard use, link behavior, or source accuracy.

## Save point

Commit reviewed fixes with a narrow message, then record the final commit in
the QA checklist. Keep evidence files only if they are public-safe.

## If this fails

- **Browser and build disagree:** test the production preview, not only the dev
  server.
- **The issue cannot be reproduced:** record environment and stop changing
  code on a guess.
- **A fix breaks another viewport:** revert that fix to the QA save point and
  restate the responsive rule.
- **The owner changes content:** update the knowledge base first, approve it,
  then implement and retest.
