<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="/_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/2022_ElijahStreams-Logo_Hz-FullColor_226x29.png)

<!-- 📝 Title -->
# SOP: 🧾 How to Create a Standard Markdown Header for Technical Docs

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 Documentation Standards](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-10       |
| **Date Updated**:  | 2025-09-10       |
| **AI Assistance**: | ChatGPT          |

---

<!-- 📚 References (Optional) -->
### References / See Also:

- [Markdown Syntax Guide](https://www.markdownguide.org/basic-syntax/)
- [Style Guide: Technical Docs](../style-guide.md)

---

<!-- 🔍 Content Section Heading -->
## 🔎 Overview

This SOP outlines how to create a consistent, professional Markdown header for internal documentation, including SOPs, troubleshooting guides, how-to documents, and technical articles. Using a uniform structure improves readability, brand consistency, and navigation across all documentation.

---

## 📌 Purpose

To define a reusable template that ensures all Markdown documents begin with a standardized header containing key metadata, branding, and navigation links.

---

## 🛠️ Template Structure

Use the following template **at the very top** of your Markdown files:

<details>
<summary>📋 Click to Expand Markdown Template</summary>

```markdown
<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="/_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/2022_ElijahStreams-Logo_Hz-FullColor_226x29.png)

<!-- 📝 Title -->
# [DOC_TYPE]: [EMOJI] [Descriptive Title]

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [SECTION_TITLE](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | YYYY-MM-DD       |
| **Date Updated**:  | YYYY-MM-DD       |
| **AI Assistance**: | ChatGPT          |

---

<!-- 📚 References (Optional) -->
### References / See Also:

- [Related Article 1](path/to/article1.md)
- [Related Article 2](path/to/article2.md)

---

<!-- 🔍 Content Section Heading -->
## [SECTION_HEADING_EMOJI] [Section Heading Title]

[Write your introductory paragraph, summary, or problem statement here.]

---

````

</details>

---

## 🔄 Example Usage

```markdown
# HOWTO: 🛠️ Installing Node.js on Ubuntu 22.04

### [🏚️ Home](../README.md) | [📁 How-To Guides](index.md)

| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-09-01       |
| **Date Updated**:  | 2025-09-10       |
| **AI Assistance**: | ChatGPT          |
```

---

## 🧩 Placeholder Definitions

| Placeholder               | Description                                                    |
| ------------------------- | -------------------------------------------------------------- |
| `[DOC_TYPE]`              | Document type (e.g. SOP, HOWTO, TROUBLESHOOTING)               |
| `[EMOJI]`                 | A visual icon for quick recognition (e.g. 📄, 🛠️, 🧾)         |
| `[Descriptive Title]`     | Clear, specific title of the document                          |
| `[SECTION_TITLE]`         | Section or category name (linked to its `index.md`)            |
| `[SECTION_HEADING_EMOJI]` | Emoji used for first major heading (e.g. 🧾 Overview)          |
| `[Section Heading Title]` | Title of the first content section (usually Overview or Intro) |
| `YYYY-MM-DD`              | Date values in ISO format                                      |

---

## 🧪 Tips & Best Practices

* **Use consistent emojis** for specific doc types:

  * 🧾 SOP
  * 🛠️ Troubleshooting
  * 📘 How-To
  * 🔒 Security
* Keep your titles concise and under 80 characters.
* Use ISO format for all dates: `YYYY-MM-DD`.
* Always include a **Home** and **Section** navigation link.

---

## ✅ Revision History

| Version | Date       | Author           | Changes Made          |
| ------- | ---------- | ---------------- | --------------------- |
| 1.0     | 2025-09-10 | Eric L. Hepperle | Initial draft created |

---
