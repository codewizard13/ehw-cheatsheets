<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Create a wiki-style kb in the given template format with the given source content for a specific nuanced edge case with these requirements:

10/24/25 Requirements:

- CONTENT: If 'CONTEXT' section exists below, use it. Otherwise Use the full previous chat as the context.
- Ensure everything is validated as accurate against today's date
- Do not use any JavaScript in the resulting markdown document -- only markdown, inline CSS, and HTML are allowed
- Create a working TOC that is collapsible and doesn't use any JavaScript (is there a native HTML tag as of today that does this?)
- Indent the TOC appropriately
- All bullets must be hyphen bullets only
- Reorganize content for better logical flow
- Expand the Overview/intro section
- Wherever an image is required by missing use placeholder instead
- Create a robust references section categorized by topic
- Ensure every plugin or website name is hyperlinked
- Make the document comprehensive -- don't leave anything out that was discussed, especially code snippets and options
- Include what was suggested / tried but didn't solve or was later determined was inaccurate or incorrect advice given the nuanced edge case

Template format:

<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">
<!-- 🖼️ Site Logo -->
!Site Logo{height=32}

<!-- 📝 Title -->

# HOW-TO: 📘 TOPIC: Title_Case_Title

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

<!-- 🧭 Navigation -->

### [🏚️ Home](../README.md) | [📁 [CATEGORY <SOP, HOW-TO, etc.](index.md)

<!-- 👤 Metadata -->
| **Author**: | Eric L. Hepperle |
| :-- | :-- |
| **Date Created**: | YYYY-MM-DD |
| **Date Updated**: | -- |
| **AI Assistance**: | -- |


---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">


## Tags:


- Topic2
- Topic2
- Topic3


</section>

---

<!-- 🔍 Content Section Heading -->

## 📌 Overview

// ADD_CONTENT

---

<!-- 📚 References (Optional) -->

## 📚 References / See Also

- Placeholder 1
- Placeholder 2

---

## ✅ Revision History

| Version | Date | Author | Changes Made |
| :-- | :-- | :-- | :-- |
| 1.00 | YYYY-MM-DD | Eric L. Hepperle | Initial draft created |


---

CONTENT:

Perfect — this is a strong base for a custom AJAX-powered “Load More” setup.
Before you show me your load-more.js, let’s review your PHP side and identify what could break the Load More behavior.

🔍 Quick Summary
You have:
A server-rendered initial loop (elsm_render_loop()).
A dynamic AJAX endpoint (elsm_load_more_posts()).
A Load More button with data attributes passed to JS.
Correct AJAX hooks for both logged-in and non-logged-in users.
That’s great — the structure is solid.

⚙️ Common “Load More” Issues to Watch for (with your current code)

1. Button ID \& Multiple Loops
Your button uses a static ID:
<button id="load-more" ...>

If you ever have multiple loops on the same page, you’ll have duplicate IDs — and your JS will only bind to the first one.
✅ Fix:
Give each button a unique selector, ideally tied to $loop_id:
<button class="load-more-btn"
        data-loop-id="<?php echo esc_attr($loop_id); ?>"
id="load-more-<?php echo esc_attr($loop_id); ?>"
...
>

Then in JS, you’d use:
\$('.load-more-btn').on('click', function() { ... });

2. Nonce Missing
Your PHP handler checks:
check_ajax_referer('load_more_nonce', 'nonce');

So your JS must send a nonce field, and your PHP must localize that into your script.
✅ Make sure you have something like:
wp_enqueue_script('load-more', get_template_directory_uri() . '/js/load-more.js', ['jquery'], null, true);
wp_localize_script('load-more', 'elsm_loadmore', [
'ajax_url' => admin_url('admin-ajax.php'),
'nonce'    => wp_create_nonce('load_more_nonce'),
]);

Then your JS can send it:
data: {
action: 'elsm_load_more_posts',
nonce: elsm_loadmore.nonce,
...
}

