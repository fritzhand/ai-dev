---
summary: Gather publishable source material, record where it came from, and approve a narrow landing-page outcome.
requires: [03-06-markdown-assets-and-paths]
infographics: [landing-page-workshop-flow]
---

# Prepare assets and a brief

**Requires:** A project folder, access to the real source material, and a
person who can approve what the site says.

**Done when:** The folder contains an asset inventory and an approved
`project-brief.md`; missing content is explicit.

## Step 0 — Check the ground

Stop if you do not know who owns the website, who may approve its claims, or
whether the supplied images and text may be published. Do not use an agent to
fill these gaps.

## Steps

1. Copy
   [`project-brief.md`](../../project-templates/landing-page/project-brief.md)
   into the project.
2. Put public-ready inputs in a clearly named `source/` folder. Keep private
   documents elsewhere. If an agent needs a private fact, provide a short,
   approved extract rather than the whole file.
3. Rename files so a new collaborator can identify them. Do not change an
   extension merely to make a filename look tidy.
4. Inventory each item: filename or URL, source, owner, publication
   permission, what it supports, and any conflict.
5. Complete the brief with one primary visitor, one job, one call to action,
   required sections, and non-goals.
6. Mark missing input as `[TBD — what is missing and who can supply it]`.

Use the agent for an audit, not invention:

```prompt
Context: You may read project-brief.md and the files in source/. Do not write
website copy yet.

Produce:
1. an inventory of every supplied file;
2. the public claim or page need it could support;
3. duplicate, conflicting, unreadable, or missing material;
4. questions a human must answer.

Do not infer permission, invent a fact, improve a claim, or treat a filename as
proof. Use [TBD — ...] for missing inputs.
```

## Approval gate

The site owner checks the audience, call to action, publication rights, claim
sources, and non-goals. Code and design do not begin until this brief is
approved.

## Verify

- Every planned claim has a source or a descriptive
  `[TBD — missing input and expected source]`.
- Every image has a source and a publication decision.
- No private source has been copied into the future public repository.
- The definition of done can be observed in a browser.

## Save point

Commit the approved brief and only the source files that are safe to track.
Use a message such as `docs: approve landing-page brief and source inventory`.

## If this fails

- **The owner is unavailable:** stop at the inventory and questions.
- **An image has unclear rights:** leave it out and record the replacement
  needed.
- **Sources disagree:** show both; do not choose silently.
- **The folder contains secrets or private data:** move them outside the
  repository before the first commit, then inspect `git status`.
