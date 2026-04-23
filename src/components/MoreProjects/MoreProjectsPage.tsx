/**
 * File: src/components/MoreProjects/MoreProjectsPage.tsx
 * Author: Harshita Gawas
 * Description: More Projects page for the portfolio application.
 * Created on: 20/03/2026
 * Last Modified: 31/03/2026
 */
"use client";

import { useMemo, useState } from "react";
import { moreProjects } from "@/data/MoreProject";
import styles from "./MoreProjectsPage.module.css";
import { MoreProjectsHeader } from "./MoreProjectsHeader";
import { ProjectsList } from "./ProjectsList";
import { ProjectsPagination } from "./ProjectsPagination";

// Purpose: Main page that manages pagination and composes all subcomponents.

// Number of projects displayed per page.
const PROJECTS_PER_PAGE = 5;

export default function MoreProjectsPage() {
  // Track current active page for pagination.
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages from available projects.
  const totalPages = Math.ceil(moreProjects.length / PROJECTS_PER_PAGE);

  // Slice projects for current page using useMemo to avoid unnecessary recalculations.
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    const end = start + PROJECTS_PER_PAGE;
    return moreProjects.slice(start, end);
  }, [currentPage]);

  return (
    <section className={styles.page}>
      {/* Header with back button and title */}
      <MoreProjectsHeader />

      {/* Projects list with pagination support */}
      <ProjectsList projects={paginatedProjects} currentPage={currentPage} />

      {/* Pagination controls */}
      <ProjectsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
