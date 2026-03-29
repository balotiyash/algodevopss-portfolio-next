/*
 * File: src/app/projects/layout.tsx
 * Author: Harshita Gawas
 * Description: Layout for the Projects page.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */

import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

type ProjectsLayoutProps = {
  children: ReactNode;
};

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  // Projects route shell: navbar + content + footer only.
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
