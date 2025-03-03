<link rel="stylesheet" href="../_css/main.css">

# Git

[🏚️](../README.md) | [Coding](/coding/index.md)

**Git** is a free, open-source **version control system** invented in 2005 by **Linus Torvalds**. 

## Tips & Techniques

### Checkout older revision of a file under a new name

```sh
git show [oldcommitnum]:some_file.cpp > new_file.cpp
```

### Checkout file from specific previous commit

You can revert a particular commit's state of the file back to the workspace with the following git command:

```sh
git checkout <COMMIT#> <relative/path/to/your/file>
```

Example:

```sh
git checkout 22864c16a5647d3b4ccb034aa5698f196a648a38 Gemfile
```

### Recover deleted file where no commit made after delete

Here are different cases as a reference to help others: 


If the deletion has **not been committed**, the command below will restore the deleted file in the working tree.

    $ git checkout -- <file>

You can get a **list of all the deleted files** in the working tree using the command below.

    $ git ls-files --deleted


If the deletion has **been committed**, find the commit where it happened, then recover the file from this commit.

    #find the commit hash where it had this file deleted
    $ git rev-list -n 1 HEAD -- <file>

It should give you something like `c46e81aa403ecb8a0f7a323a358068345`, now use this commit hash with the parent operator (`^`) like so:

    $ git checkout <commit>^ -- <file>

Example: 

    $ git checkout c46e81aa403ecb8a0f7a323a358068345^ -- <file> 

In case you are looking for the path of the file to recover, the following command will display a summary of all deleted files.

    $ git log --diff-filter=D --summary

If you want to just display the list of files: 

    git log --diff-filter=D --summary | grep "delete mode"

I had a case where `git rev-list -n 1 HEAD -- <file>` didn't work, maybe because `<file>` only ever existed on a feature branch. Adding `--all` helped: `git rev-list --all -n 1 HEAD -- <file>` – 
Abdull
 CommentedOct 19, 2022 at 10:46

### List remote branches

```sh
git branch -r
```

### Pull all the remote branches

```sh
git pull --all
```

### Pull a single remote branch to local

Create a local branch with the same name as the remote branch:

```sh
git checkout -b <remote-branch-name>
```
**#GOTCHA:** Always make sure you are on the target branch before doing the next step!

```sh
git pull origin <remote-branch-name>
```
Here's an easier way -- especially if the remote branch doesn't already exist on your local machine:

```sh
git fetch origin
git checkout -b <remote-branch-name> origin/<remote-branch-name>
```

### Push local branch to remote

```sh
git push origin <branch-name>
```

### Delete remote branch

```sh
git push origin --delete <branch-name>
```

### Rename current local branch

```sh
git branch -m <new-branch-name>
```

### Reset all changes after last commit

**First, reset any changes**

This will undo any changes you've made to tracked files and restore deleted files:

    git reset HEAD --hard

**Second, remove new files**

This will delete any new files that were added since the last commit:

    git clean -fd

Files that are not tracked due to `.gitignore` are preserved; they will not be removed

*Warning*:  using `-x` instead of `-fd` *would* delete ignored files.  You probably don't want to do this.

### Git log show only filenames

Show only filenames in git log output
To see only the names of files that changed with git log, use the --name-only flag.

    git log --name-only 
To show name and status (modified, added, etc.) of the files, use --name-status

    git log ---name-status

## Gotchas and Pitfalls

- N/A

## References

- https://stackoverflow.com/questions/888414/git-checkout-older-revision-of-a-file-under-a-new-name
- https://stackoverflow.com/questions/75973864/git-how-to-checkout-file-from-specific-commit
- https://stackoverflow.com/questions/11956710/git-recover-deleted-file-where-no-commit-was-made-after-the-delete
- https://graphite.dev/guides/git-pull-remote-branches
- https://stackoverflow.com/questions/4630312/reset-all-changes-after-last-commit-in-git#answer-4630316