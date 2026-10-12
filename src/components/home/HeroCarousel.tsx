import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'
import studentArrival from '../../assets/images/home-hero/student-arrival.jpg'
import campusLife from '../../assets/images/home-hero/campus-life.jpg'
import stemLearning from '../../assets/images/home-hero/stem-learning.jpg'

const AUTOPLAY_MS = 6000

// Below the sm breakpoint only the first slide is shown, without carousel controls.
const MOBILE_QUERY = '(max-width: 639px)'

type Cta = { label: string; to: string }

// Only the first slide's headline is the page H1; the others render as H2.
const slides: {
  image: string
  alt: string
  eyebrow: string
  heading: string
  highlight: string
  headingSize: string
  body: string
  primary: Cta
  secondary?: Cta
}[] = [
  {
    image: studentArrival,
    alt: 'Student in school uniform outside the campus',
    eyebrow: 'Vidhyapeeth Karimnagar · CBSE School in Karimnagar',
    heading: 'Learning with Purpose.',
    highlight: 'Growing with Confidence.',
    headingSize: 'text-4xl sm:text-5xl lg:text-[64px]',
    body: 'Children build strong academic foundations while growing in confidence, communication and character.',
    primary: { label: 'Book a Campus Experience', to: '/enquiry' },
    secondary: { label: 'Explore Vidhyapeeth', to: '/about' },
  },
  {
    image: stemLearning,
    alt: 'Students working together on a hands-on classroom project',
    eyebrow: 'Inquiry-Based Learning at Vidhyapeeth · Purposeful CBSE Education',
    heading: 'Beyond Finding Answers.',
    highlight: 'Learning to Ask Better Questions.',
    headingSize: 'text-4xl sm:text-5xl lg:text-[56px]',
    body: 'Students learn to observe, question and think independently—moving beyond memorisation to real understanding.',
    primary: { label: 'Discover Our Learning Approach', to: '/academics' },
  },
  {
    image: campusLife,
    alt: 'Students taking part in sports, music and art activities',
    eyebrow: 'Vidhyapeeth Karimnagar · Learning Beyond the Classroom',
    heading: 'Understand. Think. Apply.',
    highlight: 'Express. Create. Lead.',
    headingSize: 'text-4xl sm:text-5xl lg:text-[64px]',
    body: 'Through academics, projects and real-world experiences, students grow capable, curious and confident.',
    primary: { label: 'Book a School Visit', to: '/enquiry' },
    secondary: { label: 'Explore Student Life', to: '/beyond-academics' },
  },
]

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY)
    const onChange = () => setIsMobile(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return isMobile
}

function ArrowButton({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
      className={`absolute top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-accent hover:text-brand focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none sm:size-12 ${
        direction === 'prev' ? 'left-3 sm:left-6' : 'right-3 sm:right-6'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`size-5 ${direction === 'prev' ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </button>
  )
}

export default function HeroCarousel() {
  const [current, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const isMobile = useIsMobile()
  const index = isMobile ? 0 : current
  const slide = slides[index]
  const Heading = index === 0 ? 'h1' : 'h2'

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length)
  }, [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), [])
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])

  // Autoplay; restarts whenever the slide changes so manual navigation gets a full interval.
  useEffect(() => {
    if (paused || isMobile) return
    const timer = window.setTimeout(next, AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [index, paused, isMobile, next])

  return (
    <section
      aria-roledescription={isMobile ? undefined : 'carousel'}
      aria-label="Vidhyapeeth highlights"
      className="relative isolate h-[600px] overflow-hidden bg-brand sm:h-[640px] lg:h-[min(760px,calc(100vh-80px))] lg:min-h-[620px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (isMobile) return
        if (event.key === 'ArrowLeft') prev()
        if (event.key === 'ArrowRight') next()
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null || isMobile) return
        const delta = event.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(delta) > 50) (delta > 0 ? prev : next)()
        touchStartX.current = null
      }}
    >
      {slides.map((item, i) => (
        <div
          key={item.image}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${slides.length}`}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
        >
          <img
            src={item.image}
            alt={item.alt}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            className={`size-full object-cover object-center transition-transform duration-[7000ms] ease-out motion-reduce:transition-none ${
              i === index ? 'scale-105' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-brand/90 via-brand/55 to-brand/0 sm:via-brand/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-brand/70 to-transparent" />

      <div className="relative z-20 mx-auto flex h-full max-w-[1360px] items-center px-6 pt-16 sm:px-24 lg:px-28">
        <div key={index} className="flex max-w-[640px] flex-col items-start gap-5 animate-[hero-text-in_700ms_cubic-bezier(0.16,1,0.3,1)]">
          <span className="flex items-start gap-2 font-display text-xs leading-relaxed font-extrabold tracking-[2.4px] text-accent uppercase">
            <span className="mt-2 h-[2px] w-8 shrink-0 rounded-full bg-accent" />
            {slide.eyebrow}
          </span>
          <Heading
            className={`font-display leading-[1.08] font-extrabold tracking-tight text-white ${slide.headingSize}`}
          >
            {slide.heading}
            <br />
            <span className="text-accent">{slide.highlight}</span>
          </Heading>
          <p className="max-w-[560px] text-base leading-relaxed text-slate-200 sm:text-lg">{slide.body}</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button as={NavLink} to={slide.primary.to} icon={<img src={arrowRight} alt="" className="size-4" />}>
              {slide.primary.label}
            </Button>
            {slide.secondary && (
              <NavLink
                to={slide.secondary.to}
                className="hidden items-center gap-2 rounded-full border border-white/40 px-5 py-3 font-display text-xs font-bold tracking-[0.6px] text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/10 sm:inline-flex"
              >
                {slide.secondary.label}
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {!isMobile && (
        <>
          <ArrowButton direction="prev" onClick={prev} />
          <ArrowButton direction="next" onClick={next} />
        </>
      )}

      <div className={`absolute inset-x-0 bottom-6 z-20 justify-center gap-2 sm:bottom-8 ${isMobile ? 'hidden' : 'flex'}`}>
        {slides.map((item, i) => (
          <button
            key={item.image}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className="group flex h-6 items-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-10 bg-accent' : 'w-4 bg-white/50 group-hover:bg-white/80'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
