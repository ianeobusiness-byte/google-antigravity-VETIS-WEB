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
        5 errores comunes al pasear a tu perro que arruinan su bienestar (y el tuyo)
    </h1>

    <!-- Contenido principal con estilos de texto Tailwind fluidos -->
    <div class="text-lg md:text-xl text-slate-700 dark:text-slate-300 space-y-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
        
        <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-10 text-center max-w-3xl mx-auto">
            Para la mayoría de los perros, el paseo es el evento principal del día. Es su oportunidad de explorar, socializar y quemar energía. Sin embargo, para muchos tutores, el paseo se convierte en una sesión de tirones, frustración y estrés.
        </p>

        <div class="mb-10 rounded-3xl overflow-hidden bg-white shadow-2xl">
            <img src="https://vetisdigital.com/wp-content/uploads/2026/03/paseo_perro_calma_4.jpg" alt="Perro caminando correctamente con la correa floja junto a su dueño, ejemplificando un paseo sin estrés." class="w-full h-auto" />
        </div>

        <div class="bg-deep-green/5 border-l-4 border-deep-green p-6 md:p-8 rounded-r-2xl mb-12 shadow-sm">
            <div class="text-deep-green dark:text-white font-medium m-0">
                Lo más curioso es que muchos de los problemas que vemos en la calle no son "culpa" del perro, sino de pequeños hábitos que nosotros repetimos sin saber que lo están perjudicando. Si quieres que vuestro paseo pase de ser una "lucha" a una actividad de bienestar real, revisa si estás cayendo en estos errores.
            </div>
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            1. Usar herramientas que causan dolor o incomodidad
        </h2>
        <p class="mb-8">Este es el error más grave y, lamentablemente, uno de los más frecuentes. El uso de collares de castigo, de pinchos o eléctricos (herramientas aversivas) no solo daña el vínculo con tu mascota, sino que puede generar miedo y agresividad a largo plazo.</p>
        <div class="bg-white dark:bg-slate-900 border border-deep-green/10 rounded-3xl p-6 md:p-8 shadow-sm mb-12">
            <div class="flex items-start gap-3"><span class="text-accent-gold mt-1 text-sm shrink-0">▶</span> <div><strong class="text-deep-green dark:text-white font-bold">La alternativa:</strong> Cámbialo por un arnés cómodo (tipo H o Y) y una correa larga (de al menos 2 o 3 metros). El objetivo es que el perro se sienta libre de moverse sin presión constante en el cuello, lo que reduce drásticamente su ansiedad.</div></div>
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            2. No dejar que olfatee (el "sniffari")
        </h2>
        <p class="mb-8">Muchos tutores creen que el paseo es solo para caminar rápido y hacer ejercicio físico. Error. Para un perro, olfatear es equivalente a leer las noticias o revisar redes sociales; es su forma de recoger información del entorno.</p>
        <div class="bg-white dark:bg-slate-900 border border-deep-green/10 rounded-3xl p-6 md:p-8 shadow-sm mb-12">
            <div class="flex items-start gap-3"><span class="text-accent-gold mt-1 text-sm shrink-0">▶</span> <div><strong class="text-deep-green dark:text-white font-bold">La alternativa:</strong> Permite que tu perro se detenga a oler. Los paseos de olfato (o "sniffaris") cansan mucho más mentalmente que una caminata rápida de 30 minutos. Si tienes prisa, es mejor caminar menos distancia pero con más calidad de olfato.</div></div>
        </div>

        <div class="mb-16 mt-12 rounded-3xl overflow-hidden shadow-2xl bg-white">
            <img src="https://vetisdigital.com/wp-content/uploads/2026/03/perro_olfateando_cesped_4.jpg" alt="Perro concentrado olfateando el suelo durante un paseo de enriquecimiento ambiental." class="w-full h-auto" />
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            3. Mantener la correa siempre tensa
        </h2>
        <p class="mb-8">Si tú tiras, tu perro tira. Es un instinto natural llamado reflejo de oposición. Si mantienes la correa corta y tensa, le estás enviando una señal de estrés constante, lo que lo pone en alerta ante cualquier estímulo (otros perros, personas o ruidos).</p>
        <div class="bg-white dark:bg-slate-900 border border-deep-green/10 rounded-3xl p-6 md:p-8 shadow-sm mb-12">
            <div class="flex items-start gap-3"><span class="text-accent-gold mt-1 text-sm shrink-0">▶</span> <div><strong class="text-deep-green dark:text-white font-bold">La alternativa:</strong> Practica la "correa floja". Si tu perro tira, detente con calma y espera a que la tensión desaparezca antes de seguir caminando. Prémialo cuando camine cerca de ti sin tirar.</div></div>
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            4. Salir de casa en estado de hiperactividad
        </h2>
        <p class="mb-8">¿Tu perro salta, ladra y se vuelve loco cuando coges la correa? Si sales de casa con ese nivel de excitación, es casi seguro que el paseo será caótico. El estrés acumulado antes de cruzar la puerta se traslada directamente a la calle.</p>
        <div class="bg-white dark:bg-slate-900 border border-deep-green/10 rounded-3xl p-6 md:p-8 shadow-sm mb-12">
            <div class="flex items-start gap-3"><span class="text-accent-gold mt-1 text-sm shrink-0">▶</span> <div><strong class="text-deep-green dark:text-white font-bold">La alternativa:</strong> Entrena el "Settle" o la calma antes de salir. Espera a que tu perro se siente o se calme antes de ponerle el arnés. Si se vuelve a excitar, deja la correa y espera. Salir en calma marca el tono de todo el paseo.</div></div>
        </div>

        <div class="mb-16 mt-12 rounded-3xl overflow-hidden shadow-2xl bg-white">
            <img src="https://vetisdigital.com/wp-content/uploads/2026/03/perro_sentado_puerta_4.jpg" alt="Perro esperando sentado y calmado antes de que su tutor abra la puerta para salir a pasear." class="w-full h-auto" />
        </div>

        <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mt-16 mb-8 border-b-2 border-accent-gold/20 pb-4 inline-block">
            5. Ignorar a tu perro (el paseo con móvil)
        </h2>
        <p class="mb-8">Es muy común ver a personas paseando mientras miran su teléfono, ignorando por completo lo que hace su perro. Esto hace que pierdas oportunidades de oro para premiar buenas conductas o para detectar señales de estrés antes de que el perro reaccione mal.</p>
        <div class="bg-white dark:bg-slate-900 border border-deep-green/10 rounded-3xl p-6 md:p-8 shadow-sm mb-12">
            <div class="flex items-start gap-3"><span class="text-accent-gold mt-1 text-sm shrink-0">▶</span> <div><strong class="text-deep-green dark:text-white font-bold">La alternativa:</strong> Haz del paseo un momento de conexión. Observa su lenguaje corporal. Si ves que se queda tranquilo ante algo que antes le asustaba, ¡prémialo! Estar presente te permite ser un guía seguro para él.</div></div>
        </div>

        <!-- FAQ -->
        <div class="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
            <h2 class="text-3xl md:text-4xl font-bold text-deep-green dark:text-white mb-10 text-center">
                Preguntas Frecuentes (FAQ)
            </h2>
            <div class="grid gap-6 md:grid-cols-2">
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Por qué mi perro tira tanto de la correa?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Puede ser por exceso de energía, falta de entrenamiento o porque ha aprendido que tirando llega antes a donde quiere. También ocurre por el uso de correas muy cortas que no le permiten explorar.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Es malo usar collar de ahogo si mi perro es muy grande?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Sí. La ciencia demuestra que las herramientas aversivas causan dolor y estrés crónico, sin enseñar al perro qué debe hacer. Un arnés de buena calidad y refuerzo positivo son efectivos para cualquier tamaño.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Cuánto tiempo debe durar un paseo ideal?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Más que el tiempo, importa la calidad. Tres paseos diarios de 20-30 minutos con mucho olfato y calma suelen ser mejores que uno solo muy largo y estresante.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Qué hago si mi perro se pone agresivo al ver a otros perros?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Esto se llama reactividad. No lo castigues, ya que empeorarás su miedo. Es vital trabajar con un profesional y usar técnicas de refuerzo positivo para cambiar su emoción hacia los demás perros.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Debo dejar que salude a todos los perros que nos cruzamos?</h3>
                    <p class="text-slate-600 dark:text-slate-400">No necesariamente. Muchos perros se sienten invadidos si un desconocido se les acerca de frente mientras están atados. Pregunta siempre al otro tutor y observa si tu perro realmente quiere interactuar.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-deep-green dark:text-white mb-4">¿Mi perro puede pasear si aún no tiene todas sus vacunas?</h3>
                    <p class="text-slate-600 dark:text-slate-400">Como cachorro, la socialización es clave, pero debes evitar zonas con mucha suciedad o perros desconocidos. Consulta a tu veterinario sobre cómo equilibrar seguridad sanitaria y socialización temprana.</p>
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
                    ¿El paseo con tu perro se ha vuelto una pesadilla?
                </h3>
                <p class="text-white/80 text-lg md:text-xl mb-10 leading-relaxed font-light">
                    No tiene por qué ser así. En <strong class="text-white">"Perro Reactivo: Paseos sin Estrés"</strong>, te enseñamos paso a paso cómo entender las señales de tu perro y transformar vuestras salidas en momentos de calma y disfrute mutuo.
                </p>
                <a href="#" class="inline-flex items-center justify-center gap-3 bg-accent-gold text-deep-green font-bold text-lg px-8 py-5 rounded-full hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-accent-gold/20">
                    Recupera la tranquilidad <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
            </div>
        </div>

    </div>
</article>`;

const fullPostHtml = headerPart + newArticle + footerPart;
fs.writeFileSync('C:/Users/Lucianovm.MSI/OneDrive/Escritorio/Web Vetis/site/public/temp_post_331.html', fullPostHtml);
console.log('Successfully generated HTML payload.');
