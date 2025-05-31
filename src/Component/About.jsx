// components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section className="section" id="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
            <div className="section-divider"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
            <p>I'm a passionate Software Developer who thrives on working with diverse technologies. From web development to emerging tech, I enjoy building efficient, scalable, and impactful solutions that solve real-world problems and push the boundaries of innovation.</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">1.7+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Projects Worked</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}
