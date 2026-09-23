import { useState } from 'react'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import arrowRight from '../assets/icons/arrow-right.svg'
import phoneIcon from '../assets/icons/phone.svg'
import mailIcon from '../assets/icons/mail.svg'
import clockIcon from '../assets/icons/clock.svg'

export default function ParentLogin() {
  const [notConnected, setNotConnected] = useState(false)

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-surface px-4 py-16 sm:py-24">
      <div
        className="pointer-events-none absolute -top-24 -left-20 size-96 rounded-xl bg-[rgba(223,232,255,0.6)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 -bottom-28 size-[30rem] rounded-xl bg-[rgba(255,223,146,0.2)] blur-3xl"
        aria-hidden
      />

      <Reveal className="relative flex w-full max-w-[672px] flex-col items-center gap-6">
        <div className="w-full overflow-hidden rounded-xl bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <div className="h-2 w-full bg-gradient-to-r from-brand via-accent to-accent-dark" />

          <div className="flex flex-col items-center px-6 py-10 text-center sm:px-14 sm:py-14">
            <div className="relative mb-6 flex size-20 rotate-3 items-center justify-center rounded-2xl bg-[#e7eeff] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
              <svg viewBox="0 0 24 24" className="size-8 -rotate-3 fill-none stroke-brand" strokeWidth={2}>
                <path
                  d="M12 3l7 3v5c0 4.5-3 8.25-7 9.5-4-1.25-7-5-7-9.5V6l7-3z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute -top-1 -right-1.5 size-4 rounded-full bg-accent" aria-hidden />
            </div>

            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#dfe8ff] px-3.5 py-1 font-sans text-xs font-semibold tracking-[0.6px] text-brand uppercase">
              <span className="size-2 rounded-full bg-accent-dark" aria-hidden />
              Parent Portal Gateway
            </span>

            <h1 className="font-display text-[32px] leading-[1.15] font-semibold tracking-tight text-brand sm:text-[44px]">
              Access Your Parent Portal
            </h1>

            <p className="mt-6 max-w-[36rem] text-base leading-[1.6] text-slate-600 sm:text-lg">
              Seamlessly access student attendance, academic notices, and school updates through the
              centralized <span className="font-semibold text-brand">Bachpan 360°</span> platform.
            </p>

            <div className="mt-8">
              <Button onClick={() => setNotConnected(true)} icon={<img src={arrowRight} alt="" className="size-3.5" />}>
                Continue to Bachpan 360°
              </Button>
            </div>

            {notConnected && (
              <p
                role="status"
                className="mt-4 rounded-lg bg-accent-light/40 px-4 py-2 font-sans text-sm font-semibold text-accent-dark"
              >
                Parent Portal integration is not connected yet — please check back soon, or reach the
                school office below in the meantime.
              </p>
            )}

            <div className="mt-8 flex w-full items-start gap-3.5 rounded-lg bg-[#f0f3ff] p-5 text-left">
              <span className="text-lg text-accent-dark" aria-hidden>
                ℹ️
              </span>
              <p className="text-sm leading-[1.5] text-slate-600">
                <span className="font-semibold text-brand">Official Redirection Notice:</span> Bachpan
                360° is our secure external management system. Continuing above redirects you to the
                official login portal.
              </p>
            </div>

            <div className="mt-6 flex w-full flex-col items-start gap-3 rounded-lg bg-surface p-6 text-left">
              <div className="flex items-center gap-2">
                <span className="text-lg text-accent-dark" aria-hidden>
                  🎧
                </span>
                <h2 className="font-display text-lg font-semibold text-brand">
                  Technical Support &amp; Helpdesk Assistance
                </h2>
              </div>
              <p className="text-sm leading-[1.6] text-slate-600">
                Need assistance logging in? Contact the school administration office during standard
                hours:
              </p>

              <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded bg-white p-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#e7eeff]">
                    <img src={phoneIcon} alt="" className="size-3.5" />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs text-slate-500">Phone Enquiries</span>
                    <span className="font-sans text-sm font-semibold text-brand">09346002121</span>
                  </div>
                </div>
                <div className="flex flex-1 items-center gap-3 rounded bg-white p-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#e7eeff]">
                    <img src={mailIcon} alt="" className="size-3.5" />
                  </span>
                  <div className="flex min-w-0 flex-col leading-tight">
                    <span className="text-xs text-slate-500">Email Support</span>
                    <span className="truncate font-sans text-sm font-semibold text-brand">
                      ahps5103@academicheights.in
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                <img src={clockIcon} alt="" className="size-3" />
                Administrative Desk Hours: Mon–Sat, 8:00 AM – 2:00 PM
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs tracking-wide text-slate-500">
          Encrypted TLS Connection • Certified Digital Academic Gateway
        </p>
      </Reveal>
    </div>
  )
}
