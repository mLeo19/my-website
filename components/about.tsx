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
        Welcome! I&apos;m a Full Stack Developer driven by a passion for crafting{" "}
        <span className="font-medium">seamless digital experiences</span>. With a Bachelor of Science 
        in <span className="underline">computer science</span> from the <span className="underline">University of Florida</span>, I&apos;ve honed 
        my skills in several programming languages and technologies such as Java, C++, Javascript, NextJS, MongoDB, and AWS. Known for my 
        adaptability and teamwork skills, I excel in rapidly mastering new concepts and collaborating effectively towards projects of any size.
      </p>
      <p className="mb-3">
        With a keen eye for detail and a knack for problem-solving, I embrace challenges head on and consistently
        deliver <span className="font-medium">exceptional results</span>. As you explore my portfolio, 
        I invite you to witness firsthand my dedication to excellence and my passion for creating{" "}
        <span className="underline">impactful digital solutions</span>. Let&apos;s connect and explore how we can collaborate to bring your projects to life!
      </p>
    </motion.section>
  );
}