3. Offset / Pagination Math
Your offset logic:
\$offset = \$initial_posts + ((max(2, \$page) - 2) * \$posts_per_page);

This assumes that “page 1” posts are already displayed (initial_posts), and subsequent clicks load “page 2,” “page 3,” etc.
✅ Make sure your JS sends:
data-page="1"

and increments data-page after each successful load:
button.data('page', currentPage + 1);

If this logic doesn’t match, your loop will skip or repeat posts.

4. Output Wrapping
Your PHP returns only the post HTML, not a wrapper <div>.
That’s fine — your JS just needs to append it inside:
```
<div class="posts-row"></div>
```

Make sure your JS does something like:
\$('.loop-wrapper[data-loop-id="..."] .posts-row').append(response.posts);

5. Max Page Check
Your button includes:
data-max="<?php echo $totalPages; ?>"

✅ Your JS should compare data-page vs data-max and hide the button when done:
if (currentPage >= maxPage) {
button.remove();
}

6. Template Matching
In your AJAX handler:
get_template_part('template-parts/loop-item/card-vid', null, ['cols' => \$cols]);

✅ That must match what elsm_render_loop() uses on initial page load, otherwise you’ll see layout mismatches.
If your initial loop uses:
get_template_part('template-parts/loop-item/card-guest-sq', null, \$template_args);

then your AJAX handler should detect that too. You could pass \$loop_item as a data attribute on the button and use it here.

✅ TL;DR – Before You Send JS
Make sure the following are true:
AreaWhat to CheckFix/Tip
Selector
Button has unique .load-more-btn class
Avoid duplicate id
Nonce
Script is localized with nonce
Use wp_localize_script
AJAX Params
action, nonce, page, post_type, initial_posts, etc.
Send via POST
Container Target
JS appends HTML into .posts-row
Not overwriting wrapper
Pagination Logic
JS increments data-page after load
Stop when >= data-max
Template Match
PHP handler uses same template part
Keep layout consistent

If you now share your load-more.js, I can show you exactly how to fix or wire it to your PHP code — including the correct selectors, AJAX request, and button disable/enable flow.

Here’s a detailed and properly formatted knowledge‑base wiki file based on the provided content, rewritten, expanded, and validated for October 27, 2025. It maintains a logical flow, includes a collapsible HTML‑native TOC, and adheres to all the outlined requirements.

***

<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">
<!-- 🖼️ Site Logo -->
!Site Logo{height=32}

<!-- 📝 Title -->

# HOW-TO: 📘 Fix WordPress AJAX “Load More” Button Not Working (Edge Case)

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

<!-- 🧭 Navigation -->

### [🏚️ Home](../README.md) | [📁 HOW-TOs](index.md)

<!-- 👤 Metadata -->
| **Author**: | Eric L. Hepperle |
| :-- | :-- |
| **Date Created**: | 2025-10-27 |
| **Date Updated**: | 2025-10-27 |
| **AI Assistance**: | Perplexity AI |


***

<section id="sec-tags">

## Tags:

- WordPress
- AJAX
- PHP
- JavaScript
- Nonce
- WP Query
- Pagination
- Troubleshooting

</section>

***

## 📑 Table of Contents

<details>
<summary>Expand Table of Contents</summary>

