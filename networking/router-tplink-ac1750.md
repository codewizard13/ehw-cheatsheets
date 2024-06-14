# TP-Link AC1750 Wifi Router

####  [[This is a stub]]

[🏚️](../README.md) | [How To](/how-to/index.md)

These are my notes dealing with the **TP-Link Archer AC1750** Dual Band Wireless Gigabit Router.

---

## How to Factory Reset?

For the Archer TP-Link AC1750 router all you need to do to factory reset is ***press and hold the button marked "WPS/Reset" on the back for 6 to 10 seconds*** (on some models the button is recessed, so use a paperclip to depress). Release the reset button and wait for the device to reboot. If you can see all the lights flashing, then go off and some lights go back on slowly during the process, that means the device has been reset successfully.

After successfully resetting the router, the default SSIDs (listed on the underside label) should be visible in the available wifi networks list. On Windows 10 it looks like this:

![Default SSID shows up in available networks after reset](/_pix/screens/screen--06--wifi--tplink-ac1750.jpg)

Click to connect to the network that starts with "TP-LINK_..." (there may be two - ignore the 5G on for now). Don't worry if it says "No Internet, secured".

Now, you should be able to navigate to [tplinkwifi.net](tplinkwifi.net) (or you may have better luck with the IP [http://192.168.0.1](http://192.168.0.1)) and see a login screen like this:

![TP-Link router login screen](/_pix/screens/screen--07--wifi--tplink-ac1750.jpg)

The **default user name and password** is: **admin**. Use that to login and now you can manage your router settings.

![Router settings page after login](/_pix/screens/screen--08--wifi--tplink-ac1750.jpg)

---

## How to Configure as Extender/Repeater/Bridge?

1. Navigate to : [tplinkwifi.net](tplinkwifi.net) or [http://192.168.0.1](http://192.168.0.1)

1. Change your password to prevent hackers from accessing your router. Navigate to **System Tools > Password**:

![The password management page](/_pix/screens/screen--09--wifi--tplink-ac1750.jpg)

After successfully changinng your user name and password, go ahead and login and you should see the status page.

![Status page after change password](/_pix/screens/screen--10--wifi--tplink-ac1750.jpg)

!!! #GOTCHA: After changing SSID name, network asks for a password to connect. This is NOT the same password you changed in `System > Password`. Instead, the `Network Key` Windows asks for will be listed on your router as `Wireless Password/PIN` and will likely be a string of numbers.

You will see the wifi connection dialog says something like "Verifying and connecting"; That is a good sign.

![Windows 10 wifi connection says 'Verifying and connecting'](/_pix/screens/screen--16--wifi--tplink-ac1750.jpg)

When you see "No internet, secured" under your new SSID name, you have successfully connected to the router

!['No internet, Secured' means you are connected to the router](/_pix/screens/screen--17--wifi--tplink-ac1750.jpg)


### Disable DHCP

Navigate to **DHCP > DHCP Settings** in the admin sidebar and set to "Disable". Follow the prompts to reboot the router.

![DHCP Disabled](/_pix/screens/screen--18--wifi--tplink-ac1750.jpg)

### Connect to the Main Router

!!! #NOTE: Here I'm showing the settings for the **Wireless 2.4GHz** menu, but you'll need to go through and do the same process for the 5GHz network if you want that to be bridged also.

!!! #NOTE: I changed the SSID names and added `Bridge` to the end

Make sure the "Enable WDS Bridging" checkbox is checked. Then click the "Survey" or "Scan" button to detect available networks. 

![Table of available networks](/_pix/screens/screen--19--wifi--tplink-ac1750.jpg)

Click "Connect" in the table of available networks next to your main network. You will quickly be returned back to the previous "Wireless Settings" page. If the Key type did not auto-fill, manually select it (WPA2-PSK is a pretty safe choice with routers after 2016)


In my case, notice the key type auto-selects as
`WPA-PSK/WPA2-PSK`

![Wireless Settings 2.4GHz after selecting SSID to be bridged](/_pix/screens/screen--20--wifi--tplink-ac1750.jpg)

Enter the password for the main router you are trying to extend.

!!! #GOTCHA: After entering the password you may see an alert popup that says `Channel can not be auto while WDS Bridging enabled, do you want to change you channel to the Bridged AP's channel?`. Click OK and relogin to the AC1750 admin dashboard. The router may also require a reboot.

![The channel for the bridge has to be the same as for the main router](/_pix/screens/screen--21--wifi--tplink-ac1750.jpg)

!!! GOTCHA: If you plan to extend the 5GHz network also, you may want to set that up before rebooting the router. Once you reboot, you will not be in bridged mode and will no longer have access to the settings admin dialogue.


---

///////////////////// TO-DO  ///////////////////////












---

## References

- https://www.tp-link.com/us/support/faq/140/
