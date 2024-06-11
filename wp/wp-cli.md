# WP-CLI

####  [[This is a stub]]

[🏚️](../README.md) | [WordPress](/wp/index.md)

**WordPress** is a free, open-source content management system (**[CMS](coding/cms.md)**) that allows users to build websites and blogs. It's a popular choice for people without coding experience. WordPress has evolved to support a variety of websites, including professional publications, e-commerce platforms, mailing lists, forums, media galleries, membership sites, learning management systems, and online stores.

---

### What Is WP-CLI and How to Use It for Managing a WordPress Site

WordPress is one of the most user-friendly content management systems (CMS) due to its intuitive admin dashboard. However, managing a WordPress site can become more complex, especially as your website grows. Whether you are a regular user or a developer, you need to manage themes, plugins, and updates.

Mastering tools such as the WordPress Command-Line Interface (WP-CLI) can be a game-changer. This WP-CLI WordPress tutorial offers a comprehensive guide, covering everything from its installation to using it effectively for WordPress website management. By the end, you’ll have a solid grasp of WP-CLI’s capabilities, equipping you to manage WordPress websites more efficiently.

### What Is WP-CLI?

WP-CLI is the command-line interface for WordPress, enabling users to manage their WordPress sites without a web browser. It’s a set of command-line tools for handling WordPress tasks, including managing themes, plugins, and databases.

While the WordPress admin dashboard offers a user-friendly experience, WP-CLI elevates website management. Using the command-line interface, you can perform tasks more swiftly and even automate various site maintenance aspects. WP-CLI is particularly useful for WordPress developers who handle multiple sites, facilitating streamlined management directly from the command line.

### What Are the Benefits of WP-CLI?

WP-CLI offers various advantages for both regular users and freelancers. Here’s why you should consider using the WordPress command-line interface:

- **Efficiency**: WP-CLI lets you perform tasks in seconds that could take minutes or even hours via the traditional WordPress admin dashboard.
- **Bulk actions**: This tool helps you manage multiple plugins, themes, or websites with a single command. It is particularly beneficial for freelancers who manage clients’ sites and want to perform bulk actions quickly.
- **Remote management**: With WP-CLI, you can remotely maintain WordPress websites, meaning there’s no need to log in to each admin dashboard individually.
- **Automated backups**: WP-CLI enables you to create automated backup routines for your WordPress site. This is handy for those with WP-CLI support in their WordPress backup solutions.
- **Advanced customizations**: While WordPress’ graphical interface is user-friendly, it can be limiting for more complex tasks. WP-CLI allows for advanced customization that isn’t possible through the dashboard.

### WP-CLI v2

WP-CLI has come a long way, and its latest stable version is WP-CLI v2, with the newest release being 2.8.1. This release brings updated features and improved stability to help you manage your WordPress site efficiently.

Here are the minimum requirements for running WP-CLI v2:

- PHP 5.6 or later
- WordPress 3.7 or later
- UNIX-like environment (OS X, Linux, FreeBSD, Cygwin) – limited support in Windows.

Updating to the latest version is recommended for several reasons:

- Newer versions often come with security patches.
- Access to new commands and functionalities that older versions may not support.
- Improved speed and efficiency in executing commands.

**Important!** Although WP-CLI can be installed in older PHP and WordPress versions, we recommend updating to the latest releases for enhanced security.

### How to Install WP-CLI?

Installing WP-CLI is straightforward whether you’re on a hosting plan or a local Linux environment.

#### For Hostinger Users:

If you’re using Hostinger’s Premium plan or above for web hosting and managed WordPress hosting, WP-CLI is already installed. To use it, activate SSH access on your hPanel. Here’s how:

1. Log in to your hPanel.
2. Navigate to **Advanced → SSH Access** through the left sidebar.
3. Click **Enable** in the SSH status section, and you’re all set.

#### For VPS Hosting or Linux Environment:

1. Access your server using an SSH client like PuTTy.
2. Once logged in, download the WP-CLI PHAR file:
   ```bash
   curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
   ```
3. Verify that the PHAR file is working:
   ```bash
   php wp-cli.phar --info
   ```
4. Make the file executable:
   ```bash
   chmod +x wp-cli.phar
   ```
