/**
 * Link Variation Checker
 * Filename: link-variation-check.js
 * Category: Tools
 * Date Created: 2024-12-13
 * Created By: Eric Hepperle
 * 
 * Purpose: Tests all versions of a link including http, https, and www.
 * 
 * Usage:
 * - node tools/link-variation-checks.js --domain example.com
 * 
 * Sample Output:
 * 
 * References:
 * - 
 */
// const fs = require('fs');
// const path = require('path');
const { program } = require('commander');

// Get parse command line args with commander
program
    .option('-url, --domain <domain>', 'URL Domain');

program.parse(process.argv);
const options = program.opts();

// Define url base as domain
const domain = options.domain ? options.domain : 'google.com'
console.log(`domain: ${domain}`);

// Define array of variations
const variations = [
    'http://', 'https://', 'http://www.', 'https://www.'
]
console.table(variations)

try {

    console.log(`////////// URL VARIATIONS ///////////\n`)
    console.log(`DOMAIN:\t${domain}\n`)

    variations.forEach(variation => {
        const fullUrl = variation + domain

        const anchor = `<a href="${fullUrl}" target="_blank">${fullUrl}</a>`

        // console.log(`Variation [${variation}]:  ${fullUrl}`)
        console.log(`Variation [${variation}]:  ${anchor}`)


    });

} catch (error) {
    console.error(`Error reading directory: ${folderPath}`, error);
}


