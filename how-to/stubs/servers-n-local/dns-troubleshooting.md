### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/16/25


## CONTENT_BELOW: ##

---

The issues you're describing—intermittent inaccessibility of the cloned WordPress site and SSL setup problems—are likely the result of a combination of **DNS misconfiguration**, **SSL/TLS issues**, and possibly **incorrect WordPress or server settings** post-cloning.

Let’s break it down systematically and help you get your clone working smoothly.

---

## 🔍 1. **Why the site is unreachable / times out**

**Symptoms:**

* Site intermittently becomes unreachable
* Page “took too long to respond”
* Works briefly after toggling a plugin
* Cloned using Plesk WP Toolkit
* HTTPS not set up yet

**Likely causes:**

* **Redirection or HTTPS plugin conflict**: The Redirection plugin might have cached or forced redirects to an HTTPS URL that isn’t working yet.
* **WordPress site/home URL mismatch**: If `siteurl` or `home` are pointing to HTTPS or the wrong domain in the database or `wp-config.php`, this can create a loop or a failed connection.
* **DNS or SSL misconfigurations**: If DNS isn’t correctly propagating, or SSL is partially configured, this can cause intermittent timeouts.
* **Cloudflare misconfiguration**: If your DNS or SSL traffic is passing through Cloudflare, but the settings aren't correct, it could result in this behavior.

---

## ✅ Step-by-Step Troubleshooting & Fix

---

### ✅ Step 1: **Check Where Your DNS is Managed**

You mentioned multiple possible DNS management points:

> my web host, my private Plesk server, Cloudflare

**Only one of these is authoritative**. Here's how to determine which one is:

**🧪 Command to find DNS authority:**

Run this from a terminal (or use an online DNS checker like `whatsmydns.net` or `digwebinterface.com`):

```bash
dig NS elijahstreams.com +short
```

This will tell you which **nameservers** are serving your domain:

* If the result is something like `ns1.cloudflare.com`, then **Cloudflare is your DNS provider**, and **you must add the DNS TXT record in Cloudflare**.
* If it's your hosting provider or registrar (e.g., GoDaddy, Namecheap, etc.), then DNS must be edited there.

---

### ✅ Step 2: **Add the TXT Record for SSL**

To issue the Let's Encrypt **wildcard certificate**, Plesk needs to verify domain ownership via DNS (ACME challenge).

Add the following TXT record **wherever your DNS is managed (per Step 1)**:

| Type | Name                                                 | Value                                         |
| ---- | ---------------------------------------------------- | --------------------------------------------- |
| TXT  | `_acme-challenge.pre-launch-debug.elijahstreams.com` | `rZrA3_BYyLeMVNWLIbLkA3C84HZaLm-FX_z1OvY_6t0` |

⚠️ **Important**: This must be a TXT record for the **subdomain**, not the root domain.

Once you've added it, wait 1–5 minutes, then **test the DNS propagation**:

```bash
dig TXT _acme-challenge.pre-launch-debug.elijahstreams.com +short
```

If the correct value shows up, go back to Plesk and click **“Continue”** to finish issuing the certificate.

---

### ✅ Step 3: **Ensure WordPress is Configured for the Subdomain**

After cloning, WordPress still might reference the old domain in:

* **Database (`wp_options`)**: Check `siteurl` and `home`
* **wp-config.php** (if hardcoded)

Make sure they are:

```php
https://pre-launch-debug.elijahstreams.com
```

If they still point to the main site (e.g., `https://elijahstreams.com`), your clone will redirect or fail to connect properly.

---

### ✅ Step 4: **Disable Forced HTTPS (Temporarily)**

If your SSL isn’t ready yet, and WordPress or Plesk is forcing HTTPS, that will cause timeout errors.

1. **Temporarily disable HTTPS redirection** in:

   * **Plesk** > Domain > Hosting Settings
   * Or via `.htaccess` (comment out any `RewriteRule` or `Force HTTPS` rules)

2. In WordPress:

   * Disable any plugins that force HTTPS or redirects.
   * Use a plugin like **Better Search Replace** to update all URLs to the correct subdomain (temporarily use HTTP if needed).

---

### ✅ Step 5: **Cloudflare Tips (if you're using it)**

If you are using **Cloudflare**:

* In the **DNS tab**, add the TXT record as instructed
* Under **SSL/TLS settings**, make sure you're using:

  * **"Full"** or **"Full (Strict)"** if SSL is active on your server
  * **"Flexible"** (NOT recommended, but usable temporarily) if your server doesn't have SSL yet
