Eric hepperle, ChatGPT, 10/07/25



---



Absolutely! Below is a complete and developer-friendly **Wiki** page for your **MVP Debug Logger** WordPress plugin, based on the working implementation and the key "gotchas" you encountered.

---

# 📘 MVP Debug Logger — Plugin Wiki

> 🔧 *A lightweight WordPress plugin that enables PHP error logging without relying on `WP_DEBUG`, `wp-config.php`, or core hooks.*

---

## 🧩 Overview

**MVP Debug Logger** is a minimalist WordPress plugin designed to capture PHP errors and log messages directly to `wp-content/debug.log`, without requiring you to edit `wp-config.php` or enable `WP_DEBUG`.

It’s ideal for:

* Local dev environments
* Quick troubleshooting
* Sites where editing `wp-config.php` is not possible or desirable

---

## 📂 Plugin Code

Here’s the full plugin code (single-file approach):

```php
<?php
/*
Plugin Name: MVP Debug Logger
Description: Enables debug mode, hides errors from browser, logs all PHP errors to wp-content/debug.log — even if WP_DEBUG is false or undefined.
Version: 1.0
Author: Eric L. Hepperle
*/

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Set PHP error logging directives ASAP
error_reporting( E_ALL );
ini_set( 'display_errors', '0' );
ini_set( 'log_errors', '1' );

// Log to wp-content/debug.log
$log_file = WP_CONTENT_DIR . '/debug.log';
ini_set( 'error_log', $log_file );

// Create debug.log if it doesn’t exist
if ( ! file_exists( $log_file ) ) {
    file_put_contents( $log_file, '' );
}

// Log a test message
error_log( '[MVP Debug Logger] Plugin initialized and logging is active.' );

// Optional admin-only confirmation
if ( current_user_can( 'manage_options' ) ) {
    echo '<div style="margin: 50px auto; text-align:center;">✅ MVP Debug Logger is active</div>';
}
```

---

## 🚀 How It Works

This plugin sets native PHP error logging directives at runtime using `ini_set()`:

* Enables logging with `log_errors`
* Redirects logs to a specific file
* Silently creates the log file if missing
* Hides errors from displaying in the browser (production-safe)
* Does **not** rely on `WP_DEBUG` or other WordPress constants

---

## ⚠️ Gotchas & Unintuitive Behavior

### ❌ `WP_DEBUG` is NOT required — but WordPress still expects it

Normally, WP only logs to `debug.log` if `WP_DEBUG` and `WP_DEBUG_LOG` are true in `wp-config.php`. This plugin bypasses that by configuring PHP directly.

---

### 🧩 Why No Hook (`init`, `plugins_loaded`, etc.)?

**Key point:** PHP error logging must be configured **before output starts or WordPress sets its own error handlers.**

Using a hook delays execution too long:

```php
add_action('init', function() {
    ini_set('error_log', ...); // Too late!
});
```

Instead, immediate top-level execution ensures:

* Logging is configured early
* PHP starts error logging before WordPress interferes
* Logs work regardless of WP internal settings

---

### 🛑 Do NOT define `WP_DEBUG` or `WP_DEBUG_LOG` inside the plugin

These must be defined in `wp-config.php` **before WordPress loads**, or they won’t work.

This plugin **intentionally avoids defining them**, and works around WordPress limitations.

---

### ⚠️ `ini_set()` may be restricted on some hosts

If `ini_set()` is disabled by your PHP/hosting config, you may get no logs and no error message.

To confirm your `error_log` value is being set:

```php
echo ini_get('error_log');
```

---

## ✅ How to Use

1. **Drop the plugin** into `wp-content/plugins/mvp-debug-logger/`
2. **Activate it** from the Plugins admin panel
3. **Trigger an error**:

```php
nonexistent_function(); // Fatal error
```

4. Check the `wp-content/debug.log` file

---

## ✅ Confirm It’s Working

* ✅ File `wp-content/debug.log` exists
* ✅ PHP errors and `error_log()` messages appear
* ✅ No error output in browser
* ✅ Works whether or not `WP_DEBUG` is set in `wp-config.php`

---

## 🧼 Clean Up

When you're done debugging:

* Deactivate and delete the plugin
* Delete `debug.log` if no longer needed

---

## 🛠 Advanced Usage

* You can change the log file path:

```php
$log_file = WP_CONTENT_DIR . '/custom-log.log';
```

* Customize behavior per environment (e.g., only enable on local dev):

```php
if ( $_SERVER['SERVER_NAME'] === 'localhost' ) {
    // Enable logging
}
```

---

## 📦 Zip or Repo?

Want this wrapped up into:

* A downloadable `.zip`?
* A GitHub repository with versioning?
* A `class`-based version for extensibility?

Let me know and I’ll package it for you.

---

Let me know if you'd like a Markdown version of this for GitHub, or a Confluence/MediaWiki version for enterprise use.
