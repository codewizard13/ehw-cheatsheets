# Visual Studio Code

####  [[This is a stub]]

[🏚️](../README.md) | [Coding](/coding/index.md)

**Visual Studio Code** (VSCode) is a ... description of this concept. Other technologies that this description references can link to the appropriate cheatsheet for that **[other tech](/_stub_01.md)**.

This is a TEMPLATE STUB to be used for commands and tools (e.g., awk, perl, pear, vim, etc. ) Use this as starter file for each new term.

## Keyboard Shortcuts

- ``CTRL +` ``: Switch between terminal and editor

## Gotchas and Pitfalls

### Escaping

In VSCODE markdown, to markup inline code with backticks (`) you must escape the outer backticks AND add an extra space anywhere a literal backtick butts against the grouping backticks. For instance, if you wanted something like this,

    CTRL + `

to achieve that as inline code, you might think you could type

    `CTRL + \`` OR ``CTRL + \```

But, neither of those works. They won't give you the gray background and the code remains non-highlighted. Unfortunately, if the starting backticks group doesn't match (in number) the ending one, then you need to add that space. Or, put differently, **if a literal backtick is ever the last character in an inline code highlight, you must put a space after it.**

## References

- https://superuser.com/questions/1270103/how-to-switch-the-cursor-between-terminal-and-code-in-vscode
- https://meta.stackexchange.com/questions/82718/how-do-i-escape-a-backtick-within-in-line-code-in-markdown