<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Create similar formatted kb for new content:

Perfect — you’ve summarized the issue very clearly. You have a Bootstrap grid mismatch (col-md-4 vs col-md-3) between initially rendered posts and posts loaded dynamically via AJAX. The cause is that your AJAX handler hardcodes or inconsistently defines the column classes instead of inheriting them from the page where the Load More button was clicked.
Here’s the clean, maintainable pattern to fix it so both frontend (initial render) and backend (AJAX response) share the exact same column configuration.

✅ Overall Strategy
Output the chosen column classes (the same \$template_args['cols'] used in elsm_render_loop()) as data- attributes on the Load More button.
Have JS pick those up and send them back to the AJAX handler (elsm_load_more_posts) with every request.
Simplify your PHP handler so it always uses the column classes received from JS instead of any hardcoded fallback logic.
Ensure each page type (homepage, archive, etc.) can define its own \$template_args['cols'] cleanly and those persist through AJAX.

🧩 Step 1: Add data-cols-* attributes to the Load More button
In your elsm_render_loop() (or wherever you output the Load More button), add these attributes dynamically:

<?php if ($template_args['pagination'] === 'more'): ?>
<button 
    id="load-more"
    class="btn btn-primary load-more"
    data-page="1"
    data-max="<?php echo esc_attr($query->max_num_pages); ?>"
    data-post-type="<?php echo esc_attr($post_args['post_type']); ?>"
    data-posts-per-page="<?php echo esc_attr($post_args['posts_per_page']); ?>"
    data-cols-xs="<?php echo esc_attr($template_args['cols']['xs'] ?? ''); ?>"
    data-cols-sm="<?php echo esc_attr($template_args['cols']['sm'] ?? ''); ?>"
    data-cols-md="<?php echo esc_attr($template_args['cols']['md'] ?? ''); ?>"
    data-cols-lg="<?php echo esc_attr($template_args['cols']['lg'] ?? ''); ?>"
    data-cols-xl="<?php echo esc_attr($template_args['cols']['xl'] ?? ''); ?>"
    data-cols-xxl="<?php echo esc_attr($template_args['cols']['xxl'] ?? ''); ?>"
  >
<?php echo esc_html($template_args['load_more_text'] ?? 'Load More'); ?>
</button>

<?php endif; ?>
That guarantees the frontend knows exactly what column classes the initial render used.

