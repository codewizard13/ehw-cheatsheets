Eric Hepperle, VSCODE-Claude Sonnet 3.5, 2025-09-10  (01)

### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:



## CONTENT_BELOW: ##

---

NOTES: Merge this into sop-wp-prod-deploy.md:


1. Copy entire 'sites/' folder
2. Copy `C:\Users\erich\AppData\Roaming\Local` (this has settings, addons, and addon-notes



Template:









# Multiple GitHub Accounts with HTTPS - WordPress Focus

Given your WordPress development setup and multiple repo locations, here's a more flexible approach using HTTPS:

## 🎯 Goals
- Switch GitHub accounts easily per repository
- Work with multiple wp-content locations
- Simple profile switching
- HTTPS authentication (your current method)

## 📋 Setup Steps

### 1. Create Personal Access Tokens (PATs)
1. For Work Account (`EricHepperleES`):
   - GitHub → Settings → Developer Settings → PATs
   - Name: `Work-Windows-PAT`
   - Scopes: `repo`, `workflow`

2. For Personal Account:
   - Same process, different account
   - Name: `Personal-Windows-PAT`

### 2. Create Profile Switch Scripts

````bash
#!/bin/bash
git config --global user.name "EricHepperleES"
git config --global user.email "Eric.Hepperle@ElijahStreams.com"
git config --global credential.helper manager
echo "🏢 Switched to WORK profile (EricHepperleES)"
````

````bash
#!/bin/bash
git config --global user.name "Your Personal Name"
git config --global user.email "your.personal@email.com"
git config --global credential.helper manager
echo "🏠 Switched to PERSONAL profile"
````

### 3. Create PowerShell Aliases (for VSCode Terminal)

````powershell
function Switch-GitWork { & ~/git-tools/switch-to-work.sh }
function Switch-GitPersonal { & ~/git-tools/switch-to-personal.sh }
Set-Alias -Name work-git -Value Switch-GitWork
Set-Alias -Name personal-git -Value Switch-GitPersonal
````

### 4. Add Profile Check to Your Shell Prompt

````bash
# Add to your prompt
parse_git_profile() {
    local email=$(git config --global user.email)
    if [[ $email == "Eric.Hepperle@ElijahStreams.com" ]]; then
        echo "🏢"
    else
        echo "🏠"
    fi
}
PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\] $(parse_git_profile)\$ "
````

## 🔄 Usage

1. **Switch Profiles**
```bash
# In any terminal
source ~/git-tools/switch-to-work.sh
# or
source ~/git-tools/switch-to-personal.sh
```

2. **Check Current Profile**
```bash
git config --global user.email
```

3. **Per-Repo Override** (if needed)
```bash
cd your-wp-theme-folder
git config user.email "different.email@example.com"
```

Would you like me to expand on any of these sections?