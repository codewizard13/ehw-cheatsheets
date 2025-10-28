### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/25/25


## CONTENT_BELOW: ##

---




<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">


<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg Title -->
# HOW-TO: 📘 TOPIC: VSCode GitHub Pull Request Extension "Must Be a Collaborator" Error & Authentication Gotchas


**Version:** 1.0



> Optimized for: VSCode on Windows 11 + Git Bash (SSH)
> 


<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)


<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-25       |
| **Date Updated**:  | --               |
| **AI Assistance**: | ChatGPT          |



***


<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">


## Tags:


- [GitHub Authentication](#)
- [VSCode Extensions](#)
- [Pull Request Errors](#)


</section>


***


<!-- 🔍 Content Section Heading -->


## 📌 Overview


This knowledge base article deeply explains a common but confusing issue encountered in Visual Studio Code with the GitHub Pull Request extension where users receive the error **"must be a collaborator"** upon creating a pull request, despite being logged into the correct GitHub account. It covers the series of troubleshooting steps, why many fail, and the precise interaction needed within VSCode to finally resolve the problem, especially when multiple GitHub accounts or credential profiles get involved.


***


## ✅ Detailed Explanation and Troubleshooting Steps


### Cause of the "Must Be a Collaborator" Error

The error message `"must be a collaborator"` occurs because GitHub's API requires that the user creating a pull request has collaborator or write access on the targeted repository. Even if you are logged into GitHub somewhere on your machine, the VSCode GitHub Pull Request extension uses an internal authentication token tied to a GitHub account profile selected in VSCode — if this account lacks the required permissions, the error appears.


### Why Simple Credential Refresh Often Fails

- Even after logging in correctly to the desired GitHub account in VSCode, sometimes the extension doesn't acknowledge the change due to cached tokens or multiple signed-in accounts.
- Windows Credential Manager or Git credential helper changes may help locally in terminals but won't necessarily update tokens used internally by VSCode extensions.
- Running commands like `gh auth login` after installing GitHub CLI, while good practice for terminal usage, doesn't automatically sync VSCode's internal GitHub auth state.
- Network issues, proxy/firewall settings, or interfering software may block OAuth popups or token refresh flows.
- Confusingly, VSCode maintains a **top-center Account/Profile dropdown** selector independent of Windows or global Git credentials, which exclusively governs which GitHub user identity the GitHub extensions use.


### Failed Attempts Commonly Seen

- Signing out/in repeatedly through VSCode menus but overlooking the dropdown account selector.
- Reinstalling the GitHub Pull Requests and Authentication extensions while not realizing account selection issues persist.
- Manually clearing Windows Credential Manager credentials without addressing VSCode’s internal account state.
- Authenticating using GitHub CLI, then restarting VSCode but not changing the active account in VSCode UI.
- Ignoring or missing error messages related to OAuth popups blocked by firewall or browser issues.
- Attempting to create PRs from a repository where you truly have no collaborator rights.


### Final Working Solution in Deep Granularity

1. **Sign out all GitHub accounts** from VSCode entirely via the Accounts menu (top right corner).
2. **Close and completely quit VSCode** — ensure no VSCode or related background processes remain.
3. **Reopen VSCode** freshly and open your repository/project folder.
4. Initiate the **"Create Pull Request"** action from the GitHub Pull Request extension UI.
5. **In VSCode's top-center Account/Profile dropdown**, carefully select the **correct GitHub user account** which has collaborator permissions (for example, "codewizard13").
   - This dropdown explicitly switches which GitHub authentication token the extension uses.
6. The extension will auto-open a browser OAuth window if required to acquire a fresh token for that account.
7. Now, VSCode authenticates properly, and the pull request creation proceeds without the "must be a collaborator" error.


### Additional Recommendations

- Regularly check the top-center Account/Profile drop-down before creating PRs, especially if switching between multiple GitHub identities.
- Keep GitHub CLI installed and authenticated (`gh auth login`) as a useful terminal fallback, but understand it does not guarantee VSCode extension auth sync.
- If you work on multiple repos or organizations, use separate VSCode Profiles or Containers to isolate auth contexts.
- Check your Internet, proxy, firewall, or browser pop-up filtering if OAuth windows fail to appear.
- Occasionally revoke and reauthorize the "GitHub for VSCode" OAuth app on your GitHub.com settings to reset stale permissions.
- Review branch protection rules and repository permissions if you continue to get collaborator errors even after proper authentication.


***


## 📚 References / See Also



- [Working with GitHub in VS Code - Official Docs](https://code.visualstudio.com/docs/sourcecontrol/github)
- [GitHub CLI Quickstart](https://cli.github.com/)
- [VSCode GitHub Authentication Troubleshooting - Reddit](https://www.reddit.com/r/vscode/comments/1inr36o/please_help_me_im_going_insane/)
- [GitHub Pull Request Extension Issue #4950](https://github.com/microsoft/vscode-pull-request-github/issues/4950)


***


## ✅ Revision History



| Version | Date       | Author           | Changes Made                                     |
| ------- | ---------- | ---------------- | ------------------------------------------------ |
| 1.00    | 2025-09-25 | Eric L. Hepperle | Initial draft created                            |


---

[1](https://azurecodingarchitect.com/posts/gitcredentials/)
[2](https://www.reddit.com/r/vscode/comments/1inr36o/please_help_me_im_going_insane/)
[3](https://stackoverflow.com/questions/78066767/cannot-sign-in-with-github-in-vscode)
[4](https://code.visualstudio.com/docs/remote/troubleshooting)
[5](https://docs.github.com/en/codespaces/troubleshooting/troubleshooting-authentication-to-a-repository)
[6](https://code.visualstudio.com/docs/sourcecontrol/github)
[7](https://developercommunity.visualstudio.com/t/GitHub-Account-Authentication-and-Copilo/10602813)
[8](https://github.com/microsoft/vscode/issues/186858)
[9](https://developercommunity.visualstudio.com/t/Visual-Studio---Sign-in-with-GitHub-is-n/10536430?sort=active)