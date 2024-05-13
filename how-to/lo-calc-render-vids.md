# LibreOffice Calc: How to Render Video Embeds in Cells

####  [[This is a stub]]

[🏚️](../README.md) | [How To](/how-to/index.md)


## AI Results: ChatGPT

- **AI Source:** ChatGPT
- **Prompt:** how to render youtube embeds in libreoffice calc
- **URL:** https://chatgpt.com/c/0b8f9b41-d3cf-4d38-a441-8b1d953de8ef

### Result:


To embed YouTube videos in [LibreOffice Calc](/productivity/lo-calc.md), you can use the `HYPERLINK` function along with some HTML code. Here are the steps to follow:

1. **Get the YouTube Video URL:**

First, you need the URL of the YouTube video you want to embed. This will typically look like `https://www.youtube.com/watch?v=VIDEO_ID`, where `VIDEO_ID` is the unique identifier of the video.

2. **Construct the Embed Code:**

You'll construct an HTML `iframe` embed code for the video. LibreOffice Calc allows HTML content in cells.

Use the following format to embed a YouTube video:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

Replace `VIDEO_ID` with the actual ID of your YouTube video.

3. **Insert the Embed Code in LibreOffice Calc:**

Open your Calc spreadsheet and choose the cell where you want the video to appear.

4. **Enter the HYPERLINK Function:**

In the cell, enter the `HYPERLINK` function along with your HTML embed code. Use a formula like this:

```excel
=HYPERLINK("YOUR_HTML_CODE", "Click to Play Video")
```

Replace `YOUR_HTML_CODE` with the HTML `iframe` embed code you constructed earlier.

For example:

```excel
=HYPERLINK("<iframe width='560' height='315' src='https://www.youtube.com/embed/VIDEO_ID' frameborder='0' allowfullscreen></iframe>", "Click to Play Video")
```

5. **Display the Video:**

After entering the formula, press `Enter`. The text "Click to Play Video" (or whatever text you specified) will appear in the cell as a clickable link.

6. **Click to Play the Video:**

When you click the link in the cell, LibreOffice Calc will render the HTML content, which includes the embedded YouTube video. The video should then be playable directly within the spreadsheet.

Remember, embedding YouTube videos in this way may require an internet connection to load the video content. Also, be cautious when using embedded content in spreadsheets, especially if you plan to share or distribute them, as it may affect file size and performance.

---


## References

- https://askubuntu.com/questions/842102/how-to-insert-embedded-youtube-player-into-libreoffice-impress
- https://forum.openoffice.org/en/forum/viewtopic.php?t=7694
- https://ask.libreoffice.org/t/playing-embedded-videos/98362
- https://www.youtube.com/watch?v=xBGYEu2pHkY&ab_channel=LibreOffice-TheDocumentFoundation