import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'
import { site } from '../config/site.js'
import { pagePath, sectionPath } from '../utils/routes.js'
import { SERVICES } from '../data/services.js'
import Logo from './Logo.jsx'
import LanguageSelector from './LanguageSelector.jsx'

function FooterColumn({ title, children }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-medium text-white">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-mist">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="transition-colors duration-200 hover:text-white">
        {children}
      </Link>
    </li>
  )
}

export default function Footer() {
  const { lang, t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="on-dark border-t border-white/10 bg-midnight text-white">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">{t.footer.description}</p>
            <p className="mt-8 font-display text-xl tracking-tight text-white">We build what’s next.</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <FooterColumn title={t.footer.navigation}>
              <FooterLink to={pagePath(lang)}>{t.nav.home}</FooterLink>
              <FooterLink to={sectionPath(lang, 'services')}>{t.nav.services}</FooterLink>
              <FooterLink to={sectionPath(lang, 'work')}>{t.nav.work}</FooterLink>
              <FooterLink to={sectionPath(lang, 'about')}>{t.nav.about}</FooterLink>
            </FooterColumn>

            <FooterColumn title={t.footer.services}>
              {SERVICES.map((service) => (
                <FooterLink key={service.id} to={`/${lang}/#${service.anchor}`}>
                  {t.services.items[service.id].title}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title={t.footer.contact}>
              <FooterLink to={sectionPath(lang, 'contact')}>{t.footer.contactForm}</FooterLink>
              {/* El correo solo aparece cuando se rellena en src/config/site.js */}
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="break-all transition-colors duration-200 hover:text-white">
                    {site.email}
                  </a>
                </li>
              )}
            </FooterColumn>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-mist md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {['legal', 'privacy', 'cookies'].map((page) => (
              <FooterLink key={page} to={pagePath(lang, page)}>
                {t.footer.legalLinks[page]}
              </FooterLink>
            ))}
          </ul>
          <LanguageSelector className="self-start md:self-auto" />
        </div>
      </div>
    </footer>
  )
}
