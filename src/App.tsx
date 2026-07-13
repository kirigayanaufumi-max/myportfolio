import React from "react";
import AboutProfile from "./components/AboutProfile";
import Hero from "./components/Hero";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen md:h-screen flex flex-col bg-[#222831] overflow-x-hidden md:overflow-hidden text-gray-100">
      {/* Middle Layout Container */}
      <div className="flex-grow flex flex-col md:flex-row overflow-x-hidden md:overflow-hidden w-full max-w-7xl mx-auto bg-[#222831] px-6 sm:px-10 md:px-16 gap-8 md:gap-16 lg:gap-20 xl:gap-24 md:h-screen">
        {/* Left Side: Profile sidebar (minimum 400px on desktop to accommodate larger text sizes) */}
        <aside className="w-full md:w-[35%] md:min-w-[400px] bg-[#222831] flex-shrink-0 md:h-full md:overflow-y-auto">
          <AboutProfile />
        </aside>

        {/* Right Side: Main content sections and Footer */}
        <main className="w-full md:w-[65%] md:h-full md:overflow-y-auto scroll-smooth flex flex-col justify-between bg-[#222831]">
          <div className="w-full pt-10 md:pt-20 space-y-12">
            <Hero />
            <Portfolio />
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
