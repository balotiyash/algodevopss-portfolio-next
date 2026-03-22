/* Resume page — ATS-friendly, black & white, printable */
import React from "react";
import { Header } from "@/components/ResumePage/Header/Header";
import { Summary } from "@/components/ResumePage/Summary/Summary";
import { Skills } from "@/components/ResumePage/Skills/Skills";
import styles from "./page.module.css";
import { Experience } from "@/components/ResumePage/Experience/Experience";
import { Education } from "@/components/ResumePage/Education/Education";
import { Certifications } from "@/components/ResumePage/Certifications/Certifications";
import { Projects } from "@/components/ResumePage/Projects/Projects";
import { Awards } from "@/components/ResumePage/Awards/Awards";

const Resume: React.FC = () => (
  <main className={styles.page}>
    <div className={styles.paper}>
      <div className={styles.resumeBlock}>
        <Header />
      </div>
      <div className={styles.resumeBlock}>
        <Summary />
      </div>
      <div className={styles.resumeBlock}>
        <Experience />
      </div>
      <div className={styles.resumeBlock}>
        <Projects />
      </div>
      <div className={styles.resumeBlock}>
        <Education />
      </div>
      <div className={styles.resumeBlock}>
        <Skills />
      </div>
      <div className={styles.resumeBlock}>
        <Certifications />
      </div>
      <div className={styles.resumeBlock}>
        <Awards />
      </div>
    </div>
  </main>
);

export default Resume;
