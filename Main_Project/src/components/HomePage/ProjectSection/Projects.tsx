/*
 * File: src/components/HomePage/ProjectSection/Projects.tsx
 * Author: Harshita Gawas
 * Description: Project section of the Portfolio application.
 * Created on: 29/03/2026
 * Last Modified: 31/03/2026
 */

import { projects } from "@/data/Projects";
import styles from "./Projects.module.css";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectsGrid } from "./ProjectsGrid";

export const Projects = () => {
  return (
    // Main Projects section anchor for homepage navigation.
    <section id="projects" className={styles.section}>
      {/* Centered layout container for header + project cards */}
      <div className={styles.container}>
        {/* Section heading row with "View All Projects" action */}
        <ProjectsHeader />
        {/* Grid renderer for project items */}
        <ProjectsGrid items={projects} />
      </div>
    </section>
  );
};
