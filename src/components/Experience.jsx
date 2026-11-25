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
      <h4 className="text-center mb-2 text-sm font-semibold tracking-widest uppercase text-midnight-accent">
        Professional Path
      </h4>
      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-midnight-text mb-14">
        Work Experience
      </h2>

      <div className="max-w-5xl mx-auto relative">

        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[1px] bg-midnight-border -translate-x-1/2" />

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
              <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-midnight-accent border-[3px] border-midnight-bg" />

              {/* Card */}
              <div className="group w-full md:w-[48%] relative">
                <div className="relative bg-midnight-card p-6 md:p-8 rounded-2xl border border-midnight-border group-hover:border-midnight-accent/60 transition-all duration-300 group-hover:-translate-y-1">

                  {/* Top section */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-midnight-surface flex items-center justify-center p-2 border border-midnight-border">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-midnight-text">
                        {exp.role}
                      </h3>

                      <p className="text-sm text-midnight-muted font-medium">
                        {exp.company}
                      </p>

                      <p className="text-xs text-midnight-muted/80 mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Duration + link */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-midnight-surface text-midnight-accent border border-midnight-border">
                      {exp.duration}
                    </span>

                    <a
                      href={exp.link}
                      target="_blank"
                      className="text-xs flex items-center gap-1 text-midnight-accent hover:text-midnight-accent-hover transition-colors"
                    >
                      Visit <FaExternalLinkAlt size={10} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-midnight-muted mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-midnight-muted uppercase tracking-wide mb-2">
                      Key Contributions
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-midnight-muted flex gap-2"
                        >
                          <span className="text-midnight-accent">•</span>
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
                        className="px-2 py-1 text-xs rounded-md bg-midnight-surface border border-midnight-border text-midnight-muted"
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