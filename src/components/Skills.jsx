import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "../data/constants";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const pillVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

const themeClasses = {
  violet: {
    dot: "bg-violet-500 dark:bg-violet-400",
    label: "text-violet-600 dark:text-violet-400",
    icon: "text-violet-600 dark:text-violet-400",
    pill: "bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-800/50 text-violet-800 dark:text-violet-300 hover:border-violet-400 dark:hover:border-violet-500",
  },
  blue: {
    dot: "bg-blue-500 dark:bg-blue-400",
    label: "text-blue-600 dark:text-blue-400",
    icon: "text-blue-600 dark:text-blue-400",
    pill: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/50 text-blue-800 dark:text-blue-300 hover:border-blue-400 dark:hover:border-blue-500",
  },
  emerald: {
    dot: "bg-emerald-500 dark:bg-emerald-400",
    label: "text-emerald-600 dark:text-emerald-400",
    icon: "text-emerald-600 dark:text-emerald-400",
    pill: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-300 hover:border-emerald-400 dark:hover:border-emerald-500",
  },
};

const SkillPill = ({ skill, theme }) => {
  const t = themeClasses[theme];
  return (
    <motion.div
      variants={pillVariants}
      whileHover={{ y: -2 }}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-[13px] cursor-default border transition-all duration-150 ${t.pill}`}
    >
      <skill.icon size={14} className={`shrink-0 ${t.icon}`} />
      {skill.name}
    </motion.div>
  );
};

const SkillCard = ({ cat }) => {
  const t = themeClasses[cat.theme];
  return (
    <motion.div
      variants={cardVariants}
      className="rounded-2xl p-5 border border-gray-200 dark:border-[#221e38] bg-white dark:bg-[#0e0c18] hover:border-violet-300 dark:hover:border-[#3d2f72] transition-colors duration-200"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-2 h-2 rounded-full shrink-0 ${t.dot}`} />
        <h3 className={`text-[14px] font-medium tracking-[0.1em] uppercase ${t.label}`}>
          {cat.category}
        </h3>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        {cat.skills.map((skill) => (
          <SkillPill key={skill.name} skill={skill} theme={cat.theme} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => (
  <motion.section
    id="skills"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="w-full px-[6%] md:px-[12%] py-16 scroll-mt-20"
  >
    <p className="text-center text-xl font-medium tracking-[0.12em] uppercase text-violet-600 dark:text-violet-600 mb-2">
      My Arsenal
    </p>
    <h2 className="text-center text-4xl md:text-5xl font-Ovo  dark:text-white mb-2">
      Skills & Tools
    </h2>
    <p className="text-center text-[13px]  dark:text-white mb-12">
      Organized by what I actually use to build things.
    </p>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-3.5 max-w-4xl mx-auto"
    >
      <SkillCard cat={SKILL_CATEGORIES[0]} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {SKILL_CATEGORIES.slice(1).map((cat) => (
          <SkillCard key={cat.category} cat={cat} />
        ))}
      </div>
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center text-[12px]  dark:text-white mt-10 tracking-wide"
    >
      Constantly learning and expanding my toolset...
    </motion.p>
  </motion.section>
);

export default Skills;