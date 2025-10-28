<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# yes

Perfect — here’s a **matching standard template** for your version *finalization* commits. This works as the companion to your initialization format and keeps your changelog, commit history, and version metadata consistent.

***

### ✅ **Version Finalization Commit Template (Tagging Optional / Recommended)**

```
🏁  chore(theme): finalize version X.Y.Z release

* Synced `package.json`, `style.css`, `README.md`, and `screenshot.jpg` to vX.Y.Z
* Updated `CHANGELOG.md` with final release notes
* Verified metadata consistency across theme files
* (Optional) Tag this commit as `vX.Y.Z` to mark the official release point
```


***

### 📏 **Guidelines for Finalization Commits**

- **Commit type:** Always use `chore(theme)` to keep version management scoped and traceable.
- **Emoji:** 🏁 clearly signals a "cycle end" and pairs visually with the 🆕 init commits.
- **Purpose:** Mark completion of all work in the version cycle — including last‑minute doc sync, version bump, and changelog updates.
- **Timing:** Perform **immediately before merging to master/main** or creating a release branch merge PR.
- **Files to Update:**
    - `package.json`, `style.css`, `README.md` (sync version numbers)
    - `CHANGELOG.md` (insert release entry or finalize pending one)
    - Any metadata or screenshot files referencing the version

***

### 📝 **Example Real Commit**

```
🏁  chore(theme): finalize version 4.01.03 release

* Synced `package.json`, `style.css`, `README.md`, and `screenshot.jpg` for v4.01.03
* Finalized `CHANGELOG.md` entry for “Maintenance Page Improvements”
* Verified theme metadata and version identifiers across files
* (Optional) Will tag this commit as `v4.01.03` once tagging workflow is enabled
```


***

### 💡 **Recommendation**

As with initialization, keep tagging **optional but recommended**.
It’s easy to add later and becomes valuable once:

- You start automated builds or deployments, or
- You need to compare diffs between releases (`git diff v4.01.03 v4.02.00-init`).

Would you like me to combine both templates into a reusable Markdown snippet you can paste into your project wiki or `CONTRIBUTING.md`?

