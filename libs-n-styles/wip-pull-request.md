# Pull Request Libary (started : 2025-09-27)

> - TODO: *Organize into Pull Request **Prompts** and Pull **Request examples***
> - TODO: Add the following section start header to the beginning of each pull request:

**Section Start Header:**

```md
--- -----------------------------------------------------
## ===== 🚩 Section Start 🚩 =====
```

--- -----------------------------------------------------
## ===== 🚩 Section Start 🚩 =====

# docs(ref, how-to): add commit message library, SOP & env config guides, and expanded troubleshooting

# Description
This PR expands the documentation library with a commit message example archive, improved deployment SOPs, new logo branding, and practical WordPress/theme environment config guides. Additional enhancements include troubleshooting for Google Sheets errors, development process checklists, and better organization of communication/emails, all aimed at improving knowledge sharing, contributor onboarding, and operational clarity.

- Added `_ref/older-commit-ex.md` with archived commit message samples for future curation.
- Introduced a resized KB logo (`logo-ehw-kb-h32.png`) for docs and branding.
- Added multiple new and revised guides under `how-to/unsorted/`, covering WP environment config, deployment, email/auth troubleshooting, commit workflows, and real-world scenarios.
- Updated existing SOPs for clarity and added structure such as checklists and markdown improvements.
- Enhanced communication guidance with templates, email resolution details, and AI-powered examples.

### Commit Message Library & Branding  
*(Files: `_ref/older-commit-ex.md`, `_pix/logos/logo-ehw-kb-h32.png`)*  
- Added initial collection of legacy commit messages for later review and documentation use.
- Created a smaller, standardized KB logo for consistent visual identity in docs and wikis.

### Expanded How-To & Troubleshooting  
*(Files: `how-to/unsorted/*`)*  
- Added and revised guides for WordPress environment awareness, standardized deployment SOP, and troubleshooting Google Sheets validation errors.
- Enhanced structure and formatting for guides, including checklists, TOC improvements, and metadata cleanups.
- Provided communication samples and stepwise real-world troubleshooting cases for email/Docs.

### Additional Guides and Checklists  
*(Files: `how-to/unsorted/*`)*  
- Added commit message checklist and sample templates to guide contributors.
- Introduced new articles comparing development tools (LocalWP vs Docker), Git profile setups, and meeting note templates.
- Archived, renamed, and restructured several templates and how-to files for easier discoverability and future editing.

**Related Issues:**  
- None directly linked  

⚠️ **Notes & Caveats:**  
- The commit message library is an initial dump; additional vetting and curation are required before broader contributor use.
- Environment config guide notes limitations of `WP_ENVIRONMENT_TYPE` and recommends manual validation for unsupported values.
- All updated or new deployment SOPs and guides reference information current as of September 2025.

---


# 09/24/25


--- -----------------------------------------------------
## ===== 🚩 Section Start 🚩 =====
Generate a clear and well-structured **pull request** message with the following format and rules:

# Title  
- Provide a concise, imperative summary of the change, ideally ≤70 characters, highlighting key areas affected (e.g., feat(env,wells,theme): add env-aware notices & centralize wells stats).

# Description  
- Provide a brief paragraph summarizing the overall purpose and impact of the PR, emphasizing the motivation, improvements, or bug fixes introduced.  
- Follow with a bulleted list detailing the most important changes and enhancements.


### Feature or Logical Section 1  
*(Files: comma-separated list of related files with backticks)*  
- Use true bullets to clearly describe the key modifications, focusing on functionality, refactors, new features, or fixes.  
- Each bullet should be concise, begin with a strong verb (Added, Updated, Fixed, Refactored, Created), and avoid file-by-file enumeration.  
- Group related small changes together to minimize verbosity.


### Feature or Logical Section 2  
*(Files: comma-separated list of related files with backticks)*  
- Detail the central changes for this section similarly as above.


### Additional Features or Sections  
*(Files: related files)*  
- Continue breaking out logically separate features or major changes in their own sections.  
- Maintain consistent bullet style and clear descriptions.


