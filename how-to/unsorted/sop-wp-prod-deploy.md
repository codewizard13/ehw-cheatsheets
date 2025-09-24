<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# SOP: 🚦 WordPress Production Site Deployment Checklist

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

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

## 🏷️ Tags:

- Theme Deployment
- WordPress Checklist
- Non-Elementor

</section>

---

<!-- 🔍 Table of Contents (Collapsible/Indented) -->
<details open>
<summary style="font-size:1.15em; font-weight:bold;">Table of Contents</summary>

- [SOP: 🚦 WordPress Production Site Deployment Checklist](#sop--wordpress-production-site-deployment-checklist)
    - [🏚️ Home | 📁 How-To](#️-home---how-to)
  - [🏷️ Tags:](#️-tags)
  - [📌 Overview](#-overview)
  - [🛫 Preliminary Steps](#-preliminary-steps)
  - [🧩 Plugins \& Modules](#-plugins--modules)
    - [Max Mega Menu](#max-mega-menu)
    - [Elementor](#elementor)
    - [Advanced Custom Fields (ACF)](#advanced-custom-fields-acf)
  - [📁 Pages](#-pages)
    - [About Page](#about-page)
    - [Podcast Links Page](#podcast-links-page)
    - [Testimonials Page](#testimonials-page)
    - [View All Testimonials Page](#view-all-testimonials-page)
    - [Wells Page](#wells-page)
      - [🧩 Africa Video Carousel Migration](#-africa-video-carousel-migration)
      - [🧩 Uganda Photo Gallery](#-uganda-photo-gallery)
      - [🧩 Wells Page Shortcodes](#-wells-page-shortcodes)
    - [Events Page](#events-page)
  - [🧩 Sidebars \& Widgets](#-sidebars--widgets)
    - [Home Sidebar](#home-sidebar)
    - [Video Archive Sidebar](#video-archive-sidebar)
    - [Banner Advert: Featured Stories](#banner-advert-featured-stories)
  - [🛠️ General Tasks](#️-general-tasks)
  - [⚠️ Gotchas \& Notes](#️-gotchas--notes)
  - [📚 References / See Also](#-references--see-also)
  - [✅ Revision History](#-revision-history)
</details>

---

## 📌 Overview

**Deploying a custom theme to WordPress production in 2025 means moving beyond bulky page builders to a streamlined, hand-coded framework. This SOP provides a step-by-step, fully validated and sequenced checklist for avoiding common pitfalls and meeting modern server standards.**

- **Boldly** replace Elementor layouts with modern PHP templates and high-quality plugins like [Max Mega Menu](https://www.megamenu.com/) and [FooGallery Pro](https://fooplugins.com/account#!/login/).
- **Ensure** all manual admin steps before and after deployment are clear, actionable, and fully up-to-date.[2][1]
- **Visual cues, strong headings, and smart formatting** help administrators navigate complex deployment tasks.
- **Placeholder images** and notes highlight where design assets should be swapped in for launch readiness.

This SOP is intended for intermediate and advanced WordPress admins working in hybrid server environments (NGINX/Apache, WP-CLI, cPanel/Plesk, etc.), ensuring a robust and maintainable production deployment.

---

## 🛫 Preliminary Steps

- [ ] Disable the **ELSM Site Plugin** on production.
- [ ] Upload and activate a production-ready custom theme (elijah-theme).

---

## 🧩 Plugins & Modules

- [ ] Enable maintenance mode using [LightStart](https://wordpress.org/plugins/lightstart/) for backend preview during downtime.
- [ ] Use [BeaverBuilder](https://www.wpbeaverbuilder.com/) temporarily if maintenance page breaks post-Elementor.
- [ ] Plan to replace BeaverBuilder with a pure PHP template for performance.

### Max Mega Menu

- [ ] Install and activate [Max Mega Menu](https://www.megamenu.com/).
- [ ] Import menu settings for the ES 1 theme.
- [ ] Add theme menu config in `functions.php`.
- [ ] Update submenus and assign to top/footer locations.

### Elementor

- [ ] Disable [Elementor](https://elementor.com/) and all related plugins to avoid layout breakdowns.

### Advanced Custom Fields (ACF)

- [ ] Manage custom post types with [Advanced Custom Fields](https://www.advancedcustomfields.com/).
- [ ] Reset permalinks after theme import to prevent archive issues.

---

## 📁 Pages

### About Page

- [ ] Set "Steve Derene Red Shirt" as featured image (use placeholder if absent).
- [ ] Replace Elementor code with new HTML snippet.

### Podcast Links Page

- [ ] Set podcast-related featured image (use placeholder if absent).
- [ ] Replace Elementor code with updated content.

### Testimonials Page

- [ ] Assign correct theme template.
- [ ] Replace JS-based sliders with PHP- or static-driven alternatives.

### View All Testimonials Page

- [ ] Create and configure "All Testimonials" page.
- [ ] Optionally reuse old Elementor content.

### Wells Page

#### 🧩 Africa Video Carousel Migration

- [ ] Install and activate [WP Carousel Pro](https://shapedplugin.com/wp-carousel/).
- [ ] Import carousel settings from JSON; update template shortcode IDs.

#### 🧩 Uganda Photo Gallery

- [ ] Install and activate [FooGallery Pro](https://fooplugins.com/account#!/login/).
- [ ] Import gallery settings; rebuild gallery manually with updated IDs/captions.
- [ ] Recreate custom media tag taxonomies (Brazil, Uganda, Zimbabwe).

#### 🧩 Wells Page Shortcodes

- [ ] Update page-wells.php with current shortcode IDs for all galleries/carousels.


### Events Page

- [ ] Remove all Elementor content.
- [ ] Assign the "Events Archive" page template in admin sidebar.

---

## 🧩 Sidebars & Widgets

- [ ] Remove all widgets from WP Admin (handled by PHP templates).
- [ ] Add one "Custom HTML" widget with a hidden `<div class="d-none"></div>` to each sidebar (for activation).

### Home Sidebar

- [ ] Add hidden div as above.

### Video Archive Sidebar

- [ ] Add hidden div as above.

### Banner Advert: Featured Stories

- [ ] Delete captions when adding via WP Admin (template rendering hides captions).

---

## 🛠️ General Tasks

- [ ] Remove all `error_log()` statements from theme files.
- [ ] Disable `lib-debug.php` in functions.php; confirm debugging is off in `wp-config.php`.
- [ ] Replace debug config with production-safe code (WP_DEBUG false).
- [ ] Delete any residual `debug.log` files in wp-content/.

---

## ⚠️ Gotchas & Notes

- [ ] Confirm "View All Testimonials" button works only if "All Testimonials" page exists.
- [ ] Ensure different sidebar versions for distinct site sections.
- [ ] Place the images/ folder in site root for proper email/logo rendering.

---

## 📚 References / See Also

**Collapsible HTML Elements:**

- [MDN web docs: `<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)  
- [web.dev: Details and Summary](https://web.dev/learn/html/details)  
- [Discourse: Markdown Collapsible Section](https://discourse.devontechnologies.com/t/markdown-callouts-styling-the-details-element/81092)  
- [Stack Overflow: Expandable Table of Contents with Buttons](https://stackoverflow.com/questions/51942158/expandable-table-of-contents-with-buttons)  
- [WP DataTables: Table with Collapsible Rows](https://wpdatatables.com/table-with-collapsible-rows/)

**Plugins & Modules:**  

- [LightStart Maintenance Mode](https://wordpress.org/plugins/lightstart/)  
- [Max Mega Menu](https://www.megamenu.com/)  
- [BeaverBuilder](https://www.wpbeaverbuilder.com/)  
- [Elementor](https://elementor.com/)  
- [Advanced Custom Fields](https://www.advancedcustomfields.com/)  
- [WP Carousel Pro](https://shapedplugin.com/wp-carousel/)  
- [FooGallery Pro](https://fooplugins.com/account#!/login/)  
- [Best Elementor Themes & Templates 2025](https://www.wpbeginner.com/showcase/best-elementor-themes-and-templates/)

**WordPress Deployment:**  

- [Website Launch Checklist 2025](https://elementor.com/blog/website-launch-checklist-guide/)  
- [WordPress Theme Development State 2025](https://www.reddit.com/r/Wordpress/comments/1k1i553/the_state_of_wordpress_in_2025_as_a_custom_theme/)  
- [General WordPress Help](https://wordpress.org/support/)

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made                                                                                                        |
| ------- | ---------- | ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| 1.00    | 2025-09-24 | Eric L. Hepperle | Initial draft created as KB article clone of [tmpl].md                                                              |
| 1.01    | 2025-09-24 | Eric L. Hepperle | Updated title, improved Overview, markdown-indented TOC, checkboxes, emoji section headers, updated for Ubuntu/LAMP |

---

>**Note:**  
>All steps, plugins, and references remain current as of September 2025.

