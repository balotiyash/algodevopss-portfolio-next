/**
 * File: src/components/ResumePage/DynamicSection/DynamicSection.tsx
 * Author: Harshita Gawas
 * Description: Dynamic section component for the Resume page.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */
"use client";

import React, { KeyboardEvent, useId, useState } from "react";
import styles from "./DynamicSection.module.css";
import { EntryItem } from "./EntryItem";
import { SectionHeader } from "./SectionHeader";
import { DETAIL_PRIORITY_KEYS, HEADER_KEYS, getHeaderValues } from "./helpers";

/**
 * Props for DynamicSection
 */
interface DynamicSectionProps {
  title: string;
  data: Array<Record<string, unknown>>;

  /**
   * Controls dropdown behavior
   * true  → accordion (default)
   * false → always expanded (used for Summary / Skills)
   */
  collapsible?: boolean;
}

type DetailEntry = [string, unknown];

/**
 * Main Dynamic Section Component
 */
export const DynamicSection: React.FC<DynamicSectionProps> = ({
  title,
  data,
  collapsible = true, // ✅ default = dropdown enabled
}) => {
  /**
   * Tracks currently open item (only one per section)
   */
  const [openId, setOpenId] = useState<string | number | null>(null);

  /**
   * Unique ID for accessibility
   */
  const sectionId = useId();

  /**
   * Handles toggle logic
   * Disabled when collapsible = false
   */
  const toggleItem = (id: string | number) => {
    if (!collapsible) return; // 🚫 prevent toggle in static mode
    setOpenId((current) => (current === id ? null : id));
  };

  /**
   * Keyboard accessibility (Enter / Space)
   * Disabled for static sections
   */
  const handleKeyDown =
    (id: string | number) => (event: KeyboardEvent<HTMLDivElement>) => {
      if (!collapsible) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleItem(id);
      }
    };

  /**
   * Guard: no data → render nothing
   */
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return (
    <section
      className={styles.section}
      aria-labelledby={`${sectionId}-heading`}
    >
      {/* Section Heading */}
      <SectionHeader id={`${sectionId}-heading`} title={title} />

      {data.map((item, index) => {
        /**
         * Extract header values (title, subtitle, meta)
         */
        const { mainTitle, subtitle, meta } = getHeaderValues(item);

        /**
         * Ensure valid ID exists
         */
        const itemId = item.id as string | number | undefined;
        if (itemId === undefined || itemId === null) return null;

        /**
         * Show preview bullets only for Experience section
         */
        const defaultBullets =
          title === "Experience" &&
          Array.isArray(item.bullets) &&
          item.bullets.every((bullet) => typeof bullet === "string")
            ? (item.bullets as string[])
            : null;

        /**
         * Accessibility ID for details
         */
        const detailsId = `${sectionId}-details-${itemId}`;

        /**
         * Open state logic
         * - collapsible → controlled by state
         * - non-collapsible → always open
         */
        const isOpen = collapsible ? openId === itemId : true;

        /**
         * Extract detail entries (filtered + sorted)
         */
        const detailEntries = getDetailEntries(item).filter(
          ([key]) => !(title === "Experience" && key === "bullets"),
        );

        return (
          <EntryItem
            key={itemId}
            item={item}
            index={index}
            title={title}
            isOpen={isOpen}
            toggleItem={toggleItem}
            collapsible={collapsible}
            detailsId={detailsId}
            onKeyDown={handleKeyDown(itemId)}
            mainTitle={mainTitle}
            subtitle={subtitle}
            meta={meta}
            defaultBullets={defaultBullets}
            detailEntries={detailEntries}
          />
        );
      })}
    </section>
  );
};

/**
 * Extract + filter + sort detail fields
 */
const getDetailEntries = (item: Record<string, unknown>): DetailEntry[] => {
  const entries = Object.entries(item).filter(([key, value]) => {
    if (HEADER_KEYS.has(key) || key === "id") return false;

    if (value === null || value === undefined) return false;

    if (typeof value === "string") return value.trim().length > 0;

    if (Array.isArray(value)) return value.length > 0;

    if (typeof value === "object")
      return Object.keys(value as Record<string, unknown>).length > 0;

    return true;
  });

  return entries.sort(([leftKey], [rightKey]) => {
    const leftIndex = DETAIL_PRIORITY_KEYS.indexOf(leftKey);
    const rightIndex = DETAIL_PRIORITY_KEYS.indexOf(rightKey);

    if (leftIndex === -1 && rightIndex === -1)
      return leftKey.localeCompare(rightKey);

    if (leftIndex === -1) return 1;
    if (rightIndex === -1) return -1;

    return leftIndex - rightIndex;
  });
};
