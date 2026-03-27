const fs = require('fs');

let content = fs.readFileSync('C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/blog.html', 'utf8');

// Minify safely
content = content
    .replace(/\r\n/g, '\n')
    .replace(/\n\s*\n/g, '\n')
    .replace(/>\s*\n\s*</g, '><')
    .replace(/\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

content = '<!-- wp:html -->' + content + '<!-- /wp:html -->';

const url = 'https://vetisdigital.com/wp-json/wp/v2/pages/339';
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
        console.log('Page 339 updated successfully!');
    } else {
        console.error('Error updating page:', data);
    }
})
.catch(err => console.error(err));
