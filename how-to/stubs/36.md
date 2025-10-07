ChatGPT, 9/22/25


### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:



## CONTENT_BELOW: ##

---





Great! Let's create a clean and reusable helper function for environment-based config. This function will live in your theme (e.g., in `inc/helpers.php`, `functions.php`, or ideally a dedicated `env-config.php`).

---

### ✅ Helper Function: `get_environment_config()`

```php
/**
 * Get environment-specific configuration.
 *
 * @return array {
 *     @type string $type           Human-readable label for current environment.
 *     @type int    $vidCarouselID  ID for the video carousel shortcode.
 *     @type int    $galleryID      ID for the photo gallery shortcode.
 * }
 */
function get_environment_config() {
  $env = wp_get_environment_type();

  $config = [
    'production'  => ['type' => '🟢 Production', 'vidCarouselID' => 28739, 'galleryID' => 28741],
    'staging'     => ['type' => '🟠 Staging',    'vidCarouselID' => 28739, 'galleryID' => 28741],
    'local'       => ['type' => '🟣 Local',      'vidCarouselID' => 28739, 'galleryID' => 28741],
    'development' => ['type' => '🟣 Local',      'vidCarouselID' => 28739, 'galleryID' => 28741],
    'dev'         => ['type' => '🟣 Local',      'vidCarouselID' => 28739, 'galleryID' => 28741],
  ];

  // Default / fallback config
  $default = [
    'type' => '🤷 Unknown Environment',
    'vidCarouselID' => 28739,
    'galleryID' => 28741,
  ];

  return $config[$env] ?? $default;
}
```

---

### ✅ Usage in Template (`page-wells.php`)

Replace your current logic with this:

```php
$config = get_environment_config();

$env_type = $config['type'];
$id__vidCarousel = $config['vidCarouselID'];
$id__photoGallery = $config['galleryID'];
```

You can still output the environment label like before:

```php
<?php if (current_user_can('manage_options')): ?>
  <h3 class="text-center"><?php echo esc_html($env_type); ?></h3><br>
<?php endif; ?>
```

---

### 📌 Where to Place It

* If you're using a `functions.php` file with helpers, place the function there.
* Or create a new file like `inc/env-config.php` and include it from `functions.php`:

```php
require_once get_template_directory() . '/inc/env-config.php';
```

---

### ✅ Bonus: Add Logging (Optional)

You could enhance the function with optional debug logging:

```php
if (defined('WP_DEBUG') && WP_DEBUG && current_user_can('manage_options')) {
  error_log(__FUNCTION__ . " - Env: {$env}, Type: {$config[$env]['type']}");
}
```

Let me know if you'd like to extend this helper to control other env-specific logic (e.g., disabling scripts, changing API keys, etc).
