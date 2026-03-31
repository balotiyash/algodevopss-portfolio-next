/*
 * File: src/components/HomePage/ProjectSection/ProjectCard.tsx
 * Author: Harshita Gawas
 * Description: Project Card component for the Portfolio application.
 * Created on: 29/03/2026
 * Last Modified: 31/03/2026
 */

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/Projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  // Single project object used to populate the card.
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    // Individual project card.
    <article className={styles.card}>
      {/* Image preview area */}
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={project.title}
          className={styles.image}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Tech/design tags */}
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {/* Project title */}
      <h3 className={styles.cardTitle}>{project.title}</h3>

      {/* Render action links only when at least one URL exists */}
      {(project.github || project.live) && (
        <div className={styles.links}>
          {/* Optional GitHub link */}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className={styles.linkBtn}
            >
              GitHub
            </Link>
          )}

          {/* Optional live demo link */}
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              className={styles.linkBtnPrimary}
            >
              Live
            </Link>
          )}
        </div>
      )}
    </article>
  );
};
