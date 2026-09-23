const metrics = [
  { value: 'CBSE 3630436', label: 'Affiliation Ref ID', icon: '🏫' },
  { value: 'Sec-5, NBC', label: 'Structural Clearance', icon: '🏗️' },
  { value: '100% Valid', label: 'SMC & PTA Quorum', icon: '👥' },
  { value: 'Class-A', label: 'Water & Sanitation Cert', icon: '💧' },
]

export default function OverviewBanner() {
  return (
    <section className="bg-[#f0f3ff] px-6 py-6 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1360px] grid-cols-2 gap-4 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex items-center gap-4 rounded-sm bg-white p-4 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-[#e7eeff] text-xl">
              {metric.icon}
            </span>
            <div>
              <p className="font-display text-xl font-bold text-brand">{metric.value}</p>
              <p className="text-xs text-slate-500">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
