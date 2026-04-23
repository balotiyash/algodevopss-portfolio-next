/*
 * File: src/components/SideIcons/SideIcons.tsx
 * Author: Harshita Gawas
 * Description: Side icons compoenent of the Portfolio application.
 * Created on: 19/03/2026
 * Last Modified: 29/03/2026
 */
"use client";

import React, { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaFolderOpen,
  FaLaptopCode,
  FaHouse,
  FaUser,
} from "react-icons/fa6";
import styles from "./SideIcons.module.css";

type Section = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

/* Section definitions — id must match the section's HTML id */
const sections: Section[] = [
  { id: "home", label: "Intro", icon: <FaHouse /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "technologies", label: "Tech", icon: <FaLaptopCode /> },
  { id: "projects", label: "Projects", icon: <FaFolderOpen /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

export const SideIcons: React.FC = () => {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const syncFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId && sections.some((section) => section.id === hashId)) {
        setActiveId(hashId);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  /* Track active section based on viewport visibility */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60% 0px",
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Smooth-scroll to section on click */
  const handleClick = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={styles.sideNav} aria-label="Section navigation">
      {sections.map((s) => (
        <button
          key={s.id}
          className={`${styles.dot} ${activeId === s.id ? styles.active : ""}`}
          onClick={() => handleClick(s.id)}
          aria-label={s.label}
          title={s.label}
        >
          {/* Icon container */}
          <span className={styles.icon}>{s.icon}</span>
        </button>
      ))}
    </nav>
  );
};
