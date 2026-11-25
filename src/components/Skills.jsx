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

const SkillPill = ({ skill }) => {
  return (
    <motion.div
      variants={pillVariants}
      whileHover={{ y: -2 }}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-[13px] cursor-default border border-midnight-border bg-midnight-surface text-midnight-text hover:border-midnight-accent transition-all duration-150"
    >
      <skill.icon size={14} className="shrink-0 text-midnight-accent" />
      {skill.name}
    </motion.div>
  );
};

const SkillCard = ({ cat }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="rounded-2xl p-5 border border-midnight-border bg-midnight-card hover:border-midnight-accent/60 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full shrink-0 bg-midnight-accent" />
        <h3 className="text-[14px] font-medium tracking-[0.1em] uppercase text-midnight-accent">
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
          <SkillPill key={skill.name} skill={skill} />
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
    <p className="text-center text-sm font-semibold tracking-widest uppercase text-midnight-accent mb-2">
      My Arsenal
    </p>

    <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-midnight-text mb-2">
      Skills & Tools
    </h2>

    <p className="text-center text-sm text-midnight-muted mb-12">
      Organized by what I actually use to build things.
    </p>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-4xl mx-auto"
    >
      {SKILL_CATEGORIES.map((cat) => (
        <SkillCard key={cat.category} cat={cat} />
      ))}
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center text-sm text-midnight-muted mt-10 tracking-wide"
    >
      Constantly learning and expanding my toolset...
    </motion.p>
  </motion.section>
);

export default Skills;
