// App.js
import React from 'react';
import '../Style/Root.css';
import '../Style/Navbar.css';
import '../Style/Hero.css';
import '../Style/About.css';
import '../Style/Skills.css';
import '../Style/Experience.css';
import '../Style/Project.css';
import '../Style/ContactMethod.css'
import '../Style/ContactForm.css';
import '../Style/ContactInfo.css';
import '../Style/ContactHeader.css';
import '../Style/ContactSection.css';
import '../Style/SocialSection.css';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import ContactForm from './ContactForm.jsx';
import ContactInfo from './ContactInfo.jsx';
import ConstantSection from './ContactSection.jsx';
import ContactHeader from './ContactHeader.jsx';
import SocialSection from './SocialSection.jsx';
import ContactMethod from './ContactMethod.jsx';
export default function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToContact={scrollToContact} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ConstantSection />
    </div>
  );
}
