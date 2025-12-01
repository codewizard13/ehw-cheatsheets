<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../_css/main.css">


<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb-h32.png)



<!-- 📝 Title -->
# HOW-TO: 📘 TOPIC: Version Tagging Conventions & CI/CD Best Practices Using Git


**Version:** 1.0


> Optimized for: VSCode on Windows 11 + Git Bash (SSH) | Modern CI/CD pipelines (GitHub Actions, GitLab CI, Azure DevOps)


<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 Developer Guide](index.md)



<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-10-28       |
| **Date Updated**:  | --               |
| **AI Assistance**: | ChatGPT          |



---


<section id="sec-tags">


## Tags:


- Version Tagging
- SemVer
- CI/CD Patterns
- Release Automation
- GitHub Actions
- GitLab Pipelines


</section>


---


## Alternate Discovery Titles (Indexing Aid)


- *Semantic Version Tagging in CI/CD Workflows*
- *Best Practices for Automated Git Tag Versioning*
- *How to Structure and Use Git Tags for Modern Pipelines*



---


## 📌 Overview


Consistent version tagging is essential for maintainable development and smooth automated deployments.  
Semantic Tags (SemVer) and automated pipelines enable versioned releases with traceability, reliability, and quick rollbacks.  
Well-chosen tag naming conventions directly affect developer clarity, downstream integration, and user confidence.


This guide:
- Explains practical tag naming schemes
- Demonstrates tag-triggered deployments in CI/CD
- Shows how to automate and enforce tag use in pipelines
- Summarizes rules for cross-tool compatibility


---


## 📖 Collapsible Table of Contents


<details>
<summary><strong>📂 Expand / Collapse Table of Contents</strong></summary>

- [HOW-TO: 📘 TOPIC: Version Tagging Conventions & CI/CD Best Practices Using Git](#how-to--topic-version-tagging-conventions--cicd-best-practices-using-git)
  - [🏚️ Home | 📁 Developer Guide](#️-home---developer-guide)
  - [Tags:](#tags)
  - [Alternate Discovery Titles (Indexing Aid)](#alternate-discovery-titles-indexing-aid)
  - [📌 Overview](#-overview)
  - [📖 Collapsible Table of Contents](#-collapsible-table-of-contents)
  - [✅ Outcome](#-outcome)
  - [🎯 Tag Convention Best Practices](#-tag-convention-best-practices)
  - [🤖 Automating Tagging in CI/CD Pipelines](#-automating-tagging-in-cicd-pipelines)
  - [🔧 Example: GitHub Actions Tag-triggered Workflow](#-example-github-actions-tag-triggered-workflow)
  - [🚦 Pattern: Semantic-Release & Auto-SemVer](#-pattern-semantic-release--auto-semver)
  - [🎫 Special Tag Types and Suffixes](#-special-tag-types-and-suffixes)
  - [🧪 Tag Naming Hygiene & Gotchas](#-tag-naming-hygiene--gotchas)
  - [📚 References & Further Learning](#-references--further-learning)
  - [✅ Revision History](#-revision-history)

</details>

---

## ✅ Outcome

By following this KB, you will be able to:

- Choose clear, industry-standard tag patterns for stable, pre-release, and hotfix builds  
- Set up workflows to automate deployment and artifact release based on tags  
- Eliminate versioning ambiguity or broken artifact links caused by inconsistent tag names  
- Understand when to use timestamp, semantic, or custom pattern tags for optimal pipeline behavior  


---


## 🎯 Tag Convention Best Practices

- **Standard**: Use [Semantic Versioning (SemVer)](https://semver.org/) for all public/prod releases:  
  `vMAJOR.MINOR.PATCH` (e.g., `v1.8.3`, `v2.0.0`)  
- **Pre-release**: Append hyphenated qualifiers for internal/testing builds:  
  `v2.1.0-beta.1`, `v2.1.0-rc.1`, `v2.1.0-alpha`  
- **Timestamps**: For CI-only builds or hotfixes, use ISO-style:  
  `v2.2.2+20251028.1240` or `build-20251028-1235`  
- **Branch/Feature Prefixes**:  
  `feature/login-v1.0.0`, `hotfix-quickfix-20251028` (for internal tracking only)

| Tag Example        | When to Use                      | Publishes to NPM/PyPI      |
| -------------------| -------------------------------- | -------------------------- |
| v1.2.3             | Stable/prod release              | Yes                        |
| v1.2.3-beta.1      | Beta channel/e2e test            | Maybe (beta channel only)  |
| v1.2.3+20251028    | CI-only, artifact timestamp      | No                         |
| build-20251028     | Internal automation builds       | No                         |


**Key tip:** Always prefix numeric tags with `v` to avoid ambiguity with commit hashes (`v1.2.3` not `1.2.3`)[web:1][web:2][web:6][web:8][web:10].


---


## 🤖 Automating Tagging in CI/CD Pipelines

- **Tag-triggered Deployments**:  
  Configure pipelines to *only* deploy or build production artifacts on tagged commits (e.g., `v*`).
- **Automatic Tagging on Release**:  
  Add a pipeline step to generate and push tags from merge or release workflow, preventing human error[web:2][web:10][web:7].
- **Semantic Version Checks**:  
  Validate version bump logic using commit messages or changelog, enforcing SemVer increment rules.
- **Tag listing/fetching in build steps**:  
  Use `git tag`, `git fetch --tags`, and tag pattern searches

[1](https://stackoverflow.com/questions/2006265/is-there-a-standard-naming-convention-for-git-tags)
[2](https://blog.pixelfreestudio.com/best-practices-for-creating-and-using-git-tags/)
[3](https://www.sei.cmu.edu/blog/versioning-with-git-tags-and-conventional-commits/)
[4](https://www.hatica.io/blog/git-tags/)
[5](https://www.gitkraken.com/gitkon/semantic-versioning-git-tags)
[6](https://docs.gitlab.com/user/project/repository/tags/)
[7](https://www.bitshifted.co/blog/automatic-semantic-versioning-cicd-pipelines/)
[8](https://codesignal.com/learn/courses/advanced-git-features/lessons/utilizing-git-tags-for-version-management)
[9](https://www.reddit.com/r/devops/comments/13i3fqk/continuous_delivery_when_do_you_tag/)
[10](https://andrewilson.co.uk/post/2025/05/cicd-and-automatic-semantic-versioning/)
[11](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-tag)
[12](https://github.com/orgs/community/discussions/158047)
[13](https://www.reddit.com/r/csharp/comments/1flb48z/how_do_you_do_versioning_with_cicd/)
[14](https://www.reddit.com/r/devops/comments/1m3rfgl/how_do_you_handle_tagging_repositories_when_its/)
[15](https://www.codecademy.com/article/git-tag)
[16](https://semaphore.io/blog/semantic-versioning-cicd)
[17](https://hosting.analythium.io/cicd-patterns-with-github-actions-and-docker/)
[18](https://stackoverflow.com/questions/72635170/how-to-implement-semantic-versioning-in-gitlab-pipeline-step-by-step)
[19](https://stackoverflow.com/questions/61891328/trigger-github-action-only-on-new-tags)
[20](https://github.com/semantic-release/semantic-release)