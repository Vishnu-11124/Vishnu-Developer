
import React from "react";
import { EXPERIENCE } from "../data/constants";

const Experience = () => {
    return (
        <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-medium text-blue-600 dark:text-blue-400">
                Professional Path
            </h4>
            <h2 className="text-center text-5xl font-Ovo dark:text-white mb-12">
                Work Experience
            </h2>

            <div className="max-w-4xl mx-auto relative">
                <div className="grid grid-cols-1 gap-8">
                    {EXPERIENCE.map((exp, index) => (
                        <div key={index} className="group relative">
                            {/* Cyan/Blue Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>

                            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start">

                                {/* Logo */}
                                <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm w-16 h-16 flex items-center justify-center">
                                    <img
                                        loading="lazy"
                                        src={exp.logo}
                                        className="w-full h-full object-contain"
                                        alt={exp.company}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                        {exp.role}
                                    </h3>
                                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                                        {exp.company}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                                        {exp.description}
                                    </p>

                                    {/* Link Button */}
                                    <a
                                        href={exp.link}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        Visit Website
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
