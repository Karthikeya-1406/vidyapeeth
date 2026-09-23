import campusImage from '../../assets/images/campus-exterior.png'
import { boardResults } from '../../data/disclosureDocuments'

export default function PerformancePanel() {
  return (
    <section className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-12 lg:items-center">
        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img src={campusImage} alt="Vidya Peeth Schools campus" className="h-80 w-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-lg bg-white/90 p-4 backdrop-blur-md">
              <div>
                <p className="font-display text-lg font-bold text-brand">Statutory Campus Verification</p>
                <p className="text-sm text-slate-600">Jyothinagar, District Court Back Lane Campus, Karimnagar</p>
              </div>
              <span aria-hidden className="text-xl">
                ✅
              </span>
            </div>
          </div>
          <span className="absolute -top-4 -right-4 flex items-center gap-1 rounded-sm bg-accent px-4 py-1 text-sm font-bold text-[#705600] shadow-lg">
            📜 100% CBSE Audit
          </span>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-7">
          <span className="text-xs font-semibold tracking-[1.2px] text-[#765b00] uppercase">
            Document 15 Detailed Disclosure
          </span>
          <h2 className="font-display text-3xl font-bold tracking-[-0.5px] text-brand sm:text-4xl">
            Last Three-Year Board Performance
          </h2>
          <p className="text-base text-slate-600">
            Consistently achieving a 100% pass mandate with zero dropouts, Vidya Peeth Schools exemplifies
            educational rigor and individualized holistic mentoring.
          </p>

          <div className="overflow-x-auto rounded-lg bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="bg-[#f0f3ff] text-brand">
                  <th className="rounded-l-sm p-2 font-bold">Academic Year</th>
                  <th className="p-2 font-bold">Grade Level</th>
                  <th className="p-2 text-center font-bold">Registered</th>
                  <th className="p-2 text-center font-bold">Passed</th>
                  <th className="p-2 text-center font-bold">Pass %</th>
                  <th className="rounded-r-sm p-2 text-right font-bold">Exemplary (&gt;90%)</th>
                </tr>
              </thead>
              <tbody>
                {boardResults.map((row) => (
                  <tr key={row.year} className="border-t border-[#f0f3ff]">
                    <td className="p-2 font-semibold text-[#101c2f]">{row.year}</td>
                    <td className="p-2 text-[#101c2f]">{row.grade}</td>
                    <td className="p-2 text-center text-[#101c2f]">{row.registered}</td>
                    <td className="p-2 text-center text-[#101c2f]">{row.passed}</td>
                    <td className="p-2 text-center font-bold text-brand">{row.passPercent}</td>
                    <td className="p-2 text-right font-semibold text-[#101c2f]">{row.exemplary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="flex items-center gap-1 text-xs text-slate-500">
            ℹ️ Verified against CBSE Saransh portal archive records.
          </p>
        </div>
      </div>
    </section>
  )
}
