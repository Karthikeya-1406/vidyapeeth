import { NavLink } from 'react-router-dom'
import heroPrimary from '../../assets/images/about-hero-primary.jpg'
import heroSecondary from '../../assets/images/about-hero-secondary.jpg'

const stats = [
  { value: '100%', label: 'CBSE Board Par' },
  { value: '1:18', label: 'Faculty Ratio' },
  { value: '12+', label: 'Acre Smart Campus' },
]

export default function Hero() {
  return (
    <section className="bg-[#f9f9ff] px-6 pt-24 pb-10 sm:px-10 lg:px-16 lg:pt-32 lg:pb-14">
      <div className="mx-auto grid max-w-[1360px] items-start gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4 lg:order-1">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              About Vidya Peeth Schools
            </span>
          </div>
          <h1 className="font-display text-4xl leading-tight font-bold text-brand sm:text-5xl lg:text-6xl lg:tracking-tight">
            More Than a School, <span className="text-accent">A Brighter Tomorrow.</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            We foster an empowering environment where knowledge, life skills, and ethical
            character flourish together—guiding young minds from curiosity to self-actualized
            impact.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <NavLink
              to="/admissions"
              className="inline-flex items-center rounded-sm bg-accent px-6 py-2 font-sans text-sm font-semibold text-[#705600] shadow-sm transition-colors hover:bg-accent-dark"
            >
              Explore Admissions &rarr;
            </NavLink>
            <a href="#story" className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-brand">
              Read Institutional Story &darr;
            </a>
          </div>
          <div className="flex w-full flex-wrap gap-3 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-[140px] flex-1 rounded-sm bg-[#f0f3ff] px-3 py-2.5">
                <p className="font-display text-2xl font-bold text-brand">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[480px] lg:order-2">
          <div className="relative overflow-hidden rounded-lg border-8 border-white bg-[#d7e3fd] shadow-xl">
            <img src={heroPrimary} alt="Vidya Peeth students smiling on campus" className="aspect-[4/3] w-full object-cover" />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-sm bg-[#001134] px-2 py-1 font-sans text-xs font-semibold tracking-[0.6px] text-white uppercase">
              Affiliated to CBSE New Delhi
            </span>
          </div>
          <div className="absolute -bottom-8 left-1/3 aspect-square w-2/5 overflow-hidden rounded-lg border-4 border-white bg-white shadow-2xl">
            <img src={heroSecondary} alt="Vidya Peeth student in a science lab" className="size-full object-cover" />
          </div>
          <span className="absolute -top-4 left-2 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1 font-sans text-xs font-semibold text-brand shadow-lg">
            <span className="size-2.5 rounded-full bg-accent" />
            Curiosity &bull; Character &bull; Leadership
          </span>
        </div>
      </div>
    </section>
  )
}
