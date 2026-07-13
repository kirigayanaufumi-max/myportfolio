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
  }
];

export default projects;
