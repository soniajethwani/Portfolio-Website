"use client";

import { projectsData } from '@/lib/data'
import Project from "./project";
import React from "react";
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const {ref} = useSectionInView('Projects', 0.5);
  return (
    <motion.section
    ref={ref}     
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 4, type: "spring", stiffness: 125}}
    id="projects"
    className='scroll-mt-20'>
      <h2 className='text-center text-4xl font-semibold capitalize mb-8 text-white'>Projects</h2>
      <div>
        {projectsData.map((project, index) => (
            <React.Fragment key={index}>
                <Project {...project} />
            </React.Fragment>
            ))}
      </div>
    </motion.section>
  )
}
