// components/Hero.jsx
import React from 'react';
import profileImage from '../assets/SuryaPM.jpg';

export default function Hero({ scrollToContact }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <img src={profileImage} alt="Profile" className="hero-image" />
          <h1 className="hero-title fade-in">WELCOME</h1>
          <p className="hero-subtitle fade-in">I am SURYA P M</p>
          <h2 className="hero-role fade-in">Software Developer</h2>
          <p className="hero-description fade-in">
            Passionate about creating innovative digital solutions with modern technologies
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              <span>Hire Me</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="/surya p m.pdf" download className="btn-secondary flex items-center gap-2">
              <span>Download Resume</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Floating Cards */}
        <div className="hero-visual">
          <div className="floating-elements">
            {[
              { icon: '💻', title: 'Development Expertise', text: 'Software development with modern frameworks and best practices' },
              { icon: '⚡', title: 'Performance Optimization', text: 'Building fast, efficient applications with optimized code' },
              { icon: '📈', title: 'Scalable Architecture', text: 'Designing systems that grow with your business needs' },
            ].map(({ icon, title, text }, i) => (
              <div className="floating-card" key={i}>
                <div className="card-icon">{icon}</div>
                <span>{title.split(' ')[0]}</span>
                <div className="message-box">
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
