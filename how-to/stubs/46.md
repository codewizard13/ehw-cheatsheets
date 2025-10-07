09/29/25


To rename a remote Git branch, there is no direct command to rename it on the remote repository. Instead, the process involves renaming the branch locally, then deleting the old branch on the remote, and pushing the newly renamed branch as a new remote branch. Here are the detailed steps:

1. Rename the local branch:
   - If currently on the branch you want to rename:
     ```
     git branch -m new-branch-name
     ```
   - Or from any branch, rename without switching:
     ```
     git branch -m old-branch-name new-branch-name
     ```

2. Push the new branch name to the remote and set the upstream:
   ```
   git push origin -u new-branch-name
   ```

3. Delete the old branch from the remote:
   ```
   git push origin --delete old-branch-name
   ```

4. Optionally, you can verify the rename by listing remote branches:
   ```
   git branch -r
   ```

This effectively renames the remote branch by replacing the old branch with a new one under the new name.[1][2][3][4][5]

If using GitHub, you can also rename branches directly in the GitHub web interface, and then update local clones accordingly with commands like:
```
git branch -m old-branch-name new-branch-name
git fetch origin
git branch -u origin/new-branch-name new-branch-name
git remote set-head origin -a
```
But the fundamental approach in Git command line remains the same.[6]

[1](https://phoenixnap.com/kb/how-to-rename-git-branch-local-remote)
[2](https://www.hostinger.com/tutorials/how-to-rename-a-git-branch)
[3](https://www.freecodecamp.org/news/how-to-rename-a-local-or-remote-branch-in-git/)
[4](https://stackoverflow.com/questions/30590083/git-how-to-rename-a-branch-both-local-and-remote)
[5](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/rename-Git-branch-local-remote-GitHub-GitLab-BitBucket)
[6](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch)
[7](https://www.reddit.com/r/git/comments/14ycnbx/is_it_acceptable_to_rename_a_git_branch_i_created/)
[8](https://stackoverflow.com/questions/62084684/rename-remote-branch-without-deleting-it)