import React from 'react';
import { motion } from 'framer-motion';

// SVG Logos for all technologies requested
const SVGS = {
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="tech-svg" fill="none">
      <ellipse rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="#61DAFB" strokeWidth="1"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="#61DAFB" strokeWidth="1"/>
      <circle r="2" fill="#61DAFB"/>
    </svg>
  ),
  next: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.6 17.6l-5.8-7.7v7.7H10V8.2h1.6l5.4 7.2v-7.2h1.8v9.4h-1.2z" fill="#000"/>
    </svg>
  ),
  js: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="#F7DF1E"/>
      <path d="M20.25 15.3c-.6-.9-1.4-1.4-2.7-1.4-1.1 0-1.8.6-1.8 1.4 0 .9.6 1.2 1.7 1.7l1.1.5c1.9.8 2.8 1.8 2.8 3.6 0 2.2-1.7 3.9-4.4 3.9-2.5 0-3.9-1.2-4.6-2.9l2.2-1.3c.4.8 1 1.3 2.3 1.3 1.1 0 1.9-.5 1.9-1.4 0-1-.6-1.3-1.8-1.8l-1.1-.5c-1.8-.8-2.7-1.8-2.7-3.5 0-2 1.6-3.6 4.1-3.6 2.1 0 3.5 1 4.2 2.5l-2 1.1zm-8.8 6.2c0 1-.7 1.5-1.6 1.5-.9 0-1.5-.5-1.5-1.5V11.2h2.5v10.3z" fill="#000"/>
    </svg>
  ),
  ts: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="#3178C6"/>
      <path d="M20.25 15.3c-.6-.9-1.4-1.4-2.7-1.4-1.1 0-1.8.6-1.8 1.4 0 .9.6 1.2 1.7 1.7l1.1.5c1.9.8 2.8 1.8 2.8 3.6 0 2.2-1.7 3.9-4.4 3.9-2.5 0-3.9-1.2-4.6-2.9l2.2-1.3c.4.8 1 1.3 2.3 1.3 1.1 0 1.9-.5 1.9-1.4 0-1-.6-1.3-1.8-1.8l-1.1-.5c-1.8-.8-2.7-1.8-2.7-3.5 0-2 1.6-3.6 4.1-3.6 2.1 0 3.5 1 4.2 2.5l-2 1.1zM6.9 11.2h7.6v2.3h-2.5v10.1H9.5V13.5H6.9v-2.3z" fill="#FFF"/>
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2z" fill="#E34F26"/>
      <path d="M12 2.2v19.5l6.7-1.8 1.6-17.7z" fill="#F06529"/>
      <path d="M12 10.6H8.3v-3H12V4.7H5v8.9h7zm0 5.8l-3.3-.9-.2-2.3H5.2l.4 4.8 6.4 1.8z" fill="#EBEBEB"/>
      <path d="M12 10.6h3.6l-.3 3.9-3.3.9V18l6.4-1.8.8-8.6H12zm0-5.9v2.9h3.8l.3-3z" fill="#FFF"/>
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2z" fill="#264DE4"/>
      <path d="M12 2.2v19.5l6.7-1.8 1.6-17.7z" fill="#2965F1"/>
      <path d="M12 10.6H8.3v-3H12V4.7H5v8.9h7zm0 5.8l-3.3-.9-.2-2.3H5.2l.4 4.8 6.4 1.8z" fill="#EBEBEB"/>
      <path d="M12 10.6h3.6l-.3 3.9-3.3.9V18l6.4-1.8.8-8.6H12zm0-5.9v2.9h3.8l.3-3z" fill="#FFF"/>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="none" stroke="currentColor">
      <path d="M12 6.5c-2.4 0-4 1.2-4.8 3.6 1-.8 2.2-1.1 3.6-1 .8.1 1.4.7 2.1 1.4 1.1 1.1 2.4 2.5 5.1 2.5 2.4 0 4-1.2 4.8-3.6-1 .8-2.2 1.1-3.6 1-.8-.1-1.4-.7-2.1-1.4-1.1-1.1-2.4-2.5-5.1-2.5zm-8.4 6c-2.4 0-4 1.2-4.8 3.6 1-.8 2.2-1.1 3.6-1 .8.1 1.4.7 2.1 1.4 1.1 1.1 2.4 2.5 5.1 2.5 2.4 0 4-1.2 4.8-3.6-1 .8-2.2 1.1-3.6 1-.8-.1-1.4-.7-2.1-1.4-1.1-1.1-2.4-2.5-5.1-2.5z" fill="#06B6D4" strokeWidth="0"/>
    </svg>
  ),
  bootstrap: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm2.7 16.2H9.3V7.8h5.1c1.3 0 2.2.9 2.2 2.1 0 .9-.6 1.7-1.4 1.9.9.2 1.6 1 1.6 2 .1 1.3-.8 2.4-2.1 2.4z" fill="#7952B3"/>
    </svg>
  ),
  redux: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm3.8 17.3c-.9 1.1-2.4 1.7-3.8 1.7s-2.9-.6-3.8-1.7c-1-1.3-1-3.2 0-4.5.9-1.1 2.4-1.7 3.8-1.7s2.9.6 3.8 1.7c1 1.3 1 3.2 0 4.5z" fill="#764ABC"/>
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M21.5 3.5l-8.5 17-3.5-7.5-6.5-2z" fill="#646CFF"/>
      <path d="M18.5 2.5l-6.5 13-2.5-5.5-4.5-1.5z" fill="#FFD600"/>
    </svg>
  ),
  java: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M19.4 13c-.3-.4-.8-.7-1.4-1-.7-.4-1.6-.7-2.5-1.1-.9-.4-1.8-.7-2.8-1-1-.3-2.1-.5-3.1-.7-1-.2-2-.3-2.9-.3-.9 0-1.8.1-2.5.3-.8.2-1.3.5-1.7.9-.3.4-.5.8-.5 1.3s.2.9.5 1.2c.3.4.8.7 1.4 1 .7.4 1.6.7 2.5 1.1.9.4 1.8.7 2.8 1 1 .3 2.1.5 3.1.7 1 .2 2 .3 2.9.3.9 0 1.8-.1 2.5-.3.8-.2 1.3-.5 1.7-.9.3-.4.5-.8.5-1.3.1-.6-.1-1-.5-1.3z" fill="#EA2D42"/>
    </svg>
  ),
  springboot: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0L2.5 5.5v11L12 22l9.5-5.5v-11L12 0zm-1.8 15.6V9.4h1.6V14h3v1.6H10.2z" fill="#6DB33F"/>
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0L2.5 5.5v11L12 22l9.5-5.5v-11L12 0zm-1.8 15.6V9.4h1.6V14h3v1.6H10.2z" fill="#339933"/>
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <text x="2" y="17" fontFamily="Outfit, sans-serif" fontSize="16" fontWeight="bold" fill="#111">EX</text>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0c-.8 0-1.5.3-2 .8L4.2 6.6c-.5.5-.8 1.2-.8 2v10.8c0 .8.3 1.5.8 2l5.8 5.8c.5.5 1.2.8 2 .8s1.5-.3 2-.8l5.8-5.8c.5-.5.8-1.2.8-2V8.6c0-.8-.3-1.5-.8-2L14 1c-.5-.7-1.2-1-2-1z" fill="#47A248"/>
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1.8 15.3c-.9 1.1-2.4 1.7-3.8 1.7s-2.9-.6-3.8-1.7c-1-1.3-1-3.2 0-4.5.9-1.1 2.4-1.7 3.8-1.7s2.9.6 3.8 1.7c1 1.3 1 3.2 0 4.5z" fill="#336791"/>
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-2 15.6c-.6 0-1-.4-1-1v-4.2c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4.2c0 .6-.4 1-1 1h-4z" fill="#00758F"/>
    </svg>
  ),
  prisma: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0L2 20h20L12 0zm0 4.7l6.8 13.6H5.2L12 4.7z" fill="#2D3748"/>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M13.983 8.871h-2.111c-.086 0-.153.07-.153.156v1.821c0 .086.07.156.153.156h2.111c.086 0 .153-.07.153-.156V9.027c0-.086-.07-.156-.153-.156zm-2.803 0h-2.111c-.086 0-.153.07-.153.156v1.821c0 .086.07.156.153.156h2.111c.086 0 .153-.07.153-.156V9.027c0-.086-.07-.156-.153-.156z" fill="#2496ED"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M23.384 11.231L12.77.616a1.085 1.085 0 00-1.537 0L9.198 2.651l3.197 3.197a2.697 2.697 0 013.784 3.783 2.704 2.704 0 01-.762 1.716l3.208 3.208c.552-.165 1.157-.024 1.597.416a1.73 1.73 0 010 2.446 1.724 1.724 0 01-2.445 0c-.452-.452-.591-1.077-.42-1.642L14.18 12.8c-.468.324-1.036.435-1.597.31L10.37 15.32c.162.555.021 1.18-.423 1.624a1.73 1.73 0 01-2.446 0 1.724 1.724 0 010-2.445c.444-.444 1.069-.585 1.624-.423l2.209-2.21a2.694 2.694 0 010-3.783L8.136 5.093 1.156 12.073a1.086 1.086 0 000 1.537l10.615 10.615c.424.424 1.113.424 1.537 0l10.076-10.076a1.086 1.086 0 000-1.537z" fill="#F05032"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" fill="#24292e"/>
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M24 22.525H0L12 1.475l12 21.05z" fill="#000"/>
    </svg>
  ),
  render: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <rect width="24" height="24" rx="5" fill="#46E3B7"/>
      <text x="4" y="17" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="bold" fill="#fff">R</text>
    </svg>
  ),
  firebase: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M3.89 19.86l1.9-12.02 9.07 12.02H3.89z" fill="#FFCA28"/>
      <path d="M17.07 19.86L12 10.05l-1.92-3.61c-.24-.46-.8-.46-1.04 0l-1.37 2.58L17.07 19.86z" fill="#F57C00"/>
      <path d="M20.11 19.86l-2.04-12.92c-.1-.66-.82-1.01-1.31-.56l-4.76 4.79 8.11 8.69z" fill="#FF9100"/>
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0L2 13h9v11l11-13h-10V0z" fill="#3ECF8E"/>
    </svg>
  ),
  socketio: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1 16.5l-4-5h3V7.5l4 5h-3v4z" fill="#010101"/>
    </svg>
  ),
  cloudinary: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1 14.5c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8.8-1.8 1.8-1.8 1.8.8 1.8 1.8z" fill="#3448C5"/>
    </svg>
  ),
  razorpay: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M22.5 0H1.5C.67 0 0 .67 0 1.5v21C0 23.33.67 24 1.5 24h21c.83 0 1.5-.67 1.5-1.5v-21C24 .67 23.33 0 22.5 0z" fill="#0B48A3"/>
      <path d="M12 7.5L7.5 16.5h9L12 7.5z" fill="#FFF"/>
    </svg>
  ),
  openai: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M21.3 9.5c0-1-.3-1.9-.8-2.6.4-.8.5-1.8.3-2.7-.3-.9-.9-1.6-1.7-2-.7-.4-1.5-.5-2.3-.2-.5-.8-1.2-1.4-2-1.7C14 .1 13 .1 12 .3c-.8-.2-1.7-.2-2.5.1-.8.3-1.5.9-2 1.7-.8-.3-1.6-.2-2.3.2-.8.4-1.4 1.1-1.7 2-.2.9-.1 1.9.3 2.7-.5.7-.8 1.6-.8 2.6 0 1 .3 1.9.8 2.6-.4.8-.5 1.8-.3 2.7.3.9.9 1.6 1.7 2 .7.4 1.5.5 2.3.2.5.8 1.2 1.4 2 1.7.8.2 1.8.2 2.7-.1.8.2 1.7.2 2.5-.1.8-.3 1.5-.9 2-1.7.8.3 1.6.2 2.3-.2.8-.4 1.4-1.1 1.7-2 .2-.9.1-1.9-.3-2.7.5-.7.8-1.6.8-2.6zm-9.3 9.4c-.6.3-1.2.2-1.8-.1L7 16.8v-4.1l3.5 2 3.5-2v4.1l-2 1.1zm-1-8.1L7 8.2l3.5-2v4.1l-3.5 2V8.2l2-1.1zm2 3.1l-3.5-2v-4l3.5 2v4zm1-3.1l3.5 2v4.1l-3.5-2V8.2l3.5-2v4.1l-3.5 2z" fill="#10A37F"/>
    </svg>
  ),
  gemini: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm4.2 14.8c-.8.8-1.8 1.2-2.8 1.2s-2-.4-2.8-1.2c-.8-.8-1.2-1.8-1.2-2.8s.4-2 1.2-2.8c.8-.8 1.8-1.2 2.8-1.2s2 .4 2.8 1.2c.8.8 1.2 1.8 1.2 2.8s-.4 2-1.2 2.8z" fill="#D97706"/>
    </svg>
  ),
  postman: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm3 17l-3-4-3 4V7h6v10z" fill="#FF6C37"/>
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M23.15 2.58L12 11.45V1.5L23.15 2.58zM12 12.55l11.15 8.87L12 22.5V12.55zm-1 0L1 20.45V3.55l10 9z" fill="#007ACC"/>
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1 14.5c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8zm-1-6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" fill="#F24E1E"/>
    </svg>
  ),
  canva: (
    <svg viewBox="0 0 24 24" className="tech-svg" fill="currentColor">
      <rect width="24" height="24" rx="5" fill="#00C4CC"/>
      <text x="5" y="17" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="bold" fill="#fff">C</text>
    </svg>
  ),
};

const row1 = [
  { name: 'React', icon: SVGS.react, bg: '#F0FDFE' },
  { name: 'Next.js', icon: SVGS.next, bg: '#F9FAFB' },
  { name: 'JavaScript', icon: SVGS.js, bg: '#FEFCE8' },
  { name: 'TypeScript', icon: SVGS.ts, bg: '#EFF6FF' },
  { name: 'HTML5', icon: SVGS.html, bg: '#FFF3EE' },
  { name: 'CSS3', icon: SVGS.css, bg: '#EEF2FF' },
  { name: 'Tailwind CSS', icon: SVGS.tailwind, bg: '#ECFEFF' },
  { name: 'Bootstrap', icon: SVGS.bootstrap, bg: '#F5F3FF' },
  { name: 'Redux', icon: SVGS.redux, bg: '#F5F3FF' },
  { name: 'Vite', icon: SVGS.vite, bg: '#F5F3FF' },
];

const row2 = [
  { name: 'Java', icon: SVGS.java, bg: '#FFF7ED' },
  { name: 'Spring Boot', icon: SVGS.springboot, bg: '#F0FDF4' },
  { name: 'Node.js', icon: SVGS.node, bg: '#ECFDF5' },
  { name: 'Express.js', icon: SVGS.express, bg: '#F9FAFB' },
  { name: 'MongoDB', icon: SVGS.mongodb, bg: '#F0FDF4' },
  { name: 'PostgreSQL', icon: SVGS.postgresql, bg: '#EFF6FF' },
  { name: 'MySQL', icon: SVGS.mysql, bg: '#EFF6FF' },
  { name: 'Prisma', icon: SVGS.prisma, bg: '#F7FAFC' },
  { name: 'Docker', icon: SVGS.docker, bg: '#EFF6FF' },
  { name: 'Git', icon: SVGS.git, bg: '#FFF3EE' },
  { name: 'GitHub', icon: SVGS.github, bg: '#F9FAFB' },
  { name: 'Vercel', icon: SVGS.vercel, bg: '#F9FAFB' },
  { name: 'Render', icon: SVGS.render, bg: '#F0FDFA' },
  { name: 'Firebase', icon: SVGS.firebase, bg: '#FFFBEB' },
  { name: 'Supabase', icon: SVGS.supabase, bg: '#F0FDF4' },
  { name: 'Socket.IO', icon: SVGS.socketio, bg: '#F9FAFB' },
  { name: 'Cloudinary', icon: SVGS.cloudinary, bg: '#EEF2FF' },
  { name: 'Razorpay', icon: SVGS.razorpay, bg: '#EFF6FF' },
  { name: 'OpenAI API', icon: SVGS.openai, bg: '#F0FDF4' },
  { name: 'Google Gemini', icon: SVGS.gemini, bg: '#EFF6FF' },
  { name: 'Postman', icon: SVGS.postman, bg: '#FFF3EE' },
  { name: 'VS Code', icon: SVGS.vscode, bg: '#EFF6FF' },
  { name: 'Figma', icon: SVGS.figma, bg: '#FFF3EE' },
  { name: 'Canva', icon: SVGS.canva, bg: '#F0FDFE' },
];

const track1 = [...row1, ...row1, ...row1];
const track2 = [...row2, ...row2, ...row2];

const TechPill = ({ tech }) => (
  <motion.div
    className="tech-marquee-pill"
    whileHover={{ y: -3, scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    <div className="tech-marquee-pill-icon" style={{ background: tech.bg }} aria-hidden="true">
      {tech.icon}
    </div>
    <span className="tech-marquee-pill-name">{tech.name}</span>
  </motion.div>
);

const Technologies = () => {
  return (
    <section id="technologies" className="technologies-section" aria-labelledby="technologies-title">

      <div className="lx-container">
        <motion.div
          className="tech-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="label-tag" style={{ marginBottom: 18, display: 'inline-flex' }}>
            <span className="dot" aria-hidden="true" />
            Capabilities
          </span>
          <h2 id="technologies-title" className="section-title">
            Technologies We <span className="text-gradient">Work With</span>
          </h2>
          <p className="section-subtitle" style={{ marginTop: 12 }}>
            A modern, full-stack technology arsenal — infinite marquee of tools we use to build high-performance products.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling marquee rows */}
      <div className="tech-marquee-container">
        {/* Row 1 (Left -> Right) */}
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track reverse">
            {track1.map((tech, i) => (
              <TechPill key={`r1-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2 (Right -> Left) */}
        <div className="tech-marquee-wrapper tech-marquee-gap">
          <div className="tech-marquee-track">
            {track2.map((tech, i) => (
              <TechPill key={`r2-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      <div className="lx-container">
        <p className="tech-note">
          …and always learning. We choose the right technology for the right project.
        </p>
      </div>

    </section>
  );
};

export default Technologies;
