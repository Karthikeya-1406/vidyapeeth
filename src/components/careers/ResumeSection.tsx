import ResumeForm from './ResumeForm'

const steps = [
  { n: 1, title: 'Dossier Review', description: 'Scrutiny of credentials and teaching qualifications.' },
  { n: 2, title: 'Interactive Dialogue', description: 'Discussion on educational philosophies with Academic Council.' },
  { n: 3, title: 'Classroom Demonstration', description: 'Live micro-teaching session highlighting student engagement.' },
]

export default function ResumeSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-5">
          <span className="flex w-fit items-center gap-1 rounded-xl bg-[#dfe8ff] px-3 py-1 text-xs font-semibold text-brand">
            <span className="size-1.5 rounded-full bg-accent" />
            PROSPECTIVE FACULTY DOSSIER
          </span>
          <h2 className="font-display text-3xl font-bold tracking-[-0.5px] text-brand sm:text-4xl">
            Submit Your Expression of Interest
          </h2>
          <p className="text-base text-slate-600">
            We welcome prospective educators across Kindergarten, Primary Wing, Middle School, and Senior Secondary
            streams. Submit your credentials to join our permanent talent reserve.
          </p>
          <div className="flex flex-col gap-4 pt-4">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-2">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#dfe8ff] text-xs font-bold text-brand">
                  {step.n}
                </span>
                <div>
                  <h4 className="font-display text-base font-semibold text-brand">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-4 rounded-lg bg-[#f0f3ff] p-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-white text-xl shadow-sm">
              🛡️
            </span>
            <div>
              <p className="text-xs font-bold text-brand">CBSE New Delhi Standards</p>
              <p className="text-xs text-slate-500">Affiliation Code: 3630436 • Karimnagar, Telangana</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ResumeForm />
        </div>
      </div>
    </section>
  )
}
