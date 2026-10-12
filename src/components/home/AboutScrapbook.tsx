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
              About Vidhyapeeth Karimnagar
            </span>
          </div>
          <h2 className="font-display text-4xl leading-tight font-extrabold tracking-tight text-brand sm:text-[44px]">
            A CBSE School Where Children Think, Question and Grow.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Meaningful learning goes beyond memorising answers. Alongside strong CBSE academics, we
            nurture communication, creativity and character&mdash;while ensuring every child is{' '}
            <strong className="font-semibold text-brand">known, guided and encouraged to progress</strong>.
          </p>
          <Button as={NavLink} to="/about" icon={<img src={arrowRight} alt="" className="size-4" />}>
            Discover Vidhyapeeth
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] lg:col-span-7 lg:max-w-[580px]">
          <div className="absolute top-4 right-0 z-10 flex h-[130px] w-[55%] max-w-[220px] flex-col justify-between gap-2 rounded-2xl bg-brand p-4 shadow-[0_25px_50px_-12px_rgba(10,37,86,0.3)] sm:top-6 sm:h-[110px] sm:w-[50%] sm:p-5">
            <span className="font-script text-base leading-tight text-white/90 sm:text-lg">
              Every Child Is Known. Every Question Matters.
            </span>
            <span className="h-1 w-8 rounded-full bg-accent" />
          </div>

          <div className="relative mt-14 overflow-hidden rounded-3xl border-4 border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:mt-20">
            <img
              src={classroomPhoto}
              alt="Teacher asking a question as students raise their hands during a lesson"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
