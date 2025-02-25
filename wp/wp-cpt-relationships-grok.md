<link rel="stylesheet" href="../_css/main.css">

# WordPress: Grok's answer to how to set up relationships between two custom post types

[🏚️](../README.md) | [WordPress](index.md)

Grok's answer to how to set up relationships between two custom post types in WordPress:

I'll guide you through creating a WordPress web application with custom post types (CPTs) for movies and actors, including a many-to-many relationship and an AJAX filter. Here's a step-by-step solution:

## 1. Setup Custom Post Types

First, we'll register the CPTs in your theme's functions.php file.

php

    // functions.php
    function register_custom_post_types() {
        // Register Movies CPT
        register_post_type('movie', array(
            'labels' => array(
                'name' => 'Movies',
                'singular_name' => 'Movie',
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'rewrite' => array('slug' => 'movies'),
        ));
    
        // Register Actors CPT
        register_post_type('actor', array(
            'labels' => array(
                'name' => 'Actors',
                'singular_name' => 'Actor',
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'rewrite' => array('slug' => 'actors'),
        ));
    }
    add_action('init', 'register_custom_post_types');

## 2. Create Many-to-Many Relationship

We'll use a custom taxonomy or Advanced Custom Fields (ACF) for the relationship. Here, I'll use ACF for simplicity (you'll need the free ACF plugin installed).

*   Install and activate ACF.
    
*   Create a new field group in ACF:
    
    *   Field Type: Relationship
        
    *   Field Name: movie\_actors
        
    *   Post Type: actor
        
    *   Location: Show this field group if Post Type is equal to movie
        
*   Create another field group:
    
    *   Field Type: Relationship
        
    *   Field Name: actor\_movies
        
    *   Post Type: movie
        
    *   Location: Show this field group if Post Type is equal to actor
        

This establishes a bidirectional many-to-many relationship.

## 3. Frontend Template

Create a custom page template (e.g., page-movies.php) to display movies with the filter sidebar.

php

    // page-movies.php
    <?php
    /*
    Template Name: Movies Page
    */
    get_header();
    ?>
    
    <div class="movies-container">
        <div class="sidebar">
            <h3>Filter by Actor</h3>
            <input type="text" id="actor-filter" placeholder="Search actors...">
            <ul id="actor-list">
                <?php
                $actors = get_posts(array(
                    'post_type' => 'actor',
                    'posts_per_page' => -1,
                    'orderby' => 'title',
                    'order' => 'ASC',
                ));
                foreach ($actors as $actor) {
                    echo '<li data-actor-id="' . $actor->ID . '">' . get_the_title($actor->ID) . '</li>';
                }
                ?>
            </ul>
        </div>
    
        <div class="movies-list" id="movies-list">
            <?php
            $movies = new WP_Query(array(
                'post_type' => 'movie',
                'posts_per_page' => -1,
            ));
            if ($movies->have_posts()) {
                while ($movies->have_posts()) {
                    $movies->the_post();
                    ?>
                    <div class="movie-item" data-actors="<?php echo esc_attr(implode(',', get_field('movie_actors', get_the_ID(), false))); ?>">
                        <h2><?php the_title(); ?></h2>
                        <?php the_content(); ?>
                    </div>
                    <?php
                }
                wp_reset_postdata();
            }
            ?>
        </div>
    </div>
    
    <?php get_footer(); ?>

## 4. Add CSS

Add some basic styling in your theme’s style.css:

css

    .movies-container {
        display: flex;
        gap: 20px;
    }
    .sidebar {
        width: 30%;
    }
    #actor-list {
        list-style: none;
        padding: 0;
    }
    #actor-list li {
        cursor: pointer;
        padding: 5px;
    }
    #actor-list li:hover {
        background: #f0f0f0;
    }
    .movies-list {
        width: 70%;
    }
    .movie-item {
        margin-bottom: 20px;
    }
    .hidden {
        display: none;
    }

## 5. AJAX Filtering

Enqueue scripts and handle the AJAX request in functions.php:

php

    // functions.php (add below CPT registration)
    function enqueue_movie_filter_scripts() {
        if (is_page_template('page-movies.php')) {
            wp_enqueue_script('movie-filter', get_template_directory_uri() . '/js/movie-filter.js', array('jquery'), '1.0', true);
            wp_localize_script('movie-filter', 'movieFilter', array(
                'ajax_url' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('movie_filter_nonce'),
            ));
        }
    }
    add_action('wp_enqueue_scripts', 'enqueue_movie_filter_scripts');
    
    function filter_movies_by_actor() {
        check_ajax_referer('movie_filter_nonce', 'nonce');
    
        $actor_id = intval($_POST['actor_id']);
        $args = array(
            'post_type' => 'movie',
            'posts_per_page' => -1,
        );
    
        $movies = new WP_Query($args);
        $response = '';
    
        if ($movies->have_posts()) {
            while ($movies->have_posts()) {
                $movies->the_post();
                $actors = get_field('movie_actors', get_the_ID(), false);
                if (!$actor_id || (is_array($actors) && in_array($actor_id, $actors))) {
                    ob_start();
                    ?>
                    <div class="movie-item" data-actors="<?php echo esc_attr(implode(',', $actors)); ?>">
                        <h2><?php the_title(); ?></h2>
                        <?php the_content(); ?>
                    </div>
                    <?php
                    $response .= ob_get_clean();
                }
            }
            wp_reset_postdata();
        }
    
        echo $response;
        wp_die();
    }
    add_action('wp_ajax_filter_movies', 'filter_movies_by_actor');
    add_action('wp_ajax_nopriv_filter_movies', 'filter_movies_by_actor');

## 6. JavaScript for AJAX

Create js/movie-filter.js in your theme folder:

javascript

    jQuery(document).ready(function($) {
        // Filter by clicking actor name
        $('#actor-list li').on('click', function() {
            const actorId = $(this).data('actor-id');
            filterMovies(actorId);
        });
    
        // Live search filter for actors
        $('#actor-filter').on('keyup', function() {
            const searchTerm = $(this).val().toLowerCase();
            $('#actor-list li').each(function() {
                const actorName = $(this).text().toLowerCase();
                $(this).toggle(actorName.indexOf(searchTerm) > -1);
            });
        });
    
        function filterMovies(actorId) {
            $.ajax({
                url: movieFilter.ajax_url,
                type: 'POST',
                data: {
                    action: 'filter_movies',
                    actor_id: actorId,
                    nonce: movieFilter.nonce
                },
                success: function(response) {
                    $('#movies-list').html(response);
                },
                error: function() {
                    $('#movies-list').html('<p>Error loading movies.</p>');
                }
            });
        }
    });

## 7. Final Steps

*   Create a new page in WordPress and assign the "Movies Page" template.
    
*   Add some sample movies and actors in the WordPress admin, linking them via the ACF relationship fields.
    
*   Test the filter by clicking actor names or typing in the search input.
    

How It Works

*   CPTs: Movies and actors are registered as custom post types.
    
*   Relationship: ACF handles the many-to-many relationship.
    
*   Filter: The sidebar lists all actors. Clicking an actor triggers an AJAX call to filter movies. The search input filters the actor list live.
    
*   Display: Movies are updated dynamically without page reload.
    

This setup provides a functional WordPress application with the requested features. Let me know if you need further clarification or enhancements!


---


## References

- https://x.com/i/grok?conversation=1893827667650048001