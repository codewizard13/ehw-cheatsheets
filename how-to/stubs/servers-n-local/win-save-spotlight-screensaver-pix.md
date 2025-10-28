Eric Hepperle, Perplexity (EHJobs), 10/02/25


---


<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg: 📷 How to Save Windows Spotlight Screensaver Images

**Version:** 1.0

***

### [🏚️ Home](../README.md) | [📁 How-To](index.md)

| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-10-02       |
| **Date Updated**:  | 2025-10-02       |
| **AI Assistance**: | Perplexity AI    |

***

## 🏷️ Tags

- Windows
- Screensaver
- Spotlight images

***

<details open>
<summary style="font-size:1.15em; font-weight:bold;">Table of Contents</summary>

- [🏷️ Tags](#️-tags)
- [📌 Overview](#-overview)
- [🔎 Steps to Locate and Save](#-steps-to-locate-and-save)
- [🛠️ Batch Renaming Tip](#️-batch-renaming-tip)
- [⚠️ Gotchas \& Notes](#️-gotchas--notes)
- [📚 References / See Also](#-references--see-also)
</details>

***

## 📌 Overview

Windows Spotlight features beautiful lock screen and screensaver images that are saved on your system but hidden behind randomly named files with no extensions. This article walks you through finding, copying, and converting these hidden images to viewable JPEGs so you can enjoy and archive them for personal use.[1][5][7]

***

## 🔎 Steps to Locate and Save

- [ ] Press <kbd>Windows</kbd>+<kbd>R</kbd> to open the **Run** dialog.
- [ ] Paste the following path and hit **Enter**:
  ```
  %localappdata%\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets
  ```
- [ ] A folder will open. The files here have long, random names and no extensions.
- [ ] Sort the files by size. Select and copy the larger files (typically >300KB or >500KB), which are usually Spotlight images.
- [ ] Paste these files into a new folder (e.g., `SpotlightImages`) on your Desktop or Pictures directory.
- [ ] Add the `.jpg` file extension to each copied file.
- [ ] Open the renamed files to see which images Windows used for your lock screen or desktop.

***

## 🛠️ Batch Renaming Tip

If you have many images:
- Use PowerShell in the destination folder:
  ```
  ren * *.jpg
  ```
- Or use File Explorer:
  - Select a file, right-click, choose **Rename**, and append `.jpg` for each file.

***

## ⚠️ Gotchas & Notes

- Some files in the Assets folder are icons or not actual images; your images will typically be the largest files.[3][1]
- You may need to enable **Hidden items** from File Explorer's **View** tab to see the folder.[6]
- Not all images are landscape—some are portrait or low-res and not ideal for wallpapers.
- If the folder is empty or missing recent Spotlight images, check for system changes or the cached images location:
  ```
  %appdata%\Microsoft\Windows\Themes\CachedFiles
  ```
- Renaming and opening files that are not images will produce error messages—delete these after checking.

***

## 📚 References / See Also

- [How to Find and Save Windows Spotlight Images | NinjaOne](https://www.ninjaone.com/blog/find-and-save-windows-spotlight-images/)  
- [Where to find the Windows Spotlight photos | CNET](https://www.cnet.com/tech/computing/where-to-find-the-windows-spotlight-photos/)  
- [How to find Windows Spotlight wallpapers | everydaydocuments.com](https://everydaydocuments.com/article/2023-how-to-find-windows-spotlight-wallpapers)  
- [How to save Windows 10 Spotlight Images and find their location | WinBuzzer](https://winbuzzer.com/2024/04/17/how-to-save-windows-10-spotlight-images-and-find-their-location-xcxwbt/)  
- [Microsoft Q&A: How to find and save Spotlight pictures?](https://learn.microsoft.com/en-us/answers/questions/3749678/how-to-find-and-save-spotlight-pictures)  
- [Windows 11 forum: Find and save Windows Spotlight images](https://www.elevenforum.com/t/find-and-save-windows-spotlight-images-in-windows-11.11556/)

***

**This KB ensures you can reliably find, copy, and use Windows Spotlight screensaver images for personal backgrounds or collections, including a safe workflow for batch-image conversion and troubleshooting folder access on modern Windows versions.**

[1](https://www.ninjaone.com/blog/find-and-save-windows-spotlight-images/)
[2](https://learn.microsoft.com/en-us/answers/questions/3749678/how-to-find-and-save-spotlight-pictures)
[3](https://www.cnet.com/tech/computing/where-to-find-the-windows-spotlight-photos/)
[4](https://www.reddit.com/r/Windows11/comments/1kaskou/change_in_location_of_windows_spotlight_photos/)
[5](https://winbuzzer.com/2024/04/17/how-to-save-windows-10-spotlight-images-and-find-their-location-xcxwbt/)
[6](https://everydaydocuments.com/article/2023-how-to-find-windows-spotlight-wallpapers)
[7](https://learn.microsoft.com/en-us/answers/questions/4378000/how-can-i-find-the-location-of-a-windows-spotlight)
[8](https://www.tenforums.com/customization/217710-where-windows-10-spotlight-desktop-backgroound-images-stored-2025-a.html)
[9](https://www.youtube.com/watch?v=k-HzKdweeWo)