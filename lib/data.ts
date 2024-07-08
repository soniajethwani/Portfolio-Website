import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fakesnake_hoohacks from "@/public/fakesnake_hoohacks.png";
import uva_scheduleadvisor from "@/public/uva_scheduleadvisor.png";
import kaggle from "@/public/kaggle.jpg";

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
  {
    title: "Research Assistant | University of Virginia",
    location: "Charlottesville, VA",
    description:
      "Web scraping database to determine information on year-by-year election policies in South American countries",
    icon: React.createElement(CgWorkAlt),
    date: "Spring 2024",
  },
  {
    title: "Extern | US Patent and Trademark Office",
    location: "Remote",
    description:
      "Working under Deputy Commissioner Karin Ferriter - create code scripts for End-User Software Department, shadow/assist Computer Science Patent Examiner",
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2024",
  },
  {
    title: "Software Engineering Intern | CoStar Group",
    location: "Washington, D.C.",
    description:
      "Full-Stack Development, React - Working extensively on Micro-Frontends in CoStar’s Web Enterprise platform, developing an invoicing tool for Costar’s Finance department by integrating Oracle tools into Enterprise",
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Kaggle: Predicting Housing Prices",
    description:
      "Project using regression modeling to predict housing prices in Ames, Iowa based on previously recorded data – top 10 lowest RMSE",
    tags: ["Machine Learning"],
    imageUrl: kaggle,
  },
  {
    title: "Schedule Advisor",
    description:
      "This Schedule Advisor revitalized UVA's Student Information System by using a RESTful framework and tweaking many functionalities. I served as the Scrum Master for my team throughout this semester-long project.",
    tags: ["Agile Development", "Web Development", "API Integration"],
    imageUrl: uva_scheduleadvisor,
  },
  {
    title: "FakeSnake",
    description:
      "This Chrome Extension detects fake news by performing Sentimental Analysis on articles that appear on Google Search. The project was submitted in the 2022 HooHacks Hackathon and won the 2nd Place Google Cloud Award.",
    tags: ["Google", "Hackathon", "Sentimental Analysis"],
    imageUrl: fakesnake_hoohacks,
  },
] as const;

export const skillsData = [
  "Java",
  "Django",
  "MVC",
  "Python",
  "Scrum",
  "Agile",
  "SQL",
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
  "MatLab",
  "Test Driven Development",
  "Design Patterns",
  "Architecture Patterns",
  "Swift",
  "Machine Learning",
  "C/C++",
  "Object Oriented Programming",
  "Data Structures and Algorithms"

] as const;