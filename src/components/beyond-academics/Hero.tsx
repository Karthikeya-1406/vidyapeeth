import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'
import heroAthletics from '../../assets/images/beyond-academics/hero-athletics.jpg'
import heroArts from '../../assets/images/beyond-academics/hero-arts.jpg'

const metrics = [
  { value: '24+', label: 'Active Clubs' },
  { value: '5', label: 'Flagship Hubs' },
  { value: '100%', label: 'Student Ingress' },
]

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white px-6 pt-10 pb-16 sm:px-10 lg:px-20 lg:pb-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start lg:col-span-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-4 py-1 font-sans text-xs font-bold tracking-[1.2px] text-brand uppercase">
            <span className="size-2 rounded-full bg-accent" />
            Beyond the Classroom
          </span>
          <h1 className="max-w-lg pt-4 font-display text-4xl leading-tight font-extrabold tracking-tight text-brand sm:text-5xl lg:text-[56px]">
            More Ways to{' '}
            <span className="text-[#765b00] underline decoration-accent decoration-wavy decoration-2 underline-offset-4">
              Learn
            </span>
            , Explore and Grow.
          </h1>
          <p className="max-w-md pt-6 text-lg text-slate-600">
            Nurturing confidence, character, and athletic discipline through immersive
            co-curricular experiences that shape balanced, forward-thinking global citizens.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-10">
            <Button as="a" href="#pillars" icon={<img src={arrowRight} alt="" className="size-3.5" />}>
              Explore Life at Peeth
            </Button>
            <span className="rounded-sm bg-[#f0f3ff] px-6 py-4 font-sans text-sm font-semibold text-brand">
              5 Flagship Programs
            </span>
          </div>
          <div className="mt-16 grid w-full grid-cols-3 gap-4 rounded-lg bg-white/80 p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-3xl font-bold text-brand">{metric.value}</p>
                <p className="text-xs font-semibold text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-7 lg:max-w-none">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border-4 border-white bg-[#d7e3fd] shadow-2xl sm:aspect-video">
            <img
              src={heroAthletics}
              alt="Vidya Peeth students celebrating an athletics win"
              className="size-full object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 max-w-xs rounded-xl bg-brand/90 px-4 py-3 text-white backdrop-blur">
              <p className="font-sans text-xs font-semibold tracking-[0.6px] text-accent-light uppercase">
                Athletics &amp; Arts
              </p>
              <p className="font-display text-lg font-bold">Leadership in Play &amp; Thought</p>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-6 w-40 overflow-hidden rounded-xl border-4 border-white shadow-2xl sm:w-52">
            <img src={heroArts} alt="Vidya Peeth student painting in art class" className="aspect-4/3 w-full object-cover" />
          </div>
          <div className="absolute top-4 right-4 hidden max-w-[180px] rounded-xl bg-white p-3 shadow-lg sm:block">
            <p className="font-display text-xs font-bold text-[#001134]">Holistic Growth</p>
            <p className="pt-1 text-[11px] text-slate-600">
              Character forged inside the arena, refined through reflection.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
