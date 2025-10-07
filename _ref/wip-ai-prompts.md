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


