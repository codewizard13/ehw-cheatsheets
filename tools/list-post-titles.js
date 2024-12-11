/**
 * List Post Titles
 * Filename: list-post-title.js
 * Category: Tools
 * Date Created: 2024-12-11
 * 
 * Purpose:
 * 
 * Usage:
 * 
 * Sample Output:
 * 
 * References:
 * - 
 */
const fs = require('fs');
const path = require('path');

const start_dir = __dirname;
console.log(`start_dir: ${start_dir}`)

const folderPath = start_dir;
const files = fs.readdirSync(folderPath);

files.forEach(file => {
    const filePath = path.join(folderPath, file);
    const data = fs.readFileSync(filePath, 'utf8');

    const regex = /^# (.*)/m;
    const match = data.match(regex);

    if (match) {
        const post_title = match[1];
        console.log(`File: ${file} - Post Title: ${post_title}`);
    }
});
