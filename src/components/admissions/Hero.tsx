import { NavLink } from 'react-router-dom'
import heroImage from '../../assets/images/admissions/hero.jpg'

const badges = [
  { value: 'CBSE', label: 'Affiliation 3630436' },
  { value: '15:1', label: 'Student-Teacher Ratio' },
  { value: 'K-12', label: 'Holistic Campus' },
]

export default function Hero() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start lg:order-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dfe8ff] px-3 py-1 font-sans text-xs font-bold tracking-[0.6px] text-brand uppercase">
            <span className="size-2 rounded-full bg-accent" />
            Admissions Open
          </span>
          <h1 className="pt-4 font-display text-4xl leading-tight font-extrabold text-brand sm:text-5xl lg:text-[56px]">
            Take the{' '}
            <span className="bg-accent/40 text-[#765b00]">Next Step.</span>
          </h1>
          <p className="max-w-lg pt-4 text-lg text-slate-600">
            Join a vibrant K–12 learning community fostering academic rigor, progressive
            character, and holistic global perspectives in Karimnagar.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-8">
            <NavLink
              to="/enquiry"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-4 font-sans text-sm font-semibold text-[#705600] shadow-sm transition-colors hover:bg-accent-dark"
            >
              Apply for Enquiry &rarr;
            </NavLink>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-sm bg-[#e7eeff] px-6 py-4 font-sans text-sm font-semibold text-brand"
            >
              Explore Process
            </a>
          </div>
          <div className="mt-8 grid w-full grid-cols-3 gap-3">
            {badges.map((badge) => (
              <div key={badge.label} className="rounded-sm bg-white p-3 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]">
                <p className="font-display text-base font-bold text-brand">{badge.value}</p>
                <p className="text-xs text-slate-500">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="overflow-hidden rounded-lg border-4 border-white bg-white shadow-2xl">
            <img src={heroImage} alt="Vidya Peeth campus" className="aspect-4/3 w-full object-cover" />
            <div className="flex items-center justify-between gap-3 bg-white/95 p-4 backdrop-blur">
              <div>
                <p className="font-sans text-sm font-bold text-brand">Campus Admissions Open</p>
                <p className="text-xs text-slate-600">Guided campus walks available Mon–Sat</p>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg">
                &#127891;
              </span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] items-center gap-2 rounded-lg bg-brand p-4 text-white shadow-2xl sm:flex">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-accent text-lg">
              &#128218;
            </span>
            <div>
              <p className="font-display text-sm font-semibold">Curiosity Today</p>
              <p className="text-xs text-footer-muted">Brighter Tomorrows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
