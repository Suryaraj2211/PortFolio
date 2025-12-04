Surya P M – Professional Portfolio Website

This is my personal portfolio website built using React, Vite, and Tailwind CSS. The main goal of this project is to showcase my skills, experience, and projects in a clean and professional way. The site is fully responsive and includes a working contact form with email automation.

Live Demo: Add your live link here
Resume: Available for download on the website

About This Project

This portfolio is designed to give a clear picture of who I am as a developer and what I work on. It includes my profile, skills, experience, and selected projects. Anyone visiting the site can also contact me directly through the contact form.

Main highlights:

Personal profile and professional summary

Technical skills categorized by domain

Work experience timeline

Project showcase

Contact form with automatic email response

Fully responsive design for mobile, tablet, and desktop

Technologies Used

Frontend

React 19

Vite

JavaScript (ES6+)

HTML5

CSS3

Tailwind CSS

Email Integration

EmailJS

Development Tools

Git

GitHub

VS Code

ESLint

Folder Structure
my-portfolio/
│
├── public/
│   ├── surya p m.pdf
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
├── package.json
├── vite.config.js
└── README.md

Features

Smooth navigation with scroll

Hero section with profile and intro

About section with experience summary

Skills grouped by categories

Work experience timeline

Project cards with tech stack

Functional contact form using EmailJS

Automatic email reply to visitors

Fully responsive layout

Getting Started
Prerequisites

Make sure you have:

Node.js (v16 or above)

npm or yarn

Git

VS Code or any code editor

Installation

Clone the repository

git clone https://github.com/Suryaraj2211/Suryaraj2211-MyPortfolio.git
cd my-portfolio


Install dependencies

npm install


Start development server

npm run dev


Open in browser

http://localhost:5173

Development Process

Created the project using Vite + React

Configured Tailwind CSS for styling

Built each section as a separate component

Added custom CSS for animations and layout

Integrated EmailJS for the contact form

Optimized build using Vite

Deployed to hosting platform

Contact Form Setup

The contact form uses EmailJS to send messages without a backend.

Workflow:

User fills the form

Form validates input

One email is sent to me

One auto-reply is sent to the user

Success or error message is shown

To use it for your own project:

Create an account on EmailJS

Add your email service

Create notification and auto-reply templates

Update your Service ID, Template ID, and Public Key in ContactSection.jsx

Deployment

You can deploy this project using:

Vercel

Netlify

Steps:

npm run build


Upload the dist folder or deploy using CLI tools.

Project Statistics

Components: 13

CSS files: 13

Lines of code: ~2500+

Build size: ~150 KB

Load time: Under 2 seconds

What I Learned

Modern React with hooks

Component-based architecture

Tailwind CSS workflow

Email integration without backend

Responsive web design

Build optimization using Vite

Git and deployment process

Customization

To use this portfolio for yourself:

Update name and content in Hero.jsx

Replace profile image in src/assets

Replace resume PDF in public

Edit About, Skills, Experience, and Projects components

Update EmailJS credentials

Customize styles in the Style folder

About Me

Surya P M
Full Stack Web Developer and WebGL/WebGPU Specialist
Currently working at Hexr Factory
2+ years of professional experience
Strong interest in web development, 3D graphics, and performance optimization

GitHub: https://github.com/Suryaraj2211

Portfolio: Add your live link

Future Enhancements

Dark and light theme

Blog section

Project case studies

Testimonials

Analytics integration

Multi-language support

3D interactive sections using WebGPU
