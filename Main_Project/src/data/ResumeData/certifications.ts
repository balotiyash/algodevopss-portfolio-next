/**
 * File: src/data/ResumeData/certifications.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Certification data for the Resume page.
 * Created on: 27/04/2026
 */
export interface ResumeCertification {
  id: number;
  name: string;
  details?: string;
  image?: string; // NEW
}
export const certifications: ResumeCertification[] = [
  {
    id: 1,
    name: "Java",
    details: "Strong understanding of object-oriented programming, data structures, and building scalable backend applications using Java.",
    image: "/certificates/Java.pdf",
  },
  {
    id: 2,
    name: "Python",
    details: "Proficient in Python for scripting, data handling, and developing efficient applications with clean and readable code.",
    image: "/certificates/Python.pdf",
  },
  {
    id: 3,
    name: "IoT",
    details: "Hands-on experience with IoT systems, including sensor integration, data collection, and basic hardware-software interfacing.",
    image: "/certificates/IoT.pdf",
  },
  {
    id: 4,
    name: "Photoshop",
    details: "Skilled in Adobe Photoshop for photo editing, graphic design, and creating visually appealing digital content.",
    image: "/certificates/Photoshop.jpg",
  },
  {
    id: 5,
    name: "Financial Literacy Program",
    details: "Completed training in financial literacy covering budgeting, saving, investment basics, and personal financial planning.",
    image: "/certificates/Financial_Literacy.jpg",
  },
];
