import { NavLink } from 'react-router-dom'

const desks = [
  {
    icon: '🎓',
    eyebrow: 'PRIMARY DESK',
    title: 'Admissions & Prospectus',
    body: 'Syllabus inquiries, admission criteria, age requirements, campus walkthrough schedules, and scholarship details.',
    contact: 'Head: Admissions Registrar',
    highlight: true,
  },
  {
    icon: '🏛️',
    eyebrow: 'MAIN OFFICE',
    title: 'General Administration',
    body: 'Fee certification, bonafide requests, student transfer certificates, board exam documentation, and general notices.',
    contact: 'Secretariat Office',
    highlight: false,
  },
  {
    icon: '🚌',
    eyebrow: 'FLEET & SAFETY',
    title: 'Transportation Desk',
    body: 'Bus routes across Karimnagar city, GPS tracking parent app, driver verifications, and pick-up/drop timing sheets.',
    contact: 'Transport In-charge',
    highlight: false,
  },
]

export default function HelpdeskRouter() {
  return (
    <section className="bg-surface px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs font-bold tracking-[1.2px] text-accent-dark uppercase">
              Express Touchpoints
            </span>
            <h2 className="font-display text-2xl font-bold text-brand sm:text-[32px]">
              Direct Administrative Helpdesk
            </h2>
            <p className="max-w-xl text-base text-slate-600">
              Route your inquiry directly to the responsible institutional department for prompt
              assistance.
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-2 text-xs font-semibold text-slate-600">
            <span className="size-2.5 rounded-full bg-accent" />
            Admissions Desk actively taking inquiries for 2025&ndash;26
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {desks.map((desk) => (
            <div key={desk.title} className="flex flex-col justify-between gap-4 rounded-lg bg-[#f0f3ff] p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded bg-white text-lg shadow-sm">
                  {desk.icon}
                </span>
                <div className="flex flex-col gap-1">
                  <span
                    className={`font-sans text-xs font-bold tracking-[0.3px] uppercase ${
                      desk.highlight ? 'text-accent-dark' : 'text-slate-500'
                    }`}
                  >
                    {desk.eyebrow}
                  </span>
                  <h3 className="font-display text-lg font-bold text-brand">{desk.title}</h3>
                  <p className="pt-1 text-sm leading-5 text-slate-600">{desk.body}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 text-xs">
                <span className="font-medium text-brand">{desk.contact}</span>
                <NavLink
                  to="/enquiry"
                  className={`font-bold hover:underline ${desk.highlight ? 'text-accent-dark' : 'text-brand'}`}
                >
                  Inquire &rarr;
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
