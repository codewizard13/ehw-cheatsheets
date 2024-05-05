# AIX Helpdesk - Rochester, MN

[🏚️](../README.md) | [RCHAIX](/rchaix/index.md)

- These are Eric Hepperle's notes from his time employed as an AIX Helpdesk Representative at IBM, Rochester, MN from 2000-2002.

---

The RCHAIX Helpdesk is ...

## Common Helpdesk Procedures

COMMON PROCEDURES FOR AIX HELPDESK FAQ
(Created by Eric Hepperle, 11/27/00)


### When I created my user account last week, (or some other time in the past), my password worked fine.  Now it does not work at all.

### When I created my WINCENTER account my password worked fine, but now it does not.  My AFS id works but I cannot get into Wincenter.

### My AFS user id doesn’t work.

### I get a message about a ‘KERNEL PANIC’.

### How do I make myself the owner of my AFS user id?

### How do I kill a process?

### How do I check my quota?

### How do I get my quota increased?

### Can you reset my AFS user id?

### Can you reset my AFS user id and send the confirmation to someone else?

### How can I find location info about a given workstation?

**Using the following syntax:**

	grep wsname /etc/hosts

You can get all the following information:

- IP Address
- Hostname (full)
- Owner’s User ID
- Office #

### Where can I find a backup copy of my Lotus Notes id file?

### How do I give someone permission to view my files/directories?

The following command will let you set permissions for a user.  Owner of file or dir must send us a request before we will change permissions.

	fs sa [userid] [rlidwka]

Thus if you want to give user “superman2k” all permission to everything in a directory, cd to that directory and type:

	fs sa superman2k all

If you want to give someone permissions on files that you do not own, you should ask the owner of those files or directories first to make sure it is okay with them.  If you do not know who the owner is you can use the following command sequence to find that out:

### To find out who has permission to the current directory:

	fs la

If superman2k needs to access the file /afs/rchland.ibm.com/usr8/techgrp3/villains.1950.txt, he first needs to find out who owns the file villains.1950.txt.  He can do this one of two ways ...

### How do I keep unauthorized personel from accessing my files?

To do this, use the following command sequence:

	fs sa userid none

Bada-bing, bada-boom!  It’s that easy.


### How to troubleshoot lpstat showing a printer is down

If a customer is having printer issues and upon issuing and `lpstat` command you determine the printer is down, there are a few things you can try before routing to printer support.

- Run `qdef up`. Repeat if it doesn't work -- sometimes it just takes multiple tries.
- Try deleting the top few jobs to see if that releases the queue.
- Power the connection off-and-on.
- Run `/etc/qconfig`
- Ping host with `ping [hostname]`
- Ensure network cables are securely plugged in

If that doesn't solve the issue, the next step is to contact Network Printer Support.