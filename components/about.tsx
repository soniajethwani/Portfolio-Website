"use client";
import React from 'react';
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
        Currently over 90% through my Computer Science major and Java OCA Certified (Java SE 8 Oracle Certified Associate), I am ready to make strides in the tech industry. My skills are backed by the countless projects, research, and hackathons I have done over the past couple of years. I am confident that with my experience in the professional world and the things I have learned in both my classes and my personal developments, I am a capable candidate for any company seeking a full-stack or backend software intern.
      </p>

      <p className='mb-3'>
        My strongest languages are Python, Java, SQL, and React, and I am familiar with MVC frameworks, such as Django. Additionally, as someone who has previously worked on a Scrum Team, I can keep up with the speed, documentation, and organization required for larger software projects.
      </p>
    </motion.section>
  )
}
