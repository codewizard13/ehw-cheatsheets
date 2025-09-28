# Pull Request Libary (started : 2025-09-27)

⚠️ **#CAVEATS**:
- Organize into Pull Request **Prompts** and Pull **Request examples**

---


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