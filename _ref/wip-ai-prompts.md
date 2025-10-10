# AI PROMPT LIBRARY: (started 09/30/25)


## 09/30/25


Definitely — here’s a reusable prompt you can use to generate similar intro paragraphs for other chapters:

---

**Prompt:**

Write a concise (≈400-character) intro paragraph for my personal notes on a chapter from an online coding course. The intro should summarize the key topics covered based on the lesson titles and other context I provide. Use a clear, student-style tone. Bold key terms and use backticks for code-related terms or concepts.

Start the paragraph like this:

These are my personal notes on **[chapter topic] in [course name]** from [Platform]. This chapter covers ...

Ex:

These are my personal notes on **functions in Python** from Boot.dev. This chapter covers ...

**Context:**

// Add context here

---

Just add your lesson titles underneath the prompt each time you use it. Let me know if you want a version tailored for non-coding topics too.


---


Here is a refined prompt to request 3 theme screenshot.jpg mockup ideas for a client website:

"Please generate 3 distinct ideas for WordPress theme screenshot mockups (the screenshot.jpg file) that visually represent a custom theme for a client site in [client's industry/niche]. Each mockup should highlight the homepage's key visual style, layout composition, and color scheme to effectively showcase the theme's branding and user experience on the WordPress Themes screen."

For securely documenting changes to the theme including the screenshot mockups, the recommended practice is to:

- Store all theme files including screenshot.jpg in a Git repository with controlled access.
- Use descriptive commit messages that indicate the visual changes or updates to the mockup.
- Maintain a changelog file documenting significant updates or visual redesigns.
- Optionally track screenshots or mockup iterations in a dedicated documentation folder or wiki linked to the theme repository to provide visual history.

This will keep the theme's visual identity and development history clear, secure, and easily auditable for your client projects.

