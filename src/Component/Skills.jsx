// components/Skills.jsx
import React from 'react';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical expertise in graphics and engine development</p>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">

          <div className="skill-category">
            <h3>Graphics & Rendering</h3>
            <div className="skill-tags">
              <span className="skill-tag">WebGPU (Primary)</span>
              <span className="skill-tag">WebGL2</span>
              <span className="skill-tag">GPU Pipelines</span>
              <span className="skill-tag">Shaders</span>
              <span className="skill-tag">Render Passes</span>
              <span className="skill-tag">Draw Submission</span>
              <span className="skill-tag">Depth Testing</span>
              <span className="skill-tag">Framebuffers</span>
              <span className="skill-tag">Post-Processing</span>
              <span className="skill-tag">Phong Lighting</span>
              <span className="skill-tag">Blinn-Phong</span>
              <span className="skill-tag">Gamma Correction</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Engine & Systems</h3>
            <div className="skill-tags">
              <span className="skill-tag">Scene Graph Systems</span>
              <span className="skill-tag">Transform Hierarchies</span>
              <span className="skill-tag">Render Loop</span>
              <span className="skill-tag">Frame Lifecycle</span>
              <span className="skill-tag">Resource Management</span>
              <span className="skill-tag">Asset Management</span>
              <span className="skill-tag">FPS Debugging</span>
              <span className="skill-tag">Draw Call Analysis</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>3D Assets & Pipeline</h3>
            <div className="skill-tags">
              <span className="skill-tag">glTF 2.0</span>
              <span className="skill-tag">Buffers & Accessors</span>
              <span className="skill-tag">Node Hierarchies</span>
              <span className="skill-tag">Blender UV Workflows</span>
              <span className="skill-tag">Texture Baking</span>
              <span className="skill-tag">PBR Textures</span>
              <span className="skill-tag">Albedo Maps</span>
              <span className="skill-tag">Normal Maps</span>
              <span className="skill-tag">AO Maps</span>
              <span className="skill-tag">Roughness Maps</span>
              <span className="skill-tag">Blender CLI Automation</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Programming</h3>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">TypedArrays</span>
              <span className="skill-tag">Memory-Oriented Data</span>
              <span className="skill-tag">Modular Engine Code</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Graphics Knowledge</h3>
            <div className="skill-tags">
              <span className="skill-tag">MVP Pipeline</span>
              <span className="skill-tag">Normal Matrix</span>
              <span className="skill-tag">Inverse Transpose</span>
              <span className="skill-tag">CPU/GPU Separation</span>
              <span className="skill-tag">Draw Call Optimization</span>
              <span className="skill-tag">GPU Memory & Buffers</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Blender</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Chrome DevTools</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
