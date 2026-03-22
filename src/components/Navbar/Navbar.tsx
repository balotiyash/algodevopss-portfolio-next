/*
 * File: src/components/Navbar/Navbar.tsx
 * Author: Harshita Gawas
 * Description: Navbar component  for the Portfolio application.
 * Created on: 15/03/2026
 * Last Modified: 17/03/2026
 */
"use client";

import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import responsiveStyles from "./Responsiveness.module.css";
import Link from "next/link";

// const navLinks = [
//   // "Home",
//   // "Services",
//   // "About",
//   // "Projects",
//   // "Blogs",
//   // "Testimonials",
// ];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navWrapper} ${responsiveStyles.navWrapper} ${isScrolled ? `${styles.scrolled} ${responsiveStyles.scrolled}` : ""}`}
    >
      <div
        className={`${styles.navContainer} ${responsiveStyles.navContainer}`}
      >
        <div className={styles.logoArea}>
          {/* <div className={styles.logoIcon}>H</div> */}
          <span className={styles.logoText}>John Doe</span>
        </div>

        {/* <div className={styles.links}>
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={i === 0 ? styles.activeLink : ""}
            >
              {link}
            </a>
          ))}
        </div> */}
        <Link href="/resume">
          <button className={`${styles.cta} ${responsiveStyles.cta}`}>
            View My Resume
          </button>
        </Link>

        <button
          className={`${styles.hamburger} ${responsiveStyles.hamburger}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ""}`}
          />
          <span
            className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ""}`}
          />
          <span
            className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className={`${styles.mobileMenu} ${responsiveStyles.mobileMenu}`}>
          {/* {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={i === 0 ? styles.activeLink : ""}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))} */}
          <Link href="/resume">
            <button
              className={`${styles.mobileCta} ${responsiveStyles.mobileCta}`}
            >
              View My Resume
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};
