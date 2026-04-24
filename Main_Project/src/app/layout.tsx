/*
 * File: src/app/layout.tsx
 * Author: Harshita Gawas
 * Description: Layout for the Portfolio application.
 * Created on: 15/03/2026
 * Last Modified: 23/03/2026
 */

// root page layout
import type { Metadata } from "next";
import "./globals.css";
import { RouteLayout } from "@/components/Layout/RouteLayout";
import { heroData } from "@/data/Hero";
export const metadata: Metadata = {
  title: `${heroData.name} | Portfolio`,
  description: heroData.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* navbar+ sideicons + footer */}
        <RouteLayout>{children}</RouteLayout>
      </body>
    </html>
  );
}
