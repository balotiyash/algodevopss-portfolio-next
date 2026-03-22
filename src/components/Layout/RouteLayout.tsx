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

  if (isResumeRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <SideIcons />
      {children}
      <Footer />
    </>
  );
}