* In the **Page Rules** section, make sure you're not auto-redirecting to HTTPS before it works

---

### ✅ Step 6: **Check Logs for Clues**

On Plesk:

* **Apache/Nginx error logs** for the subdomain
* **PHP-FPM logs** (if applicable)
* **WordPress debug log**: Add this to `wp-config.php`:

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
```

Then check the `wp-content/debug.log` file after trying to access the site.

---

## 🔁 Recap

| Issue                               | Fix                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------ |
| Site unreachable                    | Likely caused by redirects to non-working HTTPS, DNS or SSL issues             |
| Wildcard SSL failing                | Add TXT record at DNS provider (use `dig NS yourdomain.com` to find out where) |
| Unsure where DNS is managed         | Use `dig` to check authoritative nameservers                                   |
| WordPress cloned but not configured | Check `siteurl`, `home`, and disable plugins/redirects temporarily             |
| SSL not working                     | Don’t force HTTPS until certificate is working                                 |

---

Would you like help checking your current DNS setup or verifying the TXT record now? I can guide you through `dig`, or check public DNS records if you confirm the subdomain.






----





Thanks — that result tells us **exactly what we need**.

### 🔍 Here's what this means:

Your domain **`elijahstreams.com` is using IONOS/1&1 DNS** (the `ui-dns.*` nameservers belong to IONOS).

So, your **DNS is managed at your domain registrar or hosting provider that uses these `ns1045.ui-dns.*` nameservers**, likely **IONOS**.

---

## ✅ What You Need to Do Now:

### 🔧 1. **Log in to your DNS provider**

* Go to your **IONOS/1&1 account** (or wherever you manage your domain).
* Navigate to the **DNS settings** for `elijahstreams.com`.

---

### 🧾 2. **Add the Required TXT Record**

Create a new **TXT record** with these values:

| Field               | Value                                         |
| ------------------- | --------------------------------------------- |
| **Type**            | TXT                                           |
| **Host / Name**     | `_acme-challenge.pre-launch-debug`            |
| **Value / Content** | `rZrA3_BYyLeMVNWLIbLkA3C84HZaLm-FX_z1OvY_6t0` |
| **TTL**             | Default (or 1 hour is fine)                   |

> ✅ Note: Some control panels don’t let you type the full `_acme-challenge.pre-launch-debug.elijahstreams.com`. Instead, just type:
> `_acme-challenge.pre-launch-debug` — the domain is implied.

---

### ⏳ 3. **Wait for DNS to Propagate**

It can take a few minutes (sometimes up to 30–60 mins), but you can **check if the TXT record is visible** using this command:

```bash
dig TXT _acme-challenge.pre-launch-debug.elijahstreams.com +short
```

✅ If you see:

```
"rZrA3_BYyLeMVNWLIbLkA3C84HZaLm-FX_z1OvY_6t0"
```

…then you’re ready for the next step.

---

### 🔐 4. **Go Back to Plesk and Click “Continue”**

Once the DNS TXT record is correctly visible:

* Return to your Plesk panel
* Click **“Continue”** on the Let's Encrypt certificate issuance dialog

If successful, Plesk will:

* Install the new **wildcard SSL certificate**
* Apply it to your subdomain (`pre-launch-debug.elijahstreams.com`)
* Allow HTTPS connections without failure

---

## ⚠️ Final Tips After SSL Works

1. **Turn back on HTTPS redirection** in:

   * Plesk Hosting Settings
   * `.htaccess`
   * Any WP plugins

2. **Clear any redirect or caching plugins** if things still act weird

3. If you’re using **Cloudflare**, double-check its settings if you re-enable proxying

---

Would you like help verifying the TXT record when you add it? I can check live for you once it’s in place.



---






Thanks for the screenshot — I reviewed it, and **your DNS TXT record looks correct** ✅

---

### 🔍 Here's a breakdown:

* **Type:** `TXT` ✅
* **Host name:** `_acme-challenge.pre-launch-debug` ✅
  This correctly targets the subdomain challenge.
* **Value:** `rZrA3_BYyLeMVNWLIbLkA3C84HZaLm-FX_z1OvY_6t0` ✅
  (appears wrapped in the preview, but it's intact)
* **TTL:** `1 hour` ✅ (perfectly fine)

The **preview line** confirms this will resolve as:

```txt
_acme-challenge.pre-launch-debug.elijahstreams.com. 3600 IN TXT "rZrA3_BYyLeMVNWLIbLkA3C84HZaLm-FX_z1OvY_6t0"
```

Which is exactly what Let’s Encrypt is expecting.

---

## ✅ Next Step: Verify DNS Propagation

Let’s make sure the record is externally visible.

### 🧪 Use this command (or tell me to check for you):

```bash
dig TXT _acme-challenge.pre-launch-debug.elijahstreams.com +short
```

If you see:

```txt
"rZrA3_BYyLeMVNWLIbLkA3C84HZaLm-FX_z1OvY_6t0"
```

...then you're good to go.

🕐 It may take 5–15 minutes for DNS to propagate, depending on your provider.

---

### ✅ Once Propagated:

Return to **Plesk** and click **“Continue”** on the Let's Encrypt certificate issuance dialog.

It should now validate successfully and install your **wildcard SSL** for:

```txt
*.pre-launch-debug.elijahstreams.com
```

---

Let me know if you want me to check DNS propagation live, or walk you through enabling HTTPS in WordPress after the cert is installed.






----





Perfect — your PowerShell `Resolve-DnsName` output confirms:

### ✅ The TXT record is publicly visible and propagating:

```
Name:     _acme-challenge.pre-launch-debug.elijahstreams.com
Type:     TXT
TTL:      3600
Strings:  {rZrA3_BYyLeMVNWLIbLkA3C84HZaLm-FX_z1OvY_6t0}
```

That’s exactly the value Let’s Encrypt is trying to verify.

---

## ✅ Next Step: Go Back to Plesk

Now that DNS is confirmed:

1. Go to your **Plesk panel**
2. Find the **Let's Encrypt SSL certificate request** for `pre-launch-debug.elijahstreams.com`
3. Click **“Continue”** (or **“Retry”**) to finish the SSL issuance

---

### ✅ Once Issued:

After Plesk confirms the certificate is installed:

* Enable **HTTPS redirection** in Plesk (Hosting Settings → Force HTTPS)
* Make sure WordPress `siteurl` and `home` use `https://pre-launch-debug.elijahstreams.com`
* Re-enable any plugins you disabled (Redirection, Really Simple SSL, etc.)

