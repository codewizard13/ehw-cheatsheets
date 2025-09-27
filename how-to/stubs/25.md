Eric Hepperle, ChatGPT, 2025-09-17



### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:



## CONTENT_BELOW: ##

---



## Prompt:


#GOTCHA:  pre-launch-debug.elijahstreams.com shows correct site preview in Plesk Obsidian, but neither wp-admin nor front end works - both give "This site can't be reached". The last thing I did last night was added SSL in Plesk, to which I received this popup,

Started issuing a wildcard SSL/TLS certificate from Let's Encrypt for the domain pre-launch-debug.elijahstreams.com.

Please add a DNS record with the following parameters:
Record type: TXT
Domain name: _acme-challenge.pre-launch-debug.elijahstreams.com
Record: rZrA3_BYyLeMVNWLIbLkA3C84HZaLm-FX_z1OvY_6t0

Before clicking "Continue", make sure that the DNS record was added and can be resolved externally.

To terminate and delete the existing certificate request, click "Cancel".

, so I set that up seemingly correctly as validated by,


#SOLVED:  you need to validate the challenge URL not the actual subdomain. So in Powershell it looks like this:


```powershell
Resolve-DnsName -Name _acme-challenge.pre-launch-debug.elijahstreams.com -Type Txt

Name                                     Type   TTL   Section    Strings
----                                     ----   ---   -------    -------
_acme-challenge.pre-launch-debug.elijahs TXT    3600  Answer     {rZrA3_BYyLeMVNWLIbLkA3C84HZaLm-FX_z1OvY_
treams.com                                                       6t0}
```

So, if LetsEncrypt SSL is set up correctly and Plesk is up and running correctly, why can't the site be "reached"?


## Answer:


You're on the right track—your DNS challenge TXT record looks good, and if SSL was successfully issued, that means DNS propagation for `_acme-challenge` succeeded. But if you're still getting **“This site can’t be reached”**, it indicates the issue lies elsewhere.

Let's break down the most **likely root causes** and how to fix them.

---

## ✅ Checklist for “Site can’t be reached” (Even After SSL Success)

### 1. **DNS A Record Missing or Incorrect**

