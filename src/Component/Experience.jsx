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
              <span className="timeline-company">Hexrfactory Immersive Tech Pvt Ltd</span>
              <span className="timeline-date">2023 - Present</span>
              <ul className="experience-list">
                <li>Implemented rendering features using WebGPU and WebGL, including buffer setup, draw calls, and render pass configuration</li>
                <li>Developed and refined asset loading workflows for glTF-based 3D scenes</li>
                <li>Integrated Blender-exported assets and baked textures into real-time rendering pipelines</li>
                <li>Debugged and resolved issues related to transforms, buffer layouts, textures, and shader inputs</li>
                <li>Supported texture baking and asset preparation workflows for PBR-based rendering</li>
                <li>Contributed to improvements in engine structure and rendering stability</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Education</h3>
              <span className="timeline-company">Bachelor of Science in Mathematics (B.Sc. Mathematics)</span>
              <span className="timeline-date">Kamaraj College, Manonmaniam Sundaranar University - 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
