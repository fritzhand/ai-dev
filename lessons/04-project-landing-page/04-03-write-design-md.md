---
summary: Turn real brand inputs and chosen references into reviewable visual, responsive, and accessibility rules.
requires: [04-01-prepare-assets-and-brief, 04-02-build-the-knowledge-base]
infographics: []
---

# Write `design.md`

**Requires:** The approved brief, knowledge base, usable brand assets, and any
reference sites with a note explaining what is relevant.

**Done when:** A human approves `design.md`, including narrow-screen behavior,
keyboard focus, contrast, image treatment, and qualities to avoid.

## Step 0 — Check the ground

Stop if “make it modern” is the only direction. Get real inputs: existing
colors or type, examples the owner likes, examples they dislike, and why.

## Steps

1. Copy the
   [`design.md`](../../project-templates/landing-page/design.md) template.
2. Extract existing brand choices from supplied files. Label a new proposal as
   a proposal; do not present it as established identity.
3. Record three design adjectives and translate each into a concrete rule.
4. Define a small token set for background, text, primary action, accent, and
   borders.
5. Specify typography, content width, spacing, cards, images, header, and
   footer.
6. Write the narrow-screen hierarchy explicitly. Decide what stacks, wraps,
   crops, or becomes a menu.
7. Define visible keyboard focus, reduced motion, heading order, control
   labels, error behavior, and contrast checks.

```prompt
Context: Read project-brief.md, knowledge-base.md, the approved brand assets,
and the supplied reference notes. Write into the design.md template. Do not
write code.

For every proposed visual rule, identify whether it comes from an existing
brand source, an approved reference quality, or a new proposal requiring human
approval. Define the mobile hierarchy and accessibility behavior explicitly.
Keep the system small enough to implement consistently.
```

## Approval gate

The owner reviews a token swatch and a simple narrow/wide wireframe or written
hierarchy. They approve the direction, not merely the adjectives. Any new brand
proposal is accepted or replaced before coding.

## Verify

- Each color has a named use.
- The primary action is visually clear without relying only on color.
- Body text and controls have a recorded contrast result.
- Long headings and narrow navigation have rules.
- No reference site is being copied wholesale.
- The rules fit the amount and quality of real content.

## Save point

Commit `design.md` and any approved low-fidelity wireframe:
`docs: approve landing-page design rules`.

## If this fails

- **References conflict:** ask the owner to rank the qualities, not the sites.
- **There is no brand system:** propose the smallest neutral system and label
  every choice for approval.
- **The agent jumps to components:** return to tokens and page hierarchy.
- **The mobile view is deferred:** stop. Narrow-screen behavior is part of
  design approval.
