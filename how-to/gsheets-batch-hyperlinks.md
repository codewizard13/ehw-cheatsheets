# Google Sheets: How to Batch Convert URLs to Hyperlinks

####  [[This is a stub]]

[🏚️](../README.md) | [How To](/how-to/index.md)

**Given**:
- a Google Sheet has with two tabs, "MAIN" and "URLS"
- A list of text URLS are located in the range of column D on the URLS tab
- The first URL starts at row 4

To display the first 32 URLs as clickable hyperlinks starting in the first cell of the upper left corner of MAIN tab, put the following formula in cell A:1 of MAIN:

    =ARRAYFORMULA(HYPERLINK('URLS'!D4:D35))

## References

- https://support.google.com/docs/thread/35540244/using-arrayformula-with-hyperlinks?hl=en
- https://webapps.stackexchange.com/questions/97285/how-to-convert-non-clickable-links-into-clickable-in-google-sheets