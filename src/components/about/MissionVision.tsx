import { NavLink } from 'react-router-dom'
import heroPrimary from '../../assets/images/about-hero-primary.jpg'
import heroSecondary from '../../assets/images/about-hero-secondary.jpg'

const missionPoints = [
  'Foster self-reliance, courage and confidence',
  'Balance physical well-being with emotional strength',
  'Develop analytical abilities for real-world challenges',
  'Nurture resilient, value-driven individuals',
]

const visionPillars = [
  'Independent Thinking',
  'Critical Analysis',
  'Cultural Appreciation',
  'Harmony with Nature',
  'Social Responsibility',
  'Responsible Citizenship',
]

export default function MissionVision() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              Our Foundation
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            Mission &amp; Institutional Vision
          </h2>
          <p className="max-w-xl text-base text-slate-600">
            Guiding every instructional hour, playground stride, and mentoring dialogue on campus
            &mdash; a future-ready generation built on knowledge, values and purpose.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-[#f0f4fc] p-8 lg:col-span-4">
            <div className="flex flex-col gap-3">
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-lg text-white">&#9650;</span>
              <p className="font-display text-xs font-semibold tracking-[1.2px] text-slate-500 uppercase">
                Our Mission
              </p>
              <h3 className="font-display text-2xl font-extrabold text-brand">To Build Confident Learners</h3>
              <p className="text-sm text-slate-600">
                To cultivate an academic ecosystem that pursues unwavering excellence across
                academics, physical sports, performing arts, and foundational life skills.
              </p>
              <ul className="flex flex-col gap-2 pt-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 text-accent-dark">&#10003;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <NavLink
              to="/academics"
              className="w-fit rounded-xl bg-brand px-6 py-2 font-sans text-sm font-semibold text-white"
            >
              Our Approach &rarr;
            </NavLink>
          </div>

          <div className="relative flex items-center justify-center py-6 lg:col-span-4">
            <div className="relative w-full max-w-[320px]">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img src={heroPrimary} alt="Vidya Peeth students" className="aspect-[3/4] w-full object-cover" />
              </div>
              <div className="absolute -top-4 right-0 flex size-24 flex-col items-center justify-center rounded-xl border-2 border-white bg-[#ffea9f] p-2 text-center font-sans text-[9px] leading-tight font-bold tracking-[0.5px] text-[#241a00] uppercase shadow-lg">
                Values &bull; Learning &bull; Opportunities &bull; Life Skills
              </div>
              <div className="absolute -right-2 bottom-6 size-28 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                <img src={heroSecondary} alt="Vidya Peeth student" className="size-full object-cover" />
              </div>
              <div className="absolute -bottom-10 left-6 max-w-[160px] rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 shadow-lg">
                Curiosity today. <span className="font-bold text-brand">Greater tomorrows.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-[#f2ead8] bg-[#fbf9f4] p-8 lg:col-span-4">
            <div className="flex flex-col gap-3">
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-lg text-white">&#128065;</span>
              <p className="font-display text-xs font-semibold tracking-[1.2px] text-slate-500 uppercase">
                Our Institutional Vision
              </p>
              <h3 className="font-display text-2xl font-extrabold text-brand">To Inspire Lifelong Learners</h3>
              <p className="text-sm text-slate-600">
                To inspire a lifelong passion for learning, empowering independent thinkers who
                navigate existence with thoughtful decision-making, cultural pride, and ecological
                grace.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-3">
                {visionPillars.map((pillar) => (
                  <div key={pillar} className="flex items-center gap-2 rounded-sm p-1 text-xs font-semibold text-slate-800">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e7eeff] text-accent-dark">
                      &#9679;
                    </span>
                    {pillar}
                  </div>
                ))}
              </div>
            </div>
            <NavLink
              to="/beyond-academics"
              className="w-fit rounded-xl bg-brand px-6 py-2 font-sans text-sm font-semibold text-white"
            >
              Our Values &rarr;
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-slate-200 pt-10 text-center">
          <p className="font-display text-xs font-semibold tracking-[1.2px] text-slate-500 uppercase">
            The Outcome
          </p>
          <h3 className="font-display text-3xl font-extrabold text-brand sm:text-4xl">
            Stronger Individuals. A <span className="text-accent-dark underline decoration-accent decoration-4 underline-offset-4">Kinder, Brighter World.</span>
          </h3>
        </div>
      </div>
    </section>
  )
}
