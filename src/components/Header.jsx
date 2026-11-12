import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { AnimatePresence, motion, useScroll } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { pagePath, sectionPath } from '../utils/routes.js'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import LanguageSelector from './LanguageSelector.jsx'

export default function Header() {
  const { lang, t } = useLanguage()
  const { slug } = useParams()
  const { pathname, hash } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // Progreso de lectura de la página (0 a 1), para la barra bajo el header.
  const { scrollYProgress } = useScroll()

  const isHome = !slug
  // Sobre el hero el header es transparente; al bajar (o fuera del inicio) es opaco.
  const solid = scrolled || open || !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el menú móvil al navegar y con la tecla Escape.
  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const links = [
    { label: t.nav.home, to: pagePath(lang) },
    { label: t.nav.services, to: sectionPath(lang, 'services') },
    { label: t.nav.work, to: sectionPath(lang, 'work') },
    { label: t.nav.about, to: sectionPath(lang, 'about') },
    { label: t.nav.contact, to: sectionPath(lang, 'contact') },
  ]

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-white/10 bg-midnight/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ice focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-midnight"
      >
        {t.nav.skip}
      </a>

      <div className="container-page flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav aria-label={t.nav.main} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="relative py-2 text-sm text-mist transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-ice after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSelector />
          <div className="hidden sm:block">
            <Button to={sectionPath(lang, 'contact')}>{t.nav.cta}</Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-ice"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label={t.nav.main}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-midnight lg:hidden"
          >
            <div className="container-page flex min-h-full flex-col justify-between gap-10 pt-6 pb-10">
              <ul>
                {links.map((link) => (
                  <li key={link.to} className="border-b border-white/10">
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-display text-3xl tracking-tight text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button to={sectionPath(lang, 'contact')} size="lg" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
