/**
 * File: src/data/ResumeData/education.ts
 * Author: Harshita Gawas, Neha Balotia, Yash Balotiya
 * Description: Education data for the Resume page.
 * Created on: 27/04/2026
 * Last modified: 13/05/2026
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
    degree: "B. Tech. (IT) - Honors in AIML - Minor in IoT",
    institution: "K J Somaiya Institute of Technology",
    location: "Sion, Mumbai",
    status: "Pursuing",
    from: "2024",
    to: "Present",
    board: "Mumbai University (MU)",
    semesters: [
      {
        label: "3rd Semester",
        score: "9.71 SGPI",
        // certificate: "/Portfolio.pdf",
      },
      {
        label: "4th Semester",
        score: "9.73 SGPI",
        // certificate: "/Portfolio.pdf",
      },
      {
        label: "5th Semester",
        score: "9.64 SGPI", 
        // certificate: "/Portfolio.pdf",
      },
    ],
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Vivekanand Education Society's Polytechnic",
    location: "Chembur, Mumbai",
    status: "Completed",
    from: "2022",
    to: "2024",
    board: "Maharashtra State Board of Technical Education (MSBTE)",
    semesters: [
      {
        label: "3rd Semester",
        score: "85.07%",
        // certificate: "/Portfolio.pdf",
      },
      {
        label: "4th Semester",
        score: "87.47%",
        // certificate: "/Portfolio.pdf",
      },
      {
        label: "5th Semester",
        score: "91.11%",
        // certificate: "/Portfolio.pdf",
      },
      {
        label: "6th Semester",
        score: "91.88%",
        // certificate: "/Portfolio.pdf",
      },
    ],
  },
  {
    id: 3,
    degree: "Higher Secondary Certificate (HSC) - Technical Science",
    institution: "K J Somaiya College of Science and Commerce",
    location: "Vidyavihar, Mumbai",
    status: "Completed",
    from: "2021",
    to: "2022",
    board: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBHSC)",
    semesters: [
      {
        label: "Percentage",
        score: "74.17%",
        // certificate: "/Portfolio.pdf",
      },
    ],
  },
  {
    id: 4,
    degree: "Electrical Technician",
    institution: "K J Somaiya Pvt. ITI",
    location: "Vidyavihar, Mumbai",
    status: "Completed",
    from: "2018",
    to: "2020",
    board: "National Council for Vocational Training (NCVT)",
    semesters: [
      {
        label: "1st Year",
        score: "85.71%",
        // certificate: "/Portfolio.pdf",
      },
      {
        label: "2nd Year",
        score: "87.86%",
        // certificate: "/Portfolio.pdf",
      },
    ],
  },
  {
    id: 5,
    degree: "Secondary School Certificate (SSC)",
    institution: "Adarsh Vidyalaya (KPES)",
    location: "Chembur, Mumbai",
    status: "Completed",
    from: "2017",
    to: "2018",
    board: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBHSC)",
    semesters: [
      {
        label: "Percentage",
        score: "81.60%",
        // certificate: "/Portfolio.pdf",
      },
    ],
  },
];
