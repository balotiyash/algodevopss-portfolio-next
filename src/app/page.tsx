/*
 * File: src/app/page.tsx
 * Author: Harshita Gawas
 * Description: Main page for the Portfolio application.
 * Created on: 15/03/2026
 * Last Modified: 20/03/2026
 */

import { AboutMe } from "@/components/HomePage/AboutMeSection/AboutMe";
import { Contact } from "@/components/HomePage/ContactSection/Contact";
import { Experience } from "@/components/HomePage/ExperienceSection/Experience";
import { Hero } from "@/components/HomePage/HeroSection/Hero";
import { Marquee } from "@/components/HomePage/HeroSection/Marquee";
import { Projects } from "@/components/HomePage/ProjectSection/Projects";
import { Technologies } from "@/components/HomePage/Technologies/Technologies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <AboutMe />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
