/**
 * File: src/components/ResumePage/DynamicSection/EntryDetails.tsx
 * Author: Harshita Gawas
 * Description: Detail content renderer for collapsible and static entry modes.
 * Created on: 29/03/2026
 * Last Modified: 29/03/2026
 */

import React from "react";
import styles from "./EntryItem.module.css";
import detailStyles from "./DetailField.module.css";
import { DetailField } from "./DetailField";

// Purpose: Render entry details in either animated accordion mode or always-visible static mode.

type DetailEntry = [string, unknown];

interface EntryDetailsProps {
  collapsible: boolean;
  isOpen: boolean;
  detailsId: string;
  detailEntries: DetailEntry[];
  itemId: string | number;
}

/**
 * Renders entry details and preserves accordion/static rendering behavior.
 */
export const EntryDetails: React.FC<EntryDetailsProps> = ({
  collapsible,
  isOpen,
  detailsId,
  detailEntries,
  itemId,
}) => {
  return collapsible ? (
    // Accordion mode: this wrapper animates open/close with height + opacity styles.
    <div
      id={detailsId}
      className={`${styles.details} ${styles.noPrint} ${
        isOpen ? styles.detailsOpen : ""
      }`}
      aria-hidden={!isOpen}
    >
      <div className={styles.detailsInner}>
        {/* Render each detail row with the generic field renderer. */}
        {detailEntries.map(([key, value]) => (
          <DetailField
            key={`${itemId}-${key}`}
            fieldKey={key}
            value={value}
            collapsible={collapsible}
          />
        ))}
      </div>
    </div>
  ) : (
    /* ─── STATIC MODE (NO DROPDOWN STYLING) ─── */
    // Static mode: keep details always visible with print/ATS-friendly structure.
    <div className={`${styles.staticContent} ${detailStyles.staticContent}`}>
      {detailEntries.map(([key, value]) => (
        <DetailField
          key={`${itemId}-${key}`}
          fieldKey={key}
          value={value}
          collapsible={collapsible}
        />
      ))}
    </div>
  );
};
