# Google Chrome: How to Migrate and Sync Profiles

####  [[This is a stub]]

[🏚️](../README.md) | [How To](/how-to/index.md)


## ChatGPT

**Prompt:**

> Explain how to transfer a chrome profile from one win 10 pc to another, without using any kind of "sync" feature. You will create or import the profile as a starting point on the new computer, but it should NOT be connected to the old computer, or the old profile. Explain in a naarrative laymans terms ELI5 as much as possible, but give all the details that are necessary to do it right. Give a step by step list preceded by a plain-english summary

### Summary

Transferring a Chrome profile from one Windows 10 PC to another without using any sync features involves copying specific folders from your old PC to your new one. This process includes backing up your Chrome data, transferring it to the new PC, and then setting it up so Chrome recognizes and uses this data. Follow the detailed steps below for a successful transfer.

### Step-by-Step Guide

#### 1. Prepare for Transfer
- **Ensure Chrome is Closed**: Make sure Chrome is completely closed on both PCs to avoid any data corruption.

#### 2. Locate the Chrome Profile on the Old PC
- **Open File Explorer**: Press `Win + E` to open File Explorer.
- **Navigate to Profile Folder**: Go to `C:\Users\<YourUsername>\AppData\Local\Google\Chrome\User Data`.
  - Replace `<YourUsername>` with your actual Windows username.
- **Identify Your Profile**: The default profile is named `Default`. If you have multiple profiles, you will see additional folders like `Profile 1`, `Profile 2`, etc.

#### 3. Copy the Profile Data
- **Select the Folder**: Right-click the `Default` folder (or the appropriate profile folder if you have multiple).
- **Copy the Folder**: Select `Copy` from the context menu.

#### 4. Transfer the Data to the New PC
- **Use a USB Drive or Network**: Transfer the copied folder using a USB drive, external hard drive, or a network share.
  - **For USB Drive**: Plug in the USB drive, paste the copied folder onto it, and safely eject it.
  - **For Network**: Share the folder over the network and copy it to the new PC.

#### 5. Place the Profile on the New PC
- **Open File Explorer**: On the new PC, press `Win + E`.
- **Navigate to Profile Folder**: Go to `C:\Users\<YourUsername>\AppData\Local\Google\Chrome\User Data`.
  - Again, replace `<YourUsername>` with your actual Windows username.
- **Paste the Folder**: Right-click inside the `User Data` folder and select `Paste`. If prompted to replace files, choose `Yes`.

#### 6. Open Chrome and Check the Profile
- **Launch Chrome**: Open Google Chrome on the new PC.
- **Verify Data**: Ensure that all your bookmarks, extensions, and settings are intact and appear as they did on the old PC.

### Detailed Steps

1. **Close Chrome on Both PCs**
   - Ensure that Chrome is not running to avoid any potential data corruption. Double-check the taskbar and system tray to confirm it's closed.

2. **Locate the Chrome Profile Folder on the Old PC**
   - Open File Explorer (`Win + E`).
   - Navigate to `C:\Users\<YourUsername>\AppData\Local\Google\Chrome\User Data`.
   - Find the `Default` folder (or `Profile 1`, `Profile 2`, etc., if you have multiple profiles).

3. **Copy the Chrome Profile Data**
   - Right-click the `Default` folder.
   - Select `Copy`.

4. **Transfer the Data**
   - Insert a USB drive into the old PC.
   - Paste the copied `Default` folder onto the USB drive.
   - Safely eject the USB drive.
   - Insert the USB drive into the new PC.
   - Copy the `Default` folder from the USB drive.

5. **Place the Profile on the New PC**
   - On the new PC, open File Explorer (`Win + E`).
   - Navigate to `C:\Users\<YourUsername>\AppData\Local\Google\Chrome\User Data`.
   - Paste the copied `Default` folder into the `User Data` directory.
   - If prompted to replace files, confirm by clicking `Yes`.

