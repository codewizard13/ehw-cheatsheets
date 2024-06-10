# Regular Expressions (Regex)

####  [[This is a stub]]

[🏚️](../README.md) | [Coding](/coding/index.md)

A **regular expression** (**regex** or **regexp**) is a special text string used to describe a search pattern, akin to enhanced wildcards. Common in programming and text processing, regex allows for searching, matching, and manipulating text with precision. For example, in Microsoft windows Command (CMD) the `dir` command followed by a wildcard string like this `*.pdf` will find all files that end in with the `pdf` extension. However, this is very limited, but with the proper regex like `^202{\d}_.*tax.*_\.pdf$`. While the regex has more parts it is also more powerful. The previous regex can be translated like this:

Find all files that,

- Start with 2020, 2021, 2022 ... 2029
- Contain the word tax somewhere after that
- Ends with `.pdf` (the $ prevents matching `.pdf.lnk` or `.pdfff`)

In **JavaScript**, regular expressions are objects used with various methods such as exec(), test(), match(), matchAll(), replace(), replaceAll(), search(), and split(). These patterns facilitate complex text operations, including validation and replacement, making them powerful tools for developers. However, despite their utility, many people find regular expressions challenging to master.

**Perl Compatible Regular Expressions** (**PCRE**) is a library that implements regex pattern matching using syntax and semantics similar to Perl's. PCRE is widely used in applications that require advanced text processing capabilities, such as Apache, PHP, and many programming languages. It supports a rich set of features including lookaheads, lookbehinds, and non-capturing groups, making it a versatile and powerful tool for developers working with text.

## Related Articles

[Regex: For Use with Chrome OneTab Extension](/how-to/regex-onetab.md)
[Regex: Perl / PCRE](/how-to/regex-perl-pcre.md)


## References

- https://chatgpt.com/c/f4ef75f2-fbb2-47e0-b1af-730981608676
- https://regex101.com/r/NrSBDw/1
- https://www.youtube.com/watch?v=rhzKDrUiJVk
- https://coderpad.io/blog/development/the-complete-guide-to-regular-expressions-regex/
- https://www.regular-expressions.info/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
- https://chatgpt.com/c/f4ef75f2-fbb2-47e0-b1af-730981608676
- 
