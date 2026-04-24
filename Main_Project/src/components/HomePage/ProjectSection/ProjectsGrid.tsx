/*
 * File: src/components/HomePage/ProjectSection/ProjectsGrid.tsx
 * Author: Harshita Gawas
 * Description: Project grid component for the Portfolio application.
 * Created on: 29/03/2026
 * Last Modified: 31/03/2026
 */

import type { Project } from "@/data/Projects";
import gridStyles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

type ProjectsGridProps = {
  // Array of project entries passed from the parent section.
  items: Project[];
};

export const ProjectsGrid = ({ items }: ProjectsGridProps) => {
  return (
    // Responsive grid wrapper for project cards.
    <div className={gridStyles.grid}>
      {/* Render one card per project item */}
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
