import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'
import heroStudent from '../../assets/images/hero-student.png'
import heroCampus from '../../assets/images/hero-campus.png'
import heroGlobe from '../../assets/images/hero-globe.png'

const slides = [
  {
    lines: ['School of', 'Brighter', 'Tomorrows'],
    paragraph:
      'A nurturing environment where knowledge, creativity, character and real-world skills grow together.',
  },
  {
    lines: ['Nurturing', 'Curious', 'Minds'],
    paragraph: 'Empowering every child with confidence, creativity, and the courage to explore new ideas.',
  },
  {
    lines: ['Building', 'Confident', 'Leaders'],
    paragraph:
      'Guiding students from curiosity to self-actualized impact through holistic, values-driven education.',
  },
]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function useTypewriterSlides(items: { lines: string[] }[]) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [typedLines, setTypedLines] = useState<string[]>(items[0].lines.map(() => ''))
  const [showParagraph, setShowParagraph] = useState(false)

  useEffect(() => {
    let cancelled = false
    const lines = items[slideIndex].lines
    setTypedLines(lines.map(() => ''))
    setShowParagraph(false)

    async function run() {
      for (let li = 0; li < lines.length; li++) {
        const full = lines[li]
        for (let ci = 1; ci <= full.length; ci++) {
          if (cancelled) return
          await sleep(38)
          setTypedLines((prev) => {
            const next = [...prev]
            next[li] = full.slice(0, ci)
            return next
          })
        }
        await sleep(150)
      }
      if (cancelled) return
      setShowParagraph(true)
      await sleep(3200)
      if (cancelled) return
      setSlideIndex((i) => (i + 1) % items.length)
    }

    run()
    return () => {
      cancelled = true
    }
  }, [slideIndex, items])

  const activeLineIndex = items[slideIndex].lines.findIndex((full, i) => (typedLines[i]?.length ?? 0) < full.length)

  return { slideIndex, setSlideIndex, typedLines, showParagraph, activeLineIndex }
}

function Diamond({
  src,
  alt,
  className = '',
  caption,
}: {
  src: string
  alt: string
  className?: string
  caption?: string
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex size-full rotate-45 items-center justify-center overflow-hidden rounded-[20%] border-4 border-white bg-white shadow-[0_20px_40px_-15px_rgba(10,37,86,0.25)]">
        <div className="-rotate-45 size-[165%] shrink-0 overflow-hidden">
          <img src={src} alt={alt} className="size-full origin-top scale-150 object-cover object-top" />
        </div>
      </div>
      {caption && (
        <span className="absolute inset-x-0 bottom-[32%] px-2 text-center font-display text-[10px] font-bold whitespace-nowrap text-white drop-shadow">
          {caption}
        </span>
      )}
    </div>
  )
}

export default function Hero() {
  const { slideIndex, setSlideIndex, typedLines, showParagraph, activeLineIndex } = useTypewriterSlides(slides)

  return (
    <section className="relative z-0 overflow-hidden bg-white px-6 pt-10 pb-16 sm:px-10 lg:px-16 lg:pt-14 lg:pb-16">
      <div className="pointer-events-none absolute -top-32 -left-32 size-[600px] rounded-full bg-amber-100/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-[-80px] size-[500px] rounded-full bg-slate-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1360px] items-center gap-16 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-6 lg:col-span-5 lg:w-[460px] lg:justify-self-end">
          <span className="font-display text-[11px] font-bold tracking-[2.4px] text-brand uppercase">
            Welcome to Vidya Peeth Schools
          </span>
          <h1 className="font-display text-5xl leading-[1.05] font-extrabold tracking-tight text-brand sm:text-6xl lg:text-[68px]">
            {slides[slideIndex].lines.map((_, i) => {
              const isLast = i === slides[slideIndex].lines.length - 1
              const text = typedLines[i] ?? ''
              const showCursor = i === activeLineIndex
              const content = (
                <>
                  {text}
                  {showCursor && <span className="animate-pulse">|</span>}
                </>
              )
              return (
                <span key={i}>
                  {isLast ? (
                    <span className="relative inline-block text-accent">
                      {content}
                      {!showCursor && text.length > 0 && (
                        <span className="absolute inset-x-0 -bottom-2 h-[3px] rounded-full bg-accent" />
                      )}
                    </span>
                  ) : (
                    content
                  )}
                  {!isLast && <br />}
                </span>
              )
            })}
          </h1>
          <p
            className={`max-w-[460px] text-lg leading-relaxed text-slate-600 transition-opacity duration-500 ${
              showParagraph ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {slides[slideIndex].paragraph}
          </p>
          <Button as={NavLink} to="/admissions" icon={<img src={arrowRight} alt="" className="size-4" />}>
            Explore Admissions
          </Button>
          <div className="flex w-full max-w-[420px] items-center justify-between border-t border-slate-200/80 pt-6">
            <span className="grid grid-cols-3 gap-2 font-display text-[10px] font-extrabold tracking-[2.5px] text-slate-400 uppercase">
              <span>Learn</span>
              <span>Explore</span>
              <span>Grow</span>
            </span>
            <div className="flex items-center gap-4 font-mono text-xs tracking-[0.6px] text-slate-400">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlideIndex(i)}
                  className={`pb-1 transition-colors ${
                    i === slideIndex ? 'border-b-2 border-brand text-brand' : 'hover:text-slate-600'
                  }`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[340px] lg:col-span-7 lg:max-w-[540px]">
          <span className="absolute top-0 right-4 -rotate-2 font-script text-2xl text-brand sm:text-3xl">
            Good Learners
            <br />
            <span className="text-accent-dark">Brighter Humans</span>
          </span>

          <Diamond
            src={heroStudent}
            alt="Young Vidya Peeth student smiling in uniform"
            className="top-[8%] left-[18%] size-[45%] z-20"
          />
          <Diamond
            src={heroCampus}
            alt="Vidya Peeth Schools campus exterior"
            className="top-[30%] right-[2%] size-[42%] z-10"
          />
          <Diamond
            src={heroGlobe}
            alt="Students learning together with a globe"
            className="bottom-[2%] left-[28%] size-[44%] z-10"
          />

          <span className="absolute top-[19%] -left-[4%] z-0 size-[5%] rotate-45 rounded-[2px] bg-accent-dark" />
          <span className="absolute top-[89%] left-[75%] z-0 size-[6%] rotate-45 rounded-[2px] bg-brand" />
        </div>
      </div>
    </section>
  )
}
