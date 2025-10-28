<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Nice! Incorporate this MVP example also:

Perfect 👌 — let’s walk through a compact, end-to-end example so you can see exactly how everything connects between PHP, JS, and the AJAX response.
We’ll simulate a taxonomy archive page that uses a 3-column layout (col-md-4) for videos.

🧱 1. PHP Template (e.g., arch.php)
This shows how you define the layout and render your loop + Load More button.

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


🧩 2. Rendered HTML Output (simplified)
When the page loads, your elsm_render_loop() produces HTML like this:
<div class="loop-wrapper w-100" data-loop-id="default">
  <div class="posts-row row w-100 g-2">
    ```
    <div class="col-sm-6 col-md-4"><div class="card">…post 1…</div></div>
    ```
    ```
    <div class="col-sm-6 col-md-4"><div class="card">…post 2…</div></div>
    ```
    ```
    <div class="col-sm-6 col-md-4"><div class="card">…post 3…</div></div>
    ```
  </div>

  <button
    id="load-more"
    class="btn btn-primary load-more"
    data-page="1"
    data-max="5"
    data-post-type="videos"
    data-posts-per-page="12"
    data-cols-xs=""
    data-cols-sm="col-sm-6"
    data-cols-md="col-md-4"
    data-cols-lg="col-lg-4"
    data-cols-xl=""
    data-cols-xxl=""
  >
    Load More Videos
  </button>
</div>

Notice the data-cols-* attributes mirror your PHP $template_args['cols'].

⚙️ 3. JavaScript (load-more.js)
When the user clicks Load More, JS reads these data attributes and sends them in the AJAX request.
jQuery(document).ready(function($){
  $('#load-more').on('click', function(){
    var button = $(this),
      page = parseInt(button.data('page')) + 1,
      max = button.data('max'),
      postType = button.data('post-type') || 'videos',
      postsPerPage = button.data('posts-per-page') || 12;

    // Gather all column classes
    var cols = {
      xs: button.data('cols-xs') || '',
      sm: button.data('cols-sm') || '',
      md: button.data('cols-md') || '',
      lg: button.data('cols-lg') || '',
      xl: button.data('cols-xl') || '',
      xxl: button.data('cols-xxl') || ''
    };

    button.text('Loading...').prop('disabled', true);

    $.ajax({
      url: loadmore_params.ajaxurl,
      type: 'POST',
      data: {
        action: 'elsm_load_more_posts',
        page: page,
        post_type: postType,
        initial_posts: postsPerPage,
        nonce: loadmore_params.nonce,
        cols: cols
      },
      success: function(response){
        if (response.success && response.data.posts.trim() !== '') {
          var postsContainer = button.closest('.loop-wrapper').find('.posts-row');
          postsContainer.append(response.data.posts);
          button.data('page', page);
          if (page >= max) button.remove();
          else button.text('Load More Videos').prop('disabled', false);
        } else {
          button.text('No More Posts').prop('disabled', true);
        }
      },
      error: function(){ button.text('Error').prop('disabled', true); }
    });
  });
});


🧠 4. PHP AJAX Handler (elsm_load_more_posts)
Here’s how the backend uses the passed classes to build the new post HTML consistently.
function elsm_load_more_posts() {
  check_ajax_referer('load_more_nonce', 'nonce');

  $page = intval($_POST['page'] ?? 1);
  $post_type = sanitize_text_field($_POST['post_type'] ?? 'videos');
  $initial_posts = intval($_POST['initial_posts'] ?? 12);
  $cols = isset($_POST['cols']) && is_array($_POST['cols'])
    ? array_map('sanitize_text_field', $_POST['cols'])
    : [];

  $posts_per_page = 12;
  $offset = $initial_posts + (($page - 2) * $posts_per_page);

  $query = new WP_Query([
    'post_type' => $post_type,
    'posts_per_page' => $posts_per_page,
    'offset' => $offset,
    'post_status' => 'publish',
    'orderby' => 'date',
    'order' => 'DESC',
  ]);

  ob_start();

  if ($query->have_posts()) {
    while ($query->have_posts()) {
      $query->the_post();
      get_template_part('template-parts/loop-item/card-vid', null, ['cols' => $cols]);
    }
  }

  $output = ob_get_clean();
  wp_reset_postdata();

  if ($output) wp_send_json_success(['posts' => $output]);
  else wp_send_json_error();
}
add_action('wp_ajax_elsm_load_more_posts', 'elsm_load_more_posts');
add_action('wp_ajax_nopriv_elsm_load_more_posts', 'elsm_load_more_posts');


