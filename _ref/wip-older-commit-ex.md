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


























