5. Move the PHAR file to a location in your path, for example:
   ```bash
   sudo mv wp-cli.phar /usr/local/bin/wp
   ```
6. Complete the WP-CLI installation by executing the following command:
   ```bash
   wp core install
   ```

### Common WP-CLI Commands

After installing WP-CLI, familiarize yourself with its primary features. This command-line tool lets you accomplish many tasks efficiently. Mastering these WP-CLI commands will help you manage your WordPress site directly from the command line.

#### How to Check WP-CLI Version

To ensure you’re running the current version of WP-CLI, you can check this tool’s installed version routinely. Open your command-line tool and enter:

```bash
wp cli version
```

You’ll see an output similar to:

```
WP-CLI 2.8.1
```

For more detailed information, including the PHP and MySQL version, you can use this command:

```bash
wp --info
```

The output will look like the following:

```
PHP binary:     /usr/bin/php8.2
PHP version:    8.2.0
php.ini used:   /etc/php/8.1/cli/php.ini
MySQL binary:   /usr/bin/mysql
MySQL version:  mysql  Ver 8.0.27-0ubuntu0.22.04.1 for Linux on x86_64 ((Ubuntu))
SQL modes:
WP-CLI root dir:        /home/wp-cli/
WP-CLI vendor dir:      /home/wp-cli/vendor
WP_CLI phar path:
WP-CLI packages dir:    /home/wp-cli/.wp-cli/packages/
WP-CLI global config:
WP-CLI project config:  /home/wp-cli/wp-cli.yml
WP-CLI version: 2.8.1
```

If you’re on an outdated version, you can easily update WP-CLI by running the following command:

```bash
wp cli update
```

The output will confirm the updated version, such as:

```
Success: WP-CLI updated to 2.8.1
```

#### How to Access the List of WP-CLI Commands and Help Documentation

WP-CLI offers built-in documentation that contains essential command information. To view a complete list of available commands, type the following:

```bash
wp
```

You should see the output as follows:

```
NAME
  wp
DESCRIPTION
  Manage WordPress through the command-line.
SYNOPSIS
  wp <command>
SUBCOMMANDS
  cache                 Adds, removes, fetches, and flushes the WP Object Cache object.
  cap                   Adds, removes, and lists capabilities of a user role.
  cli                   Reviews current WP-CLI info, checks for updates, or views defined aliases.
.....
```

To exit the help page, press `Q`.

#### How to Learn More About a Specific Command

If you need details about a particular WP-CLI command, this tool offers comprehensive help documentation. This includes syntax, options, and examples. For instance, to learn more about the `wp user` command, you can type:

```bash
wp help user
```

You’ll see the output detailing usage, available arguments, and other essential information:

```
NAME
  wp user
DESCRIPTION
  Manages users, along with their roles, capabilities, and meta.
SYNOPSIS
  wp user <command>
SUBCOMMANDS
  add-cap          Adds a capability to a user.
  add-role         Adds a role to a user.
  create           Creates a new user.
  ...
```

You can also use the help command for subcommands. For example, to access the help page for the `wp user update` command, type:

```bash
wp help user update
```

### How to Install WordPress via WP-CLI

Installing WordPress through WP-CLI is quick and efficient. Before starting, ensure you’ve created a MySQL database, as it’s a prerequisite for WordPress installation.

#### Creating a MySQL Database:

With Hostinger, you can create a MySQL database in hPanel by navigating to **Databases → Management** via the sidebar. Fill in the database’s name, username, and password to create a new database.

Alternatively, follow these steps to create a new MySQL database using the command line:

1. Enter the MySQL shell by typing:
   ```bash
   mysql -u root -p
   ```
2. Add a user and database name by typing the commands below. Replace `username` and `databasename` with your chosen values:
   ```sql
   CREATE USER 'username';
   CREATE DATABASE 'databasename';
   ```
3. Grant all permissions for the user to modify the database:
   ```sql
   GRANT ALL PRIVILEGES ON databasename.* TO 'username' IDENTIFIED BY 'yourpassword';
   ```
4. Quit the MySQL shell by executing:
   ```sql
   quit
   ```

#### Installing WordPress:

