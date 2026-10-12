import type { CSSProperties } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { useInView } from '../../hooks/useInView'
import arrowRight from '../../assets/icons/arrow-right.svg'
import studentsPhoto from '../../assets/images/why-choose-students.png'

// Each priority links to the page that shows it in practice.
const leftPoints = [
  {
    title: 'Strong academic foundations',
    body: 'Learning that values understanding and steady progress.',
    to: '/academics',
    linkLabel: 'See our academic approach',
  },
  {
    title: 'Confident communication',
    body: 'Opportunities to ask questions, share ideas and express understanding.',
    to: '/academics',
    linkLabel: 'See inquiry-based learning',
  },
]

const rightPoints = [
  {
    title: 'Meaningful experiences',
    body: 'Participation that connects learning with creativity and school life.',
    to: '/beyond-academics',
    linkLabel: 'See student life',
  },
  {
    title: 'Character development',
    body: 'Encouragement to act with responsibility, respect and purpose.',
    to: '/about',
    linkLabel: 'See our values',
  },
]

// Vertical start offset per row so cards fan out from the circle's centre.
const rowOffsets = ['30%', '-30%']

function PointCard({
  num,
  title,
  body,
  to,
  linkLabel,
  side,
  index,
  visible,
}: {
  num: string
  title: string
  body: string
  to: string
  linkLabel: string
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
    <NavLink
      to={to}
      style={style}
      className={`group flex items-start gap-4 rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent hover:shadow-md motion-reduce:transition-none motion-reduce:transform-none ${
        visible
          ? 'translate-x-0 translate-y-0 scale-100 opacity-100'
          : 'translate-y-6 scale-50 opacity-0 lg:translate-x-(--dx) lg:translate-y-(--dy)'
      }`}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 font-display text-base font-bold text-brand">
        {num}
      </span>
      <div>
        <h3 className="font-display text-base font-bold text-brand">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{body}</p>
        <span className="mt-2 inline-block font-display text-[11px] font-bold tracking-[0.6px] text-accent-dark uppercase group-hover:underline">
          {linkLabel} &rarr;
        </span>
      </div>
    </NavLink>
  )
}

export default function WhyChooseUs() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 })

  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-16">
        <div className="max-w-2xl text-center">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
            A learning approach built around your child&rsquo;s growth
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
            Why Choose Vidhyapeeth
          </h2>
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
                <img
                  src={studentsPhoto}
                  alt="Students discussing a globe and atlases around a library table"
                  className="size-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-4">
              {rightPoints.map((point, i) => (
                <PointCard
                  key={point.title}
                  num={String(i + leftPoints.length + 1).padStart(2, '0')}
                  side="right"
                  index={i}
                  visible={inView}
                  {...point}
                />
              ))}
            </div>
          </div>
        </div>

        <Button as={NavLink} to="/enquiry" icon={<img src={arrowRight} alt="" className="size-4" />}>
          Book a Campus Experience
        </Button>
      </div>
    </section>
  )
}
