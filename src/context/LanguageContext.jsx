import { createContext, useContext, useEffect, useMemo } from 'react'
import { translations } from '../translations/index.js'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'nodara-lang'

/** Idioma guardado en una visita anterior (o null). */
export function getStoredLang() {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * El idioma activo lo decide la URL (/es/… o /en/…). Así se mantiene al
 * navegar, se puede compartir un enlace en un idioma concreto y los
 * buscadores ven cada idioma como una página distinta.
 */
export function LanguageProvider({ lang, children }) {
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Sin acceso a localStorage (modo privado estricto): no pasa nada.
    }
  }, [lang])

  const value = useMemo(() => ({ lang, t: translations[lang] }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  return context
}
