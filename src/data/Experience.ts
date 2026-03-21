/*
 * File: src/data/Experience.ts
 * Author: Harshita Gawas
 * Description: Data for the Experience section of the Portfolio application.
 * Created on: 19/03/2026
 */

/* ─── Experience data ─── */
export interface Experience {
  id: number;
  role: string;
  company: string;
  from: string;
  to: string;
  description: string;
  type: "education" | "work";
}
export const experiences: Experience[] = [
  /* 🎓 Education */
  {
    id: 1,
    role: "B.Tech Computer Engineering",
    company: "XYZ College",
    from: "2022",
    to: "2026",
    description:
      "Focused on software engineering, UI/UX design, and system architecture with hands-on academic projects.",
    type: "education",
  },
  {
    id: 2,
    role: "Higher Secondary (Science)",
    company: "ABC Junior College",
    from: "2020",
    to: "2022",
    description:
      "Built strong foundations in mathematics and computer science, sparking interest in technology and development.",
    type: "education",
  },
  {
    id: 3,
    role: "Secondary School",
    company: "XYZ High School",
    from: "2010",
    to: "2020",
    description:
      "Developed problem-solving skills and early exposure to computers and logical thinking.",
    type: "education",
  },

  /* 💼 Work */
  {
    id: 4,
    role: "Frontend Developer Intern",
    company: "Startup XYZ",
    from: "2024",
    to: "Present",
    description:
      "Developing responsive web interfaces using React and Next.js, improving performance and user experience.",
    type: "work",
  },
  {
    id: 5,
    role: "UI/UX Design Intern",
    company: "Creative Studio",
    from: "2023",
    to: "2024",
    description:
      "Designed user-centric interfaces and improved usability through research and prototyping.",
    type: "work",
  },
  {
    id: 6,
    role: "Freelance Web Developer",
    company: "Self-employed",
    from: "2022",
    to: "2023",
    description:
      "Built and deployed websites for small clients, focusing on clean UI, performance, and responsiveness.",
    type: "work",
  },
];
