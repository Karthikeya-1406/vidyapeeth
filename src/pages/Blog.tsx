import Reveal from '../components/ui/Reveal'
import Masthead from '../components/blog/Masthead'
import SecondaryStories from '../components/blog/SecondaryStories'
import Quotation from '../components/blog/Quotation'
import NewsletterCta from '../components/blog/NewsletterCta'

export default function Blog() {
  return (
    <>
      <Masthead />
      <Reveal>
        <SecondaryStories />
      </Reveal>
      <Reveal>
        <Quotation />
      </Reveal>
      <Reveal>
        <NewsletterCta />
      </Reveal>
    </>
  )
}
