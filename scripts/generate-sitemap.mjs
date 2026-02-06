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
  `<?xml
