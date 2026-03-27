const fs = require('fs');

const basePath = 'C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/';
const username = 'inversioneslivm';
const password = 'EiOO mfcm MdiK q4ym NaIM iwma';
const auth = Buffer.from(username + ':' + password).toString('base64');

/* ALL pages (including audioteca this time — color fix is structural) */
const pages = [
    { file: 'biblioteca.html', wpId: 193 },
    { file: 'biblioteca-perros.html', wpId: 192 },
    { file: 'biblioteca-gatos.html', wpId: 191 },
    { file: 'nosotros.html', wpId: 196 },
    { file: 'contacto.html', wpId: 195 },
    { file: 'audioteca.html', wpId: 197 },
    { file: 'afiliados.html', wpId: 198 },
    { file: 'blog.html', wpId: 339 },
    { file: 'terminos-y-condiciones.html', wpId: 248 },
    { file: 'politica-de-privacidad.html', wpId: 249 },
    { file: 'politica-de-cookies.html', wpId: 250 },
    { file: 'politica-de-reembolsos.html', wpId: 251 },
    { file: 'licencia-de-uso.html', wpId: 252 },
    { file: 'aviso-legal.html', wpId: 253 },
    { file: 'disclaimer.html', wpId: 254 },
];

async function fixPage(page) {
    const fullPath = basePath + page.file;
    if (!fs.existsSync(fullPath)) { console.log('SKIP: ' + page.file); return; }

    let html = fs.readFileSync(fullPath, 'utf8');
    html = html.replace(/\r\n/g, '\n');

    let changed = false;

    /* Fix inline JS comments that break minification */
    if (html.includes('"#ec5b13", // Terracotta')) {
        html = html.replace('"#ec5b13", // Terracotta', '"#ec5b13", /* Terracotta */');
        changed = true;
    }
    if (html.includes('"#fdfcf9", // Cream/Off-white')) {
        html = html.replace('"#fdfcf9", // Cream/Off-white', '"#fdfcf9", /* Cream/Off-white */');
        changed = true;
    }

    /* Also fix any other // comments inside script tags */
    /* Some pages might have AOS.init with // comments */
    if (html.includes("'ease-in-out-sine' // ") || html.includes("// AOS")) {
        html = html.replace(/\/\/\s*AOS[^\n]*/g, '/* AOS */');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(fullPath, html, 'utf8');
        console.log('Fixed comments in: ' + page.file);
    } else {
        console.log('No // comments to fix in: ' + page.file + ' (already OK or different format)');
    }

    /* Always re-upload to ensure WordPress has the latest */
    html = fs.readFileSync(fullPath, 'utf8');
    let wpContent = html
        .replace(/\r\n/g, '\n')
        .replace(/\n\s*\n/g, '\n')
        .replace(/>\s*\n\s*</g, '><')
        .replace(/\n/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .trim();
    wpContent = '<!-- wp:html -->' + wpContent + '<!-- /wp:html -->';

    try {
        const res = await fetch('https://vetisdigital.com/wp-json/wp/v2/pages/' + page.wpId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + auth },
            body: JSON.stringify({ content: wpContent })
        });
        const data = await res.json();
        console.log(data.id ? '  -> WP ' + page.wpId + ' OK' : '  -> ERROR: ' + JSON.stringify(data).substring(0, 200));
    } catch (err) {
        console.error('  -> Fetch error:', err.message);
    }
}

async function main() {
    for (const p of pages) await fixPage(p);
    console.log('\nDone! All Tailwind configs fixed and re-uploaded.');
}
main();
