import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'
import libraryPhoto from '../../assets/images/academics-library.jpg'

// Only facilities confirmed by the school are listed here.
const learningSpaces = [
  {
    num: '01',
    title: 'Science Lab',
    body: 'Practical experiments that help students observe, test and understand scientific concepts.',
  },
  {
    num: '02',
    title: 'Computer Lab',
    body: 'Hands-on sessions that build digital skills and computational thinking.',
  },
  {
    num: '03',
    title: 'Library',
    body: 'A reading space where students explore books and build lasting reading habits.',
  },
  {
    num: '04',
    title: 'Mathematics Lab',
    body: 'Hands-on materials that make mathematical concepts visible and concrete.',
  },
]

const campusFeatures = [
  { title: 'Smart Classrooms', body: 'Interactive digital boards' },
  { title: 'Playground & Sports Area', body: 'Games and physical activity' },
  { title: 'School Transport', body: 'To and from campus' },
  { title: 'CCTV on Campus', body: 'Camera coverage on campus' },
]

export default function CampusInfrastructure() {
  return (
    <section className="relative bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="relative mx-auto flex max-w-[1360px] flex-col gap-8">
        <div className="max-w-2xl">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
            Spaces that support learning and participation
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
            Campus &amp; Infrastructure
          </h2>
          <p className="mt-3 text-base text-slate-600">
            See the spaces where children learn every day&mdash;and visit to experience the
            campus first-hand.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-3xl border-4 border-slate-100 shadow-lg lg:col-span-7">
            <img
              src={libraryPhoto}
              alt="Student studying at a table in a school library"
              className="aspect-[4/3] size-full object-cover sm:aspect-[16/10]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/10 to-transparent" />
            <div className="absolute right-6 bottom-6 left-6">
              <span className="font-display text-xs font-bold tracking-[1.2px] text-accent uppercase">
                Learning Spaces
              </span>
              <p className="mt-1 font-display text-2xl font-bold text-white">
                Where reading, practice and inquiry happen
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {learningSpaces.map((space) => (
              <div key={space.title} className="flex flex-col rounded-3xl border border-slate-100 bg-surface p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-brand">{space.title}</h3>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-brand shadow-sm">
                    {space.num}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{space.body}</p>
              </div>
            ))}
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {campusFeatures.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col items-center gap-1 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-5 text-center"
            >
              <span className="font-display text-xs font-bold text-brand">{feature.title}</span>
              <span className="text-[11px] text-slate-500">{feature.body}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Button as={NavLink} to="/enquiry" icon={<img src={arrowRight} alt="" className="size-4" />}>
            Book a Campus Experience
          </Button>
          <NavLink
            to="/academics#environment"
            className="font-display text-xs font-bold tracking-[1.2px] text-brand uppercase hover:underline"
          >
            Explore the Campus &rarr;
          </NavLink>
        </div>
      </div>
    </section>
  )
}
