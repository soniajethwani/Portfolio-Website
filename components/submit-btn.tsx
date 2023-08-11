import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const {pending} = useFormStatus();
  return (
<button type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-400 text-black rounded-full outline-white transition-all focus:scale:110 hover:scale-110 active:scale-105 hover:bg-amber-500 disabled:scale-100 disabled:bg-opacity-65" disabled={pending} >
  {
    pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> : (
      <>
      Submit {" "}
      <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
      </>
    )
  } 
  {" "}</button>
  )
}
