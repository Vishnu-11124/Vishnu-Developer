import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-500">
        Introduction
      </h4>
      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        About Me
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-20">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group hover:scale-[1.02] transition-transform duration-500">
            <img
              loading="lazy"
              src="/images/user.jpg"
              className="w-full h-full object-cover"
              alt="Vishnu"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 flex flex-col gap-6"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Building clean, responsive, and user-focused web experiences.
          </h3>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            I’m a frontend-focused developer with hands-on experience in
            React.js, TypeScript, Tailwind CSS, Node.js, Express.js, and
            MongoDB. I enjoy turning ideas into responsive, interactive web
            applications with clean UI, reusable components, and smooth user
            experiences.
          </p>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            I have worked on MERN stack projects and internships that
            strengthened my skills in API integration, state management,
            authentication, and responsive design. I’m currently learning
            Next.js and looking for opportunities as a Frontend Developer, React
            Developer, or Junior MERN Stack Developer.
          </p>

          {/* Quick Stats or Highlights can go here if needed in future */}
          <div className="flex gap-6 mt-4">
            <a
              href="#contact"
              className="text-slate-900 dark:text-slate-50 font-medium hover:text-slate-600 dark:hover:text-slate-300 flex items-center gap-2 transition-colors"
            >
              Let's Talk <span className="text-xl">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
