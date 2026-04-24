/**
 * File: src/components/MoreProjects/ProjectsPagination.tsx
 * Author: Harshita Gawas
 * Description: Projects pagination component for the More Projects page.
 * Created on: 20/03/2026
 * Last Modified: 31/03/2026
 */

import styles from "./ProjectsPagination.module.css";

type ProjectsPaginationProps = {
  // Current active page number.
  currentPage: number;
  // Total number of pages available.
  totalPages: number;
  // Callback to update page when user navigates.
  onPageChange: (page: number) => void;
};

// Purpose: Render pagination controls with Prev/Next buttons and page number buttons.
export const ProjectsPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: ProjectsPaginationProps) => {
  // Build [1..totalPages] array for page buttons.
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.pagination} aria-label="Projects pagination">
      {/* Previous button */}
      <button
        className={styles.pageButton}
        type="button"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page number buttons */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`${styles.pageButton} ${page === currentPage ? styles.activePage : ""}`}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {/* Next button */}
      <button
        className={styles.pageButton}
        type="button"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
};
