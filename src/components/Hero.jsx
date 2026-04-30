
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <motion.img
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                src="/images/vishnu.jpg"
                className="rounded-full w-32 object-cover"
                alt="Vishnu"
            />
            <motion.h3 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 text-xl md:text-2xl mb-3 dark:text-gray-200"
            >
                Hi! I'm Vishnu T S
            </motion.h3>
            <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-6xl lg:text-[50px] font-bold dark:text-white"
            >
                Frontend Web Developer
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-2xl mx-auto dark:text-gray-300"
            >
                I am a frontend developer from Kannur with a Master’s in Computer
                Applications (MCA).
            </motion.p>

            <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-4"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-11 py-3 border rounded-full border-gray-500 text-black bg-gray-100 flex items-center gap-2 dark:text-black dark:border-white"
                >
                    Contact Me
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/docs/Vishnu-T-S-Frontend-Developer.pdf"
                    download
                    className="px-10 py-3 border rounded-full border-gray-500 text-black bg-gray-100 flex items-center gap-2 active:bg-white dark:text-black dark:border-white"
                >
                    Download CV
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Hero;
