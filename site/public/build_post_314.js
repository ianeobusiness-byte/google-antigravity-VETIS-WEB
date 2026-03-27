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
        ¿Por qué mi perro me sigue a todas partes? Entiende a tu "perro velcro"
    </h1>

    <!-- Contenido principal con estilos de texto Tailwind fluidos -->
    <div class="text-lg md:text-xl text-slate-700 dark:text-slate-300 space-y-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
        
        <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-10 text-center max-w-3xl mx-auto">
            Para muchos de nosotros, no hay nada más tierno que un perro que nos espera detrás de la puerta o que busca echarse siempre cerca de nuestros pies.
        </p>

        <div class="mb-10 rounded-3xl overflow-hidden shadow-2xl bg-white">
            <img src="https://vetisdigital.com/wp-content/uploads/2026/03/perro-siguiendo-dueno-casa.jpg" alt="Un perro mirando con atención a su tutor mientras este camina por un pasillo" class="w-full h-auto" />
        </div>

        <div class="bg-deep-green/5 border-l-4 border-deep-green p-6 md:p-8 rounded-r-2xl mb-12 shadow-sm">
            <div class="text-deep-green dark:text-white font-medium m-0">
                Sin embargo, cuando tu perro se convierte en tu "sombra" constante y no puede estar en una habitación distinta a la tuya, es normal preguntarse qué está pasando por su cabeza. <strong class="font-bold">Entender por qué ocurre este comportamiento</strong> es clave para que tu mascota viva sin estrés y para que tú recuperes un poco de espacio personal.
            </div>
        </div>

        <p class="mb-8">Los perros son animales sociales que, por instinto, buscan la seguridad de su grupo. Pero a veces, ese seguimiento constante nace de una inseguridad que debemos gestionar.</p>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            ¿Amor real o dependencia excesiva?
        </h2>
        <p class="mb-8">Lo primero es identificar si ese seguimiento es una muestra de afecto o si tu perro está sufriendo. No es lo mismo un perro que disfruta estar cerca de ti que uno que necesita estarlo para no entrar en pánico.</p>

        <h3 class="text-2xl font-bold text-deep-green dark:text-white mt-8 mb-4">Apego Sano</h3>
        <ul class="space-y-6 mb-12">
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
                <div>Te sigue a veces, pero puede quedarse durmiendo si tú cambias de habitación.</div>
            </li>
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
                <div>Sabe entretenerse solo con sus juguetes o mordedores.</div>
            </li>
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
                <div>Si cierras una puerta, espera tranquilo o se va a su cama sin llorar.</div>
            </li>
        </ul>

        <h3 class="text-2xl font-bold text-deep-green dark:text-white mt-8 mb-4">Ansiedad por Separación</h3>
        <ul class="space-y-6 mb-12">
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
                <div>Te sigue de forma compulsiva y rara vez se relaja si te pierde de vista.</div>
            </li>
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
                <div>Muestra signos de angustia (llanto, jadeo, inquietud) antes de que salgas de casa.</div>
            </li>
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
                <div>Es incapaz de comer o jugar si no estás presente.</div>
            </li>
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>
                <div>Al volver a casa, su saludo es excesivamente excitado y le cuesta mucho calmarse.</div>
            </li>
        </ul>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            Por qué tu perro se ha vuelto tu sombra
        </h2>
        
        <ul class="space-y-6 mb-12">
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div>
                <div><strong class="text-deep-green dark:text-white font-bold">Refuerzo por atención:</strong> Sin querer, muchas veces premiamos que nos sigan. Si cada vez que tu perro se acerca le das una caricia o le hablas, él aprende que seguirte "paga" con atención.</div>
            </li>
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div>
                <div><strong class="text-deep-green dark:text-white font-bold">Búsqueda de seguridad:</strong> Los perros dependen de nosotros para casi todo. Algunos perros, especialmente los más inseguros o los que han pasado por cambios bruscos, te siguen para monitorear tus movimientos y sentirse protegidos.</div>
            </li>
            <li class="flex items-start gap-4">
                <div class="text-accent-gold mt-1 shrink-0"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div>
                <div><strong class="text-deep-green dark:text-white font-bold">Perros mayores:</strong> En perros senior, el seguimiento puede aumentar si están perdiendo visión o audición, o si sufren de disfunción cognitiva, buscando en ti una guía para no sentirse desorientados.</div>
            </li>
        </ul>

        <div class="mb-16 rounded-3xl overflow-hidden shadow-2xl bg-white">
            <img src="https://vetisdigital.com/wp-content/uploads/2026/03/perro-mirando-puerta-bano.jpg" alt="Perro esperando pacientemente fuera de una puerta cerrada" class="w-full h-auto" />
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            Cómo fomentar la independencia (Acciones para hoy mismo)
        </h2>
        <p class="mb-8">Ayudar a tu perro a ser más independiente no significa quererlo menos; significa darle las herramientas para que sea un animal más seguro de sí mismo.</p>

        <div class="bg-accent-gold/5 rounded-3xl p-8 md:p-12 mb-16 border border-accent-gold/20 relative overflow-hidden">
            <ul class="space-y-8 relative z-10">
                <li class="flex items-start gap-4">
                    <div class="text-accent-gold mt-1 shrink-0"><span class="material-symbols-outlined">filter_1</span></div>
                    <div><strong class="text-deep-green dark:text-white font-bold">Entrena el comando "Settle" (A tu sitio):</strong> No dejes que se tumbe siempre donde tú estás. Enséñale a ir a su cama o a un tapete específico usando premios sabrosos. El objetivo es que aprenda a relajarse en su propio espacio mientras tú te mueves por la casa.</div>
                </li>
                <li class="flex items-start gap-4">
                    <div class="text-accent-gold mt-1 shrink-0"><span class="material-symbols-outlined">filter_2</span></div>
                    <div><strong class="text-deep-green dark:text-white font-bold">Ignora el seguimiento constante:</strong> Si tu perro se levanta cada vez que tú lo haces, no lo mires ni le hables. Simplemente camina hacia donde ibas. Si al llegar a tu destino él decide echarse tranquilo lejos de ti, ve y dale un premio de forma calmada. Queremos que aprenda que la tranquilidad se premia, no el "perseguirte".</div>
                </li>
                <li class="flex items-start gap-4">
                    <div class="text-accent-gold mt-1 shrink-0"><span class="material-symbols-outlined">filter_3</span></div>
                    <div><strong class="text-deep-green dark:text-white font-bold">Crea una rutina predecible:</strong> La ansiedad baja cuando el perro sabe qué esperar. Establece horarios claros para comer, pasear y jugar. Esto le da seguridad y le ayuda a entender que hay momentos para estar juntos y momentos para que él descanse solo.</div>
                </li>
                <li class="flex items-start gap-4">
                    <div class="text-accent-gold mt-1 shrink-0"><span class="material-symbols-outlined">filter_4</span></div>
                    <div><strong class="text-deep-green dark:text-white font-bold">Usa juguetes de ocupación:</strong> Dale algo que hacer que no te involucre a ti. Los juguetes rellenables con comida o las alfombras de olfato son ideales para que se concentre en una actividad independiente y positiva.</div>
                </li>
            </ul>
        </div>

        <div class="mb-16 mt-12 rounded-3xl overflow-hidden shadow-2xl bg-white">
            <img src="https://vetisdigital.com/wp-content/uploads/2026/03/perro-jugando-solo-juguete-rellenable.jpg" alt="Perro concentrado jugando de forma independiente en su cama" class="w-full h-auto" />
        </div>

        <div class="bg-deep-green/5 border-l-4 border-deep-green p-6 md:p-8 mb-16 text-deep-green dark:text-slate-300 rounded-r-2xl font-medium">
            <strong class="font-bold border-b border-accent-gold">Un consejo final:</strong> Si notas que tu perro muestra un pánico real, destruye objetos o se autolesiona cuando no puede estar contigo, es muy importante que no intentes solucionarlo solo con castigos, ya que esto aumentará su miedo. En estos casos, lo ideal es consultar con un especialista en comportamiento o un veterinario para descartar problemas mayores.
        </div>

        <!-- FAQ -->
        <div class="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mb-10 text-center">
                Preguntas Frecuentes (FAQ)
            </h2>
            <div class="grid gap-6 md:grid-cols-2">
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Por qué mi perro me sigue hasta al baño?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Para ellos no existe el concepto de privacidad; simplemente quieren estar cerca de su fuente de seguridad y recursos.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Es malo que mi perro sea mi "sombra"?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Solo si no sabe estar solo. Si tu ausencia le genera angustia, es un problema de bienestar que debes trabajar.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Mi perro me sigue para protegerme?</h3>
                    <p class="text-slate-600 dark:text-slate-400">A veces es instinto, pero en la mayoría de los casos domésticos, te sigue porque tú eres quien le proporciona seguridad y estímulos positivos.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Por qué mi cachorro no se me despega?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Los cachorros necesitan aprender a tener "tiempo a solas" gradualmente. Es vital no estar con ellos el 100% del tiempo para prevenir la ansiedad futura.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Qué hago si mi perro llora cuando cambio de habitación?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Empieza por periodos muy cortos de separación (segundos) y prémialo solo cuando esté en silencio. Aumenta el tiempo muy poco a poco.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿A los perros mayores les pasa más?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Sí, debido al deterioro de sus sentidos, pueden sentirse más vulnerables y buscarte constantemente para orientarse.</p>
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
                    ¿Sientes que tu perro no puede vivir sin ti?
                </h3>
                <p class="text-white/80 text-lg md:text-xl mb-10 leading-relaxed font-light">
                    En Vetis Digital sabemos que un perro seguro es un perro feliz. Por eso hemos creado la guía <strong class="text-white">"Adiós a la Ansiedad por Separación"</strong>, donde aprenderás paso a paso cómo transformar ese hiperapego en una confianza sólida.
                </p>
                <a href="https://vetisdigital.com/adios-ansiedad-por-separacion/" class="inline-flex items-center justify-center gap-3 bg-accent-gold text-deep-green font-bold text-lg px-8 py-5 rounded-full hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-accent-gold/20">
                    Ayuda a tu mejor amigo hoy <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
            </div>
        </div>

    </div>
</article>`;

const fullPostHtml = headerPart + newArticle + footerPart;
fs.writeFileSync('C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/temp_post_314.html', fullPostHtml);
console.log('Successfully generated HTML payload.');
