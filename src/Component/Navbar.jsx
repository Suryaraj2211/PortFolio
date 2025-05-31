// Your existing component works perfectly as is
export default function Navbar({ scrollToSection }) {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">SPM</span>
        </div>
        <ul className="nav-links">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a href={`#${section}`} onClick={() => scrollToSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}