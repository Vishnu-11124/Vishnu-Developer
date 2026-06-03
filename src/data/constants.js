import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiShadcnui,
} from "react-icons/si";

import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { TbApi } from "react-icons/tb";
import { RiShieldKeyholeLine } from "react-icons/ri";

export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "My Work", href: "#work" },
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend Development",
    theme: "violet",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "RTK Query", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiReact },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    category: "Backend Development",
    theme: "blue",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
      { name: "JWT Auth", icon: RiShieldKeyholeLine },
    ],
  },
  {
    category: "Languages, Databases & Tools",
    theme: "emerald",
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export const EDUCATION = [
  {
    institution: "Kannur University",
    degree: "MCA",
    years: "2023 - 2025",
    college: "Chinmaya Institute of Technology",
    logo: "/images/logo.jpg",
  },
  {
    institution: "Kannur University",
    degree: "Bsc CS",
    years: "2020 - 2023",
    college: "Taliparamba Arts & Science College",
    logo: "/images/logo.jpg",
  },
];

export const EXPERIENCE = [
  {
    company: "Alpha Innovation",
    role: "Web Development Intern",
    duration: "08/2025 - 12/2025",
    description: "Web development is the process of building, programming...",
    logo: "/images/experience/alpha.jpeg",
    link: "https://www.alphainnovation.in/",
  },
  {
    company: "Zidio Development",
    role: "Web Development Intern",
    duration: "03/2025 - 06/2025",
    description: "Web development is the process of building, programming...",
    logo: "/images/experience/zidio.png",
    link: "#",
  },
];

export const PROJECTS = [
  {
    title: "ThreadVibe",
    description:
      "ThreadVibe, a MERN-based t-shirt e-commerce platform with product browsing, cart, authentication, and order tracking.",
    image: "/images/projects/ThreadVibe.png", // External image
    github: "https://github.com/Vishnu-11124/ThreadVibe",
    live: "https://thread-vibe-gamma.vercel.app/",
    badges: [
      "React",
      "Tailwind",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Postman",
      "Redux",
    ],
  },
  {
    title: "TaskFlow",
    description:
      "TaskFlow is a modern, intuitive dashboard for efficiently organizing, tracking, and managing daily tasks.",
    image: "/images/projects/TaskFlow.jpeg", // External image
    github: "https://github.com/Vishnu-11124/TaskFlow",
    live: "https://task-flow-eight-rose.vercel.app/",
    badges: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Kicko",
    description:
      "User-friendly shoe-selling web app with search, filters, wishlist, cart, and dummy checkout.",
    image: "/images/projects/Kicko.png", // External image
    github: "https://github.com/Vishnu-11124/Kicko",
    live: "https://kicko-7dsr.vercel.app/",
    badges: ["React", "JavaScript", "Tailwind"],
  },
  {
    title: "Modern Calculator",
    description:
      "A sleek, responsive calculator with modern UI and smooth animations",
    image: "/images/projects/Calculator.png",
    github: "https://github.com/Vishnu-11124/Calculator",
    live: "https://calculator-delta-two-99.vercel.app/",
  },
  {
    title: "TrackFit",
    description:
      "TrackFit shows accurate results and clearly displays whether the user is underweight, normal, overweight, or obese.",
    image: "/images/projects/TrackFit.png",
    github: "https://github.com/Vishnu-11124/TrackFit",
    live: "https://track-fit-amber.vercel.app/",
  },
  {
    title: "Guessify",
    description:
      "An interactive number guessing game with 10 chances to find the secret number between 1-100, featuring instant feedback to guide your way!",
    image: "/images/projects/Guessify.png",
    github: "https://github.com/Vishnu-11124/Guessify",
    live: "https://guessify-omega.vercel.app/",
  },
  {
    title: "Noteo",
    description:
      "A task management tool designed to organize and prioritize daily activities.",
    image: "/images/projects/Noteo.png",
    github: "https://github.com/Vishnu-11124/Noteo",
    live: "https://noteo-three.vercel.app/",
  },
  {
    title: "Weather App",
    description: "Real-time weather application with geolocation features",
    image:
      "https://images.pexels.com/photos/25988093/pexels-photo-25988093.jpeg", // External image
    github: "#",
    live: "#",
    badges: ["HTML", "CSS", "API"],
  },
];
