import Reveal from '../components/ui/Reveal'
import Hero from '../components/academics/Hero'
import CurriculumFramework from '../components/academics/CurriculumFramework'
import PedagogyInPractice from '../components/academics/PedagogyInPractice'
import CbeCompetency from '../components/academics/CbeCompetency'
import EnvironmentTour from '../components/academics/EnvironmentTour'
import AdmissionsBanner from '../components/shared/AdmissionsBanner'
import ctaBanner from '../assets/images/academics-cta-banner.jpg'

export default function Academics() {
  return (
    <>
      <Hero />
      <Reveal>
        <CurriculumFramework />
      </Reveal>
      <Reveal>
        <PedagogyInPractice />
      </Reveal>
      <Reveal>
        <CbeCompetency />
      </Reveal>
      <Reveal>
        <EnvironmentTour />
      </Reveal>
      <Reveal>
        <AdmissionsBanner
          eyebrow="Admissions Now Open • Academic Year 2024–25"
          heading="Begin Their Academic Journey at Vidya Peeth"
          body="Give your child the lifelong advantage of conceptual clarity, balanced personal development, and intellectual leadership. Our counselors are ready to welcome your family."
          secondaryLabel="Talk to Academic Counselor"
          secondaryTo="/contact"
          image={ctaBanner}
          imageCaption={
            <>
              <p className="font-display text-sm font-bold text-white">Dream. Learn. Achieve.</p>
              <p className="text-xs text-slate-200">Karimnagar&rsquo;s premier CBSE community</p>
            </>
          }
        />
      </Reveal>
    </>
  )
}
