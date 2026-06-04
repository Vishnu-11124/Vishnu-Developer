import React from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../data/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 text-gray-500">
        Project not found
      </div>
    );
  }

  return (
    <div className="w-full px-[6%] md:px-[10%] py-16">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          {project.name}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto text-lg">
          {project.description}
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">

        {/* LEFT SIDE - STORY */}
        <div className="space-y-6">

          {/* Overview Highlight Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white mb-2">
              Overview
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem + Solution */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <h3 className="font-semibold tracking-tight text-slate-900 dark:text-white mb-2">
                Problem
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <h3 className="font-semibold tracking-tight text-slate-900 dark:text-white mb-2">
                Solution
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-3 gap-4">

            {/* Features */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="font-semibold tracking-tight text-slate-900 dark:text-white mb-3">Features</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {project.features?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="font-semibold tracking-tight text-slate-900 dark:text-white mb-3">Challenges</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {project.challenges?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="font-semibold tracking-tight text-slate-900 dark:text-white mb-3">Learnings</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {project.learnings?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE - ACTION PANEL */}
        <div className="space-y-6 lg:sticky lg:top-20 h-fit">

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <a
              href={project.live}
              target="_blank"
              className="flex items-center justify-center gap-2 bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-950 font-medium py-2 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
            >
              Live Demo <FaExternalLinkAlt />
            </a>

            <a
              href={project.github}
              target="_blank"
              className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-slate-50 font-medium"
            >
              GitHub <FaGithub />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white mb-3">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.techTags?.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-md bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;