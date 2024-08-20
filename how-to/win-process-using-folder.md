# Windows: Which Process is Using A File or Folder?

[🏚️](../README.md) | [How To](/how-to/index.md)


When you try to delete a folder (or file) and get an error that says,

```
The action can't be completed because the folder or a file in it is open in another program
```

That can be very frustrating, because it doesn't tell you **_which_** program is holding the file/folder hostage. This article will explain how to find out what program is the culprit and how to remove it.

## Usual Suspects

If you are deleting something in a folder that is automatically backed up to the cloud, whatever the cloud backup application is may be the culprit. Some examples:

- Dropbox
- Google Cloud

## Resource Monitor

For Windows 7 and above, you can use the built-in Resource Monitor.

1. Open Resource Monitor, which can be found

   - By searching for resmon.exe in the start menu, or
   - As a button on the Performance tab in your Task Manager

2. From CPU tab, use the search field in the Associated Handles section to search for the name of your folder or file.

3. When you've found the handle, you can identify the process by looking at the Image and/or PID column. 
   
4. You can then close the application if you are able to do that, or just right-click the row and you'll get the option of killing the process (End Process) right there.

## References

- https://www.dariawan.com/tutorials/windows/how-know-which-process-using-file-or-folder-windows/