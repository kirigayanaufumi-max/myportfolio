import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-10 w-full text-left flex-shrink-0">
      <p className="text-sm font-medium">
        © {new Date().getFullYear()} Argie • Built with React + Tailwind
      </p>
    </footer>
  );
};

export default Footer;
