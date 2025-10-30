Sure thing — below is a **single, copy-pasteable, long-form Knowledge Base (KB) article** that merges this entire discussion into one complete narrative.
It includes your original context, the PHP and JS examples, the reasoning behind each approach, and the debugging details — all unified into a single markdown document.

---

# 📘 HOW-TO: Maintain Consistent Bootstrap Grid Layouts in WordPress AJAX “Load More” (Complete Guide + Debug Walkthrough)

**Version:** 1.0
**Author:** Eric L. Hepperle
**Date Updated:** 2025-10-28
**AI Assistance:** ChatGPT (GPT-5)

---

## 🧭 Overview

This comprehensive guide walks through how to ensure that **AJAX-loaded posts in WordPress** maintain the same **Bootstrap grid consistency** as the initially rendered posts on a page.

It also includes a complete example implementation using PHP, JavaScript, and WordPress AJAX, then concludes with a detailed debugging session and multiple strategy options for simplifying the setup.

---

## 🧱 1. Core Problem

When using AJAX to load more posts, the first batch of posts might be correctly rendered in a Bootstrap grid such as `col-md-4` (3 columns), but the posts fetched via AJAX may not use the same classes, breaking the layout consistency.

The solution is to make sure both the **PHP template** and the **AJAX handler** know the same column layout configuration.

---

## 🧩 2. PHP Template (archive.php) Example

```php
<?php
// ARCHIVE PAGE — 3-column layout
elsm_render_loop(
  ['post_type' => 'videos', 'posts_per_page' => 12],
  'template-parts/loop-item/card-vid',
  [
    'cols' => [
      'xs'  => '',
      'sm'  => 'col-sm-6',
      'md'  => 'col-md-4',   // 3 columns at md+
      'lg'  => 'col-lg-4',
      'xl'  => '',
      'xxl' => ''
    ],
    'pagination'       => 'more',
    'load_more_text'   => 'Load More Videos',
    'show_result_count'=> false
  ]
);
```

---

## 🧩 3. Rendered HTML Output Example

```html
<div class="loop-wrapper w-100" data-loop-id="default">
  <div class="posts-row row w-100 g-2">
    <div class="col-sm-6 col-md-4"><div class="card">…post 1…</div></div>
    <div class="col-sm-6 col-md-4"><div class="card">…post 2…</div></div>
    <div class="col-sm-6 col-md-4"><div class="card">…post 3…</div></div>
  </div>

  <button
    id="load-more"
    class="btn btn-primary load-more"
    data-page="1"
    data-max="5"
    data-post-type="videos"
    data-posts-per-page="12"
    data-cols='{"xs":"","sm":"col-sm-6","md":"col-md-4","lg":"col-lg-4","xl":"","xxl":""}'
  >
    Load More Videos
  </button>
</div>
```

Notice that now we use **a single JSON-encoded `data-cols` attribute** to define the grid configuration, replacing six separate `data-cols-*` attributes.

---

## ⚙️ 4. JavaScript (load-more.js)

### ✅ Corrected Full Version

