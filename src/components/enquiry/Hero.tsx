import heroImage from '../../assets/images/enquiry/hero.jpg'
import EnquiryForm from './EnquiryForm'

const metrics = [
  { value: '1:18', label: 'Educator-Student Guidance' },
  { value: 'CBSE', label: 'Affil. No. 3630436' },
  { value: '100%', label: 'Holistic Development' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-start gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <span className="flex w-fit items-center gap-1 rounded-full bg-[#e7eeff] px-4 py-1">
            <span className="size-2 rounded-full bg-accent" />
            <span className="font-sans text-xs font-semibold tracking-[0.6px] text-brand uppercase">
              Enquire Now &bull; Academic Session 2025&ndash;26
            </span>
          </span>

          <div className="flex flex-col gap-2">
            <h1 className="font-display text-4xl font-bold text-brand sm:text-5xl lg:text-[56px] lg:leading-[64px]">
              Let&rsquo;s Begin the{' '}
              <span className="text-accent-dark underline decoration-accent decoration-4 underline-offset-4">
                Conversation
              </span>
            </h1>
            <p className="max-w-md text-lg leading-[29px] tracking-[-0.09px] text-slate-600">
              Take the first step toward your child&rsquo;s transformative educational journey at
              Vidya Peeth Schools. Our dedicated academic counselors will guide you through
              curricula, grade pathways, and personalized campus walkthroughs.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg bg-[#f0f3ff] p-4">
                <p className="font-display text-xl font-bold text-brand">{metric.value}</p>
                <p className="pt-1 text-xs leading-4 text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-[#e7eeff] shadow-2xl">
            <img src={heroImage} alt="Counselor guiding a parent and student" className="h-[220px] w-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand/90 via-brand/30 to-transparent p-6">
              <span className="flex items-center gap-1 pb-1 text-xs font-semibold tracking-[1.2px] text-accent-light uppercase">
                <span aria-hidden>💬</span> Counseling Desk Assurance
              </span>
              <p className="text-sm text-[#f0f3ff]">
                &ldquo;We partner with families to cultivate curiosity, resilience, and
                compassionate leadership from early foundational years.&rdquo;
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg bg-brand p-6 shadow-lg">
            <span className="flex size-12 shrink-0 items-center justify-center rounded bg-white/10 text-2xl">
              🎧
            </span>
            <div className="flex flex-col">
              <span className="font-sans text-xs font-semibold tracking-[0.6px] text-accent-light uppercase">
                Direct Counselor Hotline
              </span>
              <a href="tel:09346002121" className="font-display text-xl font-bold text-white">
                09346002121
              </a>
              <p className="pt-1 text-xs text-footer-muted">
                Immediate consultation &amp; prospectus queries &bull; Mon&ndash;Sat: 8:00
                AM&ndash;2:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
