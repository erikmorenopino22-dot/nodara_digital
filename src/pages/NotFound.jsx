import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useSeo } from '../hooks/useSeo.js'
import { pagePath } from '../utils/routes.js'
import Button from '../components/Button.jsx'

export default function NotFound() {
  const { lang, t } = useLanguage()
  useSeo('notFound', { noindex: true })

  return (
    <section className="container-page flex min-h-[80svh] flex-col justify-center pt-36 pb-24">
      <p className="font-display text-sm text-slate">404</p>
      <h1 className="heading-xl mt-4">{t.notFound.title}</h1>
      <p className="lead mt-5 max-w-md">{t.notFound.text}</p>
      <Button to={pagePath(lang)} variant="dark" className="mt-10 self-start">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {t.notFound.button}
      </Button>
    </section>
  )
}
