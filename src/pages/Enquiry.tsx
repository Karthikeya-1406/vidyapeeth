import Reveal from '../components/ui/Reveal'
import Breadcrumb from '../components/enquiry/Breadcrumb'
import Hero from '../components/enquiry/Hero'
import ConsultationJourney from '../components/enquiry/ConsultationJourney'
import CampusTour from '../components/enquiry/CampusTour'

export default function Enquiry() {
  return (
    <>
      <Breadcrumb />
      <Hero />
      <Reveal>
        <ConsultationJourney />
      </Reveal>
      <Reveal>
        <CampusTour />
      </Reveal>
    </>
  )
}
