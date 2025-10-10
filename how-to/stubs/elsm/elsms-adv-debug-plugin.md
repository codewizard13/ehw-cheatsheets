Eric hepperle, ChatGPT, 10/07/25



---


To generate the full plugin file structure, here’s a robust and well-organized PHP template for your **ELSM Debug** WordPress plugin. Below is the basic file layout, followed by the core file contents.

---

### 📁 Plugin Directory Structure

```
elsm-debug/
├── elsm-debug.php
├── uninstall.php
├── readme.txt
├── includes/
│   ├── class-elsm-debug.php
│   ├── class-elsm-logger.php
│   └── helpers.php
├── admin/
│   ├── class-elsm-admin.php
│   └── views/
│       └── settings-page.php
├── assets/
│   ├── css/
│   │   └── admin-style.css
│   └── js/
│       └── admin-script.js
├── languages/
│   └── elsm-debug.pot
├── logs/
│   └── .htaccess
└── index.php
```

---

### 🧩 Core Plugin File (`elsm-debug.php`)

```php
<?php
/**
 * Plugin Name: ELSM Debug
 * Description: Developer debugging utilities for the ELSM system.
 * Version: 1.0.0
 * Author: Your Name
 * Text Domain: elsm-debug
 * Domain Path: /languages
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'ELSM_DEBUG_VERSION', '1.0.0' );
define( 'ELSM_DEBUG_PATH', plugin_dir_path( __FILE__ ) );
define( 'ELSM_DEBUG_URL', plugin_dir_url( __FILE__ ) );

require_once ELSM_DEBUG_PATH . 'includes/class-elsm-debug.php';

function elsm_debug_init() {
    ELSM_Debug::get_instance();
}
add_action( 'plugins_loaded', 'elsm_debug_init' );
```

---

### 🧱 Main Class (`includes/class-elsm-debug.php`)

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
        $this->load_dependencies();
        if ( is_admin() ) {
            new ELSM_Admin();
        }
    }

    private function load_dependencies() {
        require_once ELSM_DEBUG_PATH . 'includes/class-elsm-logger.php';
        require_once ELSM_DEBUG_PATH . 'includes/helpers.php';
        require_once ELSM_DEBUG_PATH . 'admin/class-elsm-admin.php';
    }
}
```

---

### 🧾 Logger Class (`includes/class-elsm-logger.php`)

```php
<?php
class ELSM_Logger {
    public static function log( $message ) {
        if ( ! WP_DEBUG ) return;
        $file = ELSM_DEBUG_PATH . 'logs/debug.log';
        $time = date( 'Y-m-d H:i:s' );
        error_log( "[{$time}] " . print_r( $message, true ) . "\n", 3, $file );
    }
}
```

---

### 🛠 Admin Class (`admin/class-elsm-admin.php`)

```php
<?php
class ELSM_Admin {

    public function __construct() {
        add_action( 'admin_menu', [ $this, 'add_menu' ] );
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_assets' ] );
    }

    public function add_menu() {
        add_menu_page(
            'ELSM Debug',
            'ELSM Debug',
            'manage_options',
            'elsm-debug',
            [ $this, 'render_settings_page' ],
            'dashicons-admin-tools'
        );
    }

    public function enqueue_assets() {
        wp_enqueue_style( 'elsm-admin-style', ELSM_DEBUG_URL . 'assets/css/admin-style.css' );
        wp_enqueue_script( 'elsm-admin-script', ELSM_DEBUG_URL . 'assets/js/admin-script.js', [ 'jquery' ], false, true );
    }

    public function render_settings_page() {
        include ELSM_DEBUG_PATH . 'admin/views/settings-page.php';
    }
}
```

---

### 🔧 Helper Functions (`includes/helpers.php`)

```php
<?php
function elsm_debug_log( $data ) {
    ELSM_Logger::log( $data );
}
```

---

### 🧹 Uninstall Script (`uninstall.php`)

```php
<?php
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    exit;
}

// Optional: clean up options or logs
```

---

### 🧼 `logs/.htaccess`

```
# Prevent direct access to log files
Deny from all
```

---

Would you like this exported as a downloadable ZIP or placed into a GitHub-style repository for you?
