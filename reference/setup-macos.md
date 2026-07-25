---
summary: Prepare a macOS machine with Git, Node.js, an editor, and the optional Bun tool required by the app route.
requires: []
infographics: []
---

# Set up macOS

**Done when:** The required commands return version strings, the editor opens only the intended project folder, and account sign-ins have been tested without storing credentials in the repository.

## Step 0 — Choose the route

Both routes need Git, Node.js, a browser, and an editor or coding workspace. The app route also uses Bun because the tested starter is pinned to it. Install only what your route needs.

Use a normal user account you control. Stop if the device is managed and software installation requires organizational approval.

## Install and check

1. Install Git using an option supported by the [official Git macOS page](https://git-scm.com/download/mac). If Git is already present, do not replace it merely to obtain a different version number.

2. Install a supported Node.js release from the [official Node.js download page](https://nodejs.org/en/download). The project's declared runtime requirement is the authority.

3. Choose an editor or agentic coding workspace that can open one project folder and show file changes. Use its official installer.

4. For the app route, install Bun using the [official Bun installation guide](https://bun.com/docs/installation). Follow the guide for your shell and organization.

5. Open Terminal and run:

   ```sh
   git --version
   node --version
   npm --version
   ```

   For the app route, also run:

   ```sh
   bun --version
   ```

6. Confirm the working directory before project commands:

   ```sh
   pwd
   ```

7. Test GitHub sign-in using GitHub's current authentication guidance. Do not paste a password or access token into an AI prompt. Test Vercel through its browser interface when taking the landing-page route.

## Approval gate

Review any command copied from an installation page before running it. Package-manager installs, shell-profile edits, administrator prompts, and security-setting changes require a human check of the source and target.

## Verify

- Each required version command returns successfully.
- A new terminal window still finds the commands.
- The editor shows the intended project root, not the whole Desktop or home folder.
- GitHub opens under the intended account.
- No real credential appears in a project file, screenshot, or terminal transcript.

## Save point

Do not commit machine-specific paths or credentials. Once a project exists, commit its declared version files, manifest, and lockfile so another machine can reproduce the setup.

## If it fails

- “Command not found” after install: close and reopen the terminal, then follow the installer's documented path instructions.
- A managed-device prompt appears: stop and ask the administrator.
- Several Node or Git installations conflict: record the output of `which node` or `which git` and use the project's documented version manager or installer; do not delete system files.
- GitHub authentication fails: use [GitHub's authentication documentation](https://docs.github.com/en/authentication) and verify the intended account.
- A shell configuration edit is proposed: inspect the exact file and line before approving it.