[1](https://wp-mix.com/display-wordpress-theme-screenshot/)
[2](https://wptavern.com/how-to-create-responsive-device-mockups-with-wordpress)
[3](https://divitheme.net/create-screenshot-mockups/)
[4](https://www.seedprod.com/wordpress-responsive-theme-examples/)
[5](https://wordpress.com/go/web-design/how-to-create-a-website-mockup-in-5-easy-steps-examples/)
[6](https://sites.lsa.umich.edu/example-themes/)
[7](https://www.reddit.com/r/Wordpress/comments/n4w38b/clean_blank_wordpress_theme_for_pure_w/)
[8](https://nicepage.com/k/mockup-wordpress-themes)



---


## 10/02/25


**Prompt:**

Create a professionally formatted changelog entry using this structure:

## 📅 [VERSION] (DATE_RANGE)

### 📈 Business Value Summary
2-3 sentences summarizing:
- Key features/improvements
- Business impact
- User experience & maintainability gains

### Feature Identification Process
1. Scan merge commits first (look for "Merge pull request #")
2. Create comprehensive list of distinct features from:
   - Different pull request numbers
   - Different feature branches (feature/, fix/, update/ prefixes)
   - Different authors/contributors 
   - Non-related components/functionalities
3. Group related changes under each feature

### Main Component Changes
Group all changes under appropriate H3 section headers:

#### [Component/Page Name]
- **[filename(s)]**: Single-line summary of all non-fix changes, max 300 chars
  - 🎯 FIX: [fix description] 
  
Example format:
```markdown
### Wells Page

#### Hero Section
- **hero/pg-wells.php**, **_heros.scss**: Refined hero height, implemented overlay system, added button components
  - 🎯 FIX: Overlay opacity affecting content 

#### Statistics Counter Cards
- **_wells.scss**: Improved responsive layout, optimized spacing and typography
  - 🎯 FIX: Z-index conflicts with navigation 
```

Guidelines:
1. First scan ALL merge commits and related feature branches
2. Create list of distinct features BEFORE writing changelog
3. Group related changes under logical H4 sections
4. Combine all non-fix changes into one bullet point
5. List fixes separately with 🎯 emoji
6. Bold filenames with **
7. Keep summaries concise but specific
8. Include version numbers for fixes
9. Maintain consistent hierarchy

The changelog should be immediately useable in markdown format and provide value to both technical and business stakeholders.


---


# 10/10/25


**Prompt :**

"Parse the following text and extract concise, action-oriented phrases useful for writing conventional commit messages. Focus on imperative verbs that describe what has been changed, added, fixed, removed, or improved, followed by a clear object or context. Avoid lengthy explanations, background stories, or vague language. Return a list of short phrases suitable as commit message subjects, such as 'Add user authentication', 'Fix null pointer error', or 'Refactor payment module'. Prioritize phrases that are clear, specific, and aligned with common commit message categories (feat, fix, docs, chore, test, etc.)."

---

CONTENT:

---


## Prompt: (orig 9/19/25)

Give a comprehensive history of this chat as a single document for easy copy-paste

---



Here is a concise prompt to generate your desired WordPress admin dashboard banner with debug logs:

***

Create a WordPress custom dashboard widget that displays the following HTML only on the main admin dashboard:

```html
<div style="background:orange;padding:1rem;margin-bottom:1rem;margin-top:2.5rem;display:flex;justify-content:flex-end;">
  <h3>Hey I love Apples!</h3>
</div>
```

Use the hook `wp_dashboard_setup` and `wp_add_dashboard_widget()`. Include debug `error_log` statements inside the main function and the widget callback to confirm execution. Use a closure with `use()` or define the content in the correct scope to avoid "undefined variable" errors. Provide the PHP snippet suitable for placing in a theme’s `functions.php` or a custom plugin.

***

This will prompt the generation of the code you need including debugging and scope fixes.

[1](https://rudrastyh.com/wordpress/dashboard-widgets.html)
[2](https://www.wpbeginner.com/wp-themes/how-to-add-custom-dashboard-widgets-in-wordpress/)
[3](https://developer.wordpress.org/apis/dashboard-widgets/)
[4](https://www.youtube.com/watch?v=8cZZLMjnwuQ)
[5](https://wpengine.com/resources/create-a-wordpress-custom-dashboard/)
[6](https://www.elegantthemes.com/blog/wordpress/wordpress-dashboard-customizations)
[7](https://kinsta.com/blog/wordpress-custom-dashboard/)
[8](https://www.wpzoom.com/blog/wordpress-dashboard/)
[9](https://wpadminify.com/wordpress-client-dashboard)



---

Prompt:


Create a wiki-style kb in the given template format with the given source content with these requirements:

Requirements:

- Ensure everything is validated as accurate against today's date
- Do not use any JavaScript in the resulting markdown document -- only markdown, inline CSS, and HTML are allowed
- Create a working TOC that is collapsible and doesn't use any JavaScript (is there a native HTML tag as of today that does this?)
- Indent the TOC appropriately
- All bullets must be hyphen bullets only
- Reorganize content for better logical flow
- Expand the Overview/intro section
- Wherever an image is required by missing use placeholder instead
- Create a robust references section categorized by topic
- Ensure every plugin or website name is hyperlinked


### DATETIME: 09/24/25 7:32 AM


Template format:


<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">


<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}


<!-- 📝 Title -->
# HOW-TO: 📘 TOPIC: Title_Case_Title


**Version:** 1.0



> Optimized for: VSCode on Windows 11 + Git Bash (SSH)
> 


<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)


<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-23       |
| **Date Updated**:  | --               |
| **AI Assistance**: | ChatGPT          |



---


<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">


## Tags:


- [Topic2](#)
- [Topic2](#)
- [Topic3](#)



</section>


---


<!-- 🔍 Content Section Heading -->


## 📌 Overview


// ADD_CONTENT



---


<!-- 📚 References (Optional) -->
## 📚 References / See Also



- [Placeholder 1](#)
- [Placeholder 2](#)



---


## ✅ Revision History



| Version | Date       | Author           | Changes Made                                     |
| ------- | ---------- | ---------------- | ------------------------------------------------ |
| 1.00    | 2025-09-   | Eric L. Hepperle | Initial draft created                            |
| 1.01    | 2025-09-23 | Eric L. Hepperle | Draft formatted as KB article clone of [tmpl].md |


---



CONTENT:


///CONTENT_HERE

--- END content ---


---





















---
---
--- END

