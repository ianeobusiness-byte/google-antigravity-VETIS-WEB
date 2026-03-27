const fs = require('fs');

const basePath = 'C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/';
const username = 'inversioneslivm';
const password = 'EiOO mfcm MdiK q4ym NaIM iwma';
const auth = Buffer.from(username + ':' + password).toString('base64');

const pages = [
    { file: 'index.html', wpId: 199 },
    { file: 'blog.html', wpId: 339 },
    { file: 'biblioteca.html', wpId: 193 },
    { file: 'biblioteca-perros.html', wpId: 192 },
    { file: 'biblioteca-gatos.html', wpId: 191 },
    { file: 'contacto.html', wpId: 195 },
    { file: 'nosotros.html', wpId: 196 },
    { file: 'audioteca.html', wpId: 197 },
    { file: 'afiliados.html', wpId: 198 },
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

    /* Fix wrong number: 56949730228 → 56947930228 */
    if (html.includes('56949730228')) {
        html = html.replace(/56949730228/g, '56947930228');
        fs.writeFileSync(fullPath, html, 'utf8');
        console.log('Fixed number in: ' + page.file);
    } else {
        console.log('Number not found in: ' + page.file);
        return;
    }

    /* Re-read, minify, upload */
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
    console.log('\nDone! Number corrected on all pages.');
}
main();
