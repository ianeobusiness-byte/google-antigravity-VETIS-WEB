const fs = require('fs');
const path = require('path');

const wpReadyDir = 'c:\\Users\\Lucianovm.MSI\\OneDrive\\Escritorio\\Web Vetis\\site\\public\\paginas local\\wp_ready';
const mapPath = path.join(wpReadyDir, '_page_map.json');

const pagesToCreate = [
    { file: 'recursos-gratis.html', slug: 'recursos-gratis', title: 'Recursos Gratis' },
    { file: 'orientacion-online.html', slug: 'orientacion-online', title: 'Orientación Online' },
    { file: 'app-vetis.html', slug: 'app-vetis', title: 'App Vetis' }
];

const pageMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
const url = 'https://vetisdigital.com/wp-json/wp/v2/pages';
const username = 'inversioneslivm';
const password = 'EiOO mfcm MdiK q4ym NaIM iwma';
const auth = Buffer.from(`${username}:${password}`).toString('base64');

async function createPage(pageSpec) {
    const filePath = path.join(wpReadyDir, pageSpec.file);
    if (!fs.existsSync(filePath)) {
        console.error(`FAILURE: File not found: ${filePath}`);
        return { success: false, file: pageSpec.file, error: 'File not found' };
    }

    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`\nCreating page: "${pageSpec.title}" (slug: ${pageSpec.slug})...`);

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${auth}`
            },
            body: JSON.stringify({
                title: pageSpec.title,
                content: content,
                status: 'publish',
                slug: pageSpec.slug
            })
        });

        const data = await res.json();
        if (res.ok && data.id) {
            console.log(`SUCCESS: Page "${pageSpec.title}" created successfully! ID: ${data.id}, Link: ${data.link}`);
            if (pageMap[pageSpec.file]) {
                pageMap[pageSpec.file].wpId = data.id;
                pageMap[pageSpec.file].action = 'update';
            }
            return { success: true, file: pageSpec.file, id: data.id, link: data.link, slug: pageSpec.slug, title: pageSpec.title };
        } else {
            console.error(`FAILURE: Failed to create page "${pageSpec.title}":`, JSON.stringify(data, null, 2));
            return { success: false, file: pageSpec.file, error: data };
        }
    } catch (err) {
        console.error(`FAILURE: Exception creating page "${pageSpec.title}":`, err.message);
        return { success: false, file: pageSpec.file, error: err.message };
    }
}

async function main() {
    const results = [];
    for (const page of pagesToCreate) {
        const result = await createPage(page);
        results.push(result);
    }

    fs.writeFileSync(mapPath, JSON.stringify(pageMap, null, 2), 'utf8');
    console.log('\nUpdated _page_map.json with new page IDs.');

    console.log('\n--- DEPLOYMENT SUMMARY ---');
    results.forEach(r => {
        if (r.success) {
            console.log(`[SUCCESS] ${r.file} -> ID: ${r.id} (${r.link})`);
        } else {
            console.log(`[FAILURE] ${r.file} -> ${JSON.stringify(r.error)}`);
        }
    });
}

main();
