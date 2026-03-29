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
    <div
      id={detailsId}
      className={`${styles.details} ${styles.noPrint} ${
        isOpen ? styles.detailsOpen : ""
      }`}
      aria-hidden={!isOpen}
    >
      <div className={styles.detailsInner}>
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
