import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vos routes réelles
const routes = [
  'a-propos',
  'consultations',
  'sport',
  'blog',
  'mentions-legales',
  'politique-confidentialite'
];

const distPath = path.join(__dirname, 'dist');

routes.forEach(route => {
  const routePath = path.join(distPath, route);
  
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  
  fs.copyFileSync(
    path.join(distPath, 'index.html'),
    path.join(routePath, 'index.html')
  );
  
  console.log(`✅ Route SEO générée : /${route}`);
});