**Related Issues:**  
- List linked issue references with closing keywords (e.g., Closes #123), ensuring traceability.


⚠️ **Notes & Caveats:**  
- Provide a concise list of important warnings, limitations, dependencies, or usage notes relevant for reviewers and maintainers.  
- Use true bullets, keep to 3-5 points maximum, and focus on facts that affect testing, deployment, or future maintenance.


Additional Guidelines:  
- Always return the PR message in markdown format, suitable for direct copy-paste.  
- Use consistent blank lines before and after major sections or subsections for readability.  
- Tailor the message to highlight key reviewer concerns and facilitate efficient code review.

---


# docs(personal-notes): update docs, styles, and branding for starter repo

# Description
This PR updates the personal notes starter repository to improve documentation, styles, and branding consistency. It replaces placeholder content with structured course notes, introduces tags for better categorization, and aligns assets with the new branding system. These changes establish a reusable template for future course note projects.

- Enhanced `README.md` with tags, updated project details, and branding logos.  
- Improved CSS structure for tags support, style standardization, and layout fixes.  
- Updated personal notes content with finalized course notes, metadata, and navigation features.  
- Centralized assets and refined file organization for long-term maintainability.  
- Removed debug and unused files for a cleaner starter repo.  

### Repository Docs & Branding  
*(Files: `README.md`, `personal-notes/index.md`, `personal-notes/main.md`)*  
- Added tags section and updated project snapshot table for better categorization.  
- Inserted KB logo into `README.md` and markdown headers across notes.  
- Refined metadata tables with course URLs and removed redundancies.  
- Added emoji to navigation bookmark link for improved UX.  
- Replaced placeholder content in `main.md` with finalized course notes layout.  

### Styles & Layout Updates  
*(Files: `css/main.css`, `css/notes.css`)*  
- Added styles for new tags section rendering.  
- Standardized cascading rules across multiple stylesheet inclusions.  
- Removed debug background style from `body` in `notes.css`.  
- Refined spacing and layout rules for consistent rendering across notes pages.  

### File and Asset Management  
*(Files: `personal-notes/main.html`, `course/purpose.txt`, `_pix/logos/`)*  
- Removed unused debug file `main.html` from repo.  
- Relocated images from `personal-notes/img/` to `_pix/logos/` following the `logo-[brand]-icon.svg` naming convention.  
- Added `course/purpose.txt` with organizational diagram of files and folders.  

### Content Structure & Terminology  
*(Files: `personal-notes/index.md`, repo-wide text updates)*  
- Renamed `NOTES.md` to `index.md` for clarity and entry-point consistency.  
- Replaced all `tutorial` references with `Course` (title case).  
- Updated H1 title with 📒 emoji for branding personality.  
- Reorganized content flow: course title, navigation, bookmark link, course details, folder info, chapter samples, `.code-filename` widget, anchor links.  

**Related Issues:**  
- None directly linked  

⚠️ **Notes & Caveats:**  
- This repo now acts as the starter template for future course notes projects.  
- Changes emphasize structure, metadata, and branding rather than actual note content.  
- Legacy course/tutorial references were updated repo-wide; verify no missed instances remain.  

---


refactor(style): consolidate styles into `_css/main.css` and add demo references

# Description
This PR consolidates all custom styles into a single organized stylesheet, removing redundant style folders while introducing demo reference files for easier design experimentation. It streamlines maintainability by centralizing CSS, reduces duplication, and establishes a dedicated `_demo/` directory for style showcases.

- Merged styles from `personal-notes/css/` into `_css/main.css` with structured sections.  
- Removed redundant and legacy style/demo files from multiple directories.  
- Added multiple HTML/CSS style reference demos in `_demo/` to serve as style guides.  
- Updated `.gitignore` to exclude sandboxed `_sb/` files.  
- Cleaned up `personal-notes` HTML/CSS references to match the new structure.  

### Styles Consolidation  
*(Files: `_css/main.css`, `_css/notes.css`, `personal-notes/css/*`)*  
- Merged styles from `personal-notes/css/` and `_css/` into `_css/main.css`.  
- Structured CSS into sections: layout, docs/notes UI, tags, headers, and footers.  
- Removed redundant `personal-notes/css/` folder and legacy style files.  
- Reduced unnecessary inline and fragmented style references in notes.  

### Demo References  
*(Files: `_demo/style-ref-v1/*`, `_demo/style-ref-v2/*`, `_sb/demo/*`, `_sb/demo2/*`)*  
- Added structured demo HTML/CSS references under `_demo/` for future style inspiration.  
- Introduced multiple style reference versions (`style-ref-v1` and `style-ref-v2`) for comparison.  
- Updated `.gitignore` rules to ignore `_sb/` experimental sandbox files.  
- Relocated and renamed demo files for cleaner organization.  

### Personal Notes Adjustments  
*(Files: `personal-notes/main.md`, `personal-notes/main.html`)*  
- Updated CSS references to align with consolidated `_css/main.css`.  
- Applied minor layout and metadata fixes for compatibility with new stylesheet structure.  
- Removed outdated debug `main.html` and reduced redundant style declarations.  

**Related Issues:**  
- None directly linked  

⚠️ **Notes & Caveats:**  
- `_sb/` files remain excluded from version control to prevent clutter.  

---



# 09/29/25


docs(courses/01_Python): add Chapter 2 Variables notes with F-string and styling

### 🎓 Course: [Boot.dev] - Learn to Code in Python  

Adds comprehensive notes for **Chapter 2** of the Boot.dev Python course, covering variables, F-string examples, and dynamic typing. Introduces new styling variables and a per-chapter references section to improve clarity and consistency.

- Added Lessons 1–19 in `courses/01_Python/01.02__Variables.md` with expanded coverage of variable concepts and learning tools.  
- Enhanced `_css/main.css` with a light lavender color variable and featured inline section styles.  
- Updated chapter navigation and file naming for better alignment with Boot.dev structure.

### Variables Chapter Notes  
*(Files: `courses/01_Python/01.02__Variables.md`, `courses/01_Python/index.md`)*  
- Expanded lessons to include F-strings, NoneType, dynamic typing, and multi-variable declarations.  
- Included learning tools Boots and Spellbook, and added a curated References section.

### Styling Enhancements  
*(Files: `_css/main.css`)*  
- Added `--clr-lt-lavender` color variable and `.boot-dev-op-sec` class for featured inline sections.

**Related Issues:**  
- None directly linked  

⚠️ **Notes & Caveats:**  
- Chapter 2 is complete; work on Chapter 3 will follow.  
- Consider consolidating `.ehw-doc-descr` styles into `.boot-dev-op-sec` for consistency.  
- Per-chapter References section is a newly introduced pattern for future adoption.  



---


feat(banner): optimize Charlie Kirk banner button for mobile, refactor CTA styles, & bump theme version

This PR refactors the Charlie Kirk memorial banner by migrating inline styles to SCSS for better maintainability and enhancing mobile responsiveness. The banner button is made visually prominent with larger text and improved layout. Additionally, new SCSS files consolidate CTA and banner styles, and the theme version is updated to reflect these changes.

- Removed inline banner styles and cleaned up markup for improved responsiveness and visual appeal.  
- Made banner button more dominant with larger text, refined hover effects, and mobile-friendly layout.  
- Added new `_banners.scss` for banner and CTA styles and removed redundant CTA styles from `_blockquotes.scss`.  
- Bumped theme version in `package.json`, `README.md`, and `style.css` to 3.05 marking these style updates.

### Banner Markup & Styles  
*(Files: `template-parts/banner/charlie-kirk-memorial.php`, `src/_banners.scss`, `src/_blockquotes.scss`)*  
- Refactored banner markup and moved styles to SCSS for maintainability and consistency.  
- Optimized button appearance and fixed hover selector issues.  
- Removed conflicting styles from blockquotes SCSS and added focused banner style rules.

### Theme & Packaging Updates  
*(Files: `package.json`, `README.md`, `style.css`)*  
- Updated theme version from 3.04 to 3.05 to track style changes.

**Related Issues:**  
- None directly linked  

⚠️ **Notes & Caveats:**  
- Inline styles replaced by SCSS to ease future modifications.  
- Banner styles now follow a new starter template pattern with left-aligned CTA buttons.  
- Temporary banner backup files should be removed before final merge.  
- Consider further extracting hard-coded values into theme config constants for flexibility.  



----



feat(charlie-kirk-banner): add memorial banner & refactor CTA styles

This PR introduces a new **Charlie Kirk memorial banner** with a responsive layout and styled CTA, while also refactoring existing CTA styles into a dedicated partial for improved maintainability. Theme metadata was updated to reflect version 3.05 in line with these style changes. This creates a cleaner style architecture and adds a high-visibility banner for memorial video promotion.

Key highlights:  
- New memorial banner with overlay, button, and responsive refinements.  
- CTA styles extracted from `_blockquotes.scss` into `_banners.scss` and imported cleanly in `app.scss`.  
- Theme version bumped to 3.05 to track the new features and refactor.  

### Home Page Charlie Kirk Banner

*(Files: `front-page.php`, `template-parts/banner/charlie-kirk-memorial.php`)*  

- Added memorial banner above top video using `get_template_part`.  
- Created dedicated template part with:  
  - Overlay background and responsive grid layout.  
  - CTA button linking to memorial video.  
  - Relative paths for URLs (cross-environment safe).  

### Banner & CTA Styles

*(Files: `src/_banners.scss`, `src/_blockquotes.scss`, `src/app.scss`)*  

- Moved all CTA-related styles from `_blockquotes.scss` into a new `_banners.scss`.  
- Updated `app.scss` imports to include `_banners.scss`.  
- Introduced fallback brick-red background color matching the memorial image tones for graceful degradation.  

### Theme Metadata

*(Files: `package.json`, `README.md`, `style.css`)*  

- Updated theme version from 3.04 → 3.05.  
- Synced version references across package metadata, stylesheet, and project README.  

### Temp/Backup Files

*(Files: `template-parts/banner/charlie-kirk-memorial.bkp.php`, `template-parts/banner/tmpl_del.php`)*  

- Leftover backup and demo template files added in squashed history.  
- Recommended to delete for housekeeping since excluded from build process already.  

⚠️ **Notes & Caveats:**  
- Banner button text requires final editorial approval.  
- Backup PHP files are currently excluded from build but should be cleaned up at repo level.  
- Ensure cache busting/CDN purge after deploy so stylesheet refactor (banners/CTAs) propagates correctly.  

🔖 **Closes Asana Tix:** [520](https://app.asana.com/1/818686982630211/project/1211397676880813/task/1211507865266053), [521](https://app.asana.com/1/818686982630211/project/1211397676880813/task/1211507865266069) 




----



# 10/01/25


fix(wells): scope Vimeo iframe CSS to single video posts preventing wells map layout breakage

This PR addresses a layout bug on the wells page where the Vimeo video carousel was overlapping the Google Map and preventing it from displaying full width. The issue stemmed from a global CSS rule intended to fix spacing around Vimeo iframes, which inadvertently affected unrelated content areas site-wide.

**Key Highlights:**

- Fixes layout breakage on the wells page caused by overly broad CSS
- Scopes Vimeo iframe wrapper fix to `.single-videos` context only
- Prevents global override of layout styles outside single video posts


### Vimeo Wrapper CSS Fix  
*(Files: `src/cpt/_videos.scss`)*  
- Updated selector to only apply padding and positioning resets to iframe wrappers inside `.single-videos` pages
- Added detailed code comment explaining the reasoning, scope, and limitations of the rule for maintainability


**Related Issues:**  
- Closes [522](https://app.asana.com/1/818686982630211/project/1211397676880813/task/1211520904887569) (Wells page map layout broken by Vimeo embed styling)


⚠️ **Notes & Caveats:**  
- Original issue was introduced in commit `53e39bd1c985` targeting Vimeo padding fixes
- Change does not impact global styles beyond `.single-videos` scope
- Vimeo embeds using raw iframe markup outside `.single-videos` may still require custom classes
- No PHP or layout templates were changed in this PR


---

Absolutely — here’s a **detailed and professional Asana comment entry** that summarizes the bug, cause, fix, and includes relevant code snippets and test info. It’s structured to be easy for teammates or stakeholders to understand the issue and resolution.

---

### ✅ Vimeo Layout Bug – FIXED

**Issue Summary:**
The **wells page** layout was broken — the video carousel was overlapping the Google Map, and the map was not rendering at full width. This was caused by a **Vimeo-specific CSS rule** introduced earlier to remove spacing from iframes, which unintentionally affected other content (like the map) due to an overly broad selector.

---

**Root Cause:**
The following CSS rule was globally applied and matched **any `div` containing an `iframe`**, regardless of context:

```scss
/* Previous (too broad) selector */
div:not(.single-vid-iframe-wrapper):has(> iframe) {
  padding: 0 !important;
  position: absolute !important;
}
```

This caused divs on unrelated pages (like `.wells-map`) to collapse or overlap content, since the selector wasn’t limited to just video embeds.

---

**Fix Summary:**
We scoped the CSS rule to **only apply inside `.single-videos`**, which is used on single video post templates. This ensures the Vimeo fix is preserved where it’s needed, without affecting layout elsewhere.

```scss
/* ✅ Updated selector (scoped fix) */
.single-videos div:not(.single-vid-iframe-wrapper):has(> iframe) {
  padding: 0 !important;
  position: absolute !important;
}
```

This rule:

* Targets only divs inside `.single-videos` pages
* Excludes elements with the `.single-vid-iframe-wrapper` class
* Prevents the fix from breaking layout on pages like `/wells/`

---

**Test & Verification:**

* Fix tested on branch: `testing_revert/on_53e39bd1c985`
* Verified on both:

  * `/wells/` — layout restored, map renders full-width below carousel
  * Single video post — Vimeo spacing fix still works correctly

---

**Commit Reference:**

* PR: `fix(wells,cpt): scope Vimeo iframe CSS to single video posts`
* Related commit: `53e39bd1c985` (source of the original bug)

---

Let me know if you want to link this fix to another task or if we should notify content editors about preferred embed methods (e.g., oEmbed vs raw iframe).

Let me know if you'd like a shorter version or to tailor it to a non-dev stakeholder.



---


## 10/07/25



Using "Codebase"

I'll check which files changed on the current branch so I can list them in the PR sections and reference exact files. I'll run a git-changed-files query and then summarize results. 

Read changed files in [](file:///c%3A/_EHW/Project%20Repos/ehw-cheatsheets)

I'll read the generated git log at gitlog_20251007_1200.log to extract commit summaries and affected files for the PR message. I will open the file and pull the top relevant lines. 

Read [](file:///c%3A/_EHW/Project%20Repos/ehw-cheatsheets/_sb/gitlog_20251007_1200.log)

Progress update: I scanned the branch commits and the generated git log (gitlog_20251007_1200.log) to collect changed files and commit intent (large docs-only batch across stubs and _ref). Below is a ready-to-copy PR message in Markdown that follows your requested structure.

## Title
- docs(how-to,_ref): add many how‑to stubs and WIP reference drafts

## Description
This PR seeds the documentation knowledge base with a large batch of draft how‑to stubs and several work‑in‑progress reference documents. The goal is to capture ideas, examples, and operational runbooks in-source so they can be iterated, reviewed, and turned into finalized KB articles. This is a docs-only change (no source code or runtime configuration modified).

- Added dozens of draft how‑to stubs covering Git, WordPress, backups, debugging, UX notes, and plugin scaffolds.
- Added and renamed several WIP reference documents in _ref to collect prompts, PR templates, and commit examples.
- Minor housekeeping to .gitignore to reduce noise from the sandbox folder and protect temporary artifacts.

### Reference library additions
*(Files: wip-ai-prompts.md, wip-asana-comment-lib.md, wip-header-comment-library.md, wip-older-commit-ex.md, wip-pull-request.md)*

- Added a reusable AI prompt notebook to capture prompt examples and iterations for future reuse.
- Added an Asana comment/runbook checklist to centralize operational steps and housekeeping guidance.
- Added a header comment/snippet library (CSS example included) to standardize header blocks and shared snippets.
- Created and expanded a commit example archive to document common commit message patterns and examples for contributors.
- Renamed and consolidated pull-request guidance into a WIP PR library for iterative improvement and contributor reference.

### How‑to stubs collection
*(Files: `how-to/stubs/*.md` — e.g. 01.md … 65.md)*

- Added a large collection of draft how‑to stubs (multiple commits added stubs 01–65) to capture potential KB topics and working notes.
- Organized the stubs into a dedicated stubs folder to separate rough drafts from published guides.
- Captured a broad set of topics: Git workflow tips, Windows/PowerShell guidance, CSS snippets, WordPress troubleshooting, plugin scaffolds, backup strategies, and UX/thumbnail notes.
- Grouped templates and examples (plugin scaffold, minimal debug logger, podcast button snippet) to speed future conversions into final articles.

### Housekeeping & misc
*(Files: .gitignore, `_ref/older-commit-ex.md`, `_ref/lib-pull-request.md` -> wip-pull-request.md)*

- Updated .gitignore to include _sb (sandbox) and cleaned up redundant rules to reduce accidental commits of scratch files.
- Converted initial `lib-pull-request.md` into a WIP file (`wip-pull-request.md`) and aligned naming to indicate draft status.
- Ensured the changeset is documentation-only and flagged the WIP files explicitly for maintainers.

**Related Issues:**
- None referenced in commits (No linked issues in this branch).

⚠️ **Notes & Caveats:**
- This is a large docs-only PR: no source code, build scripts, or runtime configs are changed. Reviewers can focus on editorial quality and organization rather than functional impact.
- Many files are rough drafts / unformatted stubs (WIP). Consider splitting into smaller PRs (e.g., finalize & publish 5–10 articles per PR) to simplify review.
- Recommend running a Markdown linter and spellcheck, and adding frontmatter or a table-of-contents/index to improve discoverability before merging into master.
- I scanned the added content for obvious secrets; none were found in the excerpts. Still, reviewers should do a quick sensitive-data check as a precaution.

---
Completion summary: PR message prepared using the branch commit log and file list from gitlog_20251007_1200.log. If you want, I can also:
- Produce a condensed reviewer checklist for this PR,
- Split the large changeset into smaller PR drafts (by topic or file-count),
- Or generate a suggested `README` or index for the new stubs folder to ease navigation. Which would you like next?

---



Here’s a **cleaned-up and enhanced** version of your PR description, with your requested updates and constraints applied. I’ve applied formatting improvements, added light emojis for structure clarity, and incorporated your explanations where relevant.

---

# PERSONAL WIKI DOCUMENTATION PR

## Title

**docs(how-to, _ref): seed draft how‑to stubs and reference WIP docs**

---

## Description

This PR seeds the documentation knowledge base with a large batch of **draft how‑to stubs** and several **work‑in‑progress reference documents**. The goal is to capture **ideas, examples, and operational runbooks** in-source so they can be iterated, reviewed, and eventually turned into finalized KB articles.

📘 **Note:** This is a **docs-only** change — no source code or runtime configuration has been modified.

### ✍️ What’s Included

* Added **65 draft how‑to stubs** covering topics like Git, WordPress, backups, debugging, UX notes, and plugin scaffolds.
* Introduced and renamed several **WIP reference documents** in `_ref/` to collect prompts, PR templates, and commit examples.
* Performed minor housekeeping on `.gitignore` to reduce noise from the `sandbox` folder and protect temporary artifacts.

---

### 📚 Reference Library Additions

*(Files: `wip-ai-prompts.md`, `wip-asana-comment-lib.md`, `wip-header-comment-library.md`, `wip-older-commit-ex.md`, `wip-pull-request.md`)*

* Added a reusable **AI prompt notebook** in `wip-ai-prompts.md` to capture prompt examples and iterations for future reuse.
* Created an **Asana comment/runbook checklist** in `wip-asana-comment-lib.md` to centralize operational steps and housekeeping guidance.
* Started a **header comment/snippet library** in `wip-header-comment-library.md`, including CSS header block examples.
* Compiled a set of **commit message examples** in `wip-older-commit-ex.md` to document common commit patterns for contributors.
* Renamed the earlier `lib-pull-request.md` to `wip-pull-request.md` and began consolidating PR guidance for iterative improvement.

---

### 🛠️ How‑To Stubs Collection

*(Files: `how-to/stubs/01.md` through `how-to/stubs/65.md`)*

* Added **65 numbered stub files** to capture potential KB article topics and working notes.
* Files are stored under the `how-to/stubs/` directory to separate **unpublished rough drafts** from finalized documentation.
* Topics covered include:

  * Git workflow tips
  * PowerShell and Windows scripting
  * CSS snippet patterns
  * WordPress troubleshooting
  * Plugin scaffolds
  * Backup strategies
  * UX/thumbnail standards
* These numbered stubs are part of an internal documentation **prototyping** workflow — designed for ideation and outlining, not for public display yet.

---

### 🧹 Housekeeping & Miscellaneous

*(Files: `.gitignore`, `_ref/lib-pull-request.md` → `wip-pull-request.md`)*

* Updated `.gitignore` to include `_sb/` (sandbox folder) and cleaned up redundant rules to prevent accidental commits of scratch files or temporary artifacts.
* Renamed `lib-pull-request.md` to `wip-pull-request.md` to clarify its draft status and align with WIP naming patterns.
* Ensured all changes are **non-functional**, **documentation-only**, and clearly labeled as in-progress where applicable.

---

### 🧩 Related Issues

* No related issues linked.

---

### ⚠️ Notes & Caveats

* 📂 This is a **large, documentation-only** PR. There are **no changes to source code**, runtime configs, or build logic.
* Many files are **unformatted stubs** and rough drafts. Recommend converting and publishing 5–10 articles per PR in the future to simplify tracking.
* ✨ Consider adding:

  * A **Markdown linter** run
  * Frontmatter or metadata blocks per article
  * A **table of contents** or index for improved navigation
* 🔍 A basic scan was performed for sensitive content — no obvious secrets were found, but a secondary review is encouraged.
* The use of `wip-*` and numbered stub files reflects a working-in-public style of KB development and is meant for internal use.

---

### 🗂️ Optional Enhancements (Not Yet Implemented)

* 📘 Consider adding a **Glossary** or **Naming Conventions Key** to this PR or future documentation to clarify terms like:

  * `WIP`, `stub`, `_ref`, `_sb`
  * Naming scheme for draft vs. finalized documents (e.g., `wip-*` vs. `lib-*`)
  * Folder structure expectations (`how-to/`, `_ref/`, `_sb/`, etc.)


--- -----------------------------------------------------
## 🚩 Section Start 🚩



Excellent catch — that line is indeed **conflicting**. Saying "`wip-*` reflects a *working-in-public* style" contradicts the clarified intent that WIP files are **not for public consumption** (yet), and are strictly **internal**.

Here’s the fully updated PR with:

* Improved clarity around `WIP` meaning (`work-in-progress`, internal use, not yet for publication)
* Fixed the contradictory line in the **⚠️ Notes & Caveats** section
* Integrated the changes seamlessly into the rest of the PR

---

## Title

**docs(how-to, _ref): seed draft how‑to stubs and reference WIP docs**

---

## Description

This PR seeds the documentation knowledge base with a large batch of **draft how‑to stubs** and several **work‑in‑progress (WIP) reference documents**. The goal is to capture **ideas, examples, and operational runbooks** in-source so they can be iterated, reviewed, and eventually turned into finalized KB articles.

📘 **Note:** This is a **docs-only** change — no source code or runtime configuration has been modified.

---

### ✍️ What’s Included

* Added **65 draft how‑to stubs** covering topics like Git, WordPress, backups, debugging, UX notes, and plugin scaffolds.
* Introduced and renamed several **WIP reference documents** in `_ref/` to collect prompts, PR templates, and commit examples.
* Performed minor housekeeping on `.gitignore` to reduce noise from the `sandbox` folder and protect temporary artifacts.

---

### 📚 Reference Library Additions

*(Files: `wip-ai-prompts.md`, `wip-asana-comment-lib.md`, `wip-header-comment-library.md`, `wip-older-commit-ex.md`, `wip-pull-request.md`)*

* Added a reusable **AI prompt notebook** in `wip-ai-prompts.md` to capture prompt examples and iterations for future reuse.
* Created an **Asana comment/runbook checklist** in `wip-asana-comment-lib.md` to centralize operational steps and housekeeping guidance.
* Started a **header comment/snippet library** in `wip-header-comment-library.md`, including CSS header block examples.
* Compiled a set of **commit message examples** in `wip-older-commit-ex.md` to document common commit patterns for contributors.
* Renamed the earlier `lib-pull-request.md` to `wip-pull-request.md` to clarify its **work-in-progress (WIP)** status — indicating it's **not yet ready for public consumption** and intended for internal iteration.

---

### 🛠️ How‑To Stubs Collection

*(Files: `how-to/stubs/01.md` through `how-to/stubs/65.md`)*

* Added **65 numbered stub files** to capture potential KB article topics and working notes.
* Files are stored under the `how-to/stubs/` directory to separate **unpublished rough drafts** from finalized documentation.
* Topics covered include:

  * Git workflow tips
  * PowerShell and Windows scripting
  * CSS snippet patterns
  * WordPress troubleshooting
  * Plugin scaffolds
  * Backup strategies
  * UX/thumbnail standards
* These numbered stubs are part of an internal documentation **prototyping** workflow — marked as **WIP** to indicate **they are rough ideas, not yet intended for publication or public use**.

---

### 🧹 Housekeeping & Miscellaneous

*(Files: `.gitignore`, `_ref/lib-pull-request.md` → `wip-pull-request.md`)*

* Updated `.gitignore` to include `_sb/` (sandbox folder) and cleaned up redundant rules to prevent accidental commits of scratch files or temporary artifacts.
* Renamed `lib-pull-request.md` to `wip-pull-request.md` to align with draft naming and clarify that it's not a finalized reference.
* Ensured all changes are **non-functional**, **documentation-only**, and clearly labeled as in-progress where applicable.

---

### 🧩 Related Issues

* No related issues linked.

---

### ⚠️ Notes & Caveats

* 📂 This is a **large, documentation-only** PR. There are **no changes to source code**, runtime configs, or build logic.
* Many files are **unformatted stubs** and rough drafts. Recommend converting and publishing 5–10 articles per PR in the future to simplify tracking.
* ✨ Consider adding:

  * A **Markdown linter** run
  * Frontmatter or metadata blocks per article
  * Table of contents/index for improved navigation
* 🔍 A basic scan was performed for sensitive content — no obvious secrets were found, but a secondary review is encouraged.
* The use of `wip-*` filenames and numbered stubs reflects a structured **internal drafting process** — these documents are **not intended for public consumption** in their current form.

---

### 🗂️ Optional Enhancements (Not Yet Implemented)

* 📘 Consider adding a **Glossary** or **Naming Conventions Key** to this PR or future documentation to clarify terms like:

  * `WIP`, `stub`, `_ref`, `_sb`
  * Naming scheme for draft vs. finalized documents (e.g., `wip-*` vs. `lib-*`)
  * Folder structure expectations (`how-to/`, `_ref/`, `_sb/`, etc.)

---

Let me know if you’d like this version copied into a reusable GitHub PR template or saved for future documentation batches.


---
🚩 Section Start 🚩
---


