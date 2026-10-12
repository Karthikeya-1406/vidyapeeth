import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'

export default function AdmissionsCta() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-3xl bg-brand p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:p-12 lg:p-16">
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/80" />
        <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full bg-accent/10" />
        <div aria-hidden className="absolute -right-10 -bottom-32 size-80 rounded-full bg-white/5" />
        <span aria-hidden className="absolute top-6 right-8 hidden font-script text-3xl text-accent/80 lg:block">
          Learning with Purpose. Growing with Confidence.
        </span>

        <div className="relative flex max-w-2xl flex-col items-start gap-5 lg:pt-6">
          <span className="font-display text-xs font-extrabold tracking-[3px] text-accent uppercase">
            Admissions Open 2027&ndash;28 &middot; Vidhyapeeth Karimnagar
          </span>
          <h2 className="font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl">
            Their Next Chapter Could Begin Here.
          </h2>
          <p className="text-base leading-relaxed text-slate-200">
            Strong academics, confident communication and character&mdash;with progress you can
            see.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button as={NavLink} to="/enquiry" icon={<img src={arrowRight} alt="" className="size-4" />}>
              Book a Campus Experience
            </Button>
            <NavLink
              to="/admissions#enquiry"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-display text-xs font-bold tracking-[0.6px] text-white uppercase transition-colors hover:bg-white/10"
            >
              Start Your Admission Enquiry
            </NavLink>
          </div>
          <p className="pt-2 text-xs text-slate-300">
            CBSE Affiliation No. 3630436 &middot; Karimnagar, Telangana
          </p>
        </div>
      </div>
    </section>
  )
}
