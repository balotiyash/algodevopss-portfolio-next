/*
 * File: src/components/HomePage/ExperienceSection/Experience.tsx
 * Author: Harshita Gawas
 * Description: Experience section component of the Portfolio application.
 * Created on: 19/03/2026
 * Modified on: 21/03/2026
 */

"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import { experiences } from "@/data/Experience";
import styles from "./Experience.module.css";

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const sectionHeightPx = section.offsetHeight;
      const viewportH = window.innerHeight;

      const scrolled = -rect.top;
      const scrollableDistance = sectionHeightPx - viewportH;

      if (scrollableDistance <= 0) return;

      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

      const trackWidth = track.scrollWidth;
      const visibleWidth = section.offsetWidth;
      const overflow = trackWidth - visibleWidth;

      const maxTranslate = overflow > 0 ? overflow + 200 : 0; // force scroll even if small

      setTranslateX(-progress * maxTranslate);
    };

    const calculateHeight = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const viewportH = window.innerHeight;
      const trackWidth = track.scrollWidth;
      const visibleWidth = section.offsetWidth;

      const horizontalScroll = trackWidth - visibleWidth;

      // KEY: dynamic height = viewport + required scroll distance
      const totalHeight = viewportH + horizontalScroll;

      setSectionHeight(`${totalHeight}px`);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      style={{ height: sectionHeight }} // UPDATED
      id="experience"
    >
      <div className={styles.stickyBox}>
        <div className={styles.header}>
          <span className={styles.dash}>—</span> My Journey
          <h2 className={styles.title}>
            From Learning to <span>Building</span>
          </h2>
        </div>

        <div className={styles.trackWrapper}>
          <div
            ref={trackRef}
            className={styles.track}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {experiences.map((exp) => (
              <div key={exp.id} className={styles.column}>
                <span className={styles.timelineDate}>
                  {exp.from} – {exp.to}
                </span>

                <div className={styles.dotRow}>
                  <span className={styles.dot} />
                  <span className={styles.line} />
                </div>

                <div
                  className={`${styles.card} ${
                    exp.type === "education"
                      ? styles.cardEducation
                      : styles.cardWork
                  }`}
                >
                  <span className={styles.cardTypeIcon} aria-hidden="true">
                    {exp.type === "education" ? (
                      <FaGraduationCap />
                    ) : (
                      <FaBriefcase />
                    )}
                  </span>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <p className={styles.company}>{exp.company}</p>
                  <p className={styles.desc}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
