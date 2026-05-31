/**
 * File: src/data/ResumeData/awards.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Award data for the Resume page.
 * Updated on: 01/06/2026
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
    title: "Organised and executed a LOW-CODE IoT Hackathon",
    description:
      "Successfully organized and executed a LOW-CODE IoT Hackathon, fostering innovation and collaboration among participants in the field of Internet of Things.",
    images: ["/awards/low-code.jpg"],
  },
  {
    id: 2,
    title: "Aavishkar Participation Certificate",
    description:
      "Aavishkar is an annual Inter-Collegiate Research Convention organized by the Department of Students' Development of Mumbai University.",
    images: ["/awards/aavishkar.jpg"],
  },
  {
    id: 3,
    title: "TSEC CodeStorm Codeissance Hackathon",
    description:
      "Participated in inter-college hackathons, developing innovative solutions while working collaboratively in fast-paced environments.",
    images: ["/awards/tsec.jpg"],
  },
  {
    id: 4,
    title: "RGIT Recursion Hackathon",
    description:
      "Actively participated in inter-college hackathons, collaborating on innovative solutions under competitive development environments.",
    images: ["/awards/rgit.jpg"],
  },
  {
    id: 5,
    title: "Conducted a 3-day hands-on workshop on AI/ML/DL for B.Sc. AI students at VESASC",
    description:
      "Facilitated an intensive AI workshop covering machine learning fundamentals, deep learning concepts, and practical model-building sessions.",
    images: ["/portrait1.png", "/sample.png"],
  },
  {
    id: 6,
    title: "Conducted a 3-day hands-on workshop on React JS for 2nd Year Polytechnic students at VESP",
    description:
      "Facilitated an intensive React JS workshop covering component-based development, state handling, and responsive frontend application design.",
    images: ["/awards/react-vesp-1.jpg", "/awards/react-vesp-2.jpg"],
  },
  {
    id: 7,
    title: "Serving ISTE – Students Chapter KJSIT as a Chairperson for the academic year 2026-27",
    description:
      "Leading student chapter initiatives by organizing technical events, workshops, and collaborative activities for academic engagement.",
    images: ["/awards/somaiya.jpg", "/awards/iste.jpg"],
  },
  {
    id: 8,
    title: "PICT TechFiesta Hackathon ",
    description:
      "Certificate of Participation, 24 Hours Offline Hackathon, PICT - Pune.",
    images: ["awards/pict.jpg"],
  },
  {
    id: 9,
    title: "KJSIT Code Odyssey Hackathon",
    description:
      "Certificate of Excellence of 24 Hours Offline Hackathon at KJSIT, Sion.",
    images: ["awards/code-odyssey.jpg"],
  },
  {
    id: 10,
    title: "Conducted a 2-day hands-on workshop on Excel Sheets for B.Sc. AI students at VESASC",
    description:
      "Trained students in advanced Excel techniques, data organization, formulas, and productivity-focused spreadsheet management practices.",
    images: ["/awards/excel-1.jpg", "/awards/excel-2.jpg"],
  },
  {
    id: 12,
    title: "Conducted a 2-day hands-on workshop on React JS for B.Sc. AI students at VESASC",
    description:
      "Led practical React JS sessions focused on component-based development, state handling, and responsive frontend application design.",
    images: ["/awards/react-1.jpg", "/awards/react-2.jpg"],
  },
  {
    id: 13,
    title: "VESP Technothon Hackathon",
    description:
      "Certificate of Participation of 24 Hours Offline Diploma Level Hackathon at VESP, Chembur.",
    images: ["awards/vesp-technothon.jpg"],
  },
  {
    id: 14,
    title: "2nd Prize in Software Project Competition at VESP for VES Polytechnic App",
    description:
      "Secured second place for developing an application that streamlined student-focused academic and campus-related workflows.",
    images: ["/awards/vesp-2nd.jpg"],

  },
];

