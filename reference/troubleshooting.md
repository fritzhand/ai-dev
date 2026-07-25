---
summary: Diagnose common setup, Git, build, asset, authentication, and deployment failures while preserving the first useful evidence.
requires: []
infographics: []
---

# Troubleshooting

Use this page after a check fails. Diagnose before changing.

## Preserve the first useful evidence

Record:

- the exact step and command or browser action;
- the full error with secrets and personal data redacted;
- current folder, branch, and environment;
- what changed immediately before the failure;
- the expected result;
- whether local, preview, or production is affected.

Do not run cleanup, reset, reinstall, or deletion commands just to get a different error.

## Quick routes

| Symptom | First safe check | Next route |
| --- | --- | --- |
| Command not found | Run the applicable version check in a new terminal. | [macOS setup](setup-macos.md) or [Windows setup](setup-windows.md) |
| Wrong files appear | Print the current directory and inspect the editor root. | [Project folder](../lessons/03-the-machine/03-02-editor-ide-and-file-tree.md) |
| Unknown terminal command | Ask for a no-run explanation of program, flags, targets, and side effects. | [Command approval](../lessons/03-the-machine/03-01-terminal-and-command-approval.md) |
| Package install or build fails | Read the README, `package.json`, chosen lockfile, and first failure line. | [Runtimes and packages](../lessons/03-the-machine/03-03-node-packages-and-runtimes.md) |
| Git shows unexpected files | Run `git status --short` and `git diff`; do not restore yet. | [Git save points](../lessons/03-the-machine/03-04-git-save-points.md) |
| Push is rejected | Inspect branch, remote, latest commit, and current GitHub authentication. | [GitHub and review](../lessons/03-the-machine/03-05-github-repositories-and-review.md) |
| Image or link breaks after deploy | Check exact case, relative path, base path, and build output. | [Markdown and assets](../lessons/03-the-machine/03-06-markdown-assets-and-paths.md) |
| Local works, preview fails | Compare build log, runtime, lockfile, and preview environment names. | [Whole web stack](../lessons/03-the-machine/03-07-framework-host-domain-database.md) |
| Preview works, production fails | Compare environment-specific values, domain, redirect URLs, and exact deployed commit. | [Whole web stack](../lessons/03-the-machine/03-07-framework-host-domain-database.md) |
| API call is unauthorized | Confirm server-side variable name, provider project, environment, and credential status without printing the value. | [API keys and billing](../lessons/02-where-you-use-it/02-04-apis-keys-and-billing.md) |
| OAuth returns to the wrong place | Compare configured local/production origins and callback allow-lists in each provider. | App authentication lesson |
| Database says unauthorized | Separate authentication, application authorization, query ownership scope, and RLS path. | App data lesson |
| Agent repeats changes | Restate failed check, allowed files, and stopping condition in a clean task. | [Agentic workspace](../lessons/02-where-you-use-it/02-02-the-agentic-workspace.md) |

## Ask for diagnosis only

```prompt
Context: The intended result is [result]. The failing step is [step]. The
environment is [local/preview/production]. The project folder and branch are
[details]. Here is the redacted error and the relevant current state:
[evidence].

Diagnose only; do not edit files, install, reset, restore, migrate, change an
account, or deploy. Rank the likely causes by evidence. For the first cause,
give one read-only discriminating check, the result that would confirm it, and
the safe next decision. Preserve the original failure. Mark missing evidence
instead of guessing.
```

## Escalate immediately

Stop ordinary debugging when:

- a credential, private key, customer record, or participant data was exposed;
- a destructive command, production migration, or permission change ran unexpectedly;
- the wrong repository, account, database, or domain was changed;
- billing or external sends continue unexpectedly;
- recovery could overwrite someone else's work.

Revoke exposed credentials, disable the affected integration if authorized, preserve logs, and involve the system owner. Deleting visible text does not revoke a credential or undo an external action.

## A good recovery note

Record the failed check, root cause, exact fix, verification, affected environments, and prevention. Do not turn a one-off workaround into course guidance until it is tested from a clean state.
