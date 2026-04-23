/**
 * File: src/components/ResumePage/DynamicSection/MediaCard.tsx
 * Author: Harshita Gawas
 * Description: Media renderer for images, PDFs, and file links.
 * Created on: 29/03/2026
 * Last Modified: 29/03/2026
 */

import React from "react";
import styles from "./MediaCard.module.css";
import { isImageFile, isPdfFile } from "./helpers";

// Purpose: Normalize media rendering by selecting image, PDF-link card, or generic file-link card.

/**
 * Media renderer (Image / PDF / File)
 */
interface MediaCardProps {
  src: string;
  alt: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({ src, alt }) => {
  // PDF files are shown as a labeled external-link card.
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

  // Image files are rendered inline as preview images.
  if (isImageFile(src)) {
    return <img src={src} alt={alt} className={styles.image} />;
  }

  // Any other file type falls back to a generic link card.
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
