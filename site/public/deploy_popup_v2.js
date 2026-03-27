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
    /* audioteca.html EXCLUDED */
    { file: 'afiliados.html', wpId: 198 },
    { file: 'terminos-y-condiciones.html', wpId: 248 },
    { file: 'politica-de-privacidad.html', wpId: 249 },
    { file: 'politica-de-cookies.html', wpId: 250 },
    { file: 'politica-de-reembolsos.html', wpId: 251 },
    { file: 'licencia-de-uso.html', wpId: 252 },
    { file: 'aviso-legal.html', wpId: 253 },
    { file: 'disclaimer.html', wpId: 254 },
];

/* NEW popup with fixed button alignment */
const newPopupHTML = `
<!-- Vetis Audioteca Popup -->
<style>
.vetis-popup-overlay{display:none;position:fixed;inset:0;z-index:99999;background:rgba(26,46,26,0.65);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity 0.5s ease}
.vetis-popup-overlay.vetis-popup-visible{display:flex;opacity:1}
.vetis-popup-card{background:#fdfcf9;border-radius:28px;max-width:440px;width:100%;position:relative;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,0.3),0 0 0 1px rgba(212,175,55,0.15);transform:scale(0.85) translateY(30px);opacity:0;transition:transform 0.5s cubic-bezier(0.34,1.56,0.64,1),opacity 0.4s ease}
.vetis-popup-visible .vetis-popup-card{transform:scale(1) translateY(0);opacity:1}
.vetis-popup-header{background:linear-gradient(135deg,#1a2e1a 0%,#2d4a2d 60%,#1a2e1a 100%);padding:40px 36px 48px;text-align:center;position:relative;overflow:hidden}
.vetis-popup-header::before{content:'';position:absolute;top:-60px;right:-60px;width:180px;height:180px;border-radius:50%;background:rgba(212,175,55,0.08)}
.vetis-popup-header::after{content:'';position:absolute;bottom:-40px;left:-40px;width:140px;height:140px;border-radius:50%;background:rgba(212,175,55,0.06)}
.vetis-popup-icon-wrap{position:relative;display:inline-flex;align-items:center;justify-content:center;margin-bottom:20px}
.vetis-popup-icon-ring{position:absolute;border-radius:50%;border:1.5px solid rgba(212,175,55,0.15)}
.vetis-popup-icon-ring-1{width:100px;height:100px;animation:vetisRingPulse 3s ease-in-out infinite}
.vetis-popup-icon-ring-2{width:130px;height:130px;animation:vetisRingPulse 3s ease-in-out 0.5s infinite}
.vetis-popup-icon-ring-3{width:160px;height:160px;animation:vetisRingPulse 3s ease-in-out 1s infinite}
@keyframes vetisRingPulse{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:0.8;transform:scale(1.05)}}
.vetis-popup-icon{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#d4af37,#c49b2c);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 32px rgba(212,175,55,0.35);position:relative;z-index:2}
.vetis-popup-icon span{color:#1a2e1a;font-size:34px;font-variation-settings:'FILL' 1}
.vetis-popup-header-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);padding:6px 14px;border-radius:20px;font-size:11px;font-weight:700;color:#d4af37;text-transform:uppercase;letter-spacing:1.5px}
.vetis-popup-body{padding:32px 36px 36px;text-align:center}
.vetis-popup-title{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#1a2e1a;margin:0 0 12px;line-height:1.3}
.vetis-popup-title em{color:#d4af37;font-style:italic}
.vetis-popup-text{font-family:'Public Sans',sans-serif;font-size:15px;color:#64748b;margin:0 0 28px;line-height:1.65}
.vetis-popup-btn-primary{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:16px 32px;background:linear-gradient(135deg,#1a2e1a,#2d4a2d);color:#d4af37;border:none;border-radius:16px;font-family:'Public Sans',sans-serif;font-size:16px;font-weight:700;cursor:pointer;text-decoration:none;transition:all 0.3s ease;box-shadow:0 6px 24px rgba(26,46,26,0.25);margin-bottom:10px;box-sizing:border-box}
.vetis-popup-btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(26,46,26,0.35);background:linear-gradient(135deg,#2d4a2d,#1a2e1a)}
.vetis-popup-btn-secondary{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:14px 32px;background:transparent;color:#1a2e1a;border:2px solid #1a2e1a;border-radius:16px;font-family:'Public Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;text-decoration:none;transition:all 0.3s ease;box-sizing:border-box}
.vetis-popup-btn-secondary:hover{background:#1a2e1a;color:#fdfcf9}
.vetis-popup-close{position:absolute;top:14px;right:14px;width:34px;height:34px;border-radius:50%;border:none;background:rgba(255,255,255,0.12);color:rgba(255,255,255,0.7);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.25s ease;line-height:1;z-index:10}
.vetis-popup-close:hover{background:rgba(255,255,255,0.25);color:#fff;transform:rotate(90deg)}
</style>
<div id="vetis-audioteca-popup" class="vetis-popup-overlay">
    <div class="vetis-popup-card">
        <button class="vetis-popup-close" id="vetis-popup-close" aria-label="Cerrar">&times;</button>
        <div class="vetis-popup-header">
            <div class="vetis-popup-icon-wrap">
                <div class="vetis-popup-icon-ring vetis-popup-icon-ring-1"></div>
                <div class="vetis-popup-icon-ring vetis-popup-icon-ring-2"></div>
                <div class="vetis-popup-icon-ring vetis-popup-icon-ring-3"></div>
                <div class="vetis-popup-icon">
                    <span class="material-symbols-outlined">headphones</span>
                </div>
            </div>
            <div class="vetis-popup-header-badge">
                <span class="material-symbols-outlined" style="font-size:14px;">volume_up</span>
                Contenido gratuito
            </div>
        </div>
        <div class="vetis-popup-body">
            <h2 class="vetis-popup-title">&iquest;Sab&iacute;as que Vetis tiene una <em>Audioteca gratuita</em>?</h2>
            <p class="vetis-popup-text">Explora audios gratuitos y descubre una parte de lo que es Vetis.</p>
            <a href="https://vetisdigital.com/audioteca/" class="vetis-popup-btn-primary">
                <span class="material-symbols-outlined" style="font-size:20px;font-variation-settings:'FILL' 1;">headphones</span>
                &iexcl;Quiero descubrirla!
            </a>
            <button class="vetis-popup-btn-secondary" id="vetis-popup-dismiss">Seguir navegando</button>
        </div>
    </div>
</div>
<script>
(function(){
    var STORAGE_KEY = 'vetis_popup_last_shown';
    var DELAY_MS = 15000;
    var COOLDOWN_DAYS = 7;
    function closePopup(){var el=document.getElementById('vetis-audioteca-popup');if(el){el.classList.remove('vetis-popup-visible');}}
    function showPopup(){var el=document.getElementById('vetis-audioteca-popup');if(el){el.classList.add('vetis-popup-visible');localStorage.setItem(STORAGE_KEY,Date.now().toString());}}
    function shouldShow(){var last=localStorage.getItem(STORAGE_KEY);if(!last)return true;return(Date.now()-parseInt(last,10))>COOLDOWN_DAYS*86400000;}
    if(shouldShow()){setTimeout(showPopup,DELAY_MS);}
    document.addEventListener('DOMContentLoaded',function(){
        var c=document.getElementById('vetis-popup-close');
        var d=document.getElementById('vetis-popup-dismiss');
        var o=document.getElementById('vetis-audioteca-popup');
        if(c)c.addEventListener('click',closePopup);
        if(d)d.addEventListener('click',closePopup);
        if(o)o.addEventListener('click',function(e){if(e.target===o)closePopup();});
    });
})();
</script>`;

