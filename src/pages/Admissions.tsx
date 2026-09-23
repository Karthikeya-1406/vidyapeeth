import Reveal from '../components/ui/Reveal'
import Hero from '../components/admissions/Hero'
import AdmissionJourney from '../components/admissions/AdmissionJourney'
import Experience from '../components/admissions/Experience'
import EnquirySection from '../components/admissions/EnquirySection'
import CampusDesk from '../components/admissions/CampusDesk'

export default function Admissions() {
  return (
    <>
      <Hero />
      <Reveal>
        <AdmissionJourney />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <EnquirySection />
      </Reveal>
      <Reveal>
        <CampusDesk />
      </Reveal>
    </>
  )
}
