Eric Hepperle, ChatGPT, 2025-09-13



### #STUB: 

Author: Eric L. Hepperle
Orig Draft Date:



## CONTENT_BELOW: ##

---




## AI_PROMPT ##

2-yr old Dell XPS 17 with Win 11: I have 2 identical LG monitor connected to my laptop and with the laptop open I have a 3-screen setup. Yesterday the setup worked find, but this morning, the right monitor powers on, but the powers off because it doesn't detect a signal. I tried it in both the USBC sockets on the right side of my laptop, but same result. I tried rebooting the laptop. I tried powering off then powering on all to no avail. I ensured Windows is up-to-date with updates - no change.

This is weird. I didn't change anything driver wise or driver configuration wise yesterday, so it doesn't make sense that the right side jacks are having any driver issues.

When I disconnected the working left monitor USBC cable from the left monitor jack, suddenly the left monitor went off (as expected) but strangely the right monitor came on. When I'm talking about of/on this is in reference to me seeing the Windows admin bar along the bottom of screen.

## AI_REPLY ##


You're right to be puzzled — this is definitely a strange behavior, especially given that nothing obvious changed between when it worked and when it didn't. But the symptoms you're describing point strongly toward a **bandwidth or power limitation** on your laptop’s USB-C/Thunderbolt ports when trying to drive **two high-resolution monitors**.

Let’s break down the key clues and then look at how to solve it.

---

## 🔍 TL;DR Diagnosis

Your Dell XPS 17 is capable of handling multiple displays, but the **available video bandwidth** on the USB-C/Thunderbolt ports is shared. What you’re likely seeing is that:

* **Both monitors work individually**, but
* **Only one works at a time**, depending on which is plugged in **first**, or which port is in use.

This strongly suggests a **DisplayPort lane allocation issue**, or **power/bandwidth sharing limitation** with your current connection setup.

---

## ✅ What’s Likely Happening

1. **Thunderbolt/USB-C ports share limited DisplayPort bandwidth**.

   * Dell XPS 17 typically uses **Intel Thunderbolt 4** with integrated graphics (or NVIDIA depending on config), and supports 2x 4K displays — but that’s **not always plug-and-play** depending on how monitors are connected.
2. Your **USB-C to DisplayPort/HDMI adapters/cables** might not be using **multi-stream transport (MST)**, and are instead competing for lanes.
3. **Plugging in one monitor disables the other**, depending on how your ports and cables are allocating DisplayPort lanes or power.
4. Windows Display Settings might not be sending signal to all displays even if they’re physically connected.

---

## 🛠️ Step-by-Step Fixes to Try

### ✅ Step 1: Check Display Settings

Go to **Display Settings** (right-click on desktop → Display Settings):

* Scroll to see if **3 displays** are detected.
* If not, click **Detect** at the bottom.
* If all are detected but one is blank, try changing the display mode (Extend, Duplicate, etc.).
* Try rearranging them.

### ✅ Step 2: Swap Cables & Ports

* Try **using the left USB-C ports** instead of right ones.
* **Try switching cables** between monitors to rule out a flaky cable.
* **Try connecting both monitors via a single USB-C hub** that supports dual displays (see below).

### ✅ Step 3: Confirm Resolution/Bandwidth

If both monitors are high-res (4K or ultrawide):

* The **Thunderbolt/USB-C port may not have enough lanes** to drive both at full res.
* Temporarily **lower the resolution** on both monitors to 1080p and see if both stay on.
* If that works → it's a **bandwidth issue**.

### ✅ Step 4: Update Graphics Drivers Manually

Even if Windows says everything is up to date, go to Dell’s support page and/or Intel/NVIDIA directly:

* [Dell Support Drivers](https://www.dell.com/support/home)
* [Intel Graphics Drivers](https://www.intel.com/content/www/us/en/download-center/home.html)
* [NVIDIA Drivers](https://www.nvidia.com/Download/index.aspx)

Install the latest drivers manually, especially for Thunderbolt and graphics.

### ✅ Step 5: Consider a Thunderbolt Dock

If you want reliable 3-screen output:

* Use a **Thunderbolt 4 dock** that supports dual monitor output (e.g., Dell WD22TB4, CalDigit TS4, Plugable TBT4).
* These split bandwidth correctly and reliably support multiple displays from one port.

---

## 🧪 Bonus Test: Boot into BIOS or Recovery Mode

Try booting into BIOS or a Windows recovery screen:

* Do **both external monitors turn on** outside of Windows?
* If so, it's likely a **Windows/driver issue**.
* If not, it's more likely a **hardware or bandwidth allocation issue**.

---

## 📌 Summary

| Symptom                                               | Likely Cause                                 | Suggested Fix                                  |
| ----------------------------------------------------- | -------------------------------------------- | ---------------------------------------------- |
| Only one monitor works at a time                      | Shared bandwidth or lane allocation conflict | Lower resolution, or use a Thunderbolt dock    |
| Right monitor only turns on after unplugging the left | USB-C DisplayPort lanes are maxed out        | Try using different ports or a dock            |
| Worked yesterday, not today                           | Dynamic lane switching or config bug         | Reset Windows display settings, update drivers |

---

If you tell me:

* The exact **model of the LG monitors**,
* Whether you’re using **USB-C → HDMI or DP**, or **direct USB-C**,
* And what ports your XPS 17 has (some have only 2 TB4 ports, some 4),

…I can give more specific cable and hardware recommendations.

Would you like to go that route?




---


## MY_REPLY ##


Strange - manually unplugging the usbc monitor cable and the usbc dock power feed into into the laptop and the anker power expand 7, then plugging back in in this order: 1) anker rear-right USBC jack, 2) LEFT LG monitor cable FRONT LEFT USBC jack, 3) docking station USBC BACK LEFT jack should have made everything work. I didn't do anything else after what I previously explained except move cords around unplugging and replugging. But it didn't actually fix anything. Until I pressed the power button on the Dell doc (which was already powered on) to power it off. Suddenly the power to the laptop was reduced so it went into screen-lock mode (weird? or normal?). Then after unlocking the screen suddenly all the monitors and displays worked as expected. This doesn't make sense!


