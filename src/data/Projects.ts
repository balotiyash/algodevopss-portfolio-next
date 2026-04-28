/*
 * File: src/data/Projects.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Project data for the Portfolio application.
 * Created on: 24/04/2026
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
    title: "Guide-MTS  -  Driving School Management System",
    tags: ["UI/UX Design", "App Design", "Wireframe", "Electron JS"],
    image: "/projects/guide-mts/1.png",
    github: "https://github.com/balotiyash/guide-mts-electron",
    // live: "https://project-live.com",
  },
  {
    id: 2,
    title: "Rupie-Finance  -  Smart Loan Processing System ",
    tags: ["UI/UX Design", "Website", "Mobile App", "Next JS"],
    image: "/projects/rupie-finance/1.png",
    github: "https://github.com/balotiyash/rupie-finance-next",
    live: "https://rupiefinance.com/",
  },
  {
    id: 3,
    title: "IJREAM - Research Paper",
    tags: ["Research Paper", "IITB"],
    image: "/projects/ijream/1.png",
    github: "https://github.com/balotiyash/",
    live: "https://ijream.aytechinsight.com/",
  },
  {
    id: 4,
    title: "Analytical Equipment Soulutions",
    tags: ["Website", "UI/UX Design", "PHP"],
    image: "/projects/aes/1.png",
    github: "https://github.com/balotiyash/aes-frontend-pbl",
    live: "https://www.analyticalequipmentsolutions.com/",
  },
];
