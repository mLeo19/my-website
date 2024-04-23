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
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: velezExpress,
      href: 'https://www.velezexpressllc.com/'
    },
    {
      title: "JAV Cooling",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: javCooling,
      href: 'https://www.javcooling.com/',
    },
    {
      title: "Portfolio Website",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: portfolio,
      href: 'https://www.leonardomaicelo.com/',
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
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
  ] as const;