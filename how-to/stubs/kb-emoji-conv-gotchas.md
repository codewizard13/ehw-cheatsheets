### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/24/25


## CONTENT_BELOW: ##

---



<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">


<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg Title -->
# KB: ⚠️ Emoji Conversion & TOC Auto Revert Gotchas in VSCode Markdown


**Version:** 1.0


<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 KB](index.md)


<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-24       |
| **Date Updated**:  | 2025-09-24       |
| **AI Assistance**: | Perplexity AI    |


***

## 📌 Overview

This article documents common **gotchas and limitations** encountered when using **emojis in Markdown headings with VSCode's Markdown environment**, specifically when leveraging the "Markdown All in One" extension's **auto-update Table of Contents (TOC)** feature.

It focuses on how emojis are converted or **stripped from heading anchors**, causing TOC auto-revert issues and broken links. Understanding these behaviors helps users maintain readable, emoji-rich headings without breaking navigation in documents.

***

## ⚠️ Key Gotchas & Details

### 1. Emoji Stripping from Heading Anchors

- The extension’s **slugify function** generates anchor IDs for headings and TOC links by applying rules mimicking GitHub’s heading ID generation.
- GitHub-style **slugification strips most emoji Unicode characters** from anchors because they are not URL-safe or supported in GitHub’s markdown anchor rules.
- Some emojis survive because they are **ASCII-range punctuation or symbols allowed in URLs**, like "⚠️" (warning) or "✅" (check mark).
- Complex or multi-code-point emojis (e.g., flag sequences, skin-tone modifiers) are **stripped entirely or partially**, resulting in broken or missing TOC links.

### 2. Inconsistent Emoji Behavior Between Modes

- The `"github"` slugify mode is default and strict, causing emoji removal.
- Alternative slugify modes (`"vscode"`, `"gitlab"`, etc.) exist but lack **clear public documentation on emoji handling**.
- Users must **manually test** these modes for emoji retention, with no guaranteed improvement.
- Changes to slugify mode require **VSCode window reload** or full restart to take effect.

### 3. TOC Auto-Update Feature Can Cause Emoji Reversion

- The "Markdown All in One" extension's **TOC auto-update on save** rewrites TOC and headings removing emojis in anchors based on slugify rules.
- Disabling auto TOC update (`"markdown.extension.toc.updateOnSave": false`) lets users maintain emojis visually in headings.
- Manual TOC regeneration can be run when needed to update links without automatic emoji-stripping.

***

## 🔧 Workarounds & Recommendations

- **Disable TOC auto-update on save** in VSCode settings to preserve emojis:
  
  ```json
  "markdown.extension.toc.updateOnSave": false
  ```

- **Manually update TOC** via command palette (`Ctrl+Shift+P` → Markdown All in One: Create Table of Contents).
- Choose emojis for headings carefully; prefer single-codepoint ASCII-allowed symbols like `⚠️`, `✅`, `📄`, `🧩`.
- Replace complex emojis in headings with text equivalents or simple inline icons.
- Reload or restart VSCode after changing slugify mode settings.

***

## 📚 References

- [GitHub Issue #98: Emoji in header causes broken TOC link](https://github.com/yzhang-gh/vscode-markdown/issues/98)
- [GitHub Slugger Implementation](https://github.com/Flet/github-slugger)
- [GitHub Emoji API](https://api.github.com/emojis)
- [Complete GitHub Markdown Emoji List (Gist)](https://gist.github.com/rxaviers/7360908)
- [Markdown All in One Official Documentation](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Slugify rules for VSCode (Markdown All in One)](https://markdown-all-in-one.github.io/docs/specs/slugify/vscode.html)

***

## ✅ Revision History

| Version | Date       | Author           | Changes Made                                            |
| ------- | ---------- | ---------------- | ------------------------------------------------------ |
| 1.0     | 2025-09-24 | Eric L. Hepperle | Initial KB created covering emoji conversion & TOC revert gotchas |

***

This article helps developers and content writers understand and work around emoji-related TOC issues unique to VSCode and GitHub-flavored markdown environments using the most popular extension.[1][2][3][5]

[1](https://github.com/Flet/github-slugger)
[2](https://stackoverflow.com/questions/53643622/use-emoji-in-github-markdown)
[3](https://github.com/yzhang-gh/vscode-markdown/issues/792)
[4](https://github.com/microsoft/vscode/issues/106296)
[5](https://github.com/yzhang-gh/vscode-markdown/issues/98)
[6](https://stackoverflow.com/questions/34538879/unicode-emojis-in-github-markdown)
[7](https://gist.github.com/rxaviers/7360908)
[8](https://www.reddit.com/r/github/comments/1kcci2h/do_you_like_a_readme_with_or_without_emojis/)
[9](https://github.com/markdown-it/markdown-it-emoji/issues/11)


---


Here are some GitHub-approved emojis commonly used for the headings you asked about. These are standard emojis supported via GitHub markdown and unlikely to be stripped or cause anchor/link issues:

| Heading       | Suggested GitHub Approved Emojis         | Common Shortcode Examples          |
|---------------|-----------------------------------------|----------------------------------|
| **Pages**     | 📄 (Page), 📚 (Books), 📁 (Folder)       | `:page_facing_up:`, `:books:`, `:file_folder:` |
| **Sidebars**  | ⬜ (White Large Square), 📋 (Clipboard), 📑 (Bookmark Tabs) | `:white_large_square:`, `:clipboard:`, `:bookmark_tabs:` |
| **Widgets**   | 🧩 (Puzzle Piece), ⚙️ (Gear), 🔧 (Wrench)  | `:puzzle_piece:`, `:gear:`, `:wrench:` |
| **General Tasks** | 🛠️ (Hammer and Wrench), ✔️ (Check Mark), 📝 (Memo) | `:hammer_and_wrench:`, `:white_check_mark:`, `:memo:` |

### Examples in markdown headings:

```markdown
## 📄 Pages
## ⬜ Sidebars
## 🧩 Widgets
## 🛠️ General Tasks
```

### Why these emojis?

- They are all single Unicode characters that GitHub recognizes and displays properly.
- They fall within the ranges that GitHub’s slugify mode tolerates for anchors, so they won't typically be stripped or cause broken TOC links.
- They visually represent the concepts clearly for navigation and readability.

If desired, you can check out the full GitHub emoji list here:  
https://gist.github.com/rxaviers/7360908  
or  
https://github.com/ikatyang/emoji-cheat-sheet  

These sources provide the full emoji shortcodes and characters supported in GitHub markdown.

***

If you want, I can help generate a more extensive recommended emoji list for your entire document headings based on GitHub-safe emojis.

[1](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/)
[2](https://www.codecademy.com/resources/docs/markdown/emojis)
[3](https://gist.github.com/468c0a0a6c854ed5780a32deb73d457f)
[4](https://stackoverflow.com/questions/34538879/unicode-emojis-in-github-markdown)
[5](https://github.com/yzhang-gh/vscode-markdown/issues/792)
[6](https://gist.github.com/rxaviers/7360908)
[7](https://github.com/ikatyang/emoji-cheat-sheet)
[8](https://dev.to/nikolab/complete-list-of-github-markdown-emoji-markup-5aia)
[9](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[10](https://gist.github.com/roachhd/1f029bd4b50b8a524f3c)
