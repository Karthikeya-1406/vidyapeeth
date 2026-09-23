import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    number: '01',
    icon: '\u{1F4C4}',
    title: 'Submit Online Enquiry',
    desc: 'Fill out our simple interest form with student information and your target grade preferences.',
    meta: 'Takes ~3 minutes',
    dark: false,
  },
  {
    number: '02',
    icon: '\u{1F3E2}',
    title: 'Campus Walkthrough',
    desc: 'Visit our Karimnagar campus, observe smart classrooms, science labs, and lush green courtyards.',
    meta: 'Guided by Academic Dean',
    dark: false,
  },
  {
    number: '03',
    icon: '\u{1F91D}',
    title: 'Parent & Student Talk',
    desc: 'An informal, encouraging interaction to understand child potential, aspirations, and foundational readiness.',
    meta: 'Collaborative dialogue',
    dark: false,
  },
  {
    number: '04',
    icon: '\u{1F389}',
    title: 'Welcome & Enrollment',
    desc: 'Complete document verification, receive induction kits, and begin an empowering educational journey.',
    meta: 'Official Admission Letter',
    dark: true,
  },
]

export default function AdmissionJourney() {
  return (
    <section id="journey" className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-16">
        <SectionHeading
          align="center"
          eyebrow="Simplified Process"
          heading="Transparent Admission Journey"
          description="A clear, parent-friendly progression crafted to ensure your child finds the right academic environment without ambiguity."
        />

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex flex-col justify-between rounded-lg p-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] ${
                step.dark ? 'bg-brand text-white' : 'bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`flex size-12 items-center justify-center rounded font-display text-xl font-bold ${
                      step.dark ? 'bg-accent text-[#705600]' : 'bg-[#e7eeff] text-brand'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-2xl" aria-hidden>
                    {step.icon}
                  </span>
                </div>
                <h3 className={`pt-4 font-display text-xl font-bold ${step.dark ? 'text-white' : 'text-brand'}`}>
                  {step.title}
                </h3>
                <p className={`pt-1 text-sm ${step.dark ? 'text-footer-muted' : 'text-slate-600'}`}>{step.desc}</p>
              </div>
              <p className={`pt-4 text-xs font-semibold ${step.dark ? 'text-accent-light' : 'text-brand'}`}>
                {step.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
