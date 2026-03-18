/*
 * File: src/app/page.tsx
 * Author: Harshita Gawas
 * Description: Main page for the Portfolio application.
 * Created on: 15/03/2026
 * Last Modified: 18/03/2026
 */

import { AboutMe } from "@/components/HomePage/AboutMeSection/AboutMe";
import { Hero } from "@/components/HomePage/HeroSection/Hero";
import { Marquee } from "@/components/HomePage/HeroSection/Marquee";
import { Technologies } from "@/components/HomePage/Technologies/Technologies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <AboutMe />
      <Technologies />
    </main>
  );
}
