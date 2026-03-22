"use client";

import React, { useState } from "react";
import { education } from "@/data/ResumeData/education";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./Education.module.css";

export const Education: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  const visibleEducation = education.filter((edu) => edu.degree?.trim());

  if (visibleEducation.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Education</h2>

      {visibleEducation.map((edu) => {
        const isOpen = openId === edu.id;
        const institutionLine = [edu.institution, edu.location]
          .filter((value) => value?.trim())
          .join(", ");
        const durationLine = [edu.from, edu.to]
          .filter((value) => value?.trim())
          .join(" - ");

        return (
          <div key={edu.id} className={styles.entry}>
            {/* ─── Top Summary Row (ATS visible) ─── */}
            <div
              className={styles.row}
              onClick={() => toggle(edu.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggle(edu.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
            >
              <div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                {institutionLine && (
                  <p className={styles.institution}>{institutionLine}</p>
                )}
              </div>

              <div className={styles.rightControls}>
                {/* Status instead of graduation */}
                {edu.status?.trim() && (
                  <span className={styles.status}>{edu.status}</span>
                )}
                <span
                  className={`${styles.chevron} no-print`}
                  aria-hidden="true"
                >
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>
            </div>

            {/* ─── Expanded Details ─── */}
            {isOpen && (
              <div className={`${styles.details} no-print`}>
                {/* Duration */}
                {durationLine && (
                  <p>
                    <strong>Duration:</strong> {durationLine}
                  </p>
                )}

                {/* Board */}
                {edu.board && (
                  <p>
                    <strong>Board:</strong> {edu.board}
                  </p>
                )}

                {edu.semesters && (
                  <div className={styles.semGrid}>
                    {edu.semesters.map((sem, i) => (
                      <div key={i} className={styles.semCard}>
                        {/* Certificate Image */}
                        {sem.certificate && (
                          <img
                            src={sem.certificate}
                            alt={sem.label}
                            className={styles.semImage}
                          />
                        )}

                        {/* Semester Label */}
                        <p className={styles.semLabel}>
                          <strong>{sem.label}</strong>
                        </p>

                        {/* Score */}
                        <p className={styles.semScore}>{sem.score}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};
