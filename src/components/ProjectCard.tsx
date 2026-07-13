import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, link }) => {
  return (
    <div className="group bg-[#393E46] rounded-3xl p-8 shadow-md hover:shadow-2xl hover:shadow-[#00ADB5]/5 transition-all duration-300 flex flex-col justify-between h-full">
      <div className="space-y-5">
        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-[#00ADB5] transition-colors duration-200">
          {title}
        </h3>
        
        {/* Project Description */}
        <p className="text-gray-300 text-base leading-relaxed">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-[#222831] text-gray-300 text-sm font-medium rounded-xl"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Link */}
      <div className="pt-8">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-base font-semibold text-[#00ADB5] hover:text-[#00E5FF] group/link"
        >
          View Project
          <svg
            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
