import { useLanguage } from '../context/LanguageContext.jsx'
import { SECTIONS } from '../utils/routes.js'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal.jsx'

export default function About() {
  const { t } = useLanguage()
  const [first, ...rest] = t.about.paragraphs

  return (
    <section id={SECTIONS.about} className="section-pad bg-white">
      <div className="container-page">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <h2 className="heading-xl lg:col-span-5">{t.about.title}</h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-display text-2xl leading-snug tracking-tight sm:text-[1.75rem]">{first}</p>
            <div className="mt-8 space-y-5">
              {rest.map((paragraph) => (
                <p key={paragraph} className="lead">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <RevealGroup as="dl" className="mt-16 grid border-t border-line sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-x-8">
          {t.about.values.map((value) => (
            <RevealItem key={value.title} className="border-b border-line py-7 lg:border-b-0 lg:pb-0">
              <dt className="font-display text-xl font-medium tracking-tight">{value.title}</dt>
              <dd className="mt-2 max-w-xs leading-relaxed text-slate">{value.text}</dd>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
