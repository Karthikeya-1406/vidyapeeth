import SectionHeading from '../ui/SectionHeading'
import pillarAthletics from '../../assets/images/beyond-academics/pillar-athletics.jpg'
import pillarArts from '../../assets/images/beyond-academics/pillar-arts.jpg'
import pillarSocial from '../../assets/images/beyond-academics/pillar-social.jpg'
import pillarLeadership from '../../assets/images/beyond-academics/pillar-leadership.jpg'
import pillarEthics from '../../assets/images/beyond-academics/pillar-ethics.jpg'
import pillarSide from '../../assets/images/beyond-academics/pillar-side.jpg'

const pillars = [
  { number: '01', title: 'Athletics & Agility', desc: 'Resilient fitness, strategic instinct, and sportsmanship.', image: pillarAthletics },
  { number: '02', title: 'Arts & Culture', desc: 'Expressive depth through dance, music, fine arts and theatrics.', image: pillarArts },
  { number: '03', title: 'Social Awareness', desc: 'Community service, environmental care and rural upliftment.', image: pillarSocial },
  { number: '04', title: 'Leadership', desc: 'Prefectorial governance, debate, student council and budgeting.', image: pillarLeadership },
  { number: '05', title: 'Ethical Citizenship', desc: 'Moral clarity, constitutional values, global tolerance and integrity.', image: pillarEthics },
]

export default function Pillars() {
  return (
    <section id="pillars" className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-12 lg:items-center lg:gap-6">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Foundational Ecosystem"
            heading="The Five Pillars of Personal Mastery"
            description="True education transcends rote academic absorption. We balance cognitive rigour with bodily discipline and moral resonance."
          />
          <p className="pt-6 font-serif text-2xl font-bold text-brand italic">
            Nurturing Well-Rounded Individuals
          </p>
          <a
            href="#flagship"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 font-sans text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand/90"
          >
            Explore Our Approach
            <span aria-hidden>&rarr;</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-6 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col overflow-hidden rounded-2xl bg-surface shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
            >
              <div className="flex flex-col items-center gap-2 px-2 pt-3 pb-2 text-center">
                <span className="rounded-full bg-[#d7e3fd] px-2 py-0.5 font-sans text-xs font-bold text-brand">
                  {pillar.number}
                </span>
                <p className="font-display text-[13px] font-bold text-brand">{pillar.title}</p>
                <p className="text-[11px] text-slate-600">{pillar.desc}</p>
              </div>
              <img src={pillar.image} alt={pillar.title} className="aspect-square w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="relative hidden overflow-hidden rounded-3xl shadow-2xl lg:col-span-2 lg:block">
          <img src={pillarSide} alt="Vidya Peeth student" className="aspect-3/4 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent" />
          <div className="absolute -bottom-4 right-4 flex size-28 flex-col items-center justify-center gap-1 rounded-xl border-2 border-white bg-[#001134] p-2 text-center shadow-2xl">
            <p className="font-sans text-[9px] font-bold tracking-[0.9px] text-white uppercase">
              Stronger Values
            </p>
            <p className="font-sans text-[9px] font-bold tracking-[0.9px] text-white uppercase">
              Brighter Futures
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
