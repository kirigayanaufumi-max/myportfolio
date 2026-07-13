import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex flex-col justify-start pb-12">
      <div className="max-w-2xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ADB5]/10 text-[#00ADB5] text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ADB5] animate-pulse"></span>
          Focusing on Backend & UI/UX
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Crafting efficient <br />
          <span className="bg-gradient-to-r from-[#00ADB5] to-[#00E5FF] bg-clip-text text-transparent">
            web applications
          </span>{" "}
          & APIs.
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
          I'm a backend-focused developer who loves building performant API integrations, automated systems, and clean interfaces that users love. Check out some of my work below.
        </p>
      </div>
    </section>
  );
};

export default Hero;
