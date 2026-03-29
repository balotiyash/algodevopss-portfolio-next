/**
 * File: src/components/HomePage/TechStackSection/MarqueeRow.tsx
 * Author: Harshita Gawas
 * Description: Corder Dots component for the TechStack section of the portfolio application.
 * Created on: 28/03/2026
 * Last Modified: 29/03/2026
 */
// Importing necessary modules and styles for the MarqueeRow component.
import styles from "./MarqueeRow.module.css";

// Defining the props for the MarqueeRow component
interface MarqueeRowProps {
  reverse?: boolean;
  repeat?: number;
  children: React.ReactNode;
}

// MarqueeRow Component definition, which renders a scrolling marquee of technology logos with optional reverse and repeat functionality.
const MarqueeRow = ({
  reverse = false,
  repeat = 4,
  children,
}: MarqueeRowProps) => {
  // Rendering the marquee row with optional reverse and repeat functionality
  return (
    // Marquee container
    <div className={styles.marquee}>
      {/* Marquee tracks */}
      {Array.from({ length: repeat }).map((_, i) => (
        // Individual track with conditional reverse class
        <div
          key={i}
          className={`${styles.track} ${styles.trackHorizontal} ${reverse ? styles.reverse : ""}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

// Exporting the MarqueeRow component as the default export of this module.
export default MarqueeRow;
