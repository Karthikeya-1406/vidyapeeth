import { useState, type FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'

export default function NewsletterCta() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
  }

  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-2xl bg-brand p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] sm:p-12 lg:p-16">
        <div className="absolute -top-16 -right-16 size-80 rounded-xl bg-accent/20 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col items-start gap-3 lg:col-span-7">
            <span className="font-sans text-xs font-bold tracking-[0.6px] text-accent-light uppercase">
              ● Academic Session 2025–2026 Enrolments
            </span>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Stay Connected with Our Vibrant Community
            </h2>
            <p className="max-w-lg text-base text-footer-muted">
              Receive scholarly bulletins, exhibition schedules, and direct notifications for student admissions
              from Early Years through Senior Secondary Wings.
            </p>

            {subscribed ? (
              <p className="mt-2 flex items-center gap-2 rounded-sm bg-white/10 px-4 py-3 font-sans text-sm font-semibold text-white">
                <span aria-hidden>✓</span> Thanks — you&rsquo;re subscribed to Vidya Peeth updates.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-2 flex w-full max-w-lg gap-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter parent or guardian email..."
                  className="h-11 flex-1 rounded-sm bg-white px-4 text-sm text-brand placeholder:text-slate-500 outline-none"
                />
                <button
                  type="submit"
                  className="flex h-11 shrink-0 items-center gap-1 rounded-sm bg-accent px-6 font-sans text-sm font-bold text-[#705600] transition-colors hover:bg-accent-dark"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-[6px] lg:col-span-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-sans text-xs font-bold tracking-[0.6px] text-accent uppercase">
                Admissions Open
              </span>
              <span className="rounded-sm bg-accent/20 px-1 py-0.5 font-sans text-xs font-semibold text-accent-light">
                Karimnagar Campus
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Give Your Child an Inspiring Intellectual Foundation
            </h3>
            <p className="mt-3 text-sm text-footer-muted">
              Book a personalized campus walkthrough, inspect our scientific labs, and interact directly with our
              academic coordinators.
            </p>
            <div className="mt-4 flex gap-2">
              <Button
                as={NavLink}
                to="/admissions"
                className="flex-1 justify-center text-center"
                icon={<img src={arrowRight} alt="" className="size-3.5" />}
              >
                Apply for Admission
              </Button>
              <NavLink
                to="/contact"
                className="flex flex-1 items-center justify-center rounded-sm bg-white/20 px-4 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-white/30"
              >
                Schedule Tour
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