🧩 5. Example AJAX Response (returned HTML snippet)
The server responds with new cards that use the same column classes:
```
<div class="col-sm-6 col-md-4"><div class="card">…post 13…</div></div>
```
```
<div class="col-sm-6 col-md-4"><div class="card">…post 14…</div></div>
```
```
<div class="col-sm-6 col-md-4"><div class="card">…post 15…</div></div>
```

JS appends these to .posts-row, so the layout stays perfectly aligned in your Bootstrap grid — still 3 columns at md+.

✅ Final Outcome
Page Type$cols ConfigGrid ResultAJAX Posts Match?
Homepage
col-md-3
4 columns
✅ Yes
Archive
col-md-4
3 columns
✅ Yes
Testimonials
col-md-6
2 columns
✅ Yes
All consistent. No mismatched columns, no hardcoding in the handler, and full flexibility per page.

Would you like me to show how to adjust your existing template-parts/loop-item/card-vid.php to automatically print the column wrapper (<div class="<?= $cols['md'] ?>">) correctly based on the passed $args['cols'] array?

---

<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">
<!-- 🖼️ Site Logo -->
!Site Logo{height=32}

<!-- 📝 Title -->

# HOW-TO: 📘 Maintain Bootstrap Grid Consistency in WordPress AJAX “Load More” with an End-to-End Example

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
- Bootstrap grid
- PHP
- JavaScript
- Columns
- Archive page
- Responsiveness

</section>

***

## 📑 Table of Contents

<details>
<summary>Expand Table of Contents</summary>

