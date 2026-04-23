/*
 * File: src/components/HomePage/ExperienceSection/ExperienceTrack.tsx
 * Author: Harshita Gawas
 * Description: Experience section Track component of the Portfolio application.
 * Created on: 19/03/2026
 * Modified on: 31/03/2026
 */

import React from "react";
import type { Experience as ExperienceItem } from "@/data/Experience";
import styles from "./ExperienceTrack.module.css";
import { ExperienceItemCard } from "./ExperienceCard";

type ExperienceTrackProps = {
  // Reference to the moving row; used by parent for width calculations.
  trackRef: React.RefObject<HTMLDivElement | null>;
  // Current horizontal offset calculated from vertical scroll progress.
  translateX: number;
  // Timeline entries to render as columns.
  items: ExperienceItem[];
};

export const ExperienceTrack: React.FC<ExperienceTrackProps> = ({
  trackRef,
  translateX,
  items,
}) => {
  return (
    // Outer wrapper clips overflow so only the visible part of the track is shown.
    <div className={styles.trackWrapper}>
      {/* Track moves left/right based on translateX from parent scroll logic */}
      <div
        ref={trackRef}
        className={styles.track}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {/* Each item renders a timeline column: date, dot/line, then details card */}
        {items.map((item) => (
          <div key={item.id} className={styles.column}>
            <span className={styles.timelineDate}>
              {item.from} – {item.to}
            </span>

            {/* Dot and connector line create the horizontal timeline visual */}
            <div className={styles.dotRow}>
              <span className={styles.dot} />
              <span className={styles.line} />
            </div>

            {/* Card content (role, company, description, and type icon) */}
            <ExperienceItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
