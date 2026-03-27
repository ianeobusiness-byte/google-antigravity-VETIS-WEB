const fs = require('fs');

const basePath = 'C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/';
const username = 'inversioneslivm';
const password = 'EiOO mfcm MdiK q4ym NaIM iwma';
const auth = Buffer.from(username + ':' + password).toString('base64');

/* All pages EXCEPT audioteca */
const pages = [
    { file: 'index.html', wpId: 199 },
    { file: 'blog.html', wpId: 339 },
    { file: 'biblioteca.html', wpId: 193 },
    { file: 'biblioteca-perros.html', wpId: 192 },
    { file: 'biblioteca-gatos.html', wpId: 191 },
    { file: 'contacto.html', wpId: 195 },
    { file: 'nosotros.html', wpId: 196 },
    /* audioteca.html (197) EXCLUDED */
    { file: 'afiliados.html', wpId: 198 },
    { file: 'terminos-y-condiciones.html', wpId: 248 },
    { file: 'politica-de-privacidad.html', wpId: 249 },
    { file: 'politica-de-cookies.html', wpId: 250 },
    { file: 'politica-de-reembolsos.html', wpId: 251 },
    { file: 'licencia-de-uso.html', wpId: 252 },
    { file: 'aviso-legal.html', wpId: 253 },
    { file: 'disclaimer.html', wpId: 254 },
];

const popupHTML = `
<!-- Vetis Audioteca Popup -->
<style>
.vetis-popup-overlay {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: rgba(26, 46, 26, 0.6);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    align-items: center;
    justify-content: center;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s ease;
}
.vetis-popup-overlay.vetis-popup-visible {
    display: flex;
    opacity: 1;
}
.vetis-popup-card {
    background: #fdfcf9;
    border-radius: 24px;
    max-width: 460px;
    width: 100%;
    padding: 48px 36px 40px;
    position: relative;
    box-shadow: 0 25px 60px rgba(0,0,0,0.2);
    text-align: center;
    transform: scale(0.9);
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.vetis-popup-visible .vetis-popup-card {
    transform: scale(1);
}
.vetis-popup-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: rgba(26, 46, 26, 0.08);
    color: #1a2e1a;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
    line-height: 1;
}
.vetis-popup-close:hover {
    background: rgba(26, 46, 26, 0.15);
    transform: rotate(90deg);
}
.vetis-popup-icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #1a2e1a;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    box-shadow: 0 8px 24px rgba(26, 46, 26, 0.25);
}
.vetis-popup-icon span {
    color: #d4af37;
    font-size: 32px;
}
.vetis-popup-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    color: #1a2e1a;
    margin-bottom: 12px;
    line-height: 1.3;
}
.vetis-popup-text {
    font-family: 'Public Sans', sans-serif;
    font-size: 16px;
    color: #64748b;
    margin-bottom: 32px;
    line-height: 1.6;
}
.vetis-popup-btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 16px 32px;
    background: #1a2e1a;
    color: #d4af37;
    border: 2px solid #1a2e1a;
    border-radius: 14px;
    font-family: 'Public Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(26, 46, 26, 0.2);
    margin-bottom: 12px;
}
.vetis-popup-btn-primary:hover {
    background: #d4af37;
    color: #1a2e1a;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(26, 46, 26, 0.25);
}
.vetis-popup-btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 14px 32px;
    background: transparent;
    color: #1a2e1a;
    border: none;
    border-radius: 14px;
    font-family: 'Public Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
}
.vetis-popup-btn-secondary:hover {
    background: rgba(26, 46, 26, 0.06);
}
</style>
<div id="vetis-audioteca-popup" class="vetis-popup-overlay">
    <div class="vetis-popup-card">
        <button class="vetis-popup-close" id="vetis-popup-close" aria-label="Cerrar">&times;</button>
        <div class="vetis-popup-icon">
            <span class="material-symbols-outlined">headphones</span>
        </div>
        <h2 class="vetis-popup-title">&iquest;Sab&iacute;as que Vetis tiene una Audioteca gratuita?</h2>
        <p class="vetis-popup-text">Explora audios gratuitos y descubre una parte de lo que es Vetis.</p>
        <a href="https://vetisdigital.com/audioteca/" class="vetis-popup-btn-primary">
            <span class="material-symbols-outlined" style="font-size:20px;">headphones</span>
            &iexcl;Quiero conocerla!
        </a>
        <button class="vetis-popup-btn-secondary" id="vetis-popup-dismiss">Seguir navegando</button>
    </div>
</div>
<script>
(function(){
    var STORAGE_KEY = 'vetis_popup_last_shown';
    var DELAY_MS = 15000;
    var COOLDOWN_DAYS = 7;

    function closePopup() {
        var el = document.getElementById('vetis-audioteca-popup');
        if (el) { el.classList.remove('vetis-popup-visible'); }
    }
    function showPopup() {
        var el = document.getElementById('vetis-audioteca-popup');
        if (el) {
            el.classList.add('vetis-popup-visible');
            localStorage.setItem(STORAGE_KEY, Date.now().toString());
        }
    }
    function shouldShow() {
        var last = localStorage.getItem(STORAGE_KEY);
        if (!last) return true;
        var diff = Date.now() - parseInt(last, 10);
        return diff > COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
    }

    if (shouldShow()) {
        setTimeout(showPopup, DELAY_MS);
    }

    document.addEventListener('DOMContentLoaded', function() {
        var closeBtn = document.getElementById('vetis-popup-close');
        var dismissBtn = document.getElementById('vetis-popup-dismiss');
        var overlay = document.getElementById('vetis-audioteca-popup');
        if (closeBtn) closeBtn.addEventListener('click', closePopup);
        if (dismissBtn) dismissBtn.addEventListener('click', closePopup);
        if (overlay) overlay.addEventListener('click', function(e) {
            if (e.target === overlay) closePopup();
        });
    });
})();
</script>`;

async function processPage(page) {
    const fullPath = basePath + page.file;
    if (!fs.existsSync(fullPath)) { console.log('SKIP (not found): ' + page.file); return; }

    let html = fs.readFileSync(fullPath, 'utf8');
    html = html.replace(/\r\n/g, '\n');

    /* Skip if already has popup */
    if (html.includes('vetis-audioteca-popup')) {
        console.log('SKIP (already has popup): ' + page.file);
    } else if (html.includes('</footer>')) {
        html = html.replace('</footer>', '</footer>' + popupHTML);
        fs.writeFileSync(fullPath, html, 'utf8');
        console.log('Added popup to: ' + page.file);
    } else {
        html += popupHTML;
        fs.writeFileSync(fullPath, html, 'utf8');
        console.log('Appended popup to: ' + page.file);
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
    for (const p of pages) await processPage(p);
    console.log('\nDone! Popup added to all pages (except Audioteca).');
}
main();
