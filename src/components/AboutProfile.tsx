import React, { useState } from "react";
import profileImg from "../assets/profile.jpg";
import profilePng from "../assets/profile.png";

const AboutProfile: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-start text-left space-y-6 h-full justify-between text-gray-200 w-full pt-14 md:pt-28 pb-10 md:pb-20">
      <div className="space-y-6 w-full">
        {/* Header Block: Image and Name/Title Side-by-Side */}
        <div className="flex flex-row items-center gap-4 sm:gap-6 w-full">
          {/* Profile Image & Status Badge (swaps to profile.png on hover) */}
          <div
            className="relative inline-block flex-shrink-0 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? profilePng : profileImg}
              alt="Argie Calicaran Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl object-cover shadow-lg ring-4 ring-[#00ADB5]/10 transition-all duration-300 hover:scale-105"
            />
            <span className="absolute bottom-0.5 right-0.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-green-500 border-2 border-[#222831]"></span>
            </span>
          </div>

          {/* Name & Title (Always to the right of the picture on PC and mobile) */}
          <div className="space-y-1 sm:space-y-2 flex-grow">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-none whitespace-nowrap">
              Argie Calicaran
            </h1>
            <p className="text-sm sm:text-base font-semibold text-gray-400 tracking-wide uppercase leading-tight pt-1">
              PHP Developer <br />
              & UI/UX Designer
            </p>
          </div>
        </div>

        {/* Bio Paragraph (Flows below the image/title row) */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md pt-2">
          I build robust, high-performance web applications with a focus on custom integrations, automated email systems, and clean interfaces. Driven by efficiency and clean code.
        </p>
      </div>

      {/* Social Links & Footer CTA */}
      <div className="w-full space-y-6 pt-4">
        <div className="flex justify-start gap-4">
          <a
            href="https://github.com/argie"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#393E46] hover:bg-[#00ADB5]/20 text-gray-300 hover:text-[#00ADB5] rounded-xl transition duration-200"
            title="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/argie"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#393E46] hover:bg-[#00ADB5]/20 text-gray-300 hover:text-[#00ADB5] rounded-xl transition duration-200"
            title="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="mailto:argie@example.com"
            className="p-2.5 bg-[#393E46] hover:bg-[#00ADB5]/20 text-gray-300 hover:text-[#00ADB5] rounded-xl transition duration-200"
            title="Email Me"
          >
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
