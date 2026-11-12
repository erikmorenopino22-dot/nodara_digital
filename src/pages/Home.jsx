import { useSeo } from '../hooks/useSeo.js'
import Hero from '../sections/Hero.jsx'
import Intro from '../sections/Intro.jsx'
import Services from '../sections/Services.jsx'
import Engineering from '../sections/Engineering.jsx'
import Process from '../sections/Process.jsx'
import Portfolio from '../sections/Portfolio.jsx'
import About from '../sections/About.jsx'
import CTA from '../sections/CTA.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home() {
  useSeo('home')

  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Engineering />
      <Process />
      <Portfolio />
      <About />
      <CTA />
      <Contact />
    </>
  )
}
