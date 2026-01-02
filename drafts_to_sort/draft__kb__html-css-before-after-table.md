<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo]{height=32}

<!-- 📝 Title -->
# HOW-TO: 📘 CSS: Responsive WordPress Tables

**Version:** 1.1

> Optimized for: WordPress 6.4+, Gutenberg/Classic Editor, Any Theme

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 HOW-TO](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2026-01-02       |
| **Date Updated**:  | 2026-01-02       |
| **AI Assistant**:  | Perplexity AI    |

---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts -->
<section id="sec-tags">

## Tags:
- Table Layout
- Responsive Tables
- CSS Fixed
- WordPress CSS
- Media Queries
- Table Overflow
- Box Sizing
- Mobile Gotchas

</section>

---

## 📌 Overview

Create **production-ready before/after comparison tables** in WordPress `.entry-content` divs that display as **2 equal 50/50 columns on desktop/tablet** and **stack to full-width single column on mobile** (≤768px).

**Target Problem:** WordPress image captions (`figure.wp-caption`) with fixed widths (890px) cause:
- Left column expands to full container width
- Right column invisible (HTML exists, off-screen)
- Mobile: Horizontal scrollbars, image overflow

**3 Core Solutions:**
1. `table-layout: fixed` → Forces equal column distribution
2. `display: block` on mobile `td` → Stacks columns
3. `box-sizing: border-box` + zero margins → Prevents image overflow

**Deployment Path:** `Appearance > Customize > Additional CSS` (never inline post styles)

**Result:** Pixel-perfect responsive tables that survive theme updates.

---

## 🎯 Step-by-Step Implementation

### 1. HTML Structure (Post/Page Editor)
```html
<table class="before-after-table">
<thead>
<tr>
<td>
[caption id="attachment_123" align="aligncenter" width="890"]
<img class="wp-image-123" src="your-image.jpg" alt="Before" />
Screenshot: Before State
[/caption]
</td>
<td>
[caption id="attachment_124" align="aligncenter" width="890"]
<img class="wp-image-124" src="your-image-after.jpg" alt="After" />
Screenshot: After State (Fixed)
[/caption]
</td>
</tr>
</thead>
</table>
```

### 2. Desktop CSS (2-Column Layout)
```css
/* Additional CSS → Appearance > Customize */
.entry-content .before-after-table {
    width: 100% !important;
    max-width: 100% !important;
    table-layout: fixed !important;
    border-collapse: collapse;
    border: 2px solid #333;
    margin: 2rem 0;
}

.entry-content .before-after-table td {
    width: 50% !important;
    max-width: 50% !important;
    padding: 12px;
    vertical-align: top;
    overflow: hidden;
    border-right: 1px solid #ddd;
    box-sizing: border-box;
}

.entry-content .before-after-table td:last-child {
    border-right: none;
}
```

### 3. Image/Figure Containment (All Breakpoints)
```css
.entry-content .before-after-table figure.wp-caption,
.entry-content .before-after-table figure {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    margin: 0 auto !important;
    padding: 0 !important;
    box-sizing: border-box !important;
}

.entry-content .before-after-table img {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    display: block !important;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.entry-content .before-after-table figcaption {
    text-align: center;
    font-weight: bold;
    margin-top: 8px;
    color: #666;
    padding: 0 4px;
}
```

### 4. Mobile CSS (Stacked Single Column)
```css
@media screen and (max-width: 768px) {
    .entry-content .before-after-table td {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        border-right: none !important;
        border-bottom: 1px solid #ddd !important;
        margin: 0 !important;
        padding: 0.75rem !important;
        background: #f9f9f9;
        box-sizing: border-box !important;
        overflow: visible !important;
    }
    
    .entry-content .before-after-table {
        border: 1px solid #ddd !important;
        margin: 1rem 0 !important;
        overflow: hidden !important;
    }
    
    .entry-content .before-after-table figure.wp-caption {
        padding: 0 !important;
        margin: 0 !important;
    }
    
    .entry-content .before-after-table img {
        max-width: 100vw !important;
        margin: 0 !important;
        padding: 0 !important;
    }
}
```

---

## 🖼️ Live Demo 

## Rendered Result

<!-- Self-contained demo CSS snippet below -->

<h3>Live Preview: Responsive Before/After Table</h3>

<div class="entry-content">
  <table class="before-after-table">
    <thead>
      <tr>
        <td>
          <figure class="wp-caption aligncenter" style="width: 100%">
            <img
              src="https://placehold.co/400x500/FF6B6B/FFFFFF/png?text=BEFORE+%F0%9F%94%8D"
              alt="Before Screenshot"
              width="400"
              height="500"
              srcset="https://placehold.co/400x500/FF6B6B/FFFFFF/png?text=BEFORE 400w,
                      https://placehold.co/200x250/FF6B6B/FFFFFF/png?text=BEFORE 200w" />
            <figcaption>Current State - Overflow Issues</figcaption>
          </figure>
        </td>
        <td>
          <figure class="wp-caption aligncenter" style="width: 100%">
            <img
              src="https://placehold.co/400x500/4ECDC4/FFFFFF/png?text=AFTER+%E2%9C%94"
              alt="After Screenshot"
              width="400"
              height="500"
              srcset="https://placehold.co/400x500/4ECDC4/FFFFFF/png?text=AFTER 400w,
                      https://placehold.co/200x250/4ECDC4/FFFFFF/png?text=AFTER 200w" />
            <figcaption>Fixed - Responsive & Stacked</figcaption>
          </figure>
        </td>
      </tr>
    </thead>
  </table>
</div>

<style>
/* UNIVERSAL - Works in .entry-content OR standalone */
table.before-after-table,
.entry-content .before-after-table {
    width: 100% !important;
    table-layout: fixed !important;
    border-collapse: collapse;
    border: 2px solid #333;
    margin: 2rem 0;
}

table.before-after-table td,
.entry-content .before-after-table td {
    width: 50% !important;
    padding: 12px;
    vertical-align: top;
    overflow: hidden;
    border-right: 1px solid #ddd;
}

table.before-after-table td:last-child,
.entry-content .before-after-table td:last-child {
    border-right: none;
}

table.before-after-table figure,
.entry-content .before-after-table figure {
    width: 100% !important;
    margin: 0 !important;
}

table.before-after-table img,
.entry-content .before-after-table img {
    width: 100% !important;
    height: auto !important;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

table.before-after-table figcaption,
.entry-content .before-after-table figcaption {
    text-align: center;
    font-weight: bold;
    margin-top: 8px;
    color: #666;
}

/* MOBILE STACK - NO OVERFLOW */
@media screen and (max-width: 768px) {
    table.before-after-table td,
    .entry-content .before-after-table td {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        border-right: none !important;
        border-bottom: 1px solid #ddd !important;
        margin: 0 !important;
        padding: 0.5rem !important;
        background: #f9f9f9;
        box-sizing: border-box !important;
    }
    
    table.before-after-table figure.wp-caption,
    .entry-content .before-after-table figure.wp-caption {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
    }
    
    table.before-after-table img,
    .entry-content .before-after-table img {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        margin: 0 !important;
        padding: 0 !important;
        display: block !important;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    table.before-after-table figcaption,
    .entry-content .before-after-table figcaption {
        margin-top: 0.5rem !important;
        padding: 0 0.25rem !important;
        box-sizing: border-box !important;
    }
    
    table.before-after-table,
    .entry-content .before-after-table {
        border: 1px solid #ddd !important;
        margin: 1rem 0 !important;
        overflow: hidden !important;
    }
}

</style>

<div style="background:#f0f8ff;padding:1rem;border-left:4px solid #007cba;margin:1rem 0;">
<strong>📱 LIVE TEST:</strong> Resize to &lt;768px → Instant stack. Perfect scaling. 
<strong>COPY-READY</strong> for any WordPress post!
</div>



## Snippet (Copy/Paste Ready)

```html
<!-- Self-contained demo CSS snippet below -->

<h3>Live Preview: Responsive Before/After Table</h3>

<div class="entry-content">
  <table class="before-after-table">
    <thead>
      <tr>
        <td>
          <figure class="wp-caption aligncenter" style="width: 100%">
            <img
              src="https://placehold.co/400x500/FF6B6B/FFFFFF/png?text=BEFORE+%F0%9F%94%8D"
              alt="Before Screenshot"
              width="400"
              height="500"
              srcset="https://placehold.co/400x500/FF6B6B/FFFFFF/png?text=BEFORE 400w,
                      https://placehold.co/200x250/FF6B6B/FFFFFF/png?text=BEFORE 200w" />
            <figcaption>Current State - Overflow Issues</figcaption>
          </figure>
        </td>
        <td>
          <figure class="wp-caption aligncenter" style="width: 100%">
            <img
              src="https://placehold.co/400x500/4ECDC4/FFFFFF/png?text=AFTER+%E2%9C%94"
              alt="After Screenshot"
              width="400"
              height="500"
              srcset="https://placehold.co/400x500/4ECDC4/FFFFFF/png?text=AFTER 400w,
                      https://placehold.co/200x250/4ECDC4/FFFFFF/png?text=AFTER 200w" />
            <figcaption>Fixed - Responsive & Stacked</figcaption>
          </figure>
        </td>
      </tr>
    </thead>
  </table>
</div>

<style>
/* UNIVERSAL - Works in .entry-content OR standalone */
table.before-after-table,
.entry-content .before-after-table {
    width: 100% !important;
    table-layout: fixed !important;
    border-collapse: collapse;
    border: 2px solid #333;
    margin: 2rem 0;
}

table.before-after-table td,
.entry-content .before-after-table td {
    width: 50% !important;
    padding: 12px;
    vertical-align: top;
    overflow: hidden;
    border-right: 1px solid #ddd;
}

table.before-after-table td:last-child,
.entry-content .before-after-table td:last-child {
    border-right: none;
}

table.before-after-table figure,
.entry-content .before-after-table figure {
    width: 100% !important;
    margin: 0 !important;
}

table.before-after-table img,
.entry-content .before-after-table img {
    width: 100% !important;
    height: auto !important;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

table.before-after-table figcaption,
.entry-content .before-after-table figcaption {
    text-align: center;
    font-weight: bold;
    margin-top: 8px;
    color: #666;
}

/* MOBILE STACK - NO OVERFLOW */
@media screen and (max-width: 768px) {
    table.before-after-table td,
    .entry-content .before-after-table td {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        border-right: none !important;
        border-bottom: 1px solid #ddd !important;
        margin: 0 !important;
        padding: 0.5rem !important;
        background: #f9f9f9;
        box-sizing: border-box !important;
    }
    
    table.before-after-table figure.wp-caption,
    .entry-content .before-after-table figure.wp-caption {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
    }
    
    table.before-after-table img,
    .entry-content .before-after-table img {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        margin: 0 !important;
        padding: 0 !important;
        display: block !important;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    table.before-after-table figcaption,
    .entry-content .before-after-table figcaption {
        margin-top: 0.5rem !important;
        padding: 0 0.25rem !important;
        box-sizing: border-box !important;
    }
    
    table.before-after-table,
    .entry-content .before-after-table {
        border: 1px solid #ddd !important;
        margin: 1rem 0 !important;
        overflow: hidden !important;
    }
}

</style>

<div style="background:#f0f8ff;padding:1rem;border-left:4px solid #007cba;margin:1rem 0;">
<strong>📱 LIVE TEST:</strong> Resize to &lt;768px → Instant stack. Perfect scaling. 
<strong>COPY-READY</strong> for any WordPress post!
</div>


```

---

## 🛠️ Common Pitfalls Fixed

| Issue | Symptom | Root Cause | Fix |
|-------|---------|------------|-----|
| Right column invisible | Single wide column | `table-layout: auto` | `table-layout: fixed; width: 50%` |
| Inline styles fail | Theme overrides | Low specificity | `.entry-content` prefix + `!important` |
| Post `<style>` broken | Media queries ignored | WP parsing | Additional CSS only |
| Images don't scale | Fixed widths | Inline `width="890"` | `max-width: 100% !important` |

---

## ⚠️ GOTCHA: Mobile Image Overflow

**Problem:** Images spill 2-5px outside stacked table cells (≤768px)

**Root Cause:**
```
td { display: block } + figure padding/margin
+ img { width: 100% } = 102-105% total width
```

**Symptoms:**
- Subtle horizontal scrollbar
- Images clip right edge
- DevTools: computed width > 100%

**Bulletproof Fix:**
```css
@media (max-width: 768px) {
    table td figure.wp-caption { padding: 0 !important; margin: 0 !important; }
    table td img { max-width: 100% !important; margin: 0 !important; display: block !important; }
    table td { box-sizing: border-box !important; padding: 0.5rem !important; }
}
```

**Pro Tip:** `box-sizing: border-box` + zero margins = pixel-perfect mobile tables.

---

## 🔍 Troubleshooting Checklist

```
[ ] Additional CSS deployed (not post <style>)
[ ] Cache cleared (WP Super Cache, browser)
[ ] DevTools: table width=100%, td=50% desktop
[ ] DevTools: td computed display=block mobile
[ ] Images: max-width=100%, no inline fixed widths
[ ] No horizontal scrollbars any viewport
[ ] Works in Incognito (no cache conflicts)
```

---

## 📚 References / See Also

### CSS Table Mastery
- [MDN: table-layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout)
- [CSS-Tricks: Responsive Tables](https://css-tricks.com/responsive-tables/)
- [MDN: box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

### WordPress Specific
- [WP Codex: Additional CSS](https://wordpress.org/documentation/article/appearance-customize-screen/#additional-css)
- [WP Support: Table Overflow](https://wordpress.org/support/topic/solving-table-overflow-problems/)

### Related Guides
- [HOW-TO: WordPress Gutenberg Tables](gutenberg-tables.md)
- [HOW-TO: CSS Media Queries](css-media-queries.md)
- [HOW-TO: Box Model Mastery](box-model.md)

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made                                      |
|---------|------------|------------------|---------------------------------------------------|
| 1.00    | 2026-01-02 | Eric L. Hepperle | Initial draft from live Perplexity AI session     |
| 1.10    | 2026-01-02 | Eric L. Hepperle | Added live demo, mobile gotcha section            |
| 1.11    | 2026-01-02 | Eric L. Hepperle | Full expansion, troubleshooting, complete refs    |

---