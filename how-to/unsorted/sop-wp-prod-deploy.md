<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# HOW-TO: 📘 TOPIC: WordPress_Production_Site_Deployment_Checklist

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-23       |
| **Date Updated**:  | --               |
| **AI Assistance**: | Perplexity    |

---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">

## Tags:

- Theme Deployment
- WordPress Checklist
- Non-Elementor

</section>

---

<!-- 🔍 Table of Contents (Collapsible/Indented) -->
<details open>
  <summary style="font-size:1.15em; font-weight:bold;">Table of Contents</summary>
- <a href="#overview">Overview</a>
- <a href="#preliminary-steps">Preliminary Steps</a>
- <a href="#plugins-modules">Plugins & Modules</a>
  - <a href="#max-mega-menu">Max Mega Menu</a>
  - <a href="#elementor">Elementor</a>
  - <a href="#acf">Advanced Custom Fields (ACF)</a>
- <a href="#pages">Pages</a>
  - <a href="#about-page">About Page</a>
  - <a href="#podcast-links">Podcast Links Page</a>
  - <a href="#testimonials-page">Testimonials Page</a>
  - <a href="#view-all-testimonials">View All Testimonials Page</a>
  - <a href="#wells-page">Wells Page</a>
     - <a href="#africa-video-carousel">Africa Video Carousel Migration</a>
     - <a href="#uganda-photo-gallery">Uganda Photo Gallery</a>
     - <a href="#wells-shortcodes">Wells Page Shortcodes</a>
- <a href="#events-page">Events Page</a>
- <a href="#sidebars-widgets">Sidebars & Widgets</a>
  - <a href="#home-sidebar">Home Sidebar</a>
  - <a href="#video-sidebar">Video Archive Sidebar</a>
  - <a href="#featured-banner">Banner Advert: Featured Stories</a>
- <a href="#general-tasks">General Tasks</a>
- <a href="#gotchas-notes">Gotchas & Notes</a>
- <a href="#references">References / See Also</a>
- <a href="#revision-history">Revision History</a>
</details>

---

## 📌 Overview

This knowledge base article provides a detailed, updated checklist for deploying a custom, non-Elementor theme on a live WordPress production site as of September 2025. The guide ensures all manual site configuration steps are validated and optimally sequenced before and after deployment, helping administrators avoid common pitfalls and downtime. The checklist covers plugin management, visual module setup, page content migration, sidebar/widget integration, shortcode adjustments, event post preparations, and troubleshooting “gotchas.” It’s especially tailored for those replacing Elementor-based layouts with hand-coded templates and leveraging popular plugins such as Max Mega Menu, WP Carousel Pro, FooGallery Pro, and Advanced Custom Fields. Images or illustrative elements missing from the documentation are marked as placeholders and should be replaced with actual assets during implementation.[5][6]

---

## Preliminary Steps {#preliminary-steps}

- Disable the **ELSM Site Plugin** on the production environment.
- Upload and activate a production-ready version of the custom theme (elijah-theme).

---

## Plugins & Modules {#plugins-modules}

### LightStart (Maintenance Mode)

