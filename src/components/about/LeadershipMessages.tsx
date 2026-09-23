import directorPhoto from '../../assets/images/about-director.jpg'
import principalPhoto from '../../assets/images/about-principal.jpg'

const messages = [
  {
    photo: directorPhoto,
    eyebrow: 'Leadership Discourse',
    role: "Director's Message",
    name: 'Sri. R. Sudhakar Rao, M.Sc., M.Ed.',
    quote:
      '"Education is not the transaction of facts, but the ignition of innate wonder. At Vidya Peeth, our purpose is to give students the wings of fearless inquiry paired with the firm anchor of compassionate Indian values."',
    cta: 'Read Full Address',
  },
  {
    photo: principalPhoto,
    eyebrow: 'Academic Helm',
    role: "Principal's Message",
    name: 'Dr. K. Madhavi Reddy, Ph.D. in Education',
    quote:
      '"Our dedicated faculty ensures that our classrooms pulsate with real-world application, structured play, and conceptual clarity. We nurture every child so they emerge self-assured and emotionally resilient."',
    cta: 'Read Pedagogical Strategy',
  },
]

export default function LeadershipMessages() {
  return (
    <section className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-12">
        <div className="flex max-w-2xl flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              Stewardship &amp; Guidance
            </span>
            <span className="h-0.5 w-6 bg-accent" />
          </div>
          <h2 className="font-display text-3xl font-extrabold text-brand sm:text-4xl">
            Guiding with Experience, Inspiring with Purpose
          </h2>
          <p className="text-base text-slate-600">
            The institutional compass of Vidya Peeth Schools is steered by veteran educationists
            committed to student-first pedagogy.
          </p>
        </div>

        <div className="grid w-full gap-8 md:grid-cols-2">
          {messages.map((msg) => (
            <div key={msg.role} className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-md sm:flex-row">
              <div className="h-48 w-full shrink-0 overflow-hidden rounded-sm shadow-sm sm:w-40">
                <img src={msg.photo} alt={msg.role} className="size-full object-cover" />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.6px] text-accent-dark uppercase">
                  {msg.eyebrow}
                </p>
                <h3 className="pt-1 font-display text-xl font-bold text-brand">{msg.role}</h3>
                <p className="pt-1 text-xs text-slate-500">{msg.name}</p>
                <p className="pt-3 text-sm leading-relaxed text-slate-600">{msg.quote}</p>
                <div className="flex items-center gap-1 pt-3 text-xs font-semibold text-brand">
                  {msg.cta} &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