async function processPage(page) {
    const fullPath = basePath + page.file;
    if (!fs.existsSync(fullPath)) { console.log('SKIP: ' + page.file); return; }

    let html = fs.readFileSync(fullPath, 'utf8');
    html = html.replace(/\r\n/g, '\n');

    /* Remove old popup (everything between markers) */
    const oldStart = '<!-- Vetis Audioteca Popup -->';
    const oldEndMarker = '})();\n</script>';
    
    if (html.includes(oldStart)) {
        const startIdx = html.indexOf(oldStart);
        /* Find the closing script tag that ends the popup */
        let endIdx = html.indexOf(oldEndMarker, startIdx);
        if (endIdx !== -1) {
            endIdx += oldEndMarker.length;
            html = html.substring(0, startIdx) + html.substring(endIdx);
            console.log('Removed old popup from: ' + page.file);
        } else {
            console.log('WARNING: Could not find end of old popup in: ' + page.file);
        }
    }

    /* Add new popup after </footer> */
    if (html.includes('</footer>')) {
        html = html.replace('</footer>', '</footer>' + newPopupHTML);
        console.log('Added new popup to: ' + page.file);
    }

    fs.writeFileSync(fullPath, html, 'utf8');

    /* Minify and upload */
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
    console.log('\nDone! New popup deployed to all pages.');
}
main();
