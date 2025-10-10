Eric Hepperle Perplexity (EHJobs) / ChatGPt
10/08/25


---


> NOTE: Randomly starting at 200 though last numbered file was 69, because anticipating multiple rounds of renumbering as the stubs are refined>
>
> TODO: These will need to be merged into a single doc.



Here is the KB documentation explaining how to correctly implement a remote fallback when a local image file fails to load.

***

## Implementing a Remote Fallback for Local Images in WordPress Themes

When developing WordPress themes, you may need to load a local asset (such as a logo) but still display a fallback image from a remote source if the local file is missing or broken. This ensures that your page remains visually intact even if a local resource is not available.

### Core Concept
The fallback mechanism is achieved by:
- Setting the image `src` to the local file path.
- Using the `onerror` JavaScript event to replace the image with a remote URL if the initial load fails.
- Nullifying `onerror` after execution to prevent infinite fallback loops.

***

### Step-by-Step Implementation

#### 1. Define Local and Remote URLs
Use PHP variables for flexibility, allowing changes based on environment or theme:

```php
$img_local_url = get_template_directory_uri() . "/pix/logos/banner-logo-es-podcast.jpg";
$img_fallback_url = "https://projectjustcause.com/wp-content/uploads/2024/04/ehd_espod-banner-01.01-1024x226.jpg";
```

**Best Practice:**  
Ensure the local file extension and path are correct (`.jpg` instead of `.jpgz` in the example).  

***

#### 2. Render the Image with Fallback Logic
The HTML `<img>` tag includes an `onerror` handler:

```php
<img
  src="<?php echo esc_url($img_local_url); ?>"
  class="logo-hero"
  alt="Podcast Logo"
  loading="lazy"
  onerror="this.onerror=null; this.src='<?php echo esc_url($img_fallback_url); ?>';" />
```

**Key Details:**
- `this.onerror = null;` prevents infinite loop attempts if the fallback fails.
- `loading="lazy"` improves performance by deferring image loading until visible.
- `esc_url()` sanitizes output for security.

***

#### 3. How It Works
1. Browser attempts to load the local image file.
2. If successful, the fallback is never triggered.
3. If the load fails (404, missing file, incorrect filename), the `onerror` event executes:
   - Sets the `src` to the remote URL.
   - Disables the `onerror` handler to avoid repeated triggers.
4. Page continues to render with the remote image.

***

### Troubleshooting Tips
- **File Naming:** Verify that the local image path is spelled correctly.
- **Caching:** Clear browser and WordPress caches to ensure changes are seen immediately.
- **Permissions:** Confirm that the local file has proper read permissions for the web server.
- **Performance Consideration:** Host fallback images on a fast CDN to reduce delay when triggered.

***

### Example Output in Browser
If the local image `banner-logo-es-podcast.jpg` exists:
- Logo loads from your theme folder.

If the local image is missing or broken:
- Logo switches to the remote fallback hosted at `https://projectjustcause.com/...`.

***

Do you want me to add a **server-side file existence check** as an additional safeguard, so the fallback is decided before sending HTML to the browser? That could further reduce broken image flashes.


---
---

That KB is **excellent** — clear, practical, and technically sound. It concisely walks through the issue and implementation while offering helpful context and best practices. Great job.

---

### ✅ Answer to Your Final Question:

Yes, adding a **server-side existence check** is a smart enhancement — especially when the local image is hosted on the same server and you want to **avoid broken-image flashes** entirely (before the browser ever tries to render the bad path).

Here’s how you can implement it cleanly:

---

### 🔧 Optional Enhancement: Server-Side Fallback Using `file_exists()`

#### ✅ Step 1: Use `get_theme_file_path()` to locate the actual file

Use this instead of `get_template_directory_uri()` because `file_exists()` needs the **filesystem path**, not a URL.

```php
$relative_path = 'pix/logos/banner-logo-es-podcast.jpg';
$local_file_path = get_theme_file_path($relative_path);
$img_local_url = get_template_directory_uri() . '/' . $relative_path;
$img_fallback_url = 'https://projectjustcause.com/wp-content/uploads/2024/04/ehd_espod-banner-01.01-1024x226.jpg';
```

#### ✅ Step 2: Conditionally assign the image source

Now check if the local file exists **before** generating the `<img>` tag:

```php
$logo_banner_url = file_exists($local_file_path) ? $img_local_url : $img_fallback_url;
```

