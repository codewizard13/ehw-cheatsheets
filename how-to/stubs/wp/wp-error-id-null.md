Eric Hepperle, ChatGPT, 10/06/25


---



You're absolutely right — this `Attempt to read property "ID" on null` error **is misleading** and frustrating, and it's something **many WordPress developers have run into**, especially when building custom themes or templates.

---

### 🔍 What’s Really Happening?

The root cause is **not in `link-template.php` itself**, but in how it's being **called with null or invalid data** from your **theme or plugin code**.

Specifically, functions like:

* `get_permalink( $post )`
* `get_the_permalink()`
* `get_post_field( 'ID' )`

…are internally assuming `$post` is a valid post object. If `$post` is `null`, these functions will try to access `$post->ID`, which causes this PHP warning.

---

### 🔥 Most Common Cause: No Global `$post` Set

You're probably calling something like `get_permalink()` or `get_the_permalink()` outside of **The Loop**, or at a time when **the global `$post` is not set or is null**.

This often happens in:

* `header.php`, `footer.php`, or `sidebar.php` outside the loop
* Custom templates
* AJAX callbacks
* Theme widgets or shortcodes
* Calls made very early in `functions.php` before WordPress has loaded post data

---

### ✅ How to Fix It

Wherever you're calling `get_the_permalink()` or similar:

1. **Make sure you’re inside The Loop**
   If you are outside the loop, explicitly **pass the post object or ID**.

   ```php
   if ( have_posts() ) {
       while ( have_posts() ) {
           the_post();
           echo get_the_permalink(); // This is safe here
       }
   }
   ```

2. **If outside the loop**, do something like:

   ```php
   global $post;

   if ( $post instanceof WP_Post ) {
       echo get_permalink( $post );
   }
   ```

   Or check for `null`:

   ```php
   $permalink = get_permalink();
   if ( $permalink ) {
       echo $permalink;
   }
   ```

3. **If using `get_permalink( $post_id )`** make sure `$post_id` is not null:

   ```php
   if ( $post_id ) {
       echo get_permalink( $post_id );
   }
   ```

---

### 🧪 How to Trace It

Because the error is in `wp-includes/link-template.php`, you need to **look at the stack trace** (enable `WP_DEBUG_BACKTRACE`) or **temporarily add logging** in your theme:

```php
// In wp-config.php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
```

Then add a test in your theme:

```php
if ( ! isset( $post ) || ! is_object( $post ) ) {
    error_log( 'Warning: $post is null or invalid on page: ' . $_SERVER['REQUEST_URI'] );
}
```

---

### 💡 Pro Tip: Don’t Trust `get_the_permalink()` Outside the Loop

Use `get_permalink( $post_id )` with a valid post ID when not inside a post loop. That's the safest and cleanest approach.

---

### 🔁 Final Summary

* You're not alone — this is a **very common** and **confusing** issue.
* The problem is **not in `link-template.php`** but in **how it's being called** with a `null` post.
* Most often, it’s caused by using `get_the_permalink()` when there's no post context.
* Fix it by checking for a valid `$post` object or always passing a post ID directly.

If you want to post the relevant part of your theme code (especially where `get_permalink()` or similar is called), I can point you exactly to where the fix goes.
