<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb-h32.png)


<!-- 📝 Title -->
# HOW-TO: 📘 TOPIC: Safely Undo Recent Git Commits in VS Code Without Losing Work

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)


<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 Developer Guide](index.md)


<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-10-24       |
| **Date Updated**:  | --               |
| **AI Assistance**: | ChatGPT          |


---

<section id="sec-tags">

## Tags:

- Git Undo
- Git Reset
- VSCode Git
- Commit Amend

</section>

---

## Alternate Discovery Titles (Indexing Aid)

These alternate titles ensure searchability for related phrasing:

- *Reversing a Bad Commit in VS Code: Reset, Reflog, and Amend Workflow*
- *Diagnosing Git State Confusion After Reset HEAD~1*


---

<!-- 🔍 Content Section Heading -->

## 📌 Overview

Accidentally committing the wrong file (or forgetting to exclude one) is common. Attempting to fix that commit using `git reset HEAD~1` can introduce extra unintended changes in the VSCode Git UI, leading to confusion, fear of losing changes, and warnings about dangerous operations such as `--hard` resets.

This document provides:

- A safe recovery workflow using **reflog**, **branching**, and **stash**
- A clear explanation of **why the confusion occurred**
- How Git commit history works internally (linked-list structure)
- How to amend a commit **without creating a new commit**
- How to safely remove one file from a commit
- VSCode Git status caching quirks and why “Updated” labels appear
- Commands that were tried earlier but proven risky or incorrect for this edge case

Primary goal: Restore repository state to the moment before a mistaken reset and safely amend the commit while retaining all other changes.

---

## 📖 Collapsible Table of Contents

<details>
<summary><strong>📂 Expand / Collapse Table of Contents</strong></summary>

