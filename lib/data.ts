import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import velezExpress from '@/public/velez-express.png'
import javCooling from '@/public/jav-cooling.png'
import portfolio from '@/public/portfolio.png'
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
        "I worked as a full-stack developer on this startup company. This site used the Stripe API as an online payments gateway.",
      tags: ["Next.js", "Typescript", "Tailwind", "Stripe"],
      imageUrl: velezExpress,
      href: 'https://www.velezexpressllc.com/'
    },
    {
      title: "JAV Cooling",
      description:
        "I built a fully responsive website for an HVAC company. This site used TailwindCSS for styling and the Resend API for sending emails.",
      tags: ["React", "Next.js", "Tailwind", "Resend API"],
      imageUrl: javCooling,
      href: 'https://www.javcooling.com/',
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek, animated, and fully responsive portfolio website to showcase my education, projects, and experience.",
      tags: ["Next.js", "Tailwind", "Resend API", "Framer Motion"],
      imageUrl: portfolio,
      href: 'https://www.lmaicelo.com/',
    },
  ] as const;

  export const experiencesData = [
    {
      title: "Research assistant",
      location: "Gainesville, FL",
      description:
        "I worked in programming a vibration-producing algorithm for the improvement of hearing aids, which leveraged a neural network trained to denoise noisy environments.",
      icon: React.createElement(CgWorkAlt),
      date: "2020 - 2021",
    },
    {
      title: "Completed degree",
      location: "Gainesville, FL",
      description:
        "I graduated with a Bachelor of Science in Computer Science from the University of Florida. I then began to do freelance web development.",
      icon: React.createElement(LuGraduationCap),
      date: "2023",
    },
    {
      title: "Full-Stack Developer",
      location: "West Palm Beach, FL",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
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
    "Java",
    "C++",
    "C",
    "C#",
    "Git",
    "Tailwind",
    "AWS",
    "MongoDB",
    "Matlab",
    "SQL",
    "Express",
    "Python",
    "Headless UI",
    "Framer Motion",
  ] as const;