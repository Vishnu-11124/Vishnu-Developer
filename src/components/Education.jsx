
import React from "react";
import { EDUCATION } from "../data/constants";

const Education = () => {
    return (
        <div id="education" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo dark:text-white mb-10">My Journey</h2>

            <div className="max-w-4xl mx-auto relative">
                {/* Render Cards */}
                <div className="grid grid-cols-1 gap-8">
                    {EDUCATION.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Animated Gradient Border Background */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>

                            {/* Card Content */}
                            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 bg-white dark:bg-gray-900 p-8 rounded-2xl leading-none">

                                {/* Logo Section */}
                                <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <img loading="lazy" src={edu.logo} className="w-12 h-12 object-contain rounded-full" alt={edu.institution} />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                            {edu.degree}
                                        </h3>
                                        <span className="px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full w-max mx-auto md:mx-0">
                                            {edu.years}
                                        </span>
                                    </div>

                                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {edu.institution}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
                                        {edu.college}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
