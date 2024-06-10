# Regex: Perl / PCRE

####  [[This is a stub]]

[🏚️](../README.md) | [How To](/how-to/index.md)

Here are some regular expressions in the Perl / PCRE (Perl Compatible Regular Expression) format.

---

Perl regular expressions (regex) are highly versatile and come with a rich set of functions that can be used for various text processing tasks. Here are some common Perl regex functions:

1. **m// (Match Operator)**: Used to match a string against a regex pattern.
   ```perl
   if ($string =~ m/regex/) {
       print "Match found!";
   }
   ```

2. **s/// (Substitution Operator)**: Used to search for a pattern and replace it with another string.
   ```perl
   $string =~ s/old/new/;
   ```

3. **tr/// (Transliteration Operator)**: Used to replace characters in a string based on a search and replace list.
   ```perl
   $string =~ tr/a-z/A-Z/;  # Converts lowercase letters to uppercase
   ```

4. **qr// (Quote Regular Expression Operator)**: Pre-compiles a regex pattern for later use.
   ```perl
   my $pattern = qr/regex/;
   if ($string =~ $pattern) {
       print "Match found!";
   }
   ```

5. **split**: Splits a string into a list based on a regex pattern.
   ```perl
   my @fields = split /separator/, $string;
   ```

6. **m//g (Global Match)**: Finds all matches in a string.
   ```perl
   while ($string =~ m/regex/g) {
       print "Match found!";
   }
   ```

7. **m//i (Case-Insensitive Match)**: Matches a pattern case-insensitively.
   ```perl
   if ($string =~ m/regex/i) {
       print "Match found!";
   }
   ```

8. **m//s (Single-Line Mode)**: Allows the dot (.) to match newline characters.
   ```perl
   if ($string =~ m/regex/s) {
       print "Match found!";
   }
   ```

9. **m//x (Extended Mode)**: Allows for whitespace and comments in the regex pattern for better readability.
   ```perl
   if ($string =~ m/
       regex  # This is a comment
       /x) {
       print "Match found!";
   }
   ```

These functions and operators make Perl's regex capabilities extensive and powerful, suitable for a wide range of text processing tasks.


---

## References

- https://chatgpt.com/c/f4ef75f2-fbb2-47e0-b1af-730981608676