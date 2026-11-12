import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { sectionPath } from '../utils/routes.js'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'

export default function CTA() {
  const { lang, t } = useLanguage()

  return (
    <section className="on-dark bg-midnight text-white">
      <div className="container-page py-24 sm:py-32 lg:py-40">
        <Reveal>
          <h2 className="max-w-5xl text-[clamp(2.5rem,7vw,5.75rem)] leading-[0.98] font-medium tracking-[-0.035em]">
            {t.cta.title}
          </h2>
          <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-lg leading-relaxed text-mist">{t.cta.text}</p>
            <Button to={sectionPath(lang, 'contact')} size="lg" icon={ArrowUpRight} className="shrink-0">
              {t.cta.button}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
