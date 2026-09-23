import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'
import classroomPhoto from '../../assets/images/about-classroom.png'

export default function AboutScrapbook() {
  return (
    <section className="bg-white px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto grid max-w-[1360px] items-center gap-16 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-5 lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="h-[3px] w-6 bg-accent" />
            <span className="font-display text-xs font-extrabold tracking-[2.4px] text-slate-500 uppercase">
              About Vidya Peeth Schools
            </span>
          </div>
          <h2 className="font-display text-4xl leading-tight font-extrabold tracking-tight text-brand sm:text-5xl">
            More Than a School, A Brighter Tomorrow
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            We focus on academic learning, life skills, values{' '}
            <strong className="font-semibold text-brand">and opportunities</strong> — helping
            every child grow into a responsible, curious, and confident individual.
          </p>
          <p className="text-sm leading-relaxed text-slate-500">
            At Vidya Peeth Schools Karimnagar, education transcends conventional textbooks. With
            a balanced pedagogy aligned with CBSE standards, we ignite self-discovery and prepare
            students for a rapidly evolving global society.
          </p>
          <Button as={NavLink} to="/about" icon={<img src={arrowRight} alt="" className="size-4" />}>
            Our Story
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] lg:col-span-7 lg:max-w-[580px]">
          <div className="absolute top-4 right-0 z-10 flex h-[130px] w-[55%] max-w-[220px] flex-col justify-between gap-2 rounded-2xl bg-brand p-4 shadow-[0_25px_50px_-12px_rgba(10,37,86,0.3)] sm:top-6 sm:h-[110px] sm:w-[50%] sm:p-5">
            <span className="font-script text-base leading-tight text-white/90 sm:text-lg">
              Every child has a brighter tomorrow within.
            </span>
            <span className="h-1 w-8 rounded-full bg-accent" />
          </div>

          <div className="relative mt-14 overflow-hidden rounded-3xl border-4 border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:mt-20">
            <img src={classroomPhoto} alt="Students engaged in collaborative group learning" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 py-2 pr-5 pl-2 backdrop-blur-sm">
              <span className="flex size-9 items-center justify-center rounded-full bg-white">
                <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-brand" />
              </span>
              <span className="flex flex-col">
                <span className="font-display text-[10px] font-bold tracking-[1px] text-accent uppercase">
                  Play Video
                </span>
                <span className="max-w-[110px] truncate font-sans text-xs font-semibold text-white sm:max-w-none">
                  Our School in 60 Seconds
                </span>
              </span>
            </div>
          </div>

          <div className="absolute -bottom-4 right-2 flex rotate-2 flex-col items-center gap-1 rounded-xl border-2 border-white bg-accent px-3 py-2 text-center shadow-[0_25px_50px_-12px_rgba(10,37,86,0.18)] sm:-bottom-6 sm:right-10 sm:rounded-2xl sm:px-5 sm:py-4">
            <span className="font-display text-[9px] font-extrabold tracking-[1px] text-brand uppercase sm:text-[11px]">
              Today a Learner
            </span>
            <span className="font-script text-sm text-brand sm:text-xl">Tomorrow a Leader</span>
          </div>
        </div>
      </div>
    </section>
  )
}
