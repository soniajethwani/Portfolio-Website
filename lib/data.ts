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
    title: "Lead Researcher | Academy of Science",
    location: "Leesburg, VA",
    description:
      "Led a team of 10 members in developing a more efficient version of DARPA’s disaster robot - created a decentralized robotic swarm capable of mapping a disaster site using lidar maps and Simultaneous Localization and Mapping algorithms",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2021",
  },
  {
    title: "Coding Instructor | The Coder School",
    location: "Ashburn, VA",
    description:
      "Taught students (K-12) Python/Pygame/Javascript/Java/Scratch; hosted Robotics summer camps",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Technology/Engineering Intern | M.C. Dean",
    location: "Tysons Corner, VA",
    description:
      "Developed method to quickly transfer tags from pdf's to Excel Sheets using Optical Character Recognition - Served as Lead Engineer for 3 projects with companies: Proctor and Gamble, Meta, QTS (Microsoft) – design experience with AutoCAD, SKM, ETAP, AGI/ElumTools, and more",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Teaching Assistant | University of Virginia",
    location: "Charlottesville, VA",
    description:
      "Instructor for Data Structures and Algorithms, Linear Algebra, and Calculus II - Held office hours, graded assignments, and collaborated with professors in creating class material",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
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
  "Java",
  "Django",
  "Python",
  "Scrum",
  "PostgreSQL",
  "JSON",
  "HTML",
  "CSS",
  "SQLite",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "MatLab",
  "Test Driven Development",
  "Design Patterns",
] as const;