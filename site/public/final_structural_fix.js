const fs = require('fs');
const path = require('path');

const siteDir = 'c:\\Users\\Lucianovm.MSI\\OneDrive\\Escritorio\\Web Vetis\\site\\public';
const indexFile = path.join(siteDir, 'index.html');
const indexContent = fs.readFileSync(indexFile, 'utf8');

// 1. Extract Skeleton from Index
const headMatch = indexContent.match(/<head>([\s\S]*?)<\/head>/i);
let headInner = headMatch[1].replace(/<title>[\s\S]*?<\/title>/i, '{{TITLE}}');

const bodyOpenMatch = indexContent.match(/<body[\s\S]*?>/i);
const bodyOpen = bodyOpenMatch[0];

const headerStart = indexContent.indexOf('<!-- Header -->');
const headerEnd = indexContent.indexOf('<!-- Hero Section -->'); 
const headerHtml = indexContent.substring(headerStart, headerEnd);

const footerStart = indexContent.indexOf('<!-- Footer -->');
const footerHtml = indexContent.substring(footerStart);

const targetFiles = [
    'afiliados.html', 'audioteca.html', 'biblioteca-gatos.html', 
    'biblioteca-perros.html', 'biblioteca.html', 'blog.html', 
    'contacto.html', 'nosotros.html'
];

const classMap = {
    'bg-soft-cream': 'bg-background-light',
    'bg-vetis-cream': 'bg-background-light',
    'text-accent-green': 'text-deep-green',
    'text-brand-green': 'text-deep-green',
    'bg-accent-green': 'bg-deep-green',
    'bg-accent-green/5': 'bg-deep-green/5',
    'bg-accent-green/90': 'bg-deep-green/90',
    'text-vetis-green': 'text-deep-green',
    'text-vetis-terracotta': 'text-primary',
    'bg-vetis-terracotta': 'bg-primary',
    'shadow-vetis-green/5': 'shadow-deep-green/5',
    'shadow-vetis-terracotta/20': 'shadow-primary/20',
    'serif-title': 'font-serif',
    'text-accent-green/90': 'text-deep-green/90',
    'shadow-accent-green/10': 'shadow-deep-green/10',
};

targetFiles.forEach(file => {
    const filePath = path.join(siteDir, file);
    if (!fs.existsSync(filePath)) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract Title
    const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[0] : '<title>Vetis Digital</title>';
    
    // Extract Main Content
    let mainContent = '';
    const mainStart = content.indexOf('<main');
    const mainEnd = content.indexOf('<!-- Footer -->');
    
    if (mainStart !== -1 && mainEnd !== -1) {
        mainContent = content.substring(mainStart, mainEnd);
    } else {
        const sections = content.match(/<section[\s\S]*?<\/section>/gi) || [];
        mainContent = sections.join('\n');
    }

    // Replace Classes in Main Content
    Object.keys(classMap).forEach(oldClass => {
        const regex = new RegExp(oldClass, 'g');
        mainContent = mainContent.replace(regex, classMap[oldClass]);
    });

    // Reconstruct
    const finalHead = headInner.replace('{{TITLE}}', title);
    const newContent = `<!DOCTYPE html>
<html class="light" lang="es">
<head>
${finalHead}
</head>
${bodyOpen}
${headerHtml}
${mainContent}
${footerHtml}
`;

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Successfully reconstructed and remapped ${file}`);
});
