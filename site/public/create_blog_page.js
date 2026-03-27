const fs = require('fs');

// Read blog.html local file
let content = fs.readFileSync('C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/blog.html', 'utf8');

// Minify: collapse all whitespace between tags to prevent WordPress wpautop
content = content
    .replace(/\r\n/g, '\n')           // Normalize line endings first
    .replace(/\n\s*\n/g, '\n')         // Remove blank lines
    .replace(/>\s*\n\s*</g, '><')      // Remove whitespace between tags
    .replace(/\n/g, ' ')               // Replace remaining newlines with space
    .replace(/\s{2,}/g, ' ')           // Collapse multiple spaces
    .trim();

// Wrap in Gutenberg Custom HTML block to prevent any script stripping or wpautop processing by the editor
content = '<!-- wp:html -->' + content + '<!-- /wp:html -->';

const url = 'https://vetisdigital.com/wp-json/wp/v2/pages';
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
        title: 'Blog Vetis',
        content: content,
        status: 'publish',
        slug: 'blog-vetis'
    })
})
.then(res => res.json())
.then(data => {
    if (data.id) {
        console.log('Blog page created successfully! Link:', data.link);
    } else {
        console.error('Error creating page:', JSON.stringify(data).substring(0, 500));
    }
})
.catch(err => console.error(err));
