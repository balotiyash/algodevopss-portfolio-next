/*
 * File: src/components/HomePage/AboutMeSection/AboutMe.tsx
 * Author: Harshita Gawas
 * Description: About Me section  for the Portfolio application.
 * Created on: 15/03/2026
 * Last Modified: 17/03/2026
 */

import Image from "next/image";
import styles from "./AboutMe.module.css";
import responsiveStyles from "./Responsiveness.module.css";
import { aboutMeData } from "@/data/AboutMe";

export const AboutMe = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${responsiveStyles.container}`}>
        {/* Left: Portrait with floating skill tags */}
        <div className={`${styles.imageCol} ${responsiveStyles.imageCol}`}>
          <div
            className={`${styles.circleWrapper} ${responsiveStyles.circleWrapper}`}
          >
            <div className={styles.circle}>
              <Image
                src={aboutMeData.image}
                alt={aboutMeData.name}
                fill
                sizes="(max-width: 540px) 220px, (max-width: 900px) 70vw, 420px"
              />
            </div>

            <div className={styles.skillTags}>
              {aboutMeData.skills.map((skill) => (
                <span
                  key={skill.label}
                  className={`${styles.skillTag} ${responsiveStyles.skillTag} ${
                    styles[skill.variant as keyof typeof styles]
                  } ${styles[skill.pos as keyof typeof styles]} ${
                    responsiveStyles[skill.pos as keyof typeof responsiveStyles]
                  }`}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className={styles.textCol}>
          <p className={`${styles.subtitle} ${responsiveStyles.subtitle}`}>
            <span className={styles.dash} />
            About Me
          </p>

          <h2 className={styles.heading}>
            Who is <span className={styles.highlight}>{aboutMeData.name}?</span>
          </h2>

          <p
            className={`${styles.description} ${responsiveStyles.description}`}
          >
            {aboutMeData.description.map((para, index) => (
              <span key={index}>
                {para}
                <br />
                <br />
              </span>
            ))}
          </p>

          {/* Stats */}
          <div className={`${styles.stats} ${responsiveStyles.stats}`}>
            {aboutMeData.stats.map((stat) => (
              <div className={styles.statItem} key={stat.label}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`${styles.bottomRow} ${responsiveStyles.bottomRow}`}>
            <button className={styles.ctaButton}>
              Download CV
              <span className={styles.arrowCircle}>
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

            <span className={styles.signature}>{aboutMeData.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
