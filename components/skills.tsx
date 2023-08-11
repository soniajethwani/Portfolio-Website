"use client";

import { skillsData } from '@/lib/data'
import React from 'react'
import { useSectionInView } from '@/lib/hooks';
import {motion} from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

export default function Skills() {
  const {ref} = useSectionInView('Skills');
  return (
    <motion.section ref={ref} id="skills" className='mb-28 max-w-[53rem] scroll-mt-16 text-center sm:mb-40'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 4, type: "spring", stiffness: 125}}>
      <h2 className='text-center text-4xl font-semibold capitalize mt-32 mb-8 text-white'>Skills</h2>
      <ul className='text-gray-950 flex flex-wrap justify-center gap-2 text-lg'>
      {skillsData.map((skill, index) => (
            <motion.li className='bg-gray-200 border border-gray-200 rounded-full px-5 py-1 hover:scale-105 hover:bg-amber-500' 
            key={index} 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            custom={index}>
                {skill}
            </motion.li>
            ))}
      </ul>
    </motion.section>
  )
}
