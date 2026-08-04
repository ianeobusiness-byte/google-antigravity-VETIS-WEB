const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && !f.startsWith('temp_') && f !== 'popup_preview.html');

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Properly remove wrapper background
    content = content.replace(/class=\"vetis-global-wrapper[^\"]*\"/g, match => {
        return match.replace(/bg-background-light/g, '')
                    .replace(/dark:bg-background-dark/g, '')
                    .replace(/  +/g, ' '); // Clean up extra spaces
    });

    // Make backgrounds translucent so beams show through
    content = content.replace(/class="([^"]*bg-white[^"]*)"/g, (match, classes) => {
        if (!classes.includes('bg-white/')) {
            return `class="${classes.replace(/bg-white/g, 'bg-white/60 backdrop-blur-[2px]')}"`;
        }
        return match;
    });

    content = content.replace(/class="([^"]*bg-slate-50[^"]*)"/g, (match, classes) => {
        if (!classes.includes('bg-slate-50/')) {
            return `class="${classes.replace(/bg-slate-50/g, 'bg-white/40 backdrop-blur-[2px]')}"`;
        }
        return match;
    });

    // We also make sure the canvas isn't blurred too much by backdrop-filter from sections. Wait, I've added a tiny backdrop-blur, it will make it beautiful.

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log('Fixed background in', file);
        count++;
    }
});
console.log('Fixed backgrounds in ' + count + ' files');