- Enable maintenance mode for backend preview during public downtime ([LightStart](https://wordpress.org/plugins/lightstart/)).
- Plesk's built-in maintenance mode cannot provide backend preview functionality.

### BeaverBuilder [temporary]

- Use [BeaverBuilder](https://www.wpbeaverbuilder.com/) if the maintenance page appears corrupted after disabling Elementor.
- The plan is to replace BeaverBuilder with a pure PHP template for improved performance and simplicity.

### Max Mega Menu {#max-mega-menu}

- Install and activate the [Max Mega Menu](https://www.megamenu.com/) plugin.
- Import preconfigured menu settings.
- Add the ES 1 theme menu configuration in `functions.php`.
- Update submenu and assign top/footer menu locations in theme settings.

### Elementor {#elementor}

- Disable [Elementor](https://elementor.com/) and its associated plugins to prevent conflicts or layout issues during the theme migration.

### Advanced Custom Fields (ACF) {#acf}

- Manage custom post types (`videos`, `guests`, `events`, `testimonials`) via the [Advanced Custom Fields](https://www.advancedcustomfields.com/) plugin.
- After importing the new theme, reset permalinks to avoid broken archive pages.

---

## Pages {#pages}

### About Page {#about-page}

- Set “Steve Derene Red Shirt” as the featured image ([placeholder if unavailable]).
- Replace all Elementor content with the new HTML-based text snippet.

### Podcast Links Page {#podcast-links}

- Assign a podcast-related image as the featured image ([placeholder if unavailable]).
- Replace Elementor content with updated mission and streaming information.

### Testimonials Page {#testimonials-page}

- Assign the required theme template.
- Testimonials Slider: JavaScript-based sliders (e.g., Slick Slider JS) should be replaced with static or PHP-driven sliders.

### View All Testimonials Page {#view-all-testimonials}

- Create and configure an “All Testimonials” page. Optionally reuse old Elementor content.

### Wells Page {#wells-page}

#### Africa Video Carousel Migration (WP Carousel) {#africa-video-carousel}

- Install and activate [WP Carousel Pro](https://shapedplugin.com/wp-carousel/).
- Import settings from the provided JSON file and update template shortcode IDs.

#### Uganda Photo Gallery (FooGallery) {#uganda-photo-gallery}

- Install and activate [FooGallery Pro](https://fooplugins.com/account#!/login/).
- Import gallery settings; rebuild gallery manually, updating image IDs and captions as provided.
- Recreate “country” media tags/taxonomies (Brazil, Uganda, Zimbabwe).

#### Wells Page Shortcodes {#wells-shortcodes}

- Review and update shortcode IDs for video carousel and FooGallery in the template file (`page-wells.php`).
- Gather new IDs after re-importing settings and re-uploading assets.

---

## Events Page {#events-page}

- Remove all legacy Elementor content.
- Assign “Events Archive” page template in the admin sidebar.

---

## Sidebars & Widgets {#sidebars-widgets}

- Remove all widgets via WP Admin; sidebar rendering is now handled in PHP templates.
- Add a single “Custom HTML” widget with a hidden `<div class="d-none"></div>` for each sidebar to activate rendering.
- Configure home and video archive sidebar templates as required.

### Banner Advert: Featured Stories {#featured-banner}

- Delete captions when adding via WP Admin (template rendering hides captions by default).

---

## General Tasks {#general-tasks}

- [ ] Remove all `error_log()` statements from theme files.
- [ ] Disable `lib-debug.php` in `functions.php` and ensure debugging is off in `wp-config.php`.
- [ ] Replace debug settings with production-safe configuration, ensuring WP_DEBUG is false.
- [ ] Delete any residual `debug.log` files from the wp-content/ directory.

---

## ⚠️ Gotchas & Notes {#gotchas-notes}

- The “View all Testimonials” button requires the “All Testimonials” page to exist—else it won’t work.
- Different versions of sidebars may be necessary for different site sections; ensure template code matches intended layout.
- Place the images/ folder in the site root for proper rendering in emails and on the site.

---

## 📚 References / See Also {#references}

**Collapsible HTML Elements:** 

- [MDN web docs: `<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)  
- [web.dev: Details and Summary](https://web.dev/learn/html/details)  
- [Discourse: Markdown Collapsible Section](https://discourse.devontechnologies.com/t/markdown-callouts-styling-the-details-element/81092)

**Plugins & Modules:**  

- [LightStart Maintenance Mode](https://wordpress.org/plugins/lightstart/)  
- [Max Mega Menu](https://www.megamenu.com/)  
- [BeaverBuilder](https://www.wpbeaverbuilder.com/)  
- [Elementor](https://elementor.com/)  
- [Advanced Custom Fields](https://www.advancedcustomfields.com/)  
- [WP Carousel Pro](https://shapedplugin.com/wp-carousel/)  
- [FooGallery Pro](https://fooplugins.com/account#!/login/)

**WordPress Deployment:**  

- [Website Launch Checklist 2025](https://elementor.com/blog/website-launch-checklist-guide/)  
- [WordPress Theme Development State 2025](https://www.reddit.com/r/Wordpress/comments/1k1i553/the_state_of_wordpress_in_2025_as_a_custom_theme/)  
- [General WordPress Help](https://wordpress.org/support/)

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made                                           |
| ------- | ---------- | ---------------- | ------------------------------------------------------ |
| 1.00    | 2025-09-24 | Eric L. Hepperle | Initial draft created as KB article clone of [tmpl].md |

---

**Note:**  
All steps, plugins, and references are current as of September 2025. The `<details>` element is natively supported, allowing for collapsible sections and indented outlines in markdown and HTML documents. Images marked as placeholders should be replaced with real assets during site deployment.[2][3][4][1]

[1](https://discourse.devontechnologies.com/t/markdown-callouts-styling-the-details-element/81092)
[2](https://gist.github.com/scmx/eca72d44afee0113ceb0349dd54a84a2)
[3](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
[4](https://web.dev/learn/html/details)
[5](https://elementor.com/blog/website-launch-checklist-guide/)
[6](https://www.reddit.com/r/Wordpress/comments/1k1i553/the_state_of_wordpress_in_2025_as_a_custom_theme/)
[7](https://www.reddit.com/r/webdev/comments/khtimg/is_there_a_builtin_html_element_that_showshides/)
[8](https://www.w3schools.com/howto/howto_js_collapsible.asp)
[9](https://stackoverflow.com/questions/51942158/expandable-table-of-contents-with-buttons)
[10](https://dev.to/jordanfinners/creating-a-collapsible-section-with-nothing-but-html-4ip9)
[11](https://wpdatatables.com/table-with-collapsible-rows/)
[12](https://www.wpbeginner.com/showcase/best-elementor-themes-and-templates/)
[13](https://github.com/quarto-dev/quarto-cli/discussions/10010)
[14](https://elementor.com/blog/highest-rated-wordpress-themes/)
[15](https://javascript.plainenglish.io/html-tips-expandable-content-with-details-summary-3e85fdd8eaf1)
[16](https://stackoverflow.com/questions/29368902/how-can-i-wrap-my-markdown-in-an-html-div)
[17](https://forum.xwiki.org/t/collapsible-table-of-content-toc/11424)
[18](https://dev.to/whitep4nth3r/how-to-build-an-html-only-accordion-no-javascript-required-4jc4)
[19](https://elementor.com/blog/design-wordpress-website/)
[20](https://www.reddit.com/r/Wordpress/comments/1ig4n94/what_does_your_wordpress_dev_environment_look/)