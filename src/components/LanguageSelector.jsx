import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import { LANGS, switchLangPath } from '../utils/routes.js'

/**
 * Selector ES / EN. Cada opción es un enlace a la misma página en el otro
 * idioma, así que funciona con teclado, lectores de pantalla y buscadores.
 */
export default function LanguageSelector({ onNavigate, className = '' }) {
  const { lang, t } = useLanguage()
  const { pathname, hash } = useLocation()

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`on-dark inline-flex items-center rounded-full border border-white/15 p-0.5 text-xs font-medium ${className}`}
    >
      {LANGS.map((code) => {
        const active = code === lang
        return (
          <Link
            key={code}
            to={switchLangPath(pathname, hash, code)}
            hrefLang={code}
            lang={code}
            aria-current={active ? 'true' : undefined}
            aria-label={t.nav.languages[code]}
            onClick={onNavigate}
            className={`flex min-h-8 min-w-10 items-center justify-center rounded-full px-2.5 uppercase transition-colors duration-200 ${
              active ? 'bg-white text-midnight' : 'text-mist hover:text-white'
            }`}
          >
            {code}
          </Link>
        )
      })}
    </div>
  )
}
