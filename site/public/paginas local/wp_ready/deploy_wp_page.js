const fs = require('fs');
const path = require('path');

const wpReadyDir = 'c:\\Users\\Lucianovm.MSI\\OneDrive\\Escritorio\\Web Vetis\\site\\public\\paginas local\\wp_ready';
const mapPath = path.join(wpReadyDir, '_page_map.json');

const filename = process.argv[2];
if (!filename) {
    console.error('Usage: node deploy_wp_page.js <filename.html>');
    process.exit(1);
}

const pageMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
const pageInfo = pageMap[filename];

if (!pageInfo) {
    console.error(`File ${filename} not found in _page_map.json`);
    process.exit(1);
}

const filePath = path.join(wpReadyDir, filename);
if (!fs.existsSync(filePath)) {
    console.error(`File ${filePath} does not exist`);
    process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');

const url = 'https://vetisdigital.com/wp-json/wp/v2/pages';
const username = 'inversioneslivm';
const password = 'EiOO mfcm MdiK q4ym NaIM iwma';
const auth = Buffer.from(`${username}:${password}`).toString('base64');

console.log(`Creating page: "${pageInfo.title}" (slug: ${pageInfo.slug})...`);

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
    },
    body: JSON.stringify({
        title: pageInfo.title,
        content: content,
        status: 'publish',
        slug: pageInfo.slug
    })
})
.then(async res => {
    const data = await res.json();
    if (res.ok && data.id) {
        console.log(`SUCCESS: Page created! ID: ${data.id}, Link: ${data.link}`);
        pageInfo.wpId = data.id;
        pageInfo.action = 'update';
        fs.writeFileSync(mapPath, JSON.stringify(pageMap, null, 2), 'utf8');
        console.log(`Updated _page_map.json with wpId: ${data.id}`);
    } else {
        console.error(`FAILURE: Error creating page ${filename}:`, JSON.stringify(data, null, 2));
    }
})
.catch(err => {
    console.error(`FAILURE: Exception while creating page ${filename}:`, err);
});
