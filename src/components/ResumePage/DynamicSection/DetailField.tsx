/**
 * File: src/components/ResumePage/DynamicSection/DetailField.tsx
 * Author: Harshita Gawas
 * Description: Dynamic field renderer for entry details.
 * Created on: 29/03/2026
 * Last Modified: 29/03/2026
 */

import React from "react";
import styles from "./DetailField.module.css";
import mediaStyles from "./MediaCard.module.css";
import {
  HIDDEN_LABEL_KEYS,
  LINK_KEYS,
  MEDIA_KEYS,
  formatLabel,
  isLinkLike,
  isMediaLike,
} from "./helpers";
import { MediaCard } from "./MediaCard";

// Purpose: Render one dynamic detail field by detecting its value shape (text, links, media, arrays, nested objects).

/**
 * Handles rendering of each field dynamically
 */
interface DetailFieldProps {
  fieldKey: string;
  value: unknown;
  collapsible: boolean;
}

export const DetailField: React.FC<DetailFieldProps> = ({
  fieldKey,
  value,
  collapsible,
}) => {
  // Skip empty values so no blank UI blocks are rendered.
  if (value === null || value === undefined || value === "") return null;

  // Build display metadata from the raw data key.
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
    // Media-like URL (image/pdf/file) is rendered as a card preview.
    if (isMediaLike(value)) {
      return (
        <div className={styles.detailBlock}>
          {showLabel && <p className={styles.label}>{label}</p>}
          <div className={mediaStyles.imageGrid}>
            <MediaCard src={value} alt={`${label} preview`} />
          </div>
        </div>
      );
    }

    // Generic URL string is rendered as a clickable link.
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

    // Plain text string fallback.
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
    // Ignore empty arrays.
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
          <div className={mediaStyles.imageGrid}>
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
