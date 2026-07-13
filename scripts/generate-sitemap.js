import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { loc: '', changefreq: 'weekly', priority: '1.0' },
  { loc: 'about', changefreq: 'monthly', priority: '0.8' },
  { loc: 'services', changefreq: 'monthly', priority: '0.8' },
  { loc: 'portfolio', changefreq: 'monthly', priority: '0.8' },
  { loc: 'technologies', changefreq: 'monthly', priority: '0.8' },
  { loc: 'contact', changefreq: 'monthly', priority: '0.8' }
];

const domain = 'https://leopardxtechnology.com';
const currentDate = new Date().toISOString().split('T')[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${domain}/${page.loc ? page.loc : ''}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapContent.trim() + '\n', 'utf8');
console.log(`Sitemap generated successfully at ${sitemapPath}`);
