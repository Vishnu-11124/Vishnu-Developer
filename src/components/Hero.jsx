
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
                className="flex items-center gap-2 text-xl md:text-2xl mb-3 text-slate-600 dark:text-slate-300 tracking-tight"
            >
                Hi! I'm Vishnu T S
            </motion.h3>
            <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white"
            >
                Frontend Developer
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg leading-relaxed"
            >
                I build responsive, user-friendly web applications using React.js, TypeScript, Next.js, Tailwind CSS, and MERN stack technologies.
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
                    className="px-8 py-3 rounded-lg bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-950 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                >
                    Contact Me
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/docs/Vishnu-T-S-Frontend-Developer.pdf"
                    download
                    className="px-8 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-slate-50 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    Download CV
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Hero;
