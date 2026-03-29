/*
 * File: src/components/HomePage/ContactSection/ContactSubmitButton.tsx
 * Author: Harshita Gawas
 * Description: Submit button used in the Contact form.
 * Created on: 29/03/2026
 * Last Modified: 29/03/2026
 */
import React from "react";
import styles from "./ContactForm.module.css";

/* Visual submit CTA that preserves original icon and structure */
export const ContactSubmitButton: React.FC = () => {
  return (
    <button type="submit" className={styles.submitBtn}>
      <span className={styles.btnText}>Submit</span>
      <span className={styles.btnArrow}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </button>
  );
};
