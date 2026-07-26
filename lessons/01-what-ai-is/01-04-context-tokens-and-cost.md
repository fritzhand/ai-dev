---
summary: Build a small working context, understand token-based usage, and prevent long threads from obscuring the current task.
requires: [01-01-models-predict-text]
infographics: [where-your-words-actually-go]
---

# What the model is holding

![A request moves through context assembly, tokenisation, and model output, with caching and retrieval shown as variable.](/infographics/where-your-words-actually-go.webp)

**Requires:** A task with at least two possible source files or pieces of prior conversation.

**Done when:** You have assembled the smallest sufficient context packet, removed irrelevant material, and identified where current usage or cost can be checked.

## Step 0 — Check the ground

State the current goal in one sentence. Stop if the task has no finish condition or if you cannot identify the authoritative source. More context cannot repair an undefined job.

## Steps

1. Treat **context** as the model's working set for this request. Depending on the surface, it can include instructions, conversation history, attached files, selected code, retrieved passages, tool results, and prior output.

2. Treat **tokens** as the units a model processes. They are not identical to words. Providers use token counts and sometimes tool-specific units to describe limits and usage.

3. Build a context packet in this order:

   - goal and observable finish condition;
   - hard constraints and approval boundaries;
   - the smallest authoritative source files;
   - current state, such as errors or a diff;
   - required output shape;
   - explicit exclusions.

4. Remove duplicates, old drafts, unrelated logs, and broad folders. Point to one source of truth when several files repeat the same fact.

5. Route before loading. Use a README, index, file tree, or short summary to decide which detailed files matter.

6. Start a new thread when the goal changes materially or prior assumptions are making the current work hard to audit. Different products may summarize, trim, or otherwise manage long histories differently; consult the surface's current documentation.

7. Check cost at the system that bills the work. A chat subscription and API usage are separate products unless the provider explicitly says otherwise. API cost often depends on model, input and output usage, and enabled tools, but the current pricing page is the authority.

8. Ask the model to design the packet before loading everything:

   ```prompt
   Context: My goal is [goal]. The available files are [short file list with
   one-line descriptions]. A passing result must [checks].

   Do not solve the task yet. Propose the smallest context packet needed.
   For each file, mark INCLUDE, ROUTE ONLY, or EXCLUDE and explain why.
   Identify missing authority, duplicated information, stale state, and any
   secret or personal data that should not enter the request.
   End with the exact ordered packet you want me to provide.
   ```

## Approval gate

Before sending private, customer, participant, or company material, a human confirms that the chosen surface is allowed to receive it and that unnecessary sensitive data has been removed.

## Verify

Give the packet to a fresh thread and ask it to restate:

- the goal;
- the authoritative sources;
- the constraints;
- what it must not do;
- the definition of done.

The context passes when the restatement is correct without adding assumptions.

## Save point

Save the routing note or context manifest beside the project. Keep secrets out of it. Record current pricing and limits only as dated links or operational notes.

## If it fails

- The model misses a constraint: move it into the explicit constraint block and remove competing wording.
- It uses an old draft: name the authoritative file and exclude the old one.
- The request is too large: split it into inspect, plan, implement, and verify stages with saved outputs.
- Usage is unexpectedly high: inspect the provider's usage breakdown, repeated prompt content, tool calls, and output length.
