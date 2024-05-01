# WordPress
WordPress is a free, open-source content management system (CMS) that allows users to build websites and blogs. It's a popular choice for people without coding experience. WordPress has evolved to support a variety of websites, including professional publications, e-commerce platforms, mailing lists, forums, media galleries, membership sites, learning management systems, and online stores.

This is a TEMPLATE that will likely be adjusted as new ideas are incorporated. Use this as starter file for each new term

## Usage

### Unix/Linux

```bash
awk '/pattern/ {print "$1"}'    # standard Unix shells
```

### DOS/Win

```bash
awk '/pattern/ {print "$1"}'    # compiled with DJGPP, Cygwin
awk "/pattern/ {print \"$1\"}"  # GnuWin32, UnxUtils, Mingw
```

Note that the DJGPP compilation (for DOS or Windows-32) permits an awk
script to follow Unix quoting syntax `'/like/ {"this"}'`. HOWEVER, if the
command interpreter is `CMD.EXE` or `COMMAND.COM`, single quotes will not
protect the redirection arrows `(<, >)` nor do they protect pipes `(|)`.
These are special symbols which require "double quotes" to protect them
from interpretation as operating system directives. If the command
interpreter is bash, ksh, zsh or another Unix shell, then single and double
quotes will follow the standard Unix usage.

Users of MS-DOS or Microsoft Windows must remember that the percent
sign `(%)` is used to indicate environment variables, so this symbol must
be doubled `(%%)` to yield a single percent sign visible to awk.

To conserve space, use `'1'` instead of `'{print}'` to print each line.
Either one will work.

## Handy one-line Awk scripts

```
some scripts
```

## Credits


- NOTE: This format is based on [Christian Lempa's Cheatsheets](https://github.com/ChristianLempa/cheat-sheets/blob/main/linux/awk.md).