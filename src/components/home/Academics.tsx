import { NavLink } from 'react-router-dom'
import classroomPhoto from '../../assets/images/academics-classroom.png'

const stages = [
  {
    dot: 'bg-blue-50',
    dotInner: 'bg-accent',
    title: 'Foundational & Primary Years',
    tagline: 'Building Curiosity and Strong Foundations',
    body: 'Language, numeracy and activity-based learning that nurture curiosity and confidence.',
  },
  {
    dot: 'bg-amber-50',
    dotInner: 'bg-accent-dark',
    title: 'Middle School',
    tagline: 'Question. Explore. Apply.',
    body: 'Inquiry, projects and experiments that turn information into active thinking.',
  },
  {
    dot: 'bg-emerald-50',
    dotInner: 'bg-emerald-500',
    title: 'Secondary School',
    tagline: 'Mastery, Application & Readiness',
    body: 'Conceptual learning and structured assessments that build readiness for CBSE examinations.',
  },
]

const skills = ['Think', 'Question', 'Communicate', 'Collaborate', 'Create']

export default function Academics() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="relative mx-auto flex max-w-[1360px] flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
          <div className="max-w-2xl">
            <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
              Academics at Vidhyapeeth Karimnagar
            </span>
            <h2 className="mt-2 font-display text-4xl leading-tight font-extrabold tracking-tight text-brand sm:text-[44px]">
              CBSE Learning That Builds Understanding, Inquiry and Application
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600">
            Our CBSE approach goes beyond memorising answers. Through inquiry, discussions,
            projects and experiments, students build strong foundations, curiosity and
            problem-solving ability.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="relative -rotate-1 overflow-hidden rounded-3xl border-8 border-white shadow-[0_20px_40px_-15px_rgba(10,37,86,0.12)]">
              <img
                src={classroomPhoto}
                alt="Teacher guiding students through a science experiment in a laboratory"
                className="aspect-[4/5] w-full object-cover sm:aspect-[3/2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/30 to-transparent" />
              <div className="absolute right-6 bottom-6 left-6 flex flex-col gap-1">
                <span className="w-fit rounded-full bg-accent px-3 py-1 font-display text-[11px] font-extrabold tracking-[0.5px] text-brand uppercase">
                  Inquiry-Based Learning
                </span>
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Learning Begins with Better Questions
                </h3>
                <p className="max-w-xl text-sm text-white/85">
                  Students learn to frame questions, interpret information and explore different
                  possibilities.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-display text-sm font-extrabold tracking-[1px] text-accent-dark uppercase">
                Future-Ready Skills
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-amber-200/70 bg-amber-50 px-3 py-1 font-display text-xs font-bold text-brand"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {stages.map((stage) => (
              <div key={stage.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${stage.dot}`}>
                  <span className={`size-3 rotate-45 rounded-[1px] ${stage.dotInner}`} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand">{stage.title}</h3>
                  <p className="mt-0.5 font-display text-xs font-bold tracking-[0.4px] text-accent-dark">
                    {stage.tagline}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{stage.body}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-xs">
              <NavLink
                to="/academics"
                className="font-display font-extrabold tracking-[1.2px] text-brand uppercase hover:underline"
              >
                Explore Our Academic Approach &rarr;
              </NavLink>
              <span className="text-slate-300">&bull;</span>
              <span className="font-script text-base text-slate-500">Understand. Question. Think. Apply.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
