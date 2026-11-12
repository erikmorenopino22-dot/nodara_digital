import { useLanguage } from '../context/LanguageContext.jsx'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal.jsx'

export default function Intro() {
  const { t } = useLanguage()

  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <h2 className="heading-xl lg:col-span-7">{t.intro.title}</h2>
          <div className="space-y-5 lg:col-span-5 lg:pt-3">
            {t.intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="lead">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <RevealGroup as="ul" className="mt-16 grid gap-x-8 border-t border-line sm:grid-cols-3 lg:mt-24">
          {t.intro.points.map((point) => (
            <RevealItem as="li" key={point.title} className="border-b border-line py-7 sm:border-b-0 sm:pb-0">
              <h3 className="text-xl font-medium tracking-tight">{point.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-slate">{point.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
