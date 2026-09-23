import { Link } from 'react-router-dom'
import footerLogoMark from '../../assets/icons/footer-logo-mark.svg'
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

const bottomLinks = [
  { label: 'Mandatory Public Disclosure', to: '/mandatory-disclosure' },
  { label: 'Admissions Helpdesk', to: '/admissions' },
  { label: 'Portal Access', to: '/parent-login' },
]

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="font-display text-lg font-semibold text-white">{children}</h4>
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="text-sm text-footer-muted tracking-[0.07px] hover:text-white">
      {label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand py-16 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 pb-1">
              <span className="flex size-8 items-center justify-center rounded bg-white">
                <img src={footerLogoMark} alt="" className="h-[15px] w-[19px]" />
              </span>
              <span className="font-display text-xl font-bold text-white">VIDYA PEETH</span>
            </div>
            <p className="font-sans text-xs font-semibold tracking-[0.3px] text-accent-light">
              CBSE AFFILIATION NO. 3630436
            </p>
            <p className="pt-0.5 text-sm leading-[22.75px] tracking-[0.07px] text-footer-muted">
              Fostering intellectual gravity, progressive character, and ethical excellence in
              Karimnagar, Telangana.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <FooterHeading>About School</FooterHeading>
            <div className="flex flex-col gap-1">
              {aboutLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <FooterHeading>Our Programs</FooterHeading>
            <div className="flex flex-col gap-1">
              {programLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <FooterHeading>Stay in Touch</FooterHeading>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <img src={pinIcon} alt="" className="h-5 w-4 shrink-0" />
                <p className="text-sm tracking-[0.07px] text-footer-muted">
                  House No. 2-10-1282, Back Side Lane District Court, Jyothinagar, Karim Nagar,
                  Telangana – 505001
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img src={phoneIcon} alt="" className="size-[18px] shrink-0" />
                <p className="text-sm tracking-[0.07px] text-footer-muted">09346002121</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={mailIcon} alt="" className="h-4 w-5 shrink-0" />
                <p className="text-sm tracking-[0.07px] text-footer-muted">
                  ahps5103@academicheights.in
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img src={clockIcon} alt="" className="size-5 shrink-0" />
                <p className="text-sm tracking-[0.07px] text-footer-muted">
                  Mon–Sat 8:00 AM–2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs font-semibold tracking-[0.48px] text-footer-muted">
            © {new Date().getFullYear()} Vidya Peeth Schools, Karimnagar. All rights reserved.
            Affiliated to CBSE New Delhi.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {bottomLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs font-semibold tracking-[0.48px] text-footer-muted hover:text-white"
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
