<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# HOW-TO: 📘 WP: Advanced Environment Configuration & Admin Notice

**Version:** 1.0


> Optimized for: VSCode on Windows 11 + Git Bash (SSH)
> 

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-23       |
| **Date Updated**:  | 2025-09-23       |
| **AI Assistance**: | ChatGPT          |


---

<section id="sec-tags">

## Tags:


- [WordPress](#)
- [Environment Configuration](#)
- [Theme Development](#)
- [Admin Notices](#)


</section>



***



## 📌 Overview



This article expands on centralized WordPress environment-based configuration by integrating:

- A `wp-config.php` snippet demonstrating how to set `WP_ENVIRONMENT_TYPE` with supported values including a custom `'testing'` environment.

- An enhanced environment config function in `inc/theme-setup.php` which normalizes aliases (e.g., `'dev'` → `'local'`, `'testing'` → `'staging'`), returning detailed environment settings including shortcode IDs, style options, and admin notice colors.

- An admin notice hooked to `admin_notices` displaying the current environment label, domain, HTTPS status, and active environment constant, styled dynamically per environment, visible only to users with `manage_options` capability.


***


## 🔧 Key Code Snippets


### wp-config.php Snippet (Set Environment Type)


```php
// define( 'WP_ENVIRONMENT_TYPE', 'production' );
// define( 'WP_ENVIRONMENT_TYPE', 'staging' );
define( 'WP_ENVIRONMENT_TYPE', 'testing' );

// define( 'WP_ENVIRONMENT_TYPE', 'local' );
// define( 'WP_ENVIRONMENT_TYPE', 'development' );
// define( 'WP_ENVIRONMENT_TYPE', 'dev' );
// define( 'WP_ENVIRONMENT_TYPE', 'blah' );
// define( 'WP_ENVIRONMENT_TYPE', '' );

/* That's all, stop editing! Happy publishing. */
```


### Environment Config Function (`inc/theme-setup.php`)


```php
function get_env_config() {
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
      'shortcodes' => [
        'vidCarousel' => 28739,
        'photoGallery' => 28741,
      ],
      'styles' => [
        'testimonials_bg' => '#ffffff',
        'fonts' => ['Montserrat', 'Roboto', 'Segoe UI'],
        'admin_notice_bg' => 'palegreen',
        'admin_notice_clr' => '',
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
        'admin_notice_bg' => 'gold',
        'admin_notice_clr' => '',
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
        'admin_notice_bg' => 'rebeccapurple',
        'admin_notice_clr' => 'antiquewhite',
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
      'admin_notice_bg' => '',
      'admin_notice_clr' => '',
    ],
  ];

  return $cfg[$env] ?? $default;
}
```


### Admin Environment Notice Hook


```php
add_action('admin_notices', function () {
  if (!current_user_can('manage_options')) return;

  $domain = wp_parse_url(home_url())['host'];
  $is_https = wp_parse_url(home_url())['scheme'] === 'https' ? true : false;
  $secure_notice = $is_https ? '🔒 Secure (HTTPS)' : '🚫 Not Secure (HTTP)';

  $cfg = get_env_config();

  $notice_style = 'background: ' . $cfg['styles']['admin_notice_bg'] . '; color: ' . $cfg['styles']['admin_notice_clr'];
  echo '<div class="notice notice-info p-2" style="padding: .6rem; ' . esc_attr($notice_style) . '">';
  echo '  <span>Environment: ' . esc_html($cfg['label']) . '</span>';
  echo '  &nbsp;|&nbsp;<span style="font-weight:700">' . esc_html($domain) . '</span>';
  echo '  &nbsp;|&nbsp;<span>' . esc_html($secure_notice) . '</span>';
  echo '  &nbsp;|&nbsp;<span>Environment Type (from wp-config): <strong>' . (defined('WP_ENVIRONMENT_TYPE') ? WP_ENVIRONMENT_TYPE : 'NONE DEFINED') . '</strong></span>';
  echo '</div>';
});
```


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
