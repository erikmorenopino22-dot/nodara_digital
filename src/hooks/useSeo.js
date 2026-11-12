import { useEffect } from 'react'
import { buildSeo } from '../utils/seo.js'
import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * Actualiza <title>, <html lang> y las etiquetas SEO al cambiar de página o idioma.
 * Las etiquetas gestionadas llevan el atributo data-seo para poder sustituirlas.
 */
export function useSeo(page, options = {}) {
  const { lang, t } = useLanguage()
  const meta = t.meta[page]
  const noindex = options.noindex ?? false

  useEffect(() => {
    const { title, tags } = buildSeo(lang, page, { ...meta, noindex })
    document.title = title
    document.documentElement.lang = lang
    document.head.querySelectorAll('[data-seo]').forEach((node) => node.remove())
    tags.forEach(({ tag, attrs }) => {
      const node = document.createElement(tag)
      Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value))
      node.setAttribute('data-seo', '')
      document.head.appendChild(node)
    })
  }, [lang, page, meta, noindex])
}
