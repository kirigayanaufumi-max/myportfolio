interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Google Drive API Integration",
    description: "Built add/delete file operations with manual dependency management.",
    tech: ["PHP", "Google API", "SQL"],
    link: "https://github.com/argie/project"
  },
  {
    title: "PHPMailer Notifications",
    description: "Automated email alerts for user actions.",
    tech: ["PHP", "PHPMailer"],
    link: "https://github.com/argie/mailer"
  },
  {
    title: "Real-Time Integration Dashboard",
    description: "Built a Vite + React dashboard that tracks Google API quotas, logs automated PHPMailer events, and displays execution stats from a Node.js/Express backend.",
    tech: ["React", "TypeScript", "Node.js", "MySQL"],
    link: "https://github.com/argie/integration-dashboard"
  }
];

export default projects;
