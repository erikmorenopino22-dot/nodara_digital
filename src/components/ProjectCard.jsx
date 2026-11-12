import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import ServiceGraphic from './graphics/ServiceGraphic.jsx'

/**
 * Tarjeta de proyecto. Sirve tanto para conceptos propios como para futuros
 * proyectos reales (ver src/data/projects.js).
 */
export default function ProjectCard({ project }) {
  const { t } = useLanguage()
  const copy = t.work.items[project.id]
  const isConcept = project.type === 'concept'

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-midnight">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            width="800"
            height="560"
            className="aspect-[10/7] w-full object-cover"
          />
        ) : (
          <div className="flex aspect-[10/7] items-center justify-center p-8 sm:p-12">
            <ServiceGraphic
              type={project.cover}
              tone="dark"
              className="w-full max-w-sm transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        )}
        {isConcept && (
          <span className="absolute top-4 left-4 rounded-full bg-ice px-3 py-1 text-xs font-medium text-midnight">
            {t.work.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <p className="text-sm text-slate">{copy.kind}</p>
        <h3 className="mt-2 text-2xl font-medium tracking-tight">{copy.title}</h3>
        <p className="mt-3 leading-relaxed text-slate">{copy.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {copy.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-slate">
              {tag}
            </li>
          ))}
        </ul>

        {/* El enlace solo existe cuando el proyecto tiene una URL real. */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 self-start border-b border-midnight pb-0.5 text-sm font-medium"
          >
            {t.work.view}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