---

Let me know if Plesk accepts the DNS and issues the certificate — or if it throws any error.





---



Thanks for the screenshot — it shows you're already **in the right place**, and you **do have HTTPS redirection enabled** ✅

---

### 🔍 Here's what we can confirm from your Plesk Hosting Settings:

* ✅ **SSL/TLS support is enabled**
* ✅ **Let's Encrypt certificate is installed** (for `pre-launch-debug.elijahstreams.com`)
* ✅ **"Redirect visitors from HTTP to HTTPS via a SEO friendly 301 redirect" is checked**
  → This **is** the "force HTTPS" option in Plesk.

So at this point, **your hosting settings are properly configured** for HTTPS.

---

## ✅ Next Steps (Final Checklist):

Now that HTTPS is set up and forced:

### 1. **Check WordPress site/home URLs**

Go to your cloned site’s WordPress admin (`/wp-admin`) and confirm:

* `Settings > General` has:

  ```
  WordPress Address (URL): https://pre-launch-debug.elijahstreams.com
  Site Address (URL): https://pre-launch-debug.elijahstreams.com
  ```

If it still uses HTTP or the old domain, fix it here — or in the database (`wp_options` table) if the admin is unreachable.

---

### 2. **Test Frontend + Login**

Visit:

* `https://pre-launch-debug.elijahstreams.com/`
* `https://pre-launch-debug.elijahstreams.com/wp-admin`

Confirm:

* No redirect loops
* Valid SSL (padlock icon)
* No timeout issues

---

### 3. **Optional: Run a Search & Replace**

If the site still has references to the old domain or HTTP, run a safe search-and-replace using the plugin:

🔧 [Better Search Replace](https://wordpress.org/plugins/better-search-replace/)

Search:

```
http://pre-launch-debug.elijahstreams.com
```

Replace with:

```
https://pre-launch-debug.elijahstreams.com
```

(Don’t change domain names unless it’s still referencing the main site.)

---

### ✅ TL;DR — You're nearly done

You’ve:

* ✅ Added the TXT record
* ✅ Verified DNS
* ✅ Installed wildcard SSL
* ✅ Enabled HTTPS and redirection
* ✅ Verified it in Plesk

Now just:

* 🔁 Double-check WordPress URLs
* 🔍 Browse to test
* 🔧 Fix redirects/caching if needed

Let me know what happens when you visit the site now — does it load securely and consistently?