After setting up the MySQL database, you can install WordPress from the command line. First, navigate to the `public_html` directory, where your website files should reside. To check the current directory, run the following:

```bash
pwd
```

If you’re not in `public_html`, navigate accordingly:

```bash
cd /home/username/public_html
```



Replace `username` with your actual username. Next, follow these steps:

1. **Download the latest WordPress core version** by typing:
   ```bash
   wp core download
   ```
   This command downloads the latest version of WordPress to the directory.

2. **Create a wp-config.php file** and include database credentials:
   ```bash
   wp config create --dbname=databasename --dbuser=username --dbpass=password --dbhost=localhost --dbprefix=wp_
   ```
   Replace the placeholders with your actual credentials.

3. **Complete the WordPress installation**:
   ```bash
   wp core install --url="your_domain.com" --title="Your Site Title" --admin_user="username" --admin_password="password" --admin_email="you@domain.com"
   ```
   Replace the placeholders with your actual domain name, site title, admin username, password, and email address. Once executed, you will see a success message.

4. **Log in to your WordPress site** by navigating to `your_domain.com/wp-login.php` and entering the admin credentials.

### How to Manage Themes and Plugins via WP-CLI

WP-CLI provides commands to efficiently manage WordPress themes and plugins, streamlining your workflow.

#### Themes

1. **To list all installed themes**, use:
   ```bash
   wp theme list
   ```
   The output will show the status of each theme.

2. **To activate a theme**, such as Astra:
   ```bash
   wp theme activate astra
   ```
   You’ll receive a success message confirming the theme activation.

3. **To search for themes** within the WordPress theme repository:
   ```bash
   wp theme search bootstrap
   ```
   The search results will display relevant themes.

4. **To install and activate a theme** from the repository:
   ```bash
   wp theme install the-bootstrap-blog --activate
   ```
   This command downloads, installs, and activates the specified theme.

#### Plugins

1. **To list all installed plugins**, use:
   ```bash
   wp plugin list
   ```
   The output will show the status of each plugin.

2. **To install a plugin**, such as WooCommerce:
   ```bash
   wp plugin install woocommerce
   ```
   This command downloads and installs the plugin.

3. **To activate the WooCommerce plugin**, use:
   ```bash
   wp plugin activate woocommerce
   ```
   You’ll receive a confirmation message that the plugin is activated.

4. **To search for plugins** in the WordPress plugin repository:
   ```bash
   wp plugin search cache
   ```
   The search results will display relevant plugins.

### How to Update WordPress via WP-CLI

1. **To update WordPress to the latest version**, use:
   ```bash
   wp core update
   ```
   The output confirms the update.

2. **To update the WordPress database**, run:
   ```bash
   wp core update-db
   ```
   You’ll receive a success message after updating the database.

3. **To verify your current WordPress version**, use:
   ```bash
   wp core version
   ```
   The command returns your current WordPress version.

4. **To update all plugins** to the latest versions:
   ```bash
   wp plugin update --all
   ```
   The output will confirm the updates for each plugin.

5. **To update all themes**, use:
   ```bash
   wp theme update --all
   ```
   The output will confirm the updates for each theme.

### How to Change the WordPress URL via WP-CLI

If you need to change the WordPress URL or home address, you can do it easily using WP-CLI.

1. **To change the home address**, use:
   ```bash
   wp option update home "http://example.com"
   ```
   Replace `http://example.com` with your new home address.

2. **To change the site URL**, use:
   ```bash
   wp option update siteurl "http://example.com"
   ```
   Replace `http://example.com` with your new site URL.

### How to Reinstall WordPress Core via WP-CLI

If you need to reinstall the WordPress core, WP-CLI makes the process straightforward.

1. **To reinstall the WordPress core**, use:
   ```bash
   wp core download --skip-content --force
   ```
   This command downloads and replaces the core WordPress files without affecting your content.

2. **To verify core file integrity**, use:
   ```bash
   wp core verify-checksums
   ```
   The output confirms if all core files are intact.

### How to Manage WordPress Content via WP-CLI

WP-CLI allows you to manage posts, comments, and media efficiently.

#### Posts

1. **To list all posts**, use:
   ```bash
   wp post list
   ```
   The output displays all posts and their IDs.

