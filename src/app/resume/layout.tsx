import type { ReactNode } from "react";
import styles from "./layout.module.css";
import { Download } from "@/components/ResumePage/Download/Download";

type ResumeLayoutProps = {
  children: ReactNode;
};

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <main className={styles.resumeLayout}>
      <Download />
      <section className={styles.content}>{children}</section>
    </main>
  );
}
