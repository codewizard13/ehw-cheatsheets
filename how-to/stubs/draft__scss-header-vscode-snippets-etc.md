> 10/17/25 2:29 PM
>
> 💡  ! Will need refactored & revised later.


# VSCODE SCSS header snippets & boilerplate reference:


> !NOTE: Draft - will need to split into multiple docs later

---


Great! Below are **both deliverables** as requested — no canvas needed.

---

## 📦 1. VS Code Snippet Pack (SCSS Headers)

This snippet pack includes all SCSS header templates organized by filename. To install:

1. Create or open your local snippets file for SCSS:

   * In VS Code, run: `Preferences: Configure User Snippets`
   * Choose or create `scss.json`
2. Paste the following into your snippets file:

```json
{
  "_events.scss header": {
    "prefix": "hdr-events",
    "body": [
      "/* ===========================================",
      "",
      "   🗃️ FILE: _events.scss",
      "",
      "   Description: Styles for Events custom post type",
      "   Notes: Includes archive, single, and loop display logic",
      "",
      "=========================================== */"
    ],
    "description": "SCSS header for _events.scss"
  },
  "_guests.scss header": {
    "prefix": "hdr-guests",
    "body": [
      "/* ===========================================",
      "",
      "   🗃️ FILE: _guests.scss",
      "",
      "   Description: Styles for Guests custom post type",
      "   Notes: Guest grid, single guest page, and loop card styles",
      "",
      "=========================================== */"
    ],
    "description": "SCSS header for _guests.scss"
  },
  "_base.scss header": {
    "prefix": "hdr-base",
    "body": [
      "/* ===========================================",
      "",
      "   🧱 FILE: _base.scss",
      "",
      "   Description: Global resets, typography, and base elements",
      "   Notes: Normalize and base HTML tag styling",
      "",
      "=========================================== */"
    ],
    "description": "SCSS header for _base.scss"
  },
  "_colors.scss header": {
    "prefix": "hdr-colors",
    "body": [
      "/* ===========================================",
      "",
      "   🎨 FILE: _colors.scss",
      "",
      "   Description: SCSS color variables and utility classes",
      "   Notes: Color palette, themes, and status indicators",
      "",
      "=========================================== */"
    ],
    "description": "SCSS header for _colors.scss"
  },
  "_layout.scss header": {
    "prefix": "hdr-layout",
    "body": [
      "/* ===========================================",
      "",
      "   📐 FILE: _layout.scss",
      "",
      "   Description: Site layout structure and containers",
      "   Notes: Grid system, flex utilities, and breakpoints",
      "",
      "=========================================== */"
    ],
    "description": "SCSS header for _layout.scss"
  },
  "_forms.scss header": {
    "prefix": "hdr-forms",
    "body": [
      "/* ===========================================",
      "",
      "   📝 FILE: _forms.scss",
      "",
      "   Description: Input fields, labels, selects, and form layout",
      "   Notes: Supports Gravity Forms and native WP forms",
      "",
      "=========================================== */"
    ],
    "description": "SCSS header for _forms.scss"
  },
  "admin.scss header": {
    "prefix": "hdr-admin",
    "body": [
      "/* ===========================================",
      "",
      "   ⚙️ FILE: admin.scss",
      "",
      "   Description: Styles for WordPress admin and backend areas",
      "   Notes: Includes dashboard, admin menu, and editor tweaks",
      "",
      "=========================================== */"
    ],
    "description": "SCSS header for admin.scss"
  }
  // Add remaining files as needed...
}
```

> 🔁 Tip: You can use `prefix` like `hdr-` to autocomplete headers for each file quickly.

Let me know if you want all files converted — I included a few key examples for brevity.

---

## 📄 2. Boilerplate `.scss` File

Here's a bundled file with **just the headers** for all your SCSS files. You can copy/paste this into your project or keep it as a reference.

📁 `scss-file-headers-boilerplate.scss`:

