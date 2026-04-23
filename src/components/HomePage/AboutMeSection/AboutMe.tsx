/*
 * File: src/components/HomePage/AboutMeSection/AboutMe.tsx
 * Author: Harshita Gawas
 * Description: About Me section  for the Portfolio application.
 * Created on: 15/03/2026
 * Last Modified: 31/03/2026
 */

import Image from "next/image";
import leftStyles from "./AboutMeLeftColumn.module.css";
import rightStyles from "./AboutmeRightColumn.module.css";
import responsiveStyles from "./Responsiveness.module.css";
import { aboutMeData } from "@/data/AboutMe";
import Link from "next/link";
export const AboutMe = () => {
  return (
    <section id="about" className={leftStyles.section}>
      <div className={`${leftStyles.container} ${responsiveStyles.container}`}>
        {/* Left: Portrait with floating skill tags */}
        <div className={`${leftStyles.imageCol} ${responsiveStyles.imageCol}`}>
          {/* Circle wrapper */}
          <div
            className={`${leftStyles.circleWrapper} ${responsiveStyles.circleWrapper}`}
          >
            {/* circle */}
            <div className={leftStyles.circle}>
              {/* image */}
              <Image
                src={aboutMeData.image}
                alt={aboutMeData.name}
                fill
                sizes="(max-width: 540px) 220px, (max-width: 900px) 70vw, 420px"
              />
            </div>
            {/* tags */}
            <div className={leftStyles.skillTags}>
              {aboutMeData.skills.map((skill) => (
                <span
                  key={skill.label}
                  className={`${leftStyles.skillTag} ${responsiveStyles.skillTag} ${
                    leftStyles[skill.variant as keyof typeof leftStyles]
                  } ${leftStyles[skill.pos as keyof typeof leftStyles]} ${
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
        <div className={rightStyles.textCol}>
          <p className={`${rightStyles.subtitle} ${responsiveStyles.subtitle}`}>
            {/* dash */}
            <span className={rightStyles.dash} />
            {/* section title */}
            About Me
          </p>
          {/* heading */}
          <h2 className={rightStyles.heading}>
            Who is{" "}
            <span className={rightStyles.highlight}>{aboutMeData.name}?</span>
          </h2>
          {/* description */}
          <p
            className={`${rightStyles.description} ${responsiveStyles.description}`}
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
          <div className={`${rightStyles.stats} ${responsiveStyles.stats}`}>
            {aboutMeData.stats.map((stat) => (
              <div className={rightStyles.statItem} key={stat.label}>
                <span className={rightStyles.statNumber}>{stat.number}</span>
                <span className={rightStyles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`${rightStyles.bottomRow} ${responsiveStyles.bottomRow}`}
          >
            <Link href="/resume">
              <button className={rightStyles.ctaButton}>
                Download Resume
                <span className={rightStyles.arrowCircle}>
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
            </Link>

            <span className={rightStyles.signature}>{aboutMeData.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
