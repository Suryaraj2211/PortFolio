// components/Projects.jsx
import React from 'react';

export default function Projects() {

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Graphics and engine development work</p>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">🎮</div>
            </div>
            <div className="project-content">
              <h3>WebGPU Rendering Engine</h3>
              <p>Real-time rendering engine built with WebGPU featuring buffer management, render passes, draw submission, and GPU pipeline configuration.</p>
              <div className="project-tech">
                <span>WebGPU</span>
                <span>TypeScript</span>
                <span>Shaders</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">📦</div>
            </div>
            <div className="project-content">
              <h3>glTF Asset Loader</h3>
              <p>Complete glTF 2.0 asset loader supporting buffers, accessors, node hierarchies, and PBR material integration for real-time engines.</p>
              <div className="project-tech">
                <span>glTF 2.0</span>
                <span>JavaScript</span>
                <span>PBR Textures</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">💡</div>
            </div>
            <div className="project-content">
              <h3>PBR Lighting System</h3>
              <p>Implemented Phong and Blinn-Phong lighting models with gamma correction, normal mapping, and real-time shadow support.</p>
              <div className="project-tech">
                <span>WebGL2</span>
                <span>GLSL Shaders</span>
                <span>Lighting</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">🔧</div>
            </div>
            <div className="project-content">
              <h3>Scene Graph System</h3>
              <p>Hierarchical scene management with transform inheritance, parent-child relationships, and efficient traversal for real-time rendering.</p>
              <div className="project-tech">
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Engine Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
