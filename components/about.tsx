"use client";
import * as React from "react";
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView('About');

  return (
    <motion.section ref={ref} className='mt-10 mb-28 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-20'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 4, type: "spring", stiffness: 125}}
    id="about"
    >
      <h2 className='text-4xl font-semibold capitalize mb-8 text-white'>About Me</h2>

      <p className='mb-3'>
        Currently over 95% through my Computer Science major, I am ready to make strides in the tech industry. My skills are backed by the internships, projects, research, hackathons, and certifications I have done over the past few years. I am confident that with my experience in the professional world and what I have learned in my classes and my personal developments, I am a capable candidate for companies seeking a new grad Software Engineer.
      </p>
    </motion.section>
  )


  
}
