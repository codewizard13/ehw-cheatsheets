# WordPress: Enable Debug Mode for Troubleshooting

####  [[This is a stub]]

[🏚️](../README.md) | [How To](/how-to/index.md)

#### Related Articles: [Mozilla Thunderbird](/email/thunderbird.md)

To enable debugging in WordPress, add the following to `wp-config` (replace existing values if necessary):

```
// HIDE WARNINGS & NOTICES: Only display critical errors: https://www.perplexity.ai/search/wordpress-suppress-php-warning-3D0SATBgRSy_.jIa_g4s1Q
ini_set('display_errors', 'On');
ini_set('error_reporting', E_ERROR | E_PARSE);
// Enable WP_DEBUG mode
define( 'WP_DEBUG', true );
// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );
// Disable display of errors and warnings
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );
```

!!! #GOTCHA: Make sure to set the values back to disable debugging before deploying to PROD / LIVE site!

Before pushing to PROD:

- Disabled debugging by replacing the above section in `wp-config.php` with:

```
// Enable WP_DEBUG mode
define( 'WP_DEBUG', false );
// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', false );
// Disable display of errors and warnings
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );
```

- Delete the **debug.log** file (usually in `wp-content/debug.log`)

## Related Articles

- [Thunderbird: How to Archive Emails Complete Guide [Needs EDITING]](/how-to/tbird-archive-emails-v2.md)


## References

- https://www.perplexity.ai/search/using-mozilla-thunderbird-with-uF7GSW3qQwe6GXx12w.93A