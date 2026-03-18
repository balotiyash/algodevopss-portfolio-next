/*
 * File: src/app/page.tsx
 * Author: Harshita Gawas
 * Description: Main page for the Portfolio application.
 * Created on: 15/03/2026
 * Last Modified: 17/03/2026
 */

import { AboutMe } from "@/components/HomePage/AboutMeSection/AboutMe";
import { Hero } from "@/components/HomePage/HeroSection/Hero";
import { Marquee } from "@/components/HomePage/HeroSection/Marquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <AboutMe />
    </main>
  );
}
