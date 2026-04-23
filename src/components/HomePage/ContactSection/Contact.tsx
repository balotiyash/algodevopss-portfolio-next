/*
 * File: src/components/HomePage/ContactSection/Contact.tsx
 * Author: Harshita Gawas
 * Description: Contact section component of the Portfolio application.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */
"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { ContactForm } from "./ContactForm";
import { ContactInfoPanel } from "./ContactInfoPanel";

/* Contact section — info left, form right */
export const Contact: React.FC = () => {
  /* Stores all form inputs for controlled fields */
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
        {/* Left: informational content */}
        <ContactInfoPanel />

        {/* Right: contact form */}
        <ContactForm
          form={form}
          handleChange={handleChange}
          handlePhoneChange={handlePhoneChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};