- [📌 Overview](#-overview)
- [🧱 1. PHP Template – archive.php](#-1-php-template--archivephp)
- [🧩 2. Rendered HTML Output](#-2-rendered-html-output)
- [⚙️ 3. JavaScript (load-more.js)](#️-3-javascript-load-morejs)
- [🧠 4. PHP AJAX Handler](#-4-php-ajax-handler)
- [🧩 5. Example AJAX Response](#-5-example-ajax-response)
- [✅ Final Outcome](#-final-outcome)
- [📚 References / See Also](#-references--see-also)
- [✅ Revision History](#-revision-history)

</details>

***

## 📌 Overview

This walkthrough demonstrates a working Minimum Viable Product (MVP) setup that keeps your WordPress AJAX-loaded posts aligned with initial ones in the page’s Bootstrap grid. It resolves the common issue where the first batch of posts uses `col-md-4` but AJAX-loaded posts render with different classes, like `col-md-3`.

The core fix ensures both frontend and backend use the same column configuration (`$template_args['cols']`), sent via `data-cols-*` attributes and respected by both PHP and JS during all requests.

***

## 🧱 1. PHP Template – archive.php

Define your layout in the archive file and render the loop with full Bootstrap class configuration.

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


***

## 🧩 2. Rendered HTML Output

When rendered, your loop produces markup consistent with Bootstrap’s grid.
Each post has its assigned column wrapper, and the “Load More” button includes all necessary data attributes.

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
    data-cols-xs=""
    data-cols-sm="col-sm-6"
    data-cols-md="col-md-4"
    data-cols-lg="col-lg-4"
    data-cols-xl=""
    data-cols-xxl=""
  >
    Load More Videos
  </button>
</div>
```

The `data-cols-*` attributes mirror your `$template_args['cols']` array perfectly.

***

## ⚙️ 3. JavaScript (load-more.js)

This script reads all column attributes, sends them via AJAX, and appends retrieved posts inside `.posts-row`.

```js
jQuery(document).ready(function($){
  $('#load-more').on('click', function(){
    var button = $(this),
      page = parseInt(button.data('page')) + 1,
      max = button.data('max'),
      postType = button.data('post-type') || 'videos',
      postsPerPage = button.data('posts-per-page') || 12;

    // Gather all column classes
    var cols = {
      xs: button.data('cols-xs') || '',
      sm: button.data('cols-sm') || '',
      md: button.data('cols-md') || '',
      lg: button.data('cols-lg') || '',
      xl: button.data('cols-xl') || '',
      xxl: button.data('cols-xxl') || ''
    };

    button.text('Loading...').prop('disabled', true);

    $.ajax({
      url: loadmore_params.ajaxurl,
      type: 'POST',
      data: {
        action: 'elsm_load_more_posts',
        page: page,
        post_type: postType,
        initial_posts: postsPerPage,
        nonce: loadmore_params.nonce,
        cols: cols
      },
      success: function(response){
        if (response.success && response.data.posts.trim() !== '') {
          var postsContainer = button.closest('.loop-wrapper').find('.posts-row');
          postsContainer.append(response.data.posts);
          button.data('page', page);
          if (page >= max) button.remove();
          else button.text('Load More Videos').prop('disabled', false);
        } else {
          button.text('No More Posts').prop('disabled', true);
        }
      },
      error: function(){
        button.text('Error').prop('disabled', true);
      }
    });
  });
});
```

The grid layout stays consistent because the same column configuration is sent back to the PHP side with every AJAX call.

***

## 🧠 4. PHP AJAX Handler

The handler verifies security, retrieves the passed column configuration, and passes it to your template.
Because the data comes from the frontend, no hardcoding is needed.

```php
function elsm_load_more_posts() {
  check_ajax_referer('load_more_nonce', 'nonce');

  $page = intval($_POST['page'] ?? 1);
  $post_type = sanitize_text_field($_POST['post_type'] ?? 'videos');
  $initial_posts = intval($_POST['initial_posts'] ?? 12);

  $cols = isset($_POST['cols']) && is_array($_POST['cols'])
    ? array_map('sanitize_text_field', $_POST['cols'])
    : [];

  $posts_per_page = 12;
  $offset = $initial_posts + (($page - 2) * $posts_per_page);

  $query = new WP_Query([
    'post_type' => $post_type,
    'posts_per_page' => $posts_per_page,
    'offset' => $offset,
    'post_status' => 'publish',
    'orderby' => 'date',
    'order' => 'DESC',
  ]);

  ob_start();

  if ($query->have_posts()) {
    while ($query->have_posts()) {
      $query->the_post();
      get_template_part('template-parts/loop-item/card-vid', null, ['cols' => $cols]);
    }
  }

  $output = ob_get_clean();
  wp_reset_postdata();

  if ($output) wp_send_json_success(['posts' => $output]);
  else wp_send_json_error();
}

add_action('wp_ajax_elsm_load_more_posts', 'elsm_load_more_posts');
add_action('wp_ajax_nopriv_elsm_load_more_posts', 'elsm_load_more_posts');
```


***

## 🧩 5. Example AJAX Response

The AJAX handler outputs posts that precisely match the three-column layout:

```html
<div class="col-sm-6 col-md-4"><div class="card">…post 13…</div></div>
<div class="col-sm-6 col-md-4"><div class="card">…post 14…</div></div>
<div class="col-sm-6 col-md-4"><div class="card">…post 15…</div></div>
```

When appended into `.posts-row`, the grid remains visually seamless across all screen breakpoints.

***

## ✅ Final Outcome

| Page Type | \$cols Config | Grid Result | AJAX Posts Match? |
| :-- | :-- | :-- | :-- |
| Homepage | col-md-3 | 4 columns | ✅ Yes |
| Archive | col-md-4 | 3 columns | ✅ Yes |
| Testimonials | col-md-6 | 2 columns | ✅ Yes |

All layouts remain consistent, with no column mismatches, hardcoding, or loss of responsiveness.

***

## 📚 References / See Also

- [Bootstrap Grid Layout](https://getbootstrap.com/docs/5.3/layout/grid/)
- [WordPress AJAX Developer Guide](https://developer.wordpress.org/plugins/javascript/enabling-ajax/)
- [WP_Query Class Reference](https://developer.wordpress.org/reference/classes/wp_query/)
- [jQuery AJAX Documentation](https://api.jquery.com/jQuery.ajax/)

***

## ✅ Revision History

| Version | Date | Author | Changes Made |
| :-- | :-- | :-- | :-- |
| 1.00 | 2025-10-27 | Eric L. Hepperle | Added full MVP example for consistent Bootstrap grids |


***

Would you like to include a snippet of how to modify your `card-vid.php` partial so it automatically wraps each post in the correct `<div class="{$cols['md']}">` container?

