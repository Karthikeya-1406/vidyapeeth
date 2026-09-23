import { NavLink } from 'react-router-dom'
import classroomPhoto from '../../assets/images/academics-classroom.png'

const stages = [
  {
    dot: 'bg-blue-50',
    dotInner: 'bg-accent',
    title: 'Foundational & Primary Stage',
    body: 'Activity-based play, phonics, number sense, and sensory stimulation that sparks inherent curiosity.',
  },
  {
    dot: 'bg-amber-50',
    dotInner: 'bg-accent-dark',
    title: 'Middle School Inquiry',
    body: 'Interdisciplinary science and math modules, laboratory experiences, and expressive language arts.',
  },
  {
    dot: 'bg-emerald-50',
    dotInner: 'bg-emerald-500',
    title: 'Secondary Academic Rigor',
    body: 'Targeted board preparation, conceptual mastery, competitive exam foundations, and ethical leadership development.',
  },
]

export default function Academics() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="relative mx-auto flex max-w-[1360px] flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
              Academics
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
              Learn. Explore. Grow.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            CBSE education with learner-centric curriculum and 21st-century skills designed to
            build conceptual depth, analytical minds, and genuine empathy.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="relative -rotate-1 overflow-hidden rounded-3xl border-8 border-white shadow-[0_20px_40px_-15px_rgba(10,37,86,0.12)] lg:col-span-7">
            <img
              src={classroomPhoto}
              alt="Vidya Peeth student engaged in classroom discovery"
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1">
              <span className="w-fit rounded-full bg-accent px-3 py-1 font-display text-[11px] font-extrabold tracking-[0.5px] text-brand uppercase">
                CBSE Curriculum &bull; Nursery to Class X
              </span>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Competency-Based Education (CBE)
              </h3>
              <p className="text-sm text-white/80">
                Moving from rote memorization toward problem-solving, real-world application, and
                active project inquiry.
              </p>
            </div>
            <div className="absolute top-4 right-4 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-lg sm:flex">
              <span className="flex size-10 items-center justify-center rounded-full bg-amber-100 font-display text-sm font-bold text-brand">
                21st
              </span>
              <span className="flex flex-col">
                <span className="font-display text-xs font-bold text-brand">Century Skills</span>
                <span className="text-[11px] text-slate-500">Critical &amp; Creative Thinking</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {stages.map((stage) => (
              <div key={stage.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${stage.dot}`}>
                  <span className={`size-3 rotate-45 rounded-[1px] ${stage.dotInner}`} />
                </span>
                <div>
                  <h4 className="font-display text-lg font-bold text-brand">{stage.title}</h4>
                  <p className="mt-1 text-sm text-slate-600">{stage.body}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-2 text-xs">
              <NavLink
                to="/academics"
                className="font-display font-extrabold tracking-[1.2px] text-brand uppercase hover:underline"
              >
                Explore Academics &rarr;
              </NavLink>
              <span className="text-slate-300">&bull;</span>
              <span className="font-semibold text-slate-500">Affiliation No. 3630436</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
