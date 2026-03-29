/*
 * File: src/components/HomePage/Footer/Footer.tsx
 * Author: Harshita Gawas
 * Description: Footer component of the Portfolio application.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */

"use client";

import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import styles from "./Footer.module.css";
import responsivenessStyles from "./Responsiveness.module.css";

export const Footer: React.FC = () => {
  /* Navigation links */
  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  /* Contact details */
  const email = "balotiyash@gmail.com";
  const phone = "+91 98765 43210";
  const whatsappLink = `https://wa.me/919876543210`;
  const address = "Mumbai, Maharashtra, India";
  const mapLink = "https://maps.google.com/?q=Mumbai,Maharashtra,India";

  return (
    <footer className={`${styles.footer} ${responsivenessStyles.footer}`}>
      {/* Main grid */}
      <div className={`${styles.grid} ${responsivenessStyles.grid}`}>
        {/* Col 1 — Brand */}
        <div className={`${styles.brand} ${responsivenessStyles.brand}`}>
          <h3 className={styles.brandName}>John Doe.</h3>
          <p
            className={`${styles.brandDesc} ${responsivenessStyles.brandDesc}`}
          >
            Crafting thoughtful digital experiences with clean code and creative
            design.
          </p>
          {/* Social icons */}
          <div className={`${styles.socials} ${responsivenessStyles.socials}`}>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>
              <FaFacebookF aria-hidden="true" />
            </a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a
              href="https://x.com/"
              aria-label="Twitter"
              className={styles.socialIcon}
            >
              <FaXTwitter aria-hidden="true" />
            </a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div className={`${styles.column} ${responsivenessStyles.column}`}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={`${styles.linkList} ${responsivenessStyles.linkList}`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Connect */}
        <div className={`${styles.column} ${responsivenessStyles.column}`}>
          <h4 className={styles.colTitle}>Connect</h4>
          <ul
            className={`${styles.connectList} ${responsivenessStyles.connectList}`}
          >
            {/* Email — opens mail client */}
            <li>
              <a
                href={`mailto:${email}`}
                className={`${styles.connectLink} ${responsivenessStyles.connectLink}`}
              >
                <FaEnvelope aria-hidden="true" className={styles.connectIcon} />
                <span>{email}</span>
              </a>
            </li>
            {/* WhatsApp — opens chat */}
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.connectLink} ${responsivenessStyles.connectLink}`}
              >
                <FaWhatsapp aria-hidden="true" className={styles.connectIcon} />
                <span>{phone}</span>
              </a>
            </li>
            {/* Address — opens Google Maps */}
            <li>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.connectLink} ${responsivenessStyles.connectLink}`}
              >
                <FaLocationDot
                  aria-hidden="true"
                  className={styles.connectIcon}
                />
                <span>{address}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`${styles.bottom} ${responsivenessStyles.bottom}`}>
        <p className={styles.copyright}>
          Copyright © {new Date().getFullYear()}{" "}
          <span className={styles.copyrightName}>John Doe</span>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};
