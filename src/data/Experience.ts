/*
 * File: src/data/Experience.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Data for the Experience section of the Portfolio application.
 * Created on: 24/04/2026
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
    role: "Secondary School",
    company: "Adarsha Vidyalaya School",
    from: "2017",
    to: "2018",
    description:
      "Completed secondary education with a focus on mathematics, science and basic computer studies.",
    type: "education",
  },
  {
    id: 2,
    role: "ITI Electrical",
    company: "K. J. Somaiya Private I.T.I",
    from: "2018",
    to: "2020",
    description:
      "Trained in electrical wiring, circuit design, and maintenance of electrical equipment with hands-on practical experience.",
    type: "education",
  },
  {
    id: 3,
    role: "Computer Engineering",
    company: "Vivekanand Education Society’s Polytechnic",
    from: "2022",
    to: "2024",
    description:
      "Studied Computer Engineering, gaining skills in programming, data structures, databases, and software development.",
    type: "education",
  },
  {
    id: 4,
    role: "B. Tech. IT",
    company: "K.J. Somaiya Institute of Technology",
    from: "2022",
    to: "Present",
    description:
      "Pursuing B.Tech in Information Technology, developing strong skills in programming, data structures, database management, web development, and software engineering through academic projects.",
    type: "education",
  },

  /* 💼 Work */
  {
    id: 5,
    role: "Full Stack Android App Development Intern",
    company: "Mobond Software Consultancy Services",
    from: "June 2023",
    to: "July 2023",
    description:
      "Assisted in Android application development and feature implementation. Worked on backend integration and improving app functionality.",
    type: "work",
  },
  {
    id: 6,
    role: "Full Stack Web Development Intern",
    company: "Analytical Equipment Solutions",
    from: "September 2024",
    to: "December 2024",
    description:
      "Worked on developing and maintaining web applications.Gained hands-on experience in API development, database handling, and debugging.",
    type: "work",
  },
  {
    id: 7,
    role: "Full Stack Web Development Intern",
    company: "AY IT Solutions",
    from: "December 2024",
    to: "January 2025",
    description:
      "Developed web applications with focus on frontend and backend integration. Assisted in building responsive UI and handling server-side logic.",
    type: "work",
  },
  {
    id: 8,
    role: "Full Stack Development Intern",
    company: "Audix Technologies",
    from: "June 2025",
    to: "December 2025",
    description:
      "Contributed to full-stack application development using modern frameworks. Built and integrated APIs, improved UI components, and handled database operations.",
    type: "work",
  },
  {
    id: 9,
    role: "Freelance Web Developer",
    company: "AlgoDevOpss (Self-employed)",
    from: "September 2023",
    to: "Present",
    description:
      "Developed and deployed full-stack web applications using modern technologies. Worked on frontend and backend development, including APIs and database integration.",
    type: "work",
  },
];
