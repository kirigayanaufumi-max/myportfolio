import React from "react";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "React",
      level: "Frontend",
      color: "#00ADB5",
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
      color: "#3178C6",
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
      color: "#339933",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#339933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: "PHP",
      level: "Backend",
      color: "#777BB4",
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
      color: "#4479A1",
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
      color: "#38B2AC",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#38B2AC">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: "Git",
      level: "DevOps",
      color: "#F05032",
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
      color: "#00E5FF",
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
      <div className="max-w-2xl space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-[#00ADB5] uppercase">
            Expertise
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-sm max-w-md">
            Here are the core programming languages, frameworks, databases, and technologies I specialize in.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#393E46]/50 border border-gray-700/30 hover:border-[#00ADB5]/50 p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:scale-105 hover:bg-[#393E46]/80 group shadow-md shadow-black/10"
            >
              <div className="p-3 bg-[#222831] rounded-xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-sm text-white tracking-wide">{skill.name}</h3>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
