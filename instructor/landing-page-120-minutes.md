---
summary: Run a strict two-hour source-to-Astro-to-GitHub-to-Vercel workshop with visible checkpoints, human gates, and recovery cutoffs.
requires: [04-01-prepare-assets-and-brief, 04-07-deploy-through-github-and-vercel]
infographics: [landing-page-workshop-flow, the-approval-gate]
---

# Landing page in 120 minutes

**Requires:** Every item in
[pre-work](landing-page-prework.md), a projected timer, tested teaching network,
and the [recovery matrix](landing-page-recovery.md).

**Done when:** Each learner or pair has a reviewed GitHub commit and a working
Vercel URL. Custom domains, forms, analytics, and search tooling are follow-up
work.

## Step 0 — Before the clock

Do not begin until the instructor's scaffold/deploy test passes and the room
has the minimum source material. Put account recovery and missing-source
learners into the pre-agreed pair/recovery route.

## Run of show

### 00:00–00:10 — Preflight, scope, safety

Teach:

- the finish line;
- correct folder and repository decision;
- source material is authoritative;
- human approval before code and production;
- `git status` and save points.

Evidence at 00:10:

- correct folder;
- GitHub/Vercel access confirmed;
- approved source folder;
- primary CTA and definition of done visible.

Gate: The learner approves repository visibility and public source scope.

Recovery cutoff: A missing account, unsupported runtime, or missing primary
content moves to pair/observer mode now.

### 00:10–00:25 — Asset audit and `knowledge-base.md`

Use lessons
[04-01](../lessons/04-project-landing-page/04-01-prepare-assets-and-brief.md)
and
[04-02](../lessons/04-project-landing-page/04-02-build-the-knowledge-base.md).
Keep the knowledge base to identity, audience, offer, proof, CTA, links, media,
and gaps.

Evidence at 00:25: the learner can point to the source for every main claim and
to a descriptive `[TBD — missing input and expected source]` for every gap.

Gate: Human corrects audience, claims, CTA, links, and omissions.

Recovery: Use a pre-approved source pack; never ask the model to manufacture
company facts.

### 00:25–00:40 — `design.md`

Use [04-03](../lessons/04-project-landing-page/04-03-write-design-md.md).
Limit the system to tokens, type, content width, section rhythm, image rules,
narrow-screen hierarchy, focus, contrast, and reduced motion.

Evidence at 00:40: approved `design.md` with a clear narrow/wide hierarchy.

Gate: Human approves concrete rules and any new proposal.

Recovery: Use the neutral instructor design baseline, then label it as a
proposal requiring later owner review.

### 00:40–00:55 — Implementation plan

Use [04-04](../lessons/04-project-landing-page/04-04-approve-the-implementation-plan.md).
Require routes, files, content mapping, milestone order, checks, and non-goals.

Evidence at 00:55: a plan that fits the remaining hour and contains no launch
extras.

Gate: Human approves file scope and milestone order before install/code.

Recovery: Reduce to one page, one primary CTA, and the approved content. Do not
reduce review or deployment verification.

### 00:55–01:25 — Astro build in milestones

Use [04-05](../lessons/04-project-landing-page/04-05-build-the-astro-site-in-milestones.md).
Run three synchronized blocks:

1. 10 minutes: scaffold, layout, tokens, local URL.
2. 10 minutes: approved content and assets.
3. 10 minutes: responsive and interaction pass.

Evidence at 01:25:

- local URL opens;
- primary content/CTA appears;
- narrow and wide layouts are usable;
- each block has a diff or commit.

Gate: Learner reads the diff before each next block.

Recovery: Move to the instructor milestone that matches the learner's approved
content shape, or continue in a pair. Do not paste an unexplained finished
project over their work.

### 01:25–01:45 — Browser review and targeted fixes

Use [04-06](../lessons/04-project-landing-page/04-06-review-and-fix-locally.md).
Check narrow/wide, content, primary CTA, links, keyboard focus, headings, alt
text, overflow, and production build.

Evidence at 01:45: two viewport screenshots, checked CTA, clean production
build, and a short accepted/open issue list.

Gate: Human prioritizes factual and release-blocking fixes. New features stop.

Recovery: Fix content/CTA/build blockers only. Record visual refinements for
follow-up.

### 01:45–02:00 — GitHub and Vercel

Use [04-07](../lessons/04-project-landing-page/04-07-deploy-through-github-and-vercel.md).

Gate before action: Learner approves the exact reviewed commit, repository
visibility, remote, Vercel project, production branch, settings, and deployment.

After approval, push the reviewed commit, import the repository, read the
deployment log, and open the production URL.

Evidence at 02:00:

- GitHub shows the reviewed commit;
- Vercel shows that commit;
- live URL, primary CTA, assets, and narrow layout work.

Recovery: If Vercel fails, preserve the reviewed GitHub finish line and use the
recovery matrix after class. Do not turn the last minutes into random settings
changes.

## Room checkpoints

| Time | The room should have | Instructor action if fewer than most do |
| --- | --- | --- |
| 00:10 | Ready inputs and accounts | Activate pair/observer route |
| 00:25 | Approved knowledge base | Switch blocked learners to recovery pack |
| 00:40 | Approved design rules | Use neutral baseline; mark later review |
| 00:55 | Approved plan | Cut to one page/CTA |
| 01:10 | Running Astro shell | Pair with recovery milestone |
| 01:25 | Local content build | Stop new sections |
| 01:45 | Reviewed build commit | Stop polish; deploy reviewed scope |
| 02:00 | Live URL or documented deploy handoff | Preserve GitHub finish line |

## Approval gate

The instructor asks for visible approval at content, design, plan, push, and
deploy. Learners remain responsible for their claims, repository, accounts, and
production action.

## Verify

End with a URL/commit roll call, not a show-and-tell of polish. Each participant
states: live URL or deploy blocker, reviewed commit, one accepted limitation,
and next follow-up.

## Save point

Learners complete the launch checklist with repository, deployed commit, live
URL, owner, and rollback point. The instructor records only consented,
public-safe outcomes.

## If this fails

Use [landing-page recovery](landing-page-recovery.md). Protect the sequence:
source → review → local build → reviewed commit → deploy. A learner may leave
with a documented deployment handoff, but never with an unreviewed production
push claimed as complete.
