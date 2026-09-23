import { NavLink } from 'react-router-dom'
import sportsPhoto from '../../assets/images/student-initiatives-sports.png'

const programs = [
  'Inter-School Olympiads',
  'Decode Startups & Young Innovators',
  'KEO & Born to Win Competitions',
]

export default function StudentInitiatives() {
  return (
    <section className="relative overflow-hidden bg-brand px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="relative mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-5 lg:col-span-5">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent uppercase">
            Student Initiatives
          </span>
          <h2 className="font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl">
            Beyond the Classroom
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            Competitions, entrepreneurship, knowledge exchange, and stage arts — our students
            develop poise, public speech, leadership, and camaraderie through active
            participation.
          </p>
          <div className="flex w-full flex-col gap-3">
            {programs.map((program) => (
              <div key={program} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">
                <span className="size-2 shrink-0 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-white">{program}</span>
              </div>
            ))}
          </div>
          <NavLink
            to="/beyond-academics"
            className="pt-2 font-display text-xs font-extrabold tracking-[1.2px] text-accent uppercase hover:underline"
          >
            Learn More About Activities &rarr;
          </NavLink>
        </div>

        <div className="relative lg:col-span-7">
          <div className="absolute -inset-3 -rotate-1 rounded-3xl bg-accent/80" />
          <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <img src={sportsPhoto} alt="Students engaged in outdoor sports and activities" className="aspect-[16/10] w-full object-cover" />
            <div className="flex items-center justify-between bg-brand p-6">
              <div>
                <span className="font-display text-xs font-bold tracking-[0.6px] text-accent uppercase">
                  Annual Events
                </span>
                <p className="font-display text-lg font-bold text-white">
                  Sports Meets & Cultural Celebrations
                </p>
              </div>
              <span className="font-script text-2xl text-accent">#WinnersInLife</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
