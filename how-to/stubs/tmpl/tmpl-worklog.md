### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/18/25


## CONTENT_BELOW: ##

---

Here's a **cleaned-up, professional, and more structured** version of your worklog. It keeps your detailed tracking style intact while improving clarity, readability, and consistency:

---

# 🗂️ WORK LOG

**Project:** ElijahList / ElijahStreams
**Author:** Eric Hepperle
**Date:** 2025-09-18 (THU)
**Timezone:** CST (Alabama)
**Work Hours:** 8:00 AM – 4:00 PM (30 min lunch)

---

## 📅 Schedule & Milestones

* **8:00 AM:** Work session started
* **9:22 AM:** ✅ **Milestone:** ElijahStreams theme migration complete
* **11:25 AM:** ✅ **Milestone:** Finalized and archived *ES Rebuild* Asana board

---

## 🚧 Ongoing Tasks

* [ ] Migrate remaining 'team' docs to shared Web Dev folder as found
* [ ] Add Notepad++ tab notes to `elsm-kb`
* [ ] Migrate Boot.dev notes to `ehw-cheatsheets/`
* [ ] Ensure `images/` folder is in site root (for email image rendering)
* [ ] Add ACF field for Wells stats
* [ ] Create pure PHP maintenance mode page (no blocks)
* [ ] Delete inactive plugins/pages next Tuesday if no issues
* [ ] Lock down or restrict Theme File Editor? (Discuss pros/cons)
* [ ] Update theme documentation (changelog + migration guide in GitHub)

---

## 🧠 Knowledge Base Additions (elsm-kb)

**Add to `comms/index.md`: Conversation from 2025-09-09**

> I turned off auto-renewal... Boot.Dev... gamification... \[full convo excerpted]

---

## 📝 Misc. TODOs

* [ ] Find best tutorials on customizing GitHub profile
* [ ] Download latest WordPress to LocalWP
* [ ] Check for Windows or Dell driver updates
* [ ] Remove Jeff from About page
* [ ] Testimonials: Standardize "Viewer" label color
* [ ] Update Wells stats in ACF (store for future edits)
* [ ] Review secondary ACF role issue (possibly fix by re-saving guest posts)
* [ ] Check with Michael if site update should be postponed
* [ ] Convert TODOs to Asana tasks (in progress)

---

## 🔧 ES WordPress Maintenance Tasks (Non-Elementor)

### Backups & Prep

* **8:02 AM:** Plesk backup attempt failed (#GOTCHA)
* **8:24 AM:** Ran manual Updraft backup — ✅ success
* **12:08 PM:** Updraft backup after Wells stat update — ✅ complete

### Maintenance Mode

* Installed & activated LightStart plugin
* Initial maintenance page broke (#GOTCHA – built with Elementor)
* ✅ Fixed by installing Beaver Builder and recreating page

### Theme Migration

* Deactivated Elementor, Embedpress, and custom plugins
* Uploaded and activated `elijah-theme v3.03`
* Assigned menu locations

  * ✅ TIP: Use *Appearance > Menus > Manage Locations* for faster setup
* Activated sidebars (via empty custom HTML widgets)
* Updated shortcodes on Wells page
* Fixed:

  * About Page (feat. image, content)
  * Testimonials Page (cleared content, set template)
  * Podcast Links Page
  * Events Page

---

### Theme Migration: Observations & Notes

* `Maintenance` page must not rely on Elementor in future
* Sidebar widgets activate correctly with empty custom HTML widget
* Wells video spacing issue may relate to Vimeo only (#GOTCHA)
* Secondary ACF role taxonomy not rendering (possible fix: re-save?)
* Footer & Privacy/Terms menus should have **no** menu locations assigned
* Theme name: update to "ElijahStreams Web Dev Team" (remove Eric’s name)

---

## 🧩 Asana Project Management

* **10:21 AM:** Archived old board → `ES – Tickets (2024–2025 Apr)`
* Exported tasks to JSON for backup
* Created new Asana board: `ES MAINT`
* Created template from Maintenance board
* Created Figma header image for “Nice to Have” list

---

## 📊 Wells Statistics (Updated per Michael)

**Location:** Appearance > Theme File Editor > `page-wells.php`

```txt
All Wells:        592  
People Impacted:  207,200
```

---

## 💬 Team Communication

* **8:34 AM:** Informed team via Teams chat about maintenance mode start
* **1:56 PM:** Followed up with Mariah (Teams) about podcast issue resolution
* **Pending:** Check Michael’s feedback on timing of site updates

---

## 🛠️ Code Snippets (Git Logging)

```sh
git log --pretty=format:"[%cn] %h:  %s"
git log --reverse --pretty=format:"[%h] %cd (%cn):  %s" --date=format:'%Y-%m-%d %H:%M' | head -1
```

---

## 🍽️ Lunch

* **12:30 PM – 1:00 PM:** Lunch break

---

Let me know if you'd like this exported to Markdown, PDF, or added to your documentation repo.
