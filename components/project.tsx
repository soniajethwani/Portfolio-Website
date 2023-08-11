"use client";

import { projectsData } from "@/lib/data";
import {useRef} from "react";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";



type ProjectProps = (typeof projectsData)[number];
// can also be written as this:
// type ProjectProps = {
//     title: string;
//     description: string;
//     .
//     .
//     .
// }

export default function Project({title, description, tags, imageUrl}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const{scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.25 1"]
    });
    const progress = useTransform(scrollYProgress, [0.75, 1], [0.75, 1]);


    return(
    <motion.div style={{scale: progress, opacity: progress}} ref={ref} className="mb-3 sm:mb-8 last:mb-0">
        <section className='group bg-gray-200 max-w-[42rem] border border-gray-900 overflow-hidden sm:pr-8 relative sm:h-[25rem] even:pl-8 hover:bg-amber-500 transition'>
            <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
                <h3 className='text-2xl font-semibold text-black'>{title}</h3>
                <p className="mt-2 leading-relaxed text-black">{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li className='bg-gray-600 opacity-90 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            <Image className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:-translate-x-2 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105' src={imageUrl} alt="My Project" quality={95} />
        </section>
    </motion.div>
    )
  }