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
    title: "Innovation in Product Experience",
    description:
      "Awarded for improving user journey consistency and creating scalable design patterns across portfolio modules and resume presentation sections.",
    images: ["/portrait1.png", "/sample.png"],
  },
];
