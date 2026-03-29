/**
 * File: src/components/HomePage/MoreProjects/MoreProjectsPage.tsx
 * Author: Harshita Gawas
 * Description: More Projects page  for the portfolio application.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { moreProjects } from "@/data/MoreProject";
import styles from "./MoreProjectsPage.module.css";

// Shows 5 projects per page.
const PROJECTS_PER_PAGE = 5;

export default function MoreProjectsPage() {
  // Tracks the active pagination page.
  const [currentPage, setCurrentPage] = useState(1);

  // Total page count from available project items.
  const totalPages = Math.ceil(moreProjects.length / PROJECTS_PER_PAGE);

  // Slices the project list for current page only.
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    const end = start + PROJECTS_PER_PAGE;

    return moreProjects.slice(start, end);
  }, [currentPage]);

  return (
    <section className={styles.page}>
      <div className={styles.backButtonWrap}>
        <Link
          href="/"
          className={styles.backButton}
          aria-label="Go back to portfolio"
        >
          <FiArrowLeft aria-hidden="true" />
        </Link>
      </div>

      <h1 className={styles.title}>
        More <span>Projects</span>
      </h1>

      <div className={styles.list}>
        {paginatedProjects.map((project, index) => {
          // Alternates left/right content order by absolute index.
          const absoluteIndex = (currentPage - 1) * PROJECTS_PER_PAGE + index;
          const isReverse = absoluteIndex % 2 !== 0;

          return (
            <article
              key={project.id}
              className={`${styles.projectRow} ${isReverse ? styles.reverse : ""}`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 44vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>

                <p className={styles.techLabel}>Tech Stack</p>
                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>

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
        })}
      </div>

      {totalPages > 1 && (
        <nav className={styles.pagination} aria-label="Projects pagination">
          <button
            className={styles.pageButton}
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`${styles.pageButton} ${page === currentPage ? styles.activePage : ""}`}
              type="button"
              onClick={() => setCurrentPage(page)}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ))}

          <button
            className={styles.pageButton}
            type="button"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </nav>
      )}
    </section>
  );
}
