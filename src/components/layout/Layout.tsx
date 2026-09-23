import { Outlet } from 'react-router-dom'
import Header from './Header'
import AnnouncementBar from './AnnouncementBar'
import Footer from './Footer'
import PageTransition from '../PageTransition'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="relative">
        <AnnouncementBar />
        <main className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
      </div>
      <Footer />
    </div>
  )
}
