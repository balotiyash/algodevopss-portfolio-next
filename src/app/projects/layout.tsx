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
