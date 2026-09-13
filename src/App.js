import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'

import About from './components/About'
import AboutSection from './components/AboutSection'
import AchievementsAndCertificates from './components/AchievementsAndCertificates'
import CertificateSection from './components/CertificateSection'
import ContactDetails from './components/ContactDetail'
import ContactSection from './components/ContactSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSectionDetails from './components/ProjectSectionDetails'
import ServicesSection from './components/ServicesSection'
import SkillsSection from './components/SkillsSection'
import ScrollToTop from './components/Scroll'
import CoreProject from './components/CoreProject'
import WhatsAppButton from './components/WhatsAppButton'
function HomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <SkillsSection />
      <CertificateSection />
      <CoreProject />
      <ContactSection />
    </>
  )
}

function SkillsPage() {
  return <SkillsSection />
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/About" element={<AboutSection />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsSectionDetails />} />
        <Route path="/Achivements" element={<AchievementsAndCertificates />} />
        <Route path="/Services" element={<ServicesSection />} />
        <Route path="/contact" element={<ContactDetails />} />
        <Route path="/FAQ" element={<FAQSection />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
