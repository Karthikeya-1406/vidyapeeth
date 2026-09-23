import Reveal from '../components/ui/Reveal'
import Hero from '../components/careers/Hero'
import CorePillars from '../components/careers/CorePillars'
import OpportunitiesNotice from '../components/careers/OpportunitiesNotice'
import ResumeSection from '../components/careers/ResumeSection'
import WorkEnvironment from '../components/careers/WorkEnvironment'
import IntegrityBanner from '../components/careers/IntegrityBanner'

export default function Careers() {
  return (
    <>
      <Hero />
      <Reveal>
        <CorePillars />
      </Reveal>
      <Reveal>
        <OpportunitiesNotice />
      </Reveal>
      <Reveal>
        <ResumeSection />
      </Reveal>
      <Reveal>
        <WorkEnvironment />
      </Reveal>
      <Reveal>
        <IntegrityBanner />
      </Reveal>
    </>
  )
}
