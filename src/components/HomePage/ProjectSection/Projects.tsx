/*
 * File: src/components/HomePage/ProjectSection/Projects.tsx
 * Author: Harshita Gawas
 * Description: Project section of the Portfolio application.
 * Created on: 29/03/2026
 */

/* Projects grid section – "My Latest Projects" */

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/Projects";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        {/* Section header row */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            {/* Subtitle with decorative dash */}
            <p className={styles.subtitle}>
              <span className={styles.dash}>—</span> My Portfolio
            </p>
            {/* Main heading with highlighted word */}
            <h2 className={styles.title}>
              My Latest <span className={styles.highlight}>Projects</span>
            </h2>
          </div>

          {/* View all button */}
          <Link href="/projects" className={styles.viewAll}>
            <span className={styles.viewBtnText}>View All Projects</span>
            {/* Arrow circle icon */}
            <span className={styles.arrowCircle}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M5 13L13 5M13 5H6M13 5V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* 2×2 project card grid */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>
              {/* Project image */}
              <div className={styles.imageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Tags row */}
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title + arrow link */}
              <div className={styles.cardFooter}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                {/* <span className={styles.cardArrow}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6 14L14 6M14 6H7M14 6V13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span> */}
              </div>

              {/* Links buttons */}
              {(project.github || project.live) && (
                <div className={styles.links}>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className={styles.linkBtn}
                    >
                      GitHub
                    </Link>
                  )}

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
          ))}
        </div>
      </div>
    </section>
  );
};
