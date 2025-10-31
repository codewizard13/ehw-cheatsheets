<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">


<!-- 🖼️ Site Logo -->
!Site Logo{height=32}


<!-- 📝 Title -->
# HOW-TO: 📘 Topic: Organizing a Personal Book Catalog in Markdown with Genre and Subgenre


**Version:** 1.0


> Optimized for: VSCode on Windows 11 + Git Bash (SSH)


<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 HOW-TO](index.md)


<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-10-28       |
| **Date Updated**:  | 2025-10-28       |
| **AI Assistance**: | ChatGPT (Perplexity AI) |


***


<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">


## Tags:


- Book Catalog
- Markdown Template
- Genre Classification
- Collapsible TOC
- Emoji Use


</section>


***


<!-- 🔍 Content Section Heading -->


## 📌 Overview


This comprehensive guide provides a detailed, human-friendly Markdown template for maintaining a personal book catalog. It includes key features for listing books by title, author, genre, and subgenre, with useful metadata columns like year, pages, language, reading status, and notes. Special attention is given to visual clarity, leveraging emojis to enhance scannability without the need for third-party apps.  

Moreover, the catalog is designed to be easily convertible into spreadsheets or databases later on. It adheres to best practices in Markdown formatting, maintaining plain text compatibility across editors and platforms. This document also offers a collapsible table of contents (TOC) built purely with HTML5 native elements and CSS, avoiding any JavaScript, thus maximizing accessibility and functionality on modern browsers.  

Additional context includes notes on genre and subgenre classification, suggested emojis for visual cues, and detailed references to plugins and tools that were explored and their limitations given the nuanced edge case of a human-readable yet machine-accessible catalog document.

***

### Collapsible Table of Contents (TOC)

The TOC is implemented with the HTML5 `<details>` and `<summary>` elements, allowing toggling without JavaScript. The indentation and styling use inline CSS for appropriate visual hierarchy.

<details open style="margin-left:1em;">
  <summary style="font-weight: bold; cursor: pointer;">Table of Contents</summary>
  <ul style="list-style-type: none; padding-left: 1em;">
    <li><a href="#overview">📌 Overview</a></li>
    <li><a href="#book-collection">📚 Book Collection</a></li>
    <li><a href="#popular-genres">🎭 Popular Genre Keys & Subgenres</a></li>
    <li><a href="#notes-reminders">🗒️ Notes and Reminders</a></li>
    <li><a href="#references">📚 References / See Also</a></li>
    <li><a href="#revision-history">✅ Revision History</a></li>
  </ul>
</details>

***


## 📚 Book Collection


| #️⃣ | Book Title 📖 | Author ✍️        | Genre 🎭     | Subgenre 🔍           | Year 📅 | Pages 📄 | Language 🌐 | Status ✅/🔖 | Notes 🗒️           |
| :-- | :------------ | :---------------- | :----------- | :-------------------- | :----- | :-------| :---------- | :---------- | :------------------ |
| 1   | Example Book  | Example Author    | Fiction      | Mystery, Thriller      | 2020   | 320     | English     | ✅ Read     | Favorite classic    |
| 2   |               |                   |             |                       |        |         |             |             |                     |
| 3   |               |                   |             |                       |        |         |             |             |                     |
| 4   |               |                   |             |                       |        |         |             |             |                     |
| 5   |               |                   |             |                       |        |         |             |             |                     |


***


## 🎭 Popular Genre Keys & Example Subgenres


### Fiction  
  - **Romance:** Contemporary, Historical, Paranormal, Erotica  
  - **Mystery/Thriller:** Cozy, Police Procedural, Legal, Psychological  
  - **Science Fiction (Sci-Fi):** Dystopian, Space Opera, Cyberpunk, Time Travel  
  - **Fantasy:** High/Epic, Urban, Dark, Fairy Tale  
  - **Horror:** Gothic, Psychological, Supernatural  
  - **Historical Fiction:** Period Drama, War, Historical Romance  
  - **Literary Fiction:** Experimental, Realist  
  - **Children / Young Adult (YA):** Coming-of-Age, Dystopian, Fantasy  


