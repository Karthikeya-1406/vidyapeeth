import pedagogyPhoto from '../../assets/images/academics-pedagogy.jpg'

const pillars = [
  { title: 'Ask Questions', body: 'Courage to challenge hypotheses freely' },
  { title: 'Think Creatively', body: 'Original pathways to non-standard problems' },
  { title: 'Real Experience', body: 'Applied fieldwork and prototype building' },
]

export default function PedagogyInPractice() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src={pedagogyPhoto} alt="Teacher guiding students at Vidya Peeth" className="aspect-[4/3] w-full object-cover" />
          </div>
          <span className="absolute top-4 left-4 rounded-sm bg-accent px-3 py-1.5 font-sans text-xs font-bold tracking-wide text-[#705600] uppercase">
            Pedagogy at Work
          </span>
          <div className="absolute right-0 -bottom-6 flex max-w-xs items-center gap-3 rounded-2xl bg-brand p-4 shadow-2xl">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-accent">&#128218;</span>
            <div>
              <p className="font-display text-sm font-bold text-white">Joyful Classroom Culture</p>
              <p className="text-xs text-accent-light">Zero-fear learning atmosphere</p>
            </div>
          </div>
        </div>

        <div className="order-1 flex flex-col items-start gap-4 lg:order-2">
          <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
            Our Pedagogy
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
            Engaging Methods. Real-World Learning.
          </h2>
          <p className="text-base text-slate-600">
            We actively challenge the lecture-heavy tradition. Our educators structure learning
            around authentic inquiries, provoking debate, hands-on experiments, and reflective
            problem cycles.
          </p>
          <div className="grid w-full gap-3 pt-2 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-lg bg-[#f0f3ff] p-4 text-center">
                <h3 className="font-display text-sm font-bold text-brand">{pillar.title}</h3>
                <p className="pt-1 text-xs text-slate-600">{pillar.body}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-4 text-sm">
            <div className="flex -space-x-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-brand text-xs font-bold text-white ring-2 ring-white">CB</span>
              <span className="flex size-9 items-center justify-center rounded-full bg-accent text-xs font-bold text-brand ring-2 ring-white">NC</span>
              <span className="flex size-9 items-center justify-center rounded-full bg-[#d7e3fd] text-xs font-bold text-brand ring-2 ring-white">20+</span>
            </div>
            <p className="text-slate-600">
              Full alignment with <span className="font-semibold text-brand">NEP 2020 &amp; NCF Guidelines</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
