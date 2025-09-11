<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="/_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/2022_ElijahStreams-Logo_Hz-FullColor_226x29.png)

<!-- 📝 Title -->
# HOW-TO: 📘 Switch Between Multiple GitHub Profiles in VSCode on Windows 11 + Git Bash (SSH)
(Version: 04)

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle    |
| ------------------ | ------------------- |
| **Date Created**:  | 2025-09-11          |
| **Date Updated**:  | 2025-09-11          |
| **AI Assistance**: | ChatGPT, Perplexity |

---

<!-- 📚 References (Optional) -->
### References / See Also:

- [Placeholder 1](#)
- [Placeholder 2](#)

---

<!-- 🔍 Content Section Heading -->
Eric Hepperle, ChatGPT, 2025-09-10  (04)


----


Absolutely — here's the **fully merged, updated, and cleaned-up GitHub Wiki-style guide** for managing multiple GitHub accounts on **Windows 11**, using **VSCode** and **Git Bash**.

This includes:

* A proper **Step 0: Backup**
* All **steps without omissions**
* All **gotchas and clarifications** you asked about
* Merged duplicated sections (with consistent emoji choices)
* A clean and professional tone, suitable for developers

---

# 🧑‍💻 Guide: Using Multiple GitHub Profiles on One Machine

**Setup:** Windows 11 · Git Bash · VSCode

Managing both **personal** and **work** GitHub accounts on the same machine can get messy with conflicting SSH keys and identities. This guide provides a complete, foolproof way to isolate each account and switch between them cleanly.

---

## 🔢 Step 0: Backup Your Current Git & SSH Setup (Recommended)

Before making any changes, **back up your current configuration** so you can restore it if something goes wrong.

### 📦 What to Back Up

| File/Folder               | Purpose                                       |
| ------------------------- | --------------------------------------------- |
| `~/.ssh/`                 | Your existing SSH keys and config             |
| `~/.gitconfig`            | Your global Git identity settings             |
| `~/git/` *(if it exists)* | Any prior per-profile Git configs you’ve made |

### ✅ Backup Script (Git Bash)

```bash
cd ~
mkdir -p ~/git-backup-before-multiple-accounts

cp -r ~/.ssh ~/git-backup-before-multiple-accounts/ssh
cp ~/.gitconfig ~/git-backup-before-multiple-accounts/gitconfig

if [ -d ~/git ]; then
  cp -r ~/git ~/git-backup-before-multiple-accounts/git-identities
fi

echo "✅ Backup completed at ~/git-backup-before-multiple-accounts"
```

### 🔁 Restore (Rollback)

If needed, run:

```bash
cp -r ~/git-backup-before-multiple-accounts/ssh ~/.ssh
cp ~/git-backup-before-multiple-accounts/gitconfig ~/.gitconfig
cp -r ~/git-backup-before-multiple-accounts/git-identities ~/git
```

---

## 🧭 Step 1: Understand and Prepare Your Setup

### Your Current Situation

* You already have a key: `~/.ssh/id_ed25519` (likely used for your **work** GitHub account).
* Your **work account works** on this machine.
* Your **personal account does not** (yet).
* You want to add your **personal GitHub profile** cleanly **without breaking** your work setup.

### ✅ Plan

We’ll:

* Add a **new SSH key** for your personal account.
* Use a **custom SSH host alias** to differentiate them.
* Create **isolated Git identity configs** per project.
* Route Git traffic through the appropriate key **based on the repo’s folder**.

---

## 🔐 Step 2: Generate a Personal SSH Key

In Git Bash:

```bash
ssh-keygen -t ed25519 -C "your_personal_email@example.com" -f ~/.ssh/id_ed25519_personal
```

### Should You Use a Passphrase?

| Consideration               | Recommendation                                   |
| --------------------------- | ------------------------------------------------ |
| 🧑‍💻 Personal laptop only  | Skip passphrase for convenience                  |
| 💼 Work laptop or shared PC | Use passphrase for extra security                |
| 🔐 Extra security needed    | Use passphrase with `ssh-agent` to avoid prompts |

**You can add a passphrase later** using:

```bash
ssh-keygen -p -f ~/.ssh/id_ed25519_personal
```

---

## 🔓 Step 3: Add SSH Keys to SSH Agent

Run the following:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519              # Existing work key
ssh-add ~/.ssh/id_ed25519_personal    # New personal key
```

> If you used a passphrase, you'll be prompted for it here. This stores the key in memory for the session.

---

## 🧷 Step 4: Add Keys to GitHub Accounts

### 1. Copy the public key:

```bash
cat ~/.ssh/id_ed25519_personal.pub
```

### 2. Add it to your **personal GitHub** account:

* Go to: **GitHub → Settings → SSH and GPG keys → New SSH key**
* Paste the key and name it (e.g., *"Windows Laptop - Personal"*)

Repeat this process for your existing work key if needed:

```bash
cat ~/.ssh/id_ed25519.pub
```

---

## ⚙️ Step 5: Create an SSH Config for Host Aliases

Run:

```bash
nano ~/.ssh/config
```

Paste the following:

```ssh
# Work GitHub (existing)
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

# Personal GitHub (new)
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes
```

> 🎯 This lets you reference `github-work` or `github-personal` instead of `github.com`, which tells SSH which key to use.

---

## 🧑‍🔧 Step 6: Set Up Isolated Git Identities

### 1. Create Per-Account Git Config Files

#### Work:

```bash
mkdir -p ~/git
nano ~/git/work.gitconfig
```

```ini
[user]
    name = Your Work Name
    email = your_work_email@company.com
[core]
    sshCommand = ssh -i ~/.ssh/id_ed25519 -F /dev/null
```

#### Personal:

```bash
nano ~/git/personal.gitconfig
```

```ini
[user]
    name = Your Personal Name
    email = your_personal_email@example.com
[core]
    sshCommand = ssh -i ~/.ssh/id_ed25519_personal -F /dev/null
```

---

### 2. Update Your Global Git Config to Use Conditional Includes

Tell Git to use different identities based on folder path:

```bash
git config --global includeIf.gitdir:~/Projects/Work/.path ~/git/work.gitconfig
git config --global includeIf.gitdir:~/Projects/Personal/.path ~/git/personal.gitconfig
```

> 🗂 Replace paths (`~/Projects/Work/`, etc.) with your actual repo locations.

---

## 📦 Step 7: Clone Repositories with SSH Aliases

### Personal Account:

```bash
git clone git@github-personal:yourusername/your-personal-repo.git
```

### Work Account:

```bash
git clone git@github-work:yourcompany/work-repo.git
```

> These aliases ensure the right key and identity are used for each account.

---

## 🧪 Step 8: Verify and Test Everything

| ✅ Check                    | Command                                         |
| -------------------------- | ----------------------------------------------- |
| SSH connection (personal)  | `ssh -T git@github-personal`                    |
| SSH connection (work)      | `ssh -T git@github-work`                        |
| Current Git user (in repo) | `git config user.name && git config user.email` |
| Test clone (personal)      | `git clone git@github-personal:user/repo.git`   |
| Test clone (work)          | `git clone git@github-work:company/repo.git`    |

> You should see a welcome message from GitHub for the correct user after each SSH test.

---

## 🧠 Bonus: Git Identity Routing Visualized

```mermaid
graph TD
    A[Global .gitconfig] --> B{Repo Path Matches?}
    B -->|Yes: Personal| C[personal.gitconfig]
    B -->|Yes: Work| D[work.gitconfig]
    B -->|No Match| E[Default Global Identity]
    C --> F[Uses github-personal SSH key]
    D --> G[Uses github-work SSH key]
```

---

## 🧹 Troubleshooting & Gotchas

| ❗ Problem                       | 💡 Solution                                                     |
| ------------------------------- | --------------------------------------------------------------- |
| GitHub says permission denied   | Check you’re using `git@github-personal:` or `git@github-work:` |
| Wrong Git identity in repo      | Check with `git config user.email` and relocate repo if needed  |
| SSH key not being used          | Use `ssh -vT git@github-personal` to debug SSH key selection    |
| Asked for passphrase every time | Use `ssh-agent` to cache your key                               |

---

## 🎉 You’re All Set!

You now have a **fully isolated**, **configurable**, and **rollback-safe** setup for using **multiple GitHub profiles** on a single Windows machine using **Git Bash + VSCode**.

If you'd like:

* A downloadable `.md` version of this guide
* Scripts to automate project folder creation and setup
* VSCode workspace templates for each profile

Let me know — happy to help!


---

## ✅ Revision History

| Version | Date       | Author           | Changes Made          |
| ------- | ---------- | ---------------- | --------------------- |
| 1.0     | 2025-09-11 | Eric L. Hepperle | Initial draft created |

---