2. **To delete a post** with a specific ID:
   ```bash
   wp post delete 1
   ```
   Replace `1` with the actual post ID. You’ll receive a success message confirming the deletion.

3. **To create a new post**, use:
   ```bash
   wp post create --post_status=publish --post_title="This Post Was Created With WP-CLI" --edit
   ```
   Replace the post title with your desired title. The command creates a new post and opens it in the editor.

#### Comments

1. **To approve a comment** with a specific ID:
   ```bash
   wp comment approve 45
   ```
   Replace `45` with the actual comment ID.

2. **To list all comments** on a specific post:
   ```bash
   wp comment list --post_id=1234
   ```
   Replace `1234` with the actual post ID.

#### Media

1. **To import images** from a specified directory:
   ```bash
   wp media import images-for-site/*
   ```
   Replace `images-for-site/*` with the path to your images directory.

### How to Export and Import WordPress via WP-CLI

#### Exporting

1. **To export all posts**:
   ```bash
   wp export --dir=/path/to/folder
   ```
   Replace `/path/to/folder` with the actual directory path where you want to save the export file.

2. **To export specific content** like pages:
   ```bash
   wp export --post_type=page
   ```
   The output confirms the export of pages.

#### Importing

1. **To import an XML file**, use:
   ```bash
   wp import /path/to/file.xml --authors=create
   ```
   Replace `/path/to/file.xml` with the actual path to your import file. This command imports the XML file and creates new authors if needed.

2. **To skip attachments** during import:
   ```bash
   wp import /path/to/file.xml --skip=attachment
   ```
   The output confirms the import without attachments.

### How to Manage the Database Using WP-CLI

WP-CLI includes commands to interact with the WordPress database, simplifying various database management tasks.

1. **To display registered users**:
   ```bash
   wp db query "SELECT user_login, ID FROM wp_users;"
   ```
   The output lists user logins and their IDs.

2. **To export the database**, use:
   ```bash
   wp db export
   ```
   The command generates an SQL file with the database content.

3. **To import an SQL file**, use:
   ```bash
   wp db import filename.sql
   ```
   Replace `filename.sql` with the actual SQL file name. The command imports the database content.

4. **To repair the database**, use:
   ```bash
   wp db repair
   ```
   The output confirms the database repair.

5. **To optimize the database**, use:
   ```bash
   wp db optimize
   ```
   The output confirms the database optimization.

### How to Search and Replace Using WP-CLI

The search and replace feature is handy for making bulk content changes across your WordPress site.

1. **To replace a string**:
   ```bash
   wp search-replace 'old-string' 'new-string'
   ```
   Replace `old-string` and `new-string` with your actual search and replace values. The output confirms the replacements.

2. **To perform a dry run** before making actual changes:
   ```bash
   wp search-replace 'old-string' 'new-string' --dry-run
   ```
   This command shows the changes that would be made without actually modifying the database.

3. **To change your domain**:
   ```bash
   wp search-replace --dry-run 'website.net' 'website.com'
   ```
   Replace `website.net` and `website.com` with your actual old and new domain names.

### Conclusion

Mastering WP-CLI is invaluable for efficient WordPress management. This tutorial covers various WP-CLI commands, helping you update WordPress, install plugins and themes, manage content, and optimize your database directly from the command line. Using WP-CLI simplifies your workflow and reduces the risk of human error, allowing you to manage your WordPress sites confidently.

---

Managing a WordPress database efficiently with WP-CLI (WordPress Command Line Interface) can significantly improve productivity and streamline various tasks. Below are detailed examples of common tasks you might need to perform on a WordPress database using WP-CLI, each accompanied by potential pitfalls, expectations, and solutions.

### 1. **Exporting the Database**

**Problem/Challenge:**
You need to create a backup of your WordPress database.

**Pitfall:**
A common issue is forgetting to specify the output file, resulting in the export being displayed in the terminal instead of saved to a file.

**Expected Solution:**
You might expect `wp db export` to save to a file by default.

**Working Solution:**
You need to specify the output file explicitly.

```sh
wp db export backup.sql
```

**Output:**
```
Success: Exported to 'backup.sql'.
```

### 2. **Importing the Database**

**Problem/Challenge:**
You need to import a database backup into your WordPress site.

