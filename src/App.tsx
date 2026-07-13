import React from "react";
import AboutProfile from "./components/AboutProfile";
import Hero from "./components/Hero";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

const App: React.FC = () => {
  return (
    <div className="min-h-screen md:h-screen flex flex-col bg-[#222831] overflow-x-hidden md:overflow-hidden text-gray-100 relative w-full">
      {/* Dynamic Background Particles */}
      <ParticleBackground />

      {/* Main Column Layout Container (Capped at max-w-[1440px], outer margins set to 48px, center gap set to 144px) */}
      <div className="flex-grow flex flex-col md:flex-row overflow-x-hidden md:overflow-hidden w-full max-w-[1440px] mx-auto bg-transparent md:h-screen relative z-10 gap-8 md:gap-36">
        {/* Left Column: Fixed width (w-1/3) and full height (h-screen) on desktop */}
        <aside className="w-full md:w-1/3 bg-transparent flex-shrink-0 md:h-screen md:overflow-y-auto px-6 sm:px-10 md:pl-12 md:pr-0 pt-14 md:pt-28 pb-10 md:pb-20">
          <AboutProfile />
        </aside>

        {/* Right Column: Flexible width (flex-1) and scrollable (overflow-y-scroll) on desktop */}
        <main className="w-full md:flex-1 md:h-screen md:overflow-y-scroll scroll-smooth bg-transparent px-6 sm:px-10 md:pl-0 md:pr-12 pt-10 md:pt-28 flex flex-col justify-between">
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
