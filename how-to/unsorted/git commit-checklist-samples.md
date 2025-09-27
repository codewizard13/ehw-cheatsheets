<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# HOW-TO: 📝 Commit Message Checklist & Advanced Examples for Docs/Assets


**Version:** 1.0


> Optimized for: VSCode on Windows 11 + Git Bash (SSH)
> 

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-23       |
| **Date Updated**:  | --               |
| **AI Assistance**: | Perplexity       |


---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">

## Tags:

- [Git](#)
- [Best Practices](#)
- [Commit Messages](#)


</section>




---


<!-- 🔍 Content Section Heading -->

## 📌 Overview

Conventional commit messages follow a structured specification, making documentation and asset changes easier to track, review, and automate[web:19][web:63][web:64][web:67]. For documentation, clarity in commits is vital to inform maintainers not only about content changes, but also the underlying structural or asset updates.

---

## Commit Message Structure

A well-crafted conventional commit message usually has the following format:

```
<type>(<scope>): <summary line>

<details grouped by folder and file>

⚠️ Notes & Caveats (optional)
```
- **Type:** Use `docs` for documentation changes. Other valid types: `feat`, `fix`, `refactor`, `chore`, etc.[web:19][web:67]
- **Scope:** Top-level folder or area affected, for quick reference.[web:19][web:21]
- **Summary:** Keep concise (≤70 chars), clearly stating what and why.[web:64][web:67]

---

## Detailing Changes

- Group changes by **bolded folder name**.
- List each file beneath, with short, action-focused lines starting with a verb (Added, Updated, Corrected, Removed, Refactored).
- Limit entries per file to about six for scannability.[web:67][web:63]

---

## Notes & Caveats Section

Close with any caveats, implications, or reminders for future iterations.  
- Use for notes about removed content, cross-links, follow-up tasks, possible side effects, and audit reminders.

---

---

## ✅ Commit Message Checklist

Before committing, review these:

- [ ] Use conventional commit type (docs, feat, fix, refactor, etc.)
- [ ] Summary line ≤70 characters, concise and meaningful
- [ ] Scope (inside parentheses) matches top-level folder/module
- [ ] Organize changes by folder and file
- [ ] File entries begin with a verb (Added, Updated, Fixed, etc.)
- [ ] No more than 6 detailed notes per file
- [ ] Add **Notes & Caveats** section for warnings or follow-ups
- [ ] Reference related tickets/issues if applicable
- [ ] Use precise, clear language (avoid ambiguity)
- [ ] Proofread for typos, grammar, and formatting errors

---

## 📝 Examples

### 1. Documentation Restructure (Comprehensive)

```
docs(guides): restructure sections and centralize styles

**guides/github**
- index.md
  - Refactored inline styling to external CSS for maintainability
  - Moved "Tags" block below metadata
  - Fixed links broken by reordering
  - Clarified GitHub Actions usage
  - Standardized headings and spacing
  - Removed outdated legacy UI notes

**guides/assets/css**
- main.css
  - Migrated style rules from markdown files
  - Updated margins and alignment rules
  - Fixed dark mode variable conflicts
  - Consolidated duplicate selectors
  - Documented developer comments

**guides/introduction**
- overview.md
  - Streamlined intro for easy scanning
  - Corrected terminology
  - Linked to advanced guides
  - Standardized code block formatting

⚠️ Notes & Caveats:
- Removed content archived; consider redirects  
- Cross-check CSS on older pages for style drift  
- Future audit: nested guides’ CSS redundancies
```

---

### 2. Star Wars API Documentation Update

```
docs(swapi): update endpoint references and improve samples

**api/starwars**
- endpoints.md
  - Updated examples to match latest Star Wars API docs
  - Described GET /people and /planets usage
  - Listed parameters and resource fields

**samples/js**
- swapi-client.js
  - Added error handling for invalid resources
  - Improved URL builder for new paths

⚠️ Notes & Caveats:
- Deprecated old planet search, added alternatives
- Monitor future SWAPI breaking changes
```

---

### 3. Custom WP Admin Notice with Env Config

```
docs(theme-config): centralize environment config & add admin notice

**theme/inc**
- env-config.php
  - Implemented get_environment_config()
  - Added helpers for env label and font stacks
  - Documented extension pattern

**theme/admin**
- notices.php
  - Display env label from centralized config
  - Refactored legacy notice logic for maintainability

⚠️ Notes & Caveats:
- Config must load before admin_notice fires
- Unknown environments auto-logged for review
```

---

### 4. Short Commit Example

```
docs(api): fix examples, align with current SWAPI

**api/reference**
- endpoints.md
  - Updated request/response samples
  - Corrected parameter descriptions
```

---

## 🔶 Benefits

- Ensures consistent, scannable commit history [web:19][web:66][web:67]  
- Provides clarity for reviewers/maintainers  
- Facilitates automated changelogs and smoother PR reviews

- **Consistent, readable commit history.[web:19][web:63][web:64][web:67]**
- **Less miscommunication during code reviews.**
- **Easier to automate changelogs or release notes.**
- **Clear context for maintainers about content vs. structure changes.**

---

<!-- 📚 References (Optional) -->
## 📚 References / See Also


- [Placeholder 1](#)
- [Placeholder 2](#)


---

## ✅ Revision History


| Version | Date       | Author           | Changes Made                                     |
| ------- | ---------- | ---------------- | ------------------------------------------------ |
| 1.00    | 2025-09-06 | Eric L. Hepperle | Initial draft created                            |
| 1.01    | 2025-09-23 | Eric L. Hepperle | Draft formatted as KB article clone of [tmpl].md |

---
