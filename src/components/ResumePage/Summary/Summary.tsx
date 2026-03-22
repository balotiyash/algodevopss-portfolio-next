/* Professional Summary section — clean ATS paragraph */
import React from "react";
import { professionalSummary } from "@/data/ResumeData/summary";
import styles from "./Summary.module.css";

export const Summary: React.FC = () => {
  const summaryText = professionalSummary?.trim();

  if (!summaryText) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Professional Summary</h2>
      <p className={styles.text}>{summaryText}</p>
    </section>
  );
};
