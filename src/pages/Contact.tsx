import React, { useState } from "react";

const Contact: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("argiecalicaran.678@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 scroll-mt-24">
      <div className="bg-gradient-to-br from-[#00ADB5] to-[#1a2332] rounded-3xl p-8 md:p-10 text-white shadow-lg shadow-[#00ADB5]/5 relative overflow-hidden">
        {/* Background decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-20 -translate-y-20 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00ADB5]/10 rounded-full -translate-x-20 translate-y-20 blur-xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Get in Touch</h2>
            <p className="text-blue-50/90 text-sm max-w-md">
              Have an exciting project, job opening, or just want to chat about development? Feel free to reach out.
            </p>
          </div>

          <div className="w-full md:w-auto flex-shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full md:w-auto px-8 py-4 bg-white hover:bg-blue-50 text-[#222831] font-semibold rounded-xl text-center shadow-md transition-all duration-200 cursor-pointer"
            >
              Email
            </button>
          </div>
        </div>
      </div>
      {/* Email Info Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#222831] border border-gray-700/50 max-w-sm w-full rounded-2xl p-6 relative shadow-2xl flex flex-col gap-6 text-gray-200">
            
            {/* Close Icon Button */}
            <button
              onClick={() => setModalOpen(false)}
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
                onClick={handleCopy}
                className="px-3 py-1.5 bg-[#393E46] hover:bg-[#00ADB5]/20 text-gray-300 hover:text-[#00ADB5] border border-gray-700/50 hover:border-[#00ADB5]/30 rounded-lg text-[10px] sm:text-xs font-semibold tracking-wide transition duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                {copied ? (
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
              onClick={() => setModalOpen(false)}
              className="w-full py-3 bg-[#00ADB5] hover:bg-[#00E5FF] text-white font-semibold rounded-xl text-center shadow-md shadow-[#00ADB5]/20 hover:shadow-[#00E5FF]/20 transition-all duration-200 cursor-pointer block text-xs tracking-widest uppercase"
            >
              Open Mail App
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
