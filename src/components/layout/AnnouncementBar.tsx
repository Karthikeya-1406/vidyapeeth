import { useEffect, useRef, useState } from 'react'

type Announcement = {
  icon: string
  title: string
  description: string
}

const announcements: Announcement[] = [
  { icon: '🎂', title: 'Happy Birthday!', description: 'Wishing our dear student Aarav a very Happy Birthday!' },
  { icon: '🏆', title: 'Congratulations!', description: 'Our students make us proud every day!' },
  { icon: '📅', title: 'Upcoming Event', description: 'Annual Day Celebrations – 25th Oct 2026' },
]

const NUDGE_STEP = 340

export default function AnnouncementBar() {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const pausedRef = useRef(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    let frame: number
    const speed = 0.4

    const tick = () => {
      const track = trackRef.current
      if (track && !pausedRef.current) {
        const loopWidth = track.scrollWidth / 2
        offsetRef.current -= speed
        if (Math.abs(offsetRef.current) >= loopWidth) offsetRef.current += loopWidth
        track.style.transform = `translateX(${offsetRef.current}px)`
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  const nudge = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    setPaused(true)
    const loopWidth = track.scrollWidth / 2
    offsetRef.current -= dir * NUDGE_STEP
    if (offsetRef.current > 0) offsetRef.current -= loopWidth
    if (Math.abs(offsetRef.current) >= loopWidth) offsetRef.current += loopWidth
    track.style.transition = 'transform 0.4s ease'
    track.style.transform = `translateX(${offsetRef.current}px)`
    window.setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = ''
      setPaused(false)
    }, 500)
  }

  const loopItems = [...announcements, ...announcements]

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 px-4 sm:px-6">
      <div
        className="pointer-events-auto relative mx-auto flex max-w-[1360px] items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          aria-label="Previous announcement"
          onClick={() => nudge(-1)}
          className="z-10 -mr-5 flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-md transition-colors hover:bg-brand/90 sm:size-10"
        >
          <span aria-hidden>‹</span>
        </button>

        <div className="relative flex-1 overflow-hidden rounded-full border border-accent-dark/20 bg-gradient-to-r from-amber-50 via-[#fdf8e7] to-amber-50 py-3 shadow-[0_15px_35px_-10px_rgba(10,37,86,0.35)]">
          <div ref={trackRef} className="flex w-max items-center will-change-transform">
            {loopItems.map((item, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 border-r border-accent-dark/15 px-6 last:border-r-0"
              >
                <span className="text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <div>
                  <p className="font-script text-lg leading-none text-brand">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-600 whitespace-nowrap">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-52 items-center justify-end bg-gradient-to-l from-[#fdf8e7] from-65% to-transparent pr-6 sm:flex">
            <span className="font-script text-right text-sm leading-tight text-accent-dark">
              Good Learners
              <br />
              Brighter Humans
            </span>
          </div>
        </div>

        <button
          type="button"
          aria-label="Next announcement"
          onClick={() => nudge(1)}
          className="z-10 -ml-5 flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-md transition-colors hover:bg-brand/90 sm:size-10"
        >
          <span aria-hidden>›</span>
        </button>
      </div>
    </div>
  )
}
