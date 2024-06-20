# AI: Unsorted Conversations

####  [[This is a stub]]

[🏚️](../README.md) | [AI](/ai/index.md)

This section is kind of a "junk drawer" for code and answers I generated with AI until I have a chance to format and file them properly.

---

#### AI AGENT: Ella on Discord: Elementor

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