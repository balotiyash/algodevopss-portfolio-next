/**
 * File: src/components/MoreProjects/ProjectsList.tsx
 * Author: Harshita Gawas
 * Description: Projects list  for the More Projects page.
 * Created on: 20/03/2026
 * Last Modified: 31/03/2026
 */

import type { MoreProject } from "@/data/MoreProject";
import styles from "./ProjectsList.module.css";
import { ProjectRow } from "./ProjectRow";

type ProjectsListProps = {
  // Array of paginated projects to display.
  projects: MoreProject[];
  // Current active page number.
  currentPage: number;
};

// Purpose: Render paginated project rows with optional intro text on first page.
export const ProjectsList = ({ projects, currentPage }: ProjectsListProps) => {
  return (
    <div className={styles.projectsContainer}>
      {/* Show intro text only on first page */}
      {currentPage === 1 && (
        <div className={styles.intro}>
          <p className={styles.introText}>
            Explore my comprehensive portfolio of completed projects showcasing
            diverse technical skills, design thinking, and problem-solving
            abilities across various domains and technologies.
          </p>
        </div>
      )}

      {/* Projects list */}
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};
