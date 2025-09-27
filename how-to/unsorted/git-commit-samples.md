<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# HOW-TO: 📘 Git: Commit Message Samples and Best Practices

**Version:** 1.0


> Optimized for: VSCode on Windows 11 + Git Bash (SSH)
> 

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-22       |
| **Date Updated**:  | --               |
| **AI Assistance**: | Perplexity       |


---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">

## Tags:

- [Git](#)
- [Best Practices](#)
- [Commit Messages](#)


</section>




---


<!-- 🔍 Content Section Heading -->

## 📌 Overview



Writing clear and consistent git commit messages ensures better collaboration and project history readability. This guide provides sample commit messages and common best practices to help craft high-quality commits in your development workflow[web:19][web:22][web:23].


---

## 📝 Sample Commit Messages

```
🔖 chore(theme): initialize version 3.02.08 and update documentation

- updated version to 3.02.08 in `README.md` and `package.json`
- ran `npm run update-style-file` to sync version in `style.css`
```

```
chore(theme): finalize v3.02 and prepare for release

* Updated `package.json`, `style.css`, `README.md`, `CHANGELOG.md` and `screenshot.jpg` to reflect final release state
```

```
Generate a detailed yet succinct conventional commit message formatted as follows:  
- Use type `docs` unless clearly another type, with scope equal to the **top-level affected folder** only (e.g., if file is in `guides/github/index.md`, use scope `guides`).  
- If no folder is given or detected for scope, default to `how-to`.  
- Summary line ≤70 chars, concise, explaining what and why.  
- If file paths are explicitly provided in the input, group them under their **full relative folder path** (e.g., **guides/github**) as a heading, and list only the filenames beneath.  
- If *no files are specified*, skip the folder and file listing entirely.  
- Everything below the summary line that is not a heading (e.g., all file bullets or changes) must be formatted as bullet items.  
- For each listed file, add up to 6 concise bullet items starting with *Added, Updated, Corrected, Removed, Refactored,* etc., describing the changes.  
- Optionally include a final section prefixed with ⚠️ **Notes & Caveats:** for warnings, caveats, or follow-up tasks.  
- Maintain consistent blank lines and indentation for readability.:

Draft:

[Diff / rough draft content here]
```


```
Give title and kb article for the following wiki content. Also, propose 2 or 3 filenames for the markdown file following these requirements:

- max chars = 36, optimum desired chars = 20
- format:  [topic_abbr]-[brief-hyphen-separated-descr].md
- topic abbr exs: win = Windows, github, git, js = JavaScript, tbird = thunderbird email app, localwp = LocalWP/ local lightning, bash = bash shell, lo = LibreOffice, lo-calc = LibreOffice Calc, etc.

Content:

[Draft content here]
```

**More Example Commit Types:**
- `feat(auth): add Google authentication support`
- `fix(login): resolve password validation bug`
- `docs(readme): update installation instructions`
- `refactor(api): simplify error handling logic`

---

## ✅ Best Practices for Commit Messages

- Start with a short, capitalized subject line in imperative mood (e.g., "Fix bug" not "Fixed bug")[web:22][web:24][web:25].
- Separate subject line from body with a blank line[web:22][web:20].
- Limit subject to ~50 characters; wrap body at 72 characters[web:24][web:22].
- Use commit types like `feat`, `fix`, `docs`, `chore`, etc., and optionally a scope[web:19][web:23].
- Summarize **what** and **why**, not the **how**, in the body[web:23][web:24].
- Reference issues or tickets if relevant (e.g., `Fixes #123`)[web:22].

---

<!-- 📚 References (Optional) -->
## 📚 References / See Also

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)[web:19]
- [Git Commit Message Guidelines — GitHub Gist][web:22]
- [Best Practices for Git Commit Message — Baeldung][web:25]


[1](https://www.conventionalcommits.org/en/v1.0.0/)
[2](https://www.gitkraken.com/learn/git/best-practices/git-commit-message)
[3](https://www.reddit.com/r/git/comments/f502nz/how_to_write_a_good_commit_message_focus_on/)
[4](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53)
[5](https://codefinity.com/blog/7-Best-Practices-of-Git-Commit-Messages)
[6](https://www.theserverside.com/video/Follow-these-git-commit-message-guidelines)
[7](https://www.baeldung.com/ops/git-commit-messages)
[8](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
[9](https://stackoverflow.com/questions/15324900/standard-to-follow-when-writing-git-commit-messages)


---

## ✅ Revision History


| Version | Date       | Author           | Changes Made                                     |
| ------- | ---------- | ---------------- | ------------------------------------------------ |
| 1.00    | 2025-09-03 | Eric L. Hepperle | Initial draft created                            |
| 1.02    | 2025-09-22 | Eric L. Hepperle | Draft formatted as KB article clone of [tmpl].md |

---
