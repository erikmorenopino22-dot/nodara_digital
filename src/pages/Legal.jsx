import { useParams } from 'react-router-dom'
import { ArrowLeft, TriangleAlert } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useSeo } from '../hooks/useSeo.js'
import { pageFromSlug, pagePath } from '../utils/routes.js'
import Button from '../components/Button.jsx'
import NotFound from './NotFound.jsx'

/** Plantilla común de aviso legal, privacidad y cookies. */
function LegalContent({ page }) {
  const { lang, t } = useLanguage()
  const content = t.legalPages[page]
  useSeo(page)

  return (
    <article className="container-page pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="max-w-3xl">
        <h1 className="heading-xl">{content.title}</h1>

        <p className="mt-8 flex gap-3 rounded-xl bg-cloud p-5 text-sm leading-relaxed text-slate">
          <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-midnight" aria-hidden="true" />
          {t.legalPages.draftNotice}
        </p>

        {content.sections.map((section) => (
          <section key={section.heading} className="mt-12 border-t border-line pt-8">
            <h2 className="text-2xl font-medium tracking-tight">{section.heading}</h2>
            <div className="mt-4 space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-slate">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        <Button to={pagePath(lang)} variant="outline-dark" className="mt-14">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t.legalPages.back}
        </Button>
      </div>
    </article>
  )
}

export default function Legal() {
  const { lang } = useLanguage()
  const { slug } = useParams()
  const page = pageFromSlug(lang, slug)

  return page ? <LegalContent page={page} /> : <NotFound />
}
