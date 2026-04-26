/**
 * File: src/data/ResumeData/education.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Education data for the Resume page.
 * Created on: 27/04/2026
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
    from: "2024",
    to: "Present",
    board: "Mumbai University",
    semesters: [
      {
        label: "Aggregate Score",
        score: "9.5 SGPA",
        // certificate: "/Portfolio.pdf",
      },
    ],
  },
  {
    id: 2,
    degree: "Computer Engineering",
    institution: "Vivekanand Education Society's Polytechnic",
    location: "Mumbai",
    status: "Completed",
    from: "2022",
    to: "2024",
    board: "Maharashtra State Board of Technical Education",
    semesters: [
      {
        label: "Percentage",
        score: "91.49%",
        // certificate: "/Portfolio.pdf",
      },
    ],
  },
  {
    id: 3,
    degree: "Electrical Engineering",
    institution: "K.J. Somaiya Private I.T.I",
    location: "Mumbai",
    status: "Completed",
    from: "2018",
    to: "2020",
    board: "National Council for Vocational Training",
    semesters: [
      {
        label: "Percentage",
        score: "87.86%",
        // certificate: "/Portfolio.pdf",
      },
    ],
  },
  {
    id: 4,
    degree: "Secondary School Certificate (SSC)",
    institution: "Adarsh Vidyalaya School",
    location: "Mumbai",
    status: "Completed",
    from: "",
    to: "2018",
    board: "Maharashtra State Board of Secondary and Higher Secondary Education",
    semesters: [
      {
        label: "Percentage",
        score: "81.60%",
        // certificate: "/Portfolio.pdf",
      },
    ],
  },

];
