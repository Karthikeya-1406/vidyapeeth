import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'
import bannerPhoto from '../../assets/images/admissions-banner-students.png'

export default function AdmissionsCta() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-3xl bg-brand p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:p-12 lg:p-16">
        <img
          src={bannerPhoto}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/95 to-brand/80" />
        <span className="absolute top-6 right-8 hidden font-script text-3xl text-accent/80 sm:block">
          A Brighter Tomorrow Together
        </span>

        <div className="relative flex max-w-2xl flex-col items-start gap-5">
          <span className="font-display text-xs font-extrabold tracking-[3px] text-accent uppercase">
            Admissions Open 2025&ndash;26
          </span>
          <h2 className="font-display text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to Be a Part of Their Bright Tomorrow?
          </h2>
          <p className="text-base leading-relaxed text-slate-200">
            Give your child a learning environment that builds knowledge, confidence, character,
            and opportunity. Admissions are open for Nursery through High School.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button as={NavLink} to="/admissions" icon={<img src={arrowRight} alt="" className="size-4" />}>
              Apply for Admission
            </Button>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-display text-xs font-bold tracking-[0.6px] text-white uppercase transition-colors hover:bg-white/10"
            >
              Get in Touch
            </NavLink>
          </div>
          <p className="pt-2 text-xs text-slate-400">
            CBSE Affiliation No. 3630436 &bull; Karimnagar, Telangana
          </p>
        </div>
      </div>
    </section>
  )
}
