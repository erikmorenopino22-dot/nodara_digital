import { Check, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import Button from './Button.jsx'
import ServiceGraphic from './graphics/ServiceGraphic.jsx'
import Reveal from './Reveal.jsx'

/**
 * Bloque de un servicio. Con las props `dark` y `reverse` se consiguen
 * tres composiciones distintas a partir del mismo componente.
 */
export default function ServiceCard({ service, dark = false, reverse = false }) {
  const { lang, t } = useLanguage()
  const copy = t.services.items[service.id]
  const Icon = service.icon

  return (
    <Reveal
      as="article"
      className={`${dark ? 'on-dark bg-midnight text-white' : 'bg-white text-midnight'} overflow-hidden rounded-2xl`}
    >
      <div id={service.anchor} className="grid scroll-mt-24 lg:grid-cols-2">
        <div className={`p-7 sm:p-10 lg:p-14 ${reverse ? 'lg:order-2' : ''}`}>
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full ${
                dark ? 'bg-white/10 text-ice' : 'bg-cloud text-midnight'
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p lang="en" className={`text-sm ${dark ? 'text-mist' : 'text-slate'}`}>
              {copy.label}
            </p>
          </div>

          <h3 className="mt-8 text-3xl font-medium tracking-tight sm:text-4xl">{copy.title}</h3>
          <p className={`mt-4 max-w-md text-lg leading-relaxed ${dark ? 'text-mist' : 'text-slate'}`}>
            {copy.description}
          </p>

          <h4 className="sr-only">{t.services.includes}</h4>
          <ul className={`mt-8 border-t ${dark ? 'border-white/10' : 'border-line'}`}>
            {copy.includes.map((item) => (
              <li
                key={item}
                className={`flex items-center gap-3 border-b py-3 text-[0.95rem] ${
                  dark ? 'border-white/10' : 'border-line'
                }`}
              >
                <Check className={`h-4 w-4 shrink-0 ${dark ? 'text-ice' : 'text-ice-deep'}`} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <Button
            to={`/${lang}/?service=${service.formValue}#contact`}
            variant={dark ? 'primary' : 'dark'}
            icon={ArrowUpRight}
            className="mt-9"
          >
            {copy.cta}
          </Button>
        </div>

        <div
          className={`flex items-center justify-center p-7 sm:p-12 ${
            dark ? 'bg-midnight-soft' : 'bg-cloud/70'
          } ${reverse ? 'lg:order-1 lg:border-r' : 'lg:border-l'} ${dark ? 'border-white/10' : 'border-line'}`}
        >
          <ServiceGraphic type={service.id} tone={dark ? 'dark' : 'light'} className="w-full max-w-md" />
        </div>
      </div>
    </Reveal>
  )
}
