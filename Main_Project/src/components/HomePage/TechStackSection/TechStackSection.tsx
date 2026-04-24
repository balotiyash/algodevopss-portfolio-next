/**
 * File: src/components/HomePage/TechStackSection/TechStackSection.tsx
 * Author: Harshita Gawas
 * Description: TechStack Section component  for the TechStack section of the portfolio application.
 * Created on: 28/03/2026
 * Last Modified: 29/03/2026
 */

"use client";

// Importing necessary modules and components for the TechStackSection.
import { useEffect, useState } from "react";
import Image from "next/image";
import MarqueeRow from "./MarqueeRow";
import CornerDots from "./CornerDots";
import styles from "./TechStackSection.module.css";

// const LOGO_ASSET_VERSION = "20260319-2";
// const withAssetVersion = (src: string) => `${src}?v=${LOGO_ASSET_VERSION}`;

// Array of technology logos with their names and image sources
const techLogos = [
  { name: "Android", src: "/techstack/android.png" },
  { name: "Angular", src: "/techstack/angular.png" },
  { name: "Bootstrap", src: "/techstack/bootstrap.png" },
  { name: "C", src: "/techstack/c.png" },
  { name: "C++", src: "/techstack/cpp.png" },
  { name: "C#", src: "/techstack/csharp.png" },
  { name: "CSS", src: "/techstack/css.png" },
  { name: "Dart", src: "/techstack/dart.png" },
  { name: "FastAPI", src: "/techstack/fast.png" },
  { name: "Firebase", src: "/techstack/firebase.png" },
  { name: "Flask", src: "/techstack/flask.png" },
  { name: "Flutter", src: "/techstack/flutter.png" },
  { name: "HTML", src: "/techstack/html.png" },
  { name: "Java", src: "/techstack/java.png" },
  { name: "JavaScript", src: "/techstack/javascript.png" },
  { name: "Kotlin", src: "/techstack/Kotlin_Icon.png" },
  { name: "Laravel", src: "/techstack/laravel.png" },
  { name: "MySQL", src: "/techstack/mysql.png" },
  { name: "Next.js", src: "/techstack/nextjs.png" },
  { name: "Node.js", src: "/techstack/node.png" },
  { name: "Oracle", src: "/techstack/oracle.png" },
  { name: "PHP", src: "/techstack/php.png" },
  { name: "Python", src: "/techstack/python.png" },
  { name: "PyTorch", src: "/techstack/pytorch.png" },
  { name: "Spring", src: "/techstack/spring.png" },
  { name: "Swift", src: "/techstack/swift.png" },
  { name: "Tailwind CSS", src: "/techstack/tailwind.png" },
  { name: "TensorFlow", src: "/techstack/tensorflow.png" },
  { name: "TypeScript", src: "/techstack/ts.png" },
  { name: "Vue.js", src: "/techstack/vue.png" },
  { name: "Django", src: "/techstack/django.webp" },
  { name: "MongoDB", src: "/techstack/mongo.webp" },
  { name: "PostgreSQL", src: "/techstack/postgres.svg" },
  { name: "React", src: "/techstack/react-brands-solid-full.svg" },
  { name: "Electron", src: "/techstack/electron.png" },
];

//shuffled logos array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// TechStackSection Component
const TechStackSection = () => {
  // State to hold the shuffled logos for the marquee rows, initialized with the original techLogos array.
  const [forwardLogos, setForwardLogos] = useState(techLogos);
  const [reverseLogos, setReverseLogos] = useState(techLogos);

  // useEffect hook to shuffle the logos when the component mounts, ensuring a different order each time the page is loaded. The shuffling is done using the shuffleArray function, and the shuffled arrays are set in the state for both forward and reverse marquee rows.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setForwardLogos(shuffleArray(techLogos));
      setReverseLogos(shuffleArray(techLogos));
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  // Rendering the TechStackSection component, which includes a section title, two marquee rows for the technology logos (one scrolling forward and one in reverse), and decorative corner dots for visual enhancement. The logos are displayed using the Next.js Image component for optimized loading and rendering.
  return (
    // Main section container
    <section id="technologies" className={styles.section}>
      {/* Section Title */}
      <h2 className={styles.title}>
        <span>TECH</span> Stack
      </h2>

      {/* Top row  left */}
      <MarqueeRow repeat={2}>
        {forwardLogos.map((tech) => (
          <Image
            key={tech.name}
            src={tech.src}
            alt={tech.name}
            width={100}
            height={100}
            className={styles.logo}
          />
        ))}
      </MarqueeRow>

      {/* Bottom row shuffled */}
      <MarqueeRow reverse repeat={2}>
        {reverseLogos.map((tech) => (
          <Image
            key={tech.name}
            src={tech.src}
            alt={tech.name}
            width={100}
            height={100}
            className={styles.logo}
          />
        ))}
      </MarqueeRow>

      {/* Decorative corner dots */}
      <CornerDots className={styles.topLeft} />
      <CornerDots className={styles.topRight} />
      <CornerDots className={styles.bottomLeft} />
      <CornerDots className={styles.bottomRight} />
    </section>
  );
};

// Exporting the TechStackSection component as the default export of this module.
export default TechStackSection;
