# Ensure `/images/` Folder is Preserved During PROD Theme Migration

**Potential Filename:** `sop-wp-prod-deploy-images-folder.md`


**Context:**  
During a theme overhaul or WordPress production deployment, it's critical that the `images/` folder in the site root is preserved.

## Why This Matters

- **Email marketing dependencies:** Past email blasts often embed absolute URLs to image assets (e.g. `https://example.com/images/logo.png`).
- **Brand consistency:** Logos, headers, and marketing graphics are commonly linked here.
- **Third-party links:** External tools or embeds may reference these assets directly.

## Deployment Requirement

✅ **Copy the entire `/images/` folder from the old PROD site into the new WordPress root** _before or during deployment_.

## Risk of Skipping

- Broken images in legacy emails
- Inconsistent branding
- Confusing errors from marketing tools or automation platforms
