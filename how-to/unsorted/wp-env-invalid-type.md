<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# HOW-TO: 📘 WP: Support Aliases in WP_ENVIRONMENT_TYPE

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
- [WP_ENVIRONMENT_TYPE](#)
- [Aliases](#)


</section>

---

<!-- 🔍 Content Section Heading -->

## 📌 Overview

This article explains how to handle **unsupported or aliased values** (like `dev`, `testing`) in the `WP_ENVIRONMENT_TYPE` constant, which WordPress does not natively recognize. If `WP_ENVIRONMENT_TYPE` is set to an unknown value, `wp_get_environment_type()` will silently return `'production'`.

To avoid unexpected defaults and ensure consistent environment-based config loading, this guide shows how to manually normalize the constant and map aliases to supported values.

---

## 🧠 Background: Default WP Behavior

WordPress only recognizes **four official environments**:

- `local`
- `development`
- `staging`
- `production`

Any other value (e.g., `dev`, `test`, `sandbox`) causes `wp_get_environment_type()` to default to `'production'`, which may lead to incorrect config being loaded — especially dangerous in automated deployment or local testing.

**Reference:**  
👉 [wp_get_environment_type() – WordPress Developer Docs](https://developer.wordpress.org/reference/functions/wp_get_environment_type/)

---

## 🔧 Solution: Manual Alias Mapping

To ensure aliases like `'dev'` or `'testing'` resolve correctly, you can override the environment type by reading the `WP_ENVIRONMENT_TYPE` constant directly and mapping custom values.

### ✅ Example: Robust Environment Config Function

```php
function get_env_config()
{
  // Step 1: Get raw WP_ENVIRONMENT_TYPE constant
  $raw_env = defined('WP_ENVIRONMENT_TYPE') ? WP_ENVIRONMENT_TYPE : wp_get_environment_type();

  // Step 2: Alias unsupported values to valid ones
  $aliases = [
    'dev' => 'local',
    'development' => 'local',
    'testing' => 'staging', // optional
  ];

  $env = $aliases[$raw_env] ?? $raw_env;

  // Step 3: Define environment config array
  $cfg = [
    'production' => [
      'label' => '🟢 Production',
      'shortcodes' => [...],
      'styles' => [...],
    ],
    'staging' => [
      'label' => '🟠 Staging',
      'shortcodes' => [...],
      'styles' => [...],
    ],
    'local' => [
      'label' => '🟣 Local',
      'shortcodes' => [...],
      'styles' => [...],
    ],
  ];

  // Step 4: Default fallback for unknown environments
  $default = [
    'label' => '🤷 Unknown Environment',
    'shortcodes' => [...],
    'styles' => [...],
  ];

  return $cfg[$env] ?? $default;
}
````

---

## ✅ Supported Aliases Now Work

```php
define('WP_ENVIRONMENT_TYPE', 'dev');         // ✅ resolves to 'local'
define('WP_ENVIRONMENT_TYPE', 'development'); // ✅ resolves to 'local'
define('WP_ENVIRONMENT_TYPE', 'staging');     // ✅ native support
define('WP_ENVIRONMENT_TYPE', 'production');  // ✅ native support
```

---

## 🛡️ Optional: Add Strict Validation

To guard against truly invalid environments, validate `$env` before returning a config:

```php
if (!array_key_exists($env, $cfg)) {
  $env = 'production'; // or fallback to 'default'
}
```

---

<!-- 📚 References (Optional) -->
## 📚 References / See Also


* [wp\_get\_environment\_type() – WordPress Docs](https://developer.wordpress.org/reference/functions/wp_get_environment_type/)
* [Configure WordPress for Multiple Environments – Jon Suh](https://jonsuh.com/blog/configure-wordpress-for-multiple-environments/)
* [Managing Environment-Based Config – DigitalPolygon](https://www.digitalpolygon.com/blog/managing-environment-based-configurations-wordpress)


---

## ✅ Revision History


| Version | Date     | Author           | Changes Made                                           |
| ------- | -------- | ---------------- | ------------------------------------------------------ |
| 1.00    | 2025-09- | Eric L. Hepperle | Initial draft created as KB article clone of [tmpl].md |

---