**Pitfall:**
Forgetting to specify the correct file path can lead to file not found errors.

**Expected Solution:**
Running `wp db import` without specifying a path might intuitively seem correct if you're in the directory with the file.

**Working Solution:**
Provide the full path or relative path to the SQL file.

```sh
wp db import backup.sql
```

**Output:**
```
Success: Imported from 'backup.sql'.
```

### 3. **Optimizing the Database**

**Problem/Challenge:**
Improving database performance by optimizing tables.

**Pitfall:**
Expecting `wp db optimize` to work without any database connection issues, but sometimes issues arise if there are corrupted tables.

**Expected Solution:**
Running `wp db optimize` should optimize tables without any problem.

**Working Solution:**
If there are corrupted tables, you may need to repair them first.

```sh
wp db repair
wp db optimize
```

**Output:**
```
Success: Repaired the database.
Success: Optimized the database.
```

### 4. **Checking the Database for Errors**

**Problem/Challenge:**
Ensuring the database is free of errors.

**Pitfall:**
Running `wp db check` might not catch all errors if there are complex issues.

**Expected Solution:**
`wp db check` should report any errors directly.

**Working Solution:**
If errors are found, `wp db repair` can help fix them.

```sh
wp db check
```

**Output:**
```
Success: Database checked.
```

### 5. **Running SQL Queries**

**Problem/Challenge:**
Running custom SQL queries directly on the WordPress database.

**Pitfall:**
Executing complex queries without testing them can lead to data loss or corruption.

**Expected Solution:**
Running `wp db query` should allow executing any SQL command safely.

**Working Solution:**
Ensure you have a backup before running any custom SQL queries.

```sh
wp db query "SELECT * FROM wp_users;"
```

**Output:**
```
+----+---------------------+---------------+--------------------------------+---------------------+
| ID | user_login          | user_pass     | user_email                     | user_registered     |
+----+---------------------+---------------+--------------------------------+---------------------+
| 1  | admin               | $P$...        | admin@example.com              | 2023-06-11 12:34:56 |
+----+---------------------+---------------+--------------------------------+---------------------+
```

### 6. **Resetting the Database**

**Problem/Challenge:**
You want to reset the database to its initial state, removing all custom content.

**Pitfall:**
This command is destructive, and running it without a backup will result in data loss.

**Expected Solution:**
`wp db reset` should reset the database quickly.

**Working Solution:**
Always create a backup before resetting the database.

```sh
wp db reset --yes
```

**Output:**
```
Success: Database reset.
```

### 7. **Changing the Database Prefix**

**Problem/Challenge:**
You need to change the table prefix for security reasons.

**Pitfall:**
This process is not straightforward, as it involves updating multiple references in the database and configuration files.

**Expected Solution:**
There isn't a single `wp-cli` command for changing the prefix directly.

**Working Solution:**
Use a plugin or script specifically designed for this purpose. However, WP-CLI can assist in manually renaming tables.

```sh
# Assuming current prefix is 'wp_' and new prefix is 'new_'
wp db query "RENAME table wp_posts TO new_posts;"
# Repeat for all tables
# Update wp-config.php accordingly
```

**Output:**
```
Success: Table 'wp_posts' renamed to 'new_posts'.
```

These examples illustrate how WP-CLI can streamline database management tasks. Always ensure you have proper backups and understand the implications of each command to avoid potential pitfalls.

## References

- https://www.youtube.com/watch?v=Mt1-WJpa48Q&t=3s&ab_channel=AaronReimann
- https://chatgpt.com/c/7df912eb-fcb5-4ed5-aae7-2d1c7dc4448a
- https://wp-cli.org/#:~:text=WP%2DCLI%20is%20the%20command,without%20using%20a%20web%20browser.
- https://www.dreamhost.com/blog/guide-to-wp-cli/
- https://themeisle.com/blog/wp-cli/#gref
- https://developer.wordpress.org/cli/commands/
- https://www.siteground.com/tutorials/wordpress/wp-cli/
- https://www.hostinger.com/tutorials/wp-cli
- https://www.scalahosting.com/blog/what-is-wp-cli-a-beginners-guide/
- https://aaron.kr/content/development/git-wp-cli-windows/