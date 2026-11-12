import { useLanguage } from '../context/LanguageContext.jsx'
import { SECTIONS } from '../utils/routes.js'
import { SERVICES } from '../data/services.js'
import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id={SECTIONS.services} className="section-pad bg-cloud">
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <h2 className="heading-xl">{t.services.title}</h2>
          <p className="lead mt-6 max-w-xl">{t.services.lead}</p>
        </Reveal>

        <div className="mt-14 space-y-5 lg:mt-20 lg:space-y-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              reverse={index === 1}
              dark={index === SERVICES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
