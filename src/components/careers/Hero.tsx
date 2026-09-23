import { Link } from 'react-router-dom'
import heroMain from '../../assets/images/careers/hero-main.jpg'
import heroChip from '../../assets/images/careers/hero-chip.jpg'

const stats = [
  { value: '1:18', label: 'Educator to Pupil Ratio' },
  { value: '100+', label: 'Faculty Workshops / Yr' },
  { value: 'CBSE', label: 'Pedagogical Framework' },
]

export default function Hero() {
  return (
    <section className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-12 lg:items-center">
        <div className="flex flex-col gap-4 lg:col-span-6">
          <span className="flex w-fit items-center gap-1 rounded-xl bg-[#e7eeff] px-3 py-1 text-xs font-semibold text-brand">
            <span className="size-1.5 rounded-full bg-accent" />
            CAREERS AT VIDYA PEETH
          </span>
          <h1 className="font-display text-4xl font-bold tracking-[-1px] text-brand sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Shape Young Minds.
            <br />
            Build Brighter{' '}
            <span className="rounded-sm bg-accent px-2 text-[#705600] shadow-sm">Futures.</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-600">
            Join a community of dedicated educators and visionary school administrators fostering pedagogical
            innovation in a nurturing, CBSE-aligned academic ecosystem in Karimnagar.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#open-calls"
              className="flex items-center gap-1 rounded-sm bg-accent px-6 py-3 font-sans text-sm font-semibold tracking-[0.14px] text-[#705600] shadow-md transition-colors hover:bg-accent-dark"
            >
              EXPLORE OPEN CALLS →
            </a>
            <Link
              to="/about"
              className="flex items-center rounded-sm bg-white px-4 py-3 font-sans text-sm font-semibold text-brand shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]"
            >
              OUR TEACHING ETHOS
            </Link>
          </div>
          <div className="flex max-w-lg gap-4 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1 rounded-sm bg-white p-2 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]">
                <p className="font-display text-2xl font-bold tracking-[-0.5px] text-brand">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-xl">
            <img src={heroMain} alt="Teachers mentoring students at Vidya Peeth Schools" className="h-80 w-full object-cover sm:h-[430px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001134]/70 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-lg bg-white/90 p-2 backdrop-blur-sm">
              <span className="flex size-9 items-center justify-center rounded-sm bg-brand text-accent">📖</span>
              <p className="font-display text-sm font-bold text-brand">Pedagogical Mentorship</p>
            </div>
          </div>
          <span className="absolute top-0 right-4 flex size-32 rotate-6 flex-col items-center justify-center gap-1 rounded-xl bg-accent p-2 text-center text-xs font-bold text-[#705600] shadow-lg sm:right-10">
            📘
            <span>Inspiring Today, Leading Tomorrow</span>
          </span>
          <div className="absolute -bottom-6 left-0 flex max-w-[240px] items-center gap-2 rounded-lg bg-white p-2 shadow-xl sm:-left-6">
            <img src={heroChip} alt="Teachers collaborating" className="size-16 rounded-sm object-cover" />
            <div>
              <p className="text-xs font-bold text-brand">Collaborative Culture</p>
              <p className="text-xs text-slate-500">Cross-departmental planning circles every Friday</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
