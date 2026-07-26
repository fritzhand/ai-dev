---
summary: Turn a learner-chosen app idea into one secure, authenticated, tested, and deployed vertical slice.
requires: [00-start-here]
infographics: [rapid-app-development-workflow]
---

# Project: an app

You choose the app. The course supplies the sequence and the review gates:

`PRD → pinned baseline → plan → data → auth → vertical slice → differentiator → evidence → release`

![A two-row app workflow moves from a PRD through human-reviewed planning and a baseline commit, then loops through bounded builds, optional data and sign-in, testing, diff review, and commits.](/infographics/rapid-app-development-workflow.webp)

The project references
[`KRSHH/standard-saas-starter`](https://github.com/KRSHH/standard-saas-starter)
at tested
[commit `e887b0c`](https://github.com/KRSHH/standard-saas-starter/commit/e887b0cc9d380576aa3318bf8c095afbc3d768cb).
It does not define your user, feature, or schema for you.

| Step | Lesson | Evidence |
| --- | --- | --- |
| 1 | [Write the PRD](05-01-write-the-prd.md) | One user, job, object, flow, and acceptance set |
| 2 | [Start from the tested template](05-02-start-from-the-tested-template.md) | Licensed, pinned, passing baseline |
| 3 | [Map and strip the starter](05-03-map-and-strip-the-starter.md) | Honest shell and approved system map |
| 4 | [Connect Supabase](05-04-connect-supabase.md) | Secret-safe backend and inspected baseline schema |
| 5 | [Design and migrate core data](05-05-design-and-migrate-the-core-data.md) | Reviewed migration and ownership tests |
| 6 | [Add Google sign-in](05-06-add-google-sign-in.md) | Real OAuth session and protected route |
| 7 | [Build one vertical slice](05-07-build-one-vertical-slice.md) | Protected create/view/update/delete workflow |
| 8 | [Add the differentiator](05-08-add-the-differentiator.md) | Product-specific value with failure checks |
| 9 | [Test against the PRD](05-09-test-against-the-prd.md) | Repeatable and human evidence |
| 10 | [Deploy and verify production](05-10-deploy-and-verify-production.md) | Live auth, data, health, and boundary checks |
| 11 | [Add optional layers deliberately](05-11-optional-production-layers.md) | One named need, fully configured—or no addition |

Instructors should use the [milestone guide](../../instructor/app-project.md).
