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
            <p>Junior graphics and game engine developer with hands-on experience working on real-time rendering systems using WebGPU and WebGL. Strong understanding of engine architecture, asset pipelines, and GPU-driven rendering workflows. Experienced in debugging rendering issues related to geometry, buffers, and textures, with a focus on clean and performance-aware engine design.</p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">WebGPU</span>
                <span className="stat-label">Primary API</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">glTF</span>
                <span className="stat-label">Asset Format</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
