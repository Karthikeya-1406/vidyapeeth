import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
// The icon files are misnamed; these imports are paired by what each SVG actually draws.
import pinIcon from '../../assets/icons/phone.svg'
import phoneIcon from '../../assets/icons/mail.svg'
import mailIcon from '../../assets/icons/clock.svg'
import clockIcon from '../../assets/icons/pin.svg'
import {
  ADDRESS_LINES,
  EMAIL_IS_PLACEHOLDER,
  MAPS_URL,
  OFFICE_HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
  SCHOOL_EMAIL,
  SOCIAL_LINKS,
  WHATSAPP_NUMBER,
} from '../../data/contact'

const discoverLinks = [
  { label: 'About Vidhyapeeth', to: '/about' },
  { label: 'Vision, Mission & Philosophy', to: '/about#vision' },
  { label: 'Leadership', to: '/about#leadership' },
  { label: 'Campus & Infrastructure', to: '/academics#environment' },
  { label: 'Student Life', to: '/gallery' },
  { label: 'News & Stories', to: '/blog' },
  { label: 'Careers', to: '/careers' },
]

// The Academics page has no separate stage pages yet, so stage links open its curriculum section.
const learningLinks = [
  { label: 'Academics', to: '/academics' },
  { label: 'Foundational & Primary Years', to: '/academics#curriculum' },
  { label: 'Middle School', to: '/academics#curriculum' },
  { label: 'Secondary School', to: '/academics#curriculum' },
  { label: 'Beyond Academics', to: '/beyond-academics' },
  { label: 'Admissions 2027–28', to: '/admissions' },
  { label: 'Book a Campus Experience', to: '/enquiry' },
]

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello Vidhyapeeth Karimnagar, I would like to know more about admissions.',
)}`

// Outline icons (24×24, stroke-based) so the set stays visually consistent.
const socialLinks = [
  {
    label: 'Vidhyapeeth Karimnagar on Instagram',
    href: SOCIAL_LINKS.instagram,
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
  {
    label: 'Vidhyapeeth Karimnagar on Facebook',
    href: SOCIAL_LINKS.facebook,
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: 'Vidhyapeeth Karimnagar on YouTube',
    href: SOCIAL_LINKS.youtube,
    icon: (
      <>
        <path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </>
    ),
  },
  {
    label: 'Vidhyapeeth Karimnagar on LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: 'Vidhyapeeth Karimnagar on Twitter',
    href: SOCIAL_LINKS.twitter,
    icon: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    ),
  },
  {
    label: 'Chat with Vidhyapeeth Karimnagar admissions on WhatsApp',
    href: WHATSAPP_HREF,
    icon: (
      <>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
      </>
    ),
  },
  {
    label: `Call Vidhyapeeth Karimnagar on ${PHONE_DISPLAY}`,
    href: PHONE_HREF,
    icon: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    ),
  },
]

// Privacy Policy and Terms of Use are placeholder pages until the approved text is published.
const bottomLinks = [
  { label: 'Mandatory Public Disclosure', to: '/mandatory-disclosure' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact Us', to: '/contact' },
]

function ContactRow({ icon, iconClass, children }: { icon: string; iconClass: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex size-5 shrink-0 items-center justify-center">
        <img src={icon} alt="" className={iconClass} />
      </span>
      <div className="text-sm leading-5 tracking-[0.07px] text-footer-text">{children}</div>
    </div>
  )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-lg font-semibold leading-7 text-white">{children}</h2>
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="w-fit text-sm leading-5 tracking-[0.07px] text-footer-text transition-colors hover:text-white"
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
              <img src={logo} alt="Vidhyapeeth Karimnagar" className="size-16 shrink-0 object-contain" />
              <span className="flex flex-col items-start gap-1">
                <span className="font-display text-[20px] leading-none font-extrabold tracking-[-0.5px] text-white">
                  VIDHYAPEETH
                </span>
                <span className="pl-1 font-display text-[11px] leading-none font-semibold tracking-[2.75px] text-accent">
                  KARIMNAGAR
                </span>
              </span>
            </div>
            <p className="pt-2 font-sans text-xs font-semibold tracking-[0.3px] text-accent-light">
              CBSE Affiliation No. 3630436
            </p>
            <p className="max-w-[320px] text-sm leading-[22.75px] tracking-[0.07px] text-footer-text">
              A CBSE school focused on strong academics, confident communication and
              character&mdash;helping every child grow with purpose.
            </p>
            <p className="font-script text-2xl text-accent">Learning with Purpose.</p>
            <ul className="flex flex-wrap items-center gap-2.5 pt-1">
              {socialLinks.map(({ label, href, icon }) => {
                const external = href.startsWith('http')
                return (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      title={label}
                      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-footer-text transition-colors hover:border-accent hover:bg-accent hover:text-brand focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        {icon}
                      </svg>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <nav aria-label="Discover Vidhyapeeth" className="flex flex-col gap-5">
            <FooterHeading>Discover Vidhyapeeth</FooterHeading>
            <div className="flex flex-col gap-3">
              {discoverLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </nav>

          <nav aria-label="Learning and admissions" className="flex flex-col gap-5">
            <FooterHeading>Learning &amp; Admissions</FooterHeading>
            <div className="flex flex-col gap-3">
              {learningLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </nav>

          <div className="flex flex-col gap-5">
            <FooterHeading>Visit Vidhyapeeth Karimnagar</FooterHeading>
            <address className="flex flex-col gap-3 not-italic">
              <ContactRow icon={pinIcon} iconClass="h-5 w-4">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </ContactRow>
              <ContactRow icon={phoneIcon} iconClass="size-[18px]">
                Phone:{' '}
                <a href={PHONE_HREF} className="transition-colors hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </ContactRow>
              <ContactRow icon={mailIcon} iconClass="h-4 w-5">
                Email:{' '}
                {EMAIL_IS_PLACEHOLDER ? (
                  SCHOOL_EMAIL
                ) : (
                  <a href={`mailto:${SCHOOL_EMAIL}`} className="break-all transition-colors hover:text-white">
                    {SCHOOL_EMAIL}
                  </a>
                )}
              </ContactRow>
              <ContactRow icon={clockIcon} iconClass="size-5">
                School Office: {OFFICE_HOURS}
              </ContactRow>
            </address>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit font-display text-xs font-bold tracking-[0.6px] text-accent uppercase hover:underline"
              >
                Get Directions &rarr;
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit font-display text-xs font-bold tracking-[0.6px] text-accent uppercase hover:underline"
              >
                WhatsApp Admissions &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-8">
            <p className="text-xs font-semibold leading-5 tracking-[0.48px] text-footer-text">
              &copy; {new Date().getFullYear()} Vidhyapeeth Karimnagar. All Rights Reserved.
              <span className="px-2" aria-hidden>
                |
              </span>
              CBSE Affiliation No. 3630436
            </p>
            <nav aria-label="Legal and quick links" className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="whitespace-nowrap text-xs font-semibold tracking-[0.48px] text-footer-text transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <p className="text-xs text-footer-text/80">
            Vidhyapeeth Karimnagar &middot; CBSE School in Karimnagar, Telangana
          </p>
        </div>
      </div>
    </footer>
  )
}
