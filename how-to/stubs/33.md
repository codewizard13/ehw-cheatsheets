Eric Hepperle, ChatGPT, 2025-09-19



### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:



## CONTENT_BELOW: ##

---






Absolutely! Here's a complete **Markdown-formatted** knowledge base (KB) article for your topic, complete with:

* ✅ Step-by-step instructions
* ⚠️ Pitfalls discovered
* 💡 Pro tips
* 📋 Summary tables
* 🎉 Emojis for clarity

---

# 🍎 How to Create a Custom WordPress Dashboard Widget or Banner (The Right Way)

Want to add a custom banner or widget to the WordPress Dashboard? This guide walks you through **two common approaches** — with **code**, **pitfalls**, and **pro tips**.

---

## 🧭 What You'll Learn

| Goal                                                 | Method                      |
| ---------------------------------------------------- | --------------------------- |
| Add a **full-width banner** above the Dashboard      | `admin_notices` hook        |
| Add a **standard widget box** to the Dashboard       | `wp_add_dashboard_widget()` |
| Understand common **pitfalls** and how to avoid them | ✅                           |

---

## ⚙️ Option 1: Full-Width Banner Above Dashboard Widgets

### 📌 Position

The banner will appear:

* ✅ Below the **“Screen Options”** and **“Help”** tabs
* ✅ Above the **“Dashboard”** page title
* ✅ Outside the widget grid (full width)

### ✅ Code

Add this to your theme’s `functions.php` file or custom plugin:

```php
add_action('admin_notices', 'custom_apples_admin_notice');

function custom_apples_admin_notice() {
    $screen = get_current_screen();
    if ( $screen && $screen->base === 'dashboard' ) {
        echo '<div style="background:orange;padding:1rem;margin-bottom:1rem;margin-top:2.5rem;display:flex;justify-content:flex-end;">
                <h3 style="margin:0;">Hey I love Apples!</h3>
              </div>';
    }
}
```

### 💡 Pro Tips

* Use `get_current_screen()` to restrict output to the Dashboard only.
* `admin_notices` ensures proper placement within the admin DOM.
* This is great for **announcements**, **alerts**, or **branding**.

---

## 🧰 Option 2: Standard Dashboard Widget

### 📌 Position

The widget will appear in the **Dashboard widget area**, like “At a Glance” or “Site Health.”

### ✅ Code

```php
add_action('wp_dashboard_setup', 'custom_apples_dashboard_widget');

function custom_apples_dashboard_widget() {
    wp_add_dashboard_widget(
        'apples_love_widget',
        '🍎', // Avoid empty title!
        'custom_apples_widget_display'
    );
}

function custom_apples_widget_display() {
    echo '<div style="background:orange;padding:1rem;margin-bottom:1rem;margin-top:2.5rem;display:flex;justify-content:flex-end;">
            <h3>Hey I love Apples!</h3>
          </div>';
}
```

---

## ⚠️ Common Pitfalls (and Fixes)

| Pitfall                                          | What Happens                                       | How to Fix                                                          |
| ------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------------- |
| **Empty widget title (`''`)**                    | Widget doesn't render at all                       | Use a space `' '` or an emoji like `'🍎'`                           |
| **Using `get_current_screen()` in `admin_head`** | May return `null` → widget is removed unexpectedly | Use `current_screen` hook instead                                   |
| **Widget appears on all admin screens**          | Clutters other pages                               | Only register in `wp_dashboard_setup`, which runs only on Dashboard |

---

## 🧠 Bonus: Hiding the Widget Title (Optional)

If you want the widget to **render** but **hide the title visually**, add this to your `admin_head`:

```php
add_action('admin_head', function () {
    echo '<style>#apples_love_widget h2 { display: none; }</style>';
});
```

---

## 🧾 Summary

| Approach  | Best For                 | Code Hook            | Full Width? | Widget Grid? |
| --------- | ------------------------ | -------------------- | ----------- | ------------ |
| 🟠 Banner | Alerts, Branding         | `admin_notices`      | ✅ Yes       | ❌ No         |
| 🧩 Widget | Dashboard content blocks | `wp_dashboard_setup` | ❌ No        | ✅ Yes        |

---

## 📦 Optional: Turn into a Plugin?

You can wrap either version in a lightweight plugin if you want to reuse it across themes. Let me know — I’ll provide a `.zip`!

---

Let me know if you'd like the HTML version or want help turning this into a wiki page or downloadable doc!







------------------
------------------



Thanks for the clarification and the screenshot — now I understand what you're aiming for.

You **don't want a dashboard widget**, but rather a **custom HTML banner injected directly into the Dashboard UI**, positioned:

> 🔸 **Below the "Screen Options" & "Help" bar**
> 🔸 **Above the "Dashboard" header**

This requires **injecting raw HTML directly into the WordPress Dashboard page**, not using the dashboard widget API.

---

## ✅ Solution: Inject a Custom Orange Banner with an Admin Hook

Add this code to your theme’s `functions.php` file or a custom plugin:

```php
add_action('admin_notices', 'custom_apples_admin_notice');

function custom_apples_admin_notice() {
    // Only show on the main Dashboard
    $screen = get_current_screen();
    if ( $screen && $screen->base === 'dashboard' ) {
        echo '<div style="background:orange;padding:1rem;margin-bottom:1rem;margin-top:2.5rem;display:flex;justify-content:flex-end;">
                <h3 style="margin:0;">Hey I love Apples!</h3>
              </div>';
    }
}
```

---

## 🔍 Why This Works

* **`admin_notices`**: This hook places output right below the top admin bar, before the page content — exactly where you want it.
* **`get_current_screen()`**: Ensures it only appears on the **Dashboard** (`/wp-admin/index.php`), not on other admin pages.
* Your `div` is rendered **outside the widget grid**, so it spans the full container width.

---

## ✅ Result

After adding that code:

* Go to **Dashboard** (`/wp-admin/index.php`)
* You should see the **orange banner** between the admin bar and the "Dashboard" heading.

---

Let me know if you'd like this turned into a lightweight plugin `.zip` — one you can install via the WordPress Plugins panel.
