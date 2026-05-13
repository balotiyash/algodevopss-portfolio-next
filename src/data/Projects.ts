/*
 * File: src/data/Projects.ts
 * Author: Harshita Gawas, Neha Balotia, Yash Balotiya
 * Description: Project data for the Portfolio application.
 * Created on: 24/04/2026
 * Last modified: 13/05/2026
 */

/* Project data for the portfolio grid */

/* Shape of each project entry */
export interface Project {
  id: number;
  title: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
}

/* All projects shown in the grid */
export const projects: Project[] = [
  {
    id: 1,
    title: "Rupie-Finance  -  Smart Loan Processing System ",
    tags: ["Next JS", "CSS", "Typescript", "Hostinger", "Laravel", "VPS"],
    image: "/projects/rupie-finance/1.png",
    github: "https://github.com/balotiyash/rupie-finance-next",
    live: "https://rupiefinance.com/",
  },
  {
    id: 2,
    title: "IJREAM - Research Paper",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "PWA", "Hostinger VPS"],
    image: "/projects/ijream/1.png",
    github: "https://algodevopss.in/projects/ijream/",
    live: "https://ijream.aytechinsight.com/",
  },
  {
    id: 3,
    title: "Analytical Equipment Soulutions",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySql", "Hostinger"],
    image: "/projects/aes/1.png",
    github: "https://github.com/balotiyash/aes-frontend-pbl",
    live: "https://www.analyticalequipmentsolutions.com/",
  },
  {
    id: 4,
    title: "Guide Motor Training School - Desktop App",
    tags: ["Electron.js", "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "SQLite3", "Windows Installer", "Mac DMG", "Linux AppImage", "SMS API"],
    image: "/projects/guide-mts/1.png",
    github: "https://github.com/balotiyash/guide-mts-electron",
    live: "https://algodevopss.in/projects/guide-mts",
  },
];
