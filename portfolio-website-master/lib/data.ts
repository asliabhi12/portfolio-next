import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import homieImg from "@/public/homie.png"
import unicago from '@/public/uni-1.png'
import celebrare from '@/public/celebrare.png'

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
] as const;

export const experiencesData = [
  {
    title: "B.Tech Graduation",
    location: "Rajasthan Technical University",
    description: "Achieved graduation from Rajasthan Technical University, gaining a comprehensive technical education and laying the foundation for a successful career.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Associate Software Engineer",
    location: "Xenonstack, Mohali",
    description:
      "I explored as many technologies as I could find and learn't how we can leverage it to create something amazing",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Co-Founder",
    location: "Unicago",
    description: 
    "Persisted in cultivating fresh ideas fueled by a renewed vision and energy. Aspired to embrace a data-driven approach, with a central emphasis on advancing artificial intelligence.",
    icon: React.createElement(CgWorkAlt),
    date: "2020-present",
  }
 
] as const;

export const projectsData = [
  {
    title: "Homie",
    description:
      "Developed a browser startpage tailored for programmers, showcasing essential programming resources and everything vital to a coder's workflow.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: homieImg,
  },
  {
    title: "ProjektMJ",
    description:
      "Landing page for website that genrates invitation cards for any celeberation.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: celebrare,
  },
  {
    title: "Unicago",
    description:
      "Website Designed to showcase a concept product with dynamic styling and adaptation.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: unicago,
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
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Docker",
  "Kubernetes",
  "Helm",
  "Microsoft PowerPlatform",
  "PySpark",
  "Kafka",
  "Selenium",
  "Cucumber",
  "GoLang",
  "Framer Motion",
] as const;
