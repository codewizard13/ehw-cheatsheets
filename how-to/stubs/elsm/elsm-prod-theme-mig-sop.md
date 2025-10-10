### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/19/25


## CONTENT_BELOW: ##

---






Here is your **updated SOP**, incorporating the verified migration steps from your work log. I’ve clearly marked all new sections/updates with `✅` for easy identification.

---

# ElijahStreams PROD Theme Migration SOP (Updated)

## ✅ **Preliminary Steps**

* On Prod: disable plugin `ELSM Site Plugin`
* Upload & activate a **production-ready** version of the custom theme: elijah-theme
* ✅ **Back up PROD** before starting (via Plesk or UpdraftPlus plugin)

---

## 🔌 Plugins & Modules

### **🧩 LightStart (Maintenance Mode)**

* Add and enable maintenance mode – allows previewing the backend while maintenance message displays on the front end (Plesk maintenance mode doesn’t allow backend preview!)
* ✅ If Elementor was used for the maintenance page, install an alternate builder (e.g., Beaver Builder) and rebuild the page in it.

### 🍔 Max Mega Menu

(Same as original – no changes)

### **🧩 Elementor**

* Disable Elementor to prevent conflicts and layout breakage.
* ✅ Move Elementor/Pro folders into `plugins/_inactive` via Plesk (alternative to WP Admin).

### **🧩 Advanced Custom Fields (ACF)**

* After theme import, reset permalinks to prevent archive pages from breaking.
* ✅ Be aware that some ACF taxonomies (e.g., secondary roles) may require manual resaving.

---

## 🗂️ Pages

### 👤 About Page

* Set featured image to "Steve Derene Red Shirt".
* Replace all Elementor content with specified content.
* ✅ Confirm post content is cleared before replacing.

### 🎧 Podcast Links Page

* ✅ Set featured image.
* ✅ Clear post content and replace with new content.

### 📝 Testimonials Page

* Assign correct template.
* ✅ Clear post\_content before assigning template.

### 💬 View All Testimonials Page

(Same as original)

### 💧 Wells Page

✅ **NEW STEPS** added to reinforce correct shortcodes and post-migration edits:

* ✅ Update WP Carousel and FooGallery shortcode IDs in `page-wells.php`
* ✅ Confirm WP Carousel ID: `[sp_wpcarousel id="28739"]`
* ✅ Confirm FooGallery ID: `[foogallery id="28741"]`
* ✅ Use Theme File Editor to update the IDs

---

### 🔍 Advanced Search Page

(Same as original)

### 🎟️ Events Page

* ✅ Clear Elementor post content
* ✅ Assign template: “Events Archive”

---

## 🧩 Sidebars & Widgets

* ✅ After theme activation, manually activate each sidebar by adding a `Custom HTML` widget with:

```html
<div class="d-none"></div>
```

* ✅ For clarity, this should still be added even if it seems unnecessary.

---

## 🛠️ General Tasks

* ✅ Disable WP\_DEBUG in `wp-config.php`:

Replace:

```php
define('WP_DEBUG', true);
// other debug code...
```

With:

```php
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);
@ini_set('display_errors', 0);
```

* ✅ Delete any existing `debug.log` file in `wp-content/`.

* ✅ Confirm that site is functioning without debug messages.

---

## ✅ Final Migration Steps (NEW SECTION)

### 🎯 Deployment Finalization

* ✅ Confirm the following:

  * Theme uploaded and activated (`elijah-theme 3.03`)
  * Menus configured via Appearance > Menus > Manage Locations
  * Sidebars activated
  * All key page templates assigned
  * Shortcodes updated on Wells page
  * Maintenance page rebuilt (if needed)
  * Elementor disabled to avoid conflicts
  * ✅ PROD UpdraftPlus backup created before and after migration
  * ✅ WP\_DEBUG confirmed disabled
  * ✅ Announced migration start and end in Teams chat

---

## ⚠️ Gotchas & Notes

* ✅ Elementor-based maintenance pages will break if Elementor is deactivated — rebuild with alternate page builder.
* ✅ Certain features (like secondary ACF taxonomies) may not render until the posts are manually resaved.
* ✅ If plugin-based shortcodes or galleries appear broken, double-check the shortcode IDs were updated in the template files after import.

---

## ✅ Summary of Changes & Insertions

1. **Backup Workflow Added**

   * Emphasized use of UpdraftPlus before and after deployment
   * Mentioned Plesk as initial backup option (failed in case study)

2. **Maintenance Mode Fix**

   * Identified that Elementor-made maintenance pages break when Elementor is disabled
   * Added fix via Beaver Builder

3. **Elementor Deactivation Best Practice**

   * Detailed disabling via Plesk file manager for safety

4. **Post-Migration Menu & Sidebar Config**

   * Added instructions to re-assign menus and activate sidebars manually with custom HTML widgets

5. **Page-by-Page Fixes**

   * Verified content updates for About, Podcast Links, Testimonials, Events, and Wells pages
   * Highlighted importance of clearing old content

6. **Shortcodes Fix**

   * Clear steps to update WP Carousel and FooGallery shortcode IDs after deployment

7. **Debug Configuration**

   * Explicit instructions on disabling `WP_DEBUG` and clearing logs

8. **New Finalization Section**

   * Added a clean checklist for confirming all key deployment tasks are complete

Let me know if you'd like this exported as a Markdown, Word doc, or PDF!
