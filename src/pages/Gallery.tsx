import Reveal from '../components/ui/Reveal'
import Hero from '../components/gallery/Hero'
import GalleryGrid from '../components/gallery/GalleryGrid'
import FeatureVignette from '../components/gallery/FeatureVignette'
import AdmissionsBanner from '../components/shared/AdmissionsBanner'

export default function Gallery() {
  return (
    <>
      <Hero />
      <Reveal>
        <GalleryGrid />
      </Reveal>
      <Reveal>
        <FeatureVignette />
      </Reveal>
      <Reveal>
        <AdmissionsBanner
          eyebrow="Admissions Open for AY 2024–25"
          heading="Be Part of These Cherished Memories."
          body="Give your child the gift of world-class CBSE learning, expansive athletic fields, and nurturing mentor relationships in Karimnagar."
          secondaryLabel="Enquire via Desk"
          secondaryTo="/enquiry"
        />
      </Reveal>
    </>
  )
}
