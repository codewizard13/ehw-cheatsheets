# WordPress: Site Loads But Layout is Messed Up

[🏚️](../README.md) | [How To](/how-to/index.md)

Sometimes after migrating a site, to [localhost](/coding/local-dev.md) , the site data all seems to be there, and the content. But, the layout is wonky / messed up. In many cases, this is because during the URL replacement phase of a [manual WordPress migration](../wp-manual-migration.md), I migrated to "http" instead of "https".

The solution in that case is to replace the HTTP URLS with HTTPS and **clear cache**. In addition, if using a visual [page builder](/wp/page-builders.md) like Elementor, the plugin cache will need to be refreshed. For Elementor, do the following, starting from the wpadmin (Dashboard) sidebar:

1. Elementor > Tools
2. Click **Regenerate Files & Data**

Refresh the page and you should see that your styles are back and the layout looks great. If you still have problems, restart your web server application and clear the browser and any site cache or plugin based caches.

## References

- https://www.reddit.com/r/ProWordPress/comments/1cmml5t/comment/l31r6ag/?context=3
- https://elementor.com/help/caching-prevents-live-site-from-showing-changes-in-editor/