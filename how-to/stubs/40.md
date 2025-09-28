### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/24/25


## CONTENT_BELOW: ##

---




Great question—and yes, you're absolutely right to be cautious about using `@MAYBE` if it’s not widely supported by tools or conventions. Here's a direct answer:

---

### ✅ Can `TODO` Be Used for "Maybes"?

**Short answer:**
**No, not ideally.** `TODO` should **only be used for actionable, necessary tasks**—things someone **intends** to do. Using `TODO` for optional or speculative ideas can **clutter task lists** and **mislead tooling** (e.g., Jira, IDEs) that track `TODO`s as work that *must* be done.

---

### 🤔 So What Should You Use for "Maybes"?

Since `@MAYBE` isn't widely recognized, here are some **better, still readable and team-friendly** alternatives:

#### 1. **`// CONSIDER:`**

```js
// CONSIDER: Switching to a memoized selector if performance becomes an issue
```

* Very readable.
* Implies optionality.
* Not tracked by tooling unless configured.

#### 2. **`// NOTE:`**

```python
# NOTE: This works, but could be cleaner with recursion
```

#### 3. **`// IDEA:`**

```ts
// IDEA: Abstract this into a reusable hook
```

#### 4. **Use `@MAYBE` if your team agrees on it**

* If you're in a team (like Facebook/Meta) where `@MAYBE` is a known internal convention, **go for it**.
* You might even add a linter rule or comment parser to recognize it.

---

### 🛠️ Tooling Matters

If you're using tools like:

* **VSCode**, **WebStorm**, **IntelliJ**, etc.
* **Linters** like ESLint or TSLint
* **Static analyzers**
* **CI/CD pipelines**

...then sticking to recognized tags (`TODO`, `FIXME`) is useful. Those tools often:

* Create a task list of `TODO`s
* Highlight or warn about `FIXME`s
* Sync with issue trackers

Using `TODO` for vague or non-essential items pollutes that process.

---

### ✅ Recommendation

| Type of Comment       | Use            | Tag You Should Use                                  |
| --------------------- | -------------- | --------------------------------------------------- |
| Must-do work          | Required       | `TODO`                                              |
| Optional improvements | Optional       | `CONSIDER`, `NOTE`, `IDEA`, or your team's `@MAYBE` |
| Broken code           | Fix required   | `FIXME`                                             |
| Sketchy workaround    | Needs refactor | `HACK`                                              |

---

### 💡 Tip:

You can even annotate your optional notes like this:

```ts
// NOTE (non-blocking): Could refactor this into a service class
```

Or:

```ts
// CONSIDER: Breaking this component into smaller parts
```

---

Would you like a customizable comment annotation guide for your project/team? I can generate one.




---


---
---



Great! Here's a **customizable comment annotation guide** you can drop into your project’s `CONTRIBUTING.md`, `README`, or internal documentation (e.g., a team wiki). It sets clear expectations for how to use structured comments in code.

---

## 🧭 Comment Annotation Guide

Use the following **standard comment tags** in code to improve readability, maintenance, and team collaboration.

> ✅ These are *human-readable annotations*—not language features—but are often recognized by IDEs and tooling.

---

### ✅ `TODO`

**Use for:** Required tasks, fixes, or incomplete features that must be done.
**Tracked by tools:** Yes (IDE task lists, linters, etc.)

```js
// TODO: Add error handling for empty form submission
```

---

### 🐛 `FIXME`

**Use for:** Known bugs or broken behavior that should be fixed.

```python
# FIXME: Crashes when input is None
```

---

### 🛠 `HACK`

**Use for:** Temporary or questionable solutions that should be refactored later.

```ts
// HACK: Hardcoded value to bypass auth check during demo
```

---

### 🧠 `NOTE`

**Use for:** Explanations, clarifications, or useful reminders. No action needed.

```go
// NOTE: This method assumes input has been validated earlier
```

---

### 💡 `CONSIDER`

**Use for:** Optional improvements or refactors worth exploring later.
**This replaces informal `@MAYBE`** for better clarity and readability.

```js
// CONSIDER: Using memoization here to optimize performance
```

---

### 🌱 `IDEA`

**Use for:** Experimental or creative suggestions that aren’t urgent or confirmed.

```ts
// IDEA: Could generalize this into a reusable utility later
```

---

### 🚫 `DEPRECATED`

**Use for:** Code that should be removed or replaced in the future.

```python
# DEPRECATED: This function will be removed in v2.0
```

---

## 🧰 Best Practices

* **Be clear and concise** — Write short, actionable notes.
* **Add context** — Include a reason, issue number, or timestamp if relevant.

  ```js
  // TODO: Improve mobile layout (#234)
  ```
* **Avoid polluting `TODO`** with vague or speculative items.
  Use `CONSIDER` or `IDEA` for optional improvements.
* **Clean up comments** regularly during reviews or tech debt sprints.

---

## 🔧 Optional (Team-Level) Custom Tags

If your team has specific needs, consider adding:

| Tag        | Meaning                           |
| ---------- | --------------------------------- |
| `REVIEW`   | Needs another developer to review |
| `BLOCKED`  | Cannot proceed due to dependency  |
| `QUESTION` | Unclear logic or decision         |

> Just make sure everyone agrees on and understands them.

---

Would you like this as a downloadable Markdown file or ready to drop into a GitHub project?
