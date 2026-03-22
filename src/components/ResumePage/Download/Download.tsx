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
