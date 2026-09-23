import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/layout/Layout'
import MinimalLayout from './components/layout/MinimalLayout'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import BeyondAcademics from './pages/BeyondAcademics'
import Admissions from './pages/Admissions'
import Gallery from './pages/Gallery'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import MandatoryDisclosure from './pages/MandatoryDisclosure'
import Contact from './pages/Contact'
import Enquiry from './pages/Enquiry'
import ParentLogin from './pages/ParentLogin'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="beyond-academics" element={<BeyondAcademics />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="contact" element={<Contact />} />
          <Route path="enquiry" element={<Enquiry />} />
        </Route>
        <Route element={<MinimalLayout />}>
          <Route path="parent-login" element={<ParentLogin />} />
        </Route>
      </Routes>
    </>
  )
}