### Non-Fiction  
  - **Biography / Memoir**  
  - **Self-Help / Wellness**  
  - **True Crime**  
  - **History**  
  - **Travel**  
  - **Religion / Spirituality**  
  - **Science / Technology**  
  - **Business / Economics**  

#### Bindings
- **Case Binding**: Sewn sections in a hard cover, durable and premium.  
- **Comb Binding**: Plastic comb inserted, removable pages.  
- **Coptic Stitch**: Hand-sewn exposed spine, lays flat, artistic look.  
- **Perfect Binding**: Pages glued to a soft cover, common for paperbacks.  
- **Saddle Stitch**: Stapled sheets folded to form a booklet, cost-effective.  
- **Smyth Sewn**: Sewn sections, strong, allows laying flat.  
- **Spiral Binding**: Coil holds pages, lays flat, good for manuals.  
- **Tape Binding**: Pages glued with adhesive tape, quick bind.  
- **Thermal Binding**: Heat-glued spine, sleek for reports.
- **VeloBind**: Plastic strips and rivets, flat and permanent.  

***


## 🗒️ Notes and Reminders


- Use consistent formatting for titles and authors (Title Case recommended).  
- Choose the genre key and one or more subgenres that best describe each book’s themes or style.  
- Status icons: ✅ Read, 🔖 To Read.  
- Add new entries at the bottom to keep list chronological.  
- Save as plain text `.md` for maximum cross-platform compatibility.  
- Easy to convert to spreadsheet later using the `|` pipe separator.  
- Additional columns like Publisher, ISBN, Acquisition Date, or Rating can be added as needed.  
- Emojis make the document visually scannable and accessible even without third-party apps.  
- Collapsible TOC is implemented without JavaScript using native HTML `<details>` for better accessibility.


***


## 📚 References / See Also

### Markdown Resources  
- [Markdown Guide](https://www.markdownguide.org) — Official and comprehensive Markdown syntax guide  
- [GitHub Flavored Markdown](https://github.github.com/gfm/) — Extended syntax used on GitHub  


### Managing a Personal Book Library Catalog  
- [How to Organize a Home Library (StampedWithLoveXOXO)](https://stampedwithlovexoxo.com/blogs/love-letters/how-to-organize-home-library) — Practical guidance on curating, cataloging, shelving, and maintaining a home book collection, including suggestions for apps and shelving strategies.  
- [Cataloguing a Private Library (Reddit r/Libraries)](https://www.reddit.com/r/Libraries/comments/5ft37a/how_would_you_go_about_beginning_to_catalogue_a/) — Discussion highlighting practical approaches to sorting and maintaining a personal library collection, recommending user-friendly classification like BISAC over complex systems.  
- [Setting up a Small Home Library (ALA LibGuides)](https://libguides.ala.org/SettingUpalibrary/HomeLibrary) — Overview of resources common to all library types, offering foundational advice on small/private library setups.  
- [7 Apps for Cataloguing Your Home Library (Inside Higher Ed)](https://www.insidehighered.com/blogs/gradhacker/7-apps-cataloguing-your-home-library) — Reviews of software options for managing personal book collections digitally.  
- [How 11 Writers Organize Their Personal Libraries (Literary Hub)](https://lithub.com/how-11-writers-organize-their-personal-libraries/) — Insight from writers on personal organization strategies reflecting individual reading habits and preferences.  

***

## ✅ Revision History



| Version | Date       | Author           | Changes Made                                      |
| ------- | ---------- | ---------------- | ------------------------------------------------ |
| 1.00    | 2025-10-28 | Eric L. Hepperle | Initial comprehensive draft including collapsible TOC, emoji usage, expanded metadata, and curated references |

