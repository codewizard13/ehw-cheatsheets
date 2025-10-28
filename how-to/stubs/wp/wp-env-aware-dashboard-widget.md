### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/19/25


## CONTENT_BELOW: ##

---



Add environment-aware admin dashboard notice for environment visibility

### Summary
This commit introduces a custom admin notice displayed exclusively on the main WordPress dashboard screen (`/wp-admin/index.php`). The notice visually indicates the current environment the site is running in (development, staging, or local) to improve developer awareness and reduce risk of confusion or accidental changes in inappropriate environments.

### Details

- **Context and Motivation:**  
  In multi-environment WordPress setups (local, development, staging, production), it’s critical for developers, QA, and site administrators to instantly recognize the environment they are working in. This helps prevent mistakes such as performing production-level actions on staging or development sites, or vice versa.

- **Implementation Overview:**  
  The notice hooks into the `admin_notices` action and uses `get_current_screen()` to restrict output exclusively to the main Dashboard screen, preventing clutter or confusion on other admin pages.

- **Environment Detection:**  
  The function first attempts to use the WordPress core-supported `wp_get_environment_type()` (introduced in WP 5.5) to retrieve the current environment. If this function is unavailable (backwards compatibility), it defaults to 'production', resulting in no notice displayed.

- **Conditional Output:**  
  - For `'local'` and `'development'` environments, the notice displays the label `DEV` with an orange background, aligning with common color conventions for development warnings.
  - For `'staging'`, the label `STG` is displayed with a yellow background, visually distinct to highlight the staging environment.
  - No notice is shown for the `'production'` environment to avoid unnecessary distractions for live site admins.

- **Styling:**  
  The notice is styled with inline CSS to position it just below the admin bar and above the dashboard heading. It uses flexbox to align the label to the right, padding and margins to maintain spacing consistency, and color-coded backgrounds for immediate visual recognition.

- **Commented Out Legacy Code:**  
  The previous simpler notice (always displaying “Hey I love Apples!” on an orange background) is retained in commented form for reference and potential fallback.

### Benefits

- **Enhanced Environment Awareness:**  
  By surfacing the environment prominently in the dashboard UI, developers and admins reduce the risk of operational errors tied to environment confusion.

- **Minimal Intrusion:**  
  The notice only appears on the dashboard, avoiding clutter across other admin pages.

- **Standards-aligned:**  
  Leveraging WordPress core environment detection (`wp_get_environment_type`) ensures forward compatibility and consistency with WordPress conventions.

- **Extensible:**  
  The design allows easy addition of other environments or customization of labels/colors as needed.

---

This addition supports safer development workflows and operational clarity in environments with multiple deployment stages.
