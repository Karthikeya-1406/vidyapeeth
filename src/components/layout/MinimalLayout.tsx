import { Link, Outlet } from 'react-router-dom'
import logoMark from '../../assets/icons/logo-mark.svg'
import footerLogoMark from '../../assets/icons/footer-logo-mark.svg'
import PageTransition from '../PageTransition'

export default function MinimalLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full bg-white shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded bg-brand shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]">
              <img src={logoMark} alt="" className="h-[15px] w-[19px]" />
            </span>
            <span className="hidden flex-col items-start leading-none sm:flex">
              <span className="font-display text-[20px] font-semibold tracking-[-0.5px] text-brand uppercase">
                Vidya Peeth Schools
              </span>
              <span className="pt-1 font-sans text-[12px] font-semibold tracking-[1.2px] text-accent-dark uppercase">
                CBSE Affiliation No. 3630436
              </span>
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-1 font-sans text-sm font-semibold text-brand hover:text-accent-dark"
          >
            <span aria-hidden>←</span>
            <span>Return to Main Website</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <footer className="w-full bg-brand py-8">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-white/10">
              <img src={footerLogoMark} alt="" className="h-[15px] w-[19px]" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-white">Vidya Peeth Schools</span>
              <span className="pt-1 font-sans text-xs text-footer-muted">Karimnagar, Telangana</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-sans text-xs text-footer-muted sm:gap-6">
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-accent" aria-hidden />
              CBSE Affiliation No. 3630436
            </span>
            <span className="hidden opacity-40 sm:inline">•</span>
            <span>© {new Date().getFullYear()} Vidya Peeth Schools. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
