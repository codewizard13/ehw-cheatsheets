<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# HOW-TO: 📘 WordPress: Block Search Engines from Indexing WordPress Staging Sites Using `robots.txt`

**Version:** 1.0


> Optimized for: VSCode on Windows 11 + Git Bash (SSH)
> 

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-08-27       |
| **Date Updated**:  | 2025-09-20       |
| **AI Assistance**: | ChatGPT          |


---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">

## Tags:

- [WordPress](#)
- [Robots file](#)
- [Security](#)


</section>




---


<!-- 🔍 Content Section Heading -->

## 📌 Overview

Here’s a revised, wiki-style guide with **dummy staging site names**, including one from the WP Engine environments mentioned in the email screenshot:

***

## 🛡️ How to Block Search Engines from Indexing WordPress Staging Sites Using `robots.txt`

### ✅ **Step-by-Step Instructions**

1.  **Access Your Staging Site Files**
    *   Use FTP, SFTP, or your hosting provider’s file manager (e.g., WP Engine, cPanel).
    *   Navigate to the **root directory** of your staging site (e.g., `/public_html/` or `/staging/`).

2.  **Locate or Create `robots.txt`**
    *   Check if a `robots.txt` file exists.
    *   If not, create a new plain text file named `robots.txt`.

3.  **Insert Disallow Rules**
    *   Add the following lines to block all bots:

            User-agent: *
            Disallow: /

    *   This tells **all search engine crawlers** to avoid indexing any part of the site.

4.  **Save and Upload**
    *   Save the file and upload it to the root of your staging site.

        **Example URLs:**

        *   `https://elijahstre1stg.wpenginepowered.com/robots.txt` ✅
        *   `https://dev-elijahlist.wpenginepowered.com/robots.txt` ✅
        *   `https://staging2-elijahstreams.com/robots.txt` ✅

5.  **Verify the File**
    *   Visit the URL of your `robots.txt` file in a browser to confirm it’s live.
    *   Use tools like Google’s robots.txt Tester for validation.

6.  **Optional: Add Noindex Meta Tag**
    *   For extra protection, add this to your site’s `<head>` section:

        ![Visualization](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAAlCAYAAADRPcMTAAADgklEQVR4AezXW27CQAwF0Kj7X3TFD0igQB7zsMenUiUaMmP7uD/3b/NDgAABAgQIECBAgAABAgQITBfoHNCnz6cBAgQIECBAgAABAgQIECCQQiB3QE9BrEkCBAgQIECAAAECBAgQIPBbQED/YuQrAgQIECBAgAABAgQIECAwSkBAHyX9WccTAgQIECBAgAABAgQIECDwFBDQnxSrfTAPAQIECBAgQIAAAQIECGQSENAzbStSr3ohQIAAAQIECBAgQIAAgaYCAnpTTpe1EnAPAQIECBAgQIAAAQIEqgkI6NU2bt6HgF8CBAgQIECAAAECBAiEExDQw61EQ/kFTECAAAECBAgQIECAAIHzAgL6eTMnCMwVUJ0AAQIECBAgQIAAgSUFBPQl12ooAtcFnCRAgAABAgQIECBAYI6AgD7HXVUCVQXMTYAAAQIECBAgQIDAjoCAvgPjMQECGQX0TIAAAQIECBAgQCCvgICed3c6J0BgtIB6BAgQIECAAAECBDoKCOgdcV1NgACBMwLeJUCAAAECBAgQqC0goNfev+kJEKgjYFICBAgQIECAAIHgAgJ68AVpjwABAjkEdEmAAAECBAgQIHBXQEC/K+g8AQIECPQXUIEAAQIECBAgUEBAQC+wZCMSIECAwHcB3xIgQIAAAQIEIggI6BG2oAcCBAgQWFnAbAQIECBAgACBQwIC+iEmLxEgQIAAgagC+iJAgAABAgRWERDQV9mkOQgQIECAQA8BdxIgQIAAAQLDBAT0YdQKESBAgAABAu8C/iZAgAABAgReAgL6y8InAgQIECBAYC0B0xAgQIAAgVQCAnqqdWmWAAECBAgQiCOgEwIECBAg0FZAQG/r6TYCBAgQIECAQBsBtxAgQIBAOQEBvdzKDUyAAAECBAgQ2DYGBAgQIBBPQECPtxMdESBAgAABAgSyC+ifAAECBC4ICOgX0BwhQIAAAQIECBCYKaA2AQIE1hQQ0Nfcq6kIECBAgAABAgSuCjhHgACBSQIC+iR4ZQkQIECAAAECBGoKmJoAAQJ7AgL6noznBAgQIECAAAECBPIJ6JgAgcQCAnri5WmdAAECBAgQIECAwFgB1QgQ6CkgoPfUdTcBAgQIECBAgAABAscFvEmguICAXvwfwPgECBAgQIAAAQIEqgiYk0B0AQE9+ob0R4AAAQIECBAgQIBABgE9Ergt8A8AAP//AqOmBQAAAAZJREFUAwAdqwBLIDLOtQAAAABJRU5ErkJggg==)

    *   This prevents indexing even if bots bypass `robots.txt`.

***

### 📌 Notes

*   WP Engine typically **auto-generates `robots.txt`** for staging environments.
*   For sensitive staging sites, consider **password protection** or **IP whitelisting**.

***

Would you like this formatted for internal documentation or exported as a Markdown or PDF file?



---

<!-- 📚 References (Optional) -->
## References / See Also:

- [Placeholder 1](#)
- [Placeholder 2](#)


---

## ✅ Revision History


| Version | Date       | Author           | Changes Made                                     |
| ------- | ---------- | ---------------- | ------------------------------------------------ |
| 1.00    | 2025-09-03 | Eric L. Hepperle | Initial draft created                            |
| 1.02    | 2025-09-20 | Eric L. Hepperle | Draft formatted as KB article clone of [tmpl].md |

---
