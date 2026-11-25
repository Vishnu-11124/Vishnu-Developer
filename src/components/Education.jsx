import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../data/constants";
import { FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="education"
      className="w-full px-[12%] py-16 scroll-mt-20"
    >
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold md:text-5xl font-Ovo text-midnight-text mb-14">
        My Journey
      </h2>

      <div className="max-w-5xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-midnight-border -translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {EDUCATION.map((edu, index) => (
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
              <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-midnight-accent border-4 border-midnight-bg" />

              {/* Card */}
              <div className="group w-full md:w-[48%] relative">
                <div className="relative bg-midnight-card border border-midnight-border rounded-2xl p-6 md:p-8 group-hover:border-midnight-accent/60 group-hover:-translate-y-1 transition-all duration-300">

                  {/* Top */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-12 h-12 rounded-full object-cover border border-midnight-border bg-midnight-surface"
                    />

                    <div>
                      <h3 className="text-lg font-bold text-midnight-text">
                        {edu.degree}
                      </h3>

                      <p className="text-sm text-midnight-muted">
                        {edu.college}
                      </p>

                      <p className="text-xs text-midnight-muted/80">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <span className="inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full bg-midnight-surface border border-midnight-border text-midnight-accent">
                    {edu.duration}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-midnight-muted mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-midnight-muted mb-2 uppercase tracking-wide">
                      Highlights
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-md bg-midnight-surface border border-midnight-border text-midnight-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-xs text-midnight-muted">
                    <FaMapMarkerAlt className="text-midnight-accent" />
                    {edu.location}
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

export default Education;