import { useState } from 'react'
import leadStoryImage from '../../assets/images/blog/lead-story.png'
import arrowRight from '../../assets/icons/arrow-right.svg'

const filters = ['All Dispatches', 'Science & Tech', 'Athletics', 'Arts & Expression']

export default function Masthead() {
  const [active, setActive] = useState(filters[0])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f3ff] to-white px-6 pt-24 pb-10 sm:px-10 lg:px-20 lg:pt-28">
      <div className="absolute top-0 right-0 size-96 rounded-xl bg-accent-light/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 size-80 rounded-xl bg-[#d9e2ff]/30 blur-2xl" />

      <div className="relative mx-auto flex max-w-[1360px] flex-col gap-8 pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-2xl flex-col items-start gap-2">
          <span className="flex items-center gap-1.5 font-sans text-xs font-bold tracking-[1.2px] text-accent-dark uppercase">
            <span className="size-2.5 rounded-full bg-accent" />
            Campus Chronicles & News
          </span>
          <h1 className="font-display text-4xl leading-tight font-bold tracking-tight text-brand sm:text-5xl lg:text-[56px]">
            Moments That Make a Difference.
          </h1>
          <p className="max-w-xl pt-1 text-lg text-slate-600">
            Celebrating student excellence, scientific inquiry, athletic feats, and vibrant cultural milestones
            across Vidya Peeth Schools, Karimnagar.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-xl px-4 py-1 font-sans text-sm font-semibold shadow-sm transition-colors ${
                active === filter ? 'bg-brand text-white' : 'bg-white text-slate-600 hover:text-brand'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_0_rgba(10,37,86,0.06)]">
        <div className="grid lg:grid-cols-12">
          <div className="relative min-h-[320px] overflow-hidden bg-brand lg:col-span-7">
            <img src={leadStoryImage} alt="Students at Science Expo Eurekha" className="size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-black/20" />
            <span className="absolute top-4 left-4 rounded-xl bg-accent px-4 py-1 font-sans text-xs font-bold tracking-[0.6px] text-[#705600] uppercase shadow-sm">
              Annual Flagship Expo
            </span>
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-white">
              <span className="flex items-center gap-1 text-xs">📍 Main Auditorium & STEM Lab Wing</span>
              <span className="text-xs tracking-[1.2px] uppercase opacity-80">CBSE Curricular Showcase</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 p-8 lg:col-span-5 lg:p-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="rounded-xl bg-[#e7eeff] px-2 py-0.5 font-sans text-xs font-semibold text-brand">
                  STEM & Applied Innovation
                </span>
                <span className="text-xs text-slate-400">Featured Dispatch</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
                  Science Expo &ldquo;Eurekha&rdquo; — Over 220 Innovative Student Displays
                </h2>
                <span className="h-1 w-12 rounded-full bg-accent" />
              </div>
              <p className="text-base text-slate-600">
                Transforming textbook equations into living apparatus, young innovators from Middle and Senior
                Secondary wings mounted 220+ inquiry projects. From solar-assisted irrigation to autonomous IoT
                campus monitors, scholars articulated practical proofs-of-concept before esteemed academic panels.
              </p>
              <div className="flex gap-2 rounded-lg bg-surface p-4">
                <div className="flex-1">
                  <p className="font-display text-2xl font-bold text-brand">220+</p>
                  <p className="font-sans text-xs font-semibold text-slate-500">Working Models</p>
                </div>
                <div className="flex-1">
                  <p className="font-display text-2xl font-bold text-accent-dark">1,400+</p>
                  <p className="font-sans text-xs font-semibold text-slate-500">Parent & Peer Visitors</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="flex items-center gap-1 font-sans text-sm font-bold text-brand">
                Read Full Chronicle
                <img src={arrowRight} alt="" className="size-3.5" />
              </span>
              <span className="text-xs text-slate-400">4 Min Curated Read</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