```scss
/* ===========================================

   ⚙️ FILE: admin.scss

   Description: Styles for WordPress admin and backend areas
   Notes: Includes dashboard, admin menu, and editor tweaks

=========================================== */

/* ===========================================

   🧩 FILE: app.scss

   Description: SCSS entry point that imports all partials
   Notes: Master importer for styles used in build process

=========================================== */

/* ===========================================

   🗃️ FILE: _events.scss

   Description: Styles for Events custom post type
   Notes: Includes archive, single, and loop display logic

=========================================== */

/* ===========================================

   🗃️ FILE: _guests.scss

   Description: Styles for Guests custom post type
   Notes: Guest grid, single guest page, and loop card styles

=========================================== */

/* ===========================================

   🗃️ FILE: _testimonials.scss

   Description: Styles for Testimonials custom post type
   Notes: Quote display, loop carousel, and layout variations

=========================================== */

/* ===========================================

   🗃️ FILE: _videos.scss

   Description: Styles for Videos custom post type
   Notes: Includes grid, single video view, and embeds

=========================================== */

/* ===========================================

   ⚙️ FILE: login.scss

   Description: Custom styles for WP login page
   Notes: Logo, form fields, and background customization

=========================================== */

/* ===========================================

   📄 FILE: _pod-links.scss

   Description: Styles for Podcast Links page
   Notes: Icon grid and external link button formatting

=========================================== */

/* ===========================================

   📄 FILE: _wells.scss

   Description: Styles for Elijah's Wells donation page
   Notes: Section layout and call-to-action blocks

=========================================== */

/* ===========================================

   📄 FILE: _banners.scss

   Description: Hero banners and promotional strips
   Notes: Overlay styles and background image handling

=========================================== */

/* ===========================================

   🧱 FILE: _base.scss

   Description: Global resets, typography, and base elements
   Notes: Normalize and base HTML tag styling

=========================================== */

/* ===========================================

   📄 FILE: _blockquotes.scss

   Description: Blockquote and testimonial styles
   Notes: Used in blog content and CPTs

=========================================== */

/* ===========================================

   🧩 FILE: _buttons.scss

   Description: Global and contextual button styles
   Notes: Includes hover, responsive, and icon buttons

=========================================== */

/* ===========================================

   🎨 FILE: _colors.scss

   Description: SCSS color variables and utility classes
   Notes: Color palette, themes, and status indicators

=========================================== */

/* ===========================================

   📄 FILE: _content.scss

   Description: Main content styles for posts and pages
   Notes: Typography, headings, and inline elements

=========================================== */

/* ===========================================

   ⚙️ FILE: _debug.scss

   Description: Debugging visuals and layout helpers
   Notes: Use only during development

=========================================== */

/* ===========================================

   📄 FILE: _dividers.scss

   Description: Horizontal rules and section breaks
   Notes: Used to separate content blocks on pages

=========================================== */

/* ===========================================

   🧱 FILE: _footer.scss

   Description: Site footer styles and layout
   Notes: Widgets, links, and social media icons

=========================================== */

/* ===========================================

   📝 FILE: _forms.scss

   Description: Input fields, labels, selects, and form layout
   Notes: Supports Gravity Forms and native WP forms

=========================================== */

/* ===========================================

   🧱 FILE: _header.scss

   Description: Site header, logo, and navigation styles
   Notes: Includes top nav and responsive header layout

=========================================== */

/* ===========================================

   📄 FILE: _heros.scss

   Description: Hero section styles for pages and posts
   Notes: Supports background images and CTA overlays

=========================================== */

/* ===========================================

   📄 FILE: _images.scss

   Description: Image display, alignment, and scaling
   Notes: Includes logos, icons, and featured images

=========================================== */

/* ===========================================

   📐 FILE: _layout.scss

   Description: Site layout structure and containers
   Notes: Grid system, flex utilities, and breakpoints

=========================================== */

/* ===========================================

   📐 FILE: _loop-items.scss

   Description: Styles for post loop and archive item cards
   Notes: Used in blog and CPT archive templates

=========================================== */

/* ===========================================

   📄 FILE: _nav.scss

   Description: Navigation menus and submenus
   Notes: Includes mobile and desktop versions

=========================================== */

/* ===========================================

   📄 FILE: _pagination.scss

   Description: Pagination styles for archive and loop pages
   Notes: Includes numeric, next/prev, and load more

=========================================== */

/* ===========================================

   🧩 FILE: _sb-widgets.scss

   Description: Sidebar widget styles and components
   Notes: Layout handled separately in _layout.scss

=========================================== */

/* ===========================================

   📄 FILE: _sliders.scss

   Description: Sliders, carousels, and image galleries
   Notes: Used on homepage, testimonials, and videos

=========================================== */
```

