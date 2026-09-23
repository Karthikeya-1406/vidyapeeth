import { NavLink } from 'react-router-dom'
import directorPhoto from '../../assets/images/leadership-director.png'
import principalPhoto from '../../assets/images/leadership-principal.png'

const messages = [
  {
    photo: directorPhoto,
    role: "Director's Message",
    name: '[Director Name]',
    quote:
      '"We believe in nurturing curiosity, creativity, leadership, and strong values in every child. Our endeavor is to make school a joy of discovery rather than a race of memory."',
  },
  {
    photo: principalPhoto,
    role: "Principal's Message",
    name: '[Principal Name]',
    quote:
      '"With dedicated teachers and modern facilities, we focus on academic growth and holistic development, preparing compassionate global citizens grounded in sound ethics."',
  },
]

export default function LeadershipMessages() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-16">
        <div className="text-center">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
            Our Visionaries
          </span>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-brand sm:text-4xl">
            Messages From Our Leadership
          </h2>
        </div>

        <div className="grid w-full gap-8 md:grid-cols-2">
          {messages.map((msg) => (
            <div key={msg.role} className="flex flex-col gap-6 rounded-3xl border border-slate-200/80 bg-slate-50/60 p-8 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="size-20 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-md">
                  <img src={msg.photo} alt={msg.role} className="size-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-brand">{msg.role}</h3>
                  <p className="font-display text-xs font-semibold tracking-[0.6px] text-accent-dark uppercase">
                    {msg.name}
                  </p>
                  <p className="text-[11px] text-slate-400">Vidya Peeth Schools</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">{msg.quote}</p>
              <div className="flex justify-end border-t border-slate-200/60 pt-4">
                <NavLink
                  to="/about"
                  className="font-display text-xs font-bold tracking-[0.6px] text-brand uppercase hover:underline"
                >
                  Read Full Message &rarr;
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
