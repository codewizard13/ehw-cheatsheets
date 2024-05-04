# Bash: How to Overwrite Contents of One File with Another

[HOME](../README.md) | [SUBDIR_NAME](/sub-dir-path/index.md)

Use the **[cat](/shell/cat.md)** command to copy the contents of one file into another, (overwriting, not appending) like this:

    cat source/path/file1.ext > dest/path/file2.ext

For example, to copy the contents of the article stub into the `javascript.md` file, use this command:

    cat _tmpl/_stub-command.md > coding/javascript.md 