import React from "react";
import { motion } from "framer-motion";
import {
  FaJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiReact, SiRedux, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiPostman, SiCanva,
} from "react-icons/si";

const SKILL_CATEGORIES = [
  {
    category: "Frontend Development",
    color: "#0ea5e9",
    bg: "#e0f2fe",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "RTK Query", icon: SiRedux },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    category: "Languages & Backend",
    color: "#6366f1",
    bg: "#eef2ff",
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    category: "Databases & Tools",
    color: "#10b981",
    bg: "#d1fae5",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Canva", icon: SiCanva },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="skills"
      className="w-full px-[6%] md:px-[12%] py-16 scroll-mt-20"
    >
      {/* Section heading */}
      <h4 className="text-center mb-2 text-lg font-medium text-indigo-600 dark:text-indigo-400 tracking-widest uppercase">
        My Arsenal
      </h4>
      <h2 className="text-center text-4xl md:text-5xl font-Ovo dark:text-white mb-3">
        Skills & Tools
      </h2>
      <p className="text-center text-gray-400 dark:text-gray-500 text-sm mb-14">
        Organized by what I actually use to build things.
      </p>

      {/* Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-5 max-w-5xl mx-auto"
      >
        {/* Frontend — full width */}
        <motion.div
          variants={cardVariants}
          className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: SKILL_CATEGORIES[0].color }} />
            <h3 className="text-sm font-semibold tracking-wide uppercase" style={{ color: SKILL_CATEGORIES[0].color }}>
              {SKILL_CATEGORIES[0].category}
            </h3>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-2">
            {SKILL_CATEGORIES[0].skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{ y: -2, scale: 1.04 }}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 cursor-default transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
                style={{ backgroundColor: SKILL_CATEGORIES[0].bg }}
              >
                <skill.icon size={15} style={{ color: SKILL_CATEGORIES[0].color }} className="shrink-0" />
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom two — side by side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.slice(1).map((cat) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                <h3 className="text-sm font-semibold tracking-wide uppercase" style={{ color: cat.color }}>
                  {cat.category}
                </h3>
              </div>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 cursor-default transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
                    style={{ backgroundColor: cat.bg }}
                  >
                    <skill.icon size={15} style={{ color: cat.color }} className="shrink-0" />
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 dark:text-gray-500 mt-12 text-sm"
      >
        Constantly learning and expanding my toolset...
      </motion.p>
    </motion.div>
  );
};

export default Skills;