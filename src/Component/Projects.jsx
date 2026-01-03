// components/Projects.jsx
import React from 'react';

export default function Projects() {

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Research-based graphics and engine development work</p>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">🎮</div>
            </div>
            <div className="project-content">
              <h3>WebGPU Rendering Engine</h3>
              <p>Research-based real-time rendering engine combining WebGL and WebGPU APIs, featuring buffer management, render passes, draw submission, and GPU pipeline configuration with cross-API compatibility.</p>
              <div className="project-tech">
                <span>WebGPU</span>
                <span>WebGL</span>
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
              <p>Research-based glTF 2.0 asset loader supporting buffers, accessors, node hierarchies, and PBR material integration for WebGL and WebGPU real-time engines.</p>
              <div className="project-tech">
                <span>glTF 2.0</span>
                <span>WebGL</span>
                <span>WebGPU</span>
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
              <p>Research-based implementation of Phong and Blinn-Phong lighting models with gamma correction, normal mapping, and real-time shadow support using WebGL and WebGPU.</p>
              <div className="project-tech">
                <span>WebGL2</span>
                <span>WebGPU</span>
                <span>GLSL/WGSL</span>
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
              <p>Research-based hierarchical scene management with transform inheritance, parent-child relationships, and efficient traversal optimized for WebGL and WebGPU real-time rendering.</p>
              <div className="project-tech">
                <span>WebGL</span>
                <span>WebGPU</span>
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
