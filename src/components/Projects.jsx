
import React from "react";
import { PROJECTS } from "../data/constants";

const Projects = () => {
    return (
        <div id="work" className="w-full px-[5%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-medium text-pink-600 dark:text-pink-400">
                My Portfolio
            </h4>
            <h2 className="text-center text-5xl font-Ovo dark:text-white mb-12">
                My Latest Works
            </h2>
            <p className="text-center max-w-2xl mt-5 mb-14 mx-auto text-gray-600 dark:text-gray-300">
                Explore this collection of projects showcasing my expertise in frontend development.
            </p>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    >

                        {/* Image Container with Overlay */}
                        <div className="relative h-64 overflow-hidden">
                            {/* Image */}
                            <img
                                loading="lazy"
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Dark Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Hover Buttons */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-transparent">
                                <a href={project.github} className="p-3 bg-white rounded-full text-gray-800 hover:text-pink-600 shadow-lg hover:scale-110 transition-all" title="View Code">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href={project.live} className="p-3 bg-white rounded-full text-gray-800 hover:text-pink-600 shadow-lg hover:scale-110 transition-all" title="Live Demo">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            {/* Tags/Badges */}
                            {project.badges && (
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    {project.badges.map((badge, idx) => (
                                        <span key={idx} className="px-3 py-1 text-xs font-semibold bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300 rounded-full">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
