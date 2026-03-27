const fs = require('fs');

const content = fs.readFileSync('C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/temp_post_325.html', 'utf8');

const url = 'https://vetisdigital.com/wp-json/wp/v2/posts/325';
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
        status: 'publish',
        featured_media: 328
    })
})
.then(res => res.json())
.then(data => {
    if (data.id) {
        console.log('Post updated successfully!', data.link);
    } else {
        console.error('Error updating post:', data);
    }
})
.catch(err => console.error(err));
