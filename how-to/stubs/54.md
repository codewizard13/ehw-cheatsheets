### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
10;06/25

Perplexity


## CONTENT_BELOW: ##

---



# KB: 🔧 Listing All Files with Local Changes in Git Bash on Windows 11

**Version:** 1.0

***

## 📌 Overview

When working with Git repositories, it is often necessary to see all files that have local modifications, whether those changes are staged for commit or still unstaged. This guide explains how to list all such changed files using Git Bash on Windows 11, by combining a few Git commands to produce a unified, sorted, and duplicate-free list of relative file paths.

***

## 🚀 Commands and Explanation

To list all changed files (staged and unstaged), run this combined command:

```bash
{ git diff --name-only ; git diff --name-only --staged ; } | sort | uniq
```

### What each part does:

- `git diff --name-only`:
  - Lists relative paths of files with **unstaged changes** (differences between working directory and staging area).

- `git diff --name-only --staged` (or `--cached`):
  - Lists relative paths of files with **staged changes** (differences between staging area and last commit).

- Curly braces `{ command1 ; command2 ; }`:
  - Executes both commands sequentially, combining their outputs.

- `| sort | uniq`:
  - Sorts the combined list alphabetically and removes duplicates, ensuring each changed file appears only once.

***

## 🛠️ Use Cases

- Quickly view all files you have modified before committing.
- Use the output to pass to scripts, code editors, or batch commands for bulk operations.
  - Example: opening all changed files in Vim tabs:
  
  ```bash
  vim -p $( { git diff --name-only ; git diff --name-only --staged ; } | sort | uniq )
  ```

- Copy or archive changed files based on this list.

***

## ⚠️ Notes and Tips

- This command only reports files that have changed locally but not yet committed.
- To see changes between commits or branches, add commit hashes or branch names to `git diff`.
- For unusual filenames (spaces, special chars), consider `git diff -z --name-only` with tools that support NUL-delimited input.

***

## 📚 References / See Also

- [Git Diff: Only Show Filenames - Coding for SEO](https://codingforseo.com/blog/git-diff-filenames/)
- [Git Diff Name Only: Mastering - Act-Show Linux](https://www.linuxactionshow.com/git-diff-name-only/)
- [Stack Overflow: Git diff --name-only and copy that list](https://stackoverflow.com/questions/5605347/git-diff-name-only-and-copy-that-list)
- [Official Git Documentation: git-diff](https://git-scm.com/docs/git-diff)
- [Atlassian Git Tutorial: Git Diff](https://www.atlassian.com/git/tutorials/saving-changes/git-diff)

***

**This KB article is current as of October 6, 2025, and tailored for Git Bash usage on Windows 11.**

[1](https://codingforseo.com/blog/git-diff-filenames/)
[2](https://www.linuxactionshow.com/git-diff-name-only/)
[3](https://stackoverflow.com/questions/5605347/git-diff-name-only-and-copy-that-list)
[4](https://git-scm.com/docs/git-diff)
[5](https://www.reddit.com/r/git/comments/1enfxhy/nameonly_diff_between_branches_shows_changes_but/)
[6](https://www.atlassian.com/git/tutorials/saving-changes/git-diff)
[7](https://git-scm.com/docs/diff-options)
[8](https://github.com/orgs/community/discussions/21723)