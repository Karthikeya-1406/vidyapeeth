import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import pinIcon from '../../assets/icons/pin.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import mailIcon from '../../assets/icons/mail.svg'
import clockIcon from '../../assets/icons/clock.svg'

const aboutLinks = [
  { label: 'Vision & Institutional Mission', to: '/about' },
  { label: 'Leadership & Faculty', to: '/about' },
  { label: 'Campus Infrastructure', to: '/about' },
  { label: 'Work With Us (Careers)', to: '/careers' },
  { label: 'Campus Chronicles & Blog', to: '/blog' },
]

const programLinks = [
  { label: 'Early Childhood Education', to: '/academics' },
  { label: 'Primary & Middle Wing', to: '/academics' },
  { label: 'Secondary & Senior Secondary', to: '/academics' },
  { label: 'Athletics & Sports Complex', to: '/beyond-academics' },
  { label: 'Fine Arts & Performing Arena', to: '/beyond-academics' },
]

const contactItems = [
  {
    icon: pinIcon,
    iconClass: 'h-5 w-4',
    text: 'House No. 2-10-1282, Back Side Lane District Court, Jyothinagar, Karim Nagar, Telangana – 505001',
  },
  { icon: phoneIcon, iconClass: 'size-[18px]', text: '09346002121' },
  { icon: mailIcon, iconClass: 'h-4 w-5', text: 'ahps5103@academicheights.in' },
  { icon: clockIcon, iconClass: 'size-5', text: 'Mon–Sat 8:00 AM–2:00 PM' },
]

const bottomLinks = [
  { label: 'Mandatory Public Disclosure', to: '/mandatory-disclosure' },
  { label: 'Admissions Helpdesk', to: '/admissions' },
  { label: 'Portal Access', to: '/parent-login' },
]

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="font-display text-lg font-semibold leading-7 text-white">{children}</h4>
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="w-fit text-sm leading-5 tracking-[0.07px] text-footer-muted transition-colors hover:text-white"
    >
      {label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 pb-12 sm:grid-cols-2 sm:pb-16 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Vidhya Peeth High School logo" className="size-16 shrink-0 object-contain" />
              <span className="font-display text-xl font-bold text-white">VIDYA PEETH</span>
            </div>
            <p className="pt-2 font-sans text-xs font-semibold tracking-[0.3px] text-accent-light">
              CBSE AFFILIATION NO. 3630436
            </p>
            <p className="max-w-[300px] text-sm leading-[22.75px] tracking-[0.07px] text-footer-muted">
              Fostering intellectual gravity, progressive character, and ethical excellence in
              Karimnagar, Telangana.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <FooterHeading>About School</FooterHeading>
            <div className="flex flex-col gap-3">
              {aboutLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <FooterHeading>Our Programs</FooterHeading>
            <div className="flex flex-col gap-3">
              {programLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <FooterHeading>Stay in Touch</FooterHeading>
            <div className="flex flex-col gap-3">
              {contactItems.map(({ icon, iconClass, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center">
                    <img src={icon} alt="" className={iconClass} />
                  </span>
                  <p className="text-sm leading-5 tracking-[0.07px] text-footer-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:gap-8">
          <p className="text-xs font-semibold leading-5 tracking-[0.48px] text-footer-muted">
            © {new Date().getFullYear()} Vidya Peeth Schools, Karimnagar. All rights reserved.
            Affiliated to CBSE New Delhi.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {bottomLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="whitespace-nowrap text-xs font-semibold tracking-[0.48px] text-footer-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
