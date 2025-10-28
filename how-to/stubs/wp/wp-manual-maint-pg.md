ChatGPT Eric Hepperled 10/20/25


---



Here is a **wiki‑style knowledge base article (KB)** using your requested template format. I’ve reorganized, expanded, and added placeholders for images. Everything is purely Markdown + HTML + inline CSS (no JavaScript). The table of contents uses the HTML `<details>` / `<summary>` tags (native, no JS) to allow collapsing.

Please review and let me know if you’d like more sections or deeper detail.

<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
!Site Logo{height=32}

<!-- 📝 Title -->
# HOW‑TO: 📘 TOPIC: Manual Maintenance Mode in WordPress

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

<!-- 🧭 Navigation -->
### 🏚️ Home | 📁 How‑To

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
|--------------------|------------------|
| **Date Created**:  | 2025‑10-20       |
| **Date Updated**:  | —                |
| **AI Assistance**: | ChatGPT          |

---

<section id="sec-tags">

## Tags:

- WordPress
- Maintenance
- Theme Dev

</section>

---

## 📌 Overview

When putting a WordPress site into **maintenance / “coming soon” mode**, many plugins (like **LightStart**) offer built‑in functionality. However, those may impose limitations—such as requiring builder content or not honoring custom PHP templates. This guide describes a **manual approach** to maintenance mode, giving you full control of templates, behavior, and dependencies (without needing a plugin).

You will learn:

- Why a manual approach can be more reliable than relying on a plugin  
- How to create a simple toggle and intercept routing  
- How to build a custom maintenance page that still includes your dependent code (icons, constants, etc.)  
- Best practices (HTTP status, excluding admin, fallback handling)  

By the end, you’ll have a robust maintenance mode setup that works even without plugin support and handles your theme’s custom code (SVG icons, social constants, etc.).

---

