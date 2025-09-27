Eric Hepperle, ChatGPT 2025-09-17



### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:



## CONTENT_BELOW: ##

---



Certainly! Here's a **concise, professional work log entry** using the **Problem → Investigation → Solution** format:

---

### **Work Log Entry – Subdomain Unreachable / Intermittent Access**

**Date:** Sept 17, 2025
**Environment:** Plesk Obsidian on Ionos VPS
**Subdomain:** `https://pre-launch-debug.elijahstreams.com`

---

#### **Problem**

Subdomain intermittently unreachable (`ERR_CONNECTION_TIMED_OUT`). Homepage sometimes loads briefly after changes, then becomes inaccessible again. Plesk panel itself became unreachable at one point. Site access failed from Spectrum but worked from Starlink.

---

#### **Investigation**

* Verified `.htaccess` integrity and disabled temporarily — no change.
* DNS `A` record was missing in Ionos; added manually.
* Let’s Encrypt SSL appeared valid and correctly installed.
* Server rebooted via Ionos panel.
* Running `Test-NetConnection` revealed Port 443 failing intermittently.
* **Key finding:** `fail2ban` logs showed repeated bans of Spectrum IP via the `plesk-modsecurity` jail.

  * Bans were triggered by false positives in ModSecurity rules (e.g., WordPress REST API `/wp-json/wp/v2/users/me`).
  * Bans lasted several minutes, causing the cyclic site-down behavior.

---

#### **Solution**

* Whitelisted known IPs (Spectrum and Starlink) in Plesk > Fail2Ban > Trusted IPs.
* Added missing `A` record for the subdomain in Ionos DNS settings.
* Server reboot ensured clean state and helped re-establish service.
* Subdomain now consistently reachable. No further bans observed.

---

#### **Follow-Up Actions**

* Review and tune ModSecurity rules or set subdomain to “Detection Only” during dev.
* Add UptimeRobot monitoring to track future downtime patterns.
* Document procedure for Fail2Ban unblocking in team SOPs.

---

Let me know if you'd like a markdown or Notion-ready version!
