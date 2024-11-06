# WordPress: How to Debug Out to Admin Notices Hook

[🏚️](../README.md) | [WordPress](index.md)

Add this code into your functions.php:

```php
/**
 * 
 * :: Dashboard: ADD debugging section to admin notices 
 * 
 * 2024-08-27 - Hepperle
 * Debugs out theme name and version to admin_notices
 * Works with child themes
 */

 function debug_admin()
 {
 
   $rand = rand(1001, 9999);
   $theme = wp_get_theme();
   
   $themeStub = get_option('stylesheet');
   
   $themeName = $theme->get('Name');
   $themeVer = wp_get_theme()->get('Version');
   
   $html = <<<HTML
   <style>
     .eh-debug {
       border: solid 1px green;
       padding: .4rem;
       padding-top: 0;
       margin-top: 1rem;
       width: 80%;
     }
   </style>
   
   <section class="eh-debug">
   
     <h3 style="background: orange; padding: 1rem; margin: 0;">DEBUGGING...!</h3>
     <div><b>Random Num:</b> $rand</div>
     <div><b>Theme Stub:</b> $themeStub</div>
     <div><b>Version:</b> $themeVer</div>
     <div><b>\$theme->get('Name'):</b> $themeName</div>
   
   </section>
   HTML;
 
   echo $html;
 
 
 }
//  add_action('admin_notices', 'debug_admin');
```


## References

- WPEngine AI Chatbot