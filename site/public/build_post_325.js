const fs = require('fs');

const refFile = 'C:/Users/Lucianovm.MSI/.gemini/antigravity/brain/446d3d38-831f-472d-9578-e469ba0b2685/.system_generated/steps/91/output.txt';
const refText = fs.readFileSync(refFile, 'utf8');

// Find the HTML structure starting with '<!-- Vetis Global Styles'
const htmlStartIndex = refText.indexOf('<!-- Vetis Global Styles');
const htmlSource = refText.slice(htmlStartIndex);

// Replace '<br />' added by WP get post text tool if any, and '<p>' tags around HTML comments
let cleanHtml = htmlSource.replace(/<br \/>/g, '').replace(/<p>|<\/p>/g, '');

const articleStart = cleanHtml.indexOf('<article class=\"max-w-4xl');
const articleEnd = cleanHtml.indexOf('</article>') + '</article>'.length;

const headerPart = cleanHtml.slice(0, articleStart);
let footerPart = cleanHtml.slice(articleEnd);
const mgmtIndex = footerPart.indexOf('## Management');
if (mgmtIndex !== -1) {
    footerPart = footerPart.slice(0, mgmtIndex);
}

const newArticle = `<article class="max-w-4xl mx-auto px-6">
    <!-- Título Principal H1 -->
    <h1 class="text-4xl md:text-5xl lg:text-5xl font-extrabold text-deep-green dark:text-slate-100 mb-8 leading-tight text-center" data-aos="fade-up">
        ¿Tu gato duerme contigo? Lo que este hábito revela sobre su bienestar y confianza
    </h1>

    <!-- Contenido principal con estilos de texto Tailwind fluidos -->
    <div class="text-lg md:text-xl text-slate-700 dark:text-slate-300 space-y-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
        
        <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-10 text-center max-w-3xl mx-auto">
            Si compartes tu cama con un felino, sabes que no hay despertador más efectivo (y a veces pesado) que un gato ronroneando sobre tu almohada.
        </p>

        <div class="mb-10 rounded-3xl overflow-hidden bg-white shadow-2xl">
            <img src="https://vetisdigital.com/wp-content/uploads/2026/03/gato_relajado_cama_1774399885182.jpg" alt="Gato descansando relajado en la cama" class="w-full h-auto" />
        </div>

        <div class="bg-deep-green/5 border-l-4 border-deep-green p-6 md:p-8 rounded-r-2xl mb-12 shadow-sm">
            <div class="text-deep-green dark:text-white font-medium m-0">
                Aunque a menudo se les etiqueta como animales solitarios o distantes, el hecho de que tu gato te elija como compañero de sueño es <strong class="font-bold">una de las mayores demostraciones de confianza</strong> que puede ofrecerte.
            </div>
        </div>

        <p class="mb-8">En la naturaleza, el momento de dormir es cuando un animal es más vulnerable ante posibles peligros. Al buscar tu proximidad, tu gato no solo busca una superficie mullida; está tomando una decisión estratégica basada en la seguridad y el afecto.</p>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            ¿Por qué te elige como compañero de cama?
        </h2>
        <p class="mb-8">Existen razones biológicas y emocionales muy claras detrás de este comportamiento:</p>
        
        <ul class="space-y-6 mb-12">
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
                <div><strong class="text-deep-green dark:text-white font-bold">Regulación de temperatura:</strong> Los gatos tienen una temperatura corporal basal más alta que los humanos (alrededor de 38.5°C). Tu cuerpo actúa como un radiador natural de alta calidad que les permite mantener su calor sin esfuerzo durante el descanso.</div>
            </li>
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
                <div><strong class="text-deep-green dark:text-white font-bold">Seguridad y protección mutua:</strong> Al dormir juntos, el gato te ve como parte de su grupo seguro; si algo ocurriera durante la noche, confía en que estarás ahí para alertarlo, y viceversa.</div>
            </li>
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
                <div><strong class="text-deep-green dark:text-white font-bold">Vínculo y aroma grupal:</strong> El intercambio de olores es fundamental para los felinos. Al mezclar su aroma con el tuyo al dormir cerca, refuerza el sentido de pertenencia a su territorio y grupo familiar.</div>
            </li>
        </ul>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            El significado de su posición preferida
        </h2>
        <p class="mb-8">¿Se tumba en tus pies o prefiere tu cabeza? Cada zona tiene su lógica para ellos:</p>

        <ul class="space-y-6 mb-12">
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div>
                <div><strong class="text-deep-green dark:text-white font-bold">En la cabeza:</strong> Es la zona que menos movemos al dormir, lo que les da estabilidad. Además, es por donde perdemos más temperatura, ofreciéndoles un excelente foco de calor.</div>
            </li>
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div>
                <div><strong class="text-deep-green dark:text-white font-bold">En los pies:</strong> Indica que quiere estar cerca de ti, pero prefiere mantener una vía de escape rápida y libre por si algo ocurre, o para evitar que lo despiertes si das muchas vueltas al dormir.</div>
            </li>
        </ul>

        <div class="mb-16 rounded-3xl overflow-hidden shadow-2xl bg-white relative">
            <img src="https://vetisdigital.com/wp-content/uploads/2026/03/gato_durmiendo_cerca_almohada_1774399871933.jpg" alt="Gato buscando calor y estabilidad cerca de la cabeza de su tutor" class="w-full h-auto" />
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            Apego sano vs. Señales de alerta
        </h2>
        <p class="mb-8">Es vital distinguir entre un gato que disfruta de tu compañía de forma natural y uno que podría estar enviando señales sutiles de malestar.</p>

        <div class="grid md:grid-cols-2 gap-8 mb-16">
            <div class="bg-white dark:bg-slate-900 border border-deep-green/10 rounded-3xl p-8 shadow-sm">
                <h3 class="text-2xl font-bold text-deep-green dark:text-white mb-6 flex items-center gap-3">
                    <span class="material-symbols-outlined text-accent-gold">check_circle</span> Apego Sano
                </h3>
                <ul class="space-y-4">
                    <li class="flex items-start gap-3"><span class="text-accent-gold mt-1 text-sm shrink-0">▶</span> <div>Se muestra relajado, amasa antes de tumbarse y ronronea antes de dormir.</div></li>
                    <li class="flex items-start gap-3"><span class="text-accent-gold mt-1 text-sm shrink-0">▶</span> <div>Puede dormir solo en otras zonas de la casa (como repisas o cajas) sin mostrar necesidad de buscarte.</div></li>
                    <li class="flex items-start gap-3"><span class="text-accent-gold mt-1 text-sm shrink-0">▶</span> <div>Mantiene sus rutinas de juego, acicalamiento y alimentación de forma completamente normal.</div></li>
                </ul>
            </div>
            
            <div class="bg-white dark:bg-slate-900 border border-red-500/20 rounded-3xl p-8 shadow-sm">
                <h3 class="text-2xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-3">
                    <span class="material-symbols-outlined text-red-500">warning</span> Señales de Alerta
                </h3>
                <ul class="space-y-4">
                    <li class="flex items-start gap-3"><span class="text-red-500 mt-1 text-sm shrink-0">▶</span> <div><strong>Cambio repentino:</strong> Si antes no dormía contigo y empieza a hacerlo frenéticamente, o si se esconde constantemente para dormir solo, podría haber estrés o dolor oculto.</div></li>
                    <li class="flex items-start gap-3"><span class="text-red-500 mt-1 text-sm shrink-0">▶</span> <div><strong>Letargia:</strong> Si el gato duerme muchas horas más de lo habitual y se muestra sin energía para jugar.</div></li>
                    <li class="flex items-start gap-3"><span class="text-red-500 mt-1 text-sm shrink-0">▶</span> <div><strong>Inseguridad severa:</strong> Si no puede relajarse en ningún momento ni dormir si tú no estás presente en la habitación.</div></li>
                </ul>
            </div>
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            Consejos prácticos para un descanso compartido perfecto
        </h2>
        <p class="mb-8">Dormir con tu gato tiene múltiples <a href="https://vetisdigital.com/adios-ansiedad-por-separacion/" class="text-accent-gold hover:underline font-medium">beneficios emocionales</a> porque reduce el estrés y mejora el ánimo, pero requiere un poco de organización nocturna:</p>

        <div class="bg-accent-gold/5 rounded-3xl p-8 md:p-12 mb-16 border border-accent-gold/20 relative overflow-hidden">
            <ul class="space-y-8 relative z-10">
                <li class="flex items-start gap-4">
                    <div class="text-accent-gold mt-1 shrink-0"><span class="material-symbols-outlined">filter_1</span></div>
                    <div><strong class="text-deep-green dark:text-white font-bold">Prioriza la higiene:</strong> Mantén siempre sus desparasitaciones al día, cepilla a tu gato frecuentemente y es recomendable revisar/limpiar sus patas suavemente tras usar su arenero.</div>
                </li>
                <li class="flex items-start gap-4">
                    <div class="text-accent-gold mt-1 shrink-0"><span class="material-symbols-outlined">filter_2</span></div>
                    <div><strong class="text-deep-green dark:text-white font-bold">Crea alternativas atractivas:</strong> Proporciónale zonas de descanso elevadas o camas mullidas tipo "cueva" en la misma habitación. Así tendrá siempre una opción para estar cerca sin necesidad de ocupar tu espacio vital.</div>
                </li>
                <li class="flex items-start gap-4">
                    <div class="text-accent-gold mt-1 shrink-0"><span class="material-symbols-outlined">filter_3</span></div>
                    <div><strong class="text-deep-green dark:text-white font-bold">Rutina de juego nocturna:</strong> Los gatos son crepusculares. Jugar con él intensamente 15-20 minutos antes de dormir le ayudará a descargar energía remanente y le facilitará sincronizar su ciclo de sueño contigo, evitando carreras de madrugada.</div>
                </li>
            </ul>
        </div>

        <div class="mb-16 mt-12 rounded-3xl overflow-hidden shadow-2xl bg-white">
            <img src="https://vetisdigital.com/wp-content/uploads/2026/03/cama_gato_rincon_1774399900819.jpg" alt="Cama para gatos acogedora y elevada en un rincón tranquilo del dormitorio" class="w-full h-auto" />
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            Un vínculo basado en la calma
        </h2>
        <p class="mb-8">Respetar los tiempos de sueño intrínsecos de tu gato y ofrecerle un entorno tranquilo es la base para criar a un felino feliz y equilibrado. Dormir juntos no es simplemente compartir un mueble de la casa, es en realidad reforzar, cada noche, el inmenso <strong class="text-deep-green dark:text-white font-bold">pacto de confianza</strong> que os mantendrá unidos de por vida.</p>

        <!-- FAQ -->
        <div class="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mb-10 text-center">
                Preguntas Frecuentes (FAQ)
            </h2>
            <div class="grid gap-6 md:grid-cols-2">
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Es malo que mi gato duerma conmigo?</h3>
                    <p class="text-slate-600 dark:text-slate-400">No, siempre que se mantenga una excelente higiene en ambos y los dos logréis descansar bien. Es una muestra de vínculo irrompible y científicamente reduce el estrés.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Por qué mi gato me amasa antes de acostarse?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Es un instinto que conservan de cuando eran cachorros (para estimular la leche materna). Amasar significa que se siente seguro, cómodo y feliz contigo alrededor.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Qué hago si mi gato me despierta de noche?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Jamás le des atención (ni alimento ni caricias) cuando ocurra. Establece una buena rutina de juego nocturno intenso y dásela justo antes de que vayas a la cama.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Mi gato duerme conmigo porque tiene miedo?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Ocasionalmente podrían buscarte para evitar ruidos o visitas inesperadas, pero el 90% del tiempo lo hacen netamente por afecto social y confort térmico.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Es normal que mi gato adulto duerma tanto?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Absolutamente. Los gatos en etapa adulta pueden dormir entre 12 y 16 horas diarias por pauta natural. Lo crucial es que cuando despierte esté activo y alerta.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Por qué mi gato ya no quiere dormir conmigo?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Puede deberse al calor del ambiente, cambios en tu ropa de cama o que encontró un rincón nuevo favorito. Si notas apatía grave y falta de apetito, habla con tu veterinario con urgencia.</p>
                </div>
            </div>
        </div>

        <!-- CTA -->
        <div class="mt-20 bg-deep-green text-center p-10 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-deep-green via-deep-green to-slate-900 opacity-90 z-0"></div>
            <!-- Decoración -->
            <div class="absolute -top-24 -right-24 bg-accent-gold/10 w-64 h-64 rounded-full blur-3xl group-hover:bg-accent-gold/20 transition-all duration-700"></div>
            <div class="relative z-10 max-w-2xl mx-auto">
                <h3 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    ¿Sientes que tu gato tiene comportamientos que aún no logras descifrar?
                </h3>
                <p class="text-white/80 text-lg md:text-xl mb-10 leading-relaxed font-light">
                    Entender su enigmático lenguaje es el primer paso vital para tener una convivencia con armonía total. En nuestra guía <strong class="text-white">"Entiende a tu Gato"</strong>, profundizamos en sus instintos reales y te enseñamos cómo crear el entorno más perfecto posible para las necesidades de él.
                </p>
                <a href="#" class="inline-flex items-center justify-center gap-3 bg-accent-gold text-deep-green font-bold text-lg px-8 py-5 rounded-full hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-accent-gold/20">
                    Descubre el mundo secreto de tu felino <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
            </div>
        </div>

    </div>
</article>`;

const fullPostHtml = headerPart + newArticle + footerPart;
fs.writeFileSync('C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/temp_post_325.html', fullPostHtml);
console.log('Successfully generated HTML payload.');
