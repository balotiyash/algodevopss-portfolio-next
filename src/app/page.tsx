/*
 * File: src/app/page.tsx
 * Author: Harshita Gawas, Neha Balotia
 * Description: Main page for the Portfolio application.
 * Created on: 15/03/2026
 * Last Modified: 24/04/2026
 */

import { AboutMe } from "@/components/HomePage/AboutMeSection/AboutMe";
import { Contact } from "@/components/HomePage/ContactSection/Contact";
import { Experience } from "@/components/HomePage/ExperienceSection/Experience";
import { Hero } from "@/components/HomePage/HeroSection/Hero";
import { Marquee } from "@/components/HomePage/HeroSection/Marquee";
import { Projects } from "@/components/HomePage/ProjectSection/Projects";
import TechStackSection from "@/components/HomePage/TechStackSection/TechStackSection";

// root page
export default function Home() {
  return (
    <main>
      {/* hero section */}
      <Hero />
      {/* marquee section under hero */}
      <Marquee />
      {/* about me section */}
      <AboutMe />
      {/* tech stack section */}
      <TechStackSection />
      {/* projects section */}
      <Projects />
      {/* experience section */}
      <Experience />
      {/* contact section */}
      <Contact />
    </main>
  );
}
