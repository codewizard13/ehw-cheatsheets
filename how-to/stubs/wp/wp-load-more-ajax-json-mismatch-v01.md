<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Create similar formatted kb for new content:

Excellent — this helps a lot. You’re very close, but there are a few subtle mismatches between your PHP AJAX handler and your JS file that explain why your “Load More” feature isn’t working correctly.
Let’s walk through the key problems and the fixes 👇

🧩 1. response.success and response.data.posts mismatch
Your PHP function returns this JSON:
wp_send_json(
! empty(\$output)
? ['success' => true, 'posts' => \$output]
: ['success' => false]
);

That means your JSON looks like:

```
{ "success": true, "posts": "<div>…</div>" }
```

But your JS expects:
response.data.posts

That’s wrong — there’s no data key in your JSON.
So this part:
if (response.success \&\& response.data.posts.trim() !== '')

will always fail, because response.data is undefined.
✅ Fix:
Change it to:
if (response.success \&\& response.posts \&\& response.posts.trim() !== '') {
postsContainer.append(response.posts);

⚙️ 2. loadmore_params vs elsm_loadmore
In your PHP, you never defined a JS variable called loadmore_params.
You likely localized it under a different name (e.g. elsm_loadmore).
✅ Fix:
Either change your PHP to:
wp_localize_script('load-more', 'loadmore_params', [
'ajaxurl' => admin_url('admin-ajax.php'),
'nonce'   => wp_create_nonce('load_more_nonce'),
]);

Or change your JS to:
url: elsm_loadmore.ajax_url,
data: {
action: 'elsm_load_more_posts',
nonce: elsm_loadmore.nonce,
...
}

They must match.

🔒 3. Nonce Field Name Mismatch
Your PHP handler checks:
check_ajax_referer('load_more_nonce', 'nonce');

✅ So the JS must send the field as nonce, which you do correctly here:
nonce: loadmore_params.nonce

Keep that name — just ensure loadmore_params actually exists (see point above).

🧮 4. Pagination / Offset Logic Mismatch
Your PHP offset logic:
\$offset = \$initial_posts + ((max(2, \$page) - 2) * \$posts_per_page);

Your JS sends:
initial_posts: postsPerPage,
page: parseInt(button.data('page')) + 1,

So if posts_per_page is 12, and page=1 initially, your offset will be:
12 + ((2 - 2) * 12) = 12

✅ That’s correct — you’ll skip the 12 initially shown posts.
BUT: if you ever vary posts_per_page on the front end or on the server side (videos = 12, testimonial = 20), you might get mismatched offsets.
👉 Best practice: Send the same value you used in WP_Query for posts_per_page inside your PHP output:
data-posts-per-page="<?php echo esc_attr($post_args['posts_per_page']); ?>"

(You already do this 👍)

🧱 5. Static Button ID
You currently have:
\$('\#load-more').on('click', ...)

That only binds to one button and will break if there are multiple loops or AJAX-added buttons.
✅ Use a class selector and event delegation:
\$(document).on('click', '.load-more-btn', function(e) {
e.preventDefault();
const button = \$(this);
...
});

Then make your PHP button:
<button class="load-more-btn"
id="load-more-<?php echo esc_attr($loop_id); ?>"
data-loop-id="<?php echo esc_attr($loop_id); ?>"
...>

This ensures compatibility across multiple loops.

🧩 6. Minor Cleanup \& Improvements
clickCount is global and unused — remove it.
Always re-enable the button with its original text:
button.text(button.attr('data-original-text') || 'Load More').prop('disabled', false);

For debugging, console.table(response) will fail if response isn’t an object with enumerable keys — better use:
console.log('Response:', response);

✅ Recommended Fixed JS (clean \& robust)
Here’s a version that matches your PHP perfectly:
jQuery(document).ready(function(\$) {

\$(document).on('click', '.load-more-btn', function(e) {
e.preventDefault();

    const button = $(this);
    
    // Prevent duplicate load-more if filtered version exists
    if ($('#load-more-filtered').length > 0) {
      console.log('🔵 Cancelled: filtered load-more exists');
      return false;
    }
    
    let page          = parseInt(button.data('page')) + 1;
    const max         = button.data('max');
    const postType    = button.data('post-type') || 'videos';
    const taxonomy    = button.data('taxonomy') || '';
    const terms       = button.data('tax-terms') || '';
    const postsPerPage = button.data('posts-per-page') || 12;
    const colsMd      = button.data('cols-md') || '';
    const colsLg      = button.data('cols-lg') || '';
    
    // Save original button text
    const originalText = button.text();
    button.text('Loading...').prop('disabled', true);
    
    $.ajax({
      url: loadmore_params.ajaxurl, // localized in PHP
      type: 'POST',
      data: {
        action: 'elsm_load_more_posts',
        nonce: loadmore_params.nonce,
        page: page,
        post_type: postType,
        taxonomy: taxonomy,
        terms: terms,
        initial_posts: postsPerPage,
        cols_md: colsMd,
        cols_lg: colsLg
      },
      success: function(response) {
        console.log('Response:', response);
    
        if (response.success && response.posts && response.posts.trim() !== '') {
          // Find the posts container
          let postsContainer = button.closest('.loop-wrapper').find('.posts-row');
          if (!postsContainer.length) postsContainer = $('.posts-row').first();
    
          postsContainer.append(response.posts);
          button.data('page', page);
    
          if (page >= max) {
            button.remove();
          } else {
            button.text(originalText).prop('disabled', false);
          }
        } else {
          button.text('No More Posts').prop('disabled', true);
        }
      },
      error: function(err) {
        console.error('AJAX error:', err);
        button.text('Error').prop('disabled', true);
      }
    });
    });
});

🔧 Next Steps
Update your PHP “Load More” button to use .load-more-btn class.
Localize your JS properly:
wp_localize_script('load-more', 'loadmore_params', [
'ajaxurl' => admin_url('admin-ajax.php'),
'nonce'   => wp_create_nonce('load_more_nonce'),
]);

Replace your JS with the version above.
Test in browser console: confirm the click logs and response shape.

If you’d like, I can also show you how to make this JS reusable across multiple loops (so you can have a “Load More Videos” and “Load More Testimonials” button on the same page).
Would you like me to show that version too?

---

<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">
<!-- 🖼️ Site Logo -->
!Site Logo{height=32}

<!-- 📝 Title -->

# HOW-TO: 📘 Troubleshoot WordPress AJAX “Load More” JSON Mismatch (PHP ↔ JS Sync)

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
- wp_localize_script
- JSON response
- Nonce
- Pagination

</section>

***

## 📑 Table of Contents

<details>
<summary>Expand Table of Contents</summary>

- [📌 Overview](#-overview)  
  - [Key Edge Case Summary](#key-edge-case-summary)
- [🧩 Issue Breakdown & Fixes](#-issue-breakdown--fixes)
  - [1. response.success and response.data.posts mismatch](#1-responsesuccess-and-responsedataposts-mismatch)
  - [2. loadmore_params vs elsm_loadmore variable mismatch](#2-loadmore_params-vs-elsm_loadmore-variable-mismatch)
  - [3. Nonce Field Naming Mismatch](#3-nonce-field-naming-mismatch)
  - [4. Offset and Pagination Inconsistency](#4-offset-and-pagination-inconsistency)
  - [5. Static Button ID Problem](#5-static-button-id-problem)
  - [6. Minor Cleanup & Best Practices](#6-minor-cleanup--best-practices)
- [💻 Corrected JS Implementation](#-corrected-js-implementation)
- [🧱 PHP Localization Example](#-php-localization-example)
- [🧪 Testing & Validation Steps](#-testing--validation-steps)
- [📚 References / See Also](#-references--see-also)
- [✅ Revision History](#-revision-history)

</details>

***

## 📌 Overview

This guide addresses a subtle but common mismatch between PHP AJAX responses and JavaScript expectations in a custom WordPress “Load More” implementation. The root cause lies in inconsistent object keys (`response.posts` vs `response.data.posts`), differing localized variable names (`loadmore_params` vs `elsm_loadmore`), and event binding limitations.

### Key Edge Case Summary

- PHP returned JSON did not include a nested `data` key, while JS expected one.
- Localized script variable name mismatch caused undefined parameters.
- Pagination offset math did not account for differing post counts across loops.
- Static button ID binding prevented multi-loop compatibility.

***

## 🧩 Issue Breakdown \& Fixes

### 1. response.success and response.data.posts mismatch

**Problem:**
PHP returned:

```php
wp_send_json(
  ! empty($output)
    ? ['success' => true, 'posts' => $output]
    : ['success' => false]
);
```

Resulting JSON:

```
`{ "success": true, "posts": "<div>...</div>" }`
```

But JS expected `response.data.posts`, which is undefined since there’s no `data` key.

**Fix:**
Update the check block in your JS:

```js
if (response.success && response.posts && response.posts.trim() !== '') {
  postsContainer.append(response.posts);
}
```


***

### 2. loadmore_params vs elsm_loadmore variable mismatch

**Problem:**
Your PHP script localized AJAX parameters under a different global name (`elsm_loadmore`), but your JS referenced `loadmore_params`.

**Fix Options:**

- Option A – Update PHP to match JS:

```php
wp_localize_script('load-more', 'loadmore_params', [
  'ajaxurl' => admin_url('admin-ajax.php'),
  'nonce'   => wp_create_nonce('load_more_nonce'),
]);
```

- Option B – Update JS to match PHP:

```js
url: elsm_loadmore.ajax_url,
data: {
  action: 'elsm_load_more_posts',
  nonce: elsm_loadmore.nonce,
}
```

They must match exactly. Consistency is key.

***

### 3. Nonce Field Naming Mismatch

**Problem:**
Your PHP uses:

```php
check_ajax_referer('load_more_nonce', 'nonce');
```

This means the JS must send a field named `nonce`, not `security` or anything else.

**Fix:**
Keep using:

```js
nonce: loadmore_params.nonce
```

Just ensure the global object `loadmore_params` exists (created via `wp_localize_script()`).

***

### 4. Offset and Pagination Inconsistency

**Problem:**
Mismatch between your PHP offset math and JavaScript’s increment logic.

PHP side:

```php
$offset = $initial_posts + ((max(2, $page) - 2) * $posts_per_page);
```

JS side:

```js
initial_posts: postsPerPage,
page: parseInt(button.data('page')) + 1,
```

Result: when `posts_per_page` differs across contexts, offsets can misalign.

**Best Practice:**
Include the `posts_per_page` value dynamically via data attributes:

```php
data-posts-per-page="<?php echo esc_attr($post_args['posts_per_page']); ?>"
```

So the JS always sends exactly what the loop used on the server.

***

### 5. Static Button ID Problem

**Problem:**
Using `$('#load-more')` only binds to one element.
If multiple load-more buttons exist, only the first one responds.

**Fix:**
Switch to delegated class event binding:

```js
$(document).on('click', '.load-more-btn', function(e) {
  e.preventDefault();
  const button = $(this);
});
```

In your PHP:

```php
<button class="load-more-btn"
        id="load-more-<?php echo esc_attr($loop_id); ?>"
        data-loop-id="<?php echo esc_attr($loop_id); ?>">
  Load More
</button>
```


***

### 6. Minor Cleanup \& Best Practices

- Remove unused `clickCount` variable.
- Re-enable button with its original text after AJAX completes:

```js
button.text(button.attr('data-original-text') || 'Load More').prop('disabled', false);
```

- Replace `console.table(response)` with `console.log('Response:', response)` to avoid runtime errors on plain objects.

***

## 💻 Corrected JS Implementation

```js
jQuery(document).ready(function($) {

  $(document).on('click', '.load-more-btn', function(e) {
    e.preventDefault();

    const button = $(this);

    // Prevent duplicate load-more click during filtered loads
    if ($('#load-more-filtered').length > 0) {
      console.log('🔵 Cancelled: filtered load-more exists');
      return false;
    }

    let page           = parseInt(button.data('page')) + 1;
    const max          = button.data('max');
    const postType     = button.data('post-type') || 'videos';
    const taxonomy     = button.data('taxonomy') || '';
    const terms        = button.data('tax-terms') || '';
    const postsPerPage = button.data('posts-per-page') || 12;
    const colsMd       = button.data('cols-md') || '';
    const colsLg       = button.data('cols-lg') || '';

    const originalText = button.text();
    button.text('Loading...').prop('disabled', true);

    $.ajax({
      url: loadmore_params.ajaxurl, // must match localized variable
      type: 'POST',
      data: {
        action: 'elsm_load_more_posts',
        nonce: loadmore_params.nonce,
        page: page,
        post_type: postType,
        taxonomy: taxonomy,
        terms: terms,
        initial_posts: postsPerPage,
        cols_md: colsMd,
        cols_lg: colsLg
      },
      success: function(response) {
        console.log('Response:', response);

        if (response.success && response.posts && response.posts.trim() !== '') {
          let postsContainer = button.closest('.loop-wrapper').find('.posts-row');
          if (!postsContainer.length) postsContainer = $('.posts-row').first();

          postsContainer.append(response.posts);
          button.data('page', page);

          if (page >= max) {
            button.remove();
          } else {
            button.text(originalText).prop('disabled', false);
          }
        } else {
          button.text('No More Posts').prop('disabled', true);
        }
      },
      error: function(err) {
        console.error('AJAX error:', err);
        button.text('Error').prop('disabled', true);
      }
    });
  });
});
```


***

## 🧱 PHP Localization Example

```php
wp_localize_script('load-more', 'loadmore_params', [
  'ajaxurl' => admin_url('admin-ajax.php'),
  'nonce'   => wp_create_nonce('load_more_nonce'),
]);
```

This ensures your JS always has the correct `ajaxurl` and `nonce`.

***

## 🧪 Testing \& Validation Steps

- Open Developer Tools → Network tab → confirm `admin-ajax.php` requests fire.
- Check response object shape in the console (`console.log('Response:', response)`).
- Verify that new posts append correctly in `.posts-row`.
- Inspect nonces if you receive “Access denied” errors.
- Try multiple simultaneous loops (videos, testimonials, etc.) to confirm unique button events.

***

## 📚 References / See Also

- [WordPress AJAX Developer Guide](https://developer.wordpress.org/plugins/javascript/enabling-ajax/)
- [jQuery AJAX Method Reference](https://api.jquery.com/jQuery.ajax/)
- [MDN Web Docs: Handling JSON Responses](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
- [WP Query Reference](https://developer.wordpress.org/reference/classes/wp_query/)

***

## ✅ Revision History

| Version | Date | Author | Changes Made |
| :-- | :-- | :-- | :-- |
| 1.00 | 2025-10-27 | Eric L. Hepperle | Full sync fix between PHP + JS JSON structure |


***

Would you like me to show an extended version that supports **multiple loop types** (e.g., “Load More Videos” and “Load More Testimonials” simultaneously)?

