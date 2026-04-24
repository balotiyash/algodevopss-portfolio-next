/**
 * File: src/components/ResumePage/Header/Header.tsx
 * Author: Harshita Gawas
 * Description: Header component for the Resume page.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */

/* Resume intro/header — ATS-friendly black & white styling */
import React from "react";
import { resumeIntro } from "@/data/ResumeData/header";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const name = resumeIntro.name?.trim();
  const tagline = resumeIntro.tagline?.trim();
  const location = resumeIntro.location?.trim();
  const email = resumeIntro.email?.trim();
  const phone = resumeIntro.phone?.trim();
  const linkedin = resumeIntro.linkedin?.trim();

  const hasAnyContent = Boolean(
    name || tagline || location || email || phone || linkedin,
  );

  if (!hasAnyContent) {
    return null;
  }

  const contactItems: React.ReactNode[] = [];

  if (location) {
    contactItems.push(<span key="location">{location}</span>);
  }
  if (email) {
    contactItems.push(
      <a key="email" href={`mailto:${email}`}>
        {email}
      </a>,
    );
  }
  if (phone) {
    contactItems.push(
      <a key="phone" href={`tel:${phone.replace(/\s/g, "")}`}>
        {phone}
      </a>,
    );
  }
  if (linkedin) {
    contactItems.push(
      <a
        key="linkedin"
        href={`https://${linkedin}`}
        target="_blank"
        rel="noreferrer"
      >
        {linkedin}
      </a>,
    );
  }

  return (
    <header className={styles.header}>
      {/* Full name — large, bold, centered */}
      {name && <h1 className={styles.name}>{name}</h1>}

      {/* Tagline / specialization */}
      {tagline && <p className={styles.tagline}>{tagline}</p>}

      {/* Contact info row */}
      {contactItems.length > 0 && (
        <p className={styles.contact}>
          {contactItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className={styles.sep}>|</span>}
              {item}
            </React.Fragment>
          ))}
        </p>
      )}
    </header>
  );
};
