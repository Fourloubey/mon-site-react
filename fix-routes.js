const fs = require('fs');
const path = require('path');

// Liste de vos routes (sans le slash initial)
const routes = [
  'a-propos',
  'consultations',
  'sport',
  'blog',
  'mentions-legales',
  'politique-confidentialite'
];

const distPath = path.join(__dirname, 'dist'); // ou 'build' selon votre config

routes.forEach(route => {
  const routePath = path.join(distPath, route);
  
  // Créer le dossier pour la route
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  
  // Copier le index.html dans ce dossier
  fs.copyFileSync(
    path.join(distPath, 'index.html'),
    path.join(routePath, 'index.html')
  );
  
  console.log(`✅ Route générée : /${route}`);
});