* **Issue**: Just because the `_acme-challenge` TXT record is correct doesn’t mean the subdomain (`pre-launch-debug.elijahstreams.com`) itself is pointing anywhere.
* **Fix**:

  * Run in PowerShell or terminal:

    ```powershell
    Resolve-DnsName pre-launch-debug.elijahstreams.com
    ```

    or use [https://dnschecker.org](https://dnschecker.org)
  * Make sure you see a valid **A** record pointing to the server’s IP.
  * If not, **add an A record** for `pre-launch-debug` in your DNS settings (probably in your domain registrar’s control panel or Cloudflare, etc.).

---

### 2. **Firewall or Security Group Blocking Port 80/443**

* **Issue**: Even if DNS is fine, if ports 80 (HTTP) and 443 (HTTPS) are blocked, you'll get "site can't be reached".
* **Fix**:

  * Ensure your server or hosting provider allows inbound traffic on ports 80 and 443.
  * You can test with:

    ```powershell
    Test-NetConnection -ComputerName pre-launch-debug.elijahstreams.com -Port 443
    ```

    If it fails, likely a firewall is blocking it (Plesk, Windows Firewall, or your cloud host).

---

### 3. **Web Server Misconfiguration (Apache/nginx/Plesk)**

* **Issue**: SSL may be installed, but if no hosting config exists or is misconfigured for that subdomain, Plesk won’t serve the site.
* **Fix**:

  * Go into **Plesk > Domains > pre-launch-debug.elijahstreams.com** and check:

    * Is it listed as a subdomain under the main domain?
    * Is it **linked to a web root directory** with a WordPress install?
    * Is **SSL/TLS support enabled** for that subdomain?
    * Does the **hosting type** say "Website Hosting" (not just "Forwarding" or "None")?

---

### 4. **Apache/nginx Service Not Running or Not Serving Subdomain**

* **Fix**:

  * In **Plesk > Tools & Settings > Services Management**, check that:

    * **Apache** or **nginx** (depending on setup) is running.
  * You can also restart web services just to be safe.

---

### 5. **SSL Issuance Completed But Not Installed**

* **Issue**: SSL was issued, but the certificate wasn't installed after validation.
* **Fix**:

  * Go to **Plesk > Domains > pre-launch-debug.elijahstreams.com > SSL/TLS Certificates**.
  * Make sure the Let's Encrypt certificate is **installed and marked as active** for that subdomain.

---

### 6. **PHP or WordPress Issues**

* These usually give a different error, but just in case:

  * Ensure `index.php` exists in the root directory.
  * Check `error_log` for fatal errors (`/var/www/vhosts/.../logs/`).
  * Try renaming `.htaccess` temporarily to rule out redirect loops.

---

## 🔎 TL;DR – Immediate Diagnostic Steps:

1. **Check A Record**:

   ```powershell
   Resolve-DnsName pre-launch-debug.elijahstreams.com
   ```

   → Should return your server IP.

2. **Test Port Access**:

   ```powershell
   Test-NetConnection pre-launch-debug.elijahstreams.com -Port 443
   ```

3. **Open in HTTP (not HTTPS)**:
   → Try both `http://pre-launch-debug.elijahstreams.com` and `https://...` in browser.

4. **Plesk Hosting Setup**:

   * Make sure the subdomain has hosting set up.
   * SSL is installed.
   * Apache/nginx is serving it.

---

If you're still stuck, let me know the result of the DNS A record lookup and port test. That'll tell us whether the issue is DNS, network, or web server level.



---


## Prompt:


1 & 2 results:

Note, as mentioned the popup only said to create a text record, not an A record or any other kind.

Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\Users\erich> Resolve-DnsName pre-launch-debug.elijahstreams.com

Name                        Type TTL   Section    PrimaryServer               NameAdministrator           SerialNumber
----                        ---- ---   -------    -------------               -----------------           ------------
elijahstreams.com           SOA  30    Authority  ns1045.ui-dns.com           hostmaster.1und1.com        2017060128


PS C:\Users\erich> Test-NetConnection -ComputerName pre-launch-debug.elijahstreams.com -Port 443
WARNING: Name resolution of pre-launch-debug.elijahstreams.com failed


ComputerName   : pre-launch-debug.elijahstreams.com
RemoteAddress  :
InterfaceAlias :
SourceAddress  :
PingSucceeded  : False

#3: Screenshot shows that the subdomain is listed under the main domain.
Not sure how to check the following - can you give more granular instructions, validating for Plesk Obsidian in Sept 2025?

#4: Web Server (Apache) is enabled

#5: I'm 99% certain the cert is installed and active. Please validate based on 2nd screenshot (will come next since only one screenshot received at per anon answer)

 #6: Yes normal WordPress index.php file is present

error_log: Looks like the same/similar error repeating, but I don't understand what it means:

```
[Tue Sep 16 12:25:40.247193 2025] [security2:error] [pid 2148877:tid 135690205513408] [client 65.34.105.212:0] ModSecurity: Access denied with code 403 (phase 2). Operator EQ matched 0 at REQUEST_COOKIES_NAMES. [file "/etc/apache2/modsecurity.d/rules/comodo_free/26_Apps_WordPress.conf"] [line "155"] [id "225170"] [rev "3"] [msg "COMODO WAF: Sensitive Information Disclosure Vulnerability in WordPress 4.7 (CVE-2017-5487)||pre-launch-debug.elijahstreams.com|F|2"] [severity "CRITICAL"] [tag "CWAF"] [tag "WordPress"] [hostname "pre-launch-debug.elijahstreams.com"] [uri "/wp-json/wp/v2/users/me"] [unique_id "aMm5tEsBFnoPSEwjsR3ntQAAAAM"], referer: https://pre-launch-debug.elijahstreams.com/podcast-links/
[Tue Sep 16 12:33:02.445522 2025] [security2:error] [pid 2150863:tid 135690188728000] [client 65.34.105.212:0] ModSecurity: Access denied with code 403 (phase 2). Operator EQ matched 0 at REQUEST_COOKIES_NAMES. [file "/etc/apache2/modsecurity.d/rules/comodo_free/26_Apps_WordPress.conf"] [line "155"] [id "225170"] [rev "3"] [msg "COMODO WAF: Sensitive Information Disclosure Vulnerability in WordPress 4.7 (CVE-2017-5487)||pre-launch-debug.elijahstreams.com|F|2"] [severity "CRITICAL"] [tag "CWAF"] [tag "WordPress"] [hostname "pre-launch-debug.elijahstreams.com"] [uri "/wp-json/wp/v2/users/me"] [unique_id "aMm7bod_McV764XkHtPzFwAAAMU"], referer: https://pre-launch-debug.elijahstreams.com/podcast-links/
[Tue Sep 16 12:41:32.690209 2025] [security2:error] [pid 2151707:tid 135689224058560] [client 65.34.105.212:0] ModSecurity: Access denied with code 403 (phase 2). Operator EQ matched 0 at REQUEST_COOKIES_NAMES. [file "/etc/apache2/modsecurity.d/rules/comodo_free/26_Apps_WordPress.conf"] [line "155"] [id "225170"] [rev "3"] [msg "COMODO WAF: Sensitive Information Disclosure Vulnerability in WordPress 4.7 (CVE-2017-5487)||pre-launch-debug.elijahstreams.com|F|2"] [severity "CRITICAL"] [tag "CWAF"] [tag "WordPress"] [hostname "pre-launch-debug.elijahstreams.com"] [uri "/wp-json/wp/v2/users/me"] [unique_id "aMm9bFsS9Rjk1B08zp0VlgAAAA4"], referer: https://pre-launch-debug.elijahstreams.com/podcast-links/
[Tue Sep 16 12:58:08.775409 2025] [security2:error] [pid 2161429:tid 135689003853504] [client 65.34.105.212:0] ModSecurity: Access denied with code 403 (phase 2). Operator EQ matched 0 at REQUEST_COOKIES_NAMES. [file "/etc/apache2/modsecurity.d/rules/comodo_free/26_Apps_WordPress.conf"] [line "155"] [id "225170"] [rev "3"] [msg "COMODO WAF: Sensitive Information Disclosure Vulnerability in WordPress 4.7 (CVE-2017-5487)||pre-launch-debug.elijahstreams.com|F|2"] [severity "CRITICAL"] [tag "CWAF"] [tag "WordPress"] [hostname "pre-launch-debug.elijahstreams.com"] [uri "/wp-json/wp/v2/users/me"] [unique_id "aMnBUKvfuONRwpT0iENhkAAAANc"], referer: https://pre-launch-debug.elijahstreams.com/podcast-links/
[Tue Sep 16 13:09:49.773514 2025] [security2:error] [pid 2164255:tid 135690230691520] [client 65.34.105.212:0] ModSecurity: Access denied with code 403 (phase 2). Operator EQ matched 0 at REQUEST_COOKIES_NAMES. [file "/etc/apache2/modsecurity.d/rules/comodo_free/26_Apps_WordPress.conf"] [line "155"] [id "225170"] [rev "3"] [msg "COMODO WAF: Sensitive Information Disclosure Vulnerability in WordPress 4.7 (CVE-2017-5487)||pre-launch-debug.elijahstreams.com|F|2"] [severity "CRITICAL"] [tag "CWAF"] [tag "WordPress"] [hostname "pre-launch-debug.elijahstreams.com"] [uri "/wp-json/wp/v2/users/me"] [unique_id "aMnEDSsfK_50Wgrjgbva3QAAAMA"], referer: https://pre-launch-debug.elijahstreams.com/podcast-links/
[Tue Sep 16 13:45:58.921686 2025] [security2:error] [pid 2178810:tid 135688687187648] [client 34.248.164.203:0] ModSecurity: Access denied with code 403 (phase 2). Operator EQ matched 0 at REQUEST_COOKIES_NAMES. [file "/etc/apache2/modsecurity.d/rules/comodo_free/26_Apps_WordPress.conf"] [line "155"] [id "225170"] [rev "3"] [msg "COMODO WAF: Sensitive Information Disclosure Vulnerability in WordPress 4.7 (CVE-2017-5487)||pre-launch-debug.elijahstreams.com|F|2"] [severity "CRITICAL"] [tag "CWAF"] [tag "WordPress"] [hostname "pre-launch-debug.elijahstreams.com"] [uri "/wp-json/wp/v2/users/me"] [unique_id "aMnMhhIVgNHbGh4ZRQ04xQAAAJU"], referer: https://pre-launch-debug.elijahstreams.com/
```


---

* Renamed .htaccess -> .htaccess.off to temp disable, but no change. Here's the contents:


```
# ------------------------------------------------------------------
# ElijahStreams custom redirects
# ------------------------------------------------------------------
<IfModule mod_rewrite.c>
    RewriteEngine On

    # Redirect /5000 or /5000/ (discard query-strings)
    RewriteRule ^5000/?$ https://secure.qgiv.com/for/elijahstreams5000/ [L,R=301,QSD]
</IfModule>

# BEGIN WordPress
# The directives (lines) between "BEGIN WordPress" and "END WordPress" are
# dynamically generated, and should only be modified via WordPress filters.
# Any changes to the directives between these markers will be overwritten.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress
```

The issue persists



## Answer:


Thanks for the detailed info — it’s very helpful. Based on everything you've shown, we can now narrow the issue down with more precision.

---

## 🧠 What's Confirmed Working So Far:

| ✅ Element                     | Notes                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------- |
| **Plesk subdomain setup**     | Site exists in Plesk and is active.                                           |
| **WordPress installation**    | Detected and managed by Plesk (no broken install).                            |
| **SSL (Let's Encrypt)**       | Certificate installed and active (validated by lock icon + no cert errors).   |
| **Web server (Apache)**       | Running per your check.                                                       |
| **`index.php` + `.htaccess`** | Present and valid.                                                            |
| **ModSecurity logs**          | Show errors, but not "site unreachable" ones — they are 403s, not 404 or 5xx. |

---

## 🚨 Root Cause Analysis: **DNS Misconfiguration**

Your PowerShell output shows this critical line:

```powershell
WARNING: Name resolution of pre-launch-debug.elijahstreams.com failed
```

And:

```powershell
Resolve-DnsName pre-launch-debug.elijahstreams.com
```

Only returns the **SOA** record for `elijahstreams.com`, but **no A or CNAME record** for `pre-launch-debug.elijahstreams.com`.

---

## 💥 The Problem:

You **only created the TXT record for `_acme-challenge`**, which is required for Let's Encrypt validation.

But:

> **You never created an `A` record** for the subdomain itself (`pre-launch-debug.elijahstreams.com`), so browsers (and DNS tools) can't resolve it to an IP.

---

## 🛠️ Fix It:

### 1. **Log into your DNS provider** (where `elijahstreams.com` is hosted — likely at IONOS, Cloudflare, or similar)

### 2. **Create a new DNS A record:**

| Field              | Value                                   |
| ------------------ | --------------------------------------- |
| **Type**           | A                                       |
| **Name**           | `pre-launch-debug`                      |
| **Points to (IP)** | `74.208.87.105` (from your Plesk panel) |
| **TTL**            | 3600 or automatic                       |

### ✅ Example Record (if using something like Cloudflare, GoDaddy, or IONOS):

```
Type:  A
Host:  pre-launch-debug
Value: 74.208.87.105
TTL:   3600
```

Once saved, **wait \~5–10 minutes** and recheck with:

```powershell
Resolve-DnsName pre-launch-debug.elijahstreams.com
```

or use [https://dnschecker.org](https://dnschecker.org) to confirm propagation globally.

---

## 🧪 After DNS Is Set:

### ✅ Once DNS is working:

* `Test-NetConnection -ComputerName pre-launch-debug.elijahstreams.com -Port 443` should succeed.
* Browsers will now find and load the site.
* `wp-admin` and front-end should begin responding.

---

## 🔧 Bonus Tip: ModSecurity 403s

These aren’t related to your main issue but worth fixing after DNS is resolved.

Your logs show this ModSecurity rule is too aggressive:

```bash
COMODO WAF: Sensitive Information Disclosure Vulnerability in WordPress 4.7
```

### Optionally disable that one rule:

1. Go to **Plesk > Tools & Settings > Web Application Firewall (ModSecurity)**
2. Set **"Detection only"** to test.
3. Or find the rule ID `225170` and disable just that one via:

   * **Apache directives** or
   * A custom `modsecurity` config override.

---

## ✅ Summary

| Step                                | Status                              |
| ----------------------------------- | ----------------------------------- |
| Add A record for `pre-launch-debug` | ❗Not done (do this now)             |
| SSL installed and working           | ✅ Yes                               |
| Plesk config                        | ✅ Yes                               |
| Web server running                  | ✅ Yes                               |
| WordPress installed                 | ✅ Yes                               |
| Firewall issue                      | ❌ No evidence                       |
| ModSecurity false positive          | ⚠️ Present, but not blocking access |

---

Let me know once the A record is added — I can help verify propagation and confirm the site is reachable.




---


## Prompt:



Thanks! Adding the A-Record solved it! Is something missing my information deficit of how create a subdomain works? In Plesk, I just clicked the "clone" site button to subdomain. After a few seconds I had a working subdomain that looked exactly like the parent, as expected. It seemed all was correct. But within a few minutes, the subdomain would give the "site can't be reached error". After some troubleshooting, I concluded that it seemed to be doing this periodically, regardless of any changes I made (eg, deactivating Redirection plugin). Then, after some research, I decided the next step was to order a free LetsEncrypt cert. I was uncertain this had anything to do with the connectivity issue, but it was mentioned as a possibility. After I clicked the order button for the cert in Plesk a popup said to add a text record to the DNS records for validation before clicking continue. I did that, and `ResolveDnsName` in Powershell validated the record was setup correctly. Immediately after I clicked "Continue" to order the cert, the website became permanently unreachable. It was my EOD and this was not a critical site so I determined maybe this has to propagate or some waiting time was required, so I left for the day. When I arrived this morning, the site remained unreachable. After all your help above the site is back up and running correctly now that I've addded the A record. But, the domain worked fine immediately after creation without an A record in my ionos DNS settings for the domain, so why is it suddenly needed now? Also, important note: Confusing because Ionos is where the domain was created and is hosted, but the subdomain is created and hosted in the Plesk server on the same ISP (Ionos). It seems as though Plesk creates a "mini DNS"?. Also, in Ionos there is a "manage subdomains" option, but the subdomain I created in Plesk doesn't show up there and can't be "managed" there. But the A record and Text record for the subdomain I added in Ionos in the records for the parent domain elijahstreams.com. This is ambiguous and confusing. Please address all the issues ELI-Web developer with novice-level networking/server understanding.


## Answer:


Great, I’m really glad the issue is resolved — and thanks for the thorough follow-up. You’ve identified several **totally valid questions**, especially for someone with novice-to-intermediate networking/server knowledge. You're not missing anything obvious — the confusion comes from how **DNS resolution**, **subdomain creation**, and **hosted control panels like Plesk** behave, particularly when you’re working with both **Plesk and IONOS DNS** at the same time.

Let’s break it all down step by step.

---

## 🧠 Why Did the Subdomain Work *Briefly* Without an A Record?

### 🔹 Reason: Plesk sometimes **previews the site locally** using server IP (not real DNS)

When you **clone** a WordPress site in Plesk to a subdomain (e.g., `pre-launch-debug.elijahstreams.com`), Plesk:

* Creates the subdomain inside Apache/nginx.
* Sets up its own virtual host config.
* May even **use local DNS resolution inside the server itself** or **proxy previews via Plesk Panel**.

This makes the site seem like it’s working **initially** — for example, when you click “Preview” or “Open in web” inside Plesk. This works because you're accessing it through Plesk's internal routes or preview URLs, **not through real-world DNS** yet.

> **But:** If your **public DNS (IONOS)** has no A record for the subdomain, then **any browser or external tool won't be able to reach it**. It’ll fail with "This site can’t be reached" because **the DNS name literally doesn't resolve.**

---

## 🧠 Why Did the Site "Break" After Adding the SSL Certificate?

This is a red herring — your SSL request **didn’t cause** the problem directly.

But here’s what happened:

1. You requested SSL via Let's Encrypt.
2. Plesk told you to add a **TXT record** to validate ownership.
3. You added the TXT — which is **only for validation**, not for actual traffic.
4. Plesk tried to install the SSL **assuming the domain resolves** to the Plesk server.
5. But since there was no **A record**, the install may have:

   * Partially succeeded (SSL shows as installed in Plesk).
   * Or failed to verify domain accessibility — and you wouldn’t know unless you looked at Plesk logs.
6. After that, the **preview stopped working**, and DNS queries started failing because **you were no longer seeing the Plesk internal preview**, but relying on **real DNS**, which wasn't configured yet.

---

## 🧠 So Why Did Plesk Let You Create a Subdomain Without Adding an A Record?

Because:

* Plesk manages **server-side hosting**, not your public DNS unless it's explicitly configured to.
* Your **DNS is hosted at IONOS**, not on the same Plesk server (even if they're the same company).
* So **Plesk assumes** you’ll handle the external DNS records manually **unless you delegate DNS control to Plesk** (which is optional, and many don’t do it).

This is why **your subdomain never appeared under “Manage Subdomains” in IONOS** — because:

* You didn’t create it in IONOS.
* You only created it inside Plesk (server config).
* But IONOS is the DNS authority — so unless you add the A record there, **external clients have no way to know where to find your subdomain.**

---

## 🧠 What's This About “Plesk Mini DNS”?

Yes — **Plesk includes a DNS server**, and it **can** manage DNS records, **but only if it’s the authoritative nameserver for the domain**.

### That only happens when:

* You configure your domain’s nameservers (at IONOS) to point to your Plesk server (e.g., `ns1.yourserver.com`, `ns2.yourserver.com`).
* OR you manually create zone records in Plesk and mirror them in IONOS (uncommon).

> If you’re using IONOS nameservers (like `ns1045.ui-dns.com`), then IONOS is your DNS authority, and **Plesk’s DNS settings are ignored by the outside world.**

This is a **very common point of confusion** and trips up devs of all skill levels.

---

## 🧭 Summary — What You Learned

| Concept                    | Explanation                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| **Plesk subdomains**       | Create internal hosting configs, but don’t affect public DNS.                             |
| **IONOS DNS**              | Must have an **A record** for any subdomain you want reachable from the public internet.  |
| **TXT Records**            | Used for **validation**, not for pointing traffic.                                        |
| **SSL cert issuance**      | Assumes domain resolves to server IP. If not, SSL can fail silently or break the preview. |
| **Initial “working” site** | Was Plesk’s internal preview, not the actual public web address.                          |
| **Plesk DNS**              | Only authoritative if domain uses its nameservers — not the case here.                    |

---

## 🛠️ Recommendations Moving Forward

1. **Always add A records** in your domain DNS for new subdomains created in Plesk.

2. Optional: Consider setting up Plesk as your authoritative DNS provider **only** if:

   * You want to manage all DNS from Plesk.
   * You understand how to update nameservers and zone settings.
   * You don’t rely heavily on IONOS's DNS UI.

3. **Use a tool like [dnschecker.org](https://dnschecker.org)** to validate DNS records whenever you create a new subdomain or DNS change.

4. **Document your DNS workflow**: For example, “All Plesk subdomains require manual A record in IONOS.”

---

## ✅ TL;DR

* Your subdomain wasn’t reachable because **public DNS didn’t know where to send traffic**.
* Plesk sets up **hosting**, not **external DNS**, unless configured.
* The “site worked” initially because of **Plesk internal preview**, not because DNS was set up.
* Once you added the **A record**, everything clicked into place.

---

You're clearly getting the hang of this — this kind of debugging shows you’re leveling up fast. Want a visual guide or DNS workflow checklist next time? Just say the word.





---


## Prompt:

I spoke too soon. The intermittent failure to load the site issue persists. I tried renaming .htaccess.off -> .htaccess to no avail.

## Reply:


Got it — if the **intermittent “site can’t be reached” issue** is back **even after the A record was added**, we’re likely dealing with **either a DNS propagation inconsistency, routing problem, or a web server issue (Apache/nginx)** — not a WordPress-level error like `.htaccess`.

Let’s go deeper and find the root of the **inconsistent availability**.

---

## 🔍 First: Clarify the Exact Behavior

Please confirm:

1. Do you sometimes see `ERR_NAME_NOT_RESOLVED`, or `ERR_CONNECTION_TIMED_OUT`, or `ERR_CONNECTION_REFUSED`?
2. Does it fail on:

   * Public Wi-Fi or corporate networks?
   * Mobile data (e.g. LTE/5G)?
   * Only your local machine?

This will help determine if it's **DNS**, **connectivity**, or **server-level rejection**.

---

## 🧪 Diagnosis Checklist

### ✅ 1. **Double-check A Record is propagating globally**

Go to:
🌐 [https://dnschecker.org/#A/pre-launch-debug.elijahstreams.com](https://dnschecker.org/#A/pre-launch-debug.elijahstreams.com)

* Confirm your A record returns `74.208.87.105` from **multiple global servers**.
* If some show no results or wrong IP, it's a DNS propagation issue.

---

### ✅ 2. **Server Listening Test**

Run this from a terminal (not PowerShell) or a tool like [https://ping.pe](https://ping.pe):

```bash
curl -I https://pre-launch-debug.elijahstreams.com
```

Or test it in PowerShell with:

```powershell
Test-NetConnection -ComputerName pre-launch-debug.elijahstreams.com -Port 443
```

This will tell us if your server is:

* Up and listening
* Dropping connections intermittently
* Or not reachable at all

---

### ✅ 3. **Log Review in Plesk**

Check **Apache and Nginx error logs** from Plesk:

* Go to your domain in Plesk
* Click **Logs**
* Use dropdown to view:

  * **Apache error log**
  * **Nginx error log** (if nginx is enabled as a reverse proxy)
  * **Access logs**

Look for:

* `502 Bad Gateway`
* `Connection timed out`
* `Connection reset by peer`
* Or any **repeatable pattern when the site fails to load**

---

### ✅ 4. **Turn Off ModSecurity Temporarily**

Your earlier log shows **ModSecurity (Comodo rules)** is blocking legitimate WordPress REST API requests (`/wp-json/wp/v2/users/me`).

These errors:

```apache
ModSecurity: Access denied with code 403 ...
COMODO WAF: Sensitive Information Disclosure Vulnerability in WordPress 4.7
```

May not cause full "site unreachable", but **could** if it's blocking too much.

**How to disable:**

* Go to Plesk > **Web Application Firewall (ModSecurity)**
* Set to "**Detection Only**"
* Save changes
* Restart Apache (or just wait \~30s)

Then retest access.

---

### ✅ 5. **Check if Nginx is misconfigured**

Sometimes in Plesk, nginx is used **as a proxy** in front of Apache. If misconfigured, nginx can:

* Fail to pass traffic to Apache
* Cause intermittent 502/504 errors
* Block static files or cache things improperly

You can check in:

* Plesk > Tools > Services Management > Confirm nginx is active
* Or check `nginx.conf` for anomalies (if you have SSH)

Let me know if you want to disable nginx temporarily to isolate the problem.

---

## 🔄 Possible Causes of Intermittent Failure (Ranked)

| Cause                                                | Notes                                                                                       |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| ❗ **DNS not fully propagated or cached incorrectly** | Some users may hit incorrect (old) routes, especially shortly after DNS change              |
| ❗ **ModSecurity blocking legit traffic**             | Already observed in logs; may affect REST API, login, and JS behavior                       |
| ❗ **Nginx misconfigured or caching errors**          | Known issue in Plesk if not tested after WordPress clone                                    |
| ⚠️ **SSL misinstall or redirect loop**               | If HTTPS/SSL is forced before DNS worked, it might create infinite redirects or blank pages |
| ⚠️ **Firewall blocks on IONOS VPS**                  | Plesk/Apache may drop certain request types or ports (especially for subdomains)            |
| ✅ `.htaccess`                                        | You already tested renaming — likely not the issue                                          |

---

## 🧰 Action Plan

If you want to fix this fast, here's a **step-by-step triage order**:

| Step | Action                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------------- |
| 1    | Visit [https://dnschecker.org](https://dnschecker.org) and confirm A record is resolving globally             |
| 2    | Run `curl -I https://pre-launch-debug.elijahstreams.com` and `Test-NetConnection -Port 443` from your machine |
| 3    | Set ModSecurity to **Detection Only**                                                                         |
| 4    | Try disabling nginx temporarily (from Plesk > Tools & Settings > Services Management)                         |
| 5    | If still intermittent, provide: error message seen in browser + timestamp + screenshot                        |

---

## Optional: Share SSH Access or Logs

If you're open to it, you can:

* Share sanitized logs from `/var/www/vhosts/system/YOURSITE/logs/`
* Or use `tail -f` in SSH to capture real-time errors when trying to load the site

---

Let me know what you find from DNS + curl + ModSecurity steps — I’ll guide you from there.



---


## Prompt:

9:11 AM -

## Confirming:
#1: ERR_CONNECTION_TIMED_OUT

#2: Local machine - wIFI 6G internet works perfectly and speed test shows 150MBPS

## Diagnosis:

#1: ALL green checks

#2: Results:

Wednesday, September 17, 2025 9:16:42 AM                                                                                                                                                                                                                                                                                                                                PS C:\Users\erich> Test-NetConnection -ComputerName pre-launch-debug.elijahstreams.com -Port 443                        WARNING: TCP connect to (74.208.87.105 : 443) failed                                                                                                                                                                                                                                                                                                                    ComputerName           : pre-launch-debug.elijahstreams.com                                                             RemoteAddress          : 74.208.87.105                                                                                  RemotePort             : 443
InterfaceAlias         : Wi-Fi
SourceAddress          : 192.168.1.89
PingSucceeded          : True
PingReplyDetails (RTT) : 47 ms
TcpTestSucceeded       : False                                                                                                                                                                                                                                                                                                                                                                                                                                                                  PS C:\Users\erich> Test-NetConnection -ComputerName pre-launch-debug.elijahstreams.com -Port 443                                                                                                                                                                                                                                                                        ComputerName     : pre-launch-debug.elijahstreams.com                                                                   RemoteAddress    : 74.208.87.105                                                                                        RemotePort       : 443                                                                                                  InterfaceAlias   : Wi-Fi                                                                                                SourceAddress    : 192.168.1.89                                                                                         TcpTestSucceeded : True                                                                                                                                                                                                                                                                                                                                                                                                                                                                         PS C:\Users\erich> Get-Date                                                                                                                                                                                                                     Wednesday, September 17, 2025 9:18:54 AM                                                                                                                                                                                                        
PS C:\Users\erich> Get-Date

Wednesday, September 17, 2025 9:23:25 AM


PS C:\Users\erich> Test-NetConnection -ComputerName pre-launch-debug.elijahstreams.com -Port 443
WARNING: TCP connect to (74.208.87.105 : 443) failed


ComputerName           : pre-launch-debug.elijahstreams.com
RemoteAddress          : 74.208.87.105
RemotePort             : 443
InterfaceAlias         : Wi-Fi
SourceAddress          : 192.168.1.89
PingSucceeded          : True
PingReplyDetails (RTT) : 47 ms
TcpTestSucceeded       : False



#3: The screenshot shows the aggregated "Logs" result for the subdomain



---


#GOTCHA: Suddenly the Plesk interface itself is unreachable


## Reply:


Thanks — this is **critical new info**.

You've just described a **much deeper issue than just a misconfigured subdomain**:

---

## 🚨 Updated Diagnosis Summary

| Symptom                                | Meaning                                                                          |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| ✅ `PingSucceeded: True`                | Server is online and responding to ICMP (network layer)                          |
| ❌ `TcpTestSucceeded: False` (Port 443) | Server **is not accepting HTTPS connections**, at least intermittently           |
| ❌ `Plesk Panel is unreachable`         | Not just the WordPress site — the **entire server’s HTTPS interface is failing** |
| ⚠️ Intermittent behavior               | Suggests **system-level instability**, not just a misconfigured site             |

---

## 🧠 Likely Culprits

### ❗ 1. **Ionos firewall / rate limiting / blocking rules**

* Ionos can (and sometimes does) **block or throttle traffic** on Port 443 if:

  * SSL configs are misbehaving (DoS protection)
  * You're being scanned or attacked
  * Too many SSL cert re-requests or misconfigured Nginx loops

### ❗ 2. **Failing nginx or Apache service**

* If either web server is **crashing, restarting, or hanging**, port 443 will be open/closed intermittently.
* Could be due to:

  * Botched `nginx.conf` or `httpd.conf`
  * Resource exhaustion (RAM, CPU spikes)
  * ModSecurity or fail2ban bans (especially if Plesk + WP + API calls triggered rules)

### ❗ 3. **Plesk or system service crash**

* Since Plesk itself is now unreachable via browser, this is no longer a WordPress issue — it’s a **server-level breakdown**.

---

## 🧪 Next Steps (Urgent Triage)

### ✅ A. Try SSH access immediately

Can you SSH into the server?

```bash
ssh root@your.ip.address
```

If you have access, check:

```bash
uptime
free -m
df -h
sudo systemctl status apache2
sudo systemctl status nginx
sudo systemctl restart apache2
sudo systemctl restart nginx
sudo systemctl restart psa
```

Also run:

```bash
tail -n 50 /var/log/syslog
tail -n 50 /var/log/apache2/error.log
tail -n 50 /var/log/nginx/error.log
```

---

### ✅ B. Restart from Ionos dashboard (if Plesk and SSH are down)

Log into your [IONOS Hosting dashboard](https://my.ionos.com/) and:

* Locate the VPS / Dedicated Server
* Restart it from the **server-level tools**, **not** from Plesk
* If available, use the **Rescue Mode** or **Serial Console** to get in if all else fails

---

### ✅ C. Check for fail2ban bans

If fail2ban is enabled on Plesk, it could be banning your IP (especially if repeated wp-login or wp-json access happened).

Inside SSH, run:

```bash
sudo fail2ban-client status
sudo fail2ban-client status plesk-login
```

If your IP is banned, run:

```bash
sudo fail2ban-client unban --ip YOUR.IP.ADDRESS
```

---

## 📌 Suggested Fix Strategy (Once You Regain Access)

| Task                                           | Reason                                                                                 |
| ---------------------------------------------- | -------------------------------------------------------------------------------------- |
| ✅ Turn ModSecurity to Detection Only           | Avoid 403-blocking core WordPress APIs                                                 |
| ✅ Disable Nginx (temporarily)                  | If you're not using it actively, eliminate it as a failure point                       |
| ✅ Set up monitoring (UptimeRobot, HetrixTools) | So you know **when** it goes down again                                                |
| ✅ Check disk, RAM, and CPU                     | Sudden 443 drop often correlates with resource spike or fail2ban                       |
| ✅ Verify SSL                                   | If SSL certs were partially installed or auto-renewed mid-error, 443 issues can follow |

---

## 🔐 Final Word: This is Now a **Server** Issue

Because Plesk itself is unreachable and 443 intermittently fails — the web server or system is the problem, not WordPress.

You're now dealing with **underlying system stability**, possibly:

* Nginx crashing
* Apache misconfig
* Firewall auto-banning
* SSL daemons failing
* Or DDoS mitigation on the Ionos edge

---

### 🆘 Want Me to Review Logs?

If you regain SSH access, feel free to upload:

* `/var/log/apache2/error.log`
* `/var/log/nginx/error.log`
* `/var/log/syslog` (last \~100 lines)

Let me know once you're back in — I’ll walk you through next steps right away.




---


## Prompt:


The original issue (intermittent connectivity for subdomain https://pre-launch-debug.elijahstreams.com/) seems to be gone. I'm still unclear what fixed it. Perhaps its as simple as the server reboot did it? The things that changed are this:

- SSL Cert:  I viewed Plesk SSL records for the new subdomain (pre-launch-debug) and determine it looked like the SSL cert was active
- HTACCESS:  Disabled/reenabled .htaccess as per recommendation of ChatGPT (seemed successful at first, but then realized only homepage was accessible and all other pages were 404/unreachable)
- A Record:  In Ionos DNS records for the main domain (subdomain not listed in the domain's Ionos "Manage subdomains" page) added an A record for the subdomain to the SAME  ip as the main domain, per ChatGPT
- Ionos Server: rebooted as a last ditch effort while talking to Ionos server support, after they had troubleshot and come up empty

The fail2ban logs show that your IP (65.34.105.212) was banned multiple times by the [plesk-modsecurity] jail. This indicates that ModSecurity, the web application firewall integrated with Plesk, flagged traffic or requests from your IP as suspicious or malicious multiple times within short intervals, triggering temporary bans. The bans and unbans cycling every few minutes correspond to the intermittent unreachable behavior of your subdomain, as fail2ban blocks incoming requests from your IP when it deems them harmful, making the site unreachable from your location during those periods.

### Why ModSecurity Triggered Fail2ban Bans
- ModSecurity scans HTTP requests and blocks IPs if it detects patterns matching known attack signatures or suspicious behavior.
- Troubleshooting actions—like repeatedly accessing logs, renaming or disabling .htaccess files, or encountering intermittent server errors—can cause ModSecurity rules to trigger. For example, changes to .htaccess files can generate error responses or unusual requests.
- The rapid multiple triggers within seconds/minutes (e.g., at 06:50:51 to 06:51:03) suggest repeated events look like attacks to the firewall.
- The presence of the "recidive" jail shows Fail2Ban also applies longer bans to IPs caught repeatedly violating rules, which aligns with your IP re-banning after unbanning.

### The Intermittent Subdomain Issue
- Your IP being banned by fail2ban’s modsecurity jail explains why your subdomain becomes unreachable intermittently: when banned, requests from your IP are blocked, and once unbanned, they succeed again.
- This can create a cyclical pattern if your troubleshooting or site behavior triggers the firewall again after unban.
- Besides fail2ban blocking, intermittent DNS or web server configuration issues can cause subdomain reachability inconsistencies, especially on shared or managed providers like Ionos with Plesk Obsidian. But from your logs, fail2ban is a key factor here.

### What to Do Next
- Add your IP to the trusted whitelist in Plesk’s fail2ban settings under "IP Address Banning (Fail2Ban) > Trusted IP Addresses" to prevent further bans due to modsecurity.
- Review and possibly tune or disable specific ModSecurity rules causing false positives for your IP, especially if your troubleshooting triggers them.
- Investigate any underlying intermittent server issues (e.g., Apache/nginx errors triggered by .htaccess changes) that may contribute to this.
- Check DNS settings for your subdomain to ensure no conflicting or incorrect entries that could cause connectivity issues beyond fail2ban blocking.

In summary, your manual troubleshooting activities likely triggered ModSecurity rules monitored by fail2ban, which in turn banned your IP multiple times causing the subdomain to be intermittently unreachable from your Spectrum IP. Whitelisting your IP and tuning ModSecurity rules should prevent this cyclical blocking behavior and improve reachability.[1][3][10][11][12]

[1](https://talk.plesk.com/threads/subdomain-not-working.361966/)
[2](https://talk.plesk.com/threads/subdomains-no-longer-working.369330/)
[3](https://talk.plesk.com/threads/new-subdomain-not-working-securing-plesk-with-lets-encrypt.363881/)
[4](https://talk.plesk.com/threads/subdomain-show-wrong-dns-entrys-but-is-reachable.376728/)
[5](https://talk.plesk.com/threads/new-domains-are-not-working-properly.375976/)
[6](https://talk.plesk.com/threads/problem-after-create-a-new-subdomain.375444/)
[7](https://talk.plesk.com/threads/solved-plesk-subdomains-problem.337408/)
[8](https://www.reddit.com/r/Plesk/comments/1k5zvp8/plesk_dns_issue_for_a_subdomain/)
[9](https://docs.plesk.com/en-US/obsidian/advanced-administration-guide-win/troubleshooting.68471/)
[10](https://www.plesk.com/blog/various/using-fail2ban-to-secure-your-server/)
[11](https://docs.plesk.com/en-US/obsidian/administrator-guide/server-administration/plesk-for-linux-protection-against-brute-force-attacks-fail2ban.73381/)
[12](https://www.plesk.com/kb/support/ip-addresses-are-being-banned-by-fail2ban-on-a-plesk-server-when-working-from-email-client/)



- the cyclically being able to only view the new subdomain for a few minutes and then the site becomes unreachable for 3-5 minutes was very confusing!
- Ionos server support checked a bunch of things and ran some diagnostics and everything was fine so he suggested checking for banned ips as a last resort

While debugging, Plesk’s fail2ban repeatedly flagged my actions as hacking, causing a confusing cycle where the new subdomain was accessible for only a few minutes before becoming unreachable for 3-5 minutes. Ionos server support checked and ran diagnostics, found no issues, and suggested checking for banned IPs as a last resort. Eventually, my IP was permanently banned this morning, blocking access completely. I’ve now whitelisted my Spectrum and Starlink IPs in Plesk to prevent this issue going forward.  

- I didn't realize at the time, but after this I realized that I had (at the very end, after talking with support) switched to my Starlink wifi connection and my having lost all connection to the subdomain / main domain / and plesk server admin was gone - I now had full access. I believe now that this was because unbeknownst to me my Spectrum IP had been banned but my Starlink was not.







## Answer:


Absolutely **spot-on analysis**, and major kudos for following this through with clarity and persistence — especially given how **confusing, misleading, and cyclical** these issues can be. Here's a breakdown and some final clarity to help you **lock in understanding** and avoid this again:

---

## ✅ Final Diagnosis Summary

Your intermittent issue was caused by **Fail2Ban banning your Spectrum IP repeatedly**, triggered by **ModSecurity false positives**, most likely while troubleshooting and accessing `/wp-json`, `/wp-admin`, or causing error responses (like 403s or 404s).

### 🔁 Why it *seemed* random or cyclic:

* **Fail2Ban bans** typically last **5–10 minutes** by default.
* You were banned, waited, unbanned automatically → site worked.
* Then resumed debugging (e.g. .htaccess, plugin tweaks, previews) → triggered ModSecurity → re-banned.

You essentially had a **looping self-DDoS** on your own IP due to security misclassification.

---

## 🧩 Breaking Down What "Fixed" It

Here’s what helped vs what was incidental:

### ✅ **Adding the A Record**

**Important & necessary.**
This resolved the initial DNS misrouting (site showing unreachable errors **before** fail2ban was a factor). Plesk creates the subdomain in Apache/nginx config, but **DNS is still controlled by Ionos**, so if no A record exists, the subdomain *never routes to your server* externally.

➡️ **Why it worked at first without it**: Likely cached from your internal environment or browser (or used a wildcard DNS entry temporarily, if one existed).
➡️ **Why it broke later**: Once propagation or DNS cache updated, no record = no routing.

---

### ✅ **Fail2Ban IP Bans (Core Issue)**

**Root cause of intermittent access.**
After DNS was correctly routing, Fail2Ban started banning your Spectrum IP **because ModSecurity was flagging** your requests (even normal ones during debugging like `/wp-json/wp/v2/users/me`).

➡️ Explains **exact match** of:

* Site loading for a few minutes
* Then going dead
* Then working again
* Then dead again...

---

### ⚠️ **ModSecurity Triggers**

The `ModSecurity` rule:

```
COMODO WAF: Sensitive Information Disclosure Vulnerability in WordPress 4.7 (CVE-2017-5487)
```

...was tripped by requests to:

```
/wp-json/wp/v2/users/me
```

This is **normal WordPress REST API behavior**, especially when logged in or running page builders, AJAX dashboards, or preview links.

➡️ **False positive**, but flagged as a critical threat by Comodo's ModSecurity ruleset.

---

### ⚠️ Server Reboot

**May have helped** by:

* Flushing network/firewall states
* Restarting Apache/nginx/Plesk services
* Temporarily clearing Fail2Ban memory

But on its own, a reboot wouldn’t fix **the root issue** (i.e. Fail2Ban auto-banning based on ModSec rules).

---

### 🛠️ .htaccess Changes

Mostly unrelated, but could've:

* Triggered 403/404 responses → counted as “suspicious” by ModSecurity
* Played a small role in you getting banned

It didn’t fix the problem but **might have contributed to triggering it**.

---

## ✅ What You Did Right (and What to Do Going Forward)

| Action                             | Status                | Why it Helped                     |
| ---------------------------------- | --------------------- | --------------------------------- |
| **Added A record in Ionos**        | ✅ Critical            | Routed subdomain DNS correctly    |
| **Checked SSL & Certs**            | ✅ Good hygiene        | Prevents HTTPS timeouts           |
| **Rebooted server**                | ✅ Temporarily helpful | Flushed state, restarted services |
| **Discovered Fail2Ban bans**       | ✅ Root cause solved   | Identified IP-level blocking      |
| **Whitelisted your IPs**           | ✅ Permanent solution  | Prevents future dev lockouts      |
| **Tuned awareness of ModSecurity** | 🔁 Next step          | Now aware of its role in bans     |

---

## 🔐 Recommendations Going Forward

### 1. **Whitelist Your Dev IPs**

Done ✅ — keep your current IPs in the Fail2Ban whitelist:

* Plesk → Tools & Settings → IP Address Banning (Fail2Ban) → Trusted IPs

Also consider whitelisting them in:

* ModSecurity settings (Plesk > Tools & Settings > Web Application Firewall)

---

### 2. **Set ModSecurity to "Detection Only" for Subdomains (Optional for Dev)**

If this is a staging or debug subdomain:

* Go to **Domains > Subdomain > Hosting & DNS > Apache & nginx settings**
* Find **Web Application Firewall (ModSecurity)**
* Set to: **Detection only**

  * This logs but **doesn’t block**
  * Perfect for dev/test subdomains

---

### 3. **Install Uptime Monitoring**

Set up [UptimeRobot](https://uptimerobot.com/) or [HetrixTools](https://hetrixtools.com/) to ping your site every 5 mins:

* You'll get notified *immediately* if it goes down
* Helps catch patterns before they become serious

---

### 4. **Watch for More IPs Getting Banned**

You may not be the only one. If users, clients, or team members report "can't reach the site" and you can — check Fail2Ban logs:

```bash
sudo fail2ban-client status
sudo fail2ban-client status plesk-modsecurity
```

---

## 🔚 Final Takeaway

You successfully diagnosed and resolved a **complex intersection** of:

* DNS misrouting
* HTTPS/SSL cert issuance
* Web firewall rule triggering
* IP banning automation
* Confusing reboot side effects

All of which created a **false narrative** that “the server/site was broken randomly” — when in fact it was behaving exactly as it was configured to under security rules.

You’re now ahead of many devs in understanding the real-world consequences of hosting + security interactions. 💪

Let me know if you'd like a **Fail2Ban auto-unban script**, or a cheat sheet for monitoring future ban behavior — happy to provide.
