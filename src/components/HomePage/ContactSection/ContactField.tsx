/*
 * File: src/components/HomePage/ContactSection/ContactField.tsx
 * Author: Harshita Gawas
 * Description: Reusable field wrapper for Contact form controls.
 * Created on: 29/03/2026
 * Last Modified: 29/03/2026
 */
import React from "react";
import styles from "./ContactForm.module.css";

interface ContactFieldProps {
  id: string;
  label: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

/* Wraps a label and input-like control with consistent spacing */
export const ContactField: React.FC<ContactFieldProps> = ({
  id,
  label,
  fullWidth = false,
  children,
}) => {
  return (
    <div
      className={`${styles.field}${fullWidth ? ` ${styles.fullWidth}` : ""}`}
    >
      <label className={styles.fieldLabel} htmlFor={id}>
        {label}
      </label>
      {children}
    </div>
  );
};
