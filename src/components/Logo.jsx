import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import { pagePath } from '../utils/routes.js'

/** Símbolo de marca: dos nodos conectados. El de arriba es "lo siguiente". */
export function LogoMark({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path d="M9 23 23 9" stroke="var(--color-ice)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="23" r="4" fill="var(--color-midnight)" stroke="currentColor" strokeWidth="2" />
      <circle cx="23" cy="9" r="4" fill="var(--color-ice)" />
    </svg>
  )
}

/** Logotipo completo (símbolo + nombre) que enlaza al inicio. Pensado para fondos oscuros. */
export default function Logo({ onClick }) {
  const { lang } = useLanguage()
  return (
    <Link
      to={pagePath(lang)}
      onClick={onClick}
      aria-label="Nodara Digital"
      className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-white"
    >
      <LogoMark />
      <span className="font-display text-lg leading-none font-medium tracking-tight">
        nodara<span className="text-mist"> digital</span>
      </span>
    </Link>
  )
}
