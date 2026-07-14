import React, { useRef, useState, useEffect } from "react";
import AboutProfile from "./components/AboutProfile";
import Skills from "./components/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("portfolio");
  const [collapsed, setCollapsed] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("argiecalicaran.678@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleAsideWheel = (e: React.WheelEvent) => {
    if (mainRef.current) {
      mainRef.current.scrollTop += e.deltaY * 1.5;
    }
  };

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 768; // md breakpoint
      const currentScroll = isDesktop ? 0 : window.scrollY;

      // Header show/hide on scroll for mobile
      if (!isDesktop) {
        if (currentScroll > lastScroll && currentScroll > 80) {
          setNavVisible(false);
        } else if (currentScroll < lastScroll) {
          setNavVisible(true);
        }
        lastScroll = currentScroll;
      } else {
        setNavVisible(true);
      }

      // Scrollspy logic
      const sections = isDesktop
        ? ["portfolio", "skills", "contact"]
        : ["profile", "portfolio", "skills", "contact"];
      
      let currentActive = "portfolio";
      const threshold = window.innerHeight / 2; // Midpoint of viewport

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section has crossed the middle of the viewport, make it active
          if (rect.top <= threshold) {
            currentActive = id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    // Use capture phase (true) so the window catches scroll events bubbling up from scrollable child elements (like <main> on desktop)
    window.addEventListener("scroll", handleScroll, { capture: true });
    
    // Initial check
    handleScroll();

    // Re-check on resize
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen md:h-screen flex flex-col bg-[#222831] overflow-x-hidden md:overflow-hidden text-gray-100 relative w-full pt-16 md:pt-0">
      {/* Floating Navigation Bar */}
      <Navbar activeSection={activeSection} visible={navVisible} />

      {/* Vertical Social Icons Stack when Collapsed */}
      {collapsed && (
        <div className="fixed bottom-10 left-6 md:bottom-20 z-50 flex flex-col gap-4 animate-fade-in">
          <a
            href="https://github.com/kirigayanaufumi-max"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#393E46]/80 hover:bg-[#00ADB5]/20 text-gray-300 hover:text-[#00ADB5] rounded-xl transition duration-200 border border-[#eeeeee]/5 backdrop-blur-sm shadow-lg shadow-black/30 hover:scale-105"
            title="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#393E46]/80 hover:bg-[#00ADB5]/20 text-gray-300 hover:text-[#00ADB5] rounded-xl transition duration-200 border border-[#eeeeee]/5 backdrop-blur-sm shadow-lg shadow-black/30 hover:scale-105"
            title="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#393E46]/80 hover:bg-[#00ADB5]/20 text-gray-300 hover:text-[#00ADB5] rounded-xl transition duration-200 border border-[#eeeeee]/5 backdrop-blur-sm shadow-lg shadow-black/30 hover:scale-105"
            title="Instagram"
          >
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <button
            onClick={() => setEmailModalOpen(true)}
            className="p-2.5 bg-[#393E46]/80 hover:bg-[#00ADB5]/20 text-gray-300 hover:text-[#00ADB5] rounded-xl transition duration-200 border border-[#eeeeee]/5 backdrop-blur-sm shadow-lg shadow-black/30 hover:scale-105 cursor-pointer outline-none"
            title="Email Me"
          >
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      )}

      {/* Dynamic Background Particles */}
      <ParticleBackground />

      {/* Main Column Layout Container */}
      <div className={`flex-grow flex flex-col md:flex-row overflow-x-hidden md:overflow-hidden w-full bg-transparent md:h-screen relative z-10 transition-all duration-300 ${
        collapsed ? "gap-0" : "gap-8 md:gap-36"
      } portfolio-container`}>
        
        {/* Left Column Wrapper: controls collapse layout width */}
        <div id="profile" className={`relative flex-shrink-0 transition-all duration-300 ${
          collapsed
            ? "w-0 h-0 md:w-0 md:min-w-0 p-0"
            : "w-full md:w-1/3 md:min-w-[420px]"
        }`}>
          <aside
            className={`w-full h-full md:h-screen md:overflow-y-auto pt-12 md:pt-28 pb-10 md:pb-20 px-6 sm:px-10 md:pl-8 md:pr-0 transition-all duration-300 ${
              collapsed
                ? "w-0 h-0 overflow-hidden opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
            onWheel={handleAsideWheel}
          >
            <AboutProfile onEmailClick={() => setEmailModalOpen(true)} />
          </aside>

          {/* Toggle Sidebar Button: absolute inside column when expanded, fixed top-left when collapsed (desktop only) */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`z-50 hidden md:flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-200 hover:text-[#00ADB5] transition-all duration-300 hover:scale-105 cursor-pointer outline-none select-none ${
              collapsed
                ? "fixed top-6 left-6"
                : "absolute top-6 left-6 md:left-auto md:right-4"
            }`}
            title={collapsed ? "Expand Profile" : "Collapse Profile"}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                collapsed ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Profile</span>
          </button>
        </div>

        {/* Right Column: Flexible width (flex-1) and scrollable (overflow-y-scroll) on desktop */}
        <main
          ref={mainRef}
          className={`w-full md:flex-1 md:h-screen md:overflow-y-scroll scroll-smooth bg-transparent pt-12 md:pt-28 flex flex-col justify-between scrollbar scrollbar-thin scrollbar-thumb-[#393E46] hover:scrollbar-thumb-[#00ADB5] scrollbar-track-transparent portfolio-main transition-all duration-300 ${
            collapsed
              ? "pl-20 pr-6 sm:pl-24 sm:pr-10 md:pl-20 md:pr-8"
              : "px-6 sm:px-10 md:pl-0 md:pr-8"
          }`}
        >
          <div className="w-full space-y-12 pb-12">
            <Portfolio />
            <Skills />
            <Contact />
          </div>
          {/* Footer spans the full width at the bottom of the right column */}
          <Footer />
        </main>
      </div>

      {/* Global Email Info Modal for Profile / Collapsed Stack */}
      {emailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#222831] border border-gray-700/50 max-w-sm w-full rounded-2xl p-6 relative shadow-2xl flex flex-col gap-6 text-gray-200">
            
            {/* Close Icon Button */}
            <button
              onClick={() => setEmailModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Heading */}
            <div className="space-y-1 pt-2">
              <h3 className="text-lg font-bold text-white">Contact Email</h3>
              <p className="text-gray-400 text-xs">Copy my email or open it directly inside your preferred email app.</p>
            </div>

            {/* Email Address Panel with Copy button */}
            <div className="flex items-center justify-between gap-3 bg-[#393E46]/50 border border-gray-700/50 p-3 rounded-xl">
              <span className="text-xs sm:text-sm font-semibold select-all text-[#00ADB5] overflow-x-auto whitespace-nowrap scrollbar-none">
                argiecalicaran.678@gmail.com
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 bg-[#393E46] hover:bg-[#00ADB5]/20 text-gray-300 hover:text-[#00ADB5] border border-gray-700/50 hover:border-[#00ADB5]/30 rounded-lg text-[10px] sm:text-xs font-semibold tracking-wide transition duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                {emailCopied ? (
                  <>
                    <svg className="w-3.5 h-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Action Button: Open Mail App */}
            <a
              href="mailto:argiecalicaran.678@gmail.com"
              onClick={() => setEmailModalOpen(false)}
              className="w-full py-3 bg-[#00ADB5] hover:bg-[#00E5FF] text-white font-semibold rounded-xl text-center shadow-md shadow-[#00ADB5]/20 hover:shadow-[#00E5FF]/20 transition-all duration-200 cursor-pointer block text-xs tracking-widest uppercase"
            >
              Open Mail App
            </a>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
