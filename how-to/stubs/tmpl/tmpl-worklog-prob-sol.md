9/24/25 - add to Asana Tix: 517 tomorrow


### ⚡ TL;DR Solution  
The large vertical gap above Vimeo videos is caused by Vimeo’s wrapper div using padding for aspect ratio, creating unwanted space. A minimal CSS fix that resets padding and position to absolute on any iframe wrapper div **without** a specific custom class solves the issue cleanly and safely.  

***

### 🔍 Problem–Possibles–Solved: Vimeo Embed Vertical Gap  

A large vertical gap appeared above Vimeo videos, caused by Vimeo’s responsive embed wrapper `div` that uses `padding:75%` and `position:relative` to maintain aspect ratio. This padding resulted in unwanted extra vertical space roughly equal to the video height in some templates.  

***

### 🛑 Initial Problem  
- Vimeo’s embed code wraps the iframe in a div with aspect-ratio padding, causing a vertical gap.  
- Removing the wrapper div fixes the issue but is impractical for content editors who paste raw embed code.  
- Other video embeds (e.g., Rumble) use simple iframes without wrappers, so no gap occurs there.  

***

### ✅ Approach Explored  
- Compared Vimeo’s padding-based wrapper with simpler iframe embeds.  
- Considered CSS overrides and JavaScript cleanups to neutralize or remove Vimeo’s wrapper styles only when uncontrolled.  
- Added a custom wrapper class `.single-vid-iframe-wrapper` to mark containers where Vimeo’s responsive styling should remain intact.  

***

### 🎯 Final Robust CSS Solution  

Using the modern CSS `:has()` selector, targeted any wrapper `div` that directly contains an iframe but **does not** have the custom class, overriding its padding and position to eliminate the gap:

```css
div:not(.single-vid-iframe-wrapper):has(> iframe) {
  padding: 0 !important;
  position: absolute !important;
}
```

- Removes the unwanted vertical gap by disabling Vimeo’s padding-based aspect ratio on uncontrolled wrappers.  
- Preserves the intended responsive styling inside `.single-vid-iframe-wrapper`.  
- Allows content editors to paste full Vimeo embed code without manual edits or wrapper stripping.  

***

### 📌 Key Takeaways  
- Vimeo’s embed responsiveness relies on inline padding on a wrapper div, which can cause layout issues if uncontrolled.  
- The `:has()` pseudo-class enables precise CSS targeting of wrappers lacking a specific class, making overrides safe and scoped.  
- Using a dedicated wrapper class for controlled video containers is an effective pattern to avoid global side effects.  
- Pure CSS fixes provide better maintainability and performance than JavaScript alternatives.  

This solution fixed the “double height” Vimeo embed gap while keeping embed management simple for developers and non-developers alike.