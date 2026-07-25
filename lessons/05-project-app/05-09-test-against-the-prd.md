---
summary: Convert the approved PRD into repeatable static, unit, browser, authentication, permission, and human acceptance evidence.
requires: [05-08-add-the-differentiator]
infographics: [how-to-tell-if-it-works]
---

# Test against the PRD

**Requires:** A feature-complete release candidate, the approved PRD, two test
identities, and an evaluation plan.

**Done when:** Every release acceptance criterion has current evidence tied to
one commit, including a real Google redirect and a non-owner data test.

## Step 0 — Check the ground

Copy [`eval-plan.md`](../../project-templates/app/eval-plan.md) if it is not
already present. Freeze the commit under review. Stop feature work while
testing; otherwise evidence refers to a moving target.

## Prepare the test

Map every PRD criterion to a proposed static check, unit/integration test,
browser/E2E path, manual review, or deliberate combination without editing
tests or source.

```prompt
Context: Read the frozen PRD, eval-plan.md, test configuration, current tests,
and release-candidate diff. Do not change code.

Build an acceptance matrix mapping every criterion to a repeatable check,
fixture/account, expected result, and evidence artifact. Include signed-out,
User A/User B ownership, invalid input, provider failure, real Google OAuth,
narrow viewport, keyboard route, and the differentiator's fixed eval set.
Identify uncovered criteria. Do not mark a criterion passed without evidence.
```

## Approval gate

This gate has two explicit stops:

1. A reviewer approves the test matrix, fixtures, file scope, external test
   accounts, and release-blocking rules before test source is edited.
2. After evidence is collected, return here. The product owner approves the
   human result and any limitation before a fix, scope change, or deployment.

## Steps

1. Add tests for the learner's core object, validation, owner scoping, and
   differentiator—not only the starter's plumbing.
2. Run the pinned starter's baseline commands as appropriate:

   ```bash
   bun run check
   bun run test
   bun run test:e2e
   bun run build
   ```

3. Test empty, invalid, unavailable, repeated, and slow paths.
4. As User A, create a known record. As User B, attempt direct route/API access
   to its identifier and mutation.
5. Perform a real Google sign-in, callback, protected route, refresh, and
   sign-out. The pinned
   [`e2e/auth.spec.ts`](https://github.com/KRSHH/nextjs-template/blob/e887b0cc9d380576aa3318bf8c095afbc3d768cb/e2e/auth.spec.ts)
   checks local auth pages and guards, not a real provider redirect.
6. Review the complete workflow on a narrow viewport and by keyboard.
7. Record failing evidence before changing code, then return to the second
   approval stop. After an approved fix, rerun the failed check and nearest
   regression group.
8. Have a human who did not implement the feature complete the PRD's core job.

## Verify

- Each criterion maps to evidence from the reviewed commit.
- Check, tests, production build, and critical E2E paths pass.
- User B cannot access or mutate User A's record.
- Real Google login and sign-out pass.
- The human reviewer completes the job without implementation guidance.
- No test fixture contains real credentials or personal production data.

## Save point

Commit tests and fixes in reviewable groups. Record the final tested commit,
environment, date, passes, failures, and release decision in the eval plan.

## If this fails

- **E2E setup is broken:** separate harness failure from product failure;
  preserve both and fix the harness before claiming coverage.
- **A criterion has no test:** add evidence or narrow the PRD with approval.
- **A flaky test passes on retry:** record the flake and fix its cause; a retry
  is not release evidence.
- **Manual OAuth is blocked by configuration:** release remains blocked for a
  Google-auth requirement; email/password is only a workshop recovery path.
