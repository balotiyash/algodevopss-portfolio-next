/**
 * File: src/components/ResumePage/DynamicSection/EntryItem.tsx
 * Author: Harshita Gawas
 * Description: Entry wrapper for DynamicSection rows and details.
 * Created on: 29/03/2026
 * Last Modified: 29/03/2026
 */

import React, { KeyboardEvent } from "react";
import styles from "./EntryItem.module.css";
import { EntryHeaderRow } from "./EntryHeaderRow";
import { EntryDetails } from "./EntryDetails";

type DetailEntry = [string, unknown];

interface EntryItemProps {
  item: Record<string, unknown>;
  index: number;
  title: string;
  isOpen: boolean;
  toggleItem: (id: string | number) => void;
  collapsible: boolean;
  detailsId: string;
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
  mainTitle: string | null;
  subtitle: string | null;
  meta: string | null;
  defaultBullets: string[] | null;
  detailEntries: DetailEntry[];
}

/**
 * Represents one resume entry and wires row and details rendering together.
 */
export const EntryItem: React.FC<EntryItemProps> = ({
  item,
  index,
  title,
  isOpen,
  toggleItem,
  collapsible,
  detailsId,
  onKeyDown,
  mainTitle,
  subtitle,
  meta,
  defaultBullets,
  detailEntries,
}) => {
  /**
   * Extract stable id used in accessibility attributes and click handlers.
   */
  const itemId = item.id as string | number;

  return (
    <article className={styles.entry}>
      {/* ─── HEADER ROW ─── */}
      <EntryHeaderRow
        collapsible={collapsible}
        isOpen={isOpen}
        detailsId={detailsId}
        itemId={itemId}
        mainTitle={mainTitle}
        title={title}
        index={index}
        subtitle={subtitle}
        defaultBullets={defaultBullets}
        meta={meta}
        toggleItem={toggleItem}
        onKeyDown={onKeyDown}
      />

      {/* ─── DETAILS SECTION ─── */}
      <EntryDetails
        collapsible={collapsible}
        isOpen={isOpen}
        detailsId={detailsId}
        detailEntries={detailEntries}
        itemId={itemId}
      />
    </article>
  );
};
