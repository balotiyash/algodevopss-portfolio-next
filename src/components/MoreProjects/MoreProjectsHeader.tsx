/**
 * File: src/components/MoreProjects/MoreProjectsHeader.tsx
 * Author: Harshita Gawas
 * Description: More Projects page Header component  for the portfolio application.
 * Created on: 20/03/2026
 * Last Modified: 31/03/2026
 */
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./MoreProjectsHeader.module.css";

// Purpose: Render back button and page title for the More Projects page.
export const MoreProjectsHeader = () => {
  return (
    <>
      {/* Back navigation button wrapper */}
      <div className={styles.backButtonWrap}>
        {/* Arrow icon link to return to homepage */}
        <Link
          href="/"
          className={styles.backButton}
          aria-label="Go back to portfolio"
        >
          <FiArrowLeft aria-hidden="true" />
        </Link>
      </div>

      {/* Page title with highlighted keyword */}
      <h1 className={styles.title}>
        More <span>Projects</span>
      </h1>
    </>
  );
};
