import Reveal from '../components/ui/Reveal'
import Hero from '../components/mandatory-disclosure/Hero'
import OverviewBanner from '../components/mandatory-disclosure/OverviewBanner'
import DocumentRepository from '../components/mandatory-disclosure/DocumentRepository'
import PerformancePanel from '../components/mandatory-disclosure/PerformancePanel'
import GrievanceBox from '../components/mandatory-disclosure/GrievanceBox'

export default function MandatoryDisclosure() {
  return (
    <>
      <Hero />
      <Reveal>
        <OverviewBanner />
      </Reveal>
      <Reveal>
        <DocumentRepository />
      </Reveal>
      <Reveal>
        <PerformancePanel />
      </Reveal>
      <Reveal>
        <GrievanceBox />
      </Reveal>
    </>
  )
}
