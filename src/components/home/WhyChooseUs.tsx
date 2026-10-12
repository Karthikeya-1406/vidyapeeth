import type { CSSProperties } from 'react'
import { useInView } from '../../hooks/useInView'
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

// Vertical start offset per row so cards fan out from the circle's centre.
const rowOffsets = ['55%', '0%', '-55%']

function PointCard({
  num,
  title,
  body,
  side,
  index,
  visible,
}: {
  num: string
  title: string
  body: string
  side: 'left' | 'right'
  index: number
  visible: boolean
}) {
  const style = {
    '--dx': side === 'left' ? '70%' : '-70%',
    '--dy': rowOffsets[index],
    transitionDelay: visible ? `${200 + index * 160 + (side === 'right' ? 80 : 0)}ms` : '0ms',
  } as CSSProperties

  return (
    <div
      style={style}
      className={`flex items-center gap-4 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none ${
        visible
          ? 'translate-x-0 translate-y-0 scale-100 opacity-100'
          : 'translate-y-6 scale-50 opacity-0 lg:translate-x-(--dx) lg:translate-y-(--dy)'
      }`}
    >
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
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 })

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
          <div ref={ref} className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-col gap-4 lg:col-span-4">
              {leftPoints.map((point, i) => (
                <PointCard
                  key={point.title}
                  num={String(i + 1).padStart(2, '0')}
                  side="left"
                  index={i}
                  visible={inView}
                  {...point}
                />
              ))}
            </div>

            {/* On desktop the wrapper keeps the original 18rem footprint so the circle can grow
                into the surrounding padding and gaps without shifting the cards. */}
            <div className="relative z-10 order-first flex justify-center lg:order-none lg:col-span-4 lg:h-72">
              <div className="size-64 overflow-hidden rounded-full border-8 border-white shadow-[0_25px_50px_-12px_rgba(10,37,86,0.18)] sm:size-80 lg:absolute lg:top-1/2 lg:left-1/2 lg:size-72 lg:-translate-x-1/2 lg:-translate-y-1/2 xl:size-[360px] 2xl:size-[368px]">
                <img src={studentsPhoto} alt="Vidya Peeth students together" className="size-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-4">
              {rightPoints.map((point, i) => (
                <PointCard
                  key={point.title}
                  num={String(i + 4).padStart(2, '0')}
                  side="right"
                  index={i}
                  visible={inView}
                  {...point}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
