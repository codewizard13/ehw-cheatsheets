# Bash: How to Overwrite Contents of One File with Another

[🏚️](../README.md) | [How To](/how-to/index.md)

Use the **[cat](/shell/cat.md)** command to copy the contents of one file into another, (overwriting, not appending) like this:

    cat source/path/file1.ext > dest/path/file2.ext

For example, to copy the contents of the article stub into the `javascript.md` file, use this command:

    cat _tmpl/_stub-command.md > coding/javascript.md

## References

- https://www.cyberciti.biz/faq/how-to-copy-one-file-contents-to-another-file-in-linux/