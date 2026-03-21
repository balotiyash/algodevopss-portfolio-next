/*
 * File: src/components/HomePage/ContactSection/Contact.tsx
 * Author: Harshita Gawas
 * Description: Contact section component of the Portfolio application.
 * Created on: 20/03/2026
 * Last Modified: 21/03/2026
 */
"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import styles from "./Contact.module.css";

/* Contact section — info left, form right */
export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /* Update field value */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* Phone: allow only digits, spaces, dashes, parens, plus */
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/[^0-9+\-() ]/g, "");
    setForm((prev) => ({ ...prev, phone: cleaned }));
  };

  /* Submit handler */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = form;

    const subject = encodeURIComponent(`New Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:balotiyash@gmail.com?subject=${subject}&body=${body}`;

    // optional reset
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        {/* ─── Left: info panel ─── */}
        <div className={styles.infoPanel}>
          {/* Label */}
          <span className={styles.label}>— Contact Me</span>

          {/* Heading with highlight */}
          <h2 className={styles.heading}>
            Let&apos;s Talk for{" "}
            <span className={styles.headingAccent}>Your Next Projects</span>
          </h2>

          {/* Description */}
          <p className={styles.desc}>
            Have a project in mind or just want to say hello? Drop me a message
            and I&apos;ll get back to you soon.
          </p>

          {/* Contact details */}
          <ul className={styles.details}>
            <li className={styles.detailItem}>
              <span className={styles.detailIcon} aria-hidden="true">
                <FaPhone />
              </span>
              <span>+91 98765 43210</span>
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

        {/* ─── Right: form panel ─── */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name */}
          <div className={styles.field}>
            <label className={styles.fieldLabel} htmlFor="name">
              Your Name *
            </label>
            <input
              id="name"
              name="name"
              className={styles.input}
              placeholder="Ex. John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className={styles.field}>
            <label className={styles.fieldLabel} htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone — validated */}
          <div className={styles.field}>
            <label className={styles.fieldLabel} htmlFor="phone">
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={styles.input}
              placeholder="Enter Phone Number"
              value={form.phone}
              onChange={handlePhoneChange}
              pattern="[0-9+\-() ]{7,20}"
              title="Enter a valid phone number"
              required
            />
          </div>

          {/* Message — full width */}
          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label className={styles.fieldLabel} htmlFor="message">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit button */}
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
        </form>
      </div>
    </section>
  );
};
