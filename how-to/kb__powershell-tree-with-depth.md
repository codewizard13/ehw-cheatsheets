<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](placeholder-logo.png){height=32}

<!-- 📝 Title -->
# HOW-TO: 📘 PowerShell: Create Custom Tree Directory Viewer

**Version:** 1.0

> Optimized for: PowerShell 7.5.4 on Windows 11

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 [HOW-TO](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-12-09       |
| **Date Updated**:  | --               |
| **AI Assistance**: | Perplexity AI    |

---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">

## Tags:
- PowerShell
- Directory Tree
- Get-ChildItem
- Recursion
- Depth Limit

</section>

---

<details open>
<summary>Table of Contents</summary>
- [Overview](#overview)
- [Development Process](#development-process)
- [Final Solution](#final-working-solution)
</details>

---

## 📌 Overview

This guide documents the iterative development process to create a **custom PowerShell tree directory viewer** that displays folders only, limited to a specified depth (e.g., 3 levels max), with proper indentation and no metadata clutter. 

The journey began with failed attempts using `tree` command limitations, `Get-ChildItem -Depth` without proper formatting, and broken recursive functions. The final solution is a **compact one-liner function** that works perfectly in PowerShell 7.5.4:

```

function Show-Tree($Path,$MaxDepth=3){Get-ChildItem \$Path -Directory -Recurse -Depth $MaxDepth|Sort FullName|%{" "*((($_.FullName.Replace($Path,'').Split('\').Count-1)*2))+$_.Name}}

```

**Usage:** `Show-Tree 'D:\EHC' 3`  
**Key features:** Any depth, clean tree format, directories only, sorted alphabetically.

---

## 🛠️ Development Process & Failed Attempts

### Initial Failed Approaches

**Attempt 1: Native `tree` command**  
```

tree /F  \# No depth control

```
**Problem:** No depth parameter available [web:9]

**Attempt 2: `Get-ChildItem -Depth 1` alone**  
```

Get-ChildItem -Directory -Depth 1 | Tree  \# Failed - Tree not pipeline-aware

```
**Problem:** `tree` expects path argument, not objects [web:3]

**Attempt 3: Manual chaining (2 levels)**  
```

Get-ChildItem -Directory | ForEach-Object { \$_.Name }; Get-ChildItem -Directory | ForEach-Object { Get-ChildItem \$_.FullName -Directory | ForEach-Object { "  " + \$_.Name } }

```
**Worked but** required manual extension for deeper levels.

**Syntax errors encountered:**
```


# Missing semicolon

\$rootPath = 'EHC'Get-ChildItem  \# ParserError: Unexpected token

# Missing ForEach-Object braces

ForEach { code Tree-Node call }  \# ParserError: Unexpected token 'Tree-Node'

```

### Broken Recursive Function Attempts

**Attempt 4: Nested function recursion**  
```

function Show-Tree(\$Path = ".", $Depth = 2) {
    function Tree-Node($Current, $Level) {  # NESTED function scope issue
        if ($Level -gt \$Depth) { return }
Get-ChildItem $Current -Directory | ForEach-Object {
            (" " * ($Level * 2)) + \$_.Name
Tree-Node $_.FullName ($Level + 1)  \# FAILED: Unexpected token
}
}
}

```
**Root cause:** Nested functions can't directly recurse without script scope variables [web:70][web:83]

**Attempt 5: PSDepth property (non-existent)**  
```

0..2 | %{Get-ChildItem $root -Directory -Recurse |?{$_.PSDepth-eq $_} |%{" "*($_*2)+\$_.Name}}

```
**Problem:** No `PSDepth` property exists on FileInfo objects.

---

## ✅ Final Working Solution

**The champion one-liner (paste once, reuse forever):**

```

function Show-Tree($Path,$MaxDepth=3){Get-ChildItem \$Path -Directory -Recurse -Depth $MaxDepth|Sort FullName|%{" "*((($_.FullName.Replace($Path,'').Split('\').Count-1)*2))+$_.Name}}

```

**How it works:**
- `Get-ChildItem ... -Recurse -Depth $MaxDepth` → Gets all dirs up to depth
- `Sort FullName` → Alphabetical tree order
- `Replace($Path,'').Split('\').Count-1` → Calculates indent level from path depth
- `" "*($level*2)` → Indents 2 spaces per level

**Usage examples:**
```

Show-Tree 'D:\EHC' 3                    \# 3 levels deep
Show-Tree . 2                           \# Current dir, 2 levels
Show-Tree "\$env:USERPROFILE\Desktop" 1  \# Desktop, 1 level only

```

**Sample output:**
```

Folder1
SubFolder1
SubFolder2
Folder2
DeepSubFolder

```

---

## 📚 References / See Also

### Official Documentation
- [Get-ChildItem (Microsoft.PowerShell.Management)](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem?view=powershell-7.5) [web:6]
- [tree command | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tree) [web:9]

### Stack Overflow Solutions
- [Limit Get-ChildItem recursion depth](https://stackoverflow.com/questions/13249085/limit-get-childitem-recursion-depth) [web:30]
- [List folders at or below a given depth](https://stackoverflow.com/questions/55029472/list-folders-at-or-below-a-given-depth-in-powershell) [web:3]

### Community Discussions
- [r/PowerShell: Recurse only 1 level](https://www.reddit.com/r/PowerShell/comments/11r6jas/is_there_a_way_to_recurse_only_1_level/) [web:2]
- [PowerShell Forums: Specific depth level](https://forums.powershell.org/t/search-files-on-specific-depth-level/2370) [web:4]

### Recursion Resources
- [PowerShell Recursion with Return](https://stackoverflow.com/questions/4989021/powershell-recursion-with-return) [web:70]
- [about_Scopes - PowerShell](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_scopes?view=powershell-7.5) [web:83]

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made                                            |
|---------|------------|------------------|--------------------------------------------------------|
| 1.00    | 2025-12-09 | Eric L. Hepperle | Initial draft with complete failed attempts analysis   |
