import { Link } from 'react-router-dom'

export default function GrievanceBox() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-20">
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-2xl bg-brand p-8 shadow-xl sm:p-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-3 lg:col-span-7">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-accent" />
              <span className="text-xs font-semibold tracking-[1.2px] text-accent-light uppercase">
                Statutory Communication Desk
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-[-0.5px] text-white sm:text-4xl lg:text-[44px]">
              Institutional Helpdesk &amp; Grievance Redressal
            </h2>
            <p className="max-w-xl text-base text-footer-muted">
              Should you require certified physical copies, original ledger inspections, or clarifications regarding
              statutory disclosures, our administrative compliance nodal officer is reachable via official
              communication channels.
            </p>
            <div className="flex flex-wrap gap-4 pt-1 text-xs text-accent-light">
              <span>• Protection of Child Rights Officer Appointed</span>
              <span>• Internal Complaints Committee (ICC) Active</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg bg-white/10 p-6 backdrop-blur-md lg:col-span-5">
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-accent text-lg">
                📞
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.6px] text-[#dfe8ff] uppercase">
                  Direct Telephone Helpline
                </p>
                <p className="font-display text-xl font-bold text-white">09346002121</p>
                <p className="text-xs text-footer-muted">Mon–Sat: 8:00 AM – 2:00 PM IST</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-white text-lg">
                ✉️
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.6px] text-[#dfe8ff] uppercase">
                  Official Verification Email
                </p>
                <p className="font-display text-lg font-bold break-all text-white">ahps5103@academicheights.in</p>
                <p className="text-xs text-footer-muted">Attn: School Manager / Principal</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-1 flex items-center justify-center gap-1 rounded-sm bg-accent px-4 py-3 font-sans text-sm font-bold tracking-[0.14px] text-[#705600] shadow-sm transition-colors hover:bg-accent-dark"
            >
              DISCLOSURE ASSISTANCE ENQUIRY
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
