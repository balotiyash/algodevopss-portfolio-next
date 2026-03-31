/**
 * File: src/components/MoreProjects/ProjectRow.tsx
 * Author: Harshita Gawas
 * Description: Project row component for the More Projects page.
 * Created on: 20/03/2026
 * Last Modified: 31/03/2026
 */

import Image from "next/image";
import type { MoreProject } from "@/data/MoreProject";
import styles from "./ProjectRow.module.css";

type ProjectRowProps = {
  // Single project entry to display.
  project: MoreProject;
  // Index used to alternate layout (left/right).
  index: number;
};

// Purpose: Render a single project row with alternating image position.
export const ProjectRow = ({ project, index }: ProjectRowProps) => {
  // Determine if layout should be reversed based on index.
  const isReverse = index % 2 !== 0;

  return (
    <article
      className={`${styles.projectRow} ${isReverse ? styles.reverse : ""}`}
    >
      {/* Project image */}
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 900px) 100vw, 44vw"
          className={styles.image}
        />
      </div>

      {/* Project content: title, description, tech, links */}
      <div className={styles.content}>
        {/* Title */}
        <h2 className={styles.projectTitle}>{project.title}</h2>

        {/* Description paragraph */}
        <p className={styles.description}>{project.description}</p>

        {/* Tech stack section */}
        <p className={styles.techLabel}>Tech Stack</p>
        <div className={styles.techStack}>
          {project.techStack.map((tech) => (
            <span key={tech} className={styles.techItem}>
              {tech}
            </span>
          ))}
        </div>

        {/* Action links (GitHub / Live) */}
        {(project.githubUrl || project.liveUrl) && (
          <div className={styles.links}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`${styles.linkButton} ${styles.github}`}
              >
                GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`${styles.linkButton} ${styles.live}`}
              >
                Live Website
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
