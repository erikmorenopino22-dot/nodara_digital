import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { sectionPath } from '../utils/routes.js'
import { SERVICES } from '../data/services.js'
import Button from '../components/Button.jsx'
import NodeField from '../components/graphics/NodeField.jsx'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section className="on-dark relative overflow-hidden bg-midnight text-white">
      <div className="container-page relative flex min-h-[100svh] flex-col justify-end pt-28 pb-10 lg:pb-12">
        {/* Gráfico de nodos: a la derecha en escritorio, arriba y más pequeño en móvil. */}
        <NodeField className="pointer-events-none absolute top-14 right-2 w-64 opacity-60 sm:top-16 sm:right-0 sm:w-96 lg:top-[42%] lg:right-8 lg:w-[min(40vw,34rem)] lg:-translate-y-1/2 lg:opacity-100" />

        <div className="relative">
          {/* El eslogan es el mismo en ambos idiomas, por eso lleva lang="en". */}
          <h1
            lang="en"
            className="text-[clamp(3.25rem,11.5vw,9.5rem)] leading-[0.92] font-medium tracking-[-0.045em]"
          >
            {t.hero.title.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:items-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          >
            <p className="max-w-xl text-lg leading-relaxed text-mist sm:text-xl lg:col-span-6">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
              <Button to={sectionPath(lang, 'services')} size="lg" icon={ArrowDown}>
                {t.hero.primary}
              </Button>
              <Button to={sectionPath(lang, 'contact')} size="lg" variant="outline">
                {t.hero.secondary}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Acceso directo a los tres servicios. */}
        <motion.nav
          aria-label={t.hero.servicesLabel}
          className="relative mt-14 border-t border-white/10 pt-5 lg:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <ul className="grid gap-x-8 gap-y-1 text-sm sm:grid-cols-3">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link
                  to={`/${lang}/#${service.anchor}`}
                  className="group flex items-center gap-3 py-2 text-mist transition-colors duration-200 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate transition-colors duration-200 group-hover:bg-ice" />
                  {t.services.items[service.id].title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </section>
  )
}
