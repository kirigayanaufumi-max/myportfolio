import React from "react";
import resumePdf from "../assets/developer-resume-template.pdf";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: "hero", label: "About" },
    { id: "portfolio", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 right-6 md:right-12 z-50 flex gap-4 sm:gap-6 items-center select-none bg-transparent">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 outline-none cursor-pointer ${
              isActive
                ? "text-[#00ADB5] drop-shadow-[0_0_8px_rgba(0,173,181,0.8)] scale-105"
                : "text-gray-400 hover:text-[#00ADB5] hover:drop-shadow-[0_0_8px_rgba(0,173,181,0.4)] hover:scale-105"
            }`}
          >
            {item.label}
          </a>
        );
      })}

      {/* Inline Resume Button (Open in new browser tab) */}
      <a
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 border border-[#00ADB5]/50 hover:border-[#00ADB5] hover:bg-[#00ADB5]/10 text-[10px] sm:text-xs text-[#00ADB5] font-bold tracking-widest uppercase rounded-none transition-all duration-300 hover:scale-105 shadow-sm shadow-[#00ADB5]/10 hover:shadow-[#00ADB5]/30 cursor-pointer"
      >
        Curriculum Vitae (CV)
      </a>
    </nav>
  );
};

export default Navbar;
