<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# HOW-TO: 🛠 Local Development Setup Using VS Code & LocalWP for WordPress


**Version:** 1.0

> Optimized for: Web development teams working with full-stack and WordPress on Windows, macOS, and Linux (Sept 2025)

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-22       |
| **Date Updated**:  | --               |
| **AI Assistance**: | ChatGPT          |

---

## 📌 Overview

This comprehensive guide walks through setting up a **local development environment** tailored for WordPress and full-stack projects using **LocalWP** and **Visual Studio Code (VS Code)**. It covers everything from prerequisites to advanced workflows with Docker and Vagrant, validated and relevant for September 2025.

---

## 🛠 Prerequisites

| Requirement          | Details                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------- |
| **OS Compatibility** | LocalWP supports **Windows**, **macOS**, and **Linux**, with distro-specific notes.         |
| **Hardware**         | At least **4 GB RAM** and **1.5 GB free disk space** recommended.                           |
| **User Permissions** | Full admin rights required for modifying system files like `hosts`.                         |
| **VS Code**          | Install latest stable release; recommended extensions include PHP Debug and WP-CLI support. |

---

## Step-by-Step Setup Guide

### 1. Download & Install LocalWP

- Download from [LocalWP official site](https://localwp.com) for your platform.
- On Windows, run installer as Administrator and install for all users.
- On Linux (e.g. Fedora), ensure dependencies like `libxcrypt-compat` are installed.

### 2. Create Your First WordPress Site

- Launch LocalWP and click “Create a new site”.
- Name your site (determines your `.local` domain).
- Choose environment: “Preferred” (default) or “Custom” for specific PHP/MySQL/Apache versions.
- Set WordPress admin credentials; optionally enable multisite.
- Add site — LocalWP automates SSL, host entries, and site launch.

### 3. Verify and Access Site

- Use LocalWP UI “Start Site” and “Admin” buttons.
- Trust SSL certificates via UI for HTTPS access.

### 4. Key Features to Use

| Feature                            | Benefit                                                          |
| ---------------------------------- | ---------------------------------------------------------------- |
| **WP-CLI built-in**                | Command-line WordPress control within LocalWP.                   |
| **Blueprints**                     | Save reusable site templates including themes, plugins, configs. |
| **Live Links**                     | Share secure URLs of your local site with clients or team.       |
| **Image Optimizer & Link Checker** | Built-in tools for site maintenance tasks.                       |
| **Adminer**                        | Lightweight database GUI alternative to phpMyAdmin.              |
| **Xdebug Support**                 | Integrated debugging with breakpoints configurable in VS Code.   |

### 5. Integrate VS Code

- Open site’s public folder in VS Code via LocalWP’s “Open in…” menu.
- Configure PHP/Composer paths if VS Code reports missing executables.
- Set up debugging via `launch.json` (PHP Debug extension).
- Use terminal for WP-CLI commands through Local’s shell or VS Code terminal integration.

### 6. Optional Advanced Workflows

- Use Docker and Docker Compose for containerized WordPress environments.
- For VM-based setups, consider Vagrant/VVV to mirror production servers.

---

## 🎯 Summary Workflow

```
1. Download & Install LocalWP
2. Create New WordPress Site
3. Start Site & Verify (HTTP/HTTPS)
4. Leverage Features (Live Links, WP-CLI, Xdebug)
5. Open & Develop in VS Code
6. (Optional) Use Docker or Vagrant for production parity
```


```markdown
###  Quick Overview — LocalWP + VS Code Workflow

1. **Download & Install LocalWP**
2. **Create New Site**
   -  Name, domain (mysite.local)
   -  Environment (Preferred or Custom)
   -  WP Login credentials
3. **Start Site**
   -  HTTP/HTTPS front-end
   -  WP admin dashboard
4. **Enable Extra Tools**
   -  Live Links
   -  SSL Trust
   -  Image Optimizer, Link Checker, Adminer
5. **Open in VS Code**
   -  Edit theme/plugin files
   -  Configure PHP Debug (Xdebug)
   -  Run WP‑CLI commands
6. **Optional for advanced setups**
   -  Docker Compose + VS Code
   -  Vagrant/VVV workflows
```
---

## Community Tips

- LocalWP is widely favored for ease of use compared to XAMPP or MAMP.
- It works fully offline unless Live Links or cloud features are used.
- VS Code sometimes requires pointing at LocalWP’s internal PHP installation for debugging.

---

<!-- 📚 References (Optional) -->
## 📚 References / See Also


[1](https://wcanvas.com/blog/how-to-set-a-local-environment-to-work-locally-on-wordpress/)
[2](https://marketplace.visualstudio.com/items?itemName=WordPressPlayground.wordpress-playground)
[3](https://deliciousbrains.com/vs-code-wordpress/)
[4](https://www.endpointdev.com/blog/2019/08/set-up-local-development-environment-for-wordpress/)
[5](https://localwp.com)
[6](https://www.reddit.com/r/Wordpress/comments/14ejnep/what_is_your_local_wordpress_development_setup/)
[7](https://www.youtube.com/watch?v=WFgRWnrSJ8I)
[8](https://community.localwp.com/t/visual-studio-code-local/36252)
[9](https://community.hivepress.io/t/setting-up-and-testing-the-theme-with-vs-code/3852)


---

## ✅ Revision History


| Version | Date       | Author           | Changes Made                                     |
| ------- | ---------- | ---------------- | ------------------------------------------------ |
| 1.00    | 2025-09-05 | Eric L. Hepperle | Initial draft created                            |
| 1.02    | 2025-09-22 | Eric L. Hepperle | Draft formatted as KB article clone of [tmpl].md |

---
