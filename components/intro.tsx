"use client";

import Image from 'next/image'
import React from 'react'
import profile_picture from "@/public/profile_picture.png"
import {motion} from "framer-motion";
import {HiDownload} from "react-icons/hi";
import {BsLinkedin} from "react-icons/bs";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const {ref} = useSectionInView('Home', 0.5);
  return (
    <section
    ref={ref}
    className="mb-40 max-w-[50rem] sm:mb-0 scroll-mt-[100rem]"
    id="home"
    >
    <div className='flex flex-col'>
    <div className='flex items-center justify-left'>
        <div className='relative'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1}}
                transition={{ delay: 0.5, duration: 2, type: "spring"}}
            >

            <div className="h-[400px] w-[400px]">
                <Image src={profile_picture} alt="Sonia's Picture" 
              width="400"
              height="400"
              quality="95"
              priority={true}
              className="rounded object-cover border-[0.35rem] border-white" />
                <div className="bottom-0 px-4 py-3 bg-gray-500/50 w-full">
                <p className="text-gray-200 text-center">
                     I'm a Computer Science (BS) student at the University of Virginia seeking a {" "}
                    <span className="font-bold">technical internship for the summer of 2024</span>. I am interested in {" "}
                    <span className="font-bold">back-end and full-stack </span> development.
                </p>
                </div>
            </div>

            </motion.div>

            {/* <motion.span
            className="absolute bottom-0 right-0 text-8xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 2,
              duration: 4,
            }}
          >
            👋
          </motion.span> */}
        
        </div>
    </div>

    {/* <div>
    <motion.h1
        className="mb-10 mt-4 px-4 text-left text-l font-medium !leading-[1.5] sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 4, type: "spring", stiffness: 125}}

      >
        <span className="font-bold">My name is Sonia Jethwani.</span> I'm a Computer Science student at the University of Virginia seeking a {" "}
        <span className="font-bold">technical internship for the summer of 2024</span>. I am interested in {" "}
        <span className="font-bold">back-end and full-stack </span> development.
      </motion.h1>

    </div> */}
    </div>

    <motion.div className='relative flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-small'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 4, type: "spring", stiffness: 125}}
            >
        <a className='bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-amber-500 active:scale-105 transition cursor-pointer'
            href="/SoniaJethwani_Resume.pdf"
            download>
            Resume {" "} <HiDownload 
            className='opacity-60 group-hover:translate-y-1 transition'/>
        </a> {" "}

        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-amber-500 active:scale-105 transition cursor-pointer'
            href='https://www.linkedin.com/in/sonia-jethwani-5070901a2/' target="_blank">
            <BsLinkedin />
        </a>

        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.2rem] rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-amber-500 active:scale-105 transition cursor-pointer'
            href="https://github.com/soniajethwani" target="_blank">
            <FaGithubSquare />
        </a>
    </motion.div>



    </section>
  )
}
