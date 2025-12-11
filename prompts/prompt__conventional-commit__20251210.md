Generate a clear, concise conventional commit message after thoroughly analyzing the main content type of this repo based on the actual changed files.
Inspect the list of changed files and their extensions carefully before deciding on the commit type.
If the majority of changed files are .md documentation or wiki files, use type = docs.
Otherwise, determine the commit type based on the predominant file types and folder structures:
For WordPress theme or plugin PHP/template files, prefer feat, fix, style, or refactor with appropriate scope.
For Python scripts, use feat, fix, or refactor.
For configuration or project files, use chore.
Do not make assumptions or default to docs if file evidence points otherwise.
Explicitly mention the main affected folders and filename patterns as scope.
Use the format:
text
type(scope): concise summary ≤70 characters

**folder1**

- `filename1`  
  - explanation of changes up to 4 bullet points.

**folder2**

- `filename2`  
  - explanation of changes up to 4 bullet points.

⚠️ Notes & Caveats:
- summary of global notes or follow-up actions.

📋 Codebase Annotations:
- Include only if any TODO, FIXME, DEPRECATED, or NOTE annotations were found.

- Keep each listed file's change bullets distinct and specific.
- Omit the annotations section if no annotations are found.
- This approach ensures commit messages are accurate, descriptive, and correctly scoped by grounding decisions in the actual repo content and changes.
- Notes should always be in a single section, not per file
- Always wrap filenames, classnames, function, variable, and constant names in backticks