# SERVER: How to Properly Configure Server Settings when Migrating to New Host

[🏚️](../README.md) | [How To](/how-to/index.md)

#### Related Articles: [Plesk [not created yet]](#)

The "Configure server settings" phase is crucial for ensuring your website functions correctly on the new host. Here's a detailed sidebar on this important step:

## Configuring Server Settings

When migrating your website, properly configuring server settings is essential for optimal performance and security.

### PHP Version
- Check PHP version compatibility with your website
- Select the appropriate PHP version in your hosting control panel
- Test your website thoroughly after changing PHP versions

**Pro Tip:** Always use the latest stable PHP version that's compatible with your website to benefit from performance improvements and security updates.

### SSL Certificates
- Install SSL certificate on the new server
- Configure forced HTTPS redirection
- Update internal links to use HTTPS

**Pro Tip:** Use Let's Encrypt for free, auto-renewing SSL certificates to save costs and simplify management.

### Web Server Configuration
- Choose between Apache, Nginx, or other web servers
- Set up proper file permissions
- Configure server-side caching

**Pro Tip:** If your website uses .htaccess files, ensure they're properly transferred and functioning on the new server.

### Database Settings
- Optimize database connection settings
- Set up database users and permissions
- Configure database caching if applicable

**Pro Tip:** Use database connection pooling to improve performance for high-traffic websites.

### Server-Side Includes
- Enable necessary server-side includes (SSI)
- Verify SSI directives are working correctly

### Custom PHP Settings
- Adjust PHP memory limits if required
- Enable/disable PHP modules as needed
- Configure PHP error logging

**Pro Tip:** Use php.ini or .user.ini files to set PHP configurations specific to your website, overriding global settings.

Remember to document all changes made during this phase for future reference and troubleshooting.

## Related Articles

- N/A


## References

- https://docs.plesk.com/en-US/obsidian/administrator-guide/dns/putting-your-website-online.72225/#id4