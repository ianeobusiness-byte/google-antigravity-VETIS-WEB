const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && !f.startsWith('temp_'));

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Restore background to vetis-global-wrapper
    content = content.replace(/<div class="vetis-global-wrapper([^"]*)"/, (match, classes) => {
        if (!classes.includes('bg-background-light')) {
            return `<div class="vetis-global-wrapper${classes} bg-background-light dark:bg-background-dark"`;
        }
        return match;
    });

    // 2. Remove the Global Animated Background Beams container
    content = content.replace(/<!-- Global Animated Background Beams -->[\s\S]*?<\/div>/, '');

    // 3. Remove the beams script (it's the one containing BEAM_COUNT)
    content = content.replace(/<script>\s*\(\s*function\s*\(\)\s*\{\s*const\s*canvas\s*=\s*document\.getElementById\('beams-canvas'\);[\s\S]*?\}\)\(\);\s*<\/script>/, '');

    // 4. Revert the bg-white/60 to bg-white
    content = content.replace(/bg-white\/60 backdrop-blur-\[2px\]/g, 'bg-white');
    content = content.replace(/bg-white\/40 backdrop-blur-\[2px\]/g, 'bg-slate-50');

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log('Removed beams from', file);
        count++;
    }
});
console.log('Processed ' + count + ' files');
