# WordPress: Deploy from Dev/ Staging to Prod Best Practices

[🏚️](../README.md) | [How To](/how-to/index.md)

#### Related Topics: [WordPress](/wp/wordpress.md)

Here is the updated table with the "Category" column bolded.

---

### Table of WordPress Deployment Security Best Practices

| **Category**                 | Best Practices                                                                                                                                                | Details                                                                                                                                            |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Security Plugins**         | Use reputable security plugins                                                                                                                               | Plugins like Wordfence, iThemes Security, or Sucuri can help by adding firewalls, malware scans, and monitoring suspicious activities.            |
| **Remove Development Tools** | Deactivate and delete development plugins and debugging tools                                                                                                | Disable plugins like Debug Bar or Query Monitor to prevent sensitive data exposure and to eliminate unnecessary code in the production environment. |
| **Update Admin Credentials** | Update passwords for WordPress admin accounts, database, and FTP/SFTP                                                                                        | Use strong, unique passwords, change all development passwords, and revoke temporary access used by developers or testers.                         |
| **Secure `wp-config.php`**   | Protect and configure `wp-config.php`                                                                                                                        | Turn off debug mode, remove database credentials if using environment variables, and set strict file permissions (400 or 440).                      |
| **File Permissions**         | Set restrictive permissions on sensitive files                                                                                                              | Set permissions to 644 for files and 755 for directories, ensuring critical files like `wp-config.php` have even stricter permissions.              |
| **Database Security**        | Use a strong, unique database prefix                                                                                                                        | Change the default `wp_` table prefix to make it harder for attackers to guess table names and reduce vulnerability to SQL injections.              |
| **Environment Variables**    | Store sensitive data in environment variables                                                                                                               | Avoid hardcoding sensitive information (e.g., API keys, database credentials) in files; instead, use environment variables or secure storage.      |
| **Disable Directory Indexing** | Prevent directory listing                                                                                                                                    | Add `Options -Indexes` to `.htaccess` to block directory browsing and prevent attackers from finding sensitive files.                              |
| **SSL/TLS Certificate**      | Install and enforce SSL/TLS certificates                                                                                                                    | Use SSL certificates to encrypt data in transit, protecting user data and enabling HTTPS across the entire site.                                   |
| **Limit Login Attempts**     | Use a plugin or configure server settings to limit login attempts                                                                                           | Limit login attempts per IP to reduce the risk of brute-force attacks and enable captchas for added security.                                      |
| **Two-Factor Authentication** | Enable two-factor authentication (2FA)                                                                                                                      | Use 2FA plugins like Wordfence or Authy to add an additional layer of security for admin accounts.                                                 |
| **Disable XML-RPC**          | Disable the XML-RPC feature unless required                                                                                                                 | Disable or limit XML-RPC (through a plugin) to prevent brute-force attacks and reduce unnecessary access points.                                   |
| **Security Headers**         | Add security headers (CSP, X-Content-Type-Options, X-Frame-Options)                                                                                         | Use security headers to protect against cross-site scripting (XSS), clickjacking, and other vulnerabilities; configure these in `.htaccess` or server settings. |
| **Database Access Restrictions** | Limit remote database access                                                                                                                         | Restrict database access to only the server, blocking external IPs to prevent unauthorized access.                                                |
| **Disable File Editing**     | Prevent file editing from the WordPress dashboard                                                                                                          | Add `define('DISALLOW_FILE_EDIT', true);` to `wp-config.php` to prevent editing of theme and plugin files through the admin dashboard.            |
| **Web Application Firewall (WAF)** | Implement a WAF to protect the site                                                                                                                  | A WAF filters malicious requests before they reach your WordPress site. Services like Cloudflare, Sucuri, or Wordfence offer WAF options.           |
| **Regular Backups**          | Set up automated backups and store securely                                                                                                                | Regularly back up both files and the database to facilitate recovery in case of security issues; store backups in secure, remote locations.        |
| **Security Scans**           | Perform regular security scans                                                                                                                              | Use plugins or third-party services to scan for malware, vulnerabilities, and potential backdoors.                                                |
| **Log Monitoring and Alerts** | Set up log monitoring with real-time alerts                                                                                                                | Monitor logs for unusual activity, such as repeated failed login attempts, unauthorized file changes, or new user accounts.                       |
| **XSS Protection**           | Sanitize and validate user input                                                                                                                            | Sanitize and validate all user input, especially in custom themes or plugins, to prevent cross-site scripting (XSS) attacks.                      |

---

### Additional Notes

1. **Testing on Staging**: Always test security configurations in a staging environment before deploying them to production. This allows you to identify and resolve any issues without affecting the live site.
   
2. **Cross-Environment Sync**: Sync your security configurations across development, staging, and production environments for consistency. However, ensure that access controls are tailored for each environment, limiting unnecessary access in production.

These best practices provide a strong framework for securing a WordPress site during deployment, safeguarding sensitive data, and minimizing exposure to common security threats.

## Related Articles

- [WordPress: Enable Debug Mode for Troubleshooting](wp-enable-debug.md)


## References

- https://www.perplexity.ai/search/wordpress-suppress-php-warning-3D0SATBgRSy_.jIa_g4s1Q