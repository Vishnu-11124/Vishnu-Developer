
import React from "react";
import { SKILLS } from "../data/constants";

const Skills = () => {
    return (
        <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-medium text-indigo-600 dark:text-indigo-400">
                My Arsenal
            </h4>
            <h2 className="text-center text-5xl font-Ovo dark:text-white mb-12">
                Skills & Tools
            </h2>

            {/* Responsive Layout: Flex (Tags) on Mobile, Grid (Cards) on Desktop */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 sm:grid sm:grid-cols-[repeat(auto-fill,minmax(140px,1fr))] max-w-6xl mx-auto">
                {SKILLS.map((skill) => (
                    <div
                        key={skill.name}
                        className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
            hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 
            hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 
            
            /* Mobile Styles: Pill Shape */
            rounded-full px-5 py-2.5 flex items-center justify-center
            
            /* Desktop Styles: Card Shape */
            sm:rounded-2xl sm:p-6 sm:flex-col sm:gap-4"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-indigo-500/5 sm:rounded-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-indigo-500/10"></div>

                        {/* Icon - Hidden on Mobile */}
                        <div className="hidden sm:block relative z-10 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-xl group-hover:bg-white dark:group-hover:bg-gray-700 transition-colors">
                            <img
                                loading="lazy"
                                src={skill.icon}
                                className={`${skill.width} h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300`}
                                alt={skill.name}
                            />
                        </div>

                        {/* Name */}
                        <h3 className="relative z-10 font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {skill.name}
                        </h3>
                    </div>
                ))}
            </div>

            <p className="text-center text-gray-500 dark:text-gray-400 mt-12 text-sm">
                Constantly learning and expanding my toolset...
            </p>
        </div>
    );
};

export default Skills;
