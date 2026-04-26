/**
 * File: src/data/ResumeData/awards.ts
 * Author: Harshita Gawas
 * Description: Award data for the Resume page.
 * Created on: 16/03/2026
 */

export interface ResumeAward {
  id: number;
  title: string;
  description: string;
  images: string[];
}

export const awards: ResumeAward[] = [
  {
    id: 1,
    title: "Best Full-Stack Project Showcase",
    description:
      "Recognized for delivering a production-ready full-stack portfolio with performance-focused UI, reusable architecture, and clean deployment workflows.",
    images: ["/sample.png", "/try.png"],
  },
  {
    id: 2,
    title: "Conducted a 3-day hands-on workshop on AI/ML/DL for B.Sc. AI students at VESASC",
    description:
      "Awarded for improving user journey consistency and creating scalable design patterns across portfolio modules and resume presentation sections.",
    images: ["/portrait1.png", "/sample.png"],
  },
  {
    id: 3,
    title: "Conducted a 2-day hands-on workshop on Excel Sheets for B.Sc. AI students at VESASC",
    description:
      "Awarded for improving user journey consistency and creating scalable design patterns across portfolio modules and resume presentation sections.",
    images: ["/portrait1.png", "/sample.png"],
  },
  {
    id: 4,
    title: "Conducted a 2-day hands-on workshop on React JS for B.Sc. AI students at VESASCConducted a 2-day hands-on workshop on React JS for B.Sc. AI students at VESASC",
    description:
      "Awarded for improving user journey consistency and creating scalable design patterns across portfolio modules and resume presentation sections.",
    images: ["/portrait1.png", "/sample.png"],
  },
  {
    id: 5,
    title: "2nd Prize in Software Project Competition at VESP for VES Polytechnic App",
    description:
      "Awarded for improving user journey consistency and creating scalable design patterns across portfolio modules and resume presentation sections.",
    images: ["/portrait1.png", "/sample.png"],
  },
  {
    id: 6,
    title: "VESP – Chembur, KJSIT – Sion, PICT – Pune, RGIT – Andheri, TSEC – Bandra (Hackathon Participations)",
    description:
      "Awarded for improving user journey consistency and creating scalable design patterns across portfolio modules and resume presentation sections.",
    images: ["/portrait1.png", "/sample.png"],
  },
  {
    id: 7,
    title: "Serving ISTE – Students Chapter KJSIT as a Chairperson for the academic year 2025-26",
    description:
      "Awarded for improving user journey consistency and creating scalable design patterns across portfolio modules and resume presentation sections.",
    images: ["/portrait1.png", "/sample.png"],
  },
];