- [HOW-TO: 📘 TOPIC: Safely Undo Recent Git Commits in VS Code Without Losing Work](#how-to--topic-safely-undo-recent-git-commits-in-vs-code-without-losing-work)
    - [🏚️ Home | 📁 Developer Guide](#️-home---developer-guide)
  - [Tags:](#tags)
  - [Alternate Discovery Titles (Indexing Aid)](#alternate-discovery-titles-indexing-aid)
  - [📌 Overview](#-overview)
  - [📖 Collapsible Table of Contents](#-collapsible-table-of-contents)
  - [✅ Final Desired Result](#-final-desired-result)
  - [📍 Problem Summary](#-problem-summary)
  - [🧠 Why This Happened](#-why-this-happened)
  - [🔧 Safe Recovery Workflow](#-safe-recovery-workflow)
    - [Step 1: Identify the target commit via reflog](#step-1-identify-the-target-commit-via-reflog)
    - [Step 2: Create a recovery branch from that commit](#step-2-create-a-recovery-branch-from-that-commit)
    - [Step 3: Remove one file from the commit without losing anything](#step-3-remove-one-file-from-the-commit-without-losing-anything)
    - [Step 4: Amend the commit safely](#step-4-amend-the-commit-safely)
  - [🧹 VSCode UI Confusion Explained](#-vscode-ui-confusion-explained)
  - [⚠️ Commands That Caused or Could Cause Damage](#️-commands-that-caused-or-could-cause-damage)
  - [🧩 Git Internals: Commit Parent Linked-List Model](#-git-internals-commit-parent-linked-list-model)
  - [📌 Status of Other Commands Used](#-status-of-other-commands-used)
  - [📚 References / See Also](#-references--see-also)
    - [Git Documentation](#git-documentation)
    - [VS Code Git Integration](#vs-code-git-integration)
    - [Tools Referenced](#tools-referenced)
  - [✅ Revision History](#-revision-history)

</details>

---

## ✅ Final Desired Result

- Restore repo state to the pre-reset commit:
```

4fa8d6e8 ✅ chore(theme): finalize version 4.01 and expand readme, changelog

````
- Keep the most recent two commits intact
- Remove one file from the commit **without** adding a new commit
- Work completely preserved
- Git history remains clean and linear

---

## 📍 Problem Summary

You ran:

```sh
git reset HEAD~1
````

This caused:

* Older unrelated files to appear modified
* VSCode showing “changed” files with no visible diff
* Fear of corrupt state
* Conflicting Git advice on the internet

Root issue: misunderstanding of how reset affects **staging area** and **workspace**.

---

## 🧠 Why This Happened

`git reset HEAD~1` moves the branch pointer back **but leaves file changes in the working directory**. This reveals previously committed items as "unstaged" since Git no longer considers them part of the tip commit.

VSCode Git uses **cached status data** and occasionally mismatches file state after reflog-based rewinds.

This mismatch created the illusion that “older” changes were unstaged despite those being previously committed.

---

## 🔧 Safe Recovery Workflow

### Step 1: Identify the target commit via reflog

Reflog tracks every movement of `HEAD`.

```sh
git reflog --date=iso
```

Example entry:

```
HEAD@{2025-10-24 09:36:17 -0500}: commit: ✅ chore(theme): finalize version 4.01 and expand readme, changelog
```

Commit hash referenced:

```
4fa8d6e8
```

### Step 2: Create a recovery branch from that commit

```sh
git branch recovery/pre-reset-commit 4fa8d6e8
git checkout recovery/pre-reset-commit
```

Now a clean workspace tied exactly to the desired commit.

### Step 3: Remove one file from the commit without losing anything

To remove tracked file from commit but keep the file locally:

```sh
git rm --cached -- path/to/target_file.txt
```

File remains in working directory but is unstaged.

### Step 4: Amend the commit safely

```sh
git commit --amend --no-edit
```

Your branch now holds a correct replacement commit… not a merge, not a new history divergence.

---

## 🧹 VSCode UI Confusion Explained

* VSCode uses its own file status cache
* Reflog + branch resets can desynchronize its view
* Some “changes” appear with no actual diff
* “Updated” labels in the graph simply indicate **a commit with metadata amendments**

Refreshing VSCode UI or restarting resolves this mismatch.

---

## ⚠️ Commands That Caused or Could Cause Damage

| Command                             | Status                        | Why Problematic                                   |
| ----------------------------------- | ----------------------------- | ------------------------------------------------- |
| `git reset HEAD~1`                  | Incorrect for user goal       | Exposed older changes to working tree             |
| `git reset --hard`                  | **Do NOT use** without backup | Drops uncommitted work permanently if not stashed |
| Manual advice suggesting force-push | Dangerous                     | Could overwrite remote history                    |

✅ Lessons captured and corrected in this guide.

---

## 🧩 Git Internals: Commit Parent Linked-List Model

Commits point to their parent commit:

```
[A] ← [B] ← [C] ← [HEAD]
```

* No “siblings,” visual UI is misleading
* Amending creates **a new commit**, does not alter C in place
* Old commit available until GC via reflog

Merge commits uniquely have **two parents**

---

## 📌 Status of Other Commands Used

These were safe and useful:

| Command                                     | Purpose                              |
| ------------------------------------------- | ------------------------------------ |
| `git stash push -u`                         | Preserved uncommitted/untracked work |
| `git branch snapshot...`                    | Checkpoint safe state                |
| `git tag pre-amend-...`                     | Provides a static reference point    |
| `git show`, `git diff`, `git ls-tree`       | Verified correctness safely          |
| `git rm --cached` then `git commit --amend` | The correct and final solution       |

No work was lost. Git history integrity restored.

---

![Workflow Diagram Placeholder](https://placehold.co/900x300?text=GIT+Workflow+Diagram+Placeholder)

---

## 📚 References / See Also

### Git Documentation

* [https://git-scm.com/docs/git-reset](https://git-scm.com/docs/git-reset)
* [https://git-scm.com/docs/git-reflog](https://git-scm.com/docs/git-reflog)
* [https://git-scm.com/docs/git-commit](https://git-scm.com/docs/git-commit)

### VS Code Git Integration

* [https://code.visualstudio.com/docs/editor/versioncontrol](https://code.visualstudio.com/docs/editor/versioncontrol)

### Tools Referenced

* [https://placehold.co/](https://placehold.co/) Image placeholder service

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made          |
| ------- | ---------- | ---------------- | --------------------- |
| 1.00    | 2025-10-24 | Eric L. Hepperle | Initial draft created |

---

