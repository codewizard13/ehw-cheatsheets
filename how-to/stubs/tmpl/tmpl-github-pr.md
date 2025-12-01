Eric Hepperle, ChatGPT 10/07/25



---





Great — I've added that content into a reusable **PR template** for future documentation batches, with your preferred formatting and terminology preserved.

---

### ✅ Here's your **PR template** with the glossary suggestion included:

```md
## Title
**docs(<area>): <concise summary of docs changes>**

---

## Description

This PR seeds or updates documentation in the knowledge base. It includes draft how‑to stubs and/or work‑in‑progress (WIP) reference documents. The goal is to capture **ideas, examples, operational checklists, or runbooks** in-source for future iteration and refinement.

📘 **Note:** This is a **docs-only** change — no source code, build logic, or runtime configuration has been modified.

---

### ✍️ What’s Included

- [ ] Draft stubs for potential KB topics
- [ ] WIP reference docs for internal workflows or tools
- [ ] File organization and naming updates
- [ ] Housekeeping in `.gitignore` or related meta files

---

### 📚 Reference Library Additions  
*(Example files: `wip-*.md` in `_ref/`)*

- Captures reusable patterns like prompts, headers, commit messages, or PR templates.
- WIP files are **internal-use only** and not considered public-ready.
- Naming reflects draft status: `wip-*.md`, not `lib-*.md`.

---

### 🛠️ How‑To Stubs Collection  
*(Files: `how-to/stubs/01.md` through `NN.md`)*

- These numbered stub files are **early-stage drafts**, used to capture ideas or structure for future guides.
- Topics may include workflows, tools, snippets, debugging tips, UX patterns, etc.
- The stubs follow a **prototyping** model and are not yet ready for public publishing.

---

### 🧹 Housekeeping & Miscellaneous

- [ ] `.gitignore` updated for temporary folders like `_sb/`
- [ ] Renamed or realigned draft files to follow `wip-*` convention
- [ ] Verified all changes are docs-only

---

### 🧩 Related Issues

- None linked, or:  
  - Closes #<issue-number>
  - Related to #<issue-number>

---

### ⚠️ Notes & Caveats

- 🗂️ No code, configuration, or compiled output impacted.
- 📝 Many files are intentionally rough or incomplete (e.g., stubs, snippets, checklists).
- ✅ Recommend linting, spellcheck, and metadata pass before merging.
- 🔒 Quick secret scan done — no sensitive info found.

---

### 🗂️ Optional Enhancements

📘 Consider adding a **Glossary** or **Naming Conventions Key** to improve clarity for new contributors. Possible terms to define:

- `WIP`, `stub`, `_ref`, `_sb`
- Naming conventions (e.g., `wip-*` = draft, `lib-*` = reusable library)
- Folder roles and purpose:
  - `how-to/` – Published or nearly-ready user-facing docs
  - `_ref/` – Internal references and reusable content
  - `_sb/` – Sandbox/scratch space, ignored by version control

```

---


You can now **copy, save, or adapt** this as a `.github/pull_request_template.md` file for future PRs — or just paste it into PR descriptions when doing batch documentation.

Would you like me to add a version that uses checkboxes for publishing steps (e.g. stub → draft → reviewed → published)?
