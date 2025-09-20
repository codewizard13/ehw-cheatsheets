<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# HOW-TO: 📘 Git: Conventional commit guide based on diffs

**Version:** 1.0


> Optimized for: VSCode on Windows 11 + Git Bash (SSH)
> 

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-08-28       |
| **Date Updated**:  | 2025-09-20       |
| **AI Assistance**: | ChatGPT          |


---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">

## Tags:

- [Pull Requests](#)
- [GitHub](#)
- [Markdown](#)
- [AI Prompts](#)
- [Git Commit](#)


</section>




---


<!-- 🔍 Content Section Heading -->

## 📌 Overview

This guide provides a structured way of creating **Conventional Commit messages** directly from Git diffs or recent file changes. It is especially useful when reviewing pull requests, conducting code reviews, or standardizing commit formats in collaborative projects.  

The template below was originally designed as an **AI-friendly commit prompt**, but it works equally well as a manual checklist for developers.  


---


## 🔧 Usage Workflow

1. **Review the Diff**  
   Look over the file diffs to understand what code or documentation changed.  

2. **Summarize the Changes**  
   Capture a concise record of what was modified: *functions, logic updates, feature additions, dependency changes, etc.*  

3. **Speculate the Intent**  
   Why were these changes likely made? Common reasons:  
   - Bug fix  
   - New feature  
   - Refactor  
   - Performance optimization  
   - Modernization  

4. **Draft the Commit Message**  
   Follow Conventional Commit structure:  
   - **Type:** `feat`, `fix`, `refactor`, `chore`, etc.  
   - **Scope:** based on module/file (e.g., `auth-service`, `user-ui`).  
   - **Summary Line:** concise and descriptive.  
   - **Details:** bullet points of each granular change.  
   - **Optional:** “BREAKING CHANGE” section if something is incompatible.  


---


## 📝 Example Commit Structure

```md
feat(auth-user-service): add password reset support

- Implemented password reset endpoint with token validation
- Updated database schema to include password reset tokens
- Added unit tests for password reset workflow

Reason:
- Provides a secure way for users to reset forgotten passwords
- Improves usability and security of the authentication flow
```




---


## 📚 References / See Also

- Conventional Commits Specification: [https://www.conventionalcommits.org](https://www.conventionalcommits.org)
- Git Documentation: [https://git-scm.com/docs](https://git-scm.com/docs)




---



## ✅ Revision History

| Version | Date       | Author           | Changes Made                                     |
| ------- | ---------- | ---------------- | ------------------------------------------------ |
| 1.00    | 2025-08-28 | Eric L. Hepperle | Initial draft created                            |
| 1.02    | 2025-09-20 | Eric L. Hepperle | Draft formatted as KB article clone of [tmpl].md |

---
