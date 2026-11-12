import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { SECTIONS, sectionPath } from '../utils/routes.js'
import { PROJECTS } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import Button from '../components/Button.jsx'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal.jsx'

export default function Portfolio() {
  const { lang, t } = useLanguage()

  return (
    <section id={SECTIONS.work} className="section-pad bg-cloud">
      <div className="container-page">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="heading-xl lg:col-span-6">{t.work.title}</h2>
          <p className="lead lg:col-span-6">{t.work.lead}</p>
        </Reveal>

        <RevealGroup as="ul" stagger={0.12} className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-20">
          {PROJECTS.map((project) => (
            <RevealItem as="li" key={project.id}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}

          {/* Hueco reservado para el primer proyecto real. */}
          <RevealItem as="li">
            <div className="flex h-full min-h-72 flex-col justify-between rounded-2xl border border-dashed border-slate/40 bg-white/60 p-8 transition-colors duration-300 hover:border-midnight sm:p-10">
              <div>
                <h3 className="text-2xl font-medium tracking-tight">{t.work.slot.title}</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-slate">{t.work.slot.text}</p>
              </div>
              <Button
                to={sectionPath(lang, 'contact')}
                variant="dark"
                icon={ArrowUpRight}
                className="mt-8 self-start"
              >
                {t.work.slot.cta}
              </Button>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
