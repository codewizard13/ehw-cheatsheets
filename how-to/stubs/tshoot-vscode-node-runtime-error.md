ERic Hepperle, ChatGPT, 2025-09-24

### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:



## CONTENT_BELOW: ##

---






Great — your thorough troubleshooting really narrows this down. Let’s break this down cleanly.

---

## 🚨 Root Problem Identified

Your output shows:

```
FATAL ERROR: v8::ToLocalChecked Empty MaybeLocal
```

...along with a native stack trace, and a Node.js stack trace in the VS Code CLI tool.

### 💥 That is a **Node.js runtime crash**, happening inside the VS Code CLI when it tries to load all extensions.

This **explains** why:

* `code --list-extensions` returns **only one result** (`foxundermoon.shell-format`)
* You're not seeing all installed extensions via the CLI
* VS Code *itself* works fine — it's just the `code` CLI tool that's crashing when querying extensions

This is **not** a WSL or container issue anymore — it's an **internal bug or corruption** in the Node.js environment embedded inside VS Code.

---

## ✅ Why `basename -a ~/.vscode/extensions/*` Works

That command:

```bash
basename -a ~/.vscode/extensions/* | sort
```

...does **not use Node.js or VS Code at all**. It simply:

1. Reads the directory where extensions are installed (`~/.vscode/extensions`)
2. Prints the folder names (e.g., `author.extension-version`)
3. Sorts them alphabetically

You're seeing your full list because the file system is intact — it's the **CLI logic**, not the data, that’s broken.

---

## 🔧 What You Can Do (Fix Options)

### ✅ 1. Reinstall VS Code (Clean)

This will replace the broken internal Node.js environment:

* **Uninstall VS Code**
* Delete these folders (they are safe to remove):

  ```
  C:\Users\erich\AppData\Local\Programs\Microsoft VS Code
  C:\Users\erich\AppData\Roaming\Code
  ```
* Download and reinstall fresh from: [https://code.visualstudio.com/](https://code.visualstudio.com/)

> Note: Your extensions will be redownloaded from the marketplace if you sync settings, or you can just copy them back manually from your backed-up `~/.vscode/extensions` folder.

---

### 🧪 2. Test with the VS Code **Insiders** Build

This is a drop-in replacement (won’t interfere with your stable install) that runs its own isolated runtime.

* Download: [https://code.visualstudio.com/insiders/](https://code.visualstudio.com/insiders/)
* Install it, then run:

  ```bash
  code-insiders --list-extensions --show-versions
  ```

If this works, you’ve confirmed that the **problem is limited to your stable build**, and not your extensions or config.

---

### 🧰 3. Generate Extension List from Filesystem (workaround)

If you just want a script to build a clean `ID@version` list from `~/.vscode/extensions`, I can give you one (PowerShell or Bash) — just say the word.

---

## 🔒 Why Can't You "Relaunch as Admin"?

You're right — **VS Code does not have a built-in “Relaunch as Administrator”** menu button.

### To run VS Code as admin:

#### A. Manually via Start Menu:

1. Hit **Windows key**
2. Search for **Visual Studio Code**
3. Right-click > **Run as administrator**

#### B. In a terminal (PowerShell):

```powershell
Start-Process "code" -Verb RunAs
```

Then retry:

```bash
code --list-extensions --show-versions
```

But given the crash, it’s unlikely admin permissions alone will fix this — it’s more likely corrupted binaries or a Node.js version mismatch inside the CLI.

---

## 🧠 Summary

| Step                                                     | Status      |
| -------------------------------------------------------- | ----------- |
| ✅ You're **not** using WSL, SSH, or devcontainers        | ✔️          |
| ❌ `code --list-extensions` crashes due to Node.js error  | 🚨          |
| ✅ Extensions are correctly installed                     | ✔️          |
| ✅ File system commands confirm the data is intact        | ✔️          |
| 🛠️ Reinstalling VS Code is the cleanest fix             | Recommended |
| 🧪 VS Code Insiders is a quick way to test clean runtime | Optional    |
| 🔧 I can script the list for you from file system        | Just ask    |

---

Would you like a script to parse your extension list into `publisher.extension@version` format from the file system?
