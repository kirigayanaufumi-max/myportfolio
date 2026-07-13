import React, { useState, useEffect } from "react";
import resumePdf from "../assets/developer-resume-template.pdf";

interface NavbarProps {
  activeSection: string;
  visible?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, visible = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "profile", label: "Profile", mobileOnly: true },
    { id: "hero", label: "About" },
    { id: "portfolio", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Auto-close mobile menu when navbar hides on scroll down
  useEffect(() => {
    if (!visible) {
      setMenuOpen(false);
    }
  }, [visible]);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-6 z-50 flex gap-3 sm:gap-4 items-center select-none bg-transparent transition-all duration-300 ${
      visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 pointer-events-none"
    } left-6 md:left-auto md:right-12`}>
      
      {/* Desktop Links (Hidden on Mobile) */}
      <div className="hidden md:flex gap-6 items-center">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 outline-none cursor-pointer ${
                item.mobileOnly ? "md:hidden" : ""
              } ${
                isActive
                  ? "text-[#00ADB5] drop-shadow-[0_0_8px_rgba(0,173,181,0.8)] scale-105"
                  : "text-gray-400 hover:text-[#00ADB5] hover:drop-shadow-[0_0_8px_rgba(0,173,181,0.4)] hover:scale-105"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Mobile Controls Wrapper: Styled background on mobile, transparent/layout-less on desktop */}
      <div className="flex md:contents items-center gap-2 bg-[#393E46]/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-gray-700/50 md:border-none p-1.5 md:p-0 rounded-none shadow-lg shadow-black/30 md:shadow-none z-50">
        {/* Hamburger Menu Button (Mobile Only, rendered first so it sits on the left on mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1.5 text-gray-300 hover:text-[#00ADB5] transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Inline Resume Button (Always Visible) */}
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-[#00ADB5]/50 hover:border-[#00ADB5] hover:bg-[#00ADB5]/10 text-xs text-[#00ADB5] font-bold tracking-widest uppercase rounded-none transition-all duration-300 hover:scale-105 shadow-sm shadow-[#00ADB5]/10 hover:shadow-[#00ADB5]/30 cursor-pointer"
        >
          Resume
        </a>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-14 left-0 md:left-auto md:right-0 w-36 bg-[#393E46]/95 backdrop-blur-md border border-gray-700/50 rounded-xl py-2.5 px-3 shadow-xl flex flex-col gap-2.5 animate-fade-in md:hidden">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  handleNavClick(e, item.id);
                  setMenuOpen(false);
                }}
                className={`text-[10px] font-bold tracking-widest uppercase transition-all duration-200 py-1.5 px-2 rounded-lg cursor-pointer text-center ${
                  isActive
                    ? "text-[#00ADB5] bg-[#00ADB5]/10 drop-shadow-[0_0_8px_rgba(0,173,181,0.6)]"
                    : "text-gray-300 hover:text-gray-100 hover:bg-gray-700/30"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
