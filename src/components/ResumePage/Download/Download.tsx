/**
 * File: src/components/ResumePage/Download/Download.tsx
 * Author: Harshita Gawas
 * Description: Download button component for the Resume page.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */
"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./Download.module.css";

export function Download() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <nav
      className={`${styles.resumeNavbar} no-print`}
      aria-label="Resume navigation"
    >
      <Link
        href="/"
        className={styles.backButton}
        aria-label="Go back to portfolio"
      >
        <FiArrowLeft aria-hidden="true" />
      </Link>

      <button
        type="button"
        onClick={handleDownload}
        className={styles.downloadButton}
        aria-label="Download resume as PDF"
      >
        Download Resume
      </button>
    </nav>
  );
}
