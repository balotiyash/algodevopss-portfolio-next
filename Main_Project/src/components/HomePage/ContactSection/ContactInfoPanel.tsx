  /*
 * File: src/components/HomePage/ContactSection/ContactInfoPanel.tsx
 * Author: Harshita Gawas, Neha Balotia
 * Description: Left information panel for the Contact section.
 * Created on: 29/03/2026
 * Last Modified: 25/04/2026
 */
import React from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import styles from "./ContactInfoPanel.module.css";

/* Contact info panel with heading, description, and details */
export const ContactInfoPanel: React.FC = () => {
  return (
    <div className={styles.infoPanel}>
      {/* Label */}
      <p className={styles.subtitle}>
        <span className={styles.dash} />
        Contact Me
      </p>

      {/* Heading with highlight */}
      <h2 className={styles.heading}>
        Let&apos;s Talk for{" "}
        <span className={styles.headingAccent}>Your Next Projects</span>
      </h2>

      {/* Description */}
      <p className={styles.desc}>
        Have a project in mind or just want to say hello? Drop me a message and
        I&apos;ll get back to you soon.
      </p>

      {/* Contact details */}
      <ul className={styles.details}>
        <li className={styles.detailItem}>
          <span className={styles.detailIcon} aria-hidden="true">
            <FaPhone />
          </span>
          <span>+91 9920780823</span>
        </li>
        <li className={styles.detailItem}>
          <span className={styles.detailIcon} aria-hidden="true">
            <FaEnvelope />
          </span>
          <span>balotiyash@gmail.com</span>
        </li>
        <li className={styles.detailItem}>
          <span className={styles.detailIcon} aria-hidden="true">
            <FaLocationDot />
          </span>
          <span>Mumbai, Maharashtra, India</span>
        </li>
      </ul>
    </div>
  );
};
