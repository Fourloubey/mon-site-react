import { writeFileSync, mkdirSync } from "node:fs";

const site = "https://www.kineterresneuves.fr";

const routes = [
  "/",
  "/a-propos",
  "/consultations",
  "/sport",
  "/blog",
  "/mentions-legales",
  "/politique-confidentialite",
];

const now = new Date().toISOString();

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map((p) => {
      const loc = site + p;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n  </url>\n`;
    })
    .join("") +
  `</urlset>\n`;

mkdirSync("dist", { recursive: true });
writeFileSync("dist/sitemap.xml", xml, "utf8");
console.log(`Generated dist/sitemap.xml with ${routes.length} URLs`);
