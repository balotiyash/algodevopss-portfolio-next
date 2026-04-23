/*
 * File: src/components/HomePage/ExperienceSection/ExperienceCard.tsx
 * Author: Harshita Gawas
 * Description: Experience section Card component of the Portfolio application.
 * Created on: 19/03/2026
 * Modified on: 31/03/2026
 */

import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import type { Experience as ExperienceItem } from "@/data/Experience";
import styles from "./ExperienceCard.module.css";

type ExperienceItemCardProps = {
  item: ExperienceItem;
};

export const ExperienceItemCard: React.FC<ExperienceItemCardProps> = ({
  item,
}) => {
  return (
    // card container with different styles for education vs work
    <div
      className={`${styles.card} ${
        item.type === "education" ? styles.cardEducation : styles.cardWork
      }`}
    >
      {/* Icon indicating the type of experience */}
      <span className={styles.cardTypeIcon} aria-hidden="true">
        {item.type === "education" ? <FaGraduationCap /> : <FaBriefcase />}
      </span>
      {/* Card content */}
      <h3 className={styles.role}>{item.role}</h3>
      {/* Company name */}
      <p className={styles.company}>{item.company}</p>
      {/* Description */}
      <p className={styles.desc}>{item.description}</p>
    </div>
  );
};
