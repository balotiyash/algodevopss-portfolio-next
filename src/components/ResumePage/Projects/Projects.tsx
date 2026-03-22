"use client";

import React, { useState } from "react";
import { projects } from "@/data/ResumeData/projects";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./Projects.module.css";

export const Projects: React.FC = () => {
  // Toggle details per project card.
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  const visibleProjects = projects.filter((project) => project.title?.trim());

  if (visibleProjects.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>

      {visibleProjects.map((project) => {
        const isOpen = openId === project.id;

        return (
          <article key={project.id} className={styles.entry}>
            <div
              className={styles.row}
              onClick={() => toggle(project.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggle(project.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
            >
              <h3 className={styles.title}>{project.title}</h3>
              <div className={styles.rightControls}>
                {project.timeline && (
                  <span className={styles.timeline}>{project.timeline}</span>
                )}
                <span
                  className={`${styles.chevron} no-print`}
                  aria-hidden="true"
                >
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>
            </div>

            {isOpen && (
              <div className={`${styles.details} no-print`}>
                {project.description?.trim() && (
                  <p className={styles.description}>{project.description}</p>
                )}

                {project.techStack && project.techStack.length > 0 && (
                  <div className={styles.detailBlock}>
                    <strong>Tech Stack:</strong>
                    <ul className={styles.techList}>
                      {project.techStack.map((tech, index) => (
                        <li key={`${project.id}-tech-${index}`}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.links && project.links.length > 0 && (
                  <div className={styles.detailBlock}>
                    <strong>Links:</strong>
                    <div className={styles.links}>
                      {project.links.map((link, index) => (
                        <a
                          key={`${project.id}-link-${index}`}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.link}
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {project.images && project.images.length > 0 && (
                  <div className={styles.mediaSection}>
                    <p className={styles.mediaTitle}>Project Images</p>
                    <div className={styles.mediaGrid}>
                      {project.images.map((image, index) => (
                        <img
                          key={`${project.id}-image-${index}`}
                          src={image}
                          alt={`${project.title} preview ${index + 1}`}
                          className={styles.image}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
};
