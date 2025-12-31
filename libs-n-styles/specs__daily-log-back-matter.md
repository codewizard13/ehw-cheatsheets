<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# What are the back matter requirements?

Excellent follow-up — in structured documents like your *Daily Log Template*, the **back matter** is the area that appears *after the main content*, typically containing metadata, revision info, or credits.

Let’s break down what the back matter is in your template, what it does, and the **requirements** (i.e. the “rules” for how it should be handled or preserved when an AI processes the file).

***

### **1. Definition: What Is “Back Matter”?**

In publishing and documentation, **Back Matter** refers to everything that appears **after the core content** — similar to appendices, notes, or citations in a book.

In your *Daily Log Template*, that means all text that comes **after** the final main section (`====== ⏰ TOMORROW'S TASKS` or `====== 📈 TODAY'S PROGRESS`) and continues to the end of the file.

So, in your example, this is your **back matter block:**

```
***

<span style="font-size: small; color:#808080">  
<b>Created by:</b> Eric L Hepperle  
<b>Date Created:</b> 2025-12-10  
<b>Date Edited:</b> 2025-12-10  
<b>AI Assistant(s):</b> Perplexity  
<b>Revision:</b> 02.00  
</span>

***
```
---

### **2. Purpose of the Back Matter**

This section serves as **document provenance metadata**, tracking authorship and versioning information.  
It functions similarly to an audit footer and signals *the end of the structured log entry.*

Common data elements included:
- Creator name (`Created by:`)
- Creation and last edited dates
- AI assistant(s) used
- Revision number
- Optional styling (HTML or Markdown)
- A closing divider (`***`)

---

### **3. Structural Requirements (Rules)**

When designing AI prompts or scripts that work with this file, the back matter has specific **preservation rules** to ensure nothing is lost or altered.

#### ✅ Must Preserve Exactly:
- All stylistic elements: `<span>`, `<b>`, HTML tags, emoji, and separators.
- Order and indentation of metadata lines.
- Blank lines and visual dividers (`***`) that isolate the back matter block.
- Whitespace formatting and punctuation (e.g., colons, spacing for alignment).
- Revision number — critical for version tracking.

#### 🚫 Do Not:
- Add, remove, or rearrange any metadata lines.
- Change date, timestamp, color, or formatting.
- Insert new fields (e.g. “Last Accessed”) unless explicitly instructed.
- Interpret HTML tags — treat them as literal text to be preserved.

---

### **4. Back Matter Location Rule**

The back matter must *always* remain:
- At the **very end** of the file, after all content sections,  
- Following at least one visual divider (e.g., `***`),  
- With no new content added below it.

---

### **5. Example Prompt Description for Back Matter Handling**

Here’s how you could describe back matter handling in your AI prompt:

> **BACK MATTER REQUIREMENTS:**  
> The document concludes with a *Back Matter* section containing structured metadata, enclosed in `***` separators.  
> Preserve this section exactly as written — including HTML tags, revision info, and styling. Do not remove or modify any part of it.  
> Always ensure it remains the final section in the file.

---

### **6. Summary — Back Matter Requirements Table**

| Element | Description | Requirement |
|----------|--------------|-------------|
| Start divider | `***` | Must remain unchanged |
| Span block | Styled metadata (e.g., author, dates, AI tool) | Must remain intact |
| Line order | Created by → Date Created → Date Edited → Assistants → Revision | Must be preserved |
| Formatting | HTML `<b>`, `<span>`, Markdown spacing | Must be preserved literally |
| End divider | `***` | Must remain at the very end of file |
| Edit permissions | None — read-only for AI | Never modify or remove |

---

Would you like me to integrate these back matter preservation rules into the **master AI prompt** along with the metadata and TODO details, so it’s fully end-to-end complete?```

