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
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#portfolio"
            className="px-6 py-3.5 bg-[#00ADB5] hover:bg-[#00979e] text-[#222831] font-bold rounded-xl shadow-md shadow-[#00ADB5]/10 hover:shadow-lg hover:shadow-[#00ADB5]/20 transition-all duration-200"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 bg-[#393E46] hover:bg-[#00ADB5]/20 text-gray-200 hover:text-white font-medium rounded-xl transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
