import Reveal from '../components/ui/Reveal'
import Hero from '../components/contact/Hero'
import InfoCards from '../components/contact/InfoCards'
import HelpdeskRouter from '../components/contact/HelpdeskRouter'
import FormMapSplit from '../components/contact/FormMapSplit'
import Faq from '../components/contact/Faq'
import CtaBanner from '../components/contact/CtaBanner'

export default function Contact() {
  return (
    <>
      <Hero />
      <Reveal>
        <InfoCards />
      </Reveal>
      <Reveal>
        <HelpdeskRouter />
      </Reveal>
      <Reveal>
        <FormMapSplit />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <CtaBanner />
      </Reveal>
    </>
  )
}