```js
jQuery(document).ready(function ($) {
  $('#load-more').on('click', function (e) {
    e.preventDefault();

    console.log('🔵 ORIGINAL LOAD MORE CLICKED');

    // Prevent original load more if filtered load more exists
    if ($('#load-more-filtered').length > 0) {
      console.log('🔵 ORIGINAL LOAD MORE CANCELLED - Filtered load more exists');
      return false;
    }

    // 🔹 Define button reference first
    const button = $(this);

    // 🔹 Parse cols JSON safely
    let cols = {};
    const colsAttr = button.attr('data-cols');
    if (colsAttr) {
      try {
        cols = JSON.parse(colsAttr);
      } catch (e) {
        console.error('Invalid data-cols JSON:', colsAttr, e);
      }
    }

    // 🔹 Gather data attributes
    const page = parseInt(button.data('page')) + 1;
    const max = button.data('max');
    const postType = button.data('post-type') || 'videos';
    const taxonomy = button.data('taxonomy') ?? '';
    const terms = button.data('tax-terms') || '';
    const postsPerPage = button.data('posts-per-page') || 12;

    // 🔹 Store original text for reset
    if (!button.attr('data-original-text')) {
      button.attr('data-original-text', button.text());
    }

    // 🔹 Disable button during request
    button.text('Loading...').prop('disabled', true);

    $.ajax({
      url: loadmore_params.ajaxurl,
      type: 'POST',
      data: {
        action: 'elsm_load_more_posts',
        page: page,
        post_type: postType,
        taxonomy: taxonomy,
        terms: terms,
        initial_posts: postsPerPage,
        cols: cols,
        nonce: loadmore_params.nonce,
      },
      success: function (response) {
        if (response.success && response.data.posts.trim() !== '') {
          console.table(response.data); // Debugging

          // 🔹 Find posts container (multiple fallback selectors)
          let postsContainer = button.closest('.loop-wrapper').find('.posts-row');
          if (!postsContainer.length)
            postsContainer = $('.arch-results-grid .posts-row');
          if (!postsContainer.length)
            postsContainer = $('.posts-row').first();

          postsContainer.append(response.data.posts);
          button.data('page', page);

          console.log(`✅ Loaded page ${page}`);
          console.log('Taxonomy:', taxonomy, 'Terms:', terms);

          // Hide button if last page
          if (page >= max) {
            button.remove();
          } else {
            const originalText = button.attr('data-original-text') || 'Load More';
            button.text(originalText).prop('disabled', false);
          }
        } else {
          button.text('No More Posts').prop('disabled', true);
        }
      },
      error: function () {
        button.text('Error').prop('disabled', true);
      },
    });
  });
});
```

### 🔍 Fix Summary

| Issue                                                  | Fix                                                            |     |         |
| ------------------------------------------------------ | -------------------------------------------------------------- | --- | ------- |
| `Cannot read properties of undefined (reading 'attr')` | Defined `const button = $(this)` **before** reading attributes |     |         |
| Redundant `var cols = cols                             |                                                                | ''` | Removed |
| Safer JSON parsing                                     | Added guard with `if (colsAttr)`                               |     |         |
| Added `preventDefault()`                               | Prevents form submission reloads                               |     |         |

---

## 🧠 5. PHP AJAX Handler

```php
function elsm_load_more_posts() {
  check_ajax_referer('load_more_nonce', 'nonce');

  $page          = intval($_POST['page'] ?? 1);
  $post_type     = sanitize_text_field($_POST['post_type'] ?? 'videos');
  $initial_posts = intval($_POST['initial_posts'] ?? 12);

  // ✅ Simplified: Capture entire cols array at once
  $cols = isset($_POST['cols']) && is_array($_POST['cols'])
    ? array_map('sanitize_text_field', $_POST['cols'])
    : [];

  $posts_per_page = 12;
  if ($post_type === 'testimonial') {
    $posts_per_page = 20;
  }

  $offset = $initial_posts + (($page - 2) * $posts_per_page);

  $args = [
    'post_type'      => $post_type,
    'posts_per_page' => $posts_per_page,
    'offset'         => $offset,
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'order'          => 'DESC',
  ];

  if (!empty($_POST['taxonomy']) && !empty($_POST['terms'])) {
    $args['tax_query'] = [[
      'taxonomy' => sanitize_text_field($_POST['taxonomy']),
      'field'    => 'slug',
      'terms'    => array_map('sanitize_text_field', explode(",", $_POST['terms'])),
    ]];
  }

  error_log('AJAX args: ' . print_r($args, true));
  error_log('AJAX cols: ' . print_r($cols, true));

  // Example post exclusion
  if ($post_type === 'videos') {
    $exclude_vids[] = elsm_get_today_vid_id();
    $args['post__not_in'] = $exclude_vids;
  }

  $query = new WP_Query($args);
  $output = '';

  if ($query->have_posts()) {
    ob_start();
    while ($query->have_posts()) {
      $query->the_post();
      get_template_part('template-parts/loop-item/card-vid', null, ['cols' => $cols]);
    }
    $output = ob_get_clean();
  }

  wp_reset_postdata();

  if ($output) {
    wp_send_json_success(['posts' => $output]);
  } else {
    wp_send_json_error();
  }
}

add_action('wp_ajax_elsm_load_more_posts', 'elsm_load_more_posts');
add_action('wp_ajax_nopriv_elsm_load_more_posts', 'elsm_load_more_posts');
```

