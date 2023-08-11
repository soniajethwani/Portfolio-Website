import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fakesnake_hoohacks from "@/public/fakesnake_hoohacks.png";
import uva_scheduleadvisor from "@/public/uva_scheduleadvisor.png";
import ai_tutor from "@/public/ai_tutor.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const; //as const makese these strings read-only and ensures that the name and hash are only associated with each other

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "FakeSnake",
    description:
      "This Chrome Extension detects fake news by performing Sentimental Analysis on articles that appear on Google Search. The project was submitted in the 2022 HooHacks Hackathon and won the 2nd Place Google Cloud Award.",
    tags: ["Python", "Sentimental Analysis", "pandas", "NumPy", "sklearn", "spaCy", "Google Cloud", "HTML"],
    imageUrl: fakesnake_hoohacks,
  },
  {
    title: "Schedule Advisor",
    description:
      "This Schedule Advisor revitalized UVA's Student Information System by using a RESTful framework and tweaking many functionalities. I served as the Scrum Master for my team throughout this semester-long project.",
    tags: ["Python", "Django", "Bootstrap", "HTML/CSS", "Scrum"],
    imageUrl: uva_scheduleadvisor,
  },
  {
    title: "AI Tutor for UVA Students",
    description:
      "[IN PROGRESS] Another UVA Project, this one focuses on helping UVA students rather than giving them the answers to classwork. Students can learn on their own with the help of an AI powered chatbot without seeking the help of tutors or the professors, who are usually outnumbered.",
    tags: ["OpenAI API", "React"],
    imageUrl: ai_tutor,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;