import studentsPhoto from '../../assets/images/why-choose-students.png'

const leftPoints = [
  { title: 'Comprehensive Curriculum', body: 'CBSE standard balanced with life skills' },
  { title: 'Individual Attention', body: 'Low student-to-mentor classroom ratio' },
  { title: 'Experienced Teachers', body: 'Passionate, regularly trained educators' },
]

const rightPoints = [
  { title: 'Modern Learning Spaces', body: 'Science, math and digital facilities' },
  { title: 'Holistic Character', body: 'Moral values, discipline, empathy' },
  { title: 'Safe & Supportive', body: 'Child safety, hygiene & transport care' },
]

function PointCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 font-display text-base font-bold text-brand">
        {num}
      </span>
      <div>
        <h4 className="font-display text-sm font-bold text-brand">{title}</h4>
        <p className="text-xs text-slate-500">{body}</p>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-16">
        <div className="max-w-2xl text-center">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
            Why Choose Vidya Peeth?
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
            A Well-Rounded Learning Experience
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Where every child&rsquo;s unique spark is recognized, protected, and encouraged to
            illuminate the world.
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl border border-amber-200/60 bg-amber-50/60 p-6 sm:p-10 lg:p-12">
          <span className="pointer-events-none absolute top-4 right-0 rotate-12 font-script text-4xl whitespace-nowrap text-amber-200 select-none sm:text-6xl">
            Curiosity &bull; Collaboration &bull; Confidence
          </span>
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col gap-4 lg:col-span-4">
              {leftPoints.map((point, i) => (
                <PointCard key={point.title} num={String(i + 1).padStart(2, '0')} {...point} />
              ))}
            </div>

            <div className="order-first flex justify-center lg:order-none lg:col-span-4">
              <div className="size-56 overflow-hidden rounded-full border-8 border-white shadow-[0_25px_50px_-12px_rgba(10,37,86,0.18)] sm:size-72">
                <img src={studentsPhoto} alt="Vidya Peeth students together" className="size-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-4">
              {rightPoints.map((point, i) => (
                <PointCard key={point.title} num={String(i + 4).padStart(2, '0')} {...point} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
