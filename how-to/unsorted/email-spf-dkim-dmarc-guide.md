<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">

<!-- 🖼️ Site Logo -->
![Site Logo](/_pix/logos/logo-ehw-kb.svg){height=32}

<!-- 📝 Title -->
# HOW-TO: 📧 Fix Email Authentication Failures with SPF, DKIM, and DMARC

**Version:** 1.0


> Optimized for: DNS Providers (GoDaddy, Cloudflare, IONOS) + Common Email Services (Google Workspace, Microsoft 365)

> 

<!-- 🧭 Navigation -->
### [🏚️ Home](../README.md) | [📁 How-To](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| ------------------ | ---------------- |
| **Date Created**:  | 2025-08-27       |
| **Date Updated**:  | 2025-09-20       |
| **AI Assistance**: | ChatGPT          |


---

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">

## Tags:

- [Email Authentication](#)
- [SPF](#)
- [DKIM](#)
- [DMARC](#)
- [DNS Configuration](#)


</section>




---


<!-- 🔍 Content Section Heading -->

## 📌 Overview

This guide addresses common email delivery failures caused by missing or misconfigured SPF and DKIM records, which lead to messages being rejected by Gmail or other mail providers. It provides practical steps to correctly configure these records for your domain to improve email authentication, reduce spam filtering, and enhance deliverability.

---

## 🔧 Step-by-Step Fix for SPF and DKIM

### ✅ 1. Update SPF Record  

SPF (Sender Policy Framework) specifies which IPs or mail servers are authorized to send emails on behalf of your domain.  

- **Issue:** SPF is currently failing for your sending IP address.  
- **Fix:**  
  1. Log in to your DNS provider’s console (GoDaddy, Cloudflare, IONOS, etc.).  
  2. Find the existing SPF TXT record (begins with `v=spf1`) or add a new TXT record if none exists.  
  3. Include the authorized sending IP or services, for example:  
     ```
     v=spf1 ip4:<YOUR_IP_ADDRESS> include:_spf.google.com ~all
     ```  
     Replace `<YOUR_IP_ADDRESS>` with your actual mail server IP.  
  4. Save and publish the DNS changes.  

---

### ✅ 2. Set Up DKIM (DomainKeys Identified Mail)

DKIM adds a cryptographic signature to your emails ensuring message integrity and authentic sender verification.  

- If using services like Google Workspace, Microsoft 365, or IONOS:  
  1. Enable DKIM signing from your email provider’s admin or security panel.  
  2. Add the provided DKIM CNAME or TXT records into your DNS settings.  
  3. Wait for DNS propagation and verify signatures via email headers or testing tools.  

---

### ✅ 3. Add DMARC (Optional but Recommended)

DMARC (Domain-based Message Authentication, Reporting & Conformance) helps specify policies on how mail servers should handle unauthenticated mail. It builds on SPF and DKIM.  

Example DMARC TXT record:  
```
v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com
```

---

### ✅ 4. Test Your Setup

Use online tools to verify your DNS records and email authentication:  
- MXToolbox SPF and DKIM Checkers  
- Google Admin Toolbox CheckMX  
- Mail-Tester.com  

---

## 📚 References / See Also

- [SPF, DKIM, and DMARC Made Simple - Valimail](https://www.valimail.com/blog/dmarc-dkim-spf-explained/)  
- [Google Workspace DKIM Setup](https://support.google.com/a/answer/174124?hl=en)  
- [SendPulse SPF and DKIM Setup](https://sendpulse.com/knowledge-base/email-service/additional/email-authentication)  
  
[1](https://wpmailsmtp.com/dmarc-spf-dkim/)
[2](https://www.reddit.com/r/Office365/comments/165czhi/correct_setup_of_spf_dmarc_and_dkim/)
[3](https://redsift.com/guides/email-protocol-configuration-guide/all-you-need-to-know-about-spf-dkim-and-dmarc)
[4](https://dmarcdkim.com/setup/how-to-setup-resend-spf-dkim-and-dmarc-records)
[5](https://dmarcly.com/blog/how-to-implement-dmarc-dkim-spf-to-stop-email-spoofing-phishing-the-definitive-guide)
[6](https://www.smartlead.ai/blog/spf-dkim-dmarc)
[7](https://www.totalhipaa.com/email-authentication-and-deliverability-how-to-configure-dmarc-spf-and-dkim-records/)
[8](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure)
[9](https://dmarcian.com/dmarc-record-wizard/)

---

## ✅ Revision History


| Version | Date       | Author           | Changes Made                                     |
| ------- | ---------- | ---------------- | ------------------------------------------------ |
| 1.00    | 2025-09-03 | Eric L. Hepperle | Initial draft created                            |
| 1.02    | 2025-09-20 | Eric L. Hepperle | Draft formatted as KB article clone of [tmpl].md |

---
