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
      <h4 className="text-center mb-2 text-lg font-medium text-blue-600 dark:text-blue-400">
        Professional Path
      </h4>
      <h2 className="text-center text-4xl md:text-5xl font-Ovo dark:text-white mb-14">
        Work Experience
      </h2>

      <div className="max-w-5xl mx-auto relative">

        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />

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
              <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900" />

              {/* Card */}
              <div className="group w-full md:w-[48%] relative">

                {/* Glow border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500" />

                <div className="relative bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-sm">

                  {/* Top section */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-2 border border-gray-200 dark:border-gray-700">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {exp.role}
                      </h3>

                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>

                      <p className="text-xs text-gray-400">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Duration + link */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                      {exp.duration}
                    </span>

                    <a
                      href={exp.link}
                      target="_blank"
                      className="text-xs flex items-center gap-1 text-gray-500 hover:text-blue-500 transition"
                    >
                      Visit <FaExternalLinkAlt size={10} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                      Key Contributions
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 dark:text-gray-300 flex gap-2"
                        >
                          <span className="text-blue-500">•</span>
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
                        className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
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