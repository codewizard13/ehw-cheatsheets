# How to Migrate a website from one host to another

[🏚️](../README.md) | [How To](/how-to/index.md)

#### Related Articles: [Plesk [not created yet]](#)

Migrating a website from one host to another involves several key phases to ensure a smooth transition. Here are the common phases of website migration:

## 1. Planning and Preparation

- Audit current website content and structure
- Choose a new hosting provider
- Back up all website files, databases, and email data
- Document current DNS settings, including MX records for email

## 2. Domain and DNS Management

- Verify domain registration details and expiration date
- Obtain EPP (authorization) code from current registrar if transferring domain
- Update nameservers to point to the new host
- Adjust DNS records (A, CNAME, MX, TXT) for the new server

## 3. Website Transfer

- Upload website files to the new server
- Import databases to the new hosting environment
- Configure server settings (PHP version, SSL certificates, etc.)
- Test website functionality on the new server using a temporary URL

## 4. Email Migration

- Set up email accounts on the new server
- Migrate email data (messages, contacts, calendars)
- Update MX records to point to the new email server
- Configure SPF, DKIM, and DMARC records for email authentication

## 5. Testing and Verification

- Verify all website pages and functions work correctly
- Check email delivery and reception
- Ensure SSL certificates are properly installed and functioning
- Test load times and performance on the new server

## 6. DNS Propagation and Go-Live

- Update DNS records to point to the new server's IP address
- Monitor DNS propagation (can take up to 48 hours)
- Verify website accessibility from multiple locations

## 7. Post-Migration Tasks

- Implement 301 redirects for any changed URLs
- Update internal links and references
- Inform search engines of the change (e.g., Google Search Console)
- Monitor website traffic and performance

## 8. Cleanup and Optimization

- Cancel old hosting account after confirming successful migration
- Remove temporary files and unused data from the new server
- Optimize website for performance on the new hosting environment

By following these phases, you can ensure a comprehensive and successful website migration from one host to another, minimizing downtime and potential issues.



## Related Articles

- N/A


## References

- https://docs.plesk.com/en-US/obsidian/administrator-guide/dns/putting-your-website-online.72225/#id4