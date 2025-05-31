// components/Experience.jsx
import React from 'react';

export default function Experience() {

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
          <div className="section-divider"></div>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Software Developer</h3>
              <span className="timeline-company">Hexr Factory</span>
              <span className="timeline-date">Oct 3, 2023 - Present</span>
              <p>Working on game engine development involving multiple graphics APIs like WebGPU, WebGL, and Vulkan. Focused on real-time rendering, performance optimization, and building scalable 3D systems and tools.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>System Administrator & Labour</h3>
              <span className="timeline-company">Madura Coats</span>
              <span className="timeline-date">Dec 16, 2020 - Dec 30, 2022</span>
              <p>Managed system infrastructure, provided tech support, and contributed to operational workflows in a hybrid technical/manual role.</p>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
}
