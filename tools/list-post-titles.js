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
const { program } = require('commander');

program
  .option('-sd, --sourceDir <sourceDir>', 'Source Directory')

program.parse(process.argv);

const options = program.opts();
console.log(`Hello, ${options.name}! You are ${options.age} years old.`);


const start_dir = __dirname;
console.log(`start_dir: ${start_dir}`)

console.log(`options:`, options.sourceDir)

const folderPath = options.sourceDir ? options.sourceDir : start_dir;
const files = fs.readdirSync(folderPath);
// const files = fs.readdir(folderPath);

// files.forEach(file => {
//     const filePath = path.join(folderPath, file);
//     const data = fs.readFileSync(filePath, 'utf8');

//     const regex = /^# (.*)/m;
//     const match = data.match(regex);

//     if (match) {
//         const post_title = match[1];
//         console.log(`File: ${file} - Post Title: ${post_title}`);
//     }
// });
