/**
 * File: src/components/HomePage/TechStackSection/CornerDots.tsx
 * Author: Harshita Gawas
 * Description: Corder Dots component for the TechStack section of the portfolio application.
 * Created on: 28/03/2026
 * Last Modified: 29/03/2026
 */

// Importing necessary modules and styles for the CornerDots component.
import styles from "./CornerDots.module.css";

// CornerDots Component
const CornerDots = ({ className = "" }) => {
  /* Render a grid of decorative dots */
  return (
    <div className={`${styles.dots} ${className}`}>
      {/* Generate 36 dot elements */}
      {Array.from({ length: 36 }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
};

// Exporting the CornerDots component as the default export of this module.
export default CornerDots;
