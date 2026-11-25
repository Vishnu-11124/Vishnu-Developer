import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      id="about"
      className="w-full px-[8%] md:px-[12%] py-20 scroll-mt-10"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400 mb-3">
          Get to Know Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          About Me
        </h2>
      </div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col gap-6"
      >
        <h3 className="text-2xl md:text-3xl font-semibold leading-snug text-slate-900 dark:text-slate-50">
          Turning ideas into meaningful digital experiences through code.
        </h3>

        <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          I'm a passionate Full Stack Developer who enjoys building modern,
          responsive, and user-friendly web applications. With hands-on
          experience in the MERN stack and modern frontend technologies, I focus
          on creating intuitive interfaces backed by reliable and scalable
          backend systems.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Through internships and personal projects, I've gained practical
          experience in developing REST APIs, implementing authentication,
          managing application state, integrating databases, and building
          complete end-to-end web applications. I enjoy exploring new
          technologies, solving problems, and continuously improving the way I
          write and structure code.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Currently, I'm expanding my knowledge of Next.js, TypeScript, Prisma,
          and backend technologies while strengthening my problem-solving
          skills. I'm always excited to take on new challenges, collaborate with
          others, and turn creative ideas into real-world applications.
        </p>

        {/* Contact Link */}
        <div className="mt-9 pl-5 md:pl-7">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-slate-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-slate-900 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Let's Work Together
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
