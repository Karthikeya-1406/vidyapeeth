import academicIcon from '../../assets/icons/pillars/academic.svg'
import holisticIcon from '../../assets/icons/pillars/holistic.svg'
import infrastructureIcon from '../../assets/icons/pillars/infrastructure.svg'
import teachersIcon from '../../assets/icons/pillars/teachers.svg'
import safetyIcon from '../../assets/icons/pillars/safety.svg'
import futureReadyIcon from '../../assets/icons/pillars/future-ready.svg'

const pillars = [
  { icon: academicIcon, label: 'Academic\nExcellence' },
  { icon: holisticIcon, label: 'Holistic\nDevelopment' },
  { icon: infrastructureIcon, label: 'Modern\nInfrastructure' },
  { icon: teachersIcon, label: 'Experienced\nTeachers' },
  { icon: safetyIcon, label: 'Safe & Nurturing\nEnvironment' },
  { icon: futureReadyIcon, label: 'Future-Ready\nLearning' },
]

export default function FeatureStrip() {
  return (
    <div className="relative z-10 -mt-14 border-y border-slate-100 bg-white px-6 py-6 shadow-[0_-10px_30px_-15px_rgba(10,37,86,0.15)] sm:px-10 lg:-mt-20 lg:px-16">
      <div className="mx-auto grid max-w-[1360px] grid-cols-2 gap-6 sm:grid-cols-3 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-4">
        {pillars.map((pillar) => (
          <div key={pillar.label} className="flex items-center gap-3 rounded-xl p-2">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-amber-200/60 bg-amber-50">
              <img src={pillar.icon} alt="" className="size-5" />
            </span>
            <span className="font-display text-[11px] leading-tight font-bold tracking-[0.5px] text-brand uppercase whitespace-pre-line">
              {pillar.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
