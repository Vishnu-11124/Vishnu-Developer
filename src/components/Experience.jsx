import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "../data/constants";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="experience"
      className="w-full px-[12%] py-16 scroll-mt-20"
    >
      {/* Heading */}
      <h4 className="text-center mb-2 text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500">
        Professional Path
      </h4>
      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-14">
        Work Experience
      </h2>

      <div className="max-w-5xl mx-auto relative">

        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[1px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex w-full ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-400 dark:bg-slate-600 border-[3px] border-white dark:border-slate-950" />

              {/* Card */}
              <div className="group w-full md:w-[48%] relative">

                {/* Glow border */}
                <div className="absolute -inset-0.5 bg-slate-200 dark:bg-slate-800 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">

                  {/* Top section */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-2 border border-slate-200 dark:border-slate-800">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                        {exp.role}
                      </h3>

                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        {exp.company}
                      </p>

                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Duration + link */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {exp.duration}
                    </span>

                    <a
                      href={exp.link}
                      target="_blank"
                      className="text-xs flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                    >
                      Visit <FaExternalLinkAlt size={10} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wide mb-2">
                      Key Contributions
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 dark:text-slate-400 flex gap-2"
                        >
                          <span className="text-slate-400 dark:text-slate-600">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-md bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;