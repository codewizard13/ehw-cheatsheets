Eric Hepperle, 10/02/25 ChatGPT


---


Here’s a **detailed and polished “Feature Tiers” breakdown** for your `README.md`, structured to clearly separate **Core Features**, **Admin & UX Enhancements**, and **Developer-Focused Tooling**.

This structure helps different team members (non-devs, developers, QA, maintainers) quickly identify the parts relevant to them.

---

## 🔧 Core Theme Features

- **Zero page builders:** Built entirely with classic PHP — no Gutenberg, Elementor, or Bricks dependencies.
- **Custom post types:** Includes Videos, Guests, Testimonials, and Events with tailored archive and single templates.
- **Modular banner system:** Reusable CTA/banner blocks via template parts and partial SCSS (`_banners.scss`) for consistent conversion UX.
- **Flexible content layout:** Responsive design using CSS Grid + Bootstrap utilities, optimized for all screen sizes.
- **Reusable loop rendering:** `elsm_render_loop()` for DRY, declarative WP_Query integration across templates.
- **Scoped styling structure:** Organized SCSS partials (`_nav.scss`, `_header.scss`, etc.) and maintainable build output (`app.css`).
- **Modular sidebar widgets:** Widget logic shared across templates for consistency and simplified updates.
- **Advanced search:** Supports multi-post-type filtering, taxonomy queries, and ACF custom field logic for highly targeted results.


## ⚙️ Admin & Environment Enhancements

- **Environment-aware logic:** Shortcodes, stats, and admin notices adapt based on environment (`DEV`, `STG`, `PROD`), reducing cross-env risks.
- **Dynamic admin notices:** Color-coded ENV labels and safe conditional rendering based on `WP_DEBUG` and user capabilities.
- **Centralized stats config:** Site-wide data like Wells counters and FAQ values are maintained via constants (`WELLS_STATS`, `faq_since_date`) for consistency and easy updates.
- **Admin bar customization:** Adds CPT counters, quick links by role, and shortcut access to edit/archive views.


## 🧰 Developer & DevOps Tooling

- **Build automation:** Includes Playwright for automated screenshots, ZIP build process for deploy-ready packaging, and version bump tracking across theme files.
- **Utility functions library:** Helpers for deep array merging, dynamic ACF tag parsing, environment injection, and shortcode-to-ID resolution.
- **Versioning discipline:** Changesets tracked with semantic versioning across `style.css`, `package.json`, and `README.md` for traceable releases.
- **Loop abstraction:** `elsm_render_loop()` supports flexible args and layout overrides — enabling a declarative loop system without duplication.
- **Scoped CSS fixes:** Targeted iframe and layout fixes (e.g. Vimeo embed scoping) reduce global style collisions and regressions.


## 🧭 Project Phase Awareness

- **Theme Overhaul Completion (v3.03):** This theme ships post-launch of the ElijahStreams.com overhaul project, with foundational stability and a clean base for future growth.
- **First Maintenance Release (v3.05):** Focus areas include conversion UX, safety across environments, and maintainability improvements — setting the tone for future iterations.

---

### ✅ Highlights of this Structure:

| Benefit                             | Description                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Clarity by Role**                 | Makes it easier for devs, QA, and content/admins to find what they care about                  |
| **Highlights post-launch maturity** | Makes the evolution of the theme obvious (v3.03 as a foundation, v3.05 as maintainable future) |
| **Easier documentation upkeep**     | Sections can be updated independently as different teams add new features or tooling           |

---

Would you like a downloadable Markdown version or have it embedded into an updated `README.md` structure with install instructions, usage, or release logs?
