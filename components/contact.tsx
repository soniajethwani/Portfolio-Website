"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1}}
      viewport={{once:true}}
    >
      <h2 className='text-center text-4xl font-semibold capitalize mb-8 text-white'>Contact Me</h2>
      <p className="text-gray-400 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:qqs6ab@virginia.com">
        qqs6ab@virginia.com
        </a>{" "}
        or through this form.
      </p>

      <form 
        className="mt-10 flex flex-col" 
        action={async formData => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Sent!");
        }}>
        <input name="senderEmail" type="email" required maxLength={500} placeholder="Email" className="px-4 h-14 rounded-lg border border-black/10 text-black"/>
        <textarea name="message" required maxLength={2000} placeholder="Message" className="h-52 my-3 rounded-lg border border-black/10 p-4 text-black"/>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}