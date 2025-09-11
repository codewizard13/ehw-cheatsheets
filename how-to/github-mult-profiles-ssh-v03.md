<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="/_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/2022_ElijahStreams-Logo_Hz-FullColor_226x29.png)

<!-- 📝 Title -->
# HOW-TO: 📘 Switch Between Multiple GitHub Profiles in VSCode on Windows 11 + Git Bash (SSH)
(Version: 03)

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
Eric Hepperle, ChatGPT, 2025-09-10  (03)


----


Perfect — here’s the **updated structure** of your GitHub multi-profile setup guide, now with **Step 0: Backup** added as the first step. I’ve updated the flow and rephrased a few things to make it clearer and safer for people in your situation (with an existing key and one working account).

---

# ✅ Updated Guide Structure

---

## 🔢 Step 0: Backup Existing Git & SSH Configs (Highly Recommended)

Before doing anything:

* Back up the following:

  * `~/.ssh/` → contains your existing SSH keys (e.g., `id_ed25519`)
  * `~/.gitconfig` → your global Git settings
  * Any folder like `~/git/` if it exists already

> This gives you a rollback point in case anything goes wrong.

### ✅ Run in Git Bash:

```bash
mkdir -p ~/git-backup-before-multiple-accounts

cp -r ~/.ssh ~/git-backup-before-multiple-accounts/ssh
cp ~/.gitconfig ~/git-backup-before-multiple-accounts/gitconfig

if [ -d ~/git ]; then
  cp -r ~/git ~/git-backup-before-multiple-accounts/git-identities
fi

echo "✅ Backup completed at ~/git-backup-before-multiple-accounts"
```

---

## 🧼 Step 1: Clean Separation of Identities

Understand your current setup:

* Your **work key (`id_ed25519`)** is working. Leave it alone.
* Your **personal account doesn't work** on this machine. We’ll add support for that with a new key.

So going forward:

* Work GitHub will keep using: `~/.ssh/id_ed25519`
* Personal GitHub will use: `~/.ssh/id_ed25519_personal`

---

## 🛠️ Step 2: Generate SSH Key for Personal GitHub

```bash
ssh-keygen -t ed25519 -C "your_personal_email@example.com" -f ~/.ssh/id_ed25519_personal
```

---

## 🔒 Step 3: Add Both Keys to SSH Agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
ssh-add ~/.ssh/id_ed25519_personal
```

> You're now managing multiple identities in parallel via the SSH agent.

---

## 🧭 Step 4: Add Keys to GitHub Accounts

Use `cat` to copy the contents of each `.pub` file and add them to GitHub:

```bash
cat ~/.ssh/id_ed25519.pub              # Work key
cat ~/.ssh/id_ed25519_personal.pub     # Personal key
```

Add each key to the corresponding GitHub account via:
**Settings → SSH and GPG Keys → New SSH Key**

---

## 🛠️ Step 5: Create SSH Config File

Create `~/.ssh/config` (doesn’t exist yet):

```bash
nano ~/.ssh/config
```

Add:

```ssh
# Work account (existing setup)
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

# Personal account (new)
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes
```

---

## ⚙️ Step 6: Git Identity Isolation with IncludeIf

Create isolated Git config files:

### Work (Optional if already working)

```bash
nano ~/git/work.gitconfig
```

```ini
[user]
    name = Your Name
    email = your_work_email@company.com
[core]
    sshCommand = ssh -i ~/.ssh/id_ed25519 -F /dev/null
```

### Personal

```bash
nano ~/git/personal.gitconfig
```

```ini
[user]
    name = Your Name
    email = your_personal_email@example.com
[core]
    sshCommand = ssh -i ~/.ssh/id_ed25519_personal -F /dev/null
```

### Update Global Config

```bash
git config --global includeIf.gitdir:~/Projects/Work/.path ~/git/work.gitconfig
git config --global includeIf.gitdir:~/Projects/Personal/.path ~/git/personal.gitconfig
```

> Replace paths accordingly to match your folder structure.

---

## 📦 Step 7: Clone Repos with Host Alias

* Personal:

  ```bash
  git clone git@github-personal:yourusername/your-personal-repo.git
  ```

* Work:

  ```bash
  git clone git@github-work:yourcompany/work-repo.git
  ```

---

## 🧪 Step 8: Test Everything

* Confirm SSH connection:

  ```bash
  ssh -T git@github-personal
  ssh -T git@github-work
  ```

* Confirm Git identity per repo:

  ```bash
  git config user.name
  git config user.email
  ```

---

## 🔁 Step 9: Rollback If Needed

Restore from backup:

```bash
cp -r ~/git-backup-before-multiple-accounts/ssh ~/.ssh
cp ~/git-backup-before-multiple-accounts/gitconfig ~/.gitconfig
cp -r ~/git-backup-before-multiple-accounts/git-identities ~/git
```

---

Let me know if you want help writing your actual `.ssh/config` and `gitconfig` includes based on your real paths and emails. You're now ready to start!


---

## ✅ Revision History

| Version | Date       | Author           | Changes Made          |
| ------- | ---------- | ---------------- | --------------------- |
| 1.0     | 2025-09-11 | Eric L. Hepperle | Initial draft created |

---
