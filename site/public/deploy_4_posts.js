const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/entradas blog/';
const username = 'inversioneslivm';
const passwords = [
    'UB9uHoEFBouSdv0vB5mdMUmX', // App password from mcp_config.json
    'EiOO mfcm MdiK q4ym NaIM iwma'  // App password from create_blog_page.js
];

const wpUploadsPath = 'https://vetisdigital.com/wp-content/uploads/2026/03/';

const postsToUpdate = [
    {
        filename: 'que-necesito-para-tener-un-perro-lista-basica.html',
        id: 298,
        name: 'Que necesito para tener un perro (Post 298)'
    },
    {
        filename: 'temp_post_314.html',
        id: 314,
        name: 'Perro velcro (Post 314)'
    },
    {
        filename: 'temp_post_325.html',
        id: 325,
        name: 'Gato duerme conmigo (Post 325)'
    },
    {
        filename: 'temp_post_331.html',
        id: 331,
        name: 'Errores pasear perro (Post 331)'
    }
];

function processHtml(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Replace ../assets/ with wpUploadsPath
    content = content.replace(/\.\.\/assets\//g, wpUploadsPath);

    // 2. Replace relative image webp/jpg/png filenames in src="..." that don't start with http/https
    content = content.replace(/src="(?!(?:https?:|\/\/|\/))([^"]+)"/g, (match, p1) => {
        const cleanName = path.basename(p1);
        return `src="${wpUploadsPath}${cleanName}"`;
    });

    // 3. Minify whitespace between tags to prevent WordPress wpautop issues
    content = content
        .replace(/\r\n/g, '\n')
        .replace(/\n\s*\n/g, '\n')
        .replace(/>\s*\n\s*</g, '><')
        .replace(/\n/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .trim();

    // 4. Wrap in Gutenberg Custom HTML block
    content = '<!-- wp:html -->' + content + '<!-- /wp:html -->';

    return content;
}

async function updatePost(post) {
    const filePath = path.join(baseDir, post.filename);
    console.log(`\n========================================`);
    console.log(`Processing: ${post.name} (File: ${post.filename}, ID: ${post.id})`);
    
    if (!fs.existsSync(filePath)) {
        console.error(`ERROR: File not found at ${filePath}`);
        return { success: false, id: post.id, filename: post.filename, error: 'File not found' };
    }

    const processedContent = processHtml(filePath);
    const url = `https://vetisdigital.com/wp-json/wp/v2/posts/${post.id}`;

    let lastError = '';
    for (const password of passwords) {
        const auth = Buffer.from(`${username}:${password}`).toString('base64');
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${auth}`
                },
                body: JSON.stringify({
                    content: processedContent,
                    status: 'publish'
                })
            });

            const data = await res.json();

            if (res.ok && data.id) {
                console.log(`SUCCESS: Post ID ${data.id} updated successfully!`);
                console.log(`Title: ${data.title ? data.title.rendered : 'N/A'}`);
                console.log(`Link: ${data.link}`);
                console.log(`Modified: ${data.modified}`);
                return { success: true, id: data.id, title: data.title ? data.title.rendered : '', link: data.link, modified: data.modified };
            } else {
                lastError = `Status ${res.status}: ${data.message || res.statusText}`;
            }
        } catch (err) {
            lastError = err.message;
        }
    }

    console.error(`ERROR updating Post ${post.id}: ${lastError}`);
    return { success: false, id: post.id, filename: post.filename, error: lastError };
}

async function run() {
    const results = [];
    for (const post of postsToUpdate) {
        const result = await updatePost(post);
        results.push(result);
    }

    console.log('\n========================================');
    console.log('SUMMARY OF WP POST UPDATES');
    console.log('========================================');
    results.forEach(r => {
        if (r.success) {
            console.log(`[OK] Post ID ${r.id}: Updated successfully. Link: ${r.link}`);
        } else {
            console.log(`[FAIL] Post ID ${r.id} (${r.filename}): ${r.error}`);
        }
    });

    // Write result to file for parent agent / user review
    fs.writeFileSync('c:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/update_results.json', JSON.stringify(results, null, 2));
}

run();
