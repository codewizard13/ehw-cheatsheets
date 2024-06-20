# AI: Unsorted Conversations

####  [[This is a stub]]

[🏚️](../README.md) | [AI](/ai/index.md)

This section is kind of a "junk drawer" for code and answers I generated with AI until I have a chance to format and file them properly.

---

## AI AGENT: Ella on Discord: Elementor

:speech_balloon: **Conversation Starter:**

How can I create a custom filter that only shows post type "videos" with taxonomy "episodes". Apply that filter to a loop grid and use that loop grid on custom search page to filter the current query?

Ella Mentor AI•Today at 11:39 AM
To create a custom filter that only shows post type "videos" with taxonomy "episodes," apply that filter to a Loop Grid, and use that Loop Grid on a custom search page to filter the current query, follow these steps:

Step 1: Create a Custom Post Type and Taxonomy
First, ensure you have a custom post type "videos" and a taxonomy "episodes." You can use plugins like Custom Post Type UI and Advanced Custom Fields to create these.

Step 2: Build a Loop Grid
Create a Loop Grid:
Go to your WordPress Dashboard.
Navigate to Templates > Theme Builder > Loop Items.
Click on Add New and select Loop Item.
Design your Loop Item template using Elementor.

Add the Loop Grid to a Page:
Create a new page or edit an existing one with Elementor.
Drag the Loop Grid widget onto the page.
Select the Loop Item template you created earlier.

Step 3: Add a Taxonomy Filter
Activate the Taxonomy Filter:
Ensure the Taxonomy Filter feature is activated by going to Elementor > Features and enabling Taxonomy Filter and Loop features.

Add the Taxonomy Filter Widget:
Drag the Taxonomy Filter widget onto the page where your Loop Grid is placed.
In the widget settings, connect the filter to your Loop Grid by selecting the Loop Grid from the dropdown menu.
Choose the taxonomy "episodes" to filter by.

Step 4: Customize the Query
Set Up a Custom Query Filter:
Use Elementor's custom query filter to ensure the Loop Grid only shows posts of type "videos" with the taxonomy "episodes."
Add the following code to your theme's functions.php file or a custom plugin:

```php
function custom_query_videos_episodes( $query ) {
    if ( ! is_admin() && $query->is_main_query() && $query->is_search() ) {
        $query->set( 'post_type', 'videos' );
        $query->set( 'tax_query', array(
            array(
                'taxonomy' => 'episodes',
                'field'    => 'slug',
                'terms'    => 'your-term-slug', // Replace with your actual term slug
            ),
        ));
    }
}
add_action( 'pre_get_posts', 'custom_query_videos_episodes' );
```


Step 5: Apply the Loop Grid to a Custom Search Page
Create a Custom Search Page:
Go to Templates > Theme Builder > Archive.
Click on Add New and select Search Results.
Design your search results page using Elementor.
Add the Loop Grid you created earlier to this page.

Ensure the Custom Query is Applied:
The custom query filter you added will ensure that the search results are filtered according to your specifications.

Additional Resources
https://elementor.com/help/taxonomy-filter-widget/
https://developers.elementor.com/docs/hooks/custom-query-filter/

By following these steps, you can create a custom filter for your "videos" post type with the "episodes" taxonomy and apply it to a Loop Grid on a custom search page.
Ella Mentor AI•Today at 11:39 AM

---

## AI AGENT: (Maybe) ChatGPT ???

To create a sort filter to order videos by the most recent guest's publish date, you can follow these steps using Elementor and custom post types in WordPress. Here's a comprehensive guide:

Step 1: Create Custom Post Types
Install Required Plugins:
Elementor and Elementor Pro
Advanced Custom Fields (ACF)
Custom Post Type UI (CPT UI)

Create Custom Post Types:
Go to CPT UI and create two custom post types: videos and guests.
For videos, set the slug to videos, and for guests, set the slug to guests.

Step 2: Set Up Relationships
Create Relationship Fields:
Use ACF to create a relationship field in both post types.
In videos, create a relationship field called guests to link multiple guests.
In guests, create a relationship field called videos to link multiple videos.

Step 3: Create and Populate Posts
Add Video and Guest Posts:
Add posts under videos and guests and link them using the relationship fields.

Step 4: Create a Custom Query
Custom Query for Sorting:
You will need to create a custom query to sort videos by the most recent guest's publish date. This requires custom code.

Step 5: Implement Custom Code
Add Custom Code:
Add the following code to your theme's functions.php file or a custom plugin:

```php
function sort_videos_by_recent_guest($query) {
    if (!is_admin() && $query->is_main_query() && is_post_type_archive('videos')) {
        $query->set('meta_key', 'guests');
        $query->set('orderby', 'meta_value_num');
        $query->set('order', 'DESC');
    }
}
add_action('pre_get_posts', 'sort_videos_by_recent_guest');
```

Step 6: Display Sorted Videos
Create an Archive Template:
Use Elementor to create an archive template for your videos post type.
Use the Posts widget or Loop Grid widget to display the videos sorted by the custom query.

Additional Resources
Elementor Theme Builder: https://elementor.com/help/what-is-the-elementor-theme-builder/
Elementor and ACF Integration: https://elementor.com/blog/acf-vs-pods-vs-toolset/
Creating Custom Post Types: https://elementor.com/blog/wordpress-custom-post-types/

By following these steps, you can create a sort filter that orders videos by the most recent guest's publish date using Elementor and custom post types in WordPress. If you need further assistance, feel free to ask!