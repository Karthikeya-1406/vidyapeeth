import { NavLink } from 'react-router-dom'
import heroMain from '../../assets/images/academics-hero-main.jpg'
import heroSecondary from '../../assets/images/academics-hero-secondary.jpg'

const stats = [
  { value: '1:18', label: 'Faculty Ratio' },
  { value: '100%', label: 'CBE Compliant' },
  { value: '15+', label: 'Active Clubs' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-16 pb-16 sm:px-10 lg:px-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dfe8ff] px-3 py-1 text-xs font-semibold text-brand">
            <span className="size-2 rounded-full bg-accent" />
            CBSE Affiliated Curriculum
          </span>
          <h1 className="font-display text-4xl leading-tight font-bold text-brand sm:text-5xl lg:text-6xl">
            Learn. Explore. <span className="text-accent-dark underline decoration-accent decoration-4 underline-offset-4">Grow.</span>
          </h1>
          <p className="max-w-lg text-lg text-slate-600">
            A learner-centric academic environment in Karimnagar that nurtures innate curiosity,
            21st-century competencies, and real-world mastery.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <NavLink
              to="/admissions"
              className="inline-flex items-center rounded-sm bg-accent px-6 py-3.5 font-sans text-sm font-semibold text-[#705600] shadow-sm transition-colors hover:bg-accent-dark"
            >
              Our Academic Approach &rarr;
            </NavLink>
            <a
              href="#environment"
              className="inline-flex items-center rounded-sm bg-white px-5 py-3.5 font-sans text-sm font-semibold text-brand shadow-sm"
            >
              Campus Spaces
            </a>
          </div>
          <div className="flex w-full flex-wrap gap-6 pt-8">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                {i > 0 && <span className="hidden h-8 w-px bg-slate-300 sm:block" />}
                <div>
                  <p className="font-display text-2xl font-bold text-brand">{stat.value}</p>
                  <p className="text-xs tracking-wide text-slate-500 uppercase">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-2xl border-4 border-white bg-[#d7e3fd] shadow-2xl">
            <img src={heroMain} alt="Vidya Peeth students in an academic lab" className="aspect-square w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-48 overflow-hidden rounded-xl bg-white p-1.5 shadow-2xl">
            <img src={heroSecondary} alt="Vidya Peeth students reading" className="aspect-[4/3] w-full rounded-lg object-cover" />
          </div>
          <div className="absolute -top-6 left-8 flex size-28 -rotate-6 flex-col items-center justify-center rounded-xl bg-[#ffdf92] p-2 text-center shadow-lg">
            <p className="font-display text-sm font-bold text-[#241a00]">Curiosity Today</p>
            <p className="text-xs text-[#241a00]/80">Brighter Tomorrow</p>
          </div>
          <div className="absolute right-4 bottom-6 flex max-w-[220px] items-center gap-2 rounded-lg bg-white/95 p-3 shadow-lg backdrop-blur">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-brand text-white">&#127891;</span>
            <div>
              <p className="text-xs font-bold text-brand">CBSE Affiliation</p>
              <p className="text-[11px] text-slate-500">Competency-Based Standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