🧠 Step 2: Update load-more.js to read \& send all column classes
Replace your current subset of column-related data attributes with a complete set, for consistency:
jQuery(document).ready(function(\$){
\$('\#load-more').on('click', function(){
var button = \$(this),
page = parseInt(button.data('page')) + 1,
max = button.data('max'),
postType = button.data('post-type') || 'videos',
taxonomy = button.data('taxonomy') || '',
terms = button.data('tax-terms') || '',
postsPerPage = button.data('posts-per-page') || 12;

    // Read all Bootstrap breakpoint column classes
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
        taxonomy: taxonomy,
        terms: terms,
        initial_posts: postsPerPage,
        nonce: loadmore_params.nonce,
        cols: cols // send entire object
      },
      success: function(response){
        if (response.success && response.data.posts.trim() !== '') {
          var postsContainer = button.closest('.loop-wrapper').find('.posts-row');
          postsContainer.append(response.data.posts);
          button.data('page', page);
          if (page >= max) button.remove();
          else button.text(button.attr('data-original-text') || 'Load More').prop('disabled', false);
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

🧰 Step 3: Simplify elsm_load_more_posts() PHP handler
Now that the JS sends the entire cols array, your PHP doesn’t need any hardcoded or partial logic.
function elsm_load_more_posts() {
check_ajax_referer('load_more_nonce', 'nonce');

$page = intval($_POST['page'] ?? 1);
$post_type = sanitize_text_field($_POST['post_type'] ?? 'videos');
$initial_posts = intval($_POST['initial_posts'] ?? 12);

$cols = isset($_POST['cols']) \&\& is_array(\$_POST['cols'])
? array_map('sanitize_text_field', \$_POST['cols'])
: [];

$posts_per_page = ($post_type === 'testimonial') ? 20 : 12;
\$offset = $initial_posts + (($page - 2) * \$posts_per_page);

\$args = [
'post_type'      => \$post_type,
'posts_per_page' => \$posts_per_page,
'post_status'    => 'publish',
'orderby'        => 'date',
'order'          => 'DESC',
'offset'         => \$offset,
];

if (!empty($_POST['taxonomy']) && !empty($_POST['terms'])) {
$args['tax_query'] = [[
      'taxonomy' => sanitize_text_field($_POST['taxonomy']),
'field'    => 'slug',
'terms'    => array_map('sanitize_text_field', explode(',', \$_POST['terms'])),
]];
}

$query = new WP_Query($args);
ob_start();

if ($query->have_posts()) {
    while ($query->have_posts()) {
\$query->the_post();
get_template_part('template-parts/loop-item/card-vid', null, ['cols' => \$cols]);
}
}

\$output = ob_get_clean();
wp_reset_postdata();

if (\$output) wp_send_json_success(['posts' => \$output]);
else wp_send_json_error();
}

🎯 Step 4: Consistent per-page configuration
Now each page (homepage, archive, taxonomy, etc.) can simply define its own \$template_args['cols'] in the elsm_render_loop() call:
Homepage — 4-column layout:
['cols'=>['xs'=>'','sm'=>'col-sm-6','md'=>'col-md-3','lg'=>'col-lg-3']]

Archive — 3-column layout:
['cols'=>['xs'=>'','sm'=>'col-sm-6','md'=>'col-md-4','lg'=>'col-lg-4']]

These automatically get embedded in the Load More button, passed through JS, and respected by AJAX.

✅ Result
Same Bootstrap grid classes on first render and AJAX-loaded posts
Different pages can have different grid definitions without breaking
No more col-md-4 vs col-md-3 mismatches
Cleaner separation of concerns:
Page decides layout
AJAX handler just respects what’s passed

Would you like me to show you a compact example of how the rendered button HTML + JS + AJAX output would look end-to-end (for one page) to confirm everything wires up correctly?

---

<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">
<!-- 🖼️ Site Logo -->
!Site Logo{height=32}

<!-- 📝 Title -->

# HOW-TO: 📘 Fix WordPress Bootstrap Grid Mismatch in AJAX “Load More” Posts

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
- Responsive design
- Template parts

</section>

***

## 📑 Table of Contents

<details>
<summary>Expand Table of Contents</summary>

- [📌 Overview](#-overview)
- [✅ Overall Strategy](#-overall-strategy)
- [🧩 Step 1: Output Column Data Attributes](#-step-1-output-column-data-attributes)
- [🧠 Step 2: Update JS to Send Column Config](#-step-2-update-js-to-send-column-config)
- [🧰 Step 3: Simplify PHP Handler Logic](#-step-3-simplify-php-handler-logic)
- [🎯 Step 4: Consistent Per-Page Configuration](#-step-4-consistent-per-page-configuration)
- [💡 Result](#-result)
- [📚 References / See Also](#-references--see-also)
- [✅ Revision History](#-revision-history)

</details>

***

## 📌 Overview

A subtle Bootstrap grid mismatch can cause inconsistencies between the initial server-rendered posts and those loaded via AJAX in a WordPress “Load More” implementation. The most common symptom is inconsistent column layouts, such as `col-md-4` on the initial loop and `col-md-3` after loading more posts.

This happens when your AJAX handler uses different or hardcoded column classes instead of inheriting the same configuration used for the initial render.

This guide explains a clean, maintainable fix so both front-end and back-end share identical layout definitions.

***

## ✅ Overall Strategy

- Embed the current layout’s column class configuration (the same `$template_args['cols']` array) as `data-*` attributes on the “Load More” button.
- Let JavaScript read and send those attributes with each AJAX call.
- Update your PHP AJAX handler so it relies entirely on the data received from the request instead of hardcoded fallback logic.
- Each page type defines its own `$template_args['cols']`, ensuring layout persistence across AJAX loads.

***

## 🧩 Step 1: Output Column Data Attributes

Add responsive column data attributes to the Load More button in your template generator function, such as `elsm_render_loop()`:

```php
<?php if ($template_args['pagination'] === 'more'): ?>
  <button 
    id="load-more"
    class="btn btn-primary load-more"
    data-page="1"
    data-max="<?php echo esc_attr($query->max_num_pages); ?>"
    data-post-type="<?php echo esc_attr($post_args['post_type']); ?>"
    data-posts-per-page="<?php echo esc_attr($post_args['posts_per_page']); ?>"
    data-cols-xs="<?php echo esc_attr($template_args['cols']['xs'] ?? ''); ?>"
    data-cols-sm="<?php echo esc_attr($template_args['cols']['sm'] ?? ''); ?>"
    data-cols-md="<?php echo esc_attr($template_args['cols']['md'] ?? ''); ?>"
    data-cols-lg="<?php echo esc_attr($template_args['cols']['lg'] ?? ''); ?>"
    data-cols-xl="<?php echo esc_attr($template_args['cols']['xl'] ?? ''); ?>"
    data-cols-xxl="<?php echo esc_attr($template_args['cols']['xxl'] ?? ''); ?>"
  >
    <?php echo esc_html($template_args['load_more_text'] ?? 'Load More'); ?>
  </button>
<?php endif; ?>
```

This ensures each page’s layout configuration passes to JavaScript automatically.

***

## 🧠 Step 2: Update JS to Send Column Config

Modify your `load-more.js` so that it reads all Bootstrap column classes and passes them in the AJAX request.

```js
jQuery(document).ready(function($){
  $('#load-more').on('click', function(){
    var button = $(this),
        page = parseInt(button.data('page')) + 1,
        max = button.data('max'),
        postType = button.data('post-type') || 'videos',
        taxonomy = button.data('taxonomy') || '',
        terms = button.data('tax-terms') || '',
        postsPerPage = button.data('posts-per-page') || 12;

    // Collect all column classes
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
        taxonomy: taxonomy,
        terms: terms,
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
          else button.text(button.attr('data-original-text') || 'Load More').prop('disabled', false);
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

This guarantees consistent column behavior across all AJAX responses.

***

## 🧰 Step 3: Simplify PHP Handler Logic

Since JS now sends the full column configuration, PHP can avoid redundant definitions and simply pass columns to the template.

```php
function elsm_load_more_posts() {
  check_ajax_referer('load_more_nonce', 'nonce');

  $page = intval($_POST['page'] ?? 1);
  $post_type = sanitize_text_field($_POST['post_type'] ?? 'videos');
  $initial_posts = intval($_POST['initial_posts'] ?? 12);

  $cols = isset($_POST['cols']) && is_array($_POST['cols'])
    ? array_map('sanitize_text_field', $_POST['cols'])
    : [];

  $posts_per_page = ($post_type === 'testimonial') ? 20 : 12;
  $offset = $initial_posts + (($page - 2) * $posts_per_page);

  $args = [
    'post_type'      => $post_type,
    'posts_per_page' => $posts_per_page,
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'order'          => 'DESC',
    'offset'         => $offset,
  ];

  if (!empty($_POST['taxonomy']) && !empty($_POST['terms'])) {
    $args['tax_query'] = [[
      'taxonomy' => sanitize_text_field($_POST['taxonomy']),
      'field'    => 'slug',
      'terms'    => array_map('sanitize_text_field', explode(',', $_POST['terms'])),
    ]];
  }

  $query = new WP_Query($args);
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
```


***

## 🎯 Step 4: Consistent Per-Page Configuration

Each page type defines its grid independently, and that choice automatically cascades into AJAX-loaded content.

**Homepage (4-column layout):**

```php
['cols'=>['xs'=>'','sm'=>'col-sm-6','md'=>'col-md-3','lg'=>'col-lg-3']]
```

**Archive page (3-column layout):**

```php
['cols'=>['xs'=>'','sm'=>'col-sm-6','md'=>'col-md-4','lg'=>'col-lg-4']]
```

These definitions persist regardless of AJAX calls, ensuring perfect visual continuity.

***

## 💡 Result

- Identical grid system between initial and dynamically loaded posts
- Different pages can reuse this setup with zero code duplication
- Eliminates inconsistencies like `col-md-3` vs `col-md-4` after loading more
- Cleaner architecture where the frontend defines layout while AJAX respects configuration

***

## 📚 References / See Also

- [WordPress Developer Handbook: Enabling AJAX](https://developer.wordpress.org/plugins/javascript/enabling-ajax/)
- [Bootstrap Grid System Documentation](https://getbootstrap.com/docs/5.3/layout/grid/)
- [WP_Query Class Reference](https://developer.wordpress.org/reference/classes/wp_query/)
- [jQuery AJAX Documentation](https://api.jquery.com/jquery.ajax/)

***

## ✅ Revision History

| Version | Date | Author | Changes Made |
| :-- | :-- | :-- | :-- |
| 1.00 | 2025-10-27 | Eric L. Hepperle | Initial draft for Bootstrap column consistency |


***

Would you like an end-to-end working example (HTML + JS + AJAX output) to confirm alignment visually?

