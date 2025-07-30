# WordPress: Enable Debug Mode for Troubleshooting


[🏚️](../README.md) | [WordPress](index.md)

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

### Increase Memory Limit for Large WordPress Sites

Add the following immediately after the `Add any custom values between this line` line:

```php
/*MEMCACHED_ENV_START*/ if (isset($_ENV['WPE_CACHE_HOST'])) $memcached_servers=array ( 'default' =>  array ( 0 => $_ENV['WPE_CACHE_HOST'], ), ); /*MEMCACHED_ENV_END*/
define('WPLANG','');
define('WP_MEMORY_LIMIT', '512M');
define( 'WP_MAX_MEMORY_LIMIT', '512M' );
```


---

!!! #GOTCHA: Make sure to set the values back to disable debugging before deploying to PROD / LIVE site!

## Before pushing to PROD:

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

- N/A


## References

- https://www.perplexity.ai/search/wordpress-suppress-php-warning-3D0SATBgRSy_.jIa_g4s1Q