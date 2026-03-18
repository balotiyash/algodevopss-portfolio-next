/*
 * File: src/components/HomePage/Technologies/Technologies.tsx
 * Author: Harshita Gawas
 * Description: Technologies section of the Portfolio application.
 * Created on: 18/03/2026

 */

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { technologies } from "@/data/Technologies";
import styles from "./Technologies.module.css";

/* Approximate perimeter of the oval (ellipse) for stroke animation */
const getEllipsePerimeter = (rx: number, ry: number) =>
  Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)));

export const Technologies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  /* Observe when section enters viewport */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Ellipse radii matching the iconWrap size (120×140, so rx=60, ry=70) */
  const rx = 60;
  const ry = 70;
  const perimeter = getEllipsePerimeter(rx, ry);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Section header */}
      <p className={styles.subtitle}>Technologies I Work With</p>
      <h2 className={styles.heading}>
        <span className={styles.headingAccent}>Crafting Experiences With</span>
        The Right Technologies
      </h2>

      {/* Tools grid */}
      <div className={styles.grid}>
        {technologies.map((tech, i) => {
          /* Calculate how much of the border to draw based on proficiency */
          const dashRemaining = perimeter * (1 - tech.proficiency / 100);

          return (
            <div className={styles.pill} key={tech.name}>
              {/* Oval icon container with animated border */}
              <div
                className={`${styles.iconWrap} ${inView ? styles.animate : ""}`}
                style={
                  {
                    "--perimeter": perimeter,
                    "--dash-remaining": dashRemaining,
                  } as React.CSSProperties
                }
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  className={styles.icon}
                  width={48}
                  height={48}
                />

                {/* SVG border that draws to proficiency % */}
                <svg
                  className={styles.borderSvg}
                  viewBox={`0 0 ${rx * 2 + 4} ${ry * 2 + 4}`}
                >
                  <ellipse
                    className={styles.borderPath}
                    cx={rx + 2}
                    cy={ry + 2}
                    rx={rx}
                    ry={ry}
                    style={{
                      strokeDasharray: perimeter,
                      strokeDashoffset: inView ? undefined : perimeter,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                </svg>
              </div>

              {/* Proficiency percentage */}
              <span className={styles.percent}>{tech.proficiency}%</span>
              {/* Tool name */}
              <span className={styles.name}>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
