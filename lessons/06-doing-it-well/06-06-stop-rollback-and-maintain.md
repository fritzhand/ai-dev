---
summary: Use scope boundaries, diffs, checks, health evidence, and save points to decide when to ship, pause, reverse, or update.
requires: [03-04-git-save-points, 06-04-evals-and-evidence]
infographics: [rapid-app-development-workflow]
---

# Stop, rollback, and maintain

**Requires:** A definition of done, current evidence, a known save point, and
an owner for the next decision.

**Done when:** The team makes and records one justified decision—ship, pause,
rollback, or continue—with a recovery point and future maintenance trigger.

## Step 0 — Check the ground

Stop adding polish. Restate the approved scope, reviewed commit, open failures,
and production health. If no save point is known, create or identify one before
more change.

## Steps

1. Compare the current result with the PRD/brief acceptance criteria and
   non-goals.
2. Inspect the diff from the last approved save point. Separate required
   changes, discovered bugs, and optional improvements.
3. Review evidence: build, automated checks, browser path, permissions,
   production health, and human acceptance.
4. Choose:
   - **Ship:** all release blockers pass and accepted limitations are recorded.
   - **Pause:** evidence or authority is missing; preserve state and questions.
   - **Rollback:** security, data, core workflow, or production health regressed.
   - **Continue:** a specific blocking criterion remains and the next small
     action is defined.
5. For rollback, identify source commit and external/database state separately.
   Reverting source does not automatically reverse a migration or provider
   change.
6. Record maintenance triggers: upstream starter change, runtime end-of-support,
   provider auth change, dependency alert, failing scheduled check, usage
   threshold, or content review date.
7. Re-run the relevant baseline after any maintenance update before adopting
   it.

```prompt
Context: Read the approved scope, reviewed commit, diff from the last save
point, eval results, deployment/health evidence, and open issues. Do not change
or deploy anything.

Recommend ship, pause, rollback, or continue. Map every blocking criterion to
evidence. Separate source rollback from database and external-system recovery.
For continue, propose one smallest next action. For ship, list accepted
limitations and maintenance triggers. Do not recommend more polish without a
requirement.
```

## Approval gate

The product owner accepts scope and limitations. The technical/data owner
approves rollback or migration recovery. The deployment owner approves a
production change. A security/ownership failure is not waived as visual debt.

## Verify

- The decision references one commit/configuration and current evidence.
- Every blocker has an owner or forces pause/rollback.
- Rollback steps cover code, data, configuration, and external systems that
  changed.
- The last known-good result is identifiable and testable.
- Maintenance has a trigger and owner, not a vague promise.

## Save point

Record the decision in the milestone/release review. For a pause, commit or
stash only understood work and write exact resume steps. For ship, record the
deployed commit. For rollback, record both previous and restored states.

## If this fails

- **The team cannot agree on done:** return to the approved acceptance criteria;
  change scope only with the product owner.
- **No clean rollback exists:** reduce blast radius, back up data, and seek
  qualified review before another production action.
- **Upstream moved:** compare it with the pinned tested baseline; do not update
  merely because `main` is newer.
- **A session is ending mid-task:** leave a checkpoint with branch/commit,
  changed files, checks, blockers, and next command—not only a chat summary.