<details>
  <summary><strong>📑 Table of Contents</strong></summary>
  
  &nbsp;&nbsp; - [Overview](#📌-Overview)  
  &nbsp;&nbsp; - [Prerequisites & Considerations](#Prerequisites-&-Considerations)  
  &nbsp;&nbsp; - [Implementation Steps](#Implementation-Steps)  
  &nbsp;&nbsp;&nbsp;&nbsp; - [1. Create Custom Maintenance Template](#1.-Create-Custom-Maintenance-Template)  
  &nbsp;&nbsp;&nbsp;&nbsp; - [2. Add Template Redirect Logic in `functions.php`](#2.-Add-Template-Redirect-Logic-in-functionsphp)  
  &nbsp;&nbsp;&nbsp;&nbsp; - [3. Include Dependent Files (SVGs, Constants, etc.)](#3.-Include-Dependent-Files)  
  &nbsp;&nbsp;&nbsp;&nbsp; - [4. Toggle Mechanism & Suggestions](#4.-Toggle-Mechanism-&-Suggestions)  
  &nbsp;&nbsp;&nbsp;&nbsp; - [5. Testing & Edge Cases](#5.-Testing-&-Edge-Cases)  
  &nbsp;&nbsp; - [Rationale: Why Manual Beats Plugin in Some Cases](#Rationale:-Why-Manual-Beats-Plugin-in-Some-Cases)  
  &nbsp;&nbsp; - [References / Related Links](#📚-References-/‑See-Also)  
  &nbsp;&nbsp; - [Revision History](#✅-Revision-History)  
</details>

---

## Prerequisites & Considerations

Before you begin:

- You must have access to your active **theme’s files** (ideally via FTP, SSH, or version control).
- You should know where your theme stores **dependent PHP includes** (e.g. `inc/svg-icons.php`, or a file with `SOCIAL_URLS` definitions).
- Be careful: messing with `functions.php` may break your site if syntax errors occur—use a staging environment first.
- You need to ensure the maintenance page still has access to essential theme assets (e.g. constants, functions) that your site expects.
- Use a **503 HTTP status** (Service Unavailable) to tell search engines this is temporary.

---

## Implementation Steps

### 1. Create Custom Maintenance Template

Create a file (in your theme) named, for example:

```

/wp-content/themes/your-theme/page-maintenance.php

````

Put this minimal template (with inline dependencies):

```php
<?php
/**
 * Template Name: Maintenance Page
 */

http_response_code(503);
// Include any dependencies your template requires:
require_once get_template_directory() . '/inc/svg-icons.php';
require_once get_template_directory() . '/inc/social-urls.php';

// Now you can safely use get_spotify_svg(), SOCIAL_URLS, etc.
?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Site Under Maintenance</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: system-ui, sans-serif; text-align:center; padding:4em; background: #f4f4f4; color: #333; }
    h1 { font-size: 2.5em; margin-bottom: 0.5em; }
    p { font-size: 1.2em; }
    a { color: #0073aa; text-decoration: none; }
  </style>
</head>
<body>
  <h1>We’ll be back soon</h1>
  <p>Our site is down for scheduled maintenance. Thank you for your patience.</p>
  <p>
    <a href="<?php echo esc_url(SOCIAL_URLS['pod_spotify']); ?>">
      <?php echo get_spotify_svg(); ?> Listen on Spotify
    </a>
  </p>
</body>
</html>
````

* This template is minimal and does **not** call `get_header()` or `get_footer()` (which may rely on theme context you bypass).
* It **explicitly includes** the dependencies (`svg-icons.php`, `social-urls.php`) so those definitions exist in scope.

---

### 2. Add Template Redirect Logic in `functions.php`

In your theme’s `functions.php` (or a site-specific plugin), append:

```php
add_action('template_redirect', function() {
    // Toggle (you can replace this logic later)
    $maintenance_mode = true;

    if ($maintenance_mode && !is_user_logged_in()) {
        $tpl = get_template_directory() . '/page-maintenance.php';
        if (file_exists($tpl)) {
            include $tpl;
            exit;
        } else {
            wp_die('Maintenance page template missing.', 'Maintenance', ['response' => 503]);
        }
    }
});
```

* This intercepts the normal WordPress routing **before any page loads**, checks if maintenance mode is active, and if so, loads your custom template.
* Logged‑in users bypass it (so admins can still work normally).

---

### 3. Include Dependent Files (SVGs, Constants, etc.)

Because you’re **bypassing normal theme rendering**, you must manually include any files your template needs. For instance:

* `require_once get_template_directory() . '/inc/svg-icons.php';`
* `require_once get_template_directory() . '/inc/social-urls.php';`

Inside those files, you should adopt **function-based** definitions so they work regardless of scope:

```php
// In inc/svg-icons.php
function get_spotify_svg() { return '<svg …> … </svg>'; }
function get_apple_svg() { return '<svg …> … </svg>'; }
// etc.
```

In `social-urls.php`:

```php
if (! defined('SOCIAL_URLS')) {
    define('SOCIAL_URLS', [
      'pod_spotify' => 'https://spotify.link/…',
      'pod_apple' => 'https://apple.link/…',
      // etc.
    ]);
}
```

This ensures when your maintenance template includes them, those symbols are defined.

---

### 4. Toggle Mechanism & Suggestions

Rather than editing `$maintenance_mode = true` every time, consider:

* Using a constant in `wp-config.php`:

  ```php
  define('MY_SITE_MAINTENANCE', true);
  ```

  Then use:

  ```php
  if (defined('MY_SITE_MAINTENANCE') && MY_SITE_MAINTENANCE && !is_user_logged_in()) { … }
  ```

* Using an option in the database (via `get_option('site_maintenance')`) and adding a small admin toggle.

* Using environment variable logic (e.g. `getenv('MAINTENANCE_MODE')`) for deployment pipelines.

* Excluding certain URLs or paths from maintenance (e.g. login, REST API) by adding conditional checks before including the template.

---

### 5. Testing & Edge Cases

* Ensure `/wp-login.php` or admin URLs are still accessible (you don’t want to lock yourself out).
* Test as a logged-out user, a logged-in user, and using incognito mode.
* Check that the HTTP status code is `503` (inspect with browser dev tools or `curl -I`).
* If your template relies on theme CSS assets (fonts, icons), you may need to include them or inline critical styles.
* If your site has aggressive caching, clear cache before testing.
* Consider adding a fallback `wp_die()` if the template file is missing (as in the snippet above).

---

## Rationale: Why Manual Beats Plugin in Some Cases

* Many maintenance or coming-soon plugins (e.g. **LightStart**, formerly WP Maintenance Mode) rely on **block/editor-based content** and **ignore custom page templates**. They often render only what’s in the post content, discarding your PHP template.
  ([WordPress.com][1])
* Plugins may conflict with theme logic, caching, or builder frameworks, leading to blank or broken pages. Some reviews cite that LightStart auto-installs other plugins (e.g. Otter Blocks) and introduces overhead.
  ([WordPress.org][2])
* A manual approach ensures you maintain control over dependencies (SVGs, constants, path logic) and can force HTTP headers/status codes.
* Plugins often mask bugs (e.g. routing conflicts), whereas a manual method is transparent and easier to debug in context.
* You gain a permanent, deployable solution that doesn't rely on plugin updates or compatibility.

---

## 📚 References / See Also

### LightStart / Plugin Context

* [LightStart – Maintenance Mode, Coming Soon and Landing Page Builder](https://wordpress.org/plugins/wp-maintenance-mode) — plugin homepage and description ([WordPress.org][3])
* Hostinger’s guide on using LightStart for maintenance mode (block-based) ([Hostinger][4])
* Community feedback about plugin bloat and forced installs ([WordPress.org Slovenija][5])

### WordPress Maintenance General

* Guides on enabling maintenance mode and troubleshooting stuck `.maintenance` file
* Best practices on HTTP status codes and search engine handling

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made             |
| ------- | ---------- | ---------------- | ------------------------ |
| 1.00    | 2025‑10-24 | Eric L. Hepperle | Initial draft KB article |

---

You can copy this into your KB directory and fill in any missing real links or images (use `![Alt text](placeholder.jpg)` where needed). Let me know if you’d like to add a “Plugin vs Manual Comparison” section, or include more examples around exclusion logic or database toggles.

[1]: https://wordpress.com/plugins/wp-maintenance-mode?utm_source=chatgpt.com "LightStart – Maintenance Mode, Coming Soon and Landing Page Builder Plugin — WordPress.com"
[2]: https://wordpress.org/support/topic/why-i-will-not-use-this-plugin-ever-again/?utm_source=chatgpt.com "Why I will not use this plugin ever again - [LightStart - Maintenance Mode, Coming Soon and Landing Page Builder] Review | WordPress.org"
[3]: https://wordpress.org/plugins/wp-maintenance-mode/?utm_source=chatgpt.com "LightStart – Maintenance Mode, Coming Soon and Landing Page Builder – WordPress plugin | WordPress.org"
[4]: https://www.hostinger.com/tutorials/wordpress-maintenance-mode?utm_source=chatgpt.com "WordPress Maintenance Mode: How to Enable and Troubleshoot"
[5]: https://sl.wordpress.org/plugins/wp-maintenance-mode/?utm_source=chatgpt.com "LightStart – Maintenance Mode, Coming Soon and Landing Page Builder – WordPress plugin | WordPress.org Slovenija"
