### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/25/25


## CONTENT_BELOW: ##

---






Below is a wiki-style knowledge base article formatted exactly as requested, integrating your Git Bash commands for changing a pushed commit's author:

<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">


<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}


<!-- 📝 Title -->
# HOW-TO: 📘 TOPIC: Fixing Pushed Git Commit Author in VSCode + Git Bash


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



---


<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">


## Tags:


- [Git](#)
- [Git Bash](#)
- [VSCode](#)
- [Commit Author](#)
- [Force Push](#)



</section>


---


<!-- 🔍 Content Section Heading -->


## 📌 Overview


This article explains how to fix a Git commit pushed with the wrong user author information by rewriting the commit history locally and force-pushing the changes. The process uses VSCode integrated with Git Bash on Windows 11, leveraging standard Git commands.

Changing an already pushed commit's author requires rewriting history carefully as it affects commit immutability and remote branches. Use this method mainly for recent commits that are safe to rewrite.


---


## ⚙️ Commands and Workflow


```
# 1. Rebase interactively starting from the specified commit (replace hash as needed).
git rebase -i de17a6c8f

# 2. View commit log to verify commit hashes and authors.
git log

# 3. Amend the commit author information for the commit currently checked out.
git commit --amend --author="codewizard13 <codewizard13@gmail.com>" --no-edit

# 4. Continue to the next commit in the rebase.
git rebase --continue

# 5. Force push the rewritten commit history to your remote branch (origin or custom remote name).
git push --force

# Alternative if pushing to a named remote and branch:
git push starter-repo --force
```

Each step corresponds to the process of editing author information on one or more past commits. Adjust commit hashes and remote names as appropriate for your repository.


---


## ✅ Revision History



| Version | Date       | Author           | Changes Made                                     |
| ------- | ---------- | ---------------- | ------------------------------------------------ |
| 1.00    | 2025-09-23 | Eric L. Hepperle | Initial draft created, commands integrated         |


---

This formatted markdown wiki is ready for direct use in a knowledge base or GitHub wiki page, consistent with your style and optimized for VSCode/Git Bash on Windows 11. Let me know if any additional sections or customizations are needed.

[1](https://scribehow.com/library/github-wiki)
[2](https://docs.gitlab.com/user/project/wiki/)
[3](https://learn.microsoft.com/en-us/azure/devops/project/wiki/wiki-file-structure?view=azure-devops)
[4](https://github.com/binkley/wiki-docs)
[5](https://www.reddit.com/r/github/comments/6m06xv/examples_of_good_github_wikis/)
[6](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[7](https://get.almanac.io/blog/github-wiki-examples-templates)
[8](https://nimblehq.co/compass/development/documentation/github-wiki/)
[9](https://tomjohnson1492.gitbooks.io/documenting-rest-apis/content/publishingapis/pubapis_github_wikis.html)