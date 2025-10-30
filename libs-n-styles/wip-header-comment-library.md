# Header Comment Library

Purpose: Blah ....


Created by: Eric L Hepperle
10/01/25


---

## 10/01/25

```css
/**
 * 📹 Vimeo IFRAME Fix – Scoped Wrapper Reset
 *
 * Context:
 * Vimeo embeds often insert a wrapper <div> around their <iframe>,
 * which introduces unwanted padding or layout shifts — especially
 * when used inside flexible layouts or carousels.
 *
 * Problem:
 * A previous global CSS rule was targeting all <div>:has(> iframe),
 * unintentionally affecting unrelated elements (e.g. maps on the wells page).
 *
 * Fix:
 * Restrict the override to single video post views only,
 * and exclude wrappers that already have the custom class 
 * `.single-vid-iframe-wrapper` for more precise targeting.
 *
 * Selector Explanation:
 * - `.single-videos`: Limits rule to single video post templates.
 * - `div:not(.single-vid-iframe-wrapper)`: Excludes custom-classed wrappers.
 * - `:has(> iframe)`: Ensures the rule only applies to wrappers of iframes.
 *
 * ⚠️ This is a minimal, targeted patch. Avoid generalizing unless necessary.
 */
.single-videos div:not(.single-vid-iframe-wrapper):has(> iframe) {
  padding: 0 !important;
  position: absolute !important;
}
```