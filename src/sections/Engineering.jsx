import { useLanguage } from '../context/LanguageContext.jsx'
import { SECTIONS } from '../utils/routes.js'
import { STACK } from '../data/stack.js'
import CodeShowcase from '../components/CodeShowcase.jsx'
import Marquee from '../components/Marquee.jsx'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal.jsx'

export default function Engineering() {
  const { t } = useLanguage()
  const copy = t.engineering

  return (
    <section id={SECTIONS.engineering} className="on-dark overflow-hidden bg-midnight text-white">
      <div className="container-page section-pad grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="heading-xl">{copy.title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">{copy.lead}</p>
          </Reveal>

          <RevealGroup as="ul" className="mt-10 border-t border-white/10">
            {copy.practices.map((practice) => (
              <RevealItem as="li" key={practice.title} className="border-b border-white/10 py-5">
                <h3 className="font-sans text-base font-medium">{practice.title}</h3>
                <p className="mt-1.5 max-w-md text-[0.95rem] leading-relaxed text-mist">{practice.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="min-w-0 self-start lg:sticky lg:top-28 lg:col-span-6 lg:col-start-7" delay={0.15}>
          <CodeShowcase />
        </Reveal>
      </div>

      <div className="border-t border-white/10 py-8 sm:py-10">
        <p className="container-page mb-6 text-sm text-mist">{copy.stack}</p>
        <Marquee items={STACK} label={copy.stack} />
      </div>
    </section>
  )
}
