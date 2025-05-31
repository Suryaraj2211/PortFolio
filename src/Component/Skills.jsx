// components/Skills.jsx
import React from 'react';

export default function Skills() {
  const skillList = ['JavaScript', 'React', 'WebGPU', 'WebGL', 'HTML', 'CSS', 'Node.js', 'Git'];

  return (
    <section className="section" id="skills">
  <div className="container">
    <div className="section-header">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">My journey and current expertise</p>
      <div className="section-divider"></div>
    </div>

    <div className="skills-grid">

      <div className="skill-category">
        <h3>Core Programming & Engine Development</h3>
        <div className="skill-tags">
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">C++</span>
          <span className="skill-tag">WebGL</span>
          <span className="skill-tag">WebGPU</span>
          <span className="skill-tag">Vulkan</span>
          <span className="skill-tag">ImGui</span>
          <span className="skill-tag">3D Engine Development</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Frontend & UI Design</h3>
        <div className="skill-tags">
          <span className="skill-tag">React</span>
          <span className="skill-tag">Tailwind CSS</span>
          <span className="skill-tag">HTML5</span>
          <span className="skill-tag">CSS3</span>
          <span className="skill-tag">Canvas</span>
          <span className="skill-tag">Figma (Basic)</span>
          <span className="skill-tag">Canva (Editing)</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Backend & Databases</h3>
        <div className="skill-tags">
          <span className="skill-tag">Java (JDBC, Servlets)</span>
          <span className="skill-tag">MySQL</span>
        </div>
      </div>

      <div className="skill-category">
        <h3>Tools & Research</h3>
        <div className="skill-tags">
          <span className="skill-tag">Blender (3D Modeling Research)</span>
          <span className="skill-tag">Three.js (Research & Prototyping)</span>
          <span className="skill-tag">Git</span>
          <span className="skill-tag">VS Code</span>
          <span className="skill-tag">PlayCanvas</span>
          <span className="skill-tag">Kool Engine</span>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
