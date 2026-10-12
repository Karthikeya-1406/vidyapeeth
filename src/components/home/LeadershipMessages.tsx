import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'

// Names and roles as approved by the school. Add a `photo` (with the alt text below)
// only once an approved portrait is available; until then the initial is shown.
// Do not add qualifications, surnames or quotes without approval.
const leaders: { name: string; role: string; photo?: string }[] = [
  { name: 'Shireesha', role: 'Director' },
  { name: 'Deepthi', role: 'Principal' },
]

export default function LeadershipMessages() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-12">
        <div className="text-center">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
            Guiding learning with purpose
          </span>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-brand sm:text-4xl">Leadership</h2>
          <p className="mt-2 text-sm text-slate-600">Meet the leadership of Vidhyapeeth Karimnagar.</p>
        </div>

        <ul className="grid w-full max-w-3xl gap-6 sm:grid-cols-2">
          {leaders.map((leader) => (
            <li
              key={leader.name}
              className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200/80 bg-slate-50/60 p-8 text-center shadow-sm"
            >
              <div className="flex size-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-brand shadow-md">
                {leader.photo ? (
                  <img
                    src={leader.photo}
                    alt={`${leader.name}, ${leader.role} of Vidhyapeeth Karimnagar`}
                    className="size-full object-cover"
                  />
                ) : (
                  <span aria-hidden className="font-display text-5xl font-extrabold text-accent">
                    {leader.name.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold text-brand">{leader.name}</h3>
                <p className="font-display text-xs font-semibold tracking-[0.6px] text-accent-dark uppercase">
                  {leader.role}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <Button as={NavLink} to="/about#leadership" icon={<img src={arrowRight} alt="" className="size-4" />}>
          Meet Our Leadership
        </Button>
      </div>
    </section>
  )
}
