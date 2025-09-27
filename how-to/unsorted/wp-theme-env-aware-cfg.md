<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# HOW-TO: 📘 WP: Centralized Environment-Based Configuration

**Version:** 1.0


> Optimized for: VSCode on Windows 11 + Git Bash (SSH)
> 

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-23       |
| **Date Updated**:  | --               |
| **AI Assistance**: | ChatGPT          |


---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">

## Tags:

- [WordPress](#)
- [Environment Configuration](#)
- [Theme Development](#)


</section>


***


## 📌 Overview


This article explains how to create a centralized environment-based configuration system in a WordPress theme, enabling dynamic adjustment of settings such as IDs, styles, and fonts based on the current environment: production, staging, local, or unknown. The pattern simplifies template logic, reduces code duplication, and scales well across both frontend templates and admin functionality. It includes code examples for implementing the core environment config function, usage samples for frontend styling and admin notices, optional helper functions, and advice on handling common environment-type gotchas in WordPress.


***


## 📚 Code Example: Core Environment Function


```php
/**
 * Returns environment-specific configuration array.
 * @return array
 */
function get_environment_config() {
  $env = wp_get_environment_type();

  $config = [
    'production' => [
      'label' => '🟢 Production',
      'shortcodes' => [
        'vidCarousel' => 28739,
        'photoGallery' => 28741,
      ],
      'styles' => [
        'testimonials_bg' => '#ffffff',
        'fonts' => ['Montserrat', 'Roboto', 'Segoe UI'],
      ],
    ],
    'staging' => [
      'label' => '🟠 Staging',
      'shortcodes' => [
        'vidCarousel' => 28739,
        'photoGallery' => 28741,
      ],
      'styles' => [
        'testimonials_bg' => '#fef9e7',
        'fonts' => ['Inter', 'Lato', 'Georgia'],
      ],
    ],
    'local' => [
      'label' => '🟣 Local',
      'shortcodes' => [
        'vidCarousel' => 28739,
        'photoGallery' => 28741,
      ],
      'styles' => [
        'testimonials_bg' => '#dff0d8',
        'fonts' => ['Comic Sans MS', 'Arial'],
      ],
    ],
  ];

  $default = [
    'label' => '🤷 Unknown Environment',
    'shortcodes' => [
      'vidCarousel' => 28739,
      'photoGallery' => 28741,
    ],
    'styles' => [
      'testimonials_bg' => '#dddddd',
      'fonts' => ['System UI'],
    ],
  ];

  return $config[$env] ?? $default;
}
```


***


## 💡 Usage Examples


### Frontend Styling: Testimonials Background


```php
$config = get_environment_config();
$bg_color = $config['styles']['testimonials_bg'];
?>

<section style="background-color: <?php echo esc_attr($bg_color); ?>;">
  <h2>What People Are Saying</h2>
</section>
```


***


### Frontend Styling: Font Stack for About Page


```php
$config = get_environment_config();
$fonts = implode(', ', $config['styles']['fonts']);
?>

<style>
  body {
    font-family: <?php echo esc_attr($fonts); ?>;
  }
</style>
```


***


### Admin Notice: Display Current Environment


```php
add_action('admin_notices', function () {
  if (!current_user_can('manage_options')) return;

  $config = get_environment_config();
  echo '<div class="notice notice-info"><p>Environment: ' . esc_html($config['label']) . '</p></div>';
});
```


***


## 🧰 Optional Helper Functions


```php
function get_env_label() {
  return get_environment_config()['label'];
}

function get_env_font_stack() {
  return get_environment_config()['styles']['fonts'];
}
```


***


## ⚠️ Gotcha & Caveats: Proper Handling of `WP_ENVIRONMENT_TYPE`


- WordPress recognizes only four valid `WP_ENVIRONMENT_TYPE` values: `production`, `staging`, `development`, and `local`.

- Setting `WP_ENVIRONMENT_TYPE` to an unsupported value causes `wp_get_environment_type()` to default silently to `production`, which can lead to confusion if expecting an "unknown" or custom environment.

- Not including a `'development'` key in your config array can cause unexpected fallback to the "unknown" default, even if WordPress identifies the environment as `development`.

- To avoid issues:

  - Explicitly add a `'development'` config key.

  - Consider manual validation of `WP_ENVIRONMENT_TYPE` by checking the constant before relying on `wp_get_environment_type()`, to detect unsupported values and return an accurate "Unknown Environment" state.

- Example snippet for manual detection:

```php
$defined_env = defined('WP_ENVIRONMENT_TYPE') ? WP_ENVIRONMENT_TYPE : null;
$allowed_envs = ['production', 'staging', 'development', 'local'];

if ($defined_env && !in_array($defined_env, $allowed_envs, true)) {
  // handle unknown environment
}
```

This approach improves debugging clarity and ensures reliable environment-specific behavior.



---

<!-- 📚 References (Optional) -->

## 📚 References / See Also

### Environment Configuration & Setup Guides  
- [Managing Environment Based Configurations with WordPress - DigitalPolygon](https://www.digitalpolygon.com/blog/managing-environment-based-configurations-wordpress)  
- [Configure WordPress for Multiple Environments - JonSuh](https://jonsuh.com/blog/configure-wordpress-for-multiple-environments/)  
- [Use WP_ENVIRONMENT_TYPE Constant - ScanFully](https://scanfully.com/docs/wordpress-health/use-wp_environment_type-constant-to-code-for-different-environments/)  
- [Environment-Specific Configuration for WordPress Sites - Pantheon](https://docs.pantheon.io/guides/environment-configuration/environment-specific-config)  
- [Setting Up Your Local Development Environment for WordPress - WordPress.com Blog](https://wordpress.com/blog/2022/11/14/setting-up-your-local-development-environment-for-wordpress/)  
- [WordPress Environment Types - Pressable](https://pressable.com/knowledgebase/wordpress-environment-types/)  
- [Setting Up a WordPress Test Environment with WP-ENV - Adata Systems](https://adatosystems.com/2023/12/26/setting-up-a-wordpress-test-environment-with-wp-env/)  

### wp-config.php & Core Configuration  
- [Developer's Advanced Guide to the wp-config File - DeliciousBrains](https://deliciousbrains.com/developers-guide-to-wpconfig/)  
- [Using Environment Variables in wp-config - Stack Overflow](https://stackoverflow.com/questions/9300950/using-environment-variables-in-wordpress-wp-config)  
- [WordPress Codex: Editing wp-config.php - Developer Reference](https://developer.wordpress.org/advanced-administration/wordpress/wp-config/)  

### Best Development Practices & Deployment  
- [WordPress Local Development Environment - Delicious Brains](https://deliciousbrains.com/wordpress-local-development-environment/)  
- [Deploying WordPress - Beanstalk Guides](http://guides.beanstalkapp.com/deployments/deploying-wordpress.html)  
- [WordPress Developer Best Practices - Pantheon Docs](https://docs.pantheon.io/guides/wordpress-developer/wordpress-best-practices)  
- [WordPress Development Best Practices - WP Engine](https://wpengine.com/resources/developer-best-practices/)  
- [Infrastructure Best Practices for WordPress - Manual Labor](https://www.manual-labor.com/posts/6-infrastructure-best-practices-for-wordpress)  
- [WordPress Best Practices - StellarWP](https://stellarwp.com/wordpress-best-practices/)  
- [Best Practices for Deploying WordPress Themes - Reddit r/ProWordPress](https://www.reddit.com/r/ProWordPress/comments/1e68oa6/best_practices_for_deploying_a_wordpress_theme/)  
- [Handling WordPress Environments & Deployments - Reddit r/ProWordPress](https://www.reddit.com/r/ProWordPress/comments/17sbtxu/how_do_you_handle_environments_and_deployments/)  
- [WordPress Development Best Practices - Advanced Custom Fields Blog](https://www.advancedcustomfields.com/blog/wordpress-development-best-practices/)  



---

## ✅ Revision History


| Version | Date       | Author           | Changes Made                                           |
| ------- | ---------- | ---------------- | ------------------------------------------------------ |
| 1.00    | 2025-09-23 | Eric L. Hepperle | Initial draft created as KB article clone of [tmpl].md |

---
