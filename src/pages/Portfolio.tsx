import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-6 scroll-mt-24">
      <div className="space-y-2 mb-8">
        <span className="text-xs font-semibold tracking-widest text-[#00ADB5] uppercase">
          My Work
        </span>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-sm max-w-md">
          A selection of projects focusing on backend services, API integrations, and developer automation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
