# Bash: How to Search and Replace Text in File

[HOME](../README.md) | [How To](/how-to/index.md)

Use the **[sed](/shell/sed.md)** command to search and replace text in a file like this:

    sed -i 's/old-text/new-text/g' input.txt

The `g` (global) flag means it will find every instance in the file and replace it. But, if we only want it to replace the very first instance then we can leave the g off.

For example, to search for the first instance of "HOW TO" and replace with "Coding" in coding/index.md, use this command:

    sed -i 's/HOW TO/Coding/' coding/index.md

## References

- https://www.cyberciti.biz/faq/how-to-use-sed-to-find-and-replace-text-in-files-in-linux-unix-shell/