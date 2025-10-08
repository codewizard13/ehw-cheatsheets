## 🧾 KB STUB 2: LocalWP Settings & Extension Backup

**Tentative Filename:** `sop-wp-localwp-settings-backup.md`

# Backup LocalWP Extension Settings and Site Registry

**Context:**  
LocalWP stores its global settings, extension data, and site registry in the Windows user’s `AppData\Roaming\Local` folder. Before migrating, resetting, or re-installing LocalWP, these settings should be backed up.

## What to Backup

✅ Path to backup:
```

C:\Users[YourUsername]\AppData\Roaming\Local

```

This folder includes:

- `sites.json`: Registry of LocalWP site metadata
- Extension configuration and plugin states
- Possibly addon-specific notes or cache

## Why It's Important

- Preserves LocalWP project links without needing to re-import each site manually
- Maintains settings for debugging tools, database viewers, and custom extensions
- Supports seamless transition to new dev machines

## Additional Notes

- Actual WordPress files live under:
```

C:\Users[YourUsername]\Local Sites\

```
Backing up both this and the `Roaming\Local` folder is recommended.


