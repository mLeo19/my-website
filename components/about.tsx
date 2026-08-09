"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const stack = ["React", "Next.js", "TypeScript", "Python", "PostgreSQL", "AWS"];

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        About <span className="text-emerald-500 dark:text-emerald-400">me</span>
      </SectionHeading>
      <p className="mb-3">
        I&apos;m a freelance full stack developer who works with small businesses in South Florida
        to build websites made specifically for them. I hold a Computer Science degree from the{" "}
        <span className="underline decoration-emerald-500 decoration-2 underline-offset-2">
          University of Florida
        </span>{" "}
        and have spent the time since working directly with clients on real projects.
      </p>
      <p className="mb-6">
        My core stack is React, Next.js, Python, and TypeScript, though I&apos;m also comfortable
        working closer to the metal when a project calls for it, including building an HTTP
        server in C from scratch. If your business needs a website built well and built to last,
        feel free to{" "}
        <Link
          href="#contact"
          className="font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 underline decoration-emerald-500/40 decoration-2 underline-offset-2 transition-colors"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          reach out!
        </Link>
        .
      </p>

      {/* Tech stack pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm font-medium border-2 border-emerald-500/30 text-emerald-700 bg-emerald-50 dark:border-emerald-400/30 dark:text-emerald-300 dark:bg-emerald-400/10 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.section>
  );
}