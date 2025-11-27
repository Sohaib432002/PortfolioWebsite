import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';

import About from './components/About';
import AboutSection from "./components/AboutSection";
import AchievementsAndCertificates from "./components/AchievementsAndCertificates";
import CertificateSection from "./components/CertificateSection";
import ContactDetails from "./components/ContactDetail";
import ContactSection from './components/ContactSection';
import FAQSection from "./components/FAQSection";
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectSection';
import ProjectsSectionDetails from "./components/ProjectSectionDetails";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from './components/SkillsSection';

// Optional: Separate pages (if needed)
function HomePage() {
  return (
    <>
      <HeroSection />
      <About/>
      <SkillsSection />
      <CertificateSection />

      <ProjectsSection />
      <ContactSection />
    </>
  );
}

function SkillsPage() {
  return (
    <>
      <SkillsSection />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <ProjectsSection />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutSection/>} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsSectionDetails />} />
        <Route path="/Achivements" element={<AchievementsAndCertificates/>} />
        <Route path="/Services" element={<ServicesSection/>} />
        <Route path="/contact" element={<ContactDetails />} />
        <Route path="/FAQ" element={<FAQSection />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
