import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowUpRight, CircleAlert, CircleCheck, Info } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { site } from '../config/site.js'
import { SECTIONS, pagePath } from '../utils/routes.js'
import { validateContact } from '../utils/validateContact.js'
import { submitContact } from '../utils/submitContact.js'
import Button from '../components/Button.jsx'
import FormField from '../components/FormField.jsx'
import Reveal from '../components/Reveal.jsx'

const EMPTY = { name: '', company: '', email: '', service: '', budget: '', message: '', consent: false, website: '' }
const FIELD_ORDER = ['name', 'email', 'service', 'budget', 'message', 'consent']

export default function Contact() {
  const { lang, t } = useLanguage()
  const c = t.contact
  const [searchParams] = useSearchParams()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  // idle | sending | success | error | unconfigured
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  // Si se llega desde el botón de un servicio (?service=web), se preselecciona.
  const requested = searchParams.get('service')
  useEffect(() => {
    if (requested && c.serviceOptions[requested]) {
      setValues((current) => ({ ...current, service: requested }))
    }
  }, [requested, c.serviceOptions])

  function handleChange(event) {
    const { name, type, value, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    // El error de un campo desaparece en cuanto el usuario lo corrige.
    if (errors[name]) setErrors(({ [name]: _removed, ...others }) => others)
    if (status === 'error' || status === 'unconfigured') setStatus('idle')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const found = validateContact(values)
    setErrors(found)

    const firstInvalid = FIELD_ORDER.find((field) => found[field])
    if (firstInvalid) {
      formRef.current?.querySelector(`#${firstInvalid}`)?.focus()
      return
    }

    // Campo trampa: los humanos no lo ven; si viene relleno es un bot.
    if (values.website) return

    setStatus('sending')
    const { website: _honeypot, consent: _consent, ...data } = values
    const result = await submitContact({
      ...data,
      service: c.serviceOptions[data.service],
      budget: c.budgetOptions[data.budget],
      language: lang,
    })
    setStatus(result)
    if (result === 'success') setValues(EMPTY)
  }

  const errorText = (field) => (errors[field] ? c.errors[errors[field]] : undefined)
  const hasErrors = Object.keys(errors).length > 0

  return (
    <section id={SECTIONS.contact} className="section-pad bg-white">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="heading-xl">{c.title}</h2>
          <p className="lead mt-6 max-w-md">{c.lead}</p>

          <h3 className="mt-12 font-sans text-sm font-medium">{c.nextTitle}</h3>
          <ol className="mt-4 max-w-md border-t border-line">
            {c.next.map((step, index) => (
              <li key={step} className="flex gap-4 border-b border-line py-4 text-slate">
                <span className="font-display text-sm text-midnight">{String(index + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>

          {site.email && (
            <p className="mt-8 text-slate">
              {c.emailLabel}{' '}
              <a href={`mailto:${site.email}`} className="font-medium text-midnight underline underline-offset-4">
                {site.email}
              </a>
            </p>
          )}
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          {status === 'success' ? (
            <div role="status" className="rounded-2xl bg-cloud p-8 sm:p-10">
              <CircleCheck className="h-8 w-8 text-ice-deep" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-medium tracking-tight">{c.status.successTitle}</h3>
              <p className="mt-2 text-slate">{c.status.success}</p>
              <Button variant="outline-dark" className="mt-8" onClick={() => setStatus('idle')}>
                {c.status.again}
              </Button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
              <FormField
                id="name"
                label={c.fields.name.label}
                placeholder={c.fields.name.placeholder}
                autoComplete="name"
                required
                value={values.name}
                onChange={handleChange}
                error={errorText('name')}
              />
              <FormField
                id="company"
                label={c.fields.company.label}
                hint={c.optional}
                placeholder={c.fields.company.placeholder}
                autoComplete="organization"
                value={values.company}
                onChange={handleChange}
              />
              <FormField
                id="email"
                type="email"
                inputMode="email"
                label={c.fields.email.label}
                placeholder={c.fields.email.placeholder}
                autoComplete="email"
                required
                value={values.email}
                onChange={handleChange}
                error={errorText('email')}
                className="sm:col-span-2"
              />
              <FormField
                as="select"
                id="service"
                label={c.fields.service.label}
                placeholder={c.fields.service.placeholder}
                options={c.serviceOptions}
                required
                value={values.service}
                onChange={handleChange}
                error={errorText('service')}
              />
              <FormField
                as="select"
                id="budget"
                label={c.fields.budget.label}
                placeholder={c.fields.budget.placeholder}
                options={c.budgetOptions}
                required
                value={values.budget}
                onChange={handleChange}
                error={errorText('budget')}
              />
              <FormField
                as="textarea"
                id="message"
                label={c.fields.message.label}
                placeholder={c.fields.message.placeholder}
                required
                value={values.message}
                onChange={handleChange}
                error={errorText('message')}
                className="sm:col-span-2"
              />

              {/* Campo trampa anti-spam, oculto para personas y lectores de pantalla. */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-2">
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={values.consent}
                    onChange={handleChange}
                    aria-invalid={errors.consent ? 'true' : undefined}
                    aria-describedby={errors.consent ? 'consent-error' : undefined}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-midnight"
                  />
                  <label htmlFor="consent" className="text-sm leading-relaxed text-slate">
                    {c.fields.consent.label}{' '}
                    <Link
                      to={pagePath(lang, 'privacy')}
                      className="font-medium text-midnight underline underline-offset-4"
                    >
                      {c.fields.consent.link}
                    </Link>
                    .
                  </label>
                </div>
                {errors.consent && (
                  <p id="consent-error" className="mt-2 flex items-start gap-1.5 text-sm text-red-700">
                    <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {errorText('consent')}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  variant="dark"
                  size="lg"
                  icon={ArrowUpRight}
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto"
                >
                  {status === 'sending' ? c.sending : c.submit}
                </Button>

                {/* Mensajes de estado. aria-live hace que los lectores de pantalla los anuncien. */}
                <div aria-live="polite" className="mt-5">
                  {hasErrors && <p className="text-sm text-red-700">{c.errors.summary}</p>}

                  {status === 'unconfigured' && (
                    <div className="flex gap-3 rounded-xl bg-cloud p-5">
                      <Info className="mt-0.5 h-5 w-5 shrink-0 text-ice-deep" aria-hidden="true" />
                      <div>
                        <p className="font-medium">{c.status.unconfiguredTitle}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate">{c.status.unconfigured}</p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex gap-3 rounded-xl bg-red-50 p-5">
                      <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-700" aria-hidden="true" />
                      <div>
                        <p className="font-medium">{c.status.errorTitle}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate">{c.status.error}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
