const fs = require('fs');

const filePath = 'C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/index.html';
let html = fs.readFileSync(filePath, 'utf8');

/* Normalize line endings for safe matching */
html = html.replace(/\r\n/g, '\n');

/* ---- 1. Fix Tailwind config inline comments ---- */
html = html.replace('"primary": "#ec5b13", // Terracotta', '"primary": "#ec5b13", /* Terracotta */');
html = html.replace('"background-light": "#fdfcf9", // Cream/Off-white', '"background-light": "#fdfcf9", /* Cream/Off-white */');

/* ---- 2. Replace Blog Post 1 ---- */
const old1 = `<a href="/blog-vetis/" class="group block" data-aos="fade-up" data-aos-delay="100">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] mb-6 relative">
                <img src="https://vetisdigital.com/wp-content/uploads/2026/03/blog_dog_home_following_1773871539147.jpg" alt="Perro siguiendo a su dueño en casa" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-deep-green shadow-sm">Comportamiento Canino</div>
                <div class="absolute bottom-4 left-4 transition-all duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 text-deep-green font-bold text-sm shadow-sm">Seguir leyendo <span class="material-symbols-outlined text-[16px]">arrow_forward</span></div>
            </div>
            <p class="text-sm font-medium text-slate-500 mb-3">3 de Enero, 2026</p>
            <h3 class="text-2xl lg:text-[28px] font-bold text-deep-green dark:text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">\u00bfPor qu\u00e9 mi perro me sigue a todas partes?</h3>
            <p class="text-slate-600 dark:text-slate-400 text-lg line-clamp-2">Entiende si se trata de apego, costumbre, curiosidad o una se\u00f1al de ansiedad, y aprende c\u00f3mo manejarl...</p>
        </a>`;

const new1 = `<a href="https://vetisdigital.com/que-necesita-tu-primer-perro-el-dia-1-checklist-facil-para-prepararte-bien/" class="group block" data-aos="fade-up" data-aos-delay="100">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] mb-6 relative">
                <img src="https://vetisdigital.com/wp-content/uploads/2026/03/kit-basico-recibir-perro-casa.jpg" alt="Kit b\u00e1sico de bienvenida para el primer perro en casa." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-deep-green shadow-sm">Primeros pasos</div>
                <div class="absolute bottom-4 left-4 transition-all duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 text-deep-green font-bold text-sm shadow-sm">Seguir leyendo <span class="material-symbols-outlined text-[16px]">arrow_forward</span></div>
            </div>
            <p class="text-sm font-medium text-slate-500 mb-3">23 de Marzo, 2026</p>
            <h3 class="text-2xl lg:text-[28px] font-bold text-deep-green dark:text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">Qu\u00e9 necesita tu primer perro el d\u00eda 1: checklist f\u00e1cil para prepararte bien</h3>
            <p class="text-slate-600 dark:text-slate-400 text-lg line-clamp-2">\u00a1Felicidades por tu nuevo amigo! Antes de que cruce la puerta, deja lista su comida, zona de descanso y seguridad.</p>
        </a>`;

if (html.includes(old1)) {
    html = html.replace(old1, new1);
    console.log('Card 1 replaced OK');
} else {
    console.log('WARNING: Card 1 NOT found!');
}

/* ---- 3. Replace Blog Post 2 ---- */
const old2 = `<a href="/blog-vetis/" class="group block mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="200">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] mb-6 relative">
                <img src="https://vetisdigital.com/wp-content/uploads/2026/03/blog_cat_sleeping_1773871257989.jpg" alt="Gato durmiendo tranquilamente" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-deep-green shadow-sm">Comportamiento Felino</div>
                <div class="absolute bottom-4 left-4 transition-all duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 text-deep-green font-bold text-sm shadow-sm">Seguir leyendo <span class="material-symbols-outlined text-[16px]">arrow_forward</span></div>
            </div>
            <p class="text-sm font-medium text-slate-500 mb-3">7 de Febrero, 2026</p>
            <h3 class="text-2xl lg:text-[28px] font-bold text-deep-green dark:text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">\u00bfTu gato duerme contigo? Lo que puede estar diciendo ese h\u00e1bito</h3>
            <p class="text-slate-600 dark:text-slate-400 text-lg line-clamp-2">Descubre qu\u00e9 significa que tu gato busque dormir cerca de ti y qu\u00e9 revela sobre su confianza, rutina y...</p>
        </a>`;

const new2 = `<a href="https://vetisdigital.com/por-que-mi-perro-me-sigue-a-todas-partes/" class="group block mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="200">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] mb-6 relative">
                <img src="https://vetisdigital.com/wp-content/uploads/2026/03/perro-velcro-destacada.jpg" alt="Perro relajado en su cama manteniendo una distancia saludable con su due\u00f1o en casa." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-deep-green shadow-sm">Conducta</div>
                <div class="absolute bottom-4 left-4 transition-all duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 text-deep-green font-bold text-sm shadow-sm">Seguir leyendo <span class="material-symbols-outlined text-[16px]">arrow_forward</span></div>
            </div>
            <p class="text-sm font-medium text-slate-500 mb-3">24 de Marzo, 2026</p>
            <h3 class="text-2xl lg:text-[28px] font-bold text-deep-green dark:text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">\u00bfPor qu\u00e9 mi perro me sigue a todas partes? Entiende a tu "perro velcro"</h3>
            <p class="text-slate-600 dark:text-slate-400 text-lg line-clamp-2">\u00bfTu perro no se te despega ni un segundo? Aprende a distinguir entre el afecto natural y la ansiedad, y descubre c\u00f3mo ayudarlo a sentirse seguro incluso cuando no est\u00e1s a su lado.</p>
        </a>`;

if (html.includes(old2)) {
    html = html.replace(old2, new2);
    console.log('Card 2 replaced OK');
} else {
    console.log('WARNING: Card 2 NOT found!');
}

/* ---- 4. Replace Blog Post 3 ---- */
const old3 = `<a href="/blog-vetis/" class="group block w-full md:w-[60%] lg:w-[50%]" data-aos="fade-up" data-aos-delay="300">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] mb-6 relative">
                <img src="https://vetisdigital.com/wp-content/uploads/2026/03/blog_dog_walking_single_non_golden_1773871553686.jpg" alt="Perro paseando con su tutor" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-deep-green shadow-sm">Vida diaria / Convivencia</div>
                <div class="absolute bottom-4 left-4 transition-all duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 text-deep-green font-bold text-sm shadow-sm">Seguir leyendo <span class="material-symbols-outlined text-[16px]">arrow_forward</span></div>
            </div>
            <p class="text-sm font-medium text-slate-500 mb-3">15 de Marzo, 2026</p>
            <h3 class="text-2xl lg:text-[28px] font-bold text-deep-green dark:text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">5 errores comunes al pasear a tu perro sin darte cuenta</h3>
            <p class="text-slate-600 dark:text-slate-400 text-lg line-clamp-2">Desde la tensi\u00f3n de la correa hasta los paseos sin estructura: revisa los fallos m\u00e1s comunes y c\u00f3mo...</p>
        </a>`;

const new3 = `<a href="https://vetisdigital.com/por-que-mi-gato-duerme-conmigo-significado/" class="group block w-full md:w-[60%] lg:w-[50%]" data-aos="fade-up" data-aos-delay="300">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] mb-6 relative">
                <img src="https://vetisdigital.com/wp-content/uploads/2026/03/gato_relajado_cama_1774399885182.jpg" alt="Gato descansando relajado en la cama" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-deep-green shadow-sm">Gatos</div>
                <div class="absolute bottom-4 left-4 transition-all duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 text-deep-green font-bold text-sm shadow-sm">Seguir leyendo <span class="material-symbols-outlined text-[16px]">arrow_forward</span></div>
            </div>
            <p class="text-sm font-medium text-slate-500 mb-3">25 de Marzo, 2026</p>
            <h3 class="text-2xl lg:text-[28px] font-bold text-deep-green dark:text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">\u00bfTu gato duerme contigo? Entiende qu\u00e9 significa y c\u00f3mo mejora vuestro v\u00ednculo</h3>
            <p class="text-slate-600 dark:text-slate-400 text-lg line-clamp-2">Tu gato no te elige para dormir solo por comodidad. Entiende los instintos de seguridad y el v\u00ednculo de confianza que lo llevan a tu cama, y c\u00f3mo organizar vuestro descanso compartido.</p>
        </a>`;

if (html.includes(old3)) {
    html = html.replace(old3, new3);
    console.log('Card 3 replaced OK');
} else {
    console.log('WARNING: Card 3 NOT found!');
}

/* ---- 5. Make button visible on all devices ---- */
if (html.includes('<div class="mt-8 text-center md:hidden">')) {
    html = html.replace('<div class="mt-8 text-center md:hidden">', '<div class="mt-12 text-center">');
    console.log('Button visibility fixed OK');
} else {
    console.log('WARNING: Button class NOT found!');
}

/* ---- Save the file (preserving \n, WordPress doesn't care) ---- */
fs.writeFileSync(filePath, html, 'utf8');
console.log('\nindex.html saved. Now uploading to WordPress...');

/* ---- 6. Minify and Upload to WordPress ---- */
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
        console.log('WordPress page 199 updated successfully!');
    } else {
        console.error('WordPress error:', JSON.stringify(data).substring(0, 500));
    }
})
.catch(err => console.error('Fetch error:', err));
