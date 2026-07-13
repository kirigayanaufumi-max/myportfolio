import React, { useRef, useState, useEffect } from "react";
import AboutProfile from "./components/AboutProfile";
import Hero from "./components/Hero";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("hero");

  const handleAsideWheel = (e: React.WheelEvent) => {
    if (mainRef.current) {
      mainRef.current.scrollTop += e.deltaY * 1.5;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "portfolio", "contact"];
      const scrollContainer = mainRef.current;
      
      const isDesktop = window.innerWidth >= 768; // md breakpoint

      // Check if scroll is at the very bottom
      let isBottom = false;
      if (isDesktop && scrollContainer) {
        isBottom = Math.abs(scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollContainer.scrollTop) < 20;
      } else {
        isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;
      }

      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // Find the active section based on scroll position relative to threshold
      let currentActive = "hero";
      let minDistance = Infinity;
      const targetY = 150; // Threshold from viewport top

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - targetY);

          if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (distance < minDistance) {
              minDistance = distance;
              currentActive = id;
            }
          }
        }
      });

      setActiveSection(currentActive);
    };

    const scrollContainer = mainRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Re-check on resize in case layout changes
    window.addEventListener("resize", handleScroll);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen md:h-screen flex flex-col bg-[#222831] overflow-x-hidden md:overflow-hidden text-gray-100 relative w-full pt-16 md:pt-0">
      {/* Floating Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Dynamic Background Particles */}
      <ParticleBackground />

      {/* Main Column Layout Container (Capped at max-w-[1440px], outer margins adjusted to 32px (md:pl-8/md:pr-8) to free up horizontal space) */}
      <div className="flex-grow flex flex-col md:flex-row overflow-x-hidden md:overflow-hidden w-full bg-transparent md:h-screen relative z-10 gap-8 md:gap-36 portfolio-container">
        {/* Left Column: Fixed width (w-1/3, minimum 420px on desktop) and full height (h-screen) on desktop */}
        <aside
          className="w-full md:w-1/3 md:min-w-[420px] bg-transparent flex-shrink-0 md:h-screen md:overflow-y-auto px-6 sm:px-10 md:pl-8 md:pr-0 pt-12 md:pt-28 pb-10 md:pb-20"
          onWheel={handleAsideWheel}
        >
          <AboutProfile />
        </aside>

        {/* Right Column: Flexible width (flex-1) and scrollable (overflow-y-scroll) on desktop */}
        <main
          ref={mainRef}
          className="w-full md:flex-1 md:h-screen md:overflow-y-scroll scroll-smooth bg-transparent px-6 sm:px-10 md:pl-0 md:pr-8 pt-12 md:pt-28 flex flex-col justify-between scrollbar scrollbar-thin scrollbar-thumb-[#393E46] hover:scrollbar-thumb-[#00ADB5] scrollbar-track-transparent portfolio-main"
        >
          <div className="w-full space-y-12 pb-12">
            <Hero />
            <Portfolio />
            <Contact />
          </div>
          {/* Footer spans the full width at the bottom of the right column */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
