/*
 * File: src/app/projects/page.tsx
 * Author: Harshita Gawas
 * Description: Page content for the Projects page.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */

"use client";

import React from "react";
import styles from "./page.module.css";

// Existing components (UNCHANGED)
import { Header } from "@/components/ResumePage/Header/Header";
import { Summary } from "@/components/ResumePage/Summary/Summary";

// ✅ New Dynamic Component
import { DynamicSection } from "@/components/ResumePage/DynamicSection/DynamicSection";

// ✅ Data imports
import { education } from "@/data/ResumeData/education";
import { workExperience } from "@/data/ResumeData/experience";
import { certifications } from "@/data/ResumeData/certifications";
import { projects } from "@/data/ResumeData/projects";
import { awards } from "@/data/ResumeData/awards";
import { skillsData } from "@/data/ResumeData/skills";
import { summaryData } from "@/data/ResumeData/summary";

const Resume: React.FC = () => {
  return (
    <main className={styles.page}>
      <div className={styles.paper}>
        {/* ─── Header ─── */}
        <div className={styles.resumeBlock}>
          <Header />
        </div>

        {/* ─── Summary ─── */}
        <div className={styles.resumeBlock}>
          <DynamicSection
            title="Professional Summary"
            data={summaryData}
            collapsible={false}
          />
        </div>

        {/* ─── Experience ─── */}
        <div className={styles.resumeBlock}>
          <DynamicSection title="Experience" data={workExperience} />
        </div>

        {/* ─── Projects ─── */}
        <div className={styles.resumeBlock}>
          <DynamicSection title="Projects" data={projects} />
        </div>

        {/* ─── Education ─── */}
        <div className={styles.resumeBlock}>
          <DynamicSection title="Education" data={education} />
        </div>

        {/* ─── Skills (kept separate intentionally) ─── */}
        <div className={styles.resumeBlock}>
          <DynamicSection
            title="Skills"
            data={skillsData}
            collapsible={false}
          />
        </div>

        {/* ─── Certifications ─── */}
        <div className={styles.resumeBlock}>
          <DynamicSection title="Certifications" data={certifications} />
        </div>

        {/* ─── Awards ─── */}
        <div className={styles.resumeBlock}>
          <DynamicSection title="Awards" data={awards} />
        </div>
      </div>
    </main>
  );
};

export default Resume;
