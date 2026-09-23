import { useState } from 'react'

const faqs = [
  {
    q: 'What are the office visiting hours for admissions inquiry?',
    a: 'Our administrative office is open Monday through Saturday from 8:00 AM to 2:00 PM IST. We are closed on Sundays for visitors.',
  },
  {
    q: 'Which curriculum framework is followed at Vidya Peeth Schools?',
    a: 'We follow the CBSE (Central Board of Secondary Education) competency-based curriculum framework, affiliated under No. 3630436.',
  },
  {
    q: 'Is school bus transportation available across Karimnagar?',
    a: 'Yes, our transportation desk manages bus routes across Karimnagar city with GPS tracking, verified drivers, and scheduled pick-up/drop timings.',
  },
  {
    q: 'What documents are required during campus visits for admission?',
    a: 'Please carry the student’s previous school records, birth certificate, and a valid photo ID of the parent/guardian for your campus visit.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[768px] flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="font-sans text-xs font-bold tracking-[1.2px] text-accent-dark uppercase">
            Have Questions?
          </span>
          <h2 className="font-display text-3xl font-bold text-brand sm:text-[32px]">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600">
            Quick clarity regarding the admissions desk, schedule, and institutional visits.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-lg bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left"
                >
                  <span className="font-display text-lg font-semibold text-brand">{faq.q}</span>
                  <span
                    className={`shrink-0 text-brand transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <p className="px-4 pb-4 text-sm leading-[22.75px] text-slate-600">{faq.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
