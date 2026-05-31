"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m a full stack developer based in South Florida, specializing in building 
        websites and web apps for businesses. With a CS degree from the{" "}
        <span className="underline">University of Florida</span> and hands-on experience 
        delivering real projects for real clients, I bring both technical depth and practical results.
      </p>
      <p className="mb-3">
        I work with React, Next.js, TypeScript, Node.js, PostgreSQL, and AWS — and I&apos;m 
        comfortable going low-level when needed. I&apos;ve built everything from business websites 
        with integrated payment solutions to an HTTP server in C from scratch. If you need 
        something built right, <span className="font-medium">let&apos;s talk.</span>
      </p>
    </motion.section>
  );
}