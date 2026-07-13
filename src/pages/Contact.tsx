import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12">
      <div className="space-y-2 mb-10">
        <span className="text-xs font-semibold tracking-widest text-[#00ADB5] uppercase">
          Connect
        </span>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-sm max-w-md">
          Have an exciting project, job opening, or just want to chat about development? Feel free to reach out.
        </p>
      </div>

      <div className="bg-gradient-to-br from-[#00ADB5] to-[#1a2332] rounded-3xl p-8 md:p-10 text-white shadow-lg shadow-[#00ADB5]/5 relative overflow-hidden">
        {/* Background decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-20 -translate-y-20 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00ADB5]/10 rounded-full -translate-x-20 translate-y-20 blur-xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Let's build something together</h3>
            <p className="text-blue-50/90 text-sm max-w-md">
              I am currently open to freelance opportunities, contracts, and full-time software engineering roles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="mailto:argie@example.com"
              className="px-6 py-3.5 bg-white hover:bg-blue-50 text-[#222831] font-semibold rounded-xl text-center shadow-md transition-all duration-200"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/argie"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-center transition-all duration-200"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
