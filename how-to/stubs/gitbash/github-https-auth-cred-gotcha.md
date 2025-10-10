Eric Hepperle, Perplexity 2025-09-20


### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:



## CONTENT_BELOW: ##

---









Here is your KB article revamped with emoji and graphic elements for quick human scanning and readability:

***

# 📌 GitHub HTTPS Authentication Gotcha on Windows Using Credential Manager

***

## ⚠️ Overview

When using **Git over HTTPS** on Windows, your **GitHub credentials** (username + token) are cached by **Windows Credential Manager** through **Git Credential Manager (GCM)**. If you use multiple GitHub accounts on the same PC, this can cause:

- 😕 Local Git username changes working ✅  
- 🚫 Push/pull failing with **403 permission denied** errors  
- 🔑 Authentication happening with the wrong cached user  

***

## 🔍 Common Problem

- You set identity with:  
  ```bash
  git config --local user.name "correct-username"
  git config --local user.email "correct-email"
  ```
- Your commit info looks right, but pushing fails as GitHub rejects permission with an error mentioning the *wrong* user.
- Credential Manager has cached credentials for a **different GitHub user**, causing authentication mismatch.

***

## 🛠️ Quick Workaround Steps

1. Open **Windows Credential Manager**:  
   `Control Panel > User Accounts > Credential Manager > Windows Credentials`  
   ![Credential Manager example]( Look for entries starting with:  
   ```
   git:https://github.com
   ```
3. Click **Remove** to delete credentials for the wrong user.

4. Run your script to switch Git user locally:  
   ```bash
   git config --local user.name "correct-username"
   git config --local user.email "correct-email"
   git config --local credential.helper manager
   ```

5. Perform the next `git push` or `git fetch`. GCM will prompt for new credentials.

6. Enter the **correct GitHub username** and **personal access token** when prompted.

7. Credentials are now cached correctly for subsequent operations.

***

## 💡 Additional Tips

- If you switch often between accounts, you must clear stored credentials each time or automate the clearing step with scripts.
- Using **SSH keys** with per-account configs avoids this issue and simplifies multiple identity management.
- The GitHub CLI (`gh`) tool supports scripted login flows that can aid in automation.
- **Local Git config (`user.name` and `user.email`) only affects commit metadata, not authentication credentials**. Authentication credentials are handled separately by Credential Manager.

***

## 🎯 Why This Happens

Git separates:

| Commit Identity (Metadata)              | Authentication Credentials                         |
| ------------------------------------- | ------------------------------------------------- |
| `user.name` & `user.email`             | Token/password used to access remote repo         |
| Controls author info on commits         | Controls who is authorized to interact with GitHub |
| Stored in Git config (local/global)     | Stored securely in OS-level Credential Manager      |

***

This is a **frequently overlooked gotcha** that leads to confusing permission errors when managing multiple GitHub accounts on one Windows machine over HTTPS.

***

If you want, this article can include example PowerShell or batch scripts to automate credential clearing!

***

Would you like that?

[1](https://www.graphapp.ai/blog/the-ultimate-technical-documentation-template-a-comprehensive-guide)
[2](https://www.guidde.com/blog/writing-effective-and-engaging-technical-documentation-actionable-steps)
[3](https://www.reddit.com/r/msp/comments/1bcz8uj/standard_formatting_for_technical_documentation/)
[4](https://www.archbee.com/blog/visuals-in-technical-documentation)
[5](https://www.docuwriter.ai/posts/format-for-technical-documentation)
[6](https://technicalwriterhq.com/writing/technical-writing/technical-writer-style-guide/)
[7](https://www.heretto.com/blog/visuals-in-technical-documentation)
[8](https://technicalwriterhq.com/documentation/documentation-formatting-examples/)
[9](https://technicalwriterhq.co/create-a-technical-writing-style-guide-a1e1fcb9162c)
[10](https://www.reddit.com/r/technicalwriting/comments/13vdt08/what_are_some_resources_that_illustrate_technical/)