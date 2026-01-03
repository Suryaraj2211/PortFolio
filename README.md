# Surya P M - Portfolio Website

A personal portfolio website showcasing my work as a Full Stack Developer and WebGL/WebGPU Specialist. Built with React, Vite, and TailwindCSS.

**Live Demo:** [View Portfolio](https://suryaraj2211.github.io/PortFolio/) | **Resume:** [Download PDF](./public/SURYA_P_M_RESUME.pdf)

---

## What's This About?

This is my portfolio website where I present my skills, experience, and projects. I wanted something clean, fast, and fully responsive that would work well on any device.

The site includes my professional background, technical skills, work timeline, featured projects, and a contact form that actually works (thanks to EmailJS integration).

### Why These Technologies?

- **React** - Makes it easy to build and maintain components
- **Vite** - Much faster than Create React App for development
- **TailwindCSS** - Quick styling without writing tons of CSS
- **EmailJS** - Handles contact form emails without needing a backend server

---

## Tech Stack

### Core
- React 19.1.0
- Vite 6.3.5
- JavaScript (ES6+)
- HTML5 & CSS3

### Styling
- TailwindCSS 4.1.7
- PostCSS 8.5.3
- Autoprefixer 10.4.21
- Custom CSS modules

### Email Integration
- @emailjs/browser 4.4.1
- emailjs-com 3.2.0

### Development
- ESLint 9.25.0
- @vitejs/plugin-react 4.4.1
- Git

---

## Project Structure

```
my-portfolio/
│
├── public/
│   ├── SURYA_P_M_RESUME.pdf
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── SuryaPM.jpg
│   │
│   ├── Component/
│   │   ├── App.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ContactHeader.jsx
│   │   ├── ContactForm.jsx
│   │   ├── ContactInfo.jsx
│   │   ├── ContactMethod.jsx
│   │   └── SocialSection.jsx
│   │
│   ├── Style/
│   │   ├── Root.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Experience.css
│   │   ├── Project.css
│   │   ├── ContactSection.css
│   │   ├── ContactHeader.css
│   │   ├── ContactForm.css
│   │   ├── ContactInfo.css
│   │   ├── ContactMethod.css
│   │   └── SocialSection.css
│   │
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Features

### Navigation
Fixed navbar with smooth scrolling to different sections. Nothing fancy, just clean and functional.

### Hero Section
Landing area with my photo, introduction, and two buttons - one to jump to the contact form and another to download my resume. There are also three floating cards that highlight key points about my work.

### About Me
Quick summary of who I am professionally, along with some stats like years of experience and number of projects completed.

### Skills
All my technical skills organized by category - programming languages, frontend, backend, databases, WebGL/3D graphics, development tools, and deployment platforms.

### Experience Timeline
My work history showing current and previous positions with descriptions of what I did.

### Projects
Featured projects I've worked on, each with a description and the technologies used.

### Contact Form
The interesting part - a working contact form that sends emails without needing a backend server. When someone submits the form:
- I get an email with their message
- They get an automatic reply confirming I received it
- The form validates email addresses properly
- Shows loading state while sending
- Gives feedback on success or failure

### Contact Information
My email, phone, location, and social media links displayed clearly.

---

## Getting Started

### What You Need
- Node.js (version 16 or higher)
- npm or yarn
- Git
- A code editor (I use VS Code)

### Installation

Clone the repository:
```bash
git clone https://github.com/Suryaraj2211/Suryaraj2211-MyPortfolio.git
cd my-portfolio
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open your browser and go to `http://localhost:5173`

### Available Commands

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality

---

## How I Built This

Started by setting up Vite with React, then installed TailwindCSS and EmailJS. Built each section as a separate component with its own styling file to keep things organized.

The modular approach made it easier to work on individual sections without breaking others. Each component has its own CSS file that handles specific styling needs, while TailwindCSS handles the utility classes for quick layouts and responsive design.

For the contact form, I integrated EmailJS which was surprisingly straightforward. Set up two email templates - one that notifies me when someone contacts me, and another that automatically replies to them.

---

## Styling Approach

Each component has its own CSS file, which keeps styles organized and prevents conflicts. I use TailwindCSS for utility classes and custom CSS for component-specific needs.

For responsive design, I use flexbox and CSS grid with media queries for different screen sizes. Everything works from mobile to desktop.

CSS variables defined in Root.css maintain consistency across the site for colors and common values.

---

## Contact Form Setup

If you want to use this portfolio yourself and need the contact form to work, here's what you need to do:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Connect your email service (Gmail, Outlook, etc.)
3. Create two email templates:
   - One for notifications you'll receive
   - One for auto-replies sent to visitors
4. Update the service ID and template IDs in ContactSection.jsx

The form handles validation, loading states, and error messages automatically.

---

## Deployment

### Using Vercel

Build the project:
```bash
npm run build
```

Install Vercel CLI:
```bash
npm install -g vercel
```

Deploy:
```bash
vercel
```

### Using Netlify

Build first, then either drag and drop the `dist` folder to Netlify, or use their CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## Performance

Vite handles most of the optimization work - code splitting, minification, and fast builds. TailwindCSS automatically removes unused styles in production. Images are compressed and the final bundle is pretty small.

Development is fast with hot module replacement, so changes show up immediately without full page reloads.

---

## Customizing This for Yourself

Want to use this as a base for your own portfolio? Here's what to change:

1. Replace the profile photo in `src/assets/`
2. Update your resume PDF in `public/`
3. Edit Hero.jsx with your name and title
4. Modify About.jsx with your description
5. Update Skills.jsx with your technologies
6. Change Experience.jsx to show your work history
7. Edit Projects.jsx with your projects
8. Set up your own EmailJS account and update credentials
9. Update contact details in ContactInfo.jsx
10. Adjust colors and styling in the CSS files

---

## What I Learned

This project helped me get better at:
- React hooks and component structure
- Form handling and validation
- Email integration without a backend
- Vite configuration and optimization
- Responsive design techniques
- Git workflow and version control

---

## Future Plans

Things I'm considering adding:
- Dark mode toggle
- Blog section for technical writing
- More detailed project case studies
- Testimonials from colleagues or clients
- Some WebGPU-powered interactive elements
- Better analytics integration

---

## About Me

I'm Surya P M, a Full Stack Web Developer and WebGL/WebGPU Specialist currently working at Hexr Factory. I've been developing professionally for over 2 years, focusing on web development, 3D graphics, and performance optimization.

**Contact:**
- Email: suryapm2211@gmail.com
- GitHub: [@Suryaraj2211](https://github.com/Suryaraj2211)

---

## License

Open source under MIT License. Feel free to use this as inspiration or a starting point for your own portfolio.

---

*Built by Surya P M | Last updated December 2025*
