<link rel="stylesheet" href="../_css/main.css">

# WordPress: Enqueue Boostrap CDN with Local Fallback

[🏚️](../README.md) | [WordPress](index.md)


Here’s a step-by-step guide to set up Bootstrap in WordPress using a CDN (Content Delivery Network) with a local fallback, ensuring optimal performance and reliability. This approach uses WordPress’s enqueue system to load Bootstrap’s CSS and JavaScript from a CDN, with fallbacks to local files if the CDN fails. Follow these instructions carefully:

* * *

## Step 1: Download Bootstrap Files for Local Fallback

To ensure your site works even if the CDN is unavailable, you’ll need local copies of Bootstrap’s CSS and JavaScript files.

*   Visit the Bootstrap website: Go to [getbootstrap.com](https://getbootstrap.com/) and download the compiled CSS and JS files for Bootstrap (e.g., version 5.3.0). Alternatively, you can find these files via a CDN provider like jsDelivr and download them directly.
    
*   Extract the files: You’ll need:
    
    *   bootstrap.min.css (the minified CSS file)
        
    *   bootstrap.bundle.min.js (the minified JavaScript file, including Popper.js for components like dropdowns and modals)
        
*   Place the files in your theme:
    
    *   Create a css folder in your WordPress theme directory (e.g., wp-content/themes/your-theme/css/).
        
    *   Create a js folder in your WordPress theme directory (e.g., wp-content/themes/your-theme/js/).
        
    *   Copy bootstrap.min.css into the css folder and bootstrap.bundle.min.js into the js folder.
        
*   Verify paths: Ensure the files are accessible at:
    
    *   wp-content/themes/your-theme/css/bootstrap.min.css
        
    *   wp-content/themes/your-theme/js/bootstrap.min.js
        

* * *

## Step 2: Open Your Theme’s functions.php File

You’ll add all the code to enqueue Bootstrap and set up the fallbacks in your theme’s functions.php file.

*   Locate the file: In your WordPress theme directory (e.g., wp-content/themes/your-theme/), find or create functions.php.
    
*   Open it in a text editor: Use a code editor like VS Code, Sublime Text, or the WordPress theme editor.
    

* * *

## Step 3: Enqueue Bootstrap CSS and JS from a CDN

Add the following code to functions.php to load Bootstrap’s CSS and JavaScript from a CDN (we’ll use jsDelivr as an example) and set up the enqueue structure.

php

    function enqueue_bootstrap() {
        // Enqueue Bootstrap CSS from CDN
        wp_enqueue_style(
            'bootstrap-css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
            array(), // No dependencies
            null // No version number, since it's from a CDN
        );
    
        // Enqueue Bootstrap JS from CDN (in footer for performance)
        wp_enqueue_script(
            'bootstrap-js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
            array(), // No dependencies (Popper.js is included in the bundle)
            null, // No version number
            true // Load in footer
        );
    }
    add_action('wp_enqueue_scripts', 'enqueue_bootstrap');

*   Explanation:
    
    *   wp\_enqueue\_style: Adds the Bootstrap CSS from the CDN to the <head> section.
        
    *   wp\_enqueue\_script: Adds the Bootstrap JS from the CDN, set to load in the footer (true) to improve page load performance.
        
    *   The null version ensures WordPress doesn’t append a version query string, which is unnecessary for CDN files.
        

* * *

## Step 4: Add a Fallback for Bootstrap CSS

Since CSS doesn’t have a built-in way to detect loading failures reliably across all browsers, we’ll use a small JavaScript snippet to check if Bootstrap’s CSS loaded properly. Add this code below the previous function in functions.php:

php

    function add_fallback_script_to_bootstrap_css($html, $handle) {
        if ($handle === 'bootstrap-css') {
            $local_css = get_template_directory_uri() . '/css/bootstrap.min.css';
            $script = "<script>
            (function() {
                var test = document.createElement('div');
                test.className = 'd-none';
                document.body.appendChild(test);
                if (window.getComputedStyle(test).display !== 'none') {
                    var link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = '$local_css';
                    document.head.appendChild(link);
                }
                document.body.removeChild(test);
            })();
            </script>";
            $html .= $script; // Append the script after the <link> tag
        }
        return $html;
    }
    add_filter('style_loader_tag', 'add_fallback_script_to_bootstrap_css', 10, 2);

*   Explanation:
    
    *   Filter: The style\_loader\_tag filter modifies the HTML output of the enqueued CSS <link> tag.
        
    *   Check: The script creates a temporary div with the Bootstrap class d-none (which sets display: none). If the computed style isn’t none, the CSS didn’t load, so it adds the local CSS file.
        
    *   Path: get\_template\_directory\_uri() dynamically generates the URL to your theme’s directory (e.g., http://yoursite.com/wp-content/themes/your-theme/).
        

* * *

## Step 5: Add a Fallback for Bootstrap JS

For the JavaScript, we’ll check if Bootstrap’s global object (bootstrap) is defined and load the local file if it’s not. Modify the enqueue\_bootstrap function to include the fallback:

php

    function enqueue_bootstrap() {
        // Enqueue Bootstrap CSS from CDN
        wp_enqueue_style(
            'bootstrap-css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
            array(),
            null
        );
    
        // Enqueue Bootstrap JS from CDN
        wp_enqueue_script(
            'bootstrap-js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
            array(),
            null,
            true
        );
    
        // Add inline script for JS fallback
        $local_js = get_template_directory_uri() . '/js/bootstrap.min.js';
        wp_add_inline_script(
            'bootstrap-js',
            'if (typeof bootstrap === "undefined") { 
                var script = document.createElement("script"); 
                script.src = "' . $local_js . '"; 
                document.body.appendChild(script); 
            }'
        );
    }
    add_action('wp_enqueue_scripts', 'enqueue_bootstrap');

*   Explanation:
    
    *   wp\_add\_inline\_script: Adds a small inline script after the bootstrap-js script tag.
        
    *   Check: If bootstrap (Bootstrap 5’s global namespace) is undefined, the CDN failed, so it dynamically loads the local JS file.
        
    *   Placement: Since bootstrap-js is enqueued in the footer, the inline script runs after it, ensuring the check happens at the right time.
        

* * *

## Step 6: Combine All Code in functions.php

Here’s the complete code to add to your functions.php file:

php

    <?php
    function enqueue_bootstrap() {
        // Enqueue Bootstrap CSS from CDN
        wp_enqueue_style(
            'bootstrap-css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
            array(),
            null
        );
    
        // Enqueue Bootstrap JS from CDN
        wp_enqueue_script(
            'bootstrap-js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
            array(),
            null,
            true
        );
    
        // Add inline script for JS fallback
        $local_js = get_template_directory_uri() . '/js/bootstrap.min.js';
        wp_add_inline_script(
            'bootstrap-js',
            'if (typeof bootstrap === "undefined") { 
                var script = document.createElement("script"); 
                script.src = "' . $local_js . '"; 
                document.body.appendChild(script); 
            }'
        );
    }
    add_action('wp_enqueue_scripts', 'enqueue_bootstrap');
    
    function add_fallback_script_to_bootstrap_css($html, $handle) {
        if ($handle === 'bootstrap-css') {
            $local_css = get_template_directory_uri() . '/css/bootstrap.min.css';
            $script = "<script>
            (function() {
                var test = document.createElement('div');
                test.className = 'd-none';
                document.body.appendChild(test);
                if (window.getComputedStyle(test).display !== 'none') {
                    var link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = '$local_css';
                    document.head.appendChild(link);
                }
                document.body.removeChild(test);
            })();
            </script>";
            $html .= $script;
        }
        return $html;
    }
    add_filter('style_loader_tag', 'add_fallback_script_to_bootstrap_css', 10, 2);

