import React from "react";

const Skills: React.FC = () => {
  const softSkills = [
    {
      name: "Problem Solving",
      desc: "Analyzing complex logic and debugging codebases efficiently.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#00ADB5" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      name: "Collaboration",
      desc: "Bridging communication between technical teams and clients.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#00ADB5" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: "Adaptability",
      desc: "Quickly picking up new frameworks, libraries, and integrations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#00ADB5" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4" />
        </svg>
      ),
    },
    {
      name: "Detail Oriented",
      desc: "Ensuring structured code, robust logic, and secure API layers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#00ADB5" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const techSkills = [
    {
      name: "React",
      level: "Frontend",
      icon: (
        <svg className="w-8 h-8" viewBox="-11.5 -10.2 23 20.4" fill="none" stroke="#00ADB5" strokeWidth="1">
          <circle cx="0" cy="0" r="2" fill="#00ADB5" />
          <g stroke="#00ADB5">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      level: "Language",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#3178C6">
          <rect width="24" height="24" rx="4" />
          <text x="18" y="19" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="end">TS</text>
        </svg>
      ),
    },
    {
      name: "Node.js",
      level: "Backend",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#339933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "PHP",
      level: "Backend",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#777BB4" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="6" />
          <text x="12" y="15" fill="#777BB4" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PHP</text>
        </svg>
      ),
    },
    {
      name: "MySQL",
      level: "Database",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#4479A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6c0 1.66 4 3 9 3s9-1.34 9-3-4-3-9-3-9 1.34-9 3z" />
          <path d="M4 6v6c0 1.66 4 3 9 3s9-1.34 9-3V6" />
          <path d="M4 12v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      level: "Styling",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#38B2AC">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: "Git",
      level: "DevOps",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 15V9a4 4 0 0 0-4-4H9" />
          <line x1="6" y1="9" x2="6" y2="15" />
        </svg>
      ),
    },
    {
      name: "APIs",
      level: "Backend",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="pb-12 scroll-mt-24">
      <div className="max-w-2xl space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold hover:text-[#00ADB5] transition-colors duration-200 ">
            My Skills
          </h2>
          <p className="text-gray-400 text-sm hover:text-[#00ADB5] transition-colors duration-200 max-w-md">
            A combination of professional work values and technical stack capabilities.
          </p>
        </div>

        {/* Soft Skills Section (First) */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white tracking-wide pb-2">
            Core Attributes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#393E46]/30 border border-gray-700/20 hover:border-[#00ADB5]/50 p-5 rounded-md flex items-start gap-4 transition-all duration-300 hover:scale-[1.02] hover:bg-[#393E46]/60 group shadow-md shadow-black/10"
              >
                <div className="p-2.5 bg-[#222831] rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-white tracking-wide">{skill.name}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section (Second) */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white tracking-wide pb-2">
            Technical Stack
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#393E46]/30 border border-gray-700/20 hover:border-[#00ADB5]/50 p-5 rounded-md flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:scale-105 hover:bg-[#393E46]/60 group shadow-md shadow-black/10"
              >
                <div className="p-3 bg-[#222831] rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-sm text-white tracking-wide">{skill.name}</h4>
                  <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
