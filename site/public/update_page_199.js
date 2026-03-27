const fs = require('fs');

const targetPath = 'C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/index.html';
let content = fs.readFileSync(targetPath, 'utf8');

// Minify safely
content = content
    .replace(/\r\n/g, '\n')
    .replace(/\n\s*\n/g, '\n')
    .replace(/>\s*\n\s*</g, '><')
    .replace(/\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

// Wrap in Gutenberg Custom HTML block
content = '<!-- wp:html -->' + content + '<!-- /wp:html -->';

const url = 'https://vetisdigital.com/wp-json/wp/v2/pages/199'; // Homepage ID is 199
const username = 'inversioneslivm';
const password = 'EiOO mfcm MdiK q4ym NaIM iwma';
const auth = Buffer.from(`${username}:${password}`).toString('base64');

fetch(url, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
    },
    body: JSON.stringify({
        content: content
    })
})
.then(res => res.json())
.then(data => {
    if (data.id) {
        console.log('Homepage (Page 199) updated successfully on WordPress!');
    } else {
        console.error('Error updating page:', JSON.stringify(data).substring(0, 500));
    }
})
.catch(err => console.error(err));
