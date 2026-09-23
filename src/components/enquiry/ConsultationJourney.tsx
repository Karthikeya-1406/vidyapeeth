const steps = [
  {
    number: '01',
    icon: '📝',
    highlight: true,
    title: 'Digital Registration',
    body: 'Submit the fast-track form above with student grade preferences and basic contact credentials.',
  },
  {
    number: '02',
    icon: '📞',
    highlight: false,
    title: 'Counselor Connect',
    body: 'Our admissions dean connects via call to understand your student’s learning style and academic goals.',
  },
  {
    number: '03',
    icon: '🚶',
    highlight: false,
    title: 'Campus Immersion',
    body: 'Walk through science labs, smart suites, digital libraries, and sports complexes in Karimnagar.',
  },
  {
    number: '04',
    icon: '✅',
    highlight: true,
    title: 'Admission Offer',
    body: 'Receive the formal provisional prospectus, syllabus overview, and parent orientation kit.',
  },
]

export default function ConsultationJourney() {
  return (
    <section className="bg-brand px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-center">
          <span className="font-sans text-xs font-semibold tracking-[1.2px] text-accent-light uppercase">
            Simple &amp; Accessible Pathway
          </span>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-[44px] sm:leading-[52px]">
            How Your Enquiry Unfolds
          </h2>
          <p className="text-base text-footer-muted">
            From first interaction to classroom induction, our admission workflow guarantees
            complete clarity, transparency, and personal warmth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4 rounded-lg bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <span
                  className={`flex size-12 items-center justify-center rounded-lg font-display text-xl font-bold ${
                    step.highlight ? 'bg-accent text-accent-dark' : 'bg-white/15 text-white'
                  }`}
                >
                  {step.number}
                </span>
                <span className="text-2xl text-accent-light" aria-hidden>
                  {step.icon}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-[22.75px] text-footer-muted">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
