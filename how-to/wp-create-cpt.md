# WordPress: How to Create a Custom Post type

[🏚️](../README.md) | [How To](/how-to/index.md)

Custom post types (CPTs) is a concept that many new to WordPress development may find intimidating. If you ever look at the code for a CPT, or try to follow tutorials from the talented **[Alecaddd](https://www.youtube.com/watch?v=XTkbDBhXBQI&list=PLriKzYyLb28kR_CPMz8uierDWC2y3znI2&index=5&ab_channel=AlessandroCastellani)**, you may find yourself asking things like:

- What does it mean to "register" a post type?
- What is the difference between "register" and "create"?
- Why is there 30+ individual properties in a CPT and what are they for?
- When do I use rewrite - what am I rewriting?
- Should I use hierarchical or not?
- How do I associate a custom taxonomy with a CPT?

But, maybe you don't even know what a custom post type is or why you would want one.

## What is a custom post type?

WordPress core includes two main "post types": posts and pages. The main difference is that pages are for things that rarely change, like a contact page or an "About Us" page. Pages are also **hierarchical** (*out of scope for this post*), whereas posts are not.

Posts, on the other hand, are what a basically blog page is. But, there's only so much you can do with blog post.

What if your website is a blog, and you want each blog to link out to one or more recipe posts on your site? You could create a custom post type of "Recipe". Creating the post type means to write the code. Registering the post type means notifying WordPress that your new code exists and should be treated as a custom post type. Now, each CPT can have a different template assigned. That means that a recipe post could even be displayed within a blog post by using the `<iframe>` tag.

Also, each custom post type can have its own archive page template layout and styling. That means that 

## Creating a custom post type

In many "how-to" articles about creating custom post types (CPTs), the authors seem to assume that the reader has been making CPTs for years and so leaves out some -- I think -- important information, namely "Where do you put the code"?

They will usually say something like "you can add it to a plugin or put it in your functions.php", which is technically true. However, it is an incomplete instruction for a beginner to WordPress custom post types.

**What is a WordPress plugin anyway?** Basically, it is a folder with at least one file: the main plugin file. The main plugin file must have a specifically formatted file header comment.

So, now that we know what a plugin is, we can create a custom post type with its own plugin.

## Creating the Custom Post Type Plugin

@@@ ... TO-DO




---





## References

- https://www.youtube.com/watch?v=XTkbDBhXBQI&list=PLriKzYyLb28kR_CPMz8uierDWC2y3znI2&index=5&ab_channel=AlessandroCastellani
- 