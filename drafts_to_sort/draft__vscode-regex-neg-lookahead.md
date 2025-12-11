<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# VSCODE REGEX:  I want a regex to grab the first 6 "=" signs at the start of any line but only where they are not followed by an equals sign as the next character. I tried to do a positive/negative(?) look ahead(?) but its not working:

^======(^?=)

Use a start‑of‑line anchor, six literal equals, then a negative lookahead that asserts the next char is not another equals.

In VS Code, this pattern will do what you want:

```regex
^======(?!\=)
```


## Explanation

- `^` matches the start of the line.
- `======` matches exactly six `=` characters.
- `(?!\=)` is a negative lookahead that requires the next character not to be `=`; this prevents matching lines that have 7 or more `=` in a row.

If you also want to ensure there is at least some non‑`=` character afterwards (and not end‑of‑line), you can use:

```regex
^======(?!\=).
```

<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://stackoverflow.com/questions/49287580/how-to-match-the-start-of-a-line-using-a-visual-studio-code-regex

[^2]: https://www.rexegg.com/regex-lookarounds.php

[^3]: https://www.reddit.com/r/vscode/comments/1b7w81d/regular_expression_not_working_as_expected_in/

[^4]: https://stackoverflow.com/questions/5516119/regular-expression-to-match-characters-at-beginning-of-line-only

[^5]: https://community.notepad-plus-plus.org/topic/18011/regex-start-of-line-doesn-t-work-as-expected

[^6]: https://forum.freecodecamp.org/t/positive-and-negative-lookahead-regex/196158

[^7]: https://github.com/microsoft/vscode/issues/11572

[^8]: https://developercommunity.visualstudio.com/t/quick-replace-with-regex-with-lookahead-and-lookbe/536091

[^9]: https://www.reddit.com/r/vscode/comments/191492x/why_doesnt_this_regex_work_in_vs_code/

[^10]: https://deepaksood619.github.io/languages/others/regular-expressions-regex/



> NOTE: this was the actual regex that worked `^(======)(?!=)` replace with: `====== `