<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
!Site Logo{height=32}

<!-- 📝 Title -->
# HOW‑TO: 📘 TOPIC: Fixing Flexbox Disappearance in WordPress Custom Template

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 HOW‑TO](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
|--------------------|------------------|
| **Date Created**:  | 2025‑10‑21        |
| **Date Updated**:  | --               |
| **AI Assistance**: | ChatGPT 4o       |

---

<!-- SECTION: Tags for short related (1‑3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">

## Tags:

- WordPress
- Flexbox
- Maintenance Template
- SVG Disappears
- Theme Development

</section>

---

## 📌 Overview

When building a custom WordPress theme or maintenance template, you might encounter a frustrating issue: **your flexbox container disappears when using `display: flex; flex-direction: row;`** — even though everything looks correct.

This guide walks you through:

- The root cause of the issue (often overlooked inline SVG behavior)
- How to resolve it cleanly using only HTML, Markdown, and CSS
- Best practices for centering, layout, and fallback behavior
- A fully native, collapsible Table of Contents (TOC) using HTML5 `<details>` and `<summary>` (no JavaScript)

We’ll troubleshoot this issue in the context of a custom WordPress maintenance page with `.pod-btns` that link to podcast platforms (e.g., Spotify, Apple Podcasts) using inline SVGs.

---

<details>
<summary><strong>📑 Table of Contents</strong></summary>

- [HOW‑TO: 📘 TOPIC: Fixing Flexbox Disappearance in WordPress Custom Template](#howto--topic-fixing-flexbox-disappearance-in-wordpress-custom-template)
    - [🏚️ Home | 📁 HOW‑TO](#️-home---howto)
  - [Tags:](#tags)
  - [📌 Overview](#-overview)
  - [Use Case Summary](#use-case-summary)
  - [Root Cause Analysis](#root-cause-analysis)
  - [Solution: Minimal Inline CSS](#solution-minimal-inline-css)
  - [Implementation Steps](#implementation-steps)
    - [🔧 Fixing `.pod-btns`](#-fixing-pod-btns)
    - [🎯 Centering `.content-wrap`](#-centering-content-wrap)
  - [Verification Checklist](#verification-checklist)
  - [Troubleshooting Notes](#troubleshooting-notes)
  - [📚 References / See Also](#-references--see-also)
    - [🔧 CSS \& Flexbox](#-css--flexbox)
    - [🧪 Native Collapsible TOC](#-native-collapsible-toc)
    - [🧩 Related WordPress Resources](#-related-wordpress-resources)
  - [✅ Revision History](#-revision-history)


</details>

---

## Use Case Summary

You’ve built a custom WordPress theme. A **custom maintenance page template** (e.g., `maintenance.php`) renders correctly. You’ve also enqueued your own stylesheet that includes `.pod-btns` styles. However, when adding `display: flex; flex-direction: row;` to the `.pod-btns` container via inline styles or your stylesheet:

- The entire `.pod-btns` section disappears
- No error shows in the console
- Removing `flex-direction: row` or replacing `display: flex` with `block` brings it back

---

## Root Cause Analysis

This issue is caused by a **lack of intrinsic size** for the container’s child elements — **especially inline SVGs**. When placed inside a flex container without specified dimensions, browsers may render the container as `0px` height (effectively hiding it).

Flexbox expects children to contribute measurable height and width. If your buttons or SVGs don’t explicitly do that, **the entire container collapses**.

---

## Solution: Minimal Inline CSS

Here’s a clean, native CSS fix using only inline `<style>` and standard HTML.

```html
<style>
  .content-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .pod-btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .pod-btn svg {
    width: 48px;
    height: 48px;
    display: block;
  }
</style>
````

This addresses:

* **Centering the entire block (`.content-wrap`)**
* **Laying out the `.pod-btns` in a row**
* **Ensuring inline SVGs inside buttons have visible dimensions**

---

## Implementation Steps

### 🔧 Fixing `.pod-btns`

Update your template HTML to include:

```html
<div class="pod-btns" style="display: flex; flex-direction: row; justify-content: center; gap: 1rem; margin-top: 1rem;">
  <a href="https://spotify.com" class="pod-btn" title="Listen on Spotify" rel="noopener noreferrer">
    <svg style="width: 48px; height: 48px; display: block;" viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg">
      <!-- Spotify Path Here -->
    </svg>
  </a>
  <a href="https://apple.com" class="pod-btn" title="Listen on Apple Podcasts" rel="noopener noreferrer">
    <svg style="width: 48px; height: 48px; display: block;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <!-- Apple Path Here -->
    </svg>
  </a>
</div>
```

Replace `<!-- Spotify Path Here -->` and `<!-- Apple Path Here -->` with your SVG path data.

### 🎯 Centering `.content-wrap`

Ensure your wrapper uses:

```html
<div class="content-wrap" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
```

This ensures the entire logo + content + button block is centered horizontally.

---

## Verification Checklist

✅ `.pod-btns` displays horizontally
✅ Buttons are evenly spaced with `gap: 1rem`
✅ SVGs are visible with correct size
✅ No JavaScript is needed
✅ Tested across modern browsers (Chrome, Firefox, Edge)

---

## Troubleshooting Notes

* **SVGs "disappear"**: Add `width` and `height`. Browsers won’t render invisible 0×0 containers.
* **No spacing between buttons**: Use `gap` on the flex container or `margin-right` on the children
* **Buttons stack vertically?**: Ensure `flex-direction: row` is applied to `.pod-btns`
* **Buttons or icons shift out of view?**: Make sure no parent container has `overflow: hidden` unless intended

---

## 📚 References / See Also

### 🔧 CSS & Flexbox

* [MDN: Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
* [CSS Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### 🧪 Native Collapsible TOC

* [HTML5 `<details>` and `<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
* [Codeshack: HTML5 Accordion Without JS](https://codeshack.io/html5-details-summary-accordion/)
* [Russell Boyd: Collapsible Content with HTML/CSS](https://russellboyd.me/collapsible-content-with-html-css/)

### 🧩 Related WordPress Resources

* [WordPress Theme Handbook](https://developer.wordpress.org/themes/)
* [How to Create Custom Page Templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/)

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made                         |
| ------- | ---------- | ---------------- | ------------------------------------ |
| 1.00    | 2025‑10‑21 | Eric L. Hepperle | Initial draft based on debug session |

---


