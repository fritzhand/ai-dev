---
summary: Prepare a Windows machine with Git, Node.js, an editor, and the optional Bun tool required by the app route.
requires: []
infographics: []
---

# Set up Windows

**Done when:** PowerShell finds the required tools, the editor opens only the intended project folder, and account sign-ins work without placing credentials in source files.

## Step 0 — Choose the route

Both routes need Git, Node.js, a browser, and an editor or coding workspace. The app route also uses Bun because the tested starter is pinned to it.

Use a Windows account and device you are authorized to configure. Stop if organizational policy controls software installation or PowerShell settings.

## Install and check

1. Install Git using the [official Git for Windows download](https://git-scm.com/download/win). Keep unfamiliar installer choices at their documented defaults unless your organization says otherwise.

2. Install a supported Node.js release from the [official Node.js download page](https://nodejs.org/en/download). Follow the project requirement rather than choosing a version from memory.

3. Choose an editor or coding workspace from its official source. Open one project folder, not your user profile or the entire Desktop.

4. For the app route, install Bun using the [official Bun installation guide](https://bun.com/docs/installation) and its Windows instructions.

5. Open a new PowerShell window and run:

   ```powershell
   git --version
   node --version
   npm --version
   ```

   For the app route:

   ```powershell
   bun --version
   ```

6. Confirm the current directory:

   ```powershell
   Get-Location
   ```

7. Test GitHub sign-in using its current authentication guidance. Test Vercel in the browser for the landing-page route. Do not put tokens in commands that will be copied into lesson notes or prompts.

## Approval gate

Review installer source, requested privileges, destination, PATH changes, PowerShell policy changes, and optional components before approval. Do not weaken a machine-wide security setting merely to get past an unfamiliar error.

## Verify

- Each required command returns a version string in a new PowerShell window.
- `Get-Location` shows the intended project folder before project commands.
- The editor's file tree contains only the intended project.
- GitHub opens under the correct account.
- No real credential is stored in a tracked file.

## Save point

Do not commit Windows user paths, tokens, or generated dependency folders. Commit the project's manifest, lockfile, and declared runtime files once the project exists.

## If it fails

- PowerShell cannot find a newly installed command: open a new window and follow the installer's official PATH guidance.
- Script execution is blocked: read the exact error and the tool's Windows documentation. Ask an administrator on a managed device; do not apply a broad machine-wide bypass.
- A path contains spaces: quote the exact path when the command's documentation requires it, or open the folder through the editor.
- Git uses a different account than the browser: inspect Git identity and GitHub authentication separately.
- Line endings create a large diff: stop and inspect repository configuration before accepting automatic conversion.