## AI_REPLY ##

You're absolutely right — this **doesn't *seem* to make sense**, but under the hood, there's actually a pretty reasonable (if frustrating) explanation. Let's unpack what likely happened, and why your setup suddenly "fixed itself" **after power cycling the dock**, even though you didn’t explicitly change display settings or drivers.

---

## 🧠 What Likely Happened (in Plain English)

### 🧩 1. **USB-C Display and Power Negotiation is Fragile**

* USB-C and Thunderbolt rely on complex **handshakes** between:

  * Laptop
  * Dock (Anker in your case)
  * Monitors
  * Cables
* If any part of that chain doesn't fully re-negotiate power, video signal type (DisplayPort Alt Mode), or bandwidth allocation after a hot-plug or partial reset, **things break silently** — like one monitor working and the other not.

### 🔌 2. **Dock Power Cycling Forced a Full Re-Negotiation**

* By pressing the power button on the dock, you **forced the Anker dock to power cycle** — not just to shut off power, but to **restart its USB-C/Thunderbolt controller**.
* This likely:

  * Flushed any corrupted state from the dock's internal logic
  * Forced all USB-C lanes to re-negotiate with the laptop from scratch
  * Re-initialized the DisplayPort Alt Mode correctly on both ports

### 🔐 3. **Laptop Lock Triggered a Display Mode Refresh**

* When power to the dock was cut briefly, your laptop went into **screen lock** because it lost external power and/or monitors disappeared.
* After unlocking, Windows re-scanned connected displays (as it always does on wake/lock/unlock).
* Since the dock was now "clean," **Windows saw all three screens and initialized them properly**.

---

## 🔁 Why It Was Inconsistent Earlier

Before this, when you were unplugging and replugging:

* The **dock was still in a bad internal state**, or
* The laptop still had a **cached monitor config** that wasn’t refreshing fully
* Windows might have been sending signal only to 2 displays due to past state or confusion

---

## 🔒 So… Is This Normal?

### Kind of. Unfortunately.

**USB-C/Thunderbolt docks are notoriously flaky** when it comes to:

* Hot-swapping monitors
* Shared video bandwidth across multiple ports
* USB-C cables that don’t fully support DisplayPort Alt Mode or 100W power delivery
* Display handshaking during resume, sleep, or boot

This is especially true with **multi-monitor setups** and **USB-C docks from third parties** (like Anker) that have to play nicely with all the variable USB-C implementations out there.

---

## ✅ Best Practices Going Forward

Here’s how to avoid this in the future:

### 🧯 1. Power-cycle the dock if anything weird happens

Your fix was actually spot-on. If displays don’t behave:

* Power off the dock
* Unplug it from the wall **and** from the laptop
* Wait 10 seconds
* Plug it all back in

### 🔌 2. Plug in peripherals in a known-good order

Your order:

> 1. Anker rear-right USB-C jack
> 2. Left monitor → front-left USB-C
> 3. Docking station USB-C → back-left USB-C

…probably avoids bandwidth contention or misallocation of DisplayPort lanes.

### 🪛 3. Update Dock Firmware (Yes, Really)

Go to Anker’s support site and check if there’s **firmware updates** for your model. Many users report that these fix flakiness, especially with display negotiation and power issues.

### ⚙️ 4. Set Display Settings Explicitly

Go to:
**Settings → System → Display → Advanced Display Settings**

* Make sure each monitor is set to the correct resolution and refresh rate
* Set “Extend these displays” explicitly
* Arrange monitors and hit “Apply”

### 🚫 5. Avoid Daisy-Chaining USB-C Monitors If Possible

If the monitors are chained via USB-C (not DisplayPort MST), the chance of failure is higher.

---

## 🎁 Bonus Pro Tip

If this happens often, create a desktop shortcut with this command:

```bash
C:\Windows\System32\DisplaySwitch.exe /extend
```

Double-clicking it will force Windows to re-extend to all monitors. Very handy after power interruptions.

---

If you're up for it, I can help you identify whether your dock supports firmware updates, or if a better dock might suit your 3-monitor workflow more reliably.

Let me know how often this happens, and if you want a deeper hardware recommendation.
