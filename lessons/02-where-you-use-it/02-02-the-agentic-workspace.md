---
summary: Supervise an agent through a bounded plan, action, observation, and verification loop with a clear stop condition.
requires: [02-01-same-model-different-surfaces]
infographics: [what-agentic-actually-means]
---

# Plan, act, observe, check

![A one-turn assistant is contrasted with an agent that plans, acts, observes, and checks inside a controlled loop.](/infographics/what-agentic-actually-means.webp)

**Requires:** A project folder, a bounded task, and a surface permission map from [the previous lesson](02-01-same-model-different-surfaces.md).

**Done when:** The agent has produced a reviewed plan, one bounded change, evidence from a check, and a clear stop or next approval.

## Step 0 — Check the ground

Confirm the folder, current Git status, goal, non-goals, and definition of done. Stop if unrelated uncommitted work could be overwritten or confused with the task.

An **agentic** tool can do more than return text. It can plan, call tools, inspect results, adjust, and continue. That makes stopping rules and evidence essential.

## Steps

1. Define the loop:

   ```text
   goal → plan → human review → bounded action → observation → check → stop or next step
   ```

2. Split the task into milestones that leave inspectable evidence. Good milestones produce one of:

   - a source inventory;
   - an approved plan;
   - a small diff;
   - a passing test;
   - a browser screenshot;
   - a deployment log.

3. Tell the agent which local, reversible actions are already authorized and which actions require approval. External writes, destructive commands, purchases, migrations, account changes, and production deployments stay gated.

4. Ask for a plan without implementation:

   ```prompt
   Context: Work only in [project folder]. The goal is [goal]. A passing result
   must [checks]. Relevant files are [files]. Non-goals are [non-goals].

   Inspect and plan only. Do not edit files, install packages, run a migration,
   write to an external system, commit, or deploy.

   Return:
   1. current state and risks,
   2. milestones in dependency order,
   3. files each milestone may change,
   4. verification after each milestone,
   5. approval gates,
   6. a stopping condition,
   7. recovery if a check fails.
   ```

5. Review the plan. Authorize only the next milestone.

6. After the action, inspect the diff or output before accepting the agent's summary. Run the named check and keep its evidence.

7. Stop when the definition of done is met. “There are more improvements available” is not a reason to expand scope.

## Approval gate

The human checks the plan, exact files, commands, side effects, rollback, and next verification before authorizing each consequential milestone. Approval for one milestone does not approve the rest.

## Verify

You pass when you can point to:

- the approved plan;
- the exact change;
- the check that ran;
- the evidence it produced;
- the reason the agent stopped.

Do not accept “done” without inspecting those items.

## Save point

Commit a passing milestone with a message that describes what it proves. Keep plans, test output summaries, or review notes when they explain an important decision.

## If it fails

- The agent changes files during planning: stop, inspect the diff, and restore only after a human decides what to keep.
- A milestone is too large to review: split it by one user-visible outcome or one system boundary.
- The check fails: preserve the failure output and ask for diagnosis before a fix.
- The agent loops: restate the stop condition and remaining failed check in a clean task.
- The plan expands beyond the goal: move additions to a later list; do not silently absorb them.
