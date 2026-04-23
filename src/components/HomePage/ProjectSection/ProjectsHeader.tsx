/*
 * File: src/components/HomePage/ProjectSection/ProjectsHeader.tsx
 * Author: Harshita Gawas
 * Description: Project header component for the Portfolio application.
 * Created on: 29/03/2026
 * Last Modified: 31/03/2026
 */

import Link from "next/link";
import styles from "./ProjectsHeader.module.css";

export const ProjectsHeader = () => {
  return (
    // Header row containing section text and CTA link.
    <div className={styles.header}>
      {/* Left text block: subtitle + highlighted heading */}
      <div className={styles.headerLeft}>
        <p className={styles.subtitle}>
          <span className={styles.dash}>—</span> My Portfolio
        </p>
        <h2 className={styles.title}>
          My Latest <span className={styles.highlight}>Projects</span>
        </h2>
      </div>

      {/* CTA to full projects page */}
      <Link href="/projects" className={styles.viewAll}>
        <span className={styles.viewBtnText}>View All Projects</span>
        {/* Circular arrow icon */}
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
  );
};
