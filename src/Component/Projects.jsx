// components/Projects.jsx
import React from 'react';

export default function Projects() {


  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work and explorations</p>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">🌐</div>
            </div>
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>Fully developed using React and TailwindCSS, this site showcases my projects, skills, and experience.</p>
              <div className="project-tech">
                <span>React</span>
                <span>TailwindCSS</span>
                <span>WebGPU (Research)</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">💻</div>
            </div>
            <div className="project-content">
              <h3>3D AI Engine</h3>
              <p>Currently in research phase - experimenting with WebGPU and AI integration for real-time rendering.</p>
              <div className="project-tech">
                <span>WebGPU</span>
                <span>JavaScript</span>
                <span>AI Integration</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">⚙️</div>
            </div>
            <div className="project-content">
              <h3>UI Components Library</h3>
              <p>Currently in research phase - building a reusable UI component library using React and TailwindCSS for rapid development.</p>
              <div className="project-tech">
                <span>React</span>
                <span>TailwindCSS</span>
                <span>Storybook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
