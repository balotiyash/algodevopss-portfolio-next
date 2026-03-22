/* Work Experience section — ATS layout with accordion details */
"use client";
import React, { useState } from "react";
import { workExperience } from "@/data/ResumeData/experinece";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./Experience.module.css";

export const Experience: React.FC = () => {
  /* Track which card is expanded */
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  const visibleExperience = workExperience.filter((exp) => exp.role?.trim());

  if (visibleExperience.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Work Experience</h2>

      {visibleExperience.map((exp) => {
        const isOpen = openId === exp.id;
        const companyLine = [exp.company, exp.location]
          .filter((value) => value?.trim())
          .join(", ");
        const dateLine = [exp.from, exp.to]
          .filter((value) => value?.trim())
          .join(" - ");
        const visibleBullets = (exp.bullets || []).filter((item) =>
          item?.trim(),
        );

        return (
          <div key={exp.id} className={styles.entry}>
            {/* Top row — role & dates */}
            <div
              className={styles.row}
              onClick={() => toggle(exp.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggle(exp.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
            >
              <div>
                <h3 className={styles.role}>{exp.role}</h3>
                {companyLine && <p className={styles.company}>{companyLine}</p>}
              </div>
              <div className={styles.rightControls}>
                {dateLine && <span className={styles.dates}>{dateLine}</span>}
                <span
                  className={`${styles.chevron} no-print`}
                  aria-hidden="true"
                >
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>
            </div>

            {/* ATS bullet points — always visible */}
            {visibleBullets.length > 0 && (
              <ul className={styles.bullets}>
                {visibleBullets.map((b, i) => (
                  <li key={i} className={styles.bullet}>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {/* Expanded details */}
            {isOpen && (
              <div className={`${styles.details} no-print`}>
                {/* Period */}
                {exp.period && (
                  <div className={styles.detailBlock}>
                    <strong>Duration:</strong> <span>{exp.period}</span>
                  </div>
                )}
                {/* Description */}
                {exp.details && (
                  <p className={styles.detailText}>{exp.details}</p>
                )}

                {/* Website link */}
                {exp.website && (
                  <a href={exp.website} target="_blank" className={styles.link}>
                    Visit Website ↗
                  </a>
                )}

                {/* Tech stack */}
                {exp.techStack && (
                  <div className={styles.detailBlock}>
                    <strong>Tech Stack:</strong>{" "}
                    <span>{exp.techStack.join(", ")}</span>
                  </div>
                )}

                {/* Features */}
                {exp.features && (
                  <div className={styles.detailBlock}>
                    <strong>Key Features:</strong>{" "}
                    <span>{exp.features.join(", ")}</span>
                  </div>
                )}
                {/* Images */}
                {exp.images && (
                  <div className={styles.mediaSection}>
                    <p className={styles.mediaTitle}>Project Screenshots</p>

                    <div className={styles.mediaGrid}>
                      {exp.images.map((img, i) => (
                        <img key={i} src={img} className={styles.image} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Certificates */}
                {exp.certificates && (
                  <div className={styles.mediaSection}>
                    <p className={styles.mediaTitle}>Certificates</p>

                    <div className={styles.mediaGrid}>
                      {exp.certificates.map((img, i) => (
                        <img key={i} src={img} className={styles.certificate} />
                      ))}
                    </div>
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
