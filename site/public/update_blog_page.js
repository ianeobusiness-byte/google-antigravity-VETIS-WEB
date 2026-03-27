const fs = require('fs');

// Read blog.html local file
let content = fs.readFileSync('C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/blog.html', 'utf8');

// Minify: collapse all whitespace between tags to prevent WordPress wpautop
// 1. Remove HTML comments (they get wrapped in <p> by WP)
// Actually keep comments but put them on same line
// 2. Remove newlines and collapse multiple spaces
content = content
    .replace(/\r\n/g, '\n')           // Normalize line endings first
    .replace(/\n\s*\n/g, '\n')         // Remove blank lines
    .replace(/>\s*\n\s*</g, '><')      // Remove whitespace between tags
    .replace(/\n/g, ' ')               // Replace remaining newlines with space
    .replace(/\s{2,}/g, ' ')           // Collapse multiple spaces
    .trim();

const url = 'https://vetisdigital.com/wp-json/wp/v2/pages/194';
const username = 'inversioneslivm';
const password = 'EiOO mfcm MdiK q4ym NaIM iwma';
const auth = Buffer.from(`${username}:${password}`).toString('base64');

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
    },
    body: JSON.stringify({
        content: content,
        status: 'publish'
    })
})
.then(res => res.json())
.then(data => {
    if (data.id) {
        console.log('Blog page updated successfully!', data.link);
    } else {
        console.error('Error updating page:', JSON.stringify(data).substring(0, 500));
    }
})
.catch(err => console.error(err));