6. **Verify the Transfer**
   - Open Google Chrome on the new PC.
   - Check to see if your bookmarks, extensions, history, and settings are present and correct.

By following these steps, you can manually transfer your Chrome profile from one Windows 10 PC to another without using any sync features, ensuring all your data is intact and functional on the new machine.

---

!!! #GOTCHA: That didn't work, so I asked ChatGPT for further troubleshooting steps and isight:

### AGGREGATED ANSWER

To safely rename a Chrome profile folder from "profile 7" to "profile_work", follow these steps to ensure a smooth transition without data loss. This guide covers closing Chrome, renaming the folder, editing necessary configuration files, and verifying the changes.

### Steps to Rename Chrome Profile Folder

#### 1. Ensure Chrome is Completely Closed

Before making any changes, you need to ensure that Chrome is not running in the background.

- **Windows**:
  1. Close all open Chrome windows and tabs.
  2. Press `Ctrl + Shift + Esc` to open Task Manager.
  3. Click on the "Processes" tab.
  4. Look for any processes named "Google Chrome" or "chrome.exe".
  5. Right-click on these processes and select "End Task" to close them.

- **macOS**:
  1. Close all open Chrome windows and tabs.
  2. Open Spotlight (Command + Space) and type "Activity Monitor", then press Enter.
  3. In Activity Monitor, go to the "CPU" tab and type "Google Chrome" in the search bar.
  4. Select any Chrome processes and click the "X" button to force quit them.

- **Linux**:
  1. Close all open Chrome windows and tabs.
  2. Open System Monitor from the application menu or use terminal commands:
     - Open a terminal and type: `ps aux | grep chrome`
     - Note the Process ID (PID) and kill the processes using: `kill <PID>` or `pkill chrome`.

#### 2. Locate and Rename the Profile Folder

1. Navigate to the Chrome User Data directory:
   - **Windows**: `C:\Users\<YourUsername>\AppData\Local\Google\Chrome\User Data`
   - **macOS**: `~/Library/Application Support/Google/Chrome`
   - **Linux**: `~/.config/google-chrome`

2. Find the folder named "Profile 7".
3. Right-click the folder and select "Rename". Change the name to "profile_work".

#### 3. Edit the Local State File

1. Open the "Local State" file located in the same "User Data" directory with a text editor. On Windows, run the editor as an administrator if needed.
2. Locate the profile references. You need to update the profile paths and names:
   
   **Before**:
   ```json
   "profile": {
       "info_cache": {
           "Profile 7": {
               "name": "Work Profile",
               "path": "Profile 7",
               "is_using_default_name": false
           },
           ...
       },
       ...
   }
   ```

   **After**:
   ```json
   "profile": {
       "info_cache": {
           "profile_work": {
               "name": "Work Profile",
               "path": "profile_work",
               "is_using_default_name": false
           },
           ...
       },
       ...
   }
   ```

3. Ensure the JSON structure is maintained. Use an online JSON validator to check the structure if needed.
4. Save the file.

#### 4. Restart Chrome and Verify

1. Launch Chrome.
2. Verify that the profile now appears correctly with the new name.
3. Check that all settings, bookmarks, extensions, and other data are intact.

#### Additional Checks

- **Profile Management**: Open Chrome and go to `chrome://settings/` to ensure that the profile appears correctly under "You and Google" or "Profile" settings.
- **Profile Icon and Name**: You might need to reselect the profile icon and name through Chrome’s profile management interface if it doesn't reflect changes immediately.

By carefully following these steps and ensuring consistency in naming, Chrome should recognize and use the renamed profile without issues. Always back up your data before making such changes to avoid potential data loss.


---

!!! #GOTCHA: FIX: you need to manually import the extensions via the load unpacked feature. details below

...

## References

- https://www.reddit.com/r/chrome/comments/19cjb8x/how_to_really_move_chrome_profiles_to_new_computer/?sort=new
- 