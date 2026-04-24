/*
 * File: src/app/resume/layout.tsx
 * Author: Harshita Gawas
 * Description: Layout for the Resume page.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */
import type { ReactNode } from "react";
import styles from "./layout.module.css";
import { Download } from "@/components/ResumePage/Download/Download";
import { heroData } from "@/data/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${heroData.name} | Resume`,
  description: heroData.description,
};

type ResumeLayoutProps = {
  children: ReactNode;
};

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    //download resume + content
    <main className={styles.resumeLayout}>
      <Download />
      <section className={styles.content}>{children}</section>
    </main>
  );
}
