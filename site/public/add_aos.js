const fs = require('fs');
const path = require('path');

const siteDir = 'c:\\Users\\Lucianovm.MSI\\OneDrive\\Escritorio\\Web Vetis\\site\\public';

const aosInit = `
<!-- Initialize AOS -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-in-out-sine'
    });
</script>
`;

const files = [
    'afiliados.html', 'audioteca.html', 'biblioteca-gatos.html', 
    'biblioteca-perros.html', 'biblioteca.html', 'blog.html', 
    'contacto.html', 'nosotros.html'
];

files.forEach(file => {
    const filePath = path.join(siteDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already has AOS init
    if (!content.includes('AOS.init')) {
        content = content.replace('</body>', aosInit + '</body>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Added AOS to ${file}`);
    }
});
