const fs = require('fs');
const path = require('path');

const srcFile = 'biblioteca.html';
const htmlSrc = fs.readFileSync(srcFile, 'utf8');

const beamsHtmlMatch = htmlSrc.match(/<!-- Global Animated Background Beams -->[\s\S]*?<\/div>\s*<!-- Header/);
const beamsHtml = beamsHtmlMatch ? beamsHtmlMatch[0].replace('<!-- Header', '').trim() : null;

const beamsScriptMatch = htmlSrc.match(/<script>\s*\/\/\s*===== Canvas Beams Background =====[\s\S]*?<\/script>/);
const beamsScript = beamsScriptMatch ? beamsScriptMatch[0] : null;

if (!beamsHtml || !beamsScript) {
    console.error("No se pudo encontrar el bloque de beams en biblioteca.html");
    process.exit(1);
}

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html') && !f.startsWith('temp_') && f !== 'popup_preview.html');

let count = 0;
files.forEach(file => {
    if (file === 'biblioteca.html') return;
    
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    if (content.includes('Canvas Beams Background')) {
        content = content.replace(/<script>\s*\/\/\s*===== Canvas Beams Background =====[\s\S]*?<\/script>/, beamsScript);
        content = content.replace(/<!-- Global Animated Background Beams -->[\s\S]*?<\/canvas>\s*<\/div>/, beamsHtml);
    } else {
        // Quitar clases de fondo del wrapper
        content = content.replace(/bg-background-light dark:bg-background-dark /g, '');
        content = content.replace(/bg-background-light dark:bg-background-dark/g, '');
        
        // Insertar HTML
        content = content.replace(
            /(<div class="vetis-global-wrapper[^>]*>)/,
            `$1\n  \n${beamsHtml}\n`
        );
        
        // Insertar Script
        content = content.replace(
            /<\/body>/,
            `\n${beamsScript}\n</body>`
        );
        
        // Asegurar relative z-10 en secciones principales si aplica (footer seguro)
        content = content.replace(/<footer class="([^"]+)"/, (match, classes) => {
            if (!classes.includes('relative')) classes += ' relative';
            if (!classes.includes('z-10')) classes += ' z-10';
            return `<footer class="${classes.trim()}"`;
        });

        // Asegurar que el main o el header del hero section esten por encima si es necesario.
        // Pero en biblioteca agregamos a section.relative. Para index, el hero ya tiene content. Lo mejor es dejar
        // que el footer tenga z-10 y lo demás ya es transparente y deja ver el fondo.
    }

    if (content !== originalContent) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
        count++;
    }
});
console.log(`Successfully added/updated beams on ${count} files.`);
