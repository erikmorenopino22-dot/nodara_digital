import { motion } from 'motion/react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { SECTIONS } from '../utils/routes.js'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal.jsx'

// La línea que une dos pasos se "dibuja" cuando aparece el paso.
const lineVariants = {
  hidden: { scaleX: 0, scaleY: 0 },
  visible: { scaleX: 1, scaleY: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Process() {
  const { t } = useLanguage()
  const { steps } = t.process

  return (
    <section id={SECTIONS.process} className="section-pad bg-white">
      <div className="container-page">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="heading-xl lg:col-span-7">{t.process.title}</h2>
          <p className="lead max-w-md lg:col-span-5">{t.process.lead}</p>
        </Reveal>

        {/* Los pasos son una secuencia real, por eso van en una lista ordenada
            y numerada. La línea que une los nodos es vertical en móvil y
            horizontal en escritorio. */}
        <RevealGroup as="ol" stagger={0.18} className="mt-14 grid lg:mt-24 lg:grid-cols-5">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1
            return (
              <RevealItem
                as="li"
                key={step.title}
                className="relative pb-10 pl-10 last:pb-0 lg:pr-8 lg:pb-0 lg:pl-0"
              >
                {!isLast && (
                  <motion.span
                    aria-hidden="true"
                    variants={lineVariants}
                    className="absolute top-3 bottom-0 left-[5px] w-px origin-top-left bg-midnight/20 lg:top-[5px] lg:right-0 lg:bottom-auto lg:left-3 lg:h-px lg:w-auto"
                  />
                )}
                <span
                  aria-hidden="true"
                  className={`absolute top-1.5 left-0 h-[11px] w-[11px] rounded-full border border-midnight lg:top-0 ${
                    isLast ? 'bg-midnight ring-4 ring-ice' : 'bg-white'
                  }`}
                />
                <div className="lg:pt-10">
                  <p className="font-display text-sm text-ice-deep">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-3 max-w-xs leading-relaxed text-slate">{step.text}</p>
                </div>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
