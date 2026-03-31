/**
 * File: src/components/ResumePage/DynamicSection/EntryHeaderRow.tsx
 * Author: Harshita Gawas
 * Description: Clickable header row for each dynamic entry.
 * Created on: 29/03/2026
 * Last Modified: 29/03/2026
 */

import React, { KeyboardEvent } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./EntryItem.module.css";

// Purpose: Render the clickable top row for a resume entry, including title/meta and chevron state.

interface EntryHeaderRowProps {
  collapsible: boolean;
  isOpen: boolean;
  detailsId: string;
  itemId: string | number;
  mainTitle: string | null;
  title: string;
  index: number;
  subtitle: string | null;
  defaultBullets: string[] | null;
  meta: string | null;
  toggleItem: (id: string | number) => void;
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
}

/**
 * Renders the top row UI for one entry and delegates interaction handlers to parent logic.
 */
export const EntryHeaderRow: React.FC<EntryHeaderRowProps> = ({
  collapsible,
  isOpen,
  detailsId,
  itemId,
  mainTitle,
  title,
  index,
  subtitle,
  defaultBullets,
  meta,
  toggleItem,
  onKeyDown,
}) => {
  return (
    // Row acts as an accessible button only when the section is collapsible.
    <div
      className={`${styles.row} ${!collapsible ? styles.staticRow : ""}`}
      role={collapsible ? "button" : undefined}
      tabIndex={collapsible ? 0 : undefined}
      aria-expanded={collapsible ? isOpen : undefined}
      aria-controls={collapsible ? detailsId : undefined}
      onClick={() => toggleItem(itemId)}
      onKeyDown={onKeyDown}
    >
      {/* LEFT CONTENT */}
      <div className={styles.left}>
        {/* Show main title only in collapsible mode; static mode keeps content simplified. */}
        {collapsible && (
          <h3 className={styles.title}>
            {mainTitle || `${title} ${index + 1}`}
          </h3>
        )}

        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}

        {/* Preview bullets (collapsed view) */}
        {defaultBullets ? (
          <ul className={styles.previewList}>
            {defaultBullets.map((bullet, bulletIndex) => (
              <li key={`${itemId}-preview-${bulletIndex}`}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        {meta ? <span className={styles.meta}>{meta}</span> : null}

        {/* Chevron only if collapsible */}
        {collapsible && (
          <span className={styles.chevron} aria-hidden="true">
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        )}
      </div>
    </div>
  );
};
