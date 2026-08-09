'use client'

import React from 'react'
import { motion } from "framer-motion"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import Image from 'next/image'
import Link from 'next/link'
import { Plus_Jakarta_Sans } from "next/font/google"
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const headlineFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
})

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
    ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-28 sm:pt-36"
    >
      {/* Intro image */}
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpeg"
              alt="Photo of Leo at SHPE convention"
              width="192"
              height="192"
              quality="75"
              priority={true}
              className="h-36 w-36 rounded-lg object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Eyebrow */}
      <motion.p
        className="mt-4 sm:mt-6 px-4 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-white/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Freelance Full Stack Developer
      </motion.p>

      {/* Intro headline */}
      <motion.h1
        className={`${headlineFont.className} mb-2 sm:mb-4 mt-1 sm:mt-3 px-4 text-3xl !leading-[1.25] sm:text-5xl`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I build fast, custom websites{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
          for small businesses
        </span>
        .
      </motion.h1>

      {/* Intro subtext */}
      <motion.p
        className="mb-5 sm:mb-10 px-4 text-lg text-gray-600 dark:text-white/70 max-w-[38rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        Your site should look like it belongs to your business, not a template, with design and details that feel professional and code underneath that&apos;s fast, secure, and built to hold up. Based in South FL, CS grad from the{" "}
        <span className="italic">University of Florida</span>.
      </motion.p>

      {/* Intro buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-base font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 rounded-lg text-white px-7 py-3 flex items-center gap-2 border-2 border-gray-200 dark:border-white/10 outline-none focus:scale-110 hover:scale-110 hover:bg-emerald-500 hover:border-emerald-600 dark:hover:border-emerald-600 active:scale-105 transition-all duration-500 ease-out"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-transform duration-500" />
        </Link>
        <a
          className="group bg-white rounded-lg px-7 py-3 flex items-center gap-2 border-2 border-gray-200 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all duration-500 ease-out cursor-pointer hover:border-emerald-400 dark:hover:border-emerald-400 hover:text-emerald-600 dark:bg-white/10 dark:border-white/10 dark:hover:text-emerald-400"
          href="/Resume.pdf"
          download
        >
          Download resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-transform duration-500" />
        </a>
        <a
          className="bg-white rounded-lg p-4 text-gray-700 flex items-center gap-2 border-2 border-gray-200 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-500 ease-out cursor-pointer hover:border-emerald-400 dark:hover:border-emerald-400 hover:text-emerald-600 dark:bg-white/10 dark:border-white/10 dark:text-white/60 dark:hover:text-emerald-400"
          href="https://www.linkedin.com/in/leonardo-maicelo/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white rounded-lg p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] border-2 border-gray-200 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all duration-500 ease-out cursor-pointer hover:border-emerald-400 dark:hover:border-emerald-400 hover:text-emerald-600 dark:bg-white/10 dark:border-white/10 dark:text-white/60 dark:hover:text-emerald-400"
          href="https://github.com/mLeo19"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}