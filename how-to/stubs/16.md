### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:
09/13/25


## CONTENT_BELOW: ##

---




2022_ElijahStreams-Logo_Hz-FullColor_226x29.png


docs(how-to): update logo to ehw-kb logo with fixed height of 40px

**how-to/github/**
- **github-mult-profiles-ssh-v05__final.md**
  - Replaced site logo with new transparent SVG logo `logo-ehw-kb.svg`.
  - Debugging: Added descriptive alt text to target CSS based on markdown image alt text since markdown doesn't offer much else to target; Added inline CSS to test rendering in Markdown Preview (failed); the green background was a debugging background but it didn't render in VSCODE Markdown Preview tab although it did renderer in the HTML I exported from the markdown file. That tells me those rules would not apply in live preview which is my requirement.
  - This commit documents these experiments as - the in-document style tag styles didn't work, but using the plain HTML IMG tag like this did,
  
  <img src="../../_pix/logos/logo-ehw-kb.svg" style="height: 40px;" alt="Site Logo for: EricHepperle.com Knowledgebase"/>
  
  , but this approach using a basic IMG tag as an alternative, with the tradeoff being its more likely to break if I move the file to different folder levels because of the `../../` notation
  
  , and, to my surprise, the `{height=40}` parameter worked on the markdown image notation like,
  
  ![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=40}
  
  - Adjusted logo display height to 40px for consistent sizing.
  - 





The updated instruction for commit messages is:

Generate a conventional commit message formatted as follows:  
- Use type `docs` unless clearly another type, scope as the top-level affected folder only (e.g., use `how-to` instead of `how-to/github`).  
- Summary line ≤70 chars, concise explaining what and why.  
- Group affected files by bolded top-level folder name (e.g., **how-to/**).  
- For each file, list only the filename (no folder prefix) inside backticks and bolded.  
- Under each file bullet, add up to 6 concise paragraphs, each starting with verbs like Added, Updated, Corrected, describing key changes.  
- Optionally include a separate, last section prefixed with ⚠️ **Notes & Caveats:** for warnings, caveats, or future tasks regarding the changes.  
- Maintain consistent blank lines and indentation for readability.
- Always return as markdown format for quick copy-paste.


Also, make sure to generate the notes and caveats section since there are lots of notes about experiments etc.



Generate a conventional commit message formatted as follows:  
- Use type `docs` unless clearly another type, scope as the top-level affected folder only (e.g., use `how-to` instead of `how-to/github`).  
- Summary line ≤70 chars, concise explaining what and why.  
- Group affected files by bolded full relative folder path (e.g., **how-to/github/blah** not **how-to**).  
- For each file, list only the filename (no folder prefix) inside backticks and bolded.  
- Under each file bullet, add up to 6 concise paragraphs, each starting with verbs like Added, Updated, Corrected, describing key changes.  
- Optionally include a separate, last section prefixed with ⚠️ **Notes & Caveats:** for warnings, caveats, or future tasks regarding the changes.  
- Maintain consistent blank lines and indentation for readability.
- Always return as markdown format for quick copy-paste.


---


docs(readme): update README for Boot.dev course and platform details

- added `personal-notes/` folder and contents from `ehw-starter-tut-prj` with a link in README for separate note management
- replaced placeholder info with Boot.dev-specific details including course name, URLs, instructor, platform, description, and tentative project structure
- added `Project Snapshot` section title H3 above top file metadata table
- removed unnecessary closing paragraph

⚠️ **Notes & Caveats:** 
- ChatGPT AI assistance used to fill out remaining items; human review is recommended
- `personal-notes/` folder requires review and refinement to align with the current project


## Contributors

Oh My Zsh has a vibrant community of happy users and delightful contributors. Without all the time and help
from our contributors, it wouldn't be so awesome.

Thank you so much!

<a href="https://github.com/ohmyzsh/ohmyzsh/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ohmyzsh/ohmyzsh" width="100%"/>
</a>