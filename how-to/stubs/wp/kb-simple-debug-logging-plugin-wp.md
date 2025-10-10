Eric Hepperle Perplexity (EHWJobs) 10/07/25


---



## How to Enable Debug Logging in WordPress via a Simple Plugin

This article explains how to create a minimal WordPress plugin that enables error logging, prevents error messages from displaying in the browser, and writes all errors to the standard `wp-content/debug.log` file.

***

### Overview

WordPress debugging is commonly controlled via constants like `WP_DEBUG` in the `wp-config.php` file. However, changing these constants dynamically from themes or plugins is not possible because they load too late in the WordPress lifecycle.

This guide shows how to simulate debug mode behavior inside a plugin by configuring PHP's error reporting and logging settings. This approach enables capturing all PHP errors, hides them from site visitors, and logs them to the default debug file.

***

### Plugin Functionality

- Enables full PHP error reporting.
- Disables error display in browser output.
- Enables error logging and routes logs to `wp-content/debug.log`.
- Integrates seamlessly with WordPress without modifying core files.

***

### Step-by-Step Instructions

#### 1. Create Plugin File

Open a text editor and create a new PHP file named `mvp-debug-logger.php` with the following content:

```php
<?php
/*
Plugin Name: MVP Debug Logger
Description: Enables debug mode, hides errors from browser, logs all errors to wp-content/debug.log
Version: 1.0
Author: Your Name
*/

// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Initialize debugging configurations
function mvp_debug_logger_init() {
    // Report all errors
    error_reporting( E_ALL );

    // Hide errors in browser output
    ini_set( 'display_errors', '0' );

    // Enable error logging
    ini_set( 'log_errors', '1' );

    // Log errors to standard WordPress debug log
    ini_set( 'error_log', WP_CONTENT_DIR . '/debug.log' );

    // Ensure WP_DEBUG_LOG is true for WP compatibility
    if ( ! defined( 'WP_DEBUG_LOG' ) ) {
        define( 'WP_DEBUG_LOG', true );
    }
}
add_action( 'init', 'mvp_debug_logger_init', 1 );
```

#### 2. Upload Plugin to WordPress

- Connect to your WordPress site via FTP or File Manager.
- Navigate to the `wp-content/plugins` directory.
- Upload the `mvp-debug-logger.php` file into this directory.

#### 3. Activate the Plugin

- Log in to your WordPress admin dashboard.
- Go to **Plugins > Installed Plugins**.
- Locate **MVP Debug Logger** in the list.
- Click **Activate**.

#### 4. Verify Debug Logging

- Trigger an error on your site (e.g., by calling a function incorrectly).
- Check the `wp-content/debug.log` file to confirm the error is logged.
- Confirm that no PHP errors display on the frontend or admin pages.

***

### Important Notes

- This plugin **does not** redefine the core `WP_DEBUG` constant in `wp-config.php`. It relies on PHP error reporting settings to capture errors.
- For full WordPress debug mode, you still need to define `WP_DEBUG` as `true` in your `wp-config.php`.
- This plugin provides a safer way to enable error logging on live sites without exposing errors to visitors.
- If you want to toggle real WP_DEBUG mode, modify `wp-config.php` directly or via deployment scripts.

***

### Summary

Creating a dedicated plugin to configure PHP error logging and display settings is a practical way to simulate WordPress debug mode behavior without editing `wp-config.php`. This approach ensures all errors are logged securely, while user-facing error display is suppressed.

***

If any questions arise or further customization is needed, feel free to consult the WordPress codex or developer community resources.