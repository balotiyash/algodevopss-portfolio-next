/*
 * File: src/components/HomePage/ExperienceSection/Experience.tsx
 * Author: Harshita Gawas
 * Description: Experience section component of the Portfolio application.
 * Created on: 19/03/2026
 * Modified on: 31/03/2026
 */

"use client"; // ensures this component runs on client-side (needed for scroll + DOM APIs)

import React, { useRef, useEffect, useState } from "react";
import { experiences } from "@/data/Experience"; // data source
import styles from "./Experience.module.css"; // section layout styles
import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceTrack } from "./ExperienceTrack";

export const Experience: React.FC = () => {
  // reference to entire section (used to calculate scroll position)
  const sectionRef = useRef<HTMLDivElement>(null);

  // reference to horizontal track (used to measure width for scrolling)
  const trackRef = useRef<HTMLDivElement>(null);

  // dynamic height of section (important to create vertical scroll space)
  const [sectionHeight, setSectionHeight] = useState("100vh");

  // horizontal translation value (moves cards left/right)
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    /*
     * Handles vertical scroll → converts it into horizontal movement
     */
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      // safety check
      if (!section || !track) return;

      // get section position relative to viewport
      const rect = section.getBoundingClientRect();

      // total height of section (dynamic)
      const sectionHeightPx = section.offsetHeight;

      // viewport height
      const viewportH = window.innerHeight;

      // how much user has scrolled inside this section
      const scrolled = -rect.top;

      // total scrollable vertical distance inside section
      const scrollableDistance = sectionHeightPx - viewportH;

      if (scrollableDistance <= 0) return;

      // convert scroll progress into 0 → 1 range
      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

      // total width of horizontal content
      const trackWidth = track.scrollWidth;

      // visible width of section
      const visibleWidth = section.offsetWidth;

      // how much content overflows horizontally
      const overflow = trackWidth - visibleWidth;

      // ensure even small overflow still scrolls fully (+200 buffer for last card)
      const maxTranslate = overflow > 0 ? overflow + 200 : 0;

      // apply translation (negative because we move left)
      setTranslateX(-progress * maxTranslate);
    };

    /*
     * Calculates how tall the section should be
     * so that vertical scroll distance = horizontal scroll distance
     */
    const calculateHeight = () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const viewportH = window.innerHeight;

      // total horizontal width
      const trackWidth = track.scrollWidth;

      // visible width
      const visibleWidth = section.offsetWidth;

      // horizontal scroll required
      const horizontalScroll = trackWidth - visibleWidth;

      // section height = viewport + required horizontal scroll
      const totalHeight = viewportH + horizontalScroll;

      // update state (this creates scroll space)
      setSectionHeight(`${totalHeight}px`);
    };

    // initial calculation
    calculateHeight();

    // recalculate on resize (important for responsiveness)
    window.addEventListener("resize", calculateHeight);

    // listen to scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // cleanup listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return (
    <section
      ref={sectionRef} // attach ref for scroll calculations
      className={styles.section}
      style={{ height: sectionHeight }} // dynamic height applied
      id="experience"
    >
      {/* Sticky container — stays fixed while section scrolls */}
      <div className={styles.stickyBox}>
        {/* Header for the experience section */}
        <ExperienceHeader />
        {/* Track */}
        <ExperienceTrack
          trackRef={trackRef}
          translateX={translateX}
          items={experiences}
        />
      </div>
    </section>
  );
};
