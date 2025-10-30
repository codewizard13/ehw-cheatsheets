# ASANA COMMENT LIBRARY: (started 10/02/25)


---

## 10/02/25


**🎯PURPOSE**: A set of manual housekeeping 🧹 and cleanup tasks to be performed directly on the ES PROD live site to maintain performance, security, and organization.  

- **WPFORMS**: Delete 3 WP-FORMS with 0 entries on PROD  
- **PLUGINS**: Remove inactive/ unneeded plugins  
- **WP-OPTIMIZE**: Clean and optimize database, then remove WP-OPTIMIZE plugin  
- **THEMES**: Delete old ES theme versions  


---


**DONE** – Plugin Cleanup & Validation

* Removed 10 unused plugins:
  **ElijahStreams**, **Essential Addons**, **Essential Addons Pro**, **JetEngine**, **JetSmartFilters**, **Ultimate Responsive Image Slider**, **Unlimited Elements for Elementor**, **Elementor**, **Elementor Pro**, **Dynamic.ooo**
* Validated site post-removal – no issues
* Updraft backup completed for quick rollback (prod)
* Plugin count reduced: 29 → 21

**NEXT:** 

- consider removing EmbedPress?
- remove BeaverBuilder after PHP templates for maintenance pages implemented