import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'

export default function Cta() {
  return (
    <section className="bg-surface px-6 py-10 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-3xl bg-brand p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:p-12 lg:p-16">
        <div className="absolute -right-20 -top-20 size-80 rounded-xl bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-60 rounded-xl bg-white/10 blur-3xl" />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-col items-start gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-sans text-xs font-semibold tracking-[1.2px] text-accent-light uppercase backdrop-blur">
              Admissions Open for Academic Year 2025–26
            </span>
            <h2 className="font-display text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-5xl">
              Empowering Every Student <span className="text-accent-light">Beyond Textbooks.</span>
            </h2>
            <p className="text-base leading-relaxed text-footer-muted">
              Give your child the balance of rigorous CBSE academics, national sports training,
              entrepreneurship incubation, and rooted moral leadership at Vidya Peeth Schools,
              Karimnagar.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button as={NavLink} to="/admissions" icon={<img src={arrowRight} alt="" className="size-4" />}>
                Apply for Admission
              </Button>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-display text-xs font-bold tracking-[0.6px] text-white uppercase transition-colors hover:bg-white/10"
              >
                Schedule Campus Visit
              </NavLink>
            </div>
          </div>

          <div className="w-full max-w-sm shrink-0 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <p className="font-sans text-xs font-bold tracking-[0.6px] text-accent-light uppercase">
              Admission Desk
            </p>
            <p className="pt-1 font-display text-xl font-bold text-white">09346002121</p>
            <p className="pt-1 text-sm text-footer-muted">Monday – Saturday, 8:00 AM – 2:00 PM</p>
            <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-xs text-accent-light">
              <span>CBSE Affiliation: 3630436</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
