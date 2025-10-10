Eric Hepperle Perplexity (EHJobs) / ChatGPt
10/08/25


---

Absolutely — here's a **comprehensive, standalone knowledge base (KB) article** based on everything we've covered in this chat session. It's structured for clarity and completeness, suitable for internal wikis or dev team documentation.

---

# 🧠 **KB: Laravel Mix + Browsersync Not Reloading Specific WordPress Page (e.g., `/tmp-maint-es-pod/`)**

## 📄 Summary

This article documents a nuanced issue where **Laravel Mix with Browsersync compiles successfully and reloads root pages**, but fails to reload **specific WordPress pages** like `http://localhost:3000/tmp-maint-es-pod/`, even though the page exists and is being served through the expected template (`page-maintenance.php`).

Despite Laravel Mix and Browsersync reporting successful file watching and proxying, some pages don't reload due to Browsersync's inability to inject its client into minimal or custom WordPress templates.

---

## ✅ Symptoms

* `npm run watch` (Laravel Mix) compiles assets successfully.
* Browsersync reloads the default root page (`http://localhost:3000/`) without issue.
* **Other open tabs (e.g., `/tmp-maint-es-pod/`) do not reload**, even when:

  * The source PHP file (e.g., `page-maintenance.php`) is changed and saved.
  * CSS/JS changes are detected and recompiled.
* Browsersync reports continuous `[Reloading Browsers...]` logs but reloads only one tab.

---

## 💻 Environment

* Laravel Mix v6.0.49
* Browsersync running via Laravel Mix
* WordPress theme development (using LocalWP)
* Development domain: `http://es-prod-2025-10-06.local`
* Browsersync proxying to `localhost:3000`
* Affected page: `http://localhost:3000/tmp-maint-es-pod/`
* Custom page template: `page-maintenance.php`
* `webpack.mix.js` configured correctly with `browserSync()` watching `**/*.php`, `src/**/*.scss`, and `src/**/*.js`

---

## 🛠 Root Cause

Browsersync injects a **JavaScript client script** into the HTML pages it proxies, allowing live reloads.

However, when using a **minimal or custom WordPress header** (like `get_header('minimal')`), or stripped-down page templates, the auto-injection may silently fail, especially if:

* There are no standard `<head>` or `</body>` tags for the injector to latch onto.
* Pages are opened **before** Mix starts.
* Pages are not considered "connected" Browsersync clients.

As a result, **pages like `/tmp-maint-es-pod/` never receive the reload command**, even though the PHP file is watched and triggers a reload event.

---

## 🔍 Troubleshooting Steps Performed

| Step                                           | Result                                                            |
| ---------------------------------------------- | ----------------------------------------------------------------- |
| Confirmed page renders at `/tmp-maint-es-pod/` | ✅ Page loads normally                                             |
| Verified `page-maintenance.php` is being used  | ✅ Confirmed as the active page template                           |
| Checked Mix console logs                       | ✅ Mix compiles and triggers `[Reloading Browsers...]`             |
| Edited `page-maintenance.php`                  | ✅ Other tab reloaded; target page did not                         |
| Tested in multiple browsers                    | ❌ Issue persists in both Chrome and Firefox                       |
| Enabled `ghostMode` in `browserSync()`         | ❌ No change                                                       |
| Opened page after Mix starts                   | ❌ Still not reloading                                             |
| Used Browsersync UI (`localhost:3001`)         | ❌ Only root tab showed as connected                               |
| Manually executed `window.location.reload()`   | ✅ Reloads manually, proves browser not connected to reload system |

---

## ✅ Final Working Solution

### 🎯 Manually Inject the Browsersync Client Script

To ensure all pages (including custom templates like `page-maintenance.php`) are connected to Browsersync:

**Add this snippet to your `header.php` or `header-minimal.php`:**

```php
<?php
// Only load Browsersync in local development
if (defined('WP_DEBUG') && WP_DEBUG): ?>
  <script async src="http://localhost:3000/browser-sync/browser-sync-client.js?v=<?= time(); ?>"></script>
<?php endif; ?>
```

This does the following:

* Forces the Browsersync client to load on all pages (even those where automatic injection fails).
* Uses `WP_DEBUG` to prevent loading in production.
* Adds a `?v=timestamp` to ensure fresh script load each time.

### ✅ Optional: Define `WP_DEBUG` If Needed

If not already defined in your `wp-config.php`:

```php
define('WP_DEBUG', true);
```

---

## ✅ Updated `webpack.mix.js` Example

```js
const mix = require('laravel-mix');

const my_domain = 'es-prod-2025-10-06.local';

mix
   .js('src/app.js', 'js/')
   .js('src/slick/slick.min.js', 'js/')
   .sass('src/app.scss', 'css/')
   .sass('src/login.scss', 'css/')
   .sass('src/admin.scss', 'css/')
   .sass('src/slick/slick.scss', 'css/')
   .sass('src/slick/slick-theme.scss', 'css/')
   .setPublicPath('./')
   .browserSync({
      proxy: my_domain,
      open: false,
      notify: true,
      injectChanges: false, // Full reload for PHP
      reloadDelay: 300,
      ghostMode: {
         clicks: true,
         scroll: true,
         forms: true
      },
      files: [
         './**/*.php',
         'src/**/*.scss',
         'src/**/*.js'
      ]
   });

if (mix.inProduction()) {
   mix.version();
}
```

---

## ✅ Final Verification Steps

1. Restart `npm run watch`
2. Open the target page (`/tmp-maint-es-pod/`) **after** Browsersync is watching
3. Make a change to `page-maintenance.php`
4. Confirm the tab reloads automatically

---

## 🧼 Cleanup Tips

* Wrap client injection with `WP_DEBUG` or `WP_ENV` to avoid leaking into production.
* Use `v=<?= time(); ?>` to prevent caching.
* Don’t rely on Browsersync’s auto-injection for non-standard layouts or headers.

---

## 🧠 Additional Notes

* Laravel Mix documentation does **not cover** these WordPress-specific injection issues.
* This workaround is widely used in WordPress + Laravel Mix environments.
* Issue also affects certain WooCommerce templates and single-purpose pages (e.g. maintenance, landing pages).

---

## ✅ TL;DR Fix Summary

| Action                               | Description                                         |
| ------------------------------------ | --------------------------------------------------- |
| Add Browsersync client to header     | Ensures all pages load the reload client            |
| Use `WP_DEBUG` to conditionally load | Keeps code clean for production                     |
| Confirm via Network tab              | Ensure `/browser-sync/browser-sync-client.js` loads |
| Restart `npm run watch`              | Always restart after config changes                 |
| Watch `page-maintenance.php` edits   | Tab should now reload properly                      |

---

Let me know if you’d like this exported as Markdown, PDF, or another format for your documentation system.


---
---


https://chatgpt.com/c/68e6c924-1cb0-8330-93c1-88ad6b93430f