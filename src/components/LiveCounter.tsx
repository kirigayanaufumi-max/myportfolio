import React, { useState, useEffect } from "react";

const LiveCounter: React.FC = () => {
  // Start with a realistic initial viewer count
  const [viewers, setViewers] = useState(3);

  useEffect(() => {
    // Periodically update the viewer count to simulate dynamic activity
    const interval = setInterval(() => {
      setViewers((prev) => {
        // Random change of -2, -1, 0, 1, or 2
        const change = Math.floor(Math.random() * 5) - 2;
        const nextValue = prev + change;
        // Keep the count within a realistic range (e.g., 2 to 8 viewers)
        return Math.max(2, Math.min(8, nextValue));
      });
    }, 8000); // Fluctuate every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-[#393E46]/80 backdrop-blur-md border border-[#eeeeee]/5 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-lg shadow-black/30 select-none animate-fade-in">
      {/* Pulse Green Indicator */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      {/* Live Text */}
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-300">
        Live: <span className="text-[#00ADB5]">{viewers}</span> viewing
      </span>
    </div>
  );
};

export default LiveCounter;
