
import React from "react";

const Hero = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img
                src="/images/vishnu.jpg"
                className="rounded-full w-32 object-cover"
                alt="Vishnu"
            />
            <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3 dark:text-gray-200">
                Hi! I'm Vishnu T S
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[50px] font-bold dark:text-white">
                Frontend Web Developer
            </h1>
            <p className="max-w-2xl mx-auto dark:text-gray-300">
                I am a frontend developer from Kannur with a Master’s in Computer
                Applications (MCA).
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a
                    href="#contact"
                    className="px-11 py-3 border rounded-full border-gray-500 text-black bg-gray-100 flex items-center gap-2 dark:text-black dark:border-white hover:scale-105 transition"
                >
                    Contact Me
                </a>
                <a
                    href="../../public/docs/Vishnu-T-S-Frontend-Developer.pdf"
                    download
                    className="px-10 py-3 border rounded-full border-gray-500 text-black bg-gray-100 flex items-center gap-2 active:bg-white dark:text-black dark:border-white hover:scale-105 transition"
                >
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default Hero;
