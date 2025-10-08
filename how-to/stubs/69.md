
Eric hepperle, ChatGPT, 10/07/25



---



Excellent — that’s a serious step up. You’re moving from a “utility logger” to a “developer diagnostics framework,” which is exactly what a smart WordPress shop needs when juggling multiple environments.

Let’s break this down clearly and build a **merged, class-based plugin** that:

---

## 🎯 Goals Recap

✅ Plugin toggled via WordPress activation/deactivation
✅ Continues to log PHP errors regardless of `WP_DEBUG`
✅ Adds an environment-aware **admin notice bar**
✅ Logs the current environment to `debug.log` upon activation
✅ Is architected for **future expansion** (widgets, admin bar tools, etc.)

---

## 🧱 Architecture Plan

We’ll wrap everything in a `class MVP_Debug_Logger` with:

* Lifecycle hooks (`register_activation_hook`, `register_deactivation_hook`)
* Error logging setup in constructor
* Environment config & notice rendering encapsulated as methods
* Namespace-style static method calls for future extensibility

This will also prevent global namespace pollution and keep things maintainable.

---

## 💻 Full Combined Plugin Code

```php
<?php
/*
Plugin Name: MVP Debug Logger
Description: Environment-aware debug logger and admin notifier for WordPress. Logs PHP errors without WP_DEBUG and displays environment notice in admin.
Version: 2.0
Author: Eric L. Hepperle
*/

if ( ! defined( 'ABSPATH' ) ) exit;

class MVP_Debug_Logger {

    private static $instance = null;
    private static $log_file;

    public static function init() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        // Set log file
        self::$log_file = WP_CONTENT_DIR . '/debug.log';

        // Configure PHP error logging immediately
        $this->setup_error_logging();

        // Hook admin notice
        add_action('admin_notices', [$this, 'admin_env_notice']);
    }

    /** 🔧 Configure PHP Error Logging */
    private function setup_error_logging() {
        error_reporting(E_ALL);
        ini_set('display_errors', '0');
        ini_set('log_errors', '1');
        ini_set('error_log', self::$log_file);

        if (! file_exists(self::$log_file)) {
            file_put_contents(self::$log_file, '');
        }

        error_log('[MVP Debug Logger] Initialized. Error logging active.');
    }

    /** 🧠 Environment Configurations */
    private function get_env_config() {
        $raw_env = defined('WP_ENVIRONMENT_TYPE') ? WP_ENVIRONMENT_TYPE : wp_get_environment_type();
        $aliases = [
            'dev' => 'local',
            'development' => 'local',
            'testing' => 'staging',
        ];
        $env = $aliases[$raw_env] ?? $raw_env;

        $cfg = [
            'production' => [
                'label' => '🟢 Production',
                'styles' => [
                    'admin_notice_bg' => 'palegreen',
                    'admin_notice_clr' => '#000',
                ],
            ],
            'staging' => [
                'label' => '🟠 Staging',
                'styles' => [
                    'admin_notice_bg' => 'gold',
                    'admin_notice_clr' => '#000',
                ],
            ],
            'local' => [
                'label' => '🟣 Local',
                'styles' => [
                    'admin_notice_bg' => 'rebeccapurple',
                    'admin_notice_clr' => 'antiquewhite',
                ],
            ],
        ];

        $default = [
            'label' => '🤷 Unknown Environment',
            'styles' => [
                'admin_notice_bg' => '#777',
                'admin_notice_clr' => '#fff',
            ],
        ];

        return $cfg[$env] ?? $default;
    }

    /** 📣 Admin Environment Notice */
    public function admin_env_notice() {
        if ( ! current_user_can('manage_options') ) return;

        $home_url_parts = wp_parse_url(home_url());
        $domain = $home_url_parts['host'] ?? 'unknown-domain';
        $is_https = ($home_url_parts['scheme'] ?? '') === 'https';

        $secure_notice = $is_https ? '🔒 Secure (HTTPS)' : '🚫 Not Secure (HTTP)';
        $env_config = $this->get_env_config();

        $environment_label = $env_config['label'];
        $bg = $env_config['styles']['admin_notice_bg'];
        $clr = $env_config['styles']['admin_notice_clr'];
        $wp_env_type = defined('WP_ENVIRONMENT_TYPE') ? WP_ENVIRONMENT_TYPE : 'NONE DEFINED';

        $notice_style = sprintf(
            'background:%s;color:%s;padding:.6rem;font-weight:500;',
            esc_attr($bg),
            esc_attr($clr)
        );

        echo sprintf(
            '<div class="notice notice-info" style="%s">
                <span>Environment: %s</span>
                &nbsp;|&nbsp;<span>%s</span>
                &nbsp;|&nbsp;<span>%s</span>
                &nbsp;|&nbsp;<span>WP_ENVIRONMENT_TYPE: <strong>%s</strong></span>
            </div>',
            $notice_style,
            esc_html($environment_label),
            esc_html($domain),
            esc_html($secure_notice),
            esc_html($wp_env_type)
        );
    }

    /** ⚙️ Plugin Activation Hook */
    public static function activate() {
        self::init();
        $env = defined('WP_ENVIRONMENT_TYPE') ? WP_ENVIRONMENT_TYPE : wp_get_environment_type();
        error_log("[MVP Debug Logger] Plugin activated. Current environment: {$env}");
    }

    /** 🧹 Plugin Deactivation Hook */
    public static function deactivate() {
        error_log('[MVP Debug Logger] Plugin deactivated.');
    }

}

// Bootstrap
MVP_Debug_Logger::init();
register_activation_hook(__FILE__, ['MVP_Debug_Logger', 'activate']);
register_deactivation_hook(__FILE__, ['MVP_Debug_Logger', 'deactivate']);
```

---

## ✨ Highlights

* **Early Execution:** Logging is initialized before WordPress sets its own handlers.
* **OOP Framework:** You can easily extend with `add_dashboard_widget()` or admin-bar features.
* **Environment Banner:** Clean, color-coded, emoji-labeled notice appears only for admins.
* **Log Entries:** Writes to `debug.log` on activation and on each page load.
* **Failsafe:** Works even if `WP_DEBUG` is false or undefined.

---

## 🧩 Future Expansion (Drop-in Ready)

You can later add:

```php
add_action('wp_dashboard_setup', [$this, 'register_dashboard_widget']);
add_action('admin_bar_menu', [$this, 'add_admin_bar_env_label'], 100);
```

The current class scaffolding supports this without refactoring.

---

## 🧾 Summary

You’re essentially merging a **runtime-safe error logger** with an **environment-awareness UI layer**, done in an OOP, maintainable structure that’s **WordPress core-aligned** and ready for multi-environment workflows.

---

Would you like me to produce a **README.md / GitHub Wiki** for this upgraded v2 plugin next (with usage, screenshots, and dev notes)?
