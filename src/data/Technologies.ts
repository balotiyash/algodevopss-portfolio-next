/*
 * File: src/data/Technologies.ts
 * Author: Harshita Gawas
 * Description: Data for the Technologies section of the Portfolio application.
 * Created on: 18/03/2026
 */
/* ─── Technology/tool data for the skills section ─── */

export interface Technology {
  name: string;
  icon: string;
  proficiency: number;
}

export const technologies: Technology[] = [
  { name: "Python", icon: "/pngs/python.png", proficiency: 88 },
  { name: "Flutter", icon: "/svgs/flutter.svg", proficiency: 85 },
  { name: "Kotlin", icon: "/pngs/Kotlin_Icon.png", proficiency: 85 },
  { name: "Swift", icon: "/pngs/swift.png", proficiency: 84 },
  { name: "Java", icon: "/pngs/java.png", proficiency: 87 },
  { name: "Node.js", icon: "/pngs/node.png", proficiency: 86 },
  { name: "PHP", icon: "/pngs/php.png", proficiency: 84 },
  { name: "Laravel", icon: "/pngs/laravel.png", proficiency: 84 },
  { name: "MongoDB", icon: "/pngs/mongodb.png", proficiency: 88 },
  { name: "HTML", icon: "/pngs/html.png", proficiency: 92 },
  { name: "JavaScript", icon: "/pngs/javascript.png", proficiency: 92 },
  { name: "Next.js", icon: "/pngs/nextjs.png", proficiency: 88 },
  { name: "Git", icon: "/svgs/git.svg", proficiency: 90 },
];
