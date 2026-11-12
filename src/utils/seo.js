// Genera las etiquetas SEO de una página en un idioma.
// Lo usan tanto el navegador (hooks/useSeo.js) como el script de build
// (scripts/postbuild.js), para que ambos produzcan exactamente lo mismo.

import { site } from '../config/site.js'
import { LANGS, DEFAULT_LANG, pagePath } from './routes.js'

const OG_LOCALE = { es: 'es_ES', en: 'en_US' }

export function buildSeo(lang, page, meta) {
  const url = site.url + pagePath(lang, page)
  const tags = [
    { tag: 'meta', attrs: { name: 'description', content: meta.description } },
    { tag: 'link', attrs: { rel: 'canonical', href: url } },
    ...LANGS.map((l) => ({
      tag: 'link',
      attrs: { rel: 'alternate', hreflang: l, href: site.url + pagePath(l, page) },
    })),
    {
      tag: 'link',
      attrs: { rel: 'alternate', hreflang: 'x-default', href: site.url + pagePath(DEFAULT_LANG, page) },
    },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: site.name } },
    { tag: 'meta', attrs: { property: 'og:title', content: meta.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:url', content: url } },
    { tag: 'meta', attrs: { property: 'og:image', content: site.url + site.ogImage } },
    { tag: 'meta', attrs: { property: 'og:locale', content: OG_LOCALE[lang] } },
    ...LANGS.filter((l) => l !== lang).map((l) => ({
      tag: 'meta',
      attrs: { property: 'og:locale:alternate', content: OG_LOCALE[l] },
    })),
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
  ]
  if (meta.noindex) tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } })
  return { title: meta.title, tags }
}
