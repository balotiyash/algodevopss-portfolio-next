export interface ResumeProjectLink {
  label: string;
  url: string;
}

export interface ResumeProject {
  id: number;
  title: string;
  timeline?: string;
  description: string;
  techStack: string[];
  links?: ResumeProjectLink[];
  images?: string[];
}

export const projects: ResumeProject[] = [
  {
    id: 1,
    title: "AlgoDevOps Portfolio",
    timeline: "2025 - Present",
    description:
      "A personal portfolio focused on DevOps workflows, frontend delivery quality, and structured resume-style storytelling.",
    techStack: [
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "Vercel",
      "GitHub Actions",
    ],
    links: [
      { label: "Live Site", url: "https://example.com" },
      { label: "Source Code", url: "https://github.com/example/repo" },
    ],
    images: ["/pngs/try.png", "/pngs/try.png"],
  },
  {
    id: 2,
    title: "Cloud CI/CD Blueprint",
    timeline: "2024 - 2025",
    description:
      "A reusable CI/CD template that standardizes build, test, security checks, and deployment gates for small product teams.",
    techStack: ["Docker", "GitHub Actions", "Azure", "Terraform", "SonarQube"],
    links: [
      { label: "Documentation", url: "https://example.com/docs" },
      { label: "Demo", url: "https://example.com/demo" },
    ],
    images: ["/pngs/try.png", "/pngs/try.png", "/pngs/try.png"],
  },
];
