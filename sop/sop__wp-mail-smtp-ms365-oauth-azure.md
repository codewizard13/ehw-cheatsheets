<!-- 🔗 Custom Stylesheet -->
<link rel="stylesheet" href="../../_css/main.css">
<!-- 🖼️ Site Logo -->
!Site Logo{height=32}

<!-- 📝 Title -->

# SOP: 📘 Configure WP Mail SMTP with Microsoft 365 (OAuth via Azure Entra ID)

**Version:** 1.0

> Optimized for: VSCode on Windows 11 + Git Bash (SSH)

<!-- 🧭 Navigation -->

### [🏚️ Home](../README.md) | [📁 SOP](index.md)

<!-- 👤 Metadata -->
| **Author**:        | Eric L. Hepperle |
| :----------------- | :--------------- |
| **Date Created**:  | 2025-10-22       |
| **Date Updated**:  | --               |
| **AI Assistance**: | Perplexity       |


***

<!-- SECTION: Tags for short related (1-3 word phrase per tag) concepts (long titled articles belong in the References / See Also section above) -->
<section id="sec-tags">

## Tags:

- WP Mail SMTP
- Microsoft 365
- OAuth Integration

</section>

***

<!-- 🔍 Content Section Heading -->

## 📌 Overview

Configuring [WP Mail SMTP](https://wpmailsmtp.com/) for Microsoft 365 using OAuth 2.0 via [Azure Active Directory (Entra ID)](https://learn.microsoft.com/en-us/entra/) is now essential, given Microsoft's move to deprecate Basic Authentication for SMTP by early 2026. This shift improves security and aligns with compliance requirements for all [Microsoft 365](https://www.microsoft.com/en-us/microsoft-365) accounts, ensuring secure, delegated authentication across WordPress sites. This guide provides a detailed, step-by-step approach for both administrators (typically your boss) and developers, resolving the modern, two-phase setup required to send authenticated mail from WordPress using your organization’s Microsoft 365 account.

The process is structured into two clear phases:

- **PHASE 1:** Azure administrator registers and configures an Azure app for mail delegation.
- **PHASE 2:** The WordPress developer applies the credentials in WP Mail SMTP and completes OAuth linking.

Using this method guarantees that OAuth tokens, not raw passwords, are managed within your WordPress site, offering a higher security standard and future-proofing your mail integration for upcoming Microsoft policy changes.

***

<details>
<summary style="font-size:1.1em;font-weight:bold;">🗂️ Table of Contents</summary>

- [SOP: 📘 Configure WP Mail SMTP with Microsoft 365 (OAuth via Azure Entra ID)](#sop--configure-wp-mail-smtp-with-microsoft-365-oauth-via-azure-entra-id)
    - [🏚️ Home | 📁 SOP](#️-home---sop)
  - [Tags:](#tags)
  - [📌 Overview](#-overview)
  - [🧩 PHASE 1 — Boss’s Role (Azure Steps)](#-phase-1--bosss-role-azure-steps)
  - [🌐 PHASE 2 — Developer’s Role (WordPress Setup)](#-phase-2--developers-role-wordpress-setup)
  - [✅ Validation Summary (as of Oct 2025)](#-validation-summary-as-of-oct-2025)
    - [🔒 Best Practice](#-best-practice)
  - [📚 References / See Also](#-references--see-also)
  - [✅ Revision History](#-revision-history)
</details>

***

## 🧩 PHASE 1 — Boss’s Role (Azure Steps)

<a name="boss-azure-steps"></a>

**Note:** Only an Azure AD tenant administrator with global permissions can perform these steps.

- **1. Register the Application:**
    - Visit the [Azure Portal](https://portal.azure.com/) → Azure Active Directory → App registrations → New registration.
    - Set **Name** to `WP Mail SMTP: yourdomain.com`.
    - Pick **Supported account types**: Accounts in any org directory and personal Microsoft accounts.
    - Set **Redirect URI**:
        - Type: Web
        - URI: `https://yourdomain.com/wp-admin/`
    - Click **Register**.
    - Copy the **Application (client) ID** and **Directory (tenant) ID** for your developer.
- **2. Configure Authentication Settings:**
    - In the app, go to **Authentication**.
    - Confirm the Redirect URI and supported account types.
- **3. Create a Client Secret:**
    - Go to **Certificates \& secrets** → + New client secret.
    - Set **Description**, expiry to 24 months, then **Add**.
    - Copy the **Value** (not the ID) and send to the developer securely.
- **4. Add API Permissions:**
    - Open **API permissions** → + Add a permission → Microsoft Graph → Delegated permissions.
    - Choose **Mail.Send**; click **Add permissions**.
    - Click **Grant admin consent** for your organization.

***

## 🌐 PHASE 2 — Developer’s Role (WordPress Setup)

<a name="developer-wordpress-setup"></a>

- **1. Install and Activate [WP Mail SMTP Pro](https://wpmailsmtp.com/):**
    - Activate the plugin and grab a license.
- **2. Enter Authorization Info:**
    - In WP Mail SMTP (**Outlook / 365** section):
        - **Application ID:** Paste client ID
        - **Application Password:** Paste client secret (Value)
        - **Tenant ID (optional):** Enter Directory (tenant) ID if requested
- **3. Save and Authorize:**
    - Save settings.
    - Use the “Authorize” button to log in and grant consent for the chosen Microsoft account (e.g., noreply@yourdomain.com).
- **4. Send a Test Email:**
    - Use the plugin’s **Email Test** tab to confirm mail delivery works.

***

## ✅ Validation Summary (as of Oct 2025)

<a name="validation-summary"></a>

| Configuration Area             | Platform                                                                      | Notes                                 |
| :----------------------------- | :---------------------------------------------------------------------------- | :------------------------------------ |
| Identity Provider              | [Azure Active Directory (Entra ID)](https://learn.microsoft.com/en-us/entra/) | Current, M365-compliant               |
| API Used                       | Microsoft Graph → Mail.Send                                                   | Required for OAuth 2.0 email send     |
| SMTP Host                      | smtp.office365.com                                                            | Managed via WP Mail SMTP plugin       |
| Authentication Type            | OAuth 2.0 client credentials + consent                                        | Secure, delegated model per Microsoft |
| Alternative (Ionos basic auth) | Deprecated since 2025, unsupported in 2026                                    | Only for legacy troubleshooting       |


***

### 🔒 Best Practice

<a name="best-practice"></a>

- Store secrets only in password managers such as [Bitwarden](https://bitwarden.com/) or [1Password](https://1password.com/).
- Never send secrets via email or chat.
- Rotate client secrets at least every 24 months.

WordPress stores OAuth tokens, not passwords, for continued security.

***

## 📚 References / See Also

<a name="references-see-also"></a>

**By Topic:**

- **WP Mail SMTP Documentation**
    - [How to Set Up the Outlook Mailer in WP Mail SMTP](https://wpmailsmtp.com/docs/how-to-set-up-the-outlook-mailer-in-wp-mail-smtp/)
    - [Complete Guide to WP Mail SMTP Mailers](https://wpmailsmtp.com/docs/a-complete-guide-to-wp-mail-smtp-mailers/)
    - [Easy WP SMTP Outlook Docs](https://easywpsmtp.com/docs/setting-up-the-outlook-mailer/)
    - [WP Mail SMTP Setup Wizard](https://wpmailsmtp.com/docs/how-to-use-the-wp-mail-smtp-setup-wizard/)
    - [Using the Setup Wizard (Easy WP SMTP)](https://easywpsmtp.com/docs/using-the-setup-wizard/)
- **Microsoft Azure \& Graph**
    - [Learn: Azure Email SMTP Authentication](https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/email/send-email-smtp/smtp-authentication)
    - [Microsoft Graph Overview](https://learn.microsoft.com/en-us/graph/overview)
    - [Microsoft Answers: WordPress SMTP Setup](https://learn.microsoft.com/en-us/answers/questions/5528404/adding-mail-to-information-on-wordpress-site-hoste)
- **Security \& Best Practice**
    - [Bitwarden Password Manager](https://bitwarden.com/)
    - [1Password Security Platform](https://1password.com/)

***

## ✅ Revision History

| Version | Date       | Author           | Changes Made          |
| :------ | :--------- | :--------------- | :-------------------- |
| 1.00    | 2025-10-22 | Eric L. Hepperle | Initial draft created |

