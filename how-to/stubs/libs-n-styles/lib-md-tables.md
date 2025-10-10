### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/11/25


## CONTENT_BELOW: ##

---



## 🧪 Final Testing Checklist

| ✅ Task                           | Command Example                                   |
| -------------------------------- | ------------------------------------------------- |
| Verify SSH connection (personal) | `ssh -T git@github-personal`                      |
| Verify SSH connection (work)     | `ssh -T git@github-work`                          |
| Verify Git user in repo          | `git config user.name && git config user.email`   |
| Test cloning repo                | `git clone git@github-personal:username/repo.git` |

---

## 🧹 Troubleshooting Tips

| Problem                              | Fix                                                                       |
| ------------------------------------ | ------------------------------------------------------------------------- |
| SSH key not being used               | Check `~/.ssh/config` and use `ssh -vT git@github-xxx` to debug           |
| Wrong identity in Git                | Verify with `git config user.email` in repo                               |
| Cannot clone                         | Make sure the SSH public key is added to the right GitHub account         |
| SSH key passphrase prompt every time | Use an SSH agent or consider setting up `ssh-agent` in your shell profile |

---

## 🎉 You're All Set!

Now you can easily work with multiple GitHub accounts, with clean isolation of identities and SSH keys—all without conflicts or headaches. Happy coding!


docs(how-to): move GitHub multi-profile SSH guide variations and file formats into github/ subfolder for better temporary organization and merge all needed components from other versions into the how-to/github/github-mult-profiles-ssh-v05__final.md file (newly created to manually merge ((not git merge, but simple content merge with cut and paste)) )