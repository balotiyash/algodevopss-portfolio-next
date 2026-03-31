/*
 * File: src/components/HomePage/ExperienceSection/ExperienceHeader.tsx
 * Author: Harshita Gawas
 * Description: Experience section Header component of the Portfolio application.
 * Created on: 19/03/2026
 * Modified on: 31/03/2026
 */

import React from "react";
import styles from "./ExperienceHeader.module.css";

export const ExperienceHeader: React.FC = () => {
  return (
    // Section heading block shown above the horizontal timeline.
    <div className={styles.header}>
      {/* Small accent dash + journey label */}
      <span className={styles.dash}>—</span> My Journey
      {/* Main headline with highlighted keyword */}
      <h2 className={styles.title}>
        From Learning to <span>Building</span>
      </h2>
    </div>
  );
};
