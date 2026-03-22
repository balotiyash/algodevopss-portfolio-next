/* Skills section — bullet list, ATS-friendly */
import React from "react";
import { skills } from "@/data/ResumeData/skills";
import styles from "./Skills.module.css";

export const Skills: React.FC = () => {
  const visibleSkills = skills.filter((skill) => skill?.trim().length > 0);

  if (visibleSkills.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Skills</h2>
      {/* Bullet list — parseable by ATS */}
      <ul className={styles.list}>
        {visibleSkills.map((skill, i) => (
          <li key={i} className={styles.item}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
