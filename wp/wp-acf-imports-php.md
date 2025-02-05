# 📌 WordPress: Debugging & Optimizing ACF Imports (Plesk, PHP, MySQL)

[🏚️](../README.md) | [WordPress](index.md)


## 🚨 **Issue:**

You attempted to import a small (103 KB) **Advanced Custom Fields (ACF) JSON export file** into a WordPress site hosted on **Plesk Obsidian**, but encountered a **504 Gateway Timeout** error. Even after modifying PHP settings, rolling back, and retrying, the import seemed unsuccessful—until about **30 minutes later**, when the changes suddenly took effect.

---

## 🔍 **Possible Causes of the 504 Gateway Timeout**

| 🛠️ Cause                                     | 🔎 Explanation                                                                                                       |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Nginx Reverse Proxy Timeout**               | If Plesk uses Nginx as a reverse proxy, it might be timing out before Apache/PHP finishes processing the ACF import. |
| **PHP Execution Time Limit Exceeded**         | The import process could exceed `max_execution_time` or `max_input_time`, leading to a timeout.                      |
| **MySQL Query Delays**                        | Large imports trigger many **insert/update** queries in `wp_postmeta`, which can be slow if indexing is inefficient. |
| **ModSecurity or Fail2Ban Blocking Requests** | Security layers may mistakenly flag the request as suspicious.                                                       |
| **Background Processing of ACF Imports**      | ACF imports can involve delayed cron jobs that complete **later** rather than immediately.                           |

### 🛑 **Gotcha: Cloudflare Is NOT the Issue!**

Even though your site uses **Cloudflare**, your **A records were set to "DNS only"** and Cloudflare was disabled in the “Overview” panel. This means Cloudflare was **not** causing the timeout issue.

---

## 🔍 **Why Was ACF Importing So Slowly?**

Even after fixing PHP settings, why did the import still take a long time?

### **1️⃣ Large Number of Database Queries**

- ACF **doesn't bulk-insert fields**; it **checks, updates, and inserts** them **one by one**.
- This results in **thousands** of `INSERT` or `UPDATE` queries in `wp_postmeta`.

### **2️⃣ ACF's Validation & Data Restructuring**

- ACF **verifies field keys** and **ensures relationships** are correct before saving.
- Complex field types (e.g., **repeaters**, **flexible content fields**) require recursive operations, adding extra queries.

### **3️⃣ WordPress Auto-Saving & Revisions**

- By default, WordPress **saves revisions** of each change, leading to **duplicate database writes**.
- **Fix:** Disable revisions **before** import.

```php
// Add this to wp-config.php
define('WP_POST_REVISIONS', false);
define('AUTOSAVE_INTERVAL', 86400); // Delay autosaves
```

### **4️⃣ MySQL Indexing Issues**

- If your `wp_postmeta` table is **huge** (millions of rows), lack of indexing can **slow down queries**.
- **Fix:** Add an index to speed up lookups.

```sql
ALTER TABLE wp_postmeta ADD INDEX meta_key_index (meta_key(191));
```

---

## 🚀 **How to Optimize ACF Imports**

### 🔹 **1. Use ACF Local JSON Instead of Importing**

ACF supports **local JSON**, which avoids database queries entirely.

#### ✅ **Steps:**

1. Create a folder inside your theme:
   ```bash
   mkdir -p wp-content/themes/your-theme/acf-json/
   ```
2. Move your **exported JSON file** into this folder.
3. ACF will now **auto-load fields** without importing.

---

### 🔹 **2. Optimize MySQL for Faster Imports**

Modify MySQL settings in `/etc/mysql/my.cnf`:

```ini
innodb_flush_log_at_trx_commit = 2
bulk_insert_buffer_size = 64M
max_allowed_packet = 256M
```

Then restart MySQL:

```sh
service mysql restart
```

---

### 🔹 **3. Temporarily Disable ModSecurity & Fail2Ban**

Plesk’s security layers can interfere with large imports.

#### ✅ **Disable ModSecurity (Plesk UI):**

1. **Plesk > Websites & Domains**
2. Click **Web Application Firewall (ModSecurity)**
3. Set it to **"Detection Only"** or disable it.

#### ✅ **Whitelist Your IP in Fail2Ban (SSH):**

```sh
fail2ban-client set plesk-wordpress unbanip YOUR_IP
```

---

### 🔹 **4. Clear Caches After Importing**

#### ✅ **Flush WordPress & ACF Cache:**

```sh
wp cache flush
wp transient delete --all
```

#### ✅ **Restart PHP-FPM (Plesk/Nginx):**

```sh
service php-fpm restart
```

#### ✅ **Flush MySQL Query Cache:**

```sql
RESET QUERY CACHE;
FLUSH TABLES;
```

---

### 🔹 **5. Run ACF Import via WP-CLI Instead**

Instead of using the WordPress UI, run the import from **SSH** to avoid web timeouts:

```sh
wp acf import path/to/your-file.json --allow-root
```

✅ **Benefit:** Avoids browser-based request timeouts.

---

## 🕵️‍♂️ **Why Did ACF Changes Appear 30 Minutes Later?**

Even after **rolling back your site** to a pre-import state, your ACF changes **suddenly appeared 30 minutes later**. Here’s why:

| ⏳ Cause                                       | 🔎 Explanation                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Object Cache Delay (Redis/Memcached)**      | WordPress caches ACF field definitions, delaying updates. Cached data expired after \~30 minutes.      |
| **MySQL Query Cache Retaining Old Data**      | The MySQL cache stored stale data, and only after it was cleared (\~30 min later) did changes reflect. |
| **PHP-FPM Delayed Restart**                   | Plesk’s PHP-FPM process pool retained old data until **idle workers refreshed**.                       |
| **ACF’s Internal Field Cache Expired**        | ACF caches fields inside `wp_options`, which has a **default expiration time (\~30 min)**.             |
| **Delayed WP-Cron Jobs for Postmeta Updates** | Some ACF updates were **queued in cron jobs**, only executing in the next scheduled cycle.             |

---

## ✅ **Final Steps to Prevent Future Issues**

1️⃣ **After importing ACF fields, manually refresh caches:**

```sh
wp cache flush
wp transient delete --all
service php-fpm restart
```

2️⃣ **Run WordPress cron jobs immediately:**

```sh
wp cron event run --all
```

3️⃣ **Use Local JSON to avoid database imports altogether.**

Would you like an automated script for handling these steps? 🚀



## References

- https://www.reddit.com/r/ProWordPress/comments/1cmml5t/comment/l31r6ag/?context=3
- https://elementor.com/help/caching-prevents-live-site-from-showing-changes-in-editor/