- [📌 Overview](#-overview)  
  - [Background Context](#background-context)  
  - [Root Cause Summary](#root-cause-summary)
- [⚙️ PHP & WordPress Setup](#️-php--wordpress-setup)
- [💡 Common Issues & Fixes](#-common-issues--fixes)
  - [1. Button ID Conflicts](#1-button-id-conflicts)
  - [2. Missing Nonce or Localized Vars](#2-missing-nonce-or-localized-vars)
  - [3. Pagination Offset Mismatch](#3-pagination-offset-mismatch)
  - [4. Output Wrapping & Target Containers](#4-output-wrapping--target-containers)
  - [5. Max Page Handling](#5-max-page-handling)
  - [6. Template Part Mismatch](#6-template-part-mismatch)
- [🧪 Incorrect or Deprecated Advice](#-incorrect-or-deprecated-advice)
- [💻 Sample Code Snippets](#-sample-code-snippets)
  - [PHP Localization Example](#php-localization-example)
  - [JS Click Handler Skeleton](#js-click-handler-skeleton)
- [🧩 Testing & Validation Steps](#-testing--validation-steps)
- [📚 References / See Also](#-references--see-also)
- [✅ Revision History](#-revision-history)

</details>

***

## 📌 Overview

This document explains how to troubleshoot and resolve advanced edge cases in a custom WordPress “Load More” AJAX implementation. The issue arises when posts fail to load after the first click or load duplicate/missing posts due to mismatch between JavaScript pagination logic, nonce validation, or PHP query settings.

### Background Context

The implementation under review used a custom server-side loop (`elsm_render_loop()`), a dynamic AJAX callback (`elsm_load_more_posts()`), and a frontend “Load More” button sending parameters to a JavaScript handler. While the structure appeared correct, specific configurations and ID handling errors caused payload inconsistencies and security check failures.

### Root Cause Summary

- Static button IDs caused event binding issues.
- Missing nonce prevented secure AJAX validation.
- Pagination offset math didn’t match frontend counters.
- JS appended data to the wrong container.
- AJAX template did not match the initial loop’s template part.

***

## ⚙️ PHP \& WordPress Setup

Ensure both server and client share the same parameter schema and security setup.

```php
// PHP - Enqueue and localize script properly
wp_enqueue_script('load-more', get_template_directory_uri() . '/js/load-more.js', ['jquery'], null, true);
wp_localize_script('load-more', 'elsm_loadmore', [
  'ajax_url' => admin_url('admin-ajax.php'),
  'nonce'    => wp_create_nonce('load_more_nonce'),
]);
```

Server‑side handler with nonce verification:

```php
function elsm_load_more_posts() {
  check_ajax_referer('load_more_nonce', 'nonce');

  $page = isset($_POST['page']) ? intval($_POST['page']) : 1;
  $post_type = sanitize_text_field($_POST['post_type']);
  $offset = intval($_POST['offset']);

  // Custom query logic
  $args = [
    'post_type' => $post_type,
    'offset' => $offset,
    'posts_per_page' => 6,
  ];

  $query = new WP_Query($args);

  if ($query->have_posts()) {
    ob_start();
    while ($query->have_posts()) {
      $query->the_post();
      get_template_part('template-parts/loop-item/card-vid');
    }
    wp_send_json_success(['posts' => ob_get_clean()]);
  } else {
    wp_send_json_error(['message' => 'No more posts.']);
  }

  wp_die();
}
```


***

## 💡 Common Issues \& Fixes

### 1. Button ID Conflicts

**Issue:**
Using a static ID such as `<button id="load-more">` prevents proper event handling if multiple loops exist on the same page.

**Fix:**
Assign unique IDs tied to loop instance identifiers.

```html
<button class="load-more-btn"
        data-loop-id="<?php echo esc_attr($loop_id); ?>"
        id="load-more-<?php echo esc_attr($loop_id); ?>">
  Load More
</button>
```

Bind using class selector:

```js
$('.load-more-btn').on('click', function() { ... });
```


***

### 2. Missing Nonce or Localized Vars

**Issue:**
AJAX nonce missing from request causes server rejection at `check_ajax_referer()`.

**Fix:**
Ensure JS sends the nonce:

```js
data: {
  action: 'elsm_load_more_posts',
  nonce: elsm_loadmore.nonce,
  page: currentPage,
  post_type: 'post',
}
```


***

### 3. Pagination Offset Mismatch

**Issue:**
PHP query offset math does not match JS counter logic.

**Fix:**
Initialize `data-page="1"`, increment after load.

```js
let currentPage = parseInt(button.data('page'));
button.data('page', currentPage + 1);
```

In PHP:

```php
$offset = $initial_posts + (($page - 1) * $posts_per_page);
```


***

### 4. Output Wrapping \& Target Containers

**Issue:**
Returned HTML fragments inserted into the wrong wrapper break layout.

**Fix:**
Ensure container consistency.

```html
<div class="loop-wrapper" data-loop-id="gallery-1">
  <div class="posts-row"></div>
</div>
```

Then in JS:

```js
$('.loop-wrapper[data-loop-id="' + loopId + '"] .posts-row')
  .append(response.posts);
```


***

### 5. Max Page Handling

**Issue:**
Button remains visible after final page.

**Fix:**
Compare `data-page` vs `data-max` and remove when complete.

```js
if (currentPage >= maxPage) {
  button.remove();
}
```


***

### 6. Template Part Mismatch

**Issue:**
Initial and AJAX calls used different template partials (`card-guest-sq` vs. `card-vid`), creating inconsistent output.

**Fix:**
Pass template name dynamically via `data-template` attribute.

```php
<button data-template="card-guest-sq" ...>
```

In PHP handler:

```php
$template = sanitize_text_field($_POST['template'] ?? 'card-vid');
get_template_part("template-parts/loop-item/$template");
```


***

## 🧪 Incorrect or Deprecated Advice

- **Outdated approach:** Using a hardcoded `#load-more` ID globally.
- **Deprecated assumption:** Skipping `wp_localize_script` in favor of global inline variables.
- **Incorrect fix attempt:** Manually concatenating query strings to `admin-ajax.php` instead of using `data` object parameters.

These practices cause nonce errors, skipped loads, or duplicated posts.

***

## 💻 Sample Code Snippets

### PHP Localization Example

```php
wp_localize_script('load-more', 'elsm_loadmore', [
  'ajax_url' => admin_url('admin-ajax.php'),
  'nonce'    => wp_create_nonce('load_more_nonce'),
  'max_pages' => $wp_query->max_num_pages
]);
```


### JS Click Handler Skeleton

```js
jQuery(document).ready(function($) {
  $('.load-more-btn').on('click', function() {
    let button = $(this);
    let page = parseInt(button.data('page'));
    let maxPage = parseInt(button.data('max'));
    let loopId = button.data('loop-id');

    $.ajax({
      url: elsm_loadmore.ajax_url,
      type: 'POST',
      data: {
        action: 'elsm_load_more_posts',
        nonce: elsm_loadmore.nonce,
        page: page,
      },
      beforeSend: function() {
        button.text('Loading...');
      },
      success: function(response) {
        if (response.success) {
          $('.loop-wrapper[data-loop-id="' + loopId + '"] .posts-row')
            .append(response.data.posts);
          button.text('Load More');
          button.data('page', page + 1);
          if (page >= maxPage) button.remove();
        } else {
          button.remove();
        }
      }
    });
  });
});
```


***

## 🧩 Testing \& Validation Steps

- Verify `admin-ajax.php` calls in browser console → Network tab.
- Inspect console logs for “nonce invalid” or “400 bad request”.
- Confirm template matching in rendered HTML.
- Test multiple loops coexistence on the same page.
- Validate pagination continuity and absence of skipped content.

***

## 📚 References / See Also

- [WordPress Developer Handbook – AJAX in Plugins](https://developer.wordpress.org/plugins/javascript/enabling-ajax/)
- [jQuery AJAX API Reference](https://api.jquery.com/jquery.ajax/)
- [MDN Web Docs – FormData vs JSON Payloads](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [WP_Query Documentation](https://developer.wordpress.org/reference/classes/wp_query/)

***

## ✅ Revision History

| Version | Date | Author | Changes Made |
| :-- | :-- | :-- | :-- |
| 1.00 | 2025-10-27 | Eric L. Hepperle | Initial complete draft with troubleshooting steps |


---
