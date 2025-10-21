Got it — here’s your **wiki-style KB** article on **creating a best-practice SVG PHP library using functions**, in the requested format, **no canvas**, **no JS**, **TOC using native HTML**, and structured for long-term maintainability.

---

<!-- 🔗 Custom Stylesheet -->

<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->

!Site Logo{height=32}

<!-- 📝 Title -->

# HOW‑TO: 📘 TOPIC: Best‑Practice SVG PHP Library (Functions-Based)

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

<!-- 🧭 Navigation -->

### 🏚️ Home | 📁 How‑To

<!-- 👤 Metadata -->

| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025‑10‑20       |
| **Date Updated**:  | —                |
| **AI Assistance**: | ChatGPT          |

---

<section id="sec-tags">

## Tags:

* WordPress
* Theme Dev
* PHP
* SVG
* Refactoring

</section>

---

## 📌 Overview

In modern WordPress theme development, managing **inline SVG icons** efficiently is crucial for accessibility, performance, and maintainability.

Many developers start by defining SVGs as global variables (e.g., `$spotify_svg = '<svg…'`) inside a PHP file. However, this causes **scope conflicts**, especially when templates are rendered outside of normal WordPress execution (like custom redirects, maintenance modes, etc.).

This guide teaches you how to build a **function-based SVG icon library** in PHP using best practices:

* ✅ SVGs are encapsulated via reusable functions
* ✅ Functions are loaded only once (no redefinitions)
* ✅ Code becomes testable, portable, and compatible with manual renders
* ✅ Easily extendable and searchable library of inline icons

You will learn:

* How to organize SVG icons in a theme-friendly structure
* How to write a robust function-based SVG system
* How to include it into templates and custom flows
* Why this solves common problems with global variable usage

---

<details>
  <summary><strong>📑 Table of Contents</strong></summary>

   - [Overview](#📌-overview)
   - [Problems with Global Variable SVGs](#problems-with-global-variable-svgs)
   - [Step-by-Step Setup](#step-by-step-setup)
     - [1. Create an `svg-icons.php` File](#1-create-an-svg-iconsphp-file)
     - [2. Add Functions for Each SVG Icon](#2-add-functions-for-each-svg-icon)
     - [3. Include the File in Your Theme](#3-include-the-file-in-your-theme)
     - [4. Use Functions in Templates](#4-use-functions-in-templates)
     - [5. Optional: Add Namespace or Prefix](#5-optional-add-namespace-or-prefix)
   - [Advantages of Function-Based SVGs](#advantages-of-function-based-svgs)
   - [References / Related Links](#📚-references--see-also)
   - [Revision History](#✅-revision-history)

</details>

---

## Problems with Global Variable SVGs

Using global variables like:

```php
$spotify_svg = '<svg>…</svg>';
```

…causes the following problems:

* **Scope issues**: These aren’t available in templates unless included and evaluated first
* **Redefinition risks**: Including the file more than once causes PHP errors (`already defined`)
* **Hard to debug**: You don’t know where or if they’ve been defined
* **Not portable**: You can't easily extract or test a single icon in isolation
* **Clutters global scope**: All icon names now compete with other variables

---

## Step-by-Step Setup

### 1. Create an `svg-icons.php` File

Put this in:

```bash
/wp-content/themes/your-theme/inc/svg-icons.php
```

Or wherever your `inc/` files live.

### 2. Add Functions for Each SVG Icon

Instead of assigning variables, define **functions**:

```php
<?php
// inc/svg-icons.php

if (! function_exists('get_spotify_svg')) {
  function get_spotify_svg() {
    return '
<svg viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg">
  <path d="M84,0C37.7,0,0,37.7,0,84s37.7,84,84,84s84-37.7,84-84S130.3,0,84,0z…" />
</svg>';
  }
}

if (! function_exists('get_apple_svg')) {
  function get_apple_svg() {
    return '
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="…" />
</svg>';
  }
}
```

### 3. Include the File in Your Theme

In your theme’s `functions.php` or equivalent entry point:

```php
require_once get_template_directory() . '/inc/svg-icons.php';
```

This ensures the functions are available globally.

### 4. Use Functions in Templates

Now, in any PHP template, just call the icon functions:

```php
<a href="https://spotify.com" target="_blank" class="icon-link">
  <?php echo get_spotify_svg(); ?>
</a>
```

The SVG will be rendered inline, which is better for:

* Styling via CSS
* Accessibility
* Performance (fewer HTTP requests)

### 5. Optional: Add Namespace or Prefix

To avoid conflicts in larger codebases, consider using a prefix:

```php
function eph_get_spotify_svg() { … }
```

Or wrap your icons in a class for static access:

```php
class EH_Icons {
  public static function spotify() { return '<svg>…</svg>'; }
}
```

Then call:

```php
echo EH_Icons::spotify();
```

---

## Advantages of Function-Based SVGs

| Feature                     | Variable Approach ❌ | Function Approach ✅ |
| --------------------------- | ------------------- | ------------------- |
| Avoids redefinition errors  | No                  | Yes                 |
| Loads only when called      | No                  | Yes                 |
| Works in edge cases         | Often breaks        | Always works        |
| Better debugging            | No                  | Yes                 |
| IDE discoverable / testable | No                  | Yes                 |
| Namespaced / extendable     | No                  | Yes                 |

---

## 📚 References / See Also

### WordPress / SVG Context

* [SVG Best Practices in WordPress](https://developer.wordpress.org/themes/basics/including-css-javascript/#inline-svg-icons) — Official WP Dev Docs
* [Why Inline SVGs Beat External Files](https://css-tricks.com/using-svg/) (CSS-Tricks)
* [Escaping and Security for SVGs in PHP](https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/) — WordPress Developer Handbook

### Tools / Snippets

* [SVGOMG](https://jakearchibald.github.io/svgomg/) — Minify and clean SVGs
* [Iconmonstr](https://iconmonstr.com/) — Free SVG icons
* [SimpleIcons](https://simpleicons.org/) — Brand logos in SVG format

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made             |
| ------- | ---------- | ---------------- | ------------------------ |
| 1.00    | 2025‑10‑20 | Eric L. Hepperle | Initial draft KB article |

---

Let me know if you want a companion version that integrates with a shortcode system or Gutenberg block compatibility.
