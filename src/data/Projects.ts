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
}

/* All projects shown in the grid */
export const projects: Project[] = [
  {
    id: 1,
    title: "Beauty Product – Ecommerce Mobile App Solution",
    tags: ["UI/UX Design", "App Design", "Wireframe"],
    image: "/project",
  },
  {
    id: 2,
    title: "Beauty Product Mobile App Landing Page Design",
    tags: ["UI/UX Design", "Web Design", "Wireframe"],
    image: "/project2",
  },
  {
    id: 3,
    title: "Coffee Shop App – Coffee Ordering App Solution",
    tags: ["UI/UX Design", "App Design", "Wireframe"],
    image: "/project3",
  },
  {
    id: 4,
    title: "Coffee Shop Mobile App Landing Page Design",
    tags: ["UI/UX Design", "Web Design", "Wireframe"],
    image: "/project4",
  },
];
