import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-6 scroll-mt-24">
      <div className="space-y-2 mb-8"> 
        <h2 className="text-3xl font-extrabold text-white hover:text-[#00ADB5] transition-colors duration-200 ">
          My Projects
        </h2>
        <p className="text-gray-400 text-sm hover:text-[#00ADB5] transition-colors duration-200 max-w-md">
          Full‑stack projects showcasing backend services, API integrations, developer automation, and clean interfaces — including systems I built during my college years that highlight my ability to design efficient solutions and integrate real‑world tools into academic projects.
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
