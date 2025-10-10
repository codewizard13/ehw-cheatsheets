# Git Commit Libary (started : 2025-09-27)

⚠️ **#CAVEATS**:
- Organize into Commit Prompts and Commit Message examples

---




# ELIJAH-THEME:

## _ref/prompt/commits.md (jun 19, 2025)

Thanks - works perfect! Can you give a commit message similar to this that concisely explains the changes, both in code and business function?

👔 [00.01.21] inc/loops.php - elsm_render_loop() FIX pagination logic: Ensure correct posts display when navigating pages

- Added 'paged' parameter to $post_args, dynamically set using get_query_var('paged') to track the current page.
- Updated WP_Query to respect the 'paged' value, ensuring the displayed posts correspond to the selected pagination page.
- Adjusted paginate_links() to use the custom query's max_num_pages for accurate pagination.
- Improved debugging with error logs for pagination variables (paged, totalPages, etc.).
- Business Impact: Fixes issue where pagination navigation advanced but displayed posts remained static, enabling proper navigation through post results.




---



Thanks - works perfect! Can you give a commit message in the following format that concisely explains the changes, both in code and business function?

👔 [00.01.21] inc/loops.php - elsm_render_loop() FIX pagination logic: Ensure correct posts display when navigating pages

- Added 'paged' parameter to $post_args, dynamically set using get_query_var('paged') to track the current page.
- Updated WP_Query to respect the 'paged' value, ensuring the displayed posts correspond to the selected pagination page.
- Adjusted paginate_links() to use the custom query's max_num_pages for accurate pagination.
- Improved debugging with error logs for pagination variables (paged, totalPages, etc.).
- Business Impact: Fixes issue where pagination navigation advanced but displayed posts remained static, enabling proper navigation through post results.


---

## This version includes instruction to use appropriate gitmoji

Thanks - works perfect! Can you give a commit message in the following format using an appropriate gitmoji that concisely explains the changes, both in code and business function?

👔 [00.01.21] inc/loops.php - elsm_render_loop() FIX pagination logic: Ensure correct posts display when navigating pages

- Added 'paged' parameter to $post_args, dynamically set using get_query_var('paged') to track the current page.
- Updated WP_Query to respect the 'paged' value, ensuring the displayed posts correspond to the selected pagination page.
- Adjusted paginate_links() to use the custom query's max_num_pages for accurate pagination.
- Improved debugging with error logs for pagination variables (paged, totalPages, etc.).
- Business Impact: Fixes issue where pagination navigation advanced but displayed posts remained static, enabling proper navigation through post results.

---


## _ref/logs/commits.md (May 30, 2025)

<!--

 COMMITS:  Example commit log messages

 -->



🐛  [00.01.31  TSHOOT Slick Slider] inc/cpt/testimonials.php - FIX form tabIndex errors: Scope to testimonials page only

- Added page-specific check `if (!is_page('testimonials'))` to prevent global execution
- Fixed tabIndex JavaScript from firing on unrelated pages
- Updated function documentation to clarify page scope
- Business Impact: Resolves console errors on non-testimonial pages while maintaining form functionality where needed




