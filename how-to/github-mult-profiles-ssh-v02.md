<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="/_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/2022_ElijahStreams-Logo_Hz-FullColor_226x29.png)

<!-- 📝 Title -->
# HOW-TO: 📘 Switch Between Multiple GitHub Profiles in VSCode on Windows 11 + Git Bash (SSH)
(Version: 02)

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
Eric Hepperle, ChatGPT, 2025-09-10  (02)


---


Great! You're thinking ahead — **backup and rollback planning should absolutely be Step 1**, especially when you're modifying core configuration files like SSH keys and global Git settings.

Let’s create a new section at the top of the guide and also clarify what you currently have, what it means, and how to proceed *safely*.

---

# 🧯 Step 0: Backup Existing Git & SSH Configs (Recommended Before Anything Else)

Before making any changes to your system, it's **strongly recommended** to back up your current Git and SSH configurations. This allows you to **restore a working setup** if something goes wrong. Think of it as version control for your system setup 😉

---

## 📦 What to Back Up

| File/Folder                  | Location                             | Purpose                                     |
| ---------------------------- | ------------------------------------ | ------------------------------------------- |
| `~/.ssh/`                    | `C:\Users\<YourUser>\.ssh\`          | SSH keys and configuration                  |
| `~/.gitconfig`               | `C:\Users\<YourUser>\.gitconfig`     | Global Git configuration                    |
| Any included configs         | `~/git/` or elsewhere (if it exists) | Custom Git profiles (may not exist yet)     |
| VSCode settings *(optional)* | `%APPDATA%\Code\User\settings.json`  | If you've customized Git behavior in VSCode |

> 💡 **Tip**: You can quickly navigate to your home folder in Git Bash using `cd ~`

---

## 📥 Backup Script (Git Bash)

```bash
# Create a backup folder
mkdir -p ~/git-backup-before-multiple-accounts

# Backup SSH folder
cp -r ~/.ssh ~/git-backup-before-multiple-accounts/ssh

# Backup global git config
cp ~/.gitconfig ~/git-backup-before-multiple-accounts/gitconfig

# Backup git identity configs if they exist
if [ -d ~/git ]; then
  cp -r ~/git ~/git-backup-before-multiple-accounts/git-identities
fi

echo "✅ Backup completed at ~/git-backup-before-multiple-accounts"
```

---

## 🔁 How to Restore (Rollback)

To undo everything and return to your original state:

```bash
# Restore SSH
cp -r ~/git-backup-before-multiple-accounts/ssh ~/.ssh

# Restore global git config
cp ~/git-backup-before-multiple-accounts/gitconfig ~/.gitconfig

# Restore identity configs if needed
cp -r ~/git-backup-before-multiple-accounts/git-identities ~/git
```

> 🚨 Be sure to **exit all Git Bash / VSCode sessions** before restoring, and restart them afterward.

---

## 🧠 About Your Current Setup

From your existing files:

```
-rw-r--r-- 1 erich 197609 419 Mar 20 09:40 id_ed25519
-rw-r--r-- 1 erich 197609 104 Mar 20 09:40 id_ed25519.pub
```

* These are your **existing SSH keys** — likely tied to your **work account**, especially if that’s what’s currently working.
* `known_hosts` is fine — it just stores SSH fingerprints of remote hosts you’ve connected to.
* You do **not** currently have an `~/.ssh/config` file, so adding one is safe and non-destructive.
* Your **personal GitHub** doesn’t work on this machine — that’s what we’ll fix.

---

## 🧭 Suggested Game Plan for You

Since your **work account works**, and we want to **add personal support without breaking anything**:

1. **Back up** as described above (do this now).
2. Leave your current `id_ed25519` (work key) **as-is**.
3. Generate a new personal key and configure it with a **new host alias**.
4. Update SSH config to explicitly route connections through the right key.

This way, your work identity will continue working without interruption, and your personal account will start working **side-by-side**.

---

## 👇 Next Steps

You can now proceed with the main guide starting from:

> 🧑‍💻 Step 1: Generate SSH Keys for Each Account

Just be sure to:

* **Name the new key something like** `id_ed25519_personal`
* **Use a new SSH host alias**, like `github-personal`

This avoids any interference with your existing work key (`id_ed25519`), and your work GitHub setup stays untouched.

---

Would you like me to **update the original guide** to integrate this as **Step 0** properly? I can provide the updated full Markdown file if that’s easier for you to work from.


---

## ✅ Revision History

| Version | Date       | Author           | Changes Made          |
| ------- | ---------- | ---------------- | --------------------- |
| 1.0     | 2025-09-11 | Eric L. Hepperle | Initial draft created |

---
