const fs = require('fs');

const filePath = 'C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/index.html';
let html = fs.readFileSync(filePath, 'utf8');

/* Normalize line endings */
html = html.replace(/\r\n/g, '\n');

/* WhatsApp floating button HTML + CSS */
const whatsappButton = `
<!-- WhatsApp Floating Button -->
<style>
.whatsapp-float {
    position: fixed;
    bottom: 28px;
    right: 28px;
    z-index: 9999;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
    transition: all 0.3s ease;
    cursor: pointer;
    text-decoration: none;
}
.whatsapp-float:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 28px rgba(37, 211, 102, 0.55);
}
.whatsapp-float svg {
    width: 32px;
    height: 32px;
    fill: #fff;
}
.whatsapp-float .whatsapp-tooltip {
    position: absolute;
    right: 72px;
    background: #fff;
    color: #1a2e1a;
    padding: 8px 16px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}
.whatsapp-float:hover .whatsapp-tooltip {
    opacity: 1;
}
@keyframes whatsapp-pulse {
    0% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
    50% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.7), 0 0 0 12px rgba(37, 211, 102, 0.1); }
    100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
}
.whatsapp-float {
    animation: whatsapp-pulse 2.5s infinite;
}
.whatsapp-float:hover {
    animation: none;
}
</style>
<a href="https://wa.me/56949730228" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Chatea con nosotros por WhatsApp">
    <span class="whatsapp-tooltip">\u00bfNecesitas ayuda? \ud83d\udc3e</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5.1-3.7-10.6-6.5z"/></svg>
</a>`;

/* Insert right after </footer> */
if (html.includes('</footer>')) {
    html = html.replace('</footer>', '</footer>' + whatsappButton);
    console.log('WhatsApp button added to index.html');
} else {
    console.log('ERROR: </footer> not found!');
}

/* Save locally */
fs.writeFileSync(filePath, html, 'utf8');

/* Minify and upload to WordPress */
let wpContent = html
    .replace(/\n\s*\n/g, '\n')
    .replace(/>\s*\n\s*</g, '><')
    .replace(/\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

wpContent = '<!-- wp:html -->' + wpContent + '<!-- /wp:html -->';

const url = 'https://vetisdigital.com/wp-json/wp/v2/pages/199';
const username = 'inversioneslivm';
const password = 'EiOO mfcm MdiK q4ym NaIM iwma';
const auth = Buffer.from(username + ':' + password).toString('base64');

fetch(url, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + auth
    },
    body: JSON.stringify({ content: wpContent })
})
.then(res => res.json())
.then(data => {
    if (data.id) {
        console.log('WordPress page 199 (homepage) updated with WhatsApp button!');
    } else {
        console.error('WP Error:', JSON.stringify(data).substring(0, 500));
    }
})
.catch(err => console.error('Fetch error:', err));
