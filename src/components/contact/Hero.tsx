import heroImage from '../../assets/images/contact/hero.jpg'
import logoMark from '../../assets/icons/logo-mark.svg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-4 lg:col-span-7">
          <span className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 backdrop-blur-[2px]">
            <span className="size-2 rounded-full bg-accent" />
            <span className="font-sans text-xs font-semibold tracking-[1.2px] text-accent uppercase">
              Get in Touch
            </span>
          </span>
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-[56px] lg:leading-[64px]">
            Let&rsquo;s Stay{' '}
            <span className="text-accent underline decoration-accent/40 decoration-[5px] underline-offset-4">
              Connected.
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-[29px] tracking-[-0.09px] text-[#e7eeff]">
            We are here to answer your queries regarding admissions, academics, and campus
            visits. Our administrative team welcomes your partnership in shaping future leaders.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded bg-accent px-6 py-2 font-sans text-sm font-semibold text-accent-dark shadow"
            >
              Leave a Message <span aria-hidden>&darr;</span>
            </a>
            <a
              href="tel:09346002121"
              className="inline-flex items-center gap-2 rounded bg-white/10 px-6 py-2 font-sans text-sm font-semibold text-white backdrop-blur-[2px]"
            >
              <span aria-hidden>&#128222;</span> 09346002121
            </a>
          </div>
          <p className="flex items-center gap-2 pt-2 text-xs text-footer-muted">
            <img src={logoMark} alt="" className="size-4 opacity-80" />
            CBSE Affiliated Senior Secondary Institution &bull; Affiliation No. 3630436 &bull;
            Karimnagar
          </p>
        </div>

        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-2xl bg-[#dfe8ff] shadow-2xl">
            <img src={heroImage} alt="Vidya Peeth Schools reception" className="h-[240px] w-full object-cover sm:h-[300px]" />
          </div>
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur-[6px]">
            <div className="flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded bg-brand text-lg text-white">
                🎓
              </span>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-brand">Vidya Peeth Schools</span>
                <span className="text-xs font-semibold text-slate-500">District Court Road, Jyothinagar</span>
              </div>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="font-sans text-xs font-bold tracking-[0.48px] text-accent-dark uppercase">
                Visit Campus
              </span>
              <span className="text-xs text-slate-600">Mon&ndash;Sat 8am&ndash;2pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
