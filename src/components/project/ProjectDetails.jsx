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
        <h1 className="text-4xl md:text-5xl font-bold dark:text-white">
          {project.name}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          {project.description}
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">

        {/* LEFT SIDE - STORY */}
        <div className="space-y-6">

          {/* Overview Highlight Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-lg font-semibold mb-2 dark:text-white">
              Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem + Solution */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                Problem
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20">
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                Solution
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-3 gap-4">

            {/* Features */}
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold mb-3 dark:text-white">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {project.features?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold mb-3 dark:text-white">Challenges</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {project.challenges?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold mb-3 dark:text-white">Learnings</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
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
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800">
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
              className="flex items-center justify-center gap-2 bg-violet-600 text-white py-2 rounded-xl hover:bg-violet-700 transition"
            >
              Live Demo <FaExternalLinkAlt />
            </a>

            <a
              href={project.github}
              target="_blank"
              className="flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition dark:text-white"
            >
              GitHub <FaGithub />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.techTags?.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
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