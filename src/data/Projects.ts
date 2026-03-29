/*
 * File: src/data/Projects.ts
 * Author: Harshita Gawas
 * Description: Project data for the Portfolio application.
 * Created on: 19/03/2026
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
    title: "Beauty Product – Ecommerce Mobile App Solution",
    tags: ["UI/UX Design", "App Design", "Wireframe"],
    image: "/project",
    github: "https://github.com/example/project",
    live: "https://project-live.com",
  },
  {
    id: 2,
    title: "Landing Page Design",
    tags: ["UI/UX Design"],
    image: "/project2",
    live: "https://live-only.com",
  },
  {
    id: 3,
    title: "Coffee App",
    tags: ["App Design"],
    image: "/project3",
    github: "https://github.com/example/coffee",
  },
  {
    id: 4,
    title: "No Links Project",
    tags: ["Wireframe"],
    image: "/project4",
  },
];
