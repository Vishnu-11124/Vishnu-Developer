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
  { label: "Home", href: "/" },
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
    college: "Chinmaya Institute of Technology",
    degree: "Master of Computer Applications (MCA)",
    duration: "2023 - 2025",
    location: "Kannur, Kerala",
    description:
      "Focused on advanced software development, web technologies, and system design.",
    highlights: [
      "Full Stack Web Development",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management Systems",
    ],
    logo: "/images/logo.jpg",
  },
  {
    institution: "Kannur University",
    college: "Taliparamba Arts & Science College",
    degree: "BSc Computer Science",
    duration: "2020 - 2023",
    location: "Kannur, Kerala",
    description:
      "Built strong fundamentals in programming, databases, and computer science theory.",
    highlights: [
      "Programming Fundamentals",
      "Object Oriented Programming",
      "Operating Systems",
      "Computer Networks",
    ],
    logo: "/images/logo.jpg",
  }
];

export const EXPERIENCE = [
  {
    company: "Alpha Innovation",
    role: "Web Development Intern",
    duration: "Aug 2025 - Oct 2025",
    location: "Remote",
    description:
      "Worked on building and improving web applications with modern frontend and backend technologies.",
    highlights: [
      "Developed responsive UI components using React",
      "Worked with REST APIs integration",
      "Improved UI performance and usability",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    logo: "/images/experience/alpha.jpeg",
    link: "https://www.alphainnovation.in/",
  },
  {
    company: "Zidio Development",
    role: "Web Development Intern",
    duration: "Mar 2025 - Jun 2025",
    location: "Remote",
    description:
      "Contributed to frontend development and learned real-world project workflows in a team environment.",
    highlights: [
      "Built reusable UI components",
      "Worked with API integration",
      "Participated in code reviews and debugging",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit", "RTK Query"],
    logo: "/images/experience/zidio.png",
    link: "#",
  },
];

export const PROJECTS = [
  {
    id: "threadvibe",
    image: "/images/projects/ThreadVibe.png",
    name: "ThreadVibe",
    description:
      "MERN-based t-shirt e-commerce platform with cart, authentication, and order tracking.",

    techTags: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],

    overview:
      "ThreadVibe is a full-stack e-commerce platform built using the MERN stack for browsing products, managing cart, authentication, and order tracking.",

    problem:
      "Small clothing sellers lack an easy-to-use digital platform to sell and manage products online.",

    solution:
      "Built a scalable e-commerce system with authentication, product listing, cart management, and order tracking.",

    features: [
      "User authentication (JWT)",
      "Product browsing & filtering",
      "Cart management system",
      "Order tracking",
      "Responsive UI"
    ],

    challenges: [
      "Managing global state for cart using Redux",
      "Handling secure authentication flow",
      "Optimizing API calls for performance"
    ],

    learnings: [
      "Redux state management patterns",
      "JWT authentication flow",
      "REST API design",
      "Full-stack project architecture"
    ],

    github: "https://github.com/Vishnu-11124/ThreadVibe",
    live: "https://thread-vibe-gamma.vercel.app/"
  },

  {
    id: "taskflow",
    image: "/images/projects/TaskFlow.jpeg",
    name: "TaskFlow",
    description:
      "Modern task management dashboard for organizing and tracking daily tasks.",

    techTags: ["Next.js", "TypeScript", "Tailwind CSS"],

    overview:
      "TaskFlow is a productivity tool designed to help users organize, track, and manage tasks efficiently.",

    problem:
      "Users need a simple and modern way to manage daily tasks without complexity.",

    solution:
      "Built a clean and intuitive task management system with smooth UX and fast interactions.",

    features: [
      "Task creation & deletion",
      "Task status tracking",
      "Responsive dashboard UI"
    ],

    challenges: [
      "Designing minimal UI without losing usability"
    ],

    learnings: [
      "Next.js routing system",
      "Component-based architecture"
    ],

    github: "https://github.com/Vishnu-11124/TaskFlow",
    live: "https://task-flow-eight-rose.vercel.app/"
  },

  {
    id: "kicko",
    image: "/images/projects/Kicko.png",
    name: "Kicko",
    description:
      "Shoe e-commerce web app with search, filters, wishlist, cart, and checkout.",

    techTags: ["React", "JavaScript", "Tailwind CSS"],

    overview:
      "Kicko is a frontend-focused e-commerce web app for browsing shoes with filtering, wishlist, and cart features.",

    problem:
      "Users need a simple shopping experience for browsing and selecting shoes online.",

    solution:
      "Built a responsive frontend e-commerce UI with filtering and cart functionality.",

    features: [
      "Product search & filtering",
      "Wishlist system",
      "Cart management",
      "Responsive design"
    ],

    challenges: [
      "Managing UI state for cart and wishlist"
    ],

    learnings: [
      "React state management",
      "Component reusability"
    ],

    github: "https://github.com/Vishnu-11124/Kicko",
    live: "https://kicko-7dsr.vercel.app/"
  }
];