
import React from "react";

const About = () => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg dark:text-gray-300">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo dark:text-white">About Me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-20">

                {/* Image Side */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                    <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl group hover:scale-[1.02] transition-transform duration-500">
                        <img
                            loading="lazy"
                            src="/images/user.jpg"
                            className="w-full h-full object-cover"
                            alt="Vishnu"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-2/3 flex flex-col gap-6">
                    <h3 className="text-2xl font-bold dark:text-white text-gray-800">
                        Driven by Creativity, Powered by Code.
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-justify">
                        I am a passionate <span className="font-semibold text-indigo-600 dark:text-indigo-400">Frontend Developer</span> with a Master’s in Computer Applications (MCA).
                        My journey in tech is fueled by a desire to create intuitive and visually stunning web experiences.
                        I specialize in translating design concepts into responsive, interactive, and performant web applications.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-justify">
                        When I'm not coding, I'm constantly learning new technologies to stay ahead in the fast-paced world of web development.
                        I am eager to contribute to forward-thinking teams and build products that make a real difference.
                    </p>

                    {/* Quick Stats or Highlights can go here if needed in future */}
                    <div className="flex gap-6 mt-4">
                        <a href="#contact" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1">
                            Let's Talk <span className="text-xl">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
