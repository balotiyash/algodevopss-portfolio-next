/*
 * File: src/components/HomePage/ContactSection/ContactForm.tsx
 * Author: Harshita Gawas, Neha Balotia
 * Description: Right form panel for the Contact section.
 * Created on: 29/03/2026
 * Last Modified: 25/04/2026
 */
import React from "react";
import styles from "./ContactForm.module.css";
import { ContactField } from "./ContactField";
import { ContactSubmitButton } from "./ContactSubmitButton";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  form: ContactFormValues;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

/* Contact form panel that receives all logic via props */
export const ContactForm: React.FC<ContactFormProps> = ({
  form,
  handleChange,
  handlePhoneChange,
  handleSubmit,
}) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Name */}
      <ContactField id="name" label="Your Name *">
        <input
          id="name"
          name="name"
          className={styles.input}
          placeholder="Ex. Yash Balotiya"
          value={form.name}
          onChange={handleChange}
          required
        />
      </ContactField>

      {/* Email */}
      <ContactField id="email" label="Email *">
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
      </ContactField>

      {/* Phone - validated */}
      <ContactField id="phone" label="Phone *">
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
      </ContactField>

      {/* Message - full width */}
      <ContactField id="message" label="Your Message *" fullWidth>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={handleChange}
          required
        />
      </ContactField>

      {/* Submit button */}
      <ContactSubmitButton />
    </form>
  );
};