* * *

## Step 7: Test Your Setup

*   Clear caches: If you’re using a caching plugin (e.g., WP Super Cache), clear it to ensure the new files load.
    
*   Check the site: Visit your WordPress site and inspect the page source (right-click > “View Page Source”):
    
    *   Look for the Bootstrap CSS `<link>` in the `<head>` section.
        
    *   Look for the Bootstrap JS `<script>` and inline fallback script near the end of the `<body>` (before `</body>`).
        
*   Test the fallback:
    
    *   Temporarily change the CDN URLs to invalid ones (e.g., add “x” to the end) and reload the page.
        
    *   Verify that the local CSS and JS files load instead (check the Network tab in your browser’s developer tools).
        

* * *

Performance Benefits

*   CDN Advantage: Using a CDN reduces server load and speeds up load times since files are served from locations closer to the user. Many users may already have Bootstrap cached from the same CDN, further boosting performance.
    
*   Local Fallback: Ensures your site remains functional if the CDN is down, though this is rare with reputable providers like jsDelivr.
    
*   Footer JS: Loading JavaScript in the footer prevents it from blocking page rendering, improving perceived performance.
    

* * *

Optional Enhancements

*   Subresource Integrity (SRI): Add integrity and crossorigin attributes to the CDN files for security. Use the style\_loader\_tag and script\_loader\_tag filters to append these attributes (SRI hashes are available on jsDelivr or Bootstrap’s docs).
    
*   Version Consistency: Ensure the local files match the CDN version (e.g., 5.3.0).
    
*   Minification: The provided files are already minified, but if you use custom versions, minify them to reduce file size.
    

* * *

That’s it! Your WordPress site now uses Bootstrap via a CDN with reliable local fallbacks, balancing performance and dependability.

---


## References

- https://x.com/i/grok?conversation=1894013468333715745