# Regex: Useful Examples


[🏚️](../README.md) | [How To](/how-to/index.md)

This is a list of examples of different regexes (**regular expressions**) I find useful.

---

## Notepad++

REPLACE tab dialog settings enabled:

- Wraparound
- Regular expression

### Convert WordPress "plugins to be updated" list to a minimized bullet list

**Search:**

    ^(.*?)\r\nYou have version (.*?) installed. Update to (.*?). View (.*?)\.\r\nCompatibility with (.*)

**Replace:**

    - \1: \2 -> \3


Follow that up with,

    ^select.*$

And replace that with nothing. Then do the same for this pattern:

    ^Compatibility.*$


**Example Output**

If you start with something like this (after copying from WordPress admin Plugins page to NPP),

    Select Elementor	

    Elementor
    You have version 3.21.5 installed. Update to 3.21.6. View version 3.21.6 details.
    Compatibility with WordPress 6.5.3: 100% (according to its author)

    Select Elementor Pro	

    Elementor Pro
    You have version 3.21.2 installed. Update to 3.21.3. View version 3.21.3 details.
    Compatibility with WordPress 6.5.3: 100% (according to its author)

    Select Unlimited Elements for Elementor	

    Unlimited Elements for Elementor
    You have version 1.5.106 installed. Update to 1.5.107. View version 1.5.107 details.
    Compatibility with WordPress 6.5.3: 100% (according to its author)

Then run **Edit > Line Operations > Remove Duplicate Lines**

The result will be something like this:

    Elementor: 3.21.5 -> 3.21.6
    Elementor Pro: 3.21.2 -> 3.21.3
    Unlimited Elements for Elementor: 1.5.106 -> 1.5.107


### Find lines starting with -, :, or \#

This is a useful regex to use in a markdown document when you want to find bullet list items, headings, and lines starting with colon (`:`), double-colon (`::`), etc. It also excludes blank lines. It is helpful for listing a quick summary of tasks in my daily work logs.

In Notepad++ make sure to enable the "Find all in current document" option.

**Search:**

    ^[\-:#]

---

## VSCode

## Bulk Rename Utility


---

## References

- https://askubuntu.com/questions/842102/how-to-insert-embedded-youtube-player-into-libreoffice-impress
- https://forum.openoffice.org/en/forum/viewtopic.php?t=7694
- https://ask.libreoffice.org/t/playing-embedded-videos/98362
- https://www.youtube.com/watch?v=xBGYEu2pHkY&ab_channel=LibreOffice-TheDocumentFoundation


## INDEX

*Migrate link to this doc to regex/index.md.*

Regex: For Use with Chrome OneTab Extension