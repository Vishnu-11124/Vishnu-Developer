import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../../data/constants";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="w-full px-[5%] md:px-[8%] py-16 scroll-mt-20"
    >
      <p className="text-center text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-2">
        My Portfolio
      </p>
      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
        My Latest Works
      </h2>
      <p className="text-center text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-12">
        Projects showcasing my expertise in full-stack development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
              <img
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Hover icon links */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  title="View Code"
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-700 hover:scale-110 transition-transform"
                >
                  <FiGithub size={14} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  title="Live Demo"
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-700 hover:scale-110 transition-transform"
                >
                  <FiExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50 mb-1.5 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1 mb-4">
                {project.description}
              </p>

              {/* Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto flex justify-center">
                <button
                  onClick={() => {
                    navigate(`/projects/${project.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="group relative inline-flex items-center gap-2 px-6 py-2 text-sm font-medium bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-950 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