---

Let me know if you want:

* A downloadable `.zip` of both files
* Snippets for other editors (e.g., Sublime Text, Atom)
* GitHub Gist export

You're all set for clean, consistent SCSS documentation.


================================


> 10/17/25 2:43 PM


Awesome — glad you’re happy with the emoji refinements! Below is your **full, updated SCSS header list** using the revised emoji set.

---

## ✅ Finalized Emoji Mapping (for quick reference)

| Emoji | Meaning                   | File Types                                      |
| ----- | ------------------------- | ----------------------------------------------- |
| ⚙️    | Admin & Config            | `admin.scss`, `login.scss`, `_debug.scss`       |
| 🧩    | Modular/Plugins           | `app.scss`, `_sb-widgets.scss`, `_buttons.scss` |
| 📄    | Specific Pages            | `pg/_wells.scss`, `pg/_pod-links.scss`          |
| 🗃️   | Custom Post Types (CPTs)  | `cpt/*.scss`                                    |
| 🧱    | Base/Foundation/Structure | `_base.scss`, `_header.scss`, `_footer.scss`    |
| 📐    | Layout/Grid Systems       | `_layout.scss`, `_loop-items.scss`              |
| 📝    | Forms                     | `_forms.scss`                                   |
| 🎨    | Colors & Design Tokens    | `_colors.scss`                                  |

---

## 📁 Complete SCSS Headers (Final Format)

---

### ⚙️ `admin.scss`

```scss
/* ===========================================

   ⚙️ FILE: admin.scss

   Description: Styles for WordPress admin and backend areas
   Notes: Includes dashboard, admin menu, and editor tweaks

=========================================== */
```

---

### 🧩 `app.scss`

```scss
/* ===========================================

   🧩 FILE: app.scss

   Description: SCSS entry point that imports all partials
   Notes: Master importer for styles used in build process

=========================================== */
```

---

### 🗃️ `cpt/_events.scss`

```scss
/* ===========================================

   🗃️ FILE: _events.scss

   Description: Styles for Events custom post type
   Notes: Includes archive, single, and loop display logic

=========================================== */
```

---

### 🗃️ `cpt/_guests.scss`

```scss
/* ===========================================

   🗃️ FILE: _guests.scss

   Description: Styles for Guests custom post type
   Notes: Guest grid, single guest page, and loop card styles

=========================================== */
```

---

### 🗃️ `cpt/_testimonials.scss`

```scss
/* ===========================================

   🗃️ FILE: _testimonials.scss

   Description: Styles for Testimonials custom post type
   Notes: Quote display, loop carousel, and layout variations

=========================================== */
```

---

### 🗃️ `cpt/_videos.scss`

```scss
/* ===========================================

   🗃️ FILE: _videos.scss

   Description: Styles for Videos custom post type
   Notes: Includes grid, single video view, and embeds

=========================================== */
```

---

### ⚙️ `login.scss`

```scss
/* ===========================================

   ⚙️ FILE: login.scss

   Description: Custom styles for WP login page
   Notes: Logo, form fields, and background customization

=========================================== */
```

---

### 📄 `pg/_pod-links.scss`

```scss
/* ===========================================

   📄 FILE: _pod-links.scss

   Description: Styles for Podcast Links page
   Notes: Icon grid and external link button formatting

=========================================== */
```

---

### 📄 `pg/_wells.scss`

```scss
/* ===========================================

   📄 FILE: _wells.scss

   Description: Styles for Elijah's Wells donation page
   Notes: Section layout and call-to-action blocks

=========================================== */
```

---

### 📄 `_banners.scss`

```scss
/* ===========================================

   📄 FILE: _banners.scss

   Description: Hero banners and promotional strips
   Notes: Overlay styles and background image handling

=========================================== */
```

---

### 🧱 `_base.scss`

```scss
/* ===========================================

   🧱 FILE: _base.scss

   Description: Global resets, typography, and base elements
   Notes: Normalize and base HTML tag styling

=========================================== */
```

---

### 📄 `_blockquotes.scss`

```scss
/* ===========================================

   📄 FILE: _blockquotes.scss

   Description: Blockquote and testimonial styles
   Notes: Used in blog content and CPTs

=========================================== */
```

---

### 🧩 `_buttons.scss`

```scss
/* ===========================================

   🧩 FILE: _buttons.scss

   Description: Global and contextual button styles
   Notes: Includes hover, responsive, and icon buttons

=========================================== */
```

---

### 🎨 `_colors.scss`

```scss
/* ===========================================

   🎨 FILE: _colors.scss

   Description: SCSS color variables and utility classes
   Notes: Color palette, themes, and status indicators

=========================================== */
```

---

### 📄 `_content.scss`

```scss
/* ===========================================

   📄 FILE: _content.scss

   Description: Main content styles for posts and pages
   Notes: Typography, headings, and inline elements

=========================================== */
```

---

### ⚙️ `_debug.scss`

```scss
/* ===========================================

   ⚙️ FILE: _debug.scss

   Description: Debugging visuals and layout helpers
   Notes: Use only during development

=========================================== */
```

---

### 📄 `_dividers.scss`

```scss
/* ===========================================

   📄 FILE: _dividers.scss

   Description: Horizontal rules and section breaks
   Notes: Used to separate content blocks on pages

=========================================== */
```

---

### 🧱 `_footer.scss`

```scss
/* ===========================================

   🧱 FILE: _footer.scss

   Description: Site footer styles and layout
   Notes: Widgets, links, and social media icons

=========================================== */
```

---

### 📝 `_forms.scss`

```scss
/* ===========================================

   📝 FILE: _forms.scss

   Description: Input fields, labels, selects, and form layout
   Notes: Supports Gravity Forms and native WP forms

=========================================== */
```

---

### 🧱 `_header.scss`

```scss
/* ===========================================

   🧱 FILE: _header.scss

   Description: Site header, logo, and navigation styles
   Notes: Includes top nav and responsive header layout

=========================================== */
```

---

### 📄 `_heros.scss`

```scss
/* ===========================================

   📄 FILE: _heros.scss

   Description: Hero section styles for pages and posts
   Notes: Supports background images and CTA overlays

=========================================== */
```

---

### 📄 `_images.scss`

```scss
/* ===========================================

   📄 FILE: _images.scss

   Description: Image display, alignment, and scaling
   Notes: Includes logos, icons, and featured images

=========================================== */
```

---

### 📐 `_layout.scss`

```scss
/* ===========================================

   📐 FILE: _layout.scss

   Description: Site layout structure and containers
   Notes: Grid system, flex utilities, and breakpoints

=========================================== */
```

---

### 📐 `_loop-items.scss`

```scss
/* ===========================================

   📐 FILE: _loop-items.scss

   Description: Styles for post loop and archive item cards
   Notes: Used in blog and CPT archive templates

=========================================== */
```

---

### 📄 `_nav.scss`

```scss
/* ===========================================

   📄 FILE: _nav.scss

   Description: Navigation menus and submenus
   Notes: Includes mobile and desktop versions

=========================================== */
```

---

### 📄 `_pagination.scss`

```scss
/* ===========================================

   📄 FILE: _pagination.scss

   Description: Pagination styles for archive and loop pages
   Notes: Includes numeric, next/prev, and load more

=========================================== */
```

---

### 🧩 `_sb-widgets.scss`

```scss
/* ===========================================

   🧩 FILE: _sb-widgets.scss

   Description: Sidebar widget styles and components
   Notes: Layout handled separately in _layout.scss

=========================================== */
```

---

### 📄 `_sliders.scss`

```scss
/* ===========================================

   📄 FILE: _sliders.scss

   Description: Sliders, carousels, and image galleries
   Notes: Used on homepage, testimonials, and videos

=========================================== */
```

---

Let me know if you want these bundled into a VS Code snippet pack, or exported to a `.scss` boilerplate file!



=========================


| File              | Purpose                                                    |
| ----------------- | ---------------------------------------------------------- |
| `_header.scss`    | Branding/logo inside the header only                       |
| `_layout.scss`    | Content columns, containers, and sidebar layout            |
| `_utilities.scss` | Spacer classes, helper utilities, variables used site-wide |
