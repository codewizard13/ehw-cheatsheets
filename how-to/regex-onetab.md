# Regex: For Use with Chrome OneTab Extension

####  [[This is a stub]]

[🏚️](../README.md) | [How To](/how-to/index.md)

Here are some regular expressions related to the OneTab Chrome Plugin.

---

## Convert OneTab Link Exports into Markdown Link List

**Search:**

    ^([^\|]+) \| (.*)$

**Replace:**

    - [$2]($1)

**Example Input:**

https://www.youtube.com/watch?v=rhzKDrUiJVk | (171) Learn Regular Expressions In 20 Minutes - YouTube
https://coderpad.io/blog/development/the-complete-guide-to-regular-expressions-regex/ | The Complete Guide to Regular Expressions (Regex) - CoderPad
https://www.regular-expressions.info/ | Regular-Expressions.info - Regex Tutorial, Examples and Reference - Regexp Patterns
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions | Regular expressions - JavaScript | MDN
https://chatgpt.com/c/f4ef75f2-fbb2-47e0-b1af-730981608676 | ChatGPT
https://regex101.com/r/NrSBDw/1 | regex101: build, test, and debug regex

**Example Output:**

- [(171) Learn Regular Expressions In 20 Minutes - YouTube](https://www.youtube.com/watch?v=rhzKDrUiJVk)
- [The Complete Guide to Regular Expressions (Regex) - CoderPad](https://coderpad.io/blog/development/the-complete-guide-to-regular-expressions-regex/)
- [Regular-Expressions.info - Regex Tutorial, Examples and Reference - Regexp Patterns](https://www.regular-expressions.info/)
- [Regular expressions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- [ChatGPT](https://chatgpt.com/c/f4ef75f2-fbb2-47e0-b1af-730981608676)
- [regex101: build, test, and debug regex](https://regex101.com/r/NrSBDw/1)


---

## References

- https://regex101.com/r/NrSBDw/1