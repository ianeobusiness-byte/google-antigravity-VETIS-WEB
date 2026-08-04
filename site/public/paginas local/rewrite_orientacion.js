const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'orientacion-online.html');
let content = fs.readFileSync(targetFile, 'utf8');

// The new main content
const newMain = `<main>

<!-- Hero Section -->
<section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background-light">
    <!-- Glowing orbs -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-[-100px] w-[600px] h-[600px] bg-deep-green/10 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center py-32 mt-10">
        <span class="inline-flex items-center gap-2 bg-deep-green/5 border border-deep-green/10 text-deep-green text-xs font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-8 shadow-sm" data-aos="fade-down">
            <span class="material-symbols-outlined text-[16px] text-accent-gold" style="font-variation-settings: 'FILL' 1;">video_chat</span>
            Orientación profesional
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-deep-green mb-6 leading-tight" data-aos="fade-up">
            Bienestar a medida para tu <em class="text-accent-gold italic">perro o gato</em>
        </h1>
        <p class="text-lg lg:text-xl text-slate-600 mx-auto leading-relaxed font-light mb-10 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            Sesiones online educativas y preventivas con la Dra. Micaela Callejas. Recibe apoyo personalizado para mejorar la convivencia diaria y el cuidado de tu mascota.
        </p>
        <a href="#sesiones" class="inline-flex items-center gap-3 px-10 py-4 bg-deep-green text-white font-bold tracking-wide rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-deep-green/20 transition-all text-lg" data-aos="fade-up" data-aos-delay="200">
            Ver tipos de sesión
            <span class="material-symbols-outlined text-[22px] text-accent-gold">arrow_downward</span>
        </a>
    </div>
</section>

<!-- About the Professional -->
<section class="py-20 lg:py-28 relative bg-white">
    <div class="max-w-6xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Text -->
            <div data-aos="fade-right" class="order-2 lg:order-1">
                <span class="text-accent-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Quién te orienta</span>
                <h2 class="text-3xl lg:text-5xl font-bold text-deep-green mb-4 leading-tight">Dra. Micaela Callejas</h2>
                <div class="h-1 w-20 bg-accent-gold mb-6"></div>
                <p class="text-slate-500 font-medium text-lg mb-6">Médica Veterinaria — Bienestar Animal</p>
                <div class="space-y-4 text-slate-600 font-light leading-relaxed text-[16px]">
                    <p>Micaela es la profesional detrás de las orientaciones online de Vetis Digital. Con su formación en Medicina Veterinaria y su enfoque integral, acompaña a tutores de perros y gatos que buscan comprender en profundidad las necesidades de sus mascotas.</p>
                    <p>A través de sesiones uno a uno, entrega herramientas prácticas para mejorar la convivencia diaria, resolver dudas frecuentes sobre cuidados generales, alimentación y promover hábitos realmente saludables.</p>
                </div>
                <div class="flex flex-wrap gap-3 mt-8">
                    <span class="inline-flex items-center gap-2 bg-background-light border border-deep-green/5 text-deep-green/80 text-sm font-semibold px-4 py-2 rounded-lg shadow-sm">
                        <span class="material-symbols-outlined text-accent-gold text-[18px]">school</span> Medicina Veterinaria
                    </span>
                    <span class="inline-flex items-center gap-2 bg-background-light border border-deep-green/5 text-deep-green/80 text-sm font-semibold px-4 py-2 rounded-lg shadow-sm">
                        <span class="material-symbols-outlined text-accent-gold text-[18px]" style="font-variation-settings: 'FILL' 1;">favorite</span> Enfoque Preventivo
                    </span>
                </div>
            </div>
            <!-- Photo -->
            <div class="relative order-1 lg:order-2" data-aos="fade-left">
                <div class="absolute -inset-4 bg-accent-gold/20 rounded-3xl blur-lg transform -rotate-3"></div>
                <div class="relative overflow-hidden rounded-3xl shadow-2xl shadow-deep-green/20 border-4 border-white">
                    <img src="assets/miki.webp" alt="Dra. Micaela Callejas — Médica Veterinaria" class="w-full h-auto object-cover aspect-[4/5] transform hover:scale-105 transition-transform duration-700" />
                </div>
                <!-- Decorative badge -->
                <div class="absolute -bottom-6 -left-6 lg:-left-10 bg-white border border-accent-gold/20 text-deep-green px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
                    <span class="material-symbols-outlined text-[28px] text-accent-gold" style="font-variation-settings: 'FILL' 1;">verified</span>
                    <span class="text-sm font-bold tracking-wide">Profesional<br/>Certificada</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services / Pricing Cards -->
<section id="sesiones" class="py-20 lg:py-32 relative bg-background-light overflow-hidden">
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-deep-green/5 rounded-full blur-[100px] pointer-events-none"></div>
    
    <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="text-center mb-20">
            <span class="text-accent-gold font-bold tracking-[0.25em] uppercase text-xs mb-4 block" data-aos="fade-down">Nuestras sesiones</span>
            <h2 class="text-4xl lg:text-5xl font-bold text-deep-green mb-6">Elige tu tipo de orientación</h2>
            <p class="text-slate-600 font-light max-w-xl mx-auto text-lg">Sesiones online personalizadas y enfocadas al 100% en las necesidades individuales de tu perro o gato.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <!-- Card 1: Orientación Completa -->
            <div class="bg-white p-8 lg:p-12 rounded-3xl border border-deep-green/10 shadow-xl hover:shadow-2xl transition-all duration-500 relative flex flex-col h-full group" data-aos="fade-up" data-aos-delay="100">
                <div class="w-16 h-16 rounded-2xl bg-background-light border border-deep-green/10 flex items-center justify-center text-deep-green mb-8 group-hover:scale-110 transition-transform duration-300">
                    <span class="material-symbols-outlined text-3xl text-accent-gold" style="font-variation-settings: 'FILL' 1;">video_chat</span>
                </div>
                <h3 class="text-2xl font-bold text-deep-green mb-2">Orientación Completa</h3>
                <p class="text-accent-gold text-sm font-bold mb-6 flex items-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">schedule</span> 45 minutos de sesión
                </p>
                <p class="text-slate-600 font-light mb-8 flex-grow leading-relaxed">Ideal para revisar el caso particular de tu mascota, resolver dudas específicas y diseñar pautas claras de bienestar.</p>
                <div class="mb-8 flex items-baseline gap-1">
                    <span class="text-5xl font-black text-deep-green">$30</span>
                    <span class="text-slate-400 text-lg font-semibold">USD</span>
                </div>
                <ul class="space-y-4 mb-10 text-slate-600 font-light text-sm border-t border-slate-100 pt-8">
                    <li class="flex items-center gap-3"><span class="material-symbols-outlined text-accent-gold text-[18px]" style="font-variation-settings: 'FILL' 1;">check_circle</span> 1 sesión de 45 minutos online</li>
                    <li class="flex items-center gap-3"><span class="material-symbols-outlined text-accent-gold text-[18px]" style="font-variation-settings: 'FILL' 1;">check_circle</span> Diagnóstico inicial de rutinas</li>
                    <li class="flex items-center gap-3"><span class="material-symbols-outlined text-accent-gold text-[18px]" style="font-variation-settings: 'FILL' 1;">check_circle</span> Pautas personalizadas de bienestar</li>
                </ul>
                <div class="mt-auto">
                    <a href="#proximamente" class="w-full inline-flex justify-center items-center gap-3 px-8 py-4 bg-background-light border border-deep-green/10 text-deep-green font-bold tracking-wide rounded-2xl hover:bg-deep-green hover:text-white transition-all duration-300">
                        Agendar sesión <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </a>
                </div>
            </div>

            <!-- Card 2: Pack Acompañamiento -->
            <div class="bg-deep-green p-8 lg:p-12 rounded-3xl shadow-2xl relative flex flex-col h-full group overflow-hidden transform md:-translate-y-4" data-aos="fade-up" data-aos-delay="200">
                <div class="absolute -top-24 -right-24 w-72 h-72 bg-accent-gold/20 rounded-full blur-[70px] pointer-events-none"></div>
                <!-- Best value badge -->
                <div class="absolute top-0 right-8 bg-accent-gold text-deep-green text-[11px] font-black tracking-widest uppercase px-5 py-2 rounded-b-xl shadow-lg">
                    RECOMENDADO
                </div>
                
                <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-accent-gold mb-8 group-hover:scale-110 transition-transform duration-300">
                    <span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">forum</span>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Pack Acompañamiento</h3>
                <p class="text-accent-gold text-sm font-bold mb-6 flex items-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">calendar_month</span> 2 sesiones de 45 min
                </p>
                <p class="text-white/70 font-light mb-8 flex-grow leading-relaxed">Opción recomendada para hacer un seguimiento real, evaluar la evolución y ajustar las pautas según los resultados de la mascota.</p>
                <div class="mb-8 flex items-baseline gap-2">
                    <span class="text-5xl font-black text-white">$50</span>
                    <span class="text-white/50 text-lg font-semibold">USD</span>
                    <span class="ml-3 text-xs text-deep-green font-bold bg-accent-gold px-3 py-1 rounded-lg">AHORRAS $10 USD</span>
                </div>
                <ul class="space-y-4 mb-10 text-white/80 font-light text-sm border-t border-white/10 pt-8">
                    <li class="flex items-center gap-3"><span class="material-symbols-outlined text-accent-gold text-[18px]" style="font-variation-settings: 'FILL' 1;">check_circle</span> 2 sesiones por videollamada</li>
                    <li class="flex items-center gap-3"><span class="material-symbols-outlined text-accent-gold text-[18px]" style="font-variation-settings: 'FILL' 1;">check_circle</span> Seguimiento a los 15-30 días</li>
                    <li class="flex items-center gap-3"><span class="material-symbols-outlined text-accent-gold text-[18px]" style="font-variation-settings: 'FILL' 1;">check_circle</span> Ajuste de pautas e indicaciones extras</li>
                </ul>
                <div class="mt-auto">
                    <a href="#proximamente" class="w-full inline-flex justify-center items-center gap-3 px-8 py-4 bg-accent-gold text-deep-green font-bold tracking-wide rounded-2xl hover:bg-white transition-all duration-300 shadow-xl shadow-black/20">
                        Agendar pack <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Important Disclaimer Section -->
<section class="py-20 bg-white relative">
    <div class="max-w-5xl mx-auto px-6" data-aos="fade-up">
        <div class="relative bg-gradient-to-br from-background-light to-white border border-accent-gold/20 rounded-[2rem] p-8 lg:p-14 shadow-lg overflow-hidden group hover:border-accent-gold/40 transition-colors duration-500">
            <!-- Elegant background accent -->
            <div class="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-accent-gold/5 to-transparent pointer-events-none"></div>
            
            <div class="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div class="w-20 h-20 rounded-full bg-white border border-accent-gold/30 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-500">
                    <span class="material-symbols-outlined text-[36px] text-accent-gold" style="font-variation-settings: 'FILL' 1;">gpp_maybe</span>
                </div>
                <div class="space-y-4 flex-grow">
                    <div class="space-y-2">
                        <span class="text-accent-gold font-bold tracking-[0.2em] uppercase text-xs block">Aviso Legal y Preventivo</span>
                        <h3 class="text-2xl lg:text-3xl font-bold text-deep-green" style="font-family: 'Playfair Display', serif;">
                            Importante sobre la Orientación Online
                        </h3>
                    </div>
                    <p class="text-slate-600 font-light leading-relaxed text-[17px]">
                        La Orientación Online Vetis entrega apoyo <strong class="font-medium text-deep-green">educativo y preventivo</strong> para la calidad de vida de tu mascota. 
                    </p>
                    <div class="bg-deep-green/5 border-l-4 border-accent-gold p-5 rounded-r-xl mt-6">
                        <p class="text-deep-green font-medium text-sm leading-relaxed">
                            Esta orientación <span class="font-bold underline decoration-accent-gold/50 decoration-2">no reemplaza una consulta veterinaria presencial</span>. No se entregan diagnósticos clínicos definitivos, no se prescriben medicamentos y no se atienden urgencias médicas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Topics Covered Section -->
<section class="py-20 lg:py-32 bg-background-light">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-20">
            <span class="text-accent-gold font-bold tracking-[0.25em] uppercase text-xs mb-4 block" data-aos="fade-down">Áreas de orientación</span>
            <h2 class="text-4xl lg:text-5xl font-bold text-deep-green mb-6">Temas que podemos abordar</h2>
            <div class="w-16 h-0.5 bg-accent-gold mx-auto mb-6"></div>
            <p class="text-slate-500 font-light max-w-xl mx-auto">Cada sesión se adapta por completo a las necesidades específicas de tu mascota.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <!-- Topics -->
            <div class="bg-white p-8 rounded-3xl border border-deep-green/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                <div class="w-14 h-14 mx-auto rounded-full bg-background-light flex items-center justify-center text-accent-gold mb-5 group-hover:bg-deep-green group-hover:text-white transition-colors duration-300">
                    <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">health_and_safety</span>
                </div>
                <h3 class="text-deep-green font-bold text-lg mb-2">Cuidados básicos</h3>
                <p class="text-slate-500 text-sm font-light">Vacunas, desparasitaciones y prevención.</p>
            </div>
            
            <div class="bg-white p-8 rounded-3xl border border-deep-green/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                <div class="w-14 h-14 mx-auto rounded-full bg-background-light flex items-center justify-center text-accent-gold mb-5 group-hover:bg-deep-green group-hover:text-white transition-colors duration-300">
                    <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">restaurant</span>
                </div>
                <h3 class="text-deep-green font-bold text-lg mb-2">Alimentación</h3>
                <p class="text-slate-500 text-sm font-light">Tipos de alimento y porciones saludables.</p>
            </div>

            <div class="bg-white p-8 rounded-3xl border border-deep-green/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                <div class="w-14 h-14 mx-auto rounded-full bg-background-light flex items-center justify-center text-accent-gold mb-5 group-hover:bg-deep-green group-hover:text-white transition-colors duration-300">
                    <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">psychology</span>
                </div>
                <h3 class="text-deep-green font-bold text-lg mb-2">Conducta</h3>
                <p class="text-slate-500 text-sm font-light">Comportamiento natural y dudas comunes.</p>
            </div>

            <div class="bg-white p-8 rounded-3xl border border-deep-green/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                <div class="w-14 h-14 mx-auto rounded-full bg-background-light flex items-center justify-center text-accent-gold mb-5 group-hover:bg-deep-green group-hover:text-white transition-colors duration-300">
                    <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">home</span>
                </div>
                <h3 class="text-deep-green font-bold text-lg mb-2">Adaptación</h3>
                <p class="text-slate-500 text-sm font-light">Preparación para el nuevo integrante.</p>
            </div>

            <div class="bg-white p-8 rounded-3xl border border-deep-green/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                <div class="w-14 h-14 mx-auto rounded-full bg-background-light flex items-center justify-center text-accent-gold mb-5 group-hover:bg-deep-green group-hover:text-white transition-colors duration-300">
                    <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">favorite</span>
                </div>
                <h3 class="text-deep-green font-bold text-lg mb-2">Bienestar</h3>
                <p class="text-slate-500 text-sm font-light">Rutinas de juego y estimulación.</p>
            </div>

            <div class="bg-white p-8 rounded-3xl border border-deep-green/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                <div class="w-14 h-14 mx-auto rounded-full bg-background-light flex items-center justify-center text-accent-gold mb-5 group-hover:bg-deep-green group-hover:text-white transition-colors duration-300">
                    <span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">park</span>
                </div>
                <h3 class="text-deep-green font-bold text-lg mb-2">Enriquecimiento</h3>
                <p class="text-slate-500 text-sm font-light">Adaptación de espacios y juguetes.</p>
            </div>
        </div>
    </div>
</section>

<!-- Final CTA Section -->
<section class="py-20 lg:py-28 bg-white">
    <div class="max-w-5xl mx-auto px-6 text-center">
        <div class="bg-deep-green rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl" data-aos="zoom-in">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_60%)]"></div>
            <div class="absolute -top-20 -left-20 w-80 h-80 bg-accent-gold/10 rounded-full blur-[80px]"></div>
            <div class="relative z-10">
                <h2 class="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Dale a tu mascota el cuidado que <em class="text-accent-gold italic">merece</em>
                </h2>
                <p class="text-white/70 font-light max-w-lg mx-auto mb-10 text-lg">
                    Agenda una orientación online y resuelve tus dudas con una profesional comprometida con el bienestar animal.
                </p>
                <a href="#sesiones" class="inline-flex items-center gap-3 px-10 py-4 bg-accent-gold text-deep-green font-bold tracking-wide rounded-xl hover:-translate-y-1 hover:bg-white transition-all shadow-xl text-lg">
                    Agendar orientación online
                    <span class="material-symbols-outlined text-[22px]">arrow_forward</span>
                </a>
                <p class="text-white/40 text-sm mt-8 font-light">Próximamente disponible a través de Hotmart.</p>
            </div>
        </div>
    </div>
</section>

</main>`;

const startIndex = content.indexOf('<main>');
const endIndex = content.indexOf('</main>') + '</main>'.length;
if (startIndex !== -1 && endIndex !== -1) {
    content = content.substring(0, startIndex) + newMain + content.substring(endIndex);
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('Successfully updated orientacion-online.html main content!');
} else {
    console.log('Error: <main> tags not found!');
}
