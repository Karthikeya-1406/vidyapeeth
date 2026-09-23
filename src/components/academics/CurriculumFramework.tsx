import { NavLink } from 'react-router-dom'
import robotics from '../../assets/images/academics-robotics-badge.jpg'
import discussing from '../../assets/images/academics-hero-secondary.jpg'

const tags = [
  'Learner-Centric Approach',
  '21st-Century Competencies',
  'Analysis & Interpretation',
  'Broad & Balanced Knowledge',
  'Effective Communication',
  'Informed Decision-Making',
]

export default function CurriculumFramework() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-slate-500 uppercase">
              Our Curriculum
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            A Strong Academic Foundation
          </h2>
          <p className="text-base text-slate-600">
            Our curriculum is a dynamic framework that builds conceptual clarity, strengthens core
            skills, and encourages every learner to explore, question and apply knowledge in
            real-life contexts.
          </p>
          <NavLink
            to="/admissions"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-sans text-sm font-bold text-brand shadow-sm"
          >
            Apply for Admission &rarr;
          </NavLink>
          <blockquote className="max-w-md border-l-4 border-accent py-2 pl-6">
            <p className="font-display text-lg text-brand">
              &ldquo;We replace passive memorisation with experiential inquiry. Students construct
              their understanding through evidence and debate.&rdquo;
            </p>
            <p className="pt-2 text-xs font-semibold text-slate-500">&mdash; Academic Director, Vidya Peeth</p>
          </blockquote>
        </div>

        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
          <div className="col-span-2 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
            <img src={discussing} alt="Vidya Peeth students in discussion" className="aspect-[4/3] w-full object-cover" />
          </div>
          {tags.map((tag) => (
            <div key={tag} className="rounded-lg bg-white p-3 text-center shadow-sm">
              <p className="font-display text-xs font-bold text-brand">{tag}</p>
            </div>
          ))}
          <div className="col-span-2 flex items-center gap-3 rounded-lg bg-brand p-4 text-white shadow-sm">
            <img src={robotics} alt="Hands-on robotics learning" className="size-12 shrink-0 rounded-sm object-cover" />
            <p className="font-display text-sm font-bold">Hands-on Learning, Beyond Textbooks</p>
          </div>
        </div>
      </div>
    </section>
  )
}
