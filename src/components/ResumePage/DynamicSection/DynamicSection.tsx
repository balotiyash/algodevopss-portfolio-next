/**
 * File: src/components/ResumePage/DynamicSection/DynamicSection.tsx
 * Author: Harshita Gawas
 * Description: Dynamic section component for the Resume page.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */
"use client";

import React, { KeyboardEvent, useId, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./DynamicSection.module.css";
import {
  DETAIL_PRIORITY_KEYS,
  HEADER_KEYS,
  HIDDEN_LABEL_KEYS,
  LINK_KEYS,
  MEDIA_KEYS,
  formatLabel,
  getHeaderValues,
  isImageFile,
  isLinkLike,
  isMediaLike,
  isPdfFile,
} from "./helpers";

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
      <h2 id={`${sectionId}-heading`} className={styles.heading}>
        {title}
      </h2>

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
          <article key={itemId} className={styles.entry}>
            {/* ─── HEADER ROW ─── */}
            <div
              className={`${styles.row} ${!collapsible ? styles.staticRow : ""}`}
              role={collapsible ? "button" : undefined}
              tabIndex={collapsible ? 0 : undefined}
              aria-expanded={collapsible ? isOpen : undefined}
              aria-controls={collapsible ? detailsId : undefined}
              onClick={() => toggleItem(itemId)}
              onKeyDown={handleKeyDown(itemId)}
            >
              {/* LEFT CONTENT */}
              <div className={styles.left}>
                {collapsible && (
                  <h3 className={styles.title}>
                    {mainTitle || `${title} ${index + 1}`}
                  </h3>
                )}

                {subtitle ? (
                  <p className={styles.subtitle}>{subtitle}</p>
                ) : null}

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

            {/* ─── DETAILS SECTION ─── */}
            {collapsible ? (
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
              <div className={styles.staticContent}>
                {detailEntries.map(([key, value]) => (
                  <DetailField
                    key={`${itemId}-${key}`}
                    fieldKey={key}
                    value={value}
                    collapsible={collapsible}
                  />
                ))}
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
};

/**
 * Handles rendering of each field dynamically
 */
interface DetailFieldProps {
  fieldKey: string;
  value: unknown;
  collapsible: boolean;
}

const DetailField: React.FC<DetailFieldProps> = ({
  fieldKey,
  value,
  collapsible,
}) => {
  if (value === null || value === undefined || value === "") return null;

  const label = formatLabel(fieldKey);
  const showLabel = !HIDDEN_LABEL_KEYS.has(fieldKey);

  /**
   * Website link
   */
  if (fieldKey === "website" && typeof value === "string") {
    return (
      <div className={styles.detailBlock}>
        {showLabel && collapsible && <p className={styles.label}>{label}</p>}
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {value}
        </a>
      </div>
    );
  }

  /**
   * String values
   */
  if (typeof value === "string") {
    if (isMediaLike(value)) {
      return (
        <div className={styles.detailBlock}>
          {showLabel && <p className={styles.label}>{label}</p>}
          <div className={styles.imageGrid}>
            <MediaCard src={value} alt={`${label} preview`} />
          </div>
        </div>
      );
    }

    if (isLinkLike(value)) {
      return (
        <div className={styles.detailBlock}>
          {showLabel && <p className={styles.label}>{label}</p>}
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {value}
          </a>
        </div>
      );
    }

    return (
      <div className={styles.detailBlock}>
        {showLabel && <p className={styles.label}>{label}</p>}
        <p className={styles.text}>{value}</p>
      </div>
    );
  }

  /**
   * Number / Boolean
   */
  if (typeof value === "number" || typeof value === "boolean") {
    return (
      <div className={styles.detailBlock}>
        {showLabel && <p className={styles.label}>{label}</p>}
        <p className={styles.text}>{String(value)}</p>
      </div>
    );
  }

  /**
   * Array handling (images, links, bullets, etc.)
   */
  if (Array.isArray(value)) {
    if (value.length === 0) return null;

    // Media arrays
    if (
      (MEDIA_KEYS.has(fieldKey) ||
        value.every((item) => typeof item === "string" && isMediaLike(item))) &&
      value.every((item) => typeof item === "string")
    ) {
      return (
        <div className={styles.detailBlock}>
          {showLabel && <p className={styles.label}>{label}</p>}
          <div className={styles.imageGrid}>
            {value.map((item, index) => (
              <MediaCard
                key={`${fieldKey}-${index}`}
                src={item as string}
                alt={`${label} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      );
    }

    // Link arrays
    if (
      LINK_KEYS.has(fieldKey) &&
      value.every(
        (item) =>
          typeof item === "object" &&
          item !== null &&
          "url" in item &&
          typeof item.url === "string",
      )
    ) {
      return (
        <div className={styles.detailBlock}>
          {showLabel && <p className={styles.label}>{label}</p>}
          <div className={styles.linkList}>
            {value.map((item, index) => {
              const link = item as { label?: string; url: string };
              return (
                <a
                  key={`${fieldKey}-${index}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.label || link.url}
                </a>
              );
            })}
          </div>
        </div>
      );
    }

    // Bullets
    if (
      fieldKey === "bullets" &&
      value.every((item) => typeof item === "string")
    ) {
      return (
        <div className={styles.detailBlock}>
          {showLabel && <p className={styles.label}>{label}</p>}
          <ul className={styles.list}>
            {value.map((item, index) => (
              <li key={`${fieldKey}-${index}`}>{item as string}</li>
            ))}
          </ul>
        </div>
      );
    }

    // Tech stack / features
    if (
      (fieldKey === "techStack" || fieldKey === "features") &&
      value.every((item) => typeof item === "string")
    ) {
      return (
        <div className={styles.detailBlock}>
          {showLabel && <p className={styles.label}>{label}</p>}
          <p className={styles.text}>{(value as string[]).join(", ")}</p>
        </div>
      );
    }

    // Generic string array
    if (value.every((item) => typeof item === "string")) {
      return (
        <div className={styles.detailBlock}>
          {showLabel && <p className={styles.label}>{label}</p>}
          <ul className={styles.list}>
            {value.map((item, index) => (
              <li key={`${fieldKey}-${index}`}>{item as string}</li>
            ))}
          </ul>
        </div>
      );
    }

    // Object arrays
    if (value.every((item) => typeof item === "object" && item !== null)) {
      return (
        <div className={styles.detailBlock}>
          {showLabel && <p className={styles.label}>{label}</p>}
          <div className={styles.objectList}>
            {value.map((item, index) => (
              <div key={`${fieldKey}-${index}`} className={styles.objectCard}>
                {Object.entries(item as Record<string, unknown>).map(
                  ([nestedKey, nestedValue]) => (
                    <DetailField
                      key={`${fieldKey}-${index}-${nestedKey}`}
                      fieldKey={nestedKey}
                      value={nestedValue}
                      collapsible={collapsible}
                    />
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  /**
   * Nested object
   */
  if (typeof value === "object") {
    return (
      <div className={styles.detailBlock}>
        {showLabel && <p className={styles.label}>{label}</p>}
        <div className={styles.objectCard}>
          {Object.entries(value as Record<string, unknown>).map(
            ([nestedKey, nestedValue]) => (
              <DetailField
                key={`${fieldKey}-${nestedKey}`}
                fieldKey={nestedKey}
                value={nestedValue}
                collapsible={collapsible}
              />
            ),
          )}
        </div>
      </div>
    );
  }

  return null;
};

/**
 * Media renderer (Image / PDF / File)
 */
interface MediaCardProps {
  src: string;
  alt: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ src, alt }) => {
  if (isPdfFile(src)) {
    return (
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fileLinkCard}
      >
        <span className={styles.mediaLabel}>Open PDF</span>
        <span className={styles.mediaValue}>{src.split("/").pop()}</span>
      </a>
    );
  }

  if (isImageFile(src)) {
    return <img src={src} alt={alt} className={styles.image} />;
  }

  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fileLinkCard}
    >
      <span className={styles.mediaLabel}>Open File</span>
      <span className={styles.mediaValue}>{src.split("/").pop()}</span>
    </a>
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
