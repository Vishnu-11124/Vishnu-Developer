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
      <h2 className="text-center text-4xl font-bold md:text-5xl font-Ovo dark:text-white mb-14">
        My Journey
      </h2>

      <div className="max-w-5xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />

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
              <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-900" />

              {/* Card */}
              <div className="group w-full md:w-[48%] relative">
                {/* Glow border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>

                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-sm">

                  {/* Top */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                    />

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.college}
                      </p>

                      <p className="text-xs text-gray-400">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <span className="inline-block mb-4 px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
                    {edu.duration}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      Highlights
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <FaMapMarkerAlt />
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