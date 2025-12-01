<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
!Site Logo{height=32}

<!-- 📝 Title -->
# HOW-TO: 📘 GIT: Fixing Mistakes – A Comprehensive Guide

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

<!-- 🧭 Navigation -->
### 🏚️ Home | 📁 How-To

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-10-14       |
| **Date Updated**:  | 2025-10-14       |
| **AI Assistance**: | ChatGPT          |

---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts -->
<section id="sec-tags">

## Tags:

- Git
- Undo
- Version Control
- Troubleshooting
- Revert

</section>

---

<!-- 🔍 Content Section Heading -->
## 📌 Overview

Git is a powerful distributed version control system. While it offers immense flexibility and control, mistakes are inevitable—be it committing to the wrong branch, a bad merge, or deleting files unintentionally. Luckily, Git provides multiple tools to undo actions, recover lost work, and reset the state of your repository.

This guide explores **common Git mistakes** and provides detailed steps to fix them. Each section covers:

- What went wrong
- How to detect it
- How to fix or recover from it
- Best practices to avoid the issue in the future

The guide covers everything from simple `git checkout` corrections to advanced history rewrites with `git rebase` and `git reflog`.

---

<!-- 📂 Table of Contents (Collapsible) -->
<details>
<summary><strong>📑 Table of Contents</strong></summary>

- [HOW-TO: 📘 GIT: Fixing Mistakes – A Comprehensive Guide](#how-to--git-fixing-mistakes--a-comprehensive-guide)
    - [🏚️ Home | 📁 How-To](#️-home---how-to)
  - [Tags:](#tags)
  - [📌 Overview](#-overview)
  - [🧨 Common Mistakes \& Fixes](#-common-mistakes--fixes)
    - [Committed to the Wrong Branch](#committed-to-the-wrong-branch)
    - [Forgot to Add a File](#forgot-to-add-a-file)
    - [Want to Edit Last Commit Message](#want-to-edit-last-commit-message)
    - [Want to Undo Last Commit Completely](#want-to-undo-last-commit-completely)
    - [Accidentally Deleted a File](#accidentally-deleted-a-file)
    - [Undo a Merge](#undo-a-merge)
    - [Revert a Commit Already Pushed](#revert-a-commit-already-pushed)
    - [Unstage a File](#unstage-a-file)
    - [Undo All Local Changes](#undo-all-local-changes)
    - [Dropped a Commit](#dropped-a-commit)
  - [⚙️ Advanced Recovery](#️-advanced-recovery)
    - [Using `git reflog`](#using-git-reflog)
    - [Using `git cherry-pick`](#using-git-cherry-pick)
    - [Using `git reset`](#using-git-reset)
    - [Using `git revert`](#using-git-revert)
  - [📚 References / See Also](#-references--see-also)
    - [🔗 Git Commands](#-git-commands)
    - [🔧 Tools \& Platforms](#-tools--platforms)
    - [🧠 Concepts \& Tutorials](#-concepts--tutorials)
  - [✅ Revision History](#-revision-history)

</details>

---

## 🧨 Common Mistakes & Fixes

### Committed to the Wrong Branch

**Problem:** You committed changes to the wrong branch.

**Fix:**

```bash
# Create a new branch from current state
git branch correct-branch-name

# Switch to the intended branch
git checkout intended-branch

# Cherry-pick the commits
git cherry-pick commit_hash
````

> Use `git log` to find the correct commit hash.

---

### Forgot to Add a File

**Fix:**

```bash
# Add the file
git add forgotten-file.txt

# Amend the commit
git commit --amend
```

> ⚠️ Use only if the commit hasn’t been pushed.

---

### Want to Edit Last Commit Message

```bash
git commit --amend -m "New message"
```

---

### Want to Undo Last Commit Completely

```bash
git reset --hard HEAD~1
```

> Removes commit and changes. Use `--soft` to keep changes in staging.

---

### Accidentally Deleted a File

```bash
# Recover from last commit
git checkout HEAD -- path/to/file.txt
```

---

### Undo a Merge

```bash
git reset --hard ORIG_HEAD
```

---

### Revert a Commit Already Pushed

```bash
git revert <commit-hash>
```

> This adds a new commit that reverses the changes.

---

### Unstage a File

```bash
git restore --staged path/to/file.txt
```

---

### Undo All Local Changes

```bash
git reset --hard
git clean -fd
```

> Use with caution. This deletes all untracked files and resets changes.

---

### Dropped a Commit

Use reflog to find and recover the lost commit:

```bash
git reflog
git checkout <commit-hash>
```

---

## ⚙️ Advanced Recovery

### Using `git reflog`

`git reflog` shows a history of all HEAD movements. Use it to recover lost commits, branches, or resets.

---

### Using `git cherry-pick`

Apply a specific commit from one branch to another.

```bash
git cherry-pick <commit-hash>
```

---

### Using `git reset`

| Type      | Effect                     |
| --------- | -------------------------- |
| `--soft`  | Keeps changes staged       |
| `--mixed` | Keeps changes unstaged     |
| `--hard`  | Discards all local changes |

---

### Using `git revert`

Use this for public branches. It creates a new commit to undo a previous commit safely.

---

## 📚 References / See Also

### 🔗 Git Commands

* [git-scm.com: Official Git Docs](https://git-scm.com/docs)
* [Git Cheat Sheet by GitHub](https://education.github.com/git-cheat-sheet-education.pdf)
* [Pro Git Book](https://git-scm.com/book/en/v2)

### 🔧 Tools & Platforms

* [GitHub](https://github.com/)
* [GitKraken](https://www.gitkraken.com/)
* [SourceTree](https://www.sourcetreeapp.com/)

### 🧠 Concepts & Tutorials

* [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
* [Oh Shit, Git!](https://ohshitgit.com/)

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made                                 |
| ------- | ---------- | ---------------- | -------------------------------------------- |
| 1.00    | 2025-09-23 | Eric L. Hepperle | Initial draft created                        |
| 1.01    | 2025-10-14 | ChatGPT          | Converted to full KB, reorganized, TOC added |

```

---

Let me know if you'd like this saved as a downloadable `.md` file or if you'd like image placeholders inserted for each section (e.g. command explanations or flowcharts).
