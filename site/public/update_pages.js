const fs = require('fs');
const path = require('path');

const siteDir = 'c:\\Users\\Lucianovm.MSI\\OneDrive\\Escritorio\\Web Vetis\\site\\public';
const indexHtml = fs.readFileSync(path.join(siteDir, 'index.html'), 'utf8');

// Extract parts from index.html
const tailwindConfigRegex = /<script id="tailwind-config">[\s\S]*?<\/head>/i;
const tailwindConfigMatch = indexHtml.match(tailwindConfigRegex);
const headReplaces = indexHtml.substring(indexHtml.indexOf('<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>'), indexHtml.indexOf('</title>') > -1 ? indexHtml.indexOf('</title>') : indexHtml.indexOf('</head>'));
// Wait, easier to extract specific blocks

const extractBlock = (html, startMarker, endMarker) => {
    const start = html.indexOf(startMarker);
    const end = html.indexOf(endMarker, start) + endMarker.length;
    return html.substring(start, end);
};

// 1. Head resources (fonts, tailwind config, style)
// Let's just grab from <script src="https://cdn.tailwindcss.com to </style>
const resourcesStart = '<script src="https://cdn.tailwindcss.com';
const resourcesEnd = '</style>';
const headResources = extractBlock(indexHtml, resourcesStart, resourcesEnd);

// 2. Body opening tag
const bodyTagRegex = /<body[^>]*>/i;
const bodyTag = indexHtml.match(bodyTagRegex)[0];

// 3. Header & Mobile Menu
// In index.html, it starts with <!-- Header --> and ends with the </div> after Acceder button in mobile menu.
// Let's find <!-- Hero Section --> and take everything before it (excluding body tag).
const headerStart = '<!-- Header -->';
const headerEnd = '<!-- Hero Section -->';
let headerContent = indexHtml.substring(indexHtml.indexOf(headerStart), indexHtml.indexOf(headerEnd));
// Trim whitespace
headerContent = headerContent.trim() + '\n';

// 4. Footer
// In index.html it's from <!-- Footer --> to </footer>
const footerStart = '<!-- Footer -->';
const footerEnd = '</footer>';
const footerContent = extractBlock(indexHtml, footerStart, footerEnd);

// Files to update
const files = [
    'afiliados.html', 'audioteca.html', 'biblioteca-gatos.html', 
    'biblioteca-perros.html', 'biblioteca.html', 'blog.html', 
    'contacto.html', 'nosotros.html'
];

files.forEach(file => {
    const filePath = path.join(siteDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Replace head resources
    // Find the similar block in the target file
    const targetResourcesStart = '<script src="https://cdn.tailwindcss.com';
    let targetResourcesEnd = '</style>';
    if (content.indexOf(targetResourcesEnd) === -1) {
        targetResourcesEnd = '</script>'; // some might not have <style>
        // let's just replace from tailwindcss to before </title> or </head>
    }
    
    // Simpler regex for head resources: replace tailwind script and config
    // Actually, let's replace everything between <meta name="viewport"...> and <title>
    const viewportRegex = /<meta[^>]*viewport[^>]*>/i;
    const titleRegex = /<title>/i;
    if (viewportRegex.test(content) && titleRegex.test(content)) {
        content = content.replace(/(<meta[^>]*viewport[^>]*>)([\s\S]*?)(<title>)/i, `$1\n${headResources}\n$3`);
    }

    // 2. Replace body tag
    content = content.replace(/<body[^>]*>/i, bodyTag);

    // 3. Replace Header & Mobile Menu
    // Remove existing header elements. Look for <header>...</header> and possibly mobile menu.
    // It's safer to just replace from <!-- Header --> to <!-- Hero Section --> or similar.
    const sections = ['<!-- Hero Section -->', '<!-- Page Header -->', '<main', '<section'];
    let nextSectionIndex = -1;
    for (const section of sections) {
        let idx = content.indexOf(section);
        if (idx !== -1 && (nextSectionIndex === -1 || idx < nextSectionIndex)) {
            nextSectionIndex = idx;
        }
    }
    
    if (nextSectionIndex !== -1) {
        const afterBody = content.indexOf('>', content.search(/<body[^>]*>/i)) + 1;
        content = content.substring(0, afterBody) + '\n' + headerContent + '\n' + content.substring(nextSectionIndex);
    }
    
    // 4. Replace Footer
    // Find <!-- Footer --> or <footer>
    const targetFooterStart = content.includes('<!-- Footer -->') ? '<!-- Footer -->' : 
                             (content.includes('<!-- Global Footer -->') ? '<!-- Global Footer -->' : '<footer');
    const targetFooterEnd = '</footer>';
    
    if (content.includes(targetFooterStart) && content.includes(targetFooterEnd)) {
        const startIdx = content.indexOf(targetFooterStart);
        const endIdx = content.indexOf(targetFooterEnd, startIdx) + targetFooterEnd.length;
        content = content.substring(0, startIdx) + footerContent + content.substring(endIdx);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
});
