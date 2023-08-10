"use client";
import React from 'react';
import {motion} from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
    className="bg-gray-200 mt-60 w-1 h-16 rounded-full sm:block dark:bg-opacity-20"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.125 }}
  >
  </motion.div>
  )
}
