const fs = require('fs');
const path = require('path');

const targetPath = 'C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/index.html';
let indexHtml = fs.readFileSync(targetPath, 'utf8');

// The new cards based on blog.html
const card1 = `        <!-- Blog Post 1 -->
        <a href="https://vetisdigital.com/que-necesita-tu-primer-perro-el-dia-1-checklist-facil-para-prepararte-bien/" class="group block" data-aos="fade-up" data-aos-delay="100">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] mb-6 relative">
                <img src="https://vetisdigital.com/wp-content/uploads/2026/03/kit-basico-recibir-perro-casa.jpg" alt="Kit básico de bienvenida para el primer perro en casa." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-deep-green shadow-sm">Primeros pasos</div>
                <div class="absolute bottom-4 left-4 transition-all duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 text-deep-green font-bold text-sm shadow-sm">Seguir leyendo <span class="material-symbols-outlined text-[16px]">arrow_forward</span></div>
            </div>
            <p class="text-sm font-medium text-slate-500 mb-3">23 de Marzo, 2026</p>
            <h3 class="text-2xl lg:text-[28px] font-bold text-deep-green dark:text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">Qué necesita tu primer perro el día 1: checklist fácil para prepararte bien</h3>
            <p class="text-slate-600 dark:text-slate-400 text-lg line-clamp-2">¡Felicidades por tu nuevo amigo! Antes de que cruce la puerta, deja lista su comida, zona de descanso y seguridad.</p>
        </a>`;

const card2 = `        <!-- Blog Post 2 -->
        <a href="https://vetisdigital.com/por-que-mi-perro-me-sigue-a-todas-partes/" class="group block mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="200">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] mb-6 relative">
                <img src="https://vetisdigital.com/wp-content/uploads/2026/03/perro-velcro-destacada.jpg" alt="Perro relajado en su cama manteniendo una distancia saludable con su dueño en casa." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-deep-green shadow-sm">Conducta</div>
                <div class="absolute bottom-4 left-4 transition-all duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 text-deep-green font-bold text-sm shadow-sm">Seguir leyendo <span class="material-symbols-outlined text-[16px]">arrow_forward</span></div>
            </div>
            <p class="text-sm font-medium text-slate-500 mb-3">24 de Marzo, 2026</p>
            <h3 class="text-2xl lg:text-[28px] font-bold text-deep-green dark:text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">¿Por qué mi perro me sigue a todas partes? Entiende a tu "perro velcro"</h3>
            <p class="text-slate-600 dark:text-slate-400 text-lg line-clamp-2">¿Tu perro no se te despega ni un segundo? Aprende a distinguir entre el afecto natural y la ansiedad, y descubre cómo ayudarlo a sentirse seguro incluso cuando no estás a su lado.</p>
        </a>`;

const card3 = `        <a href="https://vetisdigital.com/por-que-mi-gato-duerme-conmigo-significado/" class="group block w-full md:w-[60%] lg:w-[50%]" data-aos="fade-up" data-aos-delay="300">
            <div class="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] mb-6 relative">
                <img src="https://vetisdigital.com/wp-content/uploads/2026/03/gato_relajado_cama_1774399885182.jpg" alt="Gato descansando relajado en la cama" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-deep-green shadow-sm">Gatos</div>
                <div class="absolute bottom-4 left-4 transition-all duration-300 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center gap-2 text-deep-green font-bold text-sm shadow-sm">Seguir leyendo <span class="material-symbols-outlined text-[16px]">arrow_forward</span></div>
            </div>
            <p class="text-sm font-medium text-slate-500 mb-3">25 de Marzo, 2026</p>
            <h3 class="text-2xl lg:text-[28px] font-bold text-deep-green dark:text-white mb-3 group-hover:text-accent-gold transition-colors leading-tight">¿Tu gato duerme contigo? Entiende qué significa y cómo mejora vuestro vínculo</h3>
            <p class="text-slate-600 dark:text-slate-400 text-lg line-clamp-2">Tu gato no te elige para dormir solo por comodidad. Entiende los instintos de seguridad y el vínculo de confianza que lo llevan a tu cama, y cómo organizar vuestro descanso compartido.</p>
        </a>`;

// Find Top Row and replace its contents
const topRowStartRegex = /<!-- Top Row: 2 columns -->\s*<div class="grid md:grid-cols-2 gap-8 md:gap-12">([\s\S]*?)<\/div>/;
indexHtml = indexHtml.replace(topRowStartRegex, \`<!-- Top Row: 2 columns -->
    <div class="grid md:grid-cols-2 gap-8 md:gap-12">
\${card1}
\${card2}
    </div>\`);

// Find Bottom Row and replace its contents
const bottomRowRegex = /<!-- Bottom Row: 1 centered column -->\s*<div class="flex justify-center mt-4">([\s\S]*?)<\/div>/;
indexHtml = indexHtml.replace(bottomRowRegex, \`<!-- Bottom Row: 1 centered column -->
    <div class="flex justify-center mt-4">
\${card3}
    </div>\`);

// Fix the "Ver todos los artículos" button
// From: <div class="mt-8 text-center md:hidden">
// To: <div class="mt-12 text-center">
indexHtml = indexHtml.replace('<div class="mt-8 text-center md:hidden">', '<div class="mt-12 text-center">');

// Fix tailwind config inline comments before we upload
indexHtml = indexHtml.replace('"primary": "#ec5b13", // Terracotta', '"primary": "#ec5b13", /* Terracotta */');
indexHtml = indexHtml.replace('"background-light": "#fdfcf9", // Cream/Off-white', '"background-light": "#fdfcf9", /* Cream/Off-white */');

fs.writeFileSync(targetPath, indexHtml, 'utf8');
console.log('Modified index.html successfully!');