✨  [00.01.31  inc/theme-scripts.php - Configure Slick Slider dependencies and initialization

- Added CDN-based loading of Slick Slider (v1.8.1) with proper jQuery dependency
- Registered app.js with explicit dependencies ['jquery', 'slick-slider'] to ensure proper load order
- Implemented enhanced debug logging to track slider initialization status
- Added cache-busting for development using time() versioning
- Added inline script to validate critical dependencies and DOM elements

Business Impact: Enables functional slider navigation with working prev/next arrows and pagination dots, establishing foundation for improved content presentation. Pending styling refinements will enhance visual integration.


---



## _ref/demo/commit-ex.md (July 7, 2025)

Yes, your commit message can be made more granular by specifying exactly which sections were reorganized, what was moved or grouped, and how the media queries were clarified. Here are two granular options:

---

**Option 1:**

🧹 [00.01.45] _nav.scss - Refactor: Granular reorganization of media queries and responsive styles

- Grouped XS (`max-width: $breakpoint-xs`) and SM (`max-width: $breakpoint-sm`) media queries into distinct, clearly labeled sections.
- Moved all mobile-specific navigation, button, and mega menu display rules into their respective breakpoints.
- Consolidated hamburger menu variable declarations and animation styles under SM breakpoint for clarity.
- Ensured all responsive overrides (e.g., `.col-l`, `.col-r`, `.btns-grp-2ndry`, `.btn-grouping`) are scoped to the correct media query.
- Moved debug border rule to the bottom for easier toggling/removal.
- **Business Impact**: Improves maintainability and onboarding by making responsive logic easier to follow and update, reducing risk of style conflicts across breakpoints.

---

**Option 2:**

♻️ [00.01.45] _nav.scss - Refactor: Split and clarify responsive SCSS by breakpoint and component

- Split media queries into XS and SM sections, each containing only the relevant overrides for navigation, buttons, and mega menu.
- Grouped all hamburger/mobile menu variables and animation styles under the SM breakpoint for single-responsibility.
- Scoped `.btns-grp-2ndry`, `.btn-grouping`, and menu visibility toggles to their respective breakpoints for easier future edits.
- Relocated debug border rule to file end for developer convenience.
- **Business Impact**: Makes responsive navigation styling more modular and predictable, reducing developer time spent tracing style overrides and improving reliability of mobile/desktop navigation behavior.


---




🛠  [00.01.37 HeaderSearchIcon]  top-mega-menu.php - TEMP style for mobile search dropdown, fix duplicate search toggler ID

- Temporarily added `<style>` block to push `#mobile-search-dropdown-wrapper` 88px from the top for proper mobile overlay positioning (to be moved to _nav.scss in a future refactor).
- Changed search toggler button ID in the right column of the header from `#mobile-search-icon-btn` to `#desktop-search-icon-btn` to prevent duplicate ID conflicts between mobile and desktop search toggles.

- **Business Impact**: Ensures correct mobile search dropdown placement and eliminates potential JavaScript/CSS issues caused by duplicate element IDs, improving navigation reliability and maintainability.




---



✨ feat(scripts): Add script to extract and deduplicate URLs from nested JSON

- Introduced `dedup-urls-json.js`, a Node.js script to parse deeply nested JSON files.
- The script recursively traverses the JSON structure to find all URL values.
- Uses a `Set` to efficiently deduplicate the found URLs.
- Outputs the unique URLs to a specified text file, with each URL on a new line.
- Designed to be run from the command line using `process.argv` for input/output file paths.

- **Business Impact**: Provides a utility to extract and organize URLs from complex data sources, which can be useful for various tasks like sitemaps, data analysis, or content verification.

---






📱  [00.01.38 HeaderPushdown]  _nav.scss - FIX `.header-content-pushdown` so there are no gaps between it and `#header-top-nav`

- Set `.header-content-pushdown::before` default height to `$header-height-tab` (113px) for improved tablet handling.
- Apply `$header-height-desk` (80px) for `.header-content-pushdown::before` at `min-width: 1024px` for desktop screens.
- Commented out `$header-height-mob` (88px) for mobile, clarifying intent and future use.
- Removed redundant/overlapping media queries and margin-top override for `.header-content-pushdown`.
- Set `#header-top-nav` height to 117px for mobile breakpoint (`max-width: $breakpoint-sm`).
- **Business Impact**: Ensures header ghost element accurately matches header height across breakpoints, preventing content overlap and improving layout consistency.

---


💄  [00.01.39 HeaderMobileTweak]  _nav.scss - Tweak mobile nav spacing and logo sizing for ≤768px

- Set `.btn-grouping > button, .btn-grouping > a` padding to `.2rem` for improved button touch targets on mobile.
- Add `.4rem` margin-bottom to `.col-l` for better vertical spacing between stacked columns.
- Limit `.site-logo-header img` to `max-height: 40px` for consistent logo display on small screens.
- **Business Impact**: Enhances mobile navigation usability and visual clarity, ensuring buttons are easier to tap and layout remains clean on devices ≤768px.

---




## REVISED COMMIT MSG FORMAT with separate "Business Impact" and "Gotcha" sections:  2025-07-02, Eric Hepperle

💄  [00.01.40 GuestGrid]  Refactor guest archive loop to use `.guest-grid` CSS Grid layout for precise row and column gaps

**template-parts/**
- `loop/arch-guests.php`: Add `.guest-grid` class to guest loop wrapper for improved style targeting and layout control.
- card-guest-2col.php: Remove inline `max-width` styling and Bootstrap `row`/`col` classes from guest cards to prevent grid conflicts and wrapping issues.

**src/_guests.scss**
- Implement CSS Grid in `.guest-grid` for consistent two-column layout with defined column and row gaps.
- Retain `max-width` on cards to ensure correct sizing for odd card counts.

---

**🚀 Business Impact:**
Delivers a visually balanced, consistently spaced guest archive grid, improving readability and user experience across all screen sizes.

**⚠️ #GOTCHA:**
While this fixes the grid gap spacing issue, it breaks something such that guest card heights are inconsistent.

---




💄  [00.01.41 GuestSidebarOrder]  Restrict sidebar column order swap to Guests archive only; move logic to _layout.scss for single source of truth

**src/_layout.scss**
- Under `@media (max-width: 768px)`, prefixed `.eh-col-left` with `.post-type-archive-guests` (the body class for the guests archive page) so sidebar order swap only applies to the Guests archive.
- Moved sidebar order logic from `_guests.scss` to `_layout.scss` to centralize control of sidebar ordering for all templates.

---

**🚀 Business Impact:**
Prevents unintended sidebar order changes on non-guest pages, ensuring only the Guests archive uses the alternate column order on mobile. Simplifies future maintenance by consolidating sidebar order logic in one place.

**⚠️ #GOTCHA:**
If other archive pages need custom sidebar order, they must be added to `_layout.scss`—this change removes the previous global override.




---

style(wells): complete Wells page responsive styling and layout refinements

Updates the Wells page styling to match live site design while improving code organization and maintainability.

Key Changes:
- Refined hero section with proper overlay opacity, responsive button styling, and convex border
- Restructured page panels with consistent `.wells-panel > .row` layout pattern
- Added semantic section classes for precise styling targeting
- Improved responsive behavior across all breakpoints
- Fixed z-index layering conflicts between nav, search, and counters
- Migrated inline Bootstrap classes to SCSS for better maintainability

Technical Details:
- Set max-width: 1200px on panel rows for consistent layout
- Added new color variables ($med-dark-teal, $med-light-teal, $clr-wedgewood)
- Consolidated mobile media queries and moved hero styles to _heros.scss
- Fixed FooGallery sort tab link colors and spacing issues

Note: Includes recommendation to add section classes to remaining panels and refactor CSS to target section classes instead of row classes



---

## Changelog Entry:


## 📅 [2.01] 2025-07-17 to 2025-07-24

### 📈 Business Value Summary
This release introduces a new image gallery and video carousel for the Wells page, improves theme versioning, and enhances UI consistency. Maintenance, automation, and plugin updates streamline development and deployment. Ongoing work on advanced search and parity with the Elementor site continues.

---

### Wells Page Gallery & Carousel

- **page-wells.php**: Added/configured FooGallery Pro-powered image gallery for Uganda wells (manual caption/taxonomy setup); Integrated WP Carousel Pro for video slider with import/export and shortcode ID management.
- **_wells.scss**: Improved photo gallery caption styles (reduced specificity, full-width text, better padding); styled caption descriptions (left alignment, celeste text color); enhanced `.btn-lg-hero` hover opacity; added new styles for gallery filter and load more buttons to match theme color; reduced selector specificity for maintainability; removed Bootstrap padding/margin classes from `.photo-gallery-row` for full-width images.
- 🎯 FIX: Removed temporary debug outlines and backgrounds on Testimonials and Wells pages (since version: 2.00).

### Site Header (default)

- Improved tablet mode header layout (align-items, flex-wrap, row-gap).

### Theme Maintenance & Versioning

- Updated screenshot.jpg to reflect theme version 2.01.
- **README.md**: Documented theme version changes and major updates for onboarding and reference.

### Automation & Build

- **webpack.mix.js**: Updated to use correct local domain after site restore.
- **screenshot-each-page.js**: Planned improvements to prevent duplicate screenshots and allow flexible URL input.

### Plugin Management

- Installed/activated FooGallery Pro and WP Carousel Pro on staging; updated Max Mega Menu.

### Work-in-Progress

- Advanced Search Page: Continued development and integration with `elsm_render_loop()`.
- Footer & Sidebars: Ongoing layout adjustments and sidebar recreation.
- AJAX Video Filter: In-progress for video archive filtering.
- About & Testimony Pages: Ongoing efforts to match Elementor site design.



---


# v3.0.0 Changelog

## 📅 [3.00] (Aug 5-20, 2025)

### 📈 Business Value Summary
Major update focusing on visual parity with production site, improved responsive design, and enhanced user experience. Key improvements include refined Wells page layout/styling, mosaic testimonials display, responsive footer optimization, and streamlined content loading. These changes provide better visual consistency, improved mobile experience, and more efficient content delivery.

---


### Wells Page

#### Hero Section
- **hero/pg-wells.php**, **_heros.scss**: Implemented configurable hero system with refined overlay, convex border, and responsive CTA
  - 🎯 FIX: Hero overlay affecting content opacity
  - 🎯 FIX: Mobile button styles limited to small screens

#### Statistics Counter Cards
- **_wells.scss**, **_nav.scss**: Enhanced responsive layout with proper z-indexing, refined typography and spacing
  - 🎯 FIX: Counter cards overlapping navigation elements

#### Content Sections
- **page-wells.php**, **_wells.scss**: Standardized panel structure, heading styles, section spacing across all panels
  - 🎯 FIX: FooGallery sort tab link colors 
  - 🎯 FIX: Bible verse section responsiveness

### Testimonials

- **testimonials/*.php**: Implemented mosaic tile layout with randomized slider functionality
  - 🎯 FIX: Mosaic tile alignment on testimonials page


### Guests

- **guests/*.php**: Enhanced guest card layout system
  - 🎯 FIX: Guest cards becoming mangled during sort operations

### Email System

- **plugins/**: Added custom HTML email builder plugin for WordPress theme

### 📱 Core Theme Updates

#### Footer Improvements
- **_footer.scss**: Refined footer layout and spacing specifically for tablet displays

#### Load More Functionality
- **templates/**: Implemented "Load More" button infrastructure across multiple page types
  - 🎯 FIX: Removed deprecated /videos/ page



#### Color System
- **_colors.scss**: Added new color variables including `$med-dark-teal`, `$med-light-teal`, and `$clr-wedgewood`

#### Base Styles
- **_base.scss**: Removed `!important` from gradient declarations for better style cascade control




---


# 09/27/25


docs(ref): add commit msg library and new resized logo  

**_ref**  
- **`older-commit-ex.md`**  
  - Added initial collection of older commit message examples.  
  - Prepared as a reference library to be sorted and finalized later.  
  - Improved knowledge sharing by centralizing previously scattered examples.  

**_pix/logos**  
- **`logo-ehw-kb-h32.png`**  
  - Added new branded KB logo resized to 32px height.  
  - Prepared for replacing or supplementing the current logo version.  
  - Ensured dimensions optimized for consistent display in wiki and docs.  

⚠️ **Notes & Caveats:**  
- Older commit library still requires organization and refinement before publishing to contributors.  



---

docs(lib-pull-requests): add pull request library and update gitignore  

**_ref**  
- **`lib-pull-request.md`**  
  - Added initial library of pull request templates and examples for future reference.  
  - Prepared structure for users to contribute, sort, and finalize standardized pull request formats.  

**`.gitignore`**  
  - Updated header comments for creation and update dates, author, and file version.  
  - Added `_sb/` to ignored sandboxes and junk files for improved directory hygiene.  
  - Removed commented-out and redundant ignore rules to streamline configuration.  
  - Appended entries for Playwright test results and cache folders to prevent accidental commits.  

⚠️ **Notes & Caveats:**  
- Pull request library in `_ref/lib-pull-request.md` is an initial draft and will be refined before integration with contributor docs.  
- Changes to `.gitignore` should be validated on new and existing branches to ensure no essential files are omitted from commits.  
- Future updates may further separate legacy versus new sandbox folder conventions.  




---


docs(ref, gitignore): add pull request library, update gitignore, and expand commit example archive  

**_ref**  
- **`lib-pull-request.md`**  
  - Added initial library of pull request templates and examples for future reference.  
  - Prepared structure for users to contribute, sort, and finalize standardized pull request formats.  
- **`older-commit-ex.md`**  
  - Added section header marking this as a Git Commit Library with a start date.  
  - Appended latest commit example for "add pull request library and update gitignore" matching current changeset.  
  - Improved discoverability and reuse potential by explicitly documenting recent commit message patterns.  

**`.gitignore`**  
  - Updated header comments for creation and update dates, author, and file version.  
  - Added `_sb/` to ignored sandboxes and junk files for improved directory hygiene.  
  - Removed commented-out and redundant ignore rules to streamline configuration.  
  - Appended entries for Playwright test results and cache folders to prevent accidental commits.  

⚠️ **Notes & Caveats:**  
- Pull request library in `_ref/lib-pull-request.md` is an initial draft and will be refined before integration with contributor docs.  
- Added commit message examples to `older-commit-ex.md` reflect only recent changes; further curation needed for legacy entries.  



---
# 09/15/25

docs: refine GitHub SSH multi-profile guide v1.5.0  

**how-to/github/**  

**`github-mult-profiles-ssh.md`**  
- Updated filename, title, and Overview to emphasize SSH focus and streamline intro, tags, and references.  
- Standardized step order, headings, and formatting for clearer flow.  
- Expanded key management and backup/restore guidance, with new SSH config tips for multi-profile use.  
- Consolidated and restructured troubleshooting into an issue–impact–solution format with a quick fixes section.  

**Other Changes**  

- Deleted `main.css.pdf` and `github-mult-profiles.md`.  
- Standardized logo branding by adding `logo-ehw-kb.svg` to `sop/sop-create-kb-header.md` and `github-mult-profiles.md`.  

⚠️ **Notes & Caveats:**  
- Future: Embedded CSS should be migrated to an external file for maintainability.  
- Future: `{height=32}` logo attribute does not render properly on GitHub; use static 32px-high logo images.  


---

# 09/27/25

docs(how-to): add stubs folder with unformatted drafts and update commit examples  

**how-to/stubs**  
- Added 30 unformatted documentation drafts as rough content for future formatting and finalization.  
- Organized drafts in a dedicated subfolder to keep work-in-progress materials separate from published guides.  

**_ref**  
- **`older-commit-ex.md`**  
  - Added new commit message example reflecting addition of stubs folder and draft aggregation.  

⚠️ **Notes & Caveats:**  
- Drafts in `how-to/stubs` require thorough review and formatting before publication.  
- Plan future iterations to convert stubs into finalized how-to articles.  


---


docs(how-to): add stubs folder with unformatted drafts and update commit examples  

**how-to/stubs**  
- Added 30 unformatted documentation drafts as rough content for future formatting and finalization.  
- Organized drafts in a dedicated subfolder to keep work-in-progress materials separate from published guides.  

**_ref**  
- **`older-commit-ex.md`**  
  - Added new commit message examples including one for "docs: refine GitHub SSH multi-profile guide v1.5.0" and another for adding stubs folder and draft aggregation.  

⚠️ **Notes & Caveats:**  
- Drafts in `how-to/stubs` require thorough review and formatting before publication.  
- Plan future iterations to convert stubs into finalized how-to articles.  



---

# 09/20/25


Generate a detailed yet succinct conventional commit message formatted as follows:  
- Use type `docs` unless clearly another type, with scope equal to the **top-level affected folder** only (e.g., if file is in `guides/github/index.md`, use scope `guides`).  
- If no folder is given or detected for scope, default to `how-to`.  
- Summary line ≤70 chars, concise, explaining what and why.  
- If file paths are explicitly provided in the input, group them under their **full relative folder path** (e.g., **guides/github**) as a heading, and list only the filenames beneath.  
- If *no files are specified*, skip the folder and file listing entirely.  
- Everything below the summary line that is not a heading (e.g., all file bullets or changes) must be formatted as bullet items.  
- For each listed file, add up to 6 concise bullet items starting with *Added, Updated, Corrected, Removed, Refactored,* etc., describing the changes.  
- Optionally include a final section prefixed with ⚠️ **Notes & Caveats:** for warnings, caveats, or follow-up tasks.  
- Maintain consistent blank lines and indentation for readability.  


---


# 09/24/25


PROMPT:

Generate a detailed yet succinct **conventional commit message** for wordpress theme code changes formatted as follows:  
- Determine `type(scope)` - favor clarity of purpose or section (e.g., if the changes are about wells page then scope should be 'wells', if changes are primarily wpadmin dashboard config then scope = 'wpadmin', etc.) 
- If no folder is given or detected for scope, default to `how-to`.  
- Summary line ≤70 chars, concise, explaining what and why.  
- If file paths are explicitly provided in the input, group them under their **full relative folder path** (e.g., **guides/github**) as a heading, and list only the filenames beneath.  
- If *no files are specified*, skip the folder and file listing entirely.  
- Everything below the summary line that is not a heading (e.g., all file bullets or changes) must be formatted as bullet items.  
- For each listed file, add up to 6 concise bullet items starting with *Added, Updated, Corrected, Removed, Refactored,* etc., describing the changes.  
- Optionally include a final section prefixed with ⚠️ **Notes & Caveats:** for warnings, caveats, or follow-up tasks if warranted.  
- Maintain consistent blank lines and indentation for readability.:



CONTENT:


---


# 09/25/25

Give the current #changes in the #codebase provide a conventional commit in the following format:

Generate a clear, concise conventional commit message after determining what the main content type of this repo is (wordpress theme, plugin, python script, gist, kb docs, etc.):

If the codebase is mostly .md files, then safe to assume 'docs' is the type. Otherwise, determine the likely type based on the codebase content

Summary: Use type(scope) with a scope reflecting main change area (e.g., wells, wpadmin, default how-to); summary line ≤70 characters explaining what and why.

File & Folder Paths: If file paths given, group by full folder (e.g., guides/github), list only bolded filenames; omit file listing if none specified.

Details: Use hyphen (-) bullets for details; For each file, up to 4 hyphen bullets starting with Added, Updated, Corrected, Refactored, etc.

Technical Nouns: Backtick filenames, functions, classes, sections, variables.

⚠️ Notes & Caveats:: for warnings, follow-ups.

📋 Codebase Annotations section: Extract all comment annotations like TODO, MAYBE, FIXME, etc., case-insensitively (e.g., todo, TODO, @TODO) into a final 📋 Codebase Annotations section, formatting each as a one-line hyphen bullet with their label (e.g., TODO: filename (function): note or MAYBE: filename: note), omitting function parentheses if not present, keeping the list concise and uniform.

Other Layout / Formatting: No horizontal rules between sections; - Maintain consistent blank lines and indentation.




---


Here’s your refined prompt updated so that **📋 Codebase Annotations only appears if actual annotations are found during a scan**. This prevents empty or misleading sections from being generated.  

***

### Refined Prompt (with Annotations Validation)  

Generate a clear, concise conventional commit message after determining what the main content type of this repo is (e.g., WordPress theme, plugin, Python script, gist, knowledge base docs).  

- If the codebase is mostly `.md` files, assume type = `docs`.  
- Otherwise, determine the likely type based on the contents.  

### Commit Message Format  

Use the format:  
`type(scope): summary`  
- *type* = conventional commit type (feat, fix, docs, refactor, style, chore, etc.)  
- *scope* = main change area (e.g., wells, wpadmin, default-howto, course-notes, etc.)  
- *summary* = one-line, ≤70 characters, explains what and why.  

### Change Log Structure  

For changed files, always group them by their **folder**, and under each folder list **only the bolded filenames**. Each file must then have up to **4 bullet points** describing its changes.  

**Example structure:**  

```
refactor(wells): add date constants, refine FAQ usage

**inc**

- `theme-constants.php`  
  - Added `DT` array with `current_year` and `first_of_cur_yr`.  
  - Added `faq_since_date` key to `WELLS_STATS`.  

- `admin.php`  
  - Added TODO for possible deletion or wiki relocation.  

**template-parts/section**

- `pg-wells-faq.php`  
  - Updated FAQ verbiage using dynamic wells stats.  
  - Added TODO to explore accordion FAQ with <details>.
```

### Additional Sections  

After listing all file changes:  

- **⚠️ Notes & Caveats**: Global notes, risks, or follow‑up actions.  

- **📋 Codebase Annotations**:  
  - Only include this section *if and only if* actual annotations like `TODO`, `FIXME`, `MAYBE`, `HACK`, or `NOTE` were found in a codebase scan.  
  - Format each as:  
    - `TODO: filename (function if given): note`  
    - `FIXME: filename: note`  
  - If no annotations are detected, omit the entire section.  

### Critical Rule  

- Do not collapse all details into one "Details" section.  
- Every listed file must have its **own change bullets**.  
- Only omit a file entirely if no concrete changes are known.  
- Omit the **📋 Codebase Annotations** section entirely if no annotations are found during scan.  



---

docs(courses): restructure folder layout and update course notes styling

**_css/**

- `main.css`  
  - Restyled bookmark anchor to a soft blue rounded button with a bookmark emoji prefix.  
  - Updated `.code-filename` prefix icon background to slategray and changed icon to document emoji 📄 for better compatibility.

**courses/**

- `purpose.txt`  
  - Updated to align with new `courses/` folder structure.

- `01_Python/01.00__Intro.md`  
  - Added starter page for chapter 1 course notes.

- `01_Python/index.md`  
  - Updated relative stylesheet link to `main.css`.  
  - Adjusted file name in metadata table.  
  - Added tentative chapters table with placeholder hyperlinks.

⚠️ **Notes & Caveats**:  
- Course notes repo architecture is mostly finalized but expected to evolve with future tweaks.  
- Continue revising and improving chapter table formatting as needed.




---


# 09/29/25

docs(courses/01_Python): add ch2 Variables notes with F-string examples and style update  

### 🎓 Course: [Boot.dev] - Learn to Code in Python  

**_css**  
- **`main.css`**  
  - Added `--clr-lt-lavender` color variable for a light purple highlight.  
  - Added section 9 with `.boot-dev-op-sec` class for featured inline section styling.  

**courses/01_Python**  
- **`01.02__Variables.md`**  
  - Added Lessons 10-19 covering F-strings, NoneType, dynamic typing, multi-variable declaration, and learning tools Boots and Spellbook.  
  - Expanded dynamic typing concepts and type safety with TypeScript examples.  
  - Introduced per-chapter References section in Chapter 2 with curated external resources, planned for all chapters.  

⚠️ **Notes & Caveats:**  
- Chapter 2 complete; next up is Chapter 3.  
- Consider moving `.ehw-doc-descr` styles into section 9 for consistency.  
- Chapter includes **Boots** and **Spellbook** instructions for future reference.  
- Added chapter-specific References section, intended for adoption in all chapters.


---


Here is your revised prompt integrating the stronger instructions for more accurate commit type and scope determination:

***

Generate a clear, concise conventional commit message after thoroughly analyzing the main content type of this repo based on the actual changed files.

- Inspect the list of changed files and their extensions carefully before deciding on the commit type.
- If the majority of changed files are `.md` documentation or wiki files, use type = `docs`.
- Otherwise, determine the commit type based on the predominant file types and folder structures:
  - For WordPress theme or plugin PHP/template files, prefer `feat`, `fix`, `style`, or `refactor` with appropriate scope.
  - For Python scripts, use `feat`, `fix`, or `refactor`.
  - For configuration or project files, use `chore`.
- Do not make assumptions or default to `docs` if file evidence points otherwise.
- Explicitly mention the main affected folders and filename patterns as scope.
- Use the format:

```
type(scope): concise summary ≤70 characters

**folder1**

- `filename1`  
  - explanation of changes up to 4 bullet points.

**folder2**

- `filename2`  
  - explanation of changes up to 4 bullet points.

⚠️ Notes & Caveats:
- summary of global notes or follow-up actions.

📋 Codebase Annotations:
- Include only if any TODO, FIXME, or NOTE annotations were found.
```

- Keep each listed file's change bullets distinct and specific.
- Omit the annotations section if no annotations are found.

This approach ensures commit messages are accurate, descriptive, and correctly scoped by grounding decisions in the actual repo content and changes.

***

Would you like me to also generate an example commit message using this revised prompt and your recent context?

[1](https://wpbestpractices.dev/version-control/commit-messages/)
[2](https://dev.to/wallacefreitas/best-practices-to-make-a-good-commit-writing-clean-effective-commit-messages-5eg9)
[3](https://axolo.co/blog/p/git-commit-messages-best-practices-examples)
[4](https://cbea.ms/git-commit/)
[5](https://docs.wpvip.com/development-workflow/write-a-good-commit-message/)
[6](https://make.wordpress.org/core/handbook/best-practices/commit-messages/)
[7](https://stackoverflow.com/questions/15324900/standard-to-follow-when-writing-git-commit-messages)
[8](https://www.reddit.com/r/git/comments/f502nz/how_to_write_a_good_commit_message_focus_on/)

---


feat(banner): add Charlie Kirk memorial banner with quick inline styles

**template-parts/banner**

- `charlie-kirk-memorial.php`  
  - Cloned from `cta/donate-img.php` as a quick-start banner template.  
  - Added inline CSS and custom URL variables for banner layout, styling, and video button with overlay.

**front-page.php**

- Inserted Charlie Kirk memorial banner above top video section.

⚠️ **Notes & Caveats:**  
- Styles require migration to CSS stylesheet for maintainability.  
- Refactor hard-coded values into configuration constants.  
- Consider consolidating this template part into "cta" folder for consistency.  
- Extract banner background color to SASS variable.

---

feat(banner): refactor Charlie Kirk memorial banner styles and button

**template-parts/banner**

- `charlie-kirk-memorial.php`  
  - Updated button text color to burlywood and added border color on hover with rounded corners for better aesthetics.  
  - Fixed banner opacity by correcting hover selector from `.charlie-banner:hover` to `.charlie-vid-btn:hover`.  
  - Modified Bootstrap classes to improve button width and prevent wrapping on mobile devices.

⚠️ Notes & Caveats:  
- Styles should be migrated to a CSS stylesheet for maintainability.  
- Consider further refactoring hard-coded values into config constants.  
- Created temporary backups of `charlie-kirk-memorial.php` versions for easy diffing. Remove before PR squash.


---


# 09/30/25


Here’s a revised commit message and changelog, highlighting shared formatting updates across all specified files, with the initialization of chapter 3 as the focus:

***

**docs(courses/01_Python): initialize ch3 and align ch1-2 with new chapter starter template**

**courses/01_Python**

- `01.03__Functions.md`  
  - Initialized Chapter 3 notes with all section headings and updated formatting.
- `01.01__Intro.md`, `01.02__Variables.md`  
  - Standardized lesson headings and section names as H3 with ▶️ emoji.
  - Inserted lesson notes start/end HTML comments.
  - Updated "In this Folder" to "In this Chapter".
  - Refreshed in-chapter section placeholders.

**_tmpl**

- Deleted: `_orig_awk.md`, `_stub-article.md`, `_stub-command.md`, `_stub-index.md` (legacy template cleanup).
- Added: `starter_chapter_01.md` – includes standardized formatting and ready-to-use section comments.

⚠️ Notes & Caveats:
- Remember to delete any backup or temporary files before merge.

***

This ensures equal visibility for all files that received the formatting and section updates, while Chapter 3 initialization remains the headline change.

[1](https://realpython.com/documenting-python-code/)
[2](https://readthedocs.org/projects/py-template/downloads/pdf/latest/)
[3](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-structure.html)
[4](https://jinja.palletsprojects.com/en/stable/templates/)
[5](https://docs.python.org/3/tutorial/datastructures.html)
[6](https://docs.python-guide.org/writing/structure/)
[7](https://peps.python.org/pep-0008/)
[8](https://stackoverflow.com/questions/3898572/what-are-the-most-common-python-docstring-formats)
[9](https://devguide.python.org/documentation/start-documenting/)



---


Generate a clear, concise conventional commit message after thoroughly analyzing the main content type of this repo based on the actual changed files.
Inspect the list of changed files and their extensions carefully before deciding on the commit type.
If the majority of changed files are .md documentation or wiki files, use type = docs.
Otherwise, determine the commit type based on the predominant file types and folder structures:
For WordPress theme or plugin PHP/template files, prefer feat, fix, style, or refactor with appropriate scope.
For Python scripts, use feat, fix, or refactor.
For configuration or project files, use chore.
Do not make assumptions or default to docs if file evidence points otherwise.
Explicitly mention the main affected folders and filename patterns as scope.
Use the format:
text
type(scope): concise summary ≤70 characters

**folder1**

- `filename1`  
  - explanation of changes up to 4 bullet points.

**folder2**

- `filename2`  
  - explanation of changes up to 4 bullet points.

⚠️ Notes & Caveats:
- summary of global notes or follow-up actions.

📋 Codebase Annotations:
- Include only if any TODO, FIXME, or NOTE annotations were found.

Keep each listed file's change bullets distinct and specific.
Omit the annotations section if no annotations are found.
This approach ensures commit messages are accurate, descriptive, and correctly scoped by grounding decisions in the actual repo content and changes.



---

DRAFT:


---



docs(courses/01_Python): add chapter intro paragraphs and update tags for ch1-3

### 🎓 Course: [Boot.dev] - Learn to Code in Python  

**courses/01_Python**

- `01.01__Intro.md`  
  - Included tags: Course Basics, Coding 101.  

- `01.02__Variables.md`  
  - Included tags: Variables, Data Types, String Interpolation, Dynamic Typing.

- `01.03__Functions.md`  
  - Included tags: Functions, Parameters, Modular Code, Scope.


---



docs(_css): add callout styles for verbatim content sections

### 🎓 Course: [Boot.dev] - Learn to Code in Python  


**_css**

- `main.css`  
  - Added `.callout` container style with pale ivory background and warm amber border.  
  - Styled code blocks inside callouts with subtle blue-gray background and blue info cue border.  
  - Created `.label-verbatim` class with soft yellow background and amber text, preceded by a scissors icon.  
  - Added CSS rule to remove extra paragraph spacing when wrapped around `.label-verbatim`.

⚠️ Notes & Caveats:  
- Styles enhance readability of verbatim text blocks in markdown rendering, gracefully degrading on GitHub.

***

This commit message follows conventional commit guidelines, uses the `docs` type to indicate documentation/styling changes, scopes to the `_css` folder, and accurately describes the new callout styles added.

[1](https://www.conventionalcommits.org/en/v1.0.0/)
[2](https://github.com/pvdlg/conventional-commit-types)
[3](https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index)
[4](https://graphite.dev/guides/understanding-using-conventional-commits)
[5](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
[6](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
[7](https://dev.to/itxshakil/commit-like-a-pro-a-beginners-guide-to-conventional-commits-34c3)
[8](https://www.bavaga.com/blog/2025/01/27/my-ultimate-conventional-commit-types-cheatsheet/)
[9](https://platform.uno/docs/articles/uno-development/git-conventional-commits.html)


---


doc(courses/01_Python): finalize notes with detailed L2 function breakdown

### 🎓 Course: [Boot.dev] - Learn to Code in Python  

**courses/01_Python**

- `01.03__Functions.md`  
  - Expanded Lesson 2 notes with detailed line-by-line function explanation.  
  - Added a verbatim copied callout from the Boot.dev course for clarity.  
  - Included example code demonstrating function definition, reuse, and output.

⚠️ Notes & Caveats:
- These updates enhance chapter 3 lesson 2 notes for improved understanding of Python functions.

***

This commit message clearly scopes documentation changes in the Python course folder, concisely summarizes the specific content additions, and includes a notes section for context.

[1](https://www.conventionalcommits.org/en/v1.0.0/)
[2](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
[3](https://dev.to/itxshakil/commit-like-a-pro-a-beginners-guide-to-conventional-commits-34c3)
[4](https://hemdan.hashnode.dev/conventional-commits)
[5](https://www.enlume.com/blogs/mastering-commit-messages-a-guide-to-conventional-commits-and-best-practices/)
[6](https://graphite.dev/guides/understanding-using-conventional-commits)
[7](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
[8](https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index)
[9](https://platform.uno/docs/articles/uno-development/git-conventional-commits.html)



---


feat(banner): optimize Charlie Kirk banner for mobile and refactor CTA styles

**template-parts/banner**

- `charlie-kirk-memorial.php`  
  - Removed inline banner styles and cleaned up markup for better mobile responsiveness and visual appeal.

**src**

- `_blockquotes.scss`  
  - Removed CTA styles to enable style refactor.
- `_banners.scss` (new)  
  - Added extracted CTA and Charlie Kirk banner styles with responsive design media queries.

**root**

- `package.json`, `README.md`, `style.css`  
  - Bumped theme version from 3.04 to 3.05 reflecting style updates.

⚠️ Notes & Caveats:  
- Banner styles converted from inline PHP to SCSS for maintainability.  
- This refactor creates a new starter template for similar banners with left-aligned CTA buttons.

***

This message clearly scopes changes, categorizes them by file/folder, concisely summarizes and follows conventional commit standards.

[1](https://www.conventionalcommits.org/en/v1.0.0/)
[2](https://thoughtbot.com/blog/the-art-of-writing-meaningful-git-commit-messages)
[3](https://julien.ponge.org/blog/the-power-of-conventional-commits/)
[4](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
[5](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)
[6](https://www.reddit.com/r/git/comments/12560kf/which_conventional_commit_type_to_use_when_just_w/)
[7](https://stackoverflow.com/questions/61262376/questions-about-conventional-commit-messages-in-git)
[8](https://platform.uno/docs/articles/uno-development/git-conventional-commits.html)
[9](https://graphite.dev/guides/understanding-using-conventional-commits)


---


fix(template-parts/banner, src/_banners.scss, src/_blockquotes.scss, css, package.json, README.md): restyle Charlie Kirk banner for better mobile responsiveness and update theme version

**template-parts/banner**

- Moved inline Charlie Kirk banner styles to new Sass partial _banners.scss  
- Updated banner markup to correct button group class and streamline structure  
- Removed embedded style block from PHP template for cleaner separation of concerns

**src/_banners.scss**

- Added new _banners.scss file to hold Charlie Kirk banner and CTA styles  
- Introduced responsive media queries for improved mobile and tablet layout  
- Defined consistent styling for banner height, button colors, hover states, and layout margins

**src/_blockquotes.scss**

- Removed Charlie Kirk related CTA styles to encourage reuse via _banners.scss  
- Cleaned up redundant styles to simplify existing blockquote styling

**css/app.css, style.css**

- Updated compiled styles reflecting SCSS banner style changes  

**package.json, README.md**

- Incremented theme version from 3.04 to 3.05 in package and style metadata  
- Updated README to document new banner styling approach  

⚠️ Notes & Caveats:  
- This commit lays groundwork for future similarly styled banners with left-aligned CTA buttons.  
- Follow-up refactors may further modularize banner and CTA styles for reusability.  

This commit cleanly separates styling from template code, improves mobile responsiveness, and documents version increment to enhance maintainability and clarity.

[1](https://wpbestpractices.dev/version-control/commit-messages/)
[2](https://www.conventionalcommits.org/en/v1.0.0/)
[3](https://cbea.ms/git-commit/)
[4](https://make.wordpress.org/core/handbook/best-practices/commit-messages/)
[5](https://docs.wpvip.com/development-workflow/write-a-good-commit-message/)
[6](https://make.wordpress.org/core/2023/11/10/an-update-to-the-core-commit-message-format/)
[7](https://stackoverflow.com/questions/15324900/standard-to-follow-when-writing-git-commit-messages)
[8](https://news.ycombinator.com/item?id=43059920)
[9](https://www.reddit.com/r/git/comments/f502nz/how_to_write_a_good_commit_message_focus_on_w/)
[10](https://tommcfarlin.com/git-commit-messages/)





---

### Squashed Commit:

feat(banner): add Charlie Kirk memorial banner with quick inline styles

**template-parts/banner**

- `charlie-kirk-memorial.php`
  - Cloned from `cta/donate-img.php` as a quick-start banner template.
  - Added inline CSS and custom URL variables for banner layout, styling, and video button with overlay.

**front-page.php**

- Inserted Charlie Kirk memorial banner above top video section.

⚠️ **Notes & Caveats:**
- Styles require migration to CSS stylesheet for maintainability.
- Refactor hard-coded values into configuration constants.
- Consider consolidating this template part into "cta" folder for consistency.
- Extract banner background color to SASS variable.

feat(banner): refactor Charlie Kirk memorial banner styles and button

**template-parts/banner**

- `charlie-kirk-memorial.php`
  - Updated button text color to burlywood and added border color on hover with rounded corners for better aesthetics.
  - Fixed banner opacity by correcting hover selector from `.charlie-banner:hover` to `.charlie-vid-btn:hover`.
  - Modified Bootstrap classes to improve button width and prevent wrapping on mobile devices.

⚠️ Notes & Caveats:
- Styles should be migrated to a CSS stylesheet for maintainability.
- Consider further refactoring hard-coded values into config constants.
- Created temporary backups of `charlie-kirk-memorial.php` versions for easy diffing. Remove before PR squash.

feat(banner): optimize Charlie Kirk banner button for mobile and refactor CTA styles

**template-parts/banner**

- `charlie-kirk-memorial.php`
  - Removed inline banner styles and cleaned up markup for better mobile responsiveness and visual appeal.
  - Made button visually dominant and text as large as feasible on all screens

**src**

- `_blockquotes.scss`
  - Removed CTA styles to enable style refactor.
- `_banners.scss` (new)
  - Added extracted CTA and Charlie Kirk banner styles with responsive design media queries.

**root**

- `package.json`, `README.md`, `style.css`
  - Bumped theme version from 3.04 to 3.05 reflecting style updates.

⚠️ Notes & Caveats:
- Banner styles converted from inline PHP to SCSS for maintainability.
- This refactor creates a new starter template for similar banners with left-aligned CTA buttons.

---


### Squashed Commit: Ver. 2


feat(charlie-kirk-banner): add memorial banner & refactor CTA styles

(Squashed commits)

**front-page.php**
- Added memorial banner above top video using reusable `charlie-kirk-memorial.php` template

**template-parts/banner/**
- `charlie-kirk-memorial.php`
  - Created new template part with overlay, CTA button, and responsive layout
  - Replaced hardcoded URLs with relative paths for cross-environment compatibility
- Temporary files to delete: `charlie-kirk-memorial.bkp.php`, `tmpl_del.php`

**src/**

*(Files: `blockquotes.scss`, `_banners.scss`, `app.scss`)*

  - Moved CTA styles from `blockquotes.scss` into new `_banners.scss`and updated `app.scss` imports

**theme metadata**

*(Files: `package.json`, `README.md`, `style.css`)*

- Updated theme version from 3.04 to 3.05 to track style changes.

⚠️ **Notes & Caveats:**
- Button text requires editorial approval
- Backup files excluded by webpack config, but should be deleted for housekeeping
- Banner background color matches brick-red image tone for elegant fallback

🔖 **Closes Asana Tix:** [520](https://app.asana.com/1/818686982630211/project/1211397676880813/task/1211507865266053), [521](https://app.asana.com/1/818686982630211/project/1211397676880813/task/1211507865266069)


---


# 10/01/25


docs(courses/01_Python): finalize ch3 L1-13 notes; refine banners, info styles, and shape ref; add screenshot

### 🎓 Course: [Boot.dev] - Learn to Code in Python  

**courses/01_Python/**

- `01.03__Functions.md`  
  - Completed detailed notes up to Lesson 13, including verbatim copied sections and new example code.
- `01.02__Variables.md`  
  - Added definitions of spellbook, compendium, and XP.

**_css/**

- `main.css`  
  - Refactored `.fat-heading` class replacing `h4` styles to allow normal `h4` use.  
  - Updated `.info-banner`, `.success-banner`, `.error-banner` styles for improved headings and error code formatting.  
  - Enhanced `.label-verbatim` styling and improved placement inside `.callout` sections.  
  - Updated `.boot-dev-op-sec` style with medium purple border.

**_pix/screens**

- `screen-boot-dev-010-discord.png`  
  - Added screenshot showing the "Community" button in Boot.dev platform.

**_ref/shape_lib**

- `index.md`  
  - Expanded shape library reference with entries for info, Boot.dev operations, error, verbatim copy, and lesson titles.  

⚠️ **Notes & Caveats**:  
- Will resume course starting at lesson 14
- `.label-verbatim` works best when placed inline with `.callout` open tag for consistent styling effect.  
- Banner and status section styles improve clarity and accessibility in markdown renders.  
- New lesson examples and meta instruction callouts increase documentation usability and interactivity.

📋 **Codebase Annotations**:
- CONSIDER: `main.css` - Refactor to group labels with their associated sections? 


---




# 10/10/25


refactor(how-to/stubs): rename & sort stub files into topical folders

**how-to/stubs/** (new folders)

* `ai/`: AI-related stub files.
* `christ/`: Christian content.
* `elsm/`: interim location for elsm-branded content; _**pending rebrand.**_
* `gitbash/`: stub content related to Git, Bash, or the Git Bash environment.
* `libs-n-styles/`: libraries, collections, and styles.
* `scripts/`: code/script examples.
* `servers-n-local/`: local dev and server setups (includes windows computing).
* `tmpl/`: miscellaneous templates and reusable stub structures.
* `wp/`: WordPress stubs.

**how-to/stubs/** (naked files)

* `bp-maybe-in-code-comments.md`: best-practice on using 'MAYBE' in code comments.
* `css-styles-labels-msg-banner.md`: CSS message banner styles (error, info, warning, etc.).
* `kb-emoji-conv-gotchas.md`: emoji conversion issues in markdown TOC.
* `powershell-list-fonts.md`: how to list installed fonts in Powershell
* `svg-term-confusion.md`: confusion with SVG image files vs code.
* `tshoot-vscode-node-runtime-error.md`: VSCode + Node.js troubleshooting runtime errors.


* `php-time-constants-wp.md`: renamed for clarity; focuses on PHP time constants in WordPress.


**_ref/**

* `wip-emoji-lib`: emoji library stub.
* `wip-lib-vocab-phrases`: library of phrases/vocabulary usage stub.
* `wip-ai-prompts.md`: add new prompts
* `wip-older-commit-ex.md`: add new commits

---

⚠️ Notes & Caveats:

* This renaming improves clarity but may require future revisions.
* Some unsorted files remain and should be organized in a future pass.
* `elsm/` folder content must be updated to remove brand-specific naming in favor of `ehw`-aligned terminology.
* Work remains in progress; further refinement expected.





























































