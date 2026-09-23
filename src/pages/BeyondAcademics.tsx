import Reveal from '../components/ui/Reveal'
import Hero from '../components/beyond-academics/Hero'
import Pillars from '../components/beyond-academics/Pillars'
import FlagshipInitiatives from '../components/beyond-academics/FlagshipInitiatives'
import SportsInfrastructure from '../components/beyond-academics/SportsInfrastructure'
import Cta from '../components/beyond-academics/Cta'

export default function BeyondAcademics() {
  return (
    <>
      <Hero />
      <Reveal>
        <Pillars />
      </Reveal>
      <Reveal>
        <FlagshipInitiatives />
      </Reveal>
      <Reveal>
        <SportsInfrastructure />
      </Reveal>
      <Reveal>
        <Cta />
      </Reveal>
    </>
  )
}
