Eric Hepperle, Perplexity, 2025-09-15




### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:



## CONTENT_BELOW: ##

---


# Keeping Detailed Squash Commit Messages in Git Merges 📝🔀

Many developers craft detailed commit messages when squashing their commits on feature branches. However, when merging pull requests using the default **"Merge pull request"** method on platforms like GitHub, these detailed messages often seem to disappear from the main branch history. This can be frustrating, especially when feature branches are deleted after merging. This article explains why this happens and how to preserve those important messages.  

***

## Why Your Detailed Squash Commit Message Gets "Lost" ❓

When you squash commits on your feature branch, you create a single commit with a detailed message summarizing all your changes. However:

| Action                  | What Happens to Commit Message?                              |
|-------------------------|-------------------------------------------------------------|
| **Merge Pull Request** (default merge commit) | Creates a new merge commit with a generic message like "Merge pull request #X from branch". Does **not** include your detailed squash commit message. |
| **Delete Feature Branch** | Removes easy access to feature branch’s history where your squash commit message is stored. |

So, once the feature branch is deleted, the detailed commit message exists only in the deleted branch history, not in the main branch's merge commit.

***

## How to Preserve Your Detailed Commit Message ✔️

| Merge Strategy          | Description                                              | Effect on Commit Message                                   |
|------------------------|----------------------------------------------------------|------------------------------------------------------------|
| **Squash and Merge**    | Combines all commits from the feature branch into one commit on the main branch, using your detailed squash commit message. | Keeps detailed message intact and visible in main branch.  |
| **Regular Merge Commit**| Creates a new merge commit with generic message referencing the PR. | Does **not** include squash commit details in merge commit message. |
| **Manual Message Edit** | During merge, edit the merge commit message to include your squash commit summary manually. | Allows detailed messages but requires manual intervention. |

### Recommendations:  
- Use **Squash and Merge** if you want your detailed commit message in the main branch history without keeping feature branches indefinitely.  
- If maintaining a clean history is a priority but you prefer merge commits, edit the merge commit message manually before confirming the merge.  
- Configure repository settings to require or encourage squash merging if detailed commit messages are critical for your workflow.

***

## Summary ⚡

- The default merge commit method discards your detailed squash commit messages from the visible merge commit log.  
- Once a feature branch is deleted, easy access to the squash commit message is lost unless merged via squash.  
- Squash and merge preserves detailed commit messages directly in the main branch.  

By choosing the right merge strategy and merge commit message approach, teams can keep a rich, informative Git history without retaining feature branches forever.

***

If preserving a meticulously crafted commit message is important—and feature branches get deleted—**Squash and Merge** is the best practice to avoid losing that valuable history. Happy coding! 🚀✨

[1](https://www.reddit.com/r/msp/comments/1bcz8uj/standard_formatting_for_technical_documentation/)
[2](https://document360.com/blog/technical-writer-style-guide/)
[3](https://draft.dev/learn/technical-writer-style-guides)
[4](https://www.archbee.com/blog/technical-documentation-dos-donts)
[5](https://engineering.usu.edu/students/ewc/writing-resources/technical-writing-standards)
[6](https://technicalwriterhq.com/writing/technical-writing/technical-writer-style-guide/)
[7](https://developers.google.com/tech-writing/resources)
[8](https://learn.microsoft.com/en-us/style-guide/procedures-instructions/formatting-text-in-instructions)
[9](https://www.madcapsoftware.com/blog/how-to-create-a-style-guide-for-technical-documentation/)
[10](https://technicalwriterhq.com/documentation/documentation-formatting-examples/)