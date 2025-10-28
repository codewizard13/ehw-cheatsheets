Eric hepperle, ChatGPT, 10/07/25



---


Great — using your detailed KB doc as reference, here's a **simplified MVP version** of the **ELSM Debug** WordPress plugin. This MVP strips down the robust plugin structure to just the essentials while still fulfilling the core purpose: developer debugging utilities for the ELSM system.

---

## ✅ **Simple MVP Plugin Structure**

```
elsm-debug/
├── elsm-debug.php
├── includes/
│   └── class-elsm-debug.php
```

---

## 🧩 `elsm-debug.php` — *Main Plugin File*

```php
<?php
/**
 * Plugin Name: ELSM Debug
 * Description: Minimal debugging utilities for the ELSM system (MVP version).
 * Version: 0.1.0
 * Author: Your Name
 * Text Domain: elsm-debug
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'ELSM_DEBUG_PATH', plugin_dir_path( __FILE__ ) );

require_once ELSM_DEBUG_PATH . 'includes/class-elsm-debug.php';

function elsm_debug_init() {
    ELSM_Debug::get_instance();
}
add_action( 'plugins_loaded', 'elsm_debug_init' );
```

---

## 🧱 `includes/class-elsm-debug.php` — *Main Class File*

```php
<?php

class ELSM_Debug {

    private static $instance = null;

    public static function get_instance() {
        if ( self::$instance === null ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        add_action( 'init', [ $this, 'debug_log_example' ] );
    }

    public function debug_log_example() {
        if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
            $message = "ELSM Debug plugin loaded.";
            error_log( "[ELSM_DEBUG] " . $message );
        }
    }
}
```

---

## 🧪 MVP Functionality Summary

✅ Logs a basic message on every load (if `WP_DEBUG` is enabled).
✅ Singleton pattern for plugin structure.
✅ No admin page, assets, or language files — just raw functionality.
✅ Lightweight and portable for dev usage.

---

## 🗂️ Deployment

1. Create a new folder called `elsm-debug` in `wp-content/plugins/`.
2. Add the two files above (`elsm-debug.php` and the class file).
3. Activate it from the WordPress Plugins dashboard.
4. Check your PHP error log (`wp-content/debug.log`) when `WP_DEBUG` is on.

---

Would you like this MVP exported as a ZIP file or uploaded to a GitHub repo for version control?
