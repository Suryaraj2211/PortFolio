import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Component/App.jsx'
// import Contact from './Component/Contact.jsx';
import Navbar from './Component/Navbar.jsx';
import Hero from './Component/Hero.jsx';
import About from './Component/About.jsx';
import Skills from './Component/Skills.jsx';
import Experience from './Component/Experience.jsx';
import Projects from './Component/Projects.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
