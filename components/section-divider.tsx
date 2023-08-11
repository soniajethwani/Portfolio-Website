"use client";
import React from 'react';
import {motion} from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
    className="bg-gray-200 mt-60 w-1 h-16 rounded-full sm:block dark:bg-opacity-20"
    initial={{ y: -100, x: "-50%", opacity: 0 }}
    animate={{ y: 0, x: "-50%", opacity: 1 }}
    transition={{ delay: 0.5, duration: 2, type: "spring" }}
  >
  </motion.div>
  )
}
