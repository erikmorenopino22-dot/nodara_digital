// Mapa único de rutas. Cada idioma tiene su prefijo (/es/, /en/) y sus
// propios "slugs", de modo que las URLs son claras en ambos idiomas.

export const LANGS = ['es', 'en']
export const DEFAULT_LANG = 'es'

export const PAGES = {
  home: { es: '', en: '' },
  legal: { es: 'aviso-legal', en: 'legal-notice' },
  privacy: { es: 'politica-de-privacidad', en: 'privacy-policy' },
  cookies: { es: 'politica-de-cookies', en: 'cookie-policy' },
}

// Identificadores de las secciones de la página de inicio (anclas).
export const SECTIONS = {
  services: 'services',
  engineering: 'engineering',
  process: 'process',
  work: 'work',
  about: 'about',
  contact: 'contact',
}

export function isLang(value) {
  return LANGS.includes(value)
}

/** Ruta de una página en un idioma. Ej.: pagePath('en', 'privacy') → /en/privacy-policy/ */
export function pagePath(lang, page = 'home') {
  const slug = PAGES[page]?.[lang] ?? ''
  return slug ? `/${lang}/${slug}/` : `/${lang}/`
}

/** Ruta a una sección de la página de inicio. Ej.: /es/#services */
export function sectionPath(lang, section) {
  return `/${lang}/#${SECTIONS[section]}`
}

/** Devuelve la clave de página ('legal', 'privacy'…) a partir del slug de la URL. */
export function pageFromSlug(lang, slug) {
  return Object.keys(PAGES).find((key) => key !== 'home' && PAGES[key][lang] === slug) ?? null
}

/** Dada la ruta actual, calcula la ruta equivalente en otro idioma. */
export function switchLangPath(pathname, hash, targetLang) {
  const [, currentLang, slug] = pathname.split('/')
  if (!slug) return `/${targetLang}/${hash ?? ''}`
  const page = isLang(currentLang) ? pageFromSlug(currentLang, slug) : null
  return page ? pagePath(targetLang, page) : `/${targetLang}/`
}
