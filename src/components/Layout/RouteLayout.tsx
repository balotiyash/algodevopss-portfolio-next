/**
 * File: src/components/Layout/RouteLayout.tsx
 * Author: Harshita Gawas
 * Description: Route Layout component for the portfolio application.
 * Created on: 28/03/2026
 * Last Modified: 29/03/2026
 */
//use only at main page
"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar/Navbar";
import { SideIcons } from "@/components/SideIcons/SideIcons";
import { Footer } from "@/components/Footer/Footer";

type RouteLayoutProps = {
  children: ReactNode;
};

export function RouteLayout({ children }: RouteLayoutProps) {
  const pathname = usePathname();
  const isResumeRoute = pathname.startsWith("/resume");
  const isProjectsRoute = pathname.startsWith("/projects");

  if (isResumeRoute || isProjectsRoute) {
    return <>{children}</>;
  }
  // portfolio page layout with navbar, side icons and footer. Other routes (resume, more projects) have a simpler layout without these elements.
  return (
    <>
      <Navbar />
      <SideIcons />
      {children}
      <Footer />
    </>
  );
}
