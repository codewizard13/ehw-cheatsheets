### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/16/25


## CONTENT_BELOW: ##

---

Great question! The answer depends on **how you want to use the scripts**. If you're talking about `switch-to-work.sh` and `switch-to-personal.sh`, here's what you need to know to get them working properly on **Windows 11 with Git Bash** or **WSL**:

---

## ✅ TL;DR — What You Need to Do

You **don't need to "register" or "activate"** the scripts like a service or extension.
But you **do need to make sure they are:**

1. **Executable**
2. **On your PATH** (optional, for convenience)
3. **Properly formatted for Bash** (not PowerShell or CMD)

---

## 🧱 Step-by-Step Setup

### 🔹 1. ✅ Make Sure the Script Is Executable

In Git Bash:

```bash
chmod +x switch-to-work.sh
chmod +x switch-to-personal.sh
```

> This allows you to run it like `./switch-to-work.sh`.

---

### 🔹 2. 📁 Place Them Somewhere Convenient (Optional)

You can keep your scripts in a folder like:

```bash
~/scripts/git/
```

Then, **add that folder to your PATH** by adding this to your `~/.bashrc` or `~/.bash_profile`:

```bash
export PATH="$HOME/scripts/git:$PATH"
```

Then reload your shell:

```bash
source ~/.bashrc
```

> ✅ Now you can run `switch-to-work.sh` from **anywhere** without typing `./` or navigating into the folder.

---

### 🔹 3. 💡 Run It

Navigate into a repo and simply run:

```bash
switch-to-work.sh
# or
switch-to-personal.sh
```

You should see:

```bash
🏢 Switched to WORK profile (EricHepperleES)
```

or

```bash
🏠 Switched to PERSONAL profile
```

And `git config user.name` should now reflect the new identity.

---

## 🔎 Optional: Add a Bash Alias (Super Shortcut)

Add this to your `~/.bashrc` or `~/.bash_aliases`:

```bash
alias gw='switch-to-work.sh'
alias gp='switch-to-personal.sh'
```

Then just run:

```bash
gw  # Switch to work
gp  # Switch to personal
```

---

## ⚠️ Important Notes

* These scripts **only affect the current repo** if you use `--local`, which is recommended.
* If you see `"command not found"` or similar, you likely:

  * Didn't mark it executable
  * Don't have the script's folder in your PATH
  * Are in PowerShell or CMD instead of Bash

---

## ✅ You’re Good to Go!

Once you’ve followed the steps above, your scripts are ready — no "activation" required beyond `chmod +x`. Let me know if you'd like to turn them into a single unified script with arguments (e.g., `switch-profile work`).






--------------------------




😂 Totally understandable — that’s a **common point of confusion**, especially when jumping between scripting environments like Bash and VSCode terminals.

Let’s clear it up:

---

## 🧠 `source` vs Executing a Script

| ❓ Action                            | 🔍 What it Does                                                                                             |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `source script.sh` or `. script.sh` | Runs the script **in your current shell** — any environment changes (like `cd`, `export`, etc.) **persist** |
| `./script.sh`                       | Runs the script in a **subshell** — any environment changes **don’t persist** after the script exits        |
| `bash script.sh`                    | Same as above — runs in a **new shell instance**                                                            |

---

### 🤔 So Why Did You Think `source switch-to-work.sh` Was Required?

Likely because you were thinking of **environmental changes**, like if a script sets environment variables that you want to persist *after* the script ends.

But your script just does this:

```bash
git config --local user.name ...
```

These changes go into the **`.git/config` file of the repo** — they’re permanent (until changed again), so **you don't need `source`**.

✅ You can just:

```bash
./switch-to-work.sh
```

Or even better, if it’s on your PATH:

```bash
switch-to-work.sh
```

---

## 🔄 When You *Would* Use `source`

Here are cases where `source` *is* needed:

```bash
# These changes only apply if sourced:
export PATH=$PATH:/some/dir
cd ~/somewhere
alias foo='bar'
```

If you ran those in a script without `source`, nothing would persist in your shell afterward.

---

## ✅ Bottom Line

| ✅ Use `source`                                   | 🚫 Don't need `source`                          |
| ------------------------------------------------ | ----------------------------------------------- |
| Script sets aliases, exports, or changes dirs    | Script runs `git config`, `echo`, `mkdir`, etc. |
| You want changes to affect your current terminal | You just want to apply identity settings        |

---

Let me know if you want to make your profile switcher set a shell variable or alias depending on the mode — that’s where `source` *could* become useful.

