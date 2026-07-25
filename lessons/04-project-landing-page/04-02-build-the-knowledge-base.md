---
summary: Convert approved source material into a compact, cited content file that the site can safely use.
requires: [04-01-prepare-assets-and-brief]
infographics: [context-engineering]
---

# Build the knowledge base

**Requires:** An approved brief and inventoried, publishable source material.

**Done when:** `knowledge-base.md` contains the site identity, audience,
offers, proof, calls to action, links, media, and explicit gaps with sources.

## Step 0 — Check the ground

Stop if the brief contains an unresolved decision about the primary visitor,
offer, or call to action. The knowledge base records approved material; it
does not decide the business.

## Steps

1. Copy the
   [`knowledge-base.md`](../../project-templates/landing-page/knowledge-base.md)
   template into the project.
2. Route source material into its headings. Keep wording exact for names,
   prices, dates, qualifications, addresses, and legal claims.
3. Cite each proof point close to the claim. A URL is a source, not automatic
   confirmation that its contents are current.
4. Record required links and open them. Keep the destination, checked date, and
   result.
5. Describe each image factually so its future alt text does not depend on the
   agent seeing the original again.
6. Add a “Do not publish” section that names excluded categories without
   copying their private contents.

```prompt
Context: Read the approved project-brief.md, the source inventory, and the
public-ready files. Use the knowledge-base.md template.

Create a compact site knowledge base. Preserve exact names, numbers, dates, and
links. Cite where each factual claim came from. Show conflicts side by side.
Use [TBD — missing input and owner] for every gap. Do not write slogans, infer
testimonials, or introduce facts not present in the supplied material.

End with a short list titled "Human questions before design".
```

## Approval gate

The owner reads the knowledge base as if it were already public. They correct
claims, remove sensitive material, resolve links, and explicitly accept any
remaining gaps.

## Verify

Ask a reviewer who did not assemble the file to answer:

- Who is this for?
- What is offered?
- What should the visitor do?
- Which proof supports the main claim?
- What is still missing?

If the file cannot answer those questions without guesswork, it is not ready.

## Save point

Commit the approved knowledge base separately from design or code:
`docs: approve landing-page knowledge base`.

## If this fails

- **The agent writes polished but unsupported copy:** discard those lines and
  rerun with the source table and exact-output constraint.
- **The file becomes a document dump:** keep only material required by the
  brief; cite the source rather than pasting it.
- **A gap blocks the primary CTA:** stop and get the missing input. A secondary
  section may be removed; the primary action may not be fabricated.
