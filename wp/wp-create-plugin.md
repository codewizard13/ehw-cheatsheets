# WordPress: How to Create a Basic Plugin

[🏚️](../README.md) | [How To](/how-to/index.md)

One key thing to understand is that any code that is in a plugin, could just as well be added to functions.php instead, and vice versa. What is a WordPress plugin anyway? Basically, it is a folder with at least one file: the main plugin file. Customarily, the main plugin file name is the same as the plugin folder name. Often the company, brand, or author name (or abbreviation, or acronyn) is prepended onto both.

**Example**:

If we are writing a plugin to manage the admin bar, since my name is Eric L. Hepperle, I might create this plugin file structure:

    elh-manage-adminbar/
    └── elh-manage-adminbar.php

As you can see, I have used the initials of my name to essentially **[namespace](/coding/namespaces.md)** this plugin. It also helps you identify your plugin folder amongst all others in the **wp-plugins/** folder.

The only other requirement to create a plugin is to add a file header comment like this as the very first thing (no whitespace must precede it, even):

    <?php
    /*
    Plugin Name: [Should be very similar to the plugin folder/file name]
    Description: [Describe what your plugin does. Should be no more than 2-3
     sentences because will be displayed in plugins list]
    Author: [Your First and Last Name]
    */

So, for the manage admin bar plugin, it might look something like this:

    /*
    Plugin Name: Eric's Manage Admin Bar Plugin
    Description: A custom plugin to manage admin bars.
    Author: Eric Hepperle
    */

And that's it! Now you have a plugin! (Hostinger has a great **[article](https://www.hostinger.com/tutorials/how-to-create-wordpress-plugin)** that gives several custom plugin examples.)

But, you may wonder "how does WordPress know about my plugin?". The way you tell your website about your plugin is to put the plugin folder in the wp-content/plugins/ folder. But, you still have to click "Activate" on the Plugins page or nothing will happen.

As soon as you type the plugin file header comment, WordPress knows to treat that folder as a plugin. In fact, if you are troubleshooting a brand new plugin that should be working, check that your file header comment is correctly formatted and that there are no blank lines or whitespace before the comment.



## References

- https://kinsta.com/knowledgebase/wordpress-plugin/
- https://www.hostinger.com/tutorials/how-to-create-wordpress-plugin