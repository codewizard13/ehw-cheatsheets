Here’s a refined and more standardized rewrite of your **Structural Specifications Draft**. This version improves organization, clarity, and technical precision while preserving your original intent and structure.  

***

# **Structural Specifications — Daily Log Template**

This document defines the **structure, formatting rules**, and **AI parsing behavior** for the *Eric Hepperle Daily Log Template*. Its purpose is to ensure consistent Markdown formatting and to enable AI systems to accurately interpret, classify, and reorganize TODO items without altering other sections.

***

### **1. Template Structure Overview**

The Daily Log follows a **modular Markdown format** composed of clearly defined sections. Each section uses consistent headers, emoji identifiers, and divider rules for readability and machine parsing.

| Section | Type | Identifier Pattern | Contents |
| :-- | :-- | :-- | :-- |
| **Header (Meta Info)** | Metadata | `**Author:**`, `**Date:**`, `**Timezone:**` | Author name, date, and timezone context |
| **📅 Calendar / Schedule / Noteworthy Milestones** | Event list | `## 📅 ...` | Timestamped schedule or daily milestones |
| **🚀 Projects** | Status list | `## 🚀 PROJECTS` | Active and completed project summaries |
| **♻️ Habits / Operations** | Repeating task sets | `## ♻️ HABITS / OPERATIONS` | Habit tracking and operational routines |
| **📌 TODO** | Actionable task list | `## 📌 TODO` | Parent container for categorized or uncategorized tasks |
| **⚡ Subcategories (under TODO or Habits)** | Task subsets | `------------------- ⚡ CATEGORY NAME ⚡` | Sets of checkbox-formatted task items |
| **🎯 Main / Scratch Notes** | Freeform notes | `## 🎯 ...` | Brainstorms, journaling, or experiment notes |
| **📈 Today’s Progress** | Summary | `## 📈 ...` | Completed achievements and progress notes |
| **⏰ Tomorrow’s Tasks** | Future items | `## ⏰ ...` | Planned actions for the next day |
| **🌐 Metadata Footer** | Recordkeeping | `<span ...>` block | Creation date, revision info, and AI assistant credits |

***

### **2. TODO Section Specifications**

The **TODO section** is the most structurally important for AI-driven categorization.

**Format Rules:**
- Begins with `## 📌 TODO`
- Contains optional `<br>` spacer lines
- Subcategories start with delimiter:  
  `------------------- ⚡ CATEGORY NAME ⚡`
- Tasks are formatted using Markdown checkboxes:
  ```
  - [ ] Task description
  - [x] Completed task
  ```

**Behavioral Notes:**
- Subcategories serve as *contextual containers* (e.g., **URGENT**, **EMPLOYMENT**, **HOMESTEAD**, etc.).
- Uncategorized tasks should be collected and analyzed for intelligent placement into appropriate subgroups.
- Maintain visual consistency between all sections using the same divider and emoji style conventions.

***

### **3. AI Prompt Objectives**

The AI system must:

1. **Parse** the Markdown input, focusing only on the `## 📌 TODO` section and its contents.  
2. **Identify** all checkbox-style tasks (both `[ ]` and `[x]`).  
3. **Categorize** tasks intelligently using semantic interpretation (e.g., detecting that “respond to client email” ≈ *Work/Urgent*).  
4. **Reconstruct** a clean, categorized TODO section retaining all emojis, structures, and formatting fidelity.  

***

### **4. AI Prompt Structural Design**

#### **A. Input Definition**
- Input: Markdown conforming to this Daily Log Template.
- Focus: `## 📌 TODO` section and all nested subcategories.
- Handle uncategorized checkbox tasks by grouping them intelligently.

#### **B. Categorization Rules**
- Use keywords and context to infer logical categories.
- Reuse existing subcategory labels when relevant.
- Create new categories when needed (e.g., “DOCUMENTATION” or “SIDE HUSTLES”).
- Alphabetize or logically group categories for readability.

#### **C. Output Requirements**
- Output only the reconstructed TODO section, formatted as:
  ```
  ## 📌 TODO

  ------------------- ⚡ CATEGORY NAME ⚡
  - [ ] Task A
  - [x] Completed Task
  ```
- Exclude empty categories (i.e., those without tasks).
- Preserve emoji headers and line separators exactly as defined.
- Retain unchanged all completed (`[x]`) and incomplete (`[ ]`) statuses.

#### **D. Preservation Rules**
- Do **not** edit any non-TODO section content.
- Keep metadata blocks, project listings, and note sections intact.
- Respect all existing styling (including HTML `<span>` metadata) and revision notation.

***

### **5. Example AI Prompt Template**

> **NOTE:** *ADD A LINK to the template in the kb wiki*