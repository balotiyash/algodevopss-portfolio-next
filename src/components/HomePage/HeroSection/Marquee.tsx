/*
 * File: src/components/HomePage/HeroSection/Marquee.tsx
 * Author: Harshita Gawas
 * Description: Marquee Section  for the Portfolio application.
 * Created on: 15/03/2026
 * Last Modified: 18/03/2026
 */

import React from "react";
import styles from "./Marquee.module.css";

const skills = [
  "App Design",
  "Website Design",
  "Dashboard",
  "Wireframe",
  "User Research",
  "Brand Identity",
];

export const Marquee: React.FC = () => {
  const items = [...skills, ...skills];

  return (
    <div className={styles.bannerWrapper}>
      {/* Diagonal green strip */}
      <div className={styles.greenStrip} />
      {/* Yellow bar */}
      <div className={styles.yellowBar}>
        <div className={styles.marqueeTrack}>
          {items.map((skill, i) => (
            <span key={i} className={styles.item}>
              <span className={styles.star}>✦</span>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