---

## 🧭 6. Debugging Session Recap

### Common Console Errors & Fixes

| Error                                                  | Meaning                         | Fix                                                      |
| ------------------------------------------------------ | ------------------------------- | -------------------------------------------------------- |
| `Cannot read properties of undefined (reading 'attr')` | `button` not defined before use | Move `var button = $(this);` above JSON parsing          |
| `.posts-wrapper not found`                             | Container selector mismatch     | Use `button.closest('.loop-wrapper').find('.posts-row')` |
| `Invalid data-cols JSON`                               | Empty or malformed attribute    | Ensure `data-cols="{}"` exists in button HTML            |
| Analytics / 401 / REST errors                          | 3rd-party / local dev issues    | Safe to ignore                                           |

---

## 🧩 7. Alternative Simplification Strategies

### 🪶 Option 1 — Frontend-Only Grid Wrapping

Let PHP return only the post **content**, and handle the column wrapping in JS:

```js
var colClass = 'col-sm-6 col-md-4';
postsContainer.append('<div class="' + colClass + '">' + response.data.posts + '</div>');
```

✅ No need to pass any `cols` data at all.
❌ Slight refactor if your PHP template includes the `.col-*` wrapper.

---

### 🧩 Option 2 — Centralized PHP Grid Configuration

Define a helper function once:

```php
function elsm_get_cols($context = 'default') {
  switch ($context) {
    case 'home': return ['md' => 'col-md-3'];
    case 'archive': return ['md' => 'col-md-4'];
    default: return ['md' => 'col-md-4', 'lg' => 'col-lg-3'];
  }
}
```

Both the initial render and the AJAX handler call the same function, removing any need for data passing.

✅ Keeps logic DRY and markup clean.
❌ Slightly less dynamic.

---

### 💼 Option 3 — Keep JSON Attribute (Current Best Practice)

Use the single `data-cols='{"md":"col-md-4"}'` attribute and parse it in JS.
This is the cleanest version if you want **per-loop flexibility** without hardcoding layouts in PHP.

✅ Most flexible
✅ Scalable and future-proof
❌ Slightly more setup

---

## ⚙️ 8. Key Takeaways

| Concept                         | Explanation                                    |
| :------------------------------ | :--------------------------------------------- |
| **Define `button` before use**  | Prevents undefined errors                      |
| **Use JSON `data-cols`**        | Compact and scalable                           |
| **Send arrays safely via AJAX** | jQuery serializes nested objects automatically |
| **Simplify markup**             | One attribute beats six                        |
| **Choose your peace**           | Either centralized config or JS-only wrapping  |

---

## ✅ Final Outcome

| Page Type    | `$cols` Config | Grid Result | AJAX Posts Match? |
| :----------- | :------------- | :---------- | :---------------- |
| Homepage     | `col-md-3`     | 4 columns   | ✅ Yes             |
| Archive      | `col-md-4`     | 3 columns   | ✅ Yes             |
| Testimonials | `col-md-6`     | 2 columns   | ✅ Yes             |

All AJAX-loaded posts match the original grid exactly.

---

## 📚 References

* [Bootstrap Grid Documentation](https://getbootstrap.com/docs/5.3/layout/grid/)
* [WordPress AJAX Developer Guide](https://developer.wordpress.org/plugins/javascript/enabling-ajax/)
* [WP_Query Reference](https://developer.wordpress.org/reference/classes/wp_query/)
* [jQuery AJAX Docs](https://api.jquery.com/jQuery.ajax/)

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made                                                           |
| :------ | :--------- | :--------------- | :--------------------------------------------------------------------- |
| 1.00    | 2025-10-28 | Eric L. Hepperle | Combined full context, fixed JS logic, unified JSON data-cols handling |

---

**End of Document**
