/* Certifications section — ATS bullet list with accordion */
"use client";
import React, { useState } from "react";
import { certifications } from "@/data/ResumeData/certifications";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./Certifications.module.css";

export const Certifications: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  const visibleCertifications = certifications.filter((cert) =>
    cert.name?.trim(),
  );

  if (visibleCertifications.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Certifications</h2>

      <ul className={styles.list}>
        {visibleCertifications.map((cert) => {
          const isOpen = openId === cert.id;

          return (
            <li key={cert.id} className={styles.item}>
              {/* Cert name — clickable */}
              <div
                className={styles.trigger}
                onClick={() => toggle(cert.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggle(cert.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
              >
                <span className={styles.name}>{cert.name}</span>
                <span
                  className={`${styles.chevron} no-print`}
                  aria-hidden="true"
                >
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>

              {/* Expanded detail — hidden in print */}
              {isOpen && (cert.details || cert.image) && (
                <div className={`${styles.detailBox} no-print`}>
                  {/* description */}
                  {cert.details && (
                    <p className={styles.detailText}>{cert.details}</p>
                  )}

                  {/* image below */}
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className={styles.certificateImg}
                    />
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
