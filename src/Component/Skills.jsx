// components/Skills.jsx
import React from 'react';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical expertise and tools</p>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">

          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">Java (Core Java)</span>
              <span className="skill-tag">SQL (MySQL)</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Frontend Technologies</h3>
            <div className="skill-tags">
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">React Hooks</span>
              <span className="skill-tag">React Router</span>
              <span className="skill-tag">DOM Manipulation</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend & Server</h3>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">RESTful API</span>
              <span className="skill-tag">JWT Authentication</span>
              <span className="skill-tag">CRUD Operations</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Java Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Spring Data JPA</span>
              <span className="skill-tag">REST API with Spring</span>
              <span className="skill-tag">MySQL Integration</span>
              <span className="skill-tag">MVC Architecture</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skill-tags">
              <span className="skill-tag">MongoDB Atlas</span>
              <span className="skill-tag">MySQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>WebGL / WebGPU /3D / Graphics</h3>
            <div className="skill-tags">
              <span className="skill-tag">HTML5 Canvas</span>
              <span className="skill-tag">WebGL</span>
              <span className="skill-tag">WebGPU</span>
              <span className="skill-tag">Shader Basics</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Version Control & Dev Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">JDK</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Deployment & Cloud</h3>
            <div className="skill-tags">
              <span className="skill-tag">Vercel</span>
              <span className="skill-tag">Netlify</span>
              <span className="skill-tag">MongoDB Atlas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
