/*
 * File: src/components/HomePage/HeroSection/Hero.tsx
 * Author: Harshita Gawas
 * Description: Hero section for the Portfolio application.
 * Created on: 15/03/2026
 * Last Modified: 19/03/2026
 */

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import responsiveStyles from "./Responsiveness.module.css";
import { heroData } from "@/data/Hero";
import Link from "next/link";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className={`${styles.heroSection} ${responsiveStyles.heroSection}`}
    >
      <div className={`${styles.container} ${responsiveStyles.container}`}>
        {/* Left side: text content + actions */}
        <div className={`${styles.content} ${responsiveStyles.content}`}>
          {/* Heading with name, role, location */}
          <h1 className={`${styles.title} ${responsiveStyles.title}`}>
            I&apos;m{" "}
            <span className={styles.nameHighlight}>{heroData.name},</span>
            <br />
            {heroData.role}
            <br />
            Based in {heroData.location}.
          </h1>

          {/* Short description */}
          <p className={`${styles.subtitle} ${responsiveStyles.subtitle}`}>
            {heroData.description}
          </p>

          {/* Action buttons */}
          <div className={`${styles.actions} ${responsiveStyles.actions}`}>
            <Link href={heroData.ctaPrimary.link}>
              <button
                className={`${styles.primaryBtn} ${responsiveStyles.primaryBtn}`}
              >
                {heroData.ctaPrimary.text}
              </button>
            </Link>
          </div>
        </div>

        {/* Right side: visual elements */}
        <div className={`${styles.visualArea} ${responsiveStyles.visualArea}`}>
          {/* Background circle */}
          <div
            className={`${styles.yellowCircle} ${responsiveStyles.yellowCircle}`}
          />

          {/* Rotating badge */}
          <Link
            href="/#contact"
            className={`${styles.hireBadge} ${responsiveStyles.hireBadge}`}
            aria-label="Go to contact section"
          >
            <div
              className={`${styles.hireBadgeInner} ${responsiveStyles.hireBadgeInner}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </Link>

          {/* Profile image */}
          <div
            className={`${styles.portraitWrapper} ${responsiveStyles.portraitWrapper}`}
          >
            <Image
              src={heroData.image.src}
              alt={heroData.image.alt}
              className={styles.portrait}
              fill
              sizes="(max-width: 900px) 100vw, 380px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
