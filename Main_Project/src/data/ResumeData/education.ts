/**
 * File: src/data/ResumeData/education.ts
 * Author: Harshita Gawas
 * Description: Education data for the Resume page.
 * Created on: 16/03/2026
 */

// Each semester now carries its own certificate
export interface SemesterData {
  label: string; // "Sem 1"
  score: string; // "9.5 SGPI"
  certificate?: string; // image URL
}

export interface ResumeEducation {
  id: number;
  degree: string;
  institution: string;
  location: string;
  status: string;
  from?: string; //duration
  to?: string;
  board?: string;
  semesters?: SemesterData[];
}

export const education: ResumeEducation[] = [
  {
    id: 1,
    degree: "B.Tech IT",
    institution: "K.J. Somaiya Institute of Technology",
    location: "Mumbai",
    status: "Pursuing",
    from: "2022",
    to: "2026",
    board: "Mumbai University",
    semesters: [
      {
        label: "Sem 1",
        score: "9.5 SGPI",
        certificate: "/Portfolio.pdf",
      },
      {
        label: "Sem 2",
        score: "9.7 SGPI",
        certificate: "/Portfolio.pdf",
      },
    ],
  },
];
