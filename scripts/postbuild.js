// Se ejecuta después de "vite build" (ver package.json).
//
// Una SPA genera un único index.html, así que todos los idiomas y páginas
// compartirían el mismo <title> y la misma descripción hasta que carga
// JavaScript. Este script crea un index.html por ruta (/es/, /en/,
// /es/aviso-legal/…) con sus metadatos, canonical, hreflang y Open Graph ya
// escritos en el HTML. También genera sitemap.xml y robots.txt con el dominio
// configurado en src/config/site.js.

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { site } from '../src/config/site.js'
import { translations } from '../src/translations/index.js'
import { LANGS, DEFAULT_LANG, PAGES, pagePath } from '../src/utils/routes.js'
import { buildSeo } from '../src/utils/seo.js'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const template = await readFile(join(dist, 'index.html'), 'utf8')
const SEO_BLOCK = /<!--seo:start-->[\s\S]*<!--seo:end-->/

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function renderHead(lang, page) {
  const { title, tags } = buildSeo(lang, page, translations[lang].meta[page])
  const lines = tags.map(({ tag, attrs }) => {
    const attributes = Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(' ')
    return `<${tag} ${attributes} data-seo />`
  })
  return [`<title>${escapeHtml(title)}</title>`, ...lines].join('\n    ')
}

const pages = Object.keys(PAGES)

for (const lang of LANGS) {
  for (const page of pages) {
    const html = template
      .replace('<html lang="es">', `<html lang="${lang}">`)
      .replace(SEO_BLOCK, renderHead(lang, page))
    const file = join(dist, pagePath(lang, page), 'index.html')
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, html)
  }
}

// La raíz (/) usa los metadatos del idioma predeterminado.
await writeFile(join(dist, 'index.html'), template.replace(SEO_BLOCK, renderHead(DEFAULT_LANG, 'home')))

// 404.html: lo usan GitHub Pages y Cloudflare Pages para rutas desconocidas.
await writeFile(join(dist, '404.html'), template)

const urls = LANGS.flatMap((lang) =>
  pages.map((page) => {
    const alternates = LANGS.map(
      (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${site.url}${pagePath(l, page)}" />`,
    ).join('\n')
    return `  <url>\n    <loc>${site.url}${pagePath(lang, page)}</loc>\n${alternates}\n  </url>`
  }),
)

await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`,
)

await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)

console.log(`postbuild: ${LANGS.length * pages.length} páginas, sitemap.xml y robots.txt generados.`)
if (site.url.includes('example.com')) {
  console.warn('AVISO: site.url sigue siendo el dominio de ejemplo. Cámbialo en src/config/site.js antes de publicar.')
}
