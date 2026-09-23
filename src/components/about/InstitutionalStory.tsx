import storyCampus from '../../assets/images/about-story-campus.jpg'

const pillars = [
  {
    title: 'Cognitive Rigor',
    body: 'Stimulating questioning minds through analytical exploration and STEM foundations.',
  },
  {
    title: 'Moral Compass',
    body: 'Inculcating civic integrity, mutual respect, and ecological stewardship.',
  },
]

export default function InstitutionalStory() {
  return (
    <section id="story" className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src={storyCampus} alt="Vidya Peeth Schools campus and leadership" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="relative -mt-10 ml-auto max-w-xs rounded-xl bg-brand p-6 shadow-2xl sm:absolute sm:right-6 sm:-bottom-6">
            <span className="font-display text-2xl text-accent">&ldquo;</span>
            <p className="font-display text-lg font-medium text-white">
              Good Education Builds Brighter Tomorrows.
            </p>
            <p className="pt-1 text-xs font-semibold text-accent-light">&mdash; Vidya Peeth Founding Ideal</p>
          </div>
        </div>

        <div className="order-1 flex flex-col items-start gap-4 lg:order-2">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              Our Institutional Story
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            Rooted in Tradition, Designed for Future-Ready Thinkers
          </h2>
          <p className="text-base text-slate-600">
            Established in Karimnagar with a solemn mandate to bridge timeless pedagogical values
            with contemporary inquiry, Vidya Peeth Schools represents an intellectual haven where
            children evolve from enthusiastic learners into responsible global leaders.
          </p>
          <p className="text-base text-slate-600">
            Operating under strict alignment with the Central Board of Secondary Education (CBSE
            Affiliation No. 3630436), our academic structure emphasizes conceptual mastery,
            critical thinking, linguistic command, and societal empathy over rote memorization.
          </p>
          <div className="grid w-full gap-4 pt-2 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-sm bg-white p-4 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-brand">{pillar.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
