"use client";

import React, { useState } from "react";
import { awards } from "@/data/ResumeData/awards";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./Awards.module.css";

export const Awards: React.FC = () => {
  // Track expanded award card.
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  const visibleAwards = awards.filter((award) => award.title?.trim());

  if (visibleAwards.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Achievements & Awards</h2>

      {visibleAwards.map((award) => {
        const isOpen = openId === award.id;

        return (
          <article key={award.id} className={styles.entry}>
            <div
              className={styles.row}
              onClick={() => toggle(award.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggle(award.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
            >
              {/* Title always visible */}
              <h3 className={styles.title}>{award.title}</h3>
              <span className={`${styles.chevron} no-print`} aria-hidden="true">
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </div>

            {isOpen && (
              <div className={`${styles.details} no-print`}>
                {award.description?.trim() && (
                  <p className={styles.description}>{award.description}</p>
                )}

                {award.images && award.images.length > 0 && (
                  <div className={styles.mediaSection}>
                    {/* <p className={styles.mediaTitle}>Award Images</p> */}
                    <div className={styles.mediaGrid}>
                      {award.images.map((image, index) => (
                        <img
                          key={`${award.id}-image-${index}`}
                          src={image}
                          alt={`${award.title} image ${index + 1}`}
                          className={styles.image}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
};