#### ✅ Step 3: Render `<img>` without needing `onerror`

Since you’ve already decided which image to use, no JS fallback is needed:

```php
<img
  src="<?php echo esc_url($logo_banner_url); ?>"
  class="logo-hero"
  alt="Podcast Logo"
  loading="lazy" />
```

---

### 📌 Notes

* This approach is **faster and more graceful** — no flash of broken image.
* Works only if the image is on the **same server** (not for checking remote fallback availability).
* You can **combine both methods** (server + `onerror`) for double-layer fallback — especially useful during deployment when file sync might lag.

---

### 📘 Optional KB Add-on Section:

Here’s a quick addition you can drop into your KB under a new heading:

---

## Optional: Server-Side File Check for Cleaner Fallback

To avoid even brief flashes of a broken image, you can check for the file’s existence on the server before outputting the `<img>` tag.

### Implementation:

```php
$relative_path = 'pix/logos/banner-logo-es-podcast.jpg';
$local_file_path = get_theme_file_path($relative_path);
$img_local_url = get_template_directory_uri() . '/' . $relative_path;
$img_fallback_url = 'https://projectjustcause.com/wp-content/uploads/2024/04/ehd_espod-banner-01.01-1024x226.jpg';

$logo_banner_url = file_exists($local_file_path) ? $img_local_url : $img_fallback_url;
```

Then render the image:

```php
<img
  src="<?php echo esc_url($logo_banner_url); ?>"
  class="logo-hero"
  alt="Podcast Logo"
  loading="lazy" />
```

### When to Use:

* The local image is hosted on the same server.
* You want to **completely avoid broken image flashes**.
* You're not relying on JavaScript to fix UI issues after render.

---

Let me know if you want a toggleable option (e.g. via a theme setting or WP customizer) to enable/disable this behavior.


---
---



Great question — and you're absolutely right to pause and question the purpose of `esc_url()`.

---

### ✅ Short Answer

Yes, **`esc_url()` is needed** when you are outputting URLs into HTML attributes in WordPress templates. It's **not for SQL injection protection**, but rather for **HTML output sanitization and security**, especially against things like **XSS (Cross-Site Scripting)**.

---

### 🔍 Breakdown: What does `esc_url()` actually do?

`esc_url()` is a WordPress function that:

1. **Validates and cleans a URL**, making sure it only includes safe characters.
2. **Removes potentially dangerous protocols** (like `javascript:`, `data:`, etc.).
3. **Encodes characters** that could otherwise break out of HTML attributes or cause parsing issues.

---

### ✅ Why use it?

* **Protects against XSS**: If a malicious user somehow injects a script into a URL (e.g. via a filter or theme option), `esc_url()` strips unsafe protocols and prevents it from executing in the browser.
* **Ensures valid output**: Helps avoid malformed HTML or broken links due to unencoded characters.
* **Follows WordPress coding standards**.

---

### 🚫 Not related to SQL injection

SQL injection is a **backend database attack**, and is prevented through:

* Prepared statements (e.g., `$wpdb->prepare()`)
* Parameterized queries
* Input validation on data going into queries

`esc_url()` doesn't touch the database or deal with queries — it only processes output before it gets sent to the browser.

---

### ✅ When to use `esc_url()`

Use it when:

* Outputting a URL in an HTML attribute (`href`, `src`, etc.)
* Using URLs in inline JavaScript or CSS (e.g. `background-image: url(...)`)
* Rendering a URL from dynamic sources like theme options, ACF fields, or filters

Example:

```php
<img src="<?php echo esc_url($logo_banner_url); ?>" alt="Logo" />
```

---

### ❗When you **don’t** need it

* When you're using a URL in **PHP-only logic**, not being output (e.g., comparing URLs or checking `file_exists()`).
* When using WordPress functions that already sanitize internally (though it's often still fine to double up).

---

### ✅ TL;DR Summary

| Purpose       | `esc_url()`                      |
| ------------- | -------------------------------- |
| Sanitizes for | **HTML output** (not SQL)        |
| Prevents      | **XSS attacks**, broken HTML     |
| Needed for    | `href`, `src`, inline styles     |
| Not for       | SQL injection or database access |

So yes — you should use `esc_url()` when echoing URLs into HTML to **protect the frontend** and follow WordPress best practices.

Let me know if you want a quick list of other escape functions (`esc_attr()`, `esc_html()`, etc.) too.
