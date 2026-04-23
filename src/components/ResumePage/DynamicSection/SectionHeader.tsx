/**
 * File: src/components/ResumePage/DynamicSection/SectionHeader.tsx
 * Author: Harshita Gawas
 * Description: Section heading renderer for DynamicSection.
 * Created on: 29/03/2026
 * Last Modified: 29/03/2026
 */

import React from "react";
import styles from "./DynamicSection.module.css";

// Purpose: Keep section heading markup/styles centralized for all dynamic resume sections.

interface SectionHeaderProps {
  id: string;
  title: string;
}

/**
 * Renders the section heading and keeps heading semantics centralized.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title }) => {
  return (
    // Using h2 preserves heading hierarchy and enables aria-labelledby linkage.
    <h2 id={id} className={styles.heading}>
      {title}
    </h2>
  );
};
