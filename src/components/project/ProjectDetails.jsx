import React from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../../data/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 text-midnight-muted">
        Project not found
      </div>
    );
  }

  return (
    <div className="w-full px-[6%] md:px-[10%] py-16">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-midnight-text">
          {project.name}
        </h1>
        <p className="text-midnight-muted mt-3 max-w-2xl mx-auto text-lg">
          {project.description}
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">

        {/* LEFT SIDE - STORY */}
        <div className="space-y-6">

          {/* Overview Highlight Card */}
          <div className="p-6 rounded-2xl bg-midnight-card border border-midnight-border">
            <h2 className="text-lg font-semibold tracking-tight text-midnight-text mb-2">
              Overview
            </h2>
            <p className="text-midnight-muted leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem + Solution */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-5 rounded-2xl bg-midnight-surface border border-midnight-border">
              <h3 className="font-semibold tracking-tight text-midnight-text mb-2">
                Problem
              </h3>
              <p className="text-sm text-midnight-muted">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-midnight-surface border border-midnight-border">
              <h3 className="font-semibold tracking-tight text-midnight-text mb-2">
                Solution
              </h3>
              <p className="text-sm text-midnight-muted">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-3 gap-4">

            {/* Features */}
            <div className="p-5 rounded-2xl bg-midnight-card border border-midnight-border">
              <h3 className="font-semibold tracking-tight text-midnight-text mb-3">Features</h3>
              <ul className="space-y-2 text-sm text-midnight-muted">
                {project.features?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="p-5 rounded-2xl bg-midnight-card border border-midnight-border">
              <h3 className="font-semibold tracking-tight text-midnight-text mb-3">Challenges</h3>
              <ul className="space-y-2 text-sm text-midnight-muted">
                {project.challenges?.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div className="p-5 rounded-2xl bg-midnight-card border border-midnight-border">
              <h3 className="font-semibold tracking-tight text-midnight-text mb-3">Learnings</h3>
              <ul className="space-y-2 text-sm text-midnight-muted">
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
          <div className="rounded-2xl overflow-hidden border border-midnight-border bg-midnight-card">
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
              className="flex items-center justify-center gap-2 bg-midnight-accent text-midnight-bg font-semibold py-2.5 rounded-xl hover:bg-midnight-accent-hover transition-colors"
            >
              Live Demo <FaExternalLinkAlt />
            </a>

            <a
              href={project.github}
              target="_blank"
              className="flex items-center justify-center gap-2 border border-midnight-border bg-midnight-card py-2.5 rounded-xl hover:bg-midnight-surface hover:border-midnight-accent transition-colors text-midnight-text font-medium"
            >
              GitHub <FaGithub />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="p-5 rounded-2xl bg-midnight-card border border-midnight-border">
            <h3 className="text-lg font-semibold tracking-tight text-midnight-text mb-3">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.techTags?.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-md bg-midnight-surface border border-midnight-border text-midnight-muted"
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