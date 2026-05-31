import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import velezExpress from '@/public/velez-express.png'
import javCooling from '@/public/jav-cooling.png'
import httpServer from '@/public/http-server.png'
import portfolio from '@/public/portfolio.png'
import soft17 from '@/public/soft17.png'
import musicGenerator from '@/public/music-generator.png'
export const links = [
    {
      name: "Home",
      hash: "/#home",
    },
    {
      name: "About",
      hash: "/#about",
    },
    {
      name: "Projects",
      hash: "/#projects",
    },
    {
      name: "Skills",
      hash: "/#skills",
    },
    {
        name: "Experience",
        hash: "/#experience",
      },
    {
      name: "Contact",
      hash: "/#contact",
    },
  ] as const;

  export const projectsData = [
    {
      title: "Velez Express",
      description:
        "Full-stack development for a startup company, integrating the Stripe API for secure online payments and the Resend API for email automation.",
      tags: ["Next.js", "Typescript", "Tailwind", "Stripe"],
      imageUrl: velezExpress,
      href: 'https://www.velezexpressllc.com/'
    },
    {
      title: "JAV Cooling",
      description:
        "Business website for an HVAC company, built with a responsive design and Resend API integration for customer contact forms.",
      tags: ["Next.js", "React", "Tailwind", "Resend API"],
      imageUrl: javCooling,
      href: "https://jav-hvac.vercel.app",
    },
    {
      title: "AI Music Generator",
      description:
        "An AI-powered music generation platform where users generate original audio from text prompts using ACE-Step.",
      tags: ["Next.js", "TypeScript", "Python", "Modal", "Prisma", "Neon Postgres"],
      imageUrl: musicGenerator,
      href: "https://music-generator-frontend-beta.vercel.app/",
    },
    {
      title: "Soft17",
      description:
      "Blackjack trainer with a full game engine, Hi-Lo card counting, train mode with basic strategy hints, and persistent session management.",
      tags: ["Next.js", "TypeScript", "Supabase", "Zustand", "Framer Motion", "Tailwind"],
      imageUrl: soft17,
      href: "https://blackjack-counting-omega.vercel.app/",
    },
    {
      title: "HTTP Server in C",
      description:
        "A functional HTTP server built from scratch in C with no external libraries — handles TCP connections, parses raw HTTP requests, and serves responses.",
      tags: ["C", "TCP", "HTTP", "Systems Programming"],
      imageUrl: httpServer,
      href: "https://github.com/mLeo19/http-server",
    },
  ] as const;

  export const experiencesData = [
    {
      title: "Research assistant",
      location: "Gainesville, FL",
      description:
        "Trained a neural network for audio extraction in noisy environments and developed an audio-to-haptic feedback algorithm using MATLAB and Arduino.",
      icon: React.createElement(CgWorkAlt),
      date: "2020 - 2021",
    },
    {
      title: "Completed degree",
      location: "Gainesville, FL",
      description:
        "Graduated with a Bachelor of Science in Computer Science from the University of Florida.",
      icon: React.createElement(LuGraduationCap),
      date: "2023",
    },
    {
      title: "Full-Stack Developer",
      location: "West Palm Beach, FL",
      description:
        "Freelance full-stack developer building and deploying web applications for real clients — including a logistics startup and an HVAC company. Also building personal projects including an AI music generation platform and a blackjack trainer.",
      icon: React.createElement(FaReact),
      date: "2023 - present",
    },
  ] as const;
  

  export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Rest APIs",
    "Java",
    "C++",
    "C",
    "C#",
    "Git",
    "Tailwind",
    "AWS",
    "Stripe API",
    "Supabase",
    "PostgreSQL",
    "Prisma",
    "Zustand",
    "Framer Motion",
    "Python",
    "Express",
  ] as const;