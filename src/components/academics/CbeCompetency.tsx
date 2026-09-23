import cbeInset from '../../assets/images/academics-cbe-inset.jpg'

const outcomes = [
  {
    title: 'Conceptual Understanding Over Rote',
    body: 'Mastering foundational principles that bridge interdisciplinary topics.',
  },
  {
    title: 'Standardised Learning Outcomes (LOs)',
    body: 'Every lesson plan ties to explicit, assessable cognitive rubrics from Grade 1 to 12.',
  },
  {
    title: 'Continuous Holistic Progress Card',
    body: '360-degree assessment including self-evaluation, peer assessment, and project portfolios.',
  },
]

const legend = [
  { label: 'Real-World Application', value: '50%', color: 'bg-brand' },
  { label: 'Critical Analysis', value: '30%', color: 'bg-accent' },
  { label: 'Theory & Context', value: '20%', color: 'bg-slate-400' },
]

export default function CbeCompetency() {
  return (
    <section className="bg-brand px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent/20 px-3 py-1 font-sans text-xs font-semibold tracking-wide text-accent-light uppercase">
            Central Board of Secondary Education
          </span>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Competency-Based Education (CBE)
          </h2>
          <p className="text-lg text-footer-muted">
            Aligned with the National Curriculum Framework, our curriculum shifts emphasis from
            rote reproduction of facts to verifiable mastery. Students don&rsquo;t just score; they
            demonstrate understanding through application.
          </p>
          <div className="flex w-full flex-col gap-2 pt-2">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="rounded-sm bg-white/5 p-3">
                <h3 className="font-sans text-sm font-semibold text-white">{outcome.title}</h3>
                <p className="pt-0.5 text-sm text-footer-muted">{outcome.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          <div className="flex items-center justify-between pb-4">
            <div>
              <h3 className="font-display text-xl font-bold text-brand">CBE Mastery Index</h3>
              <p className="text-xs text-slate-500">Academic Year Evaluation Distribution</p>
            </div>
            <span className="rounded-sm bg-[#dfe8ff] px-2.5 py-1 text-sm font-semibold text-brand">
              CBSE 2024-25
            </span>
          </div>
          <div className="flex items-center gap-6 py-2">
            <div
              className="flex size-32 shrink-0 items-center justify-center rounded-full"
              style={{
                background:
                  'conic-gradient(#0a2556 0% 50%, #ffc83b 50% 80%, #94a3b8 80% 100%)',
              }}
            >
              <div className="flex size-[88px] items-center justify-center rounded-full bg-white text-center">
                <div>
                  <p className="font-display text-xl font-bold text-brand">88%</p>
                  <p className="text-[10px] text-slate-500">Application</p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              {legend.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 font-medium text-brand">
                    <span className={`size-3 rounded-full ${item.color}`} />
                    {item.label}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
            <img src={cbeInset} alt="" className="size-16 shrink-0 rounded-lg object-cover" />
            <p className="text-sm text-slate-600">
              &ldquo;CBE trains students to face unpredictable examinations with absolute calmness
              and methodological clarity.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
