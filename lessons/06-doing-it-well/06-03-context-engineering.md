---
summary: Assemble the smallest authoritative working set—task, sources, state, constraints, tools, examples, and stop conditions—for an agent.
requires: [02-02-the-agentic-workspace]
infographics: [context-engineering]
---

# Context engineering

![Goals, rules, relevant files, examples, and tool results enter a scoped working context while unrelated files, stale copies, secrets, and unsupported assumptions stay out.](/infographics/context-engineering.webp)

**Requires:** A concrete task, a project folder, and authoritative source files
or known missing inputs.

**Done when:** An agent can state the task, sources, current state, constraints,
output, checks, and stopping condition without guessing or reading the whole
world.

## Step 0 — Check the ground

Stop if the task cannot name an observable output. “Improve the app” is not a
working target. Choose one milestone or investigation.

## Steps

1. Write the task and definition of done in one or two sentences.
2. Route to authoritative files: governance, current PRD/brief, relevant source
   and tests, and the specific plan. Do not attach every old draft.
3. State current state: branch/commit, passing/failing checks, environment, and
   known unresolved issue.
4. State constraints: file scope, non-goals, data/privacy limits, approved
   dependencies, style, and actions requiring permission.
5. Supply a small useful example when the desired shape is hard to describe.
   Label it as an example, not product truth.
6. Name tools/actions available and those forbidden or approval-gated.
7. Specify the output: plan, diff, table, test, browser evidence, or question
   list.
8. Set a stop condition: missing input, unexpected existing change, failed
   baseline, target outside scope, or completed evidence.
9. Ask the agent to restate its understanding and unresolved decisions before
   consequential work.

```prompt
Task: [one concrete milestone]
Done when: [observable evidence]

Read first:
- [governance/instructions]
- [approved PRD or brief]
- [relevant source and tests]

Current state:
- commit/branch:
- known check result:
- environment:

Constraints:
- files in scope:
- non-goals:
- private data rules:
- approval-gated actions:

Produce: [plan/diff/report/test evidence]
Stop if: [missing input, unexpected change, failed baseline, scope conflict]

Before acting, restate the task, planned file scope, checks, and any human
decision you still need.
```

## Approval gate

The human confirms that the selected sources are current, the scope is correct,
private material is excluded, and the agent's restatement contains no hidden
product choice.

## Verify

After the result, identify which supplied context influenced each major
decision. If the agent cannot point to a source or explicit choice, treat the
decision as unapproved. Remove irrelevant context and rerun a small task to see
whether quality stays stable.

## Save point

Keep durable context in project files—PRD, plan, tests, decisions—not only in a
chat thread. Commit approved context changes separately from implementation.

## If this fails

- **The agent guesses:** add the missing source or turn the gap into a human
  question.
- **The agent wanders:** reduce to one milestone, tighter file scope, and one
  output.
- **The context window is flooded:** route with an index and short summaries;
  load detailed files only when needed.
- **Old instructions conflict:** identify the governing source and update or
  archive the stale one visibly.
