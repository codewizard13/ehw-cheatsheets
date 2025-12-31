<link rel="stylesheet" href="../../_css/main.css">

!Site Logo{height=32}

# HOW-TO: 📘 TOPIC: HTML Email Signature Markdown Doc Template Guide

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

### 🏚️ Home | 📁 [HOW-TO](https://example.com){target="_blank"}

***

<details open>
  <summary><strong>📑 Table of Contents</strong></summary>

- [HOW-TO: 📘 TOPIC: HTML Email Signature Markdown Doc Template Guide](#how-to--topic-html-email-signature-markdown-doc-template-guide)
    - [🏚️ Home | 📁 HOW-TO{target="\_blank"}](#️-home---how-totarget_blank)
  - [Tags:](#tags)
  - [📌 Overview](#-overview)
  - [🧱 Signature Markdown Doc Template](#-signature-markdown-doc-template)
  - [👀 Rendered Preview](#-rendered-preview)
  - [🎨 Design \& Branding](#-design--branding)
  - [📬 Client Support \& Testing](#-client-support--testing)
  - [🚀 Installation Instructions](#-installation-instructions)
  - [🧾 Legal \& Compliance](#-legal--compliance)
  - [🧪 Layout, HTML, Testing](#-layout-html-testing)
  - [📚 References / See Also](#-references--see-also)
  - [✅ Revision History](#-revision-history)
</details>

***

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-12-11       |
| **Date Updated**:  | 2025-12-11       |
| **AI Assistance**: | Perplexity AI    |

***

<section id="sec-tags">

## Tags:

- html email
- email signature
- mustache placeholders

</section>

***

## 📌 Overview

This document provides a **reusable wiki-style Markdown template** for documenting HTML email signatures, including frontmatter, metadata, a collapsible table of contents, the HTML source snippet, and a rendered preview. It is designed for teams that manage multiple signature variants and want a consistent, copy-pasteable doc format using HTML-only constructs such as `<details>/<summary>` for collapsible sections.

***

## 🧱 Signature Markdown Doc Template

Below is a full wiki-style Markdown template that embeds frontmatter, metadata, a collapsible TOC using `<details>/<summary>`, the HTML signature code snippet, and a rendered sample (no JavaScript).

```
***
title: "Signature: {{signature_name}}"
id: "signature-{{slug}}"
version: "1.0.0"
status: "approved" # draft | approved | deprecated
owner: "Team / Person"
created: "2025-12-11"
updated: "2025-12-11"
email_clients:
  - "Outlook desktop (Win)"
  - "Outlook desktop (Mac)"
  - "Outlook Web"
  - "Gmail Web"
  - "Apple Mail"
tags:
  - "html-signature"
  - "branding"
  - "templating"
***

<link rel="stylesheet" href="../../_css/main.css">

!Site Logo{height=32}

# HOW-TO: 📘 TOPIC: {{signature_name}} Html_Email_Signature

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

### 🏚️ Home | 📁 [HOW-TO](https://example.com){target="_blank"}

***

| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-12-11       |
| **Date Updated**:  | 2025-12-11       |
| **AI Assistance**: | Perplexity AI    |

***

<details>
  <summary><strong>📑 Table of Contents</strong></summary>

  - [📌 Overview](#-overview)
  - [🧩 Data & Placeholders](#-data--placeholders)
  - [🧱 HTML Source](#-html-source)
  - [👀 Rendered Preview](#-rendered-preview)
  - [🎨 Design & Branding](#-design--branding)
  - [📬 Client Support & Testing](#-client-support--testing)
  - [🚀 Installation Instructions](#-installation-instructions)
  - [🧾 Legal & Compliance](#-legal--compliance)
  - [📚 References / See Also](#-references--see-also)
  - [✅ Revision History](#-revision-history)
</details>

***

<section id="sec-tags">

## Tags:

- html email
- email signature
- mustache placeholders

</section>

***

## 📌 Overview

This page documents the **{{signature_name}}** HTML email signature, including its purpose, content fields, placeholder data model, and client support considerations.  
It is intended for designers, developers, and administrators who need to understand or update the signature template while keeping it compatible with major email clients.

Key points:

- Signature is implemented as plain HTML using table-based layout for maximum compatibility.  
- Personal details and company information are injected via `{{placeholders}}` supplied by the email platform or directory.  

***

## 🧩 Data & Placeholders

- **Dynamic fields** used in this signature:

  - `{{first_name}}`, `{{last_name}}`
  - `{{job_title}}`, `{{department}}`
  - `{{email}}`, `{{phone}}`
  - `{{company_name}}`
  - `{{website_url}}`, `{{website_url_display}}`
  - `{{linkedin_url}}`, `{{twitter_url}}`
  - `{{legal_disclaimer_short}}`

- **Data source**

  - Typically synced from an HR system, directory, or user profile and exposed to the email platform as merge fields.  
  - If a field is missing, the platform should either omit that line or use a sensible fallback (for example, omit department if empty).

***

## 🧱 HTML Source

**Template location:** `path/to/signature-{{slug}}.html`  

```
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 13px; line-height: 1.4;">
  <tr>
    <td style="padding-right: 12px;" valign="top">
      <!-- Placeholder for profile image or logo -->
      <img src="https://placehold.co/avatar-64x64.png" width="64" height="64" alt="{{first_name}} {{last_name}}" style="display:block; border-radius:50%;" />
    </td>
    <td valign="top">
      <strong>{{first_name}} {{last_name}}</strong><br />
      {{job_title}}<br />
      {{department}}<br />
      <span style="color:#888888;">{{company_name}}</span><br />
      Tel:
      <a href="tel:{{phone}}" style="color:#0066cc; text-decoration:none;">{{phone}}</a>
      ·
      <a href="mailto:{{email}}" style="color:#0066cc; text-decoration:none;">{{email}}</a><br />
      <a href="{{website_url}}" style="color:#0066cc; text-decoration:none;">{{website_url_display}}</a>
      <br /><br />
      <a href="{{linkedin_url}}" style="color:#0066cc; text-decoration:none;">LinkedIn</a>
      ·
      <a href="{{twitter_url}}" style="color:#0066cc; text-decoration:none;">X</a>
      <br /><br />
      <span style="font-size:11px; color:#999999;">{{legal_disclaimer_short}}</span>
    </td>
  </tr>
</table>
```
```

***

## 👀 Rendered Preview

> Example using sample values (no code fence; paste into an HTML-capable wiki or previewer to view).

<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 13px; line-height: 1.4;">
  <tr>
    <td style="padding-right: 12px;" valign="top">
      <img src="https://i.pravatar.cc/64" width="64" height="64" alt="Alex Doe" style="display:block; border-radius:50%;" />
    </td>
    <td valign="top">
      <strong>Alex Doe</strong><br />
      Senior Account Executive<br />
      Revenue Team<br />
      <span style="color:#888888;">Example Corp</span><br />
      Tel:
      <a href="tel:+18005551234" style="color:#0066cc; text-decoration:none;">+1 (800) 555‑1234</a>
      ·
      <a href="mailto:alex.doe@example.com" style="color:#0066cc; text-decoration:none;">alex.doe@example.com</a><br />
      <a href="https://example.com" style="color:#0066cc; text-decoration:none;">example.com</a>
      <br /><br />
      <a href="https://linkedin.com/in/example" style="color:#0066cc; text-decoration:none;">LinkedIn</a>
      ·
      <a href="https://x.com/example" style="color:#0066cc; text-decoration:none;">X</a>
      <br /><br />
      <span style="font-size:11px; color:#999999;">Confidentiality notice: content intended for the named recipient only.</span>
    </td>
  </tr>
</table>

***

## 🎨 Design & Branding

- **Layout**
  - Table-based layout for robust support in Outlook, Gmail, and Apple Mail.  
  - Single-column structure with optional image column for avatar or logo.

- **Typography & colors**
  - Base font: Arial, sans-serif; 13px for body, 11px for disclaimer.  
  - Primary link color `#0066cc`; muted text in the `#888888`–`#999999` range.

- **Images**
  - Use branded logos and icons hosted on a reliable HTTPS endpoint.  
  - When not yet available, reference a placeholder asset such as a generic logo URL.

***

## 📬 Client Support & Testing

- **Target clients**
  - Outlook desktop (Windows and macOS)  
  - Outlook Web  
  - Gmail Web  
  - Apple Mail (macOS, iOS)

- **Known considerations**
  - Some older Outlook versions may handle line-height and spacing differently; test with real accounts.  
  - Dark mode may invert or alter colors; confirm that text remains legible on dark backgrounds.

- **Recommended testing**
  - Send real test emails between target clients and inspect signatures.  
  - Optionally use a rendering tool such as Litmus or Email on Acid if available.

***

## 🚀 Installation Instructions

- **Centralized signature solution**
  - If using a signature manager or email platform with templating support, paste the HTML template into the signature editor and map each `{{placeholder}}` to the corresponding profile field.

- **Manual client setup**
  - For Outlook and similar clients, paste the rendered HTML signature into the signature settings UI, ensuring images use fully-qualified HTTPS URLs.  
  - For webmail clients, verify that copy–paste preserves links and formatting.

***

## 🧾 Legal & Compliance

- Store the full legal disclaimer text in a separate, version-controlled document and reference it as `{{legal_disclaimer_short}}` or a dedicated disclaimer block.  
- Ensure disclaimers meet current organizational and jurisdictional requirements, especially for regulated industries or cross-border communication.

## 🧪 Layout, HTML, Testing

- **Layout & HTML**
  - Two-column table layout (image left, text right) using inline styles for better compatibility with Gmail and other clients.[3][4][5][6][7]
  - Web-safe font (Arial) and fully qualified `https://` and `mailto:` links for consistent rendering and link handling.[8][6][7][3]
  - Verified emojis that display correctly in modern Gmail and most current clients, with graceful degradation in older systems.[2][9][1]

- **Gmail usage tip**
  - Design or render the signature in a browser or Google Docs/Sheets using a two-column table, then copy–paste the rendered block into the Gmail signature editor instead of pasting raw HTML.[4][6][7][8]

- **Testing checklist**
  - Send test emails to Gmail (web and mobile), at least one Outlook user, and at least one Apple Mail user to confirm cross-client behavior.[5][6][7][3]
  - Verify that the image loads over HTTPS, links are clickable, the layout stays two-column on desktop, and remains readable on mobile.[6][7][3][5]

[1](https://www.emailsignaturerescue.com/blog/can-i-use-emojis-in-my-gmail-signature-and-are-they-visible-across-all-devices-and-clients)
[2](https://bulksignature.com/blog/emojis-in-email-signatures-best-practices-and-examples)
[3](https://www.revolgy.com/insights/blog/create-advanced-html-email-signatures-in-gmail)
[4](https://tonicsiteshop.com/how-to-customize-your-gmail-email-signature-in-three-minutes/)
[5](https://community.latenode.com/t/issue-with-html-email-signature-layout-in-gmail-mobile-app-right-column-overlaps-image-in-left-column/35301)
[6](https://www.wisestamp.com/guides/gmail-html-signature/)
[7](https://ask.revolgy.com/en/support/solutions/articles/11000116146-how-to-use-html-editor-of-gmail-signatures-best-practices)
[8](https://clean.email/blog/email-signature/gmail-html-signature)
[9](https://support.google.com/mail/thread/4640181/how-to-enter-emoji-on-gmail?hl=en)
[10](https://support.google.com/mail/thread/289839710/cannot-accomplish-signature-with-2-column-format-image-on-left-3-line-identity-on-right?hl=en)


***

## 📚 References / See Also

- **Templating & placeholders**  
  - [Mustache – Templating language overview](https://mustache.github.io/mustache.5.html).[1]
  - [Mustache.js on GitHub](https://github.com/janl/mustache.js).[2]
  - [Practical email placeholder usage in SaaS email tools](https://www.bybrand.io/blog/hyper-personalized-signatures/).[3]

- **HTML details/summary & TOC**  
  - [HTML `<details>` disclosure element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details).[4]

- **HTML email & signatures**  
  - [HTML email development and testing best practices](https://www.textmagic.com/blog/html-email-best-practices/).[5]
  - [Guides for creating personalized HTML signatures](https://mysignature.io/blog/how-to-create-html-email-signature/).[6]

[1](https://www.tsmean.com/articles/mustache/the-ultimate-mustache-tutorial/)
[2](https://github.com/janl/mustache.js)
[3](https://www.bybrand.io/blog/hyper-personalized-signatures/)
[4](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
[5](https://www.textmagic.com/blog/html-email-best-practices/)
[6](https://mysignature.io/blog/how-to-create-html-email-signature/)
[7](https://github.com/moodle/custom-mustache.js/)
[8](https://www.raghavgroups.com/janl/mustache.js)
[9](https://www.reddit.com/r/PHP/comments/1ez4iom/populating_placeholders_in_configurable_templates/)
[10](https://devdoc.net/web/developer.mozilla.org/en-US/docs/Web/HTML/Element/details.html)

***

## ✅ Revision History

| Version | Date       | Author           | Changes Made          |
| ------- | ---------- | ---------------- | --------------------- |
| 1.00    | 2025-12-11 | Eric L. Hepperle | Initial draft created |

