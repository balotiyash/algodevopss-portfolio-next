/**
 * File: src/data/ResumeData/awards.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Award data for the Resume page.
 * Created on: 22/05/2026
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
    title: "2nd Prize in Software Project Competition at VESP for VES Polytechnic App",
    description:
      "Secured second place for developing an application that streamlined student-focused academic and campus-related workflows.",
    images: ["/portrait1.png", "/sample.png"],

  },
  {
    id: 2,


    title: "VESP – Chembur, KJSIT – Sion, PICT – Pune, RGIT – Andheri, TSEC – Bandra (Hackathon Participations)",
    description:
      "Actively participated in inter-college hackathons, collaborating on innovative solutions under competitive development environments.",
    images: ["/portrait1.png", "/sample.png"],
  },
  {
    id: 3,
    title: "Conducted a 2-day hands-on workshop on Excel Sheets for B.Sc. AI students at VESASC",
    description:
      "Trained students in advanced Excel techniques, data organization, formulas, and productivity-focused spreadsheet management practices.",
    images: ["/portrait1.png", "/sample.png"],
  },
  {
    id: 4,
    title: "Conducted a 2-day hands-on workshop on React JS for B.Sc. AI students at VESASC",
    description:
      "Led practical React JS sessions focused on component-based development, state handling, and responsive frontend application design.",
    images: ["/portrait1.png", "/sample.png"],
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
    title: "Serving ISTE – Students Chapter KJSIT as a Chairperson for the academic year 2025-26",
    description:
      "Leading student chapter initiatives by organizing technical events, workshops, and collaborative activities for academic engagement.",
    images: ["/portrait1.png", "/sample.png"],

  },
  {
    id: 7,
    title: "Best Full-Stack Project Showcase",
    description:
      "Recognized for building a scalable full-stack portfolio with optimized UI performance, reusable architecture, and smooth deployment workflows.",
    images: ["/sample.png", "/try.png"],
  },

  {
    id: 8,
    title: "VESP Technothon Hackathon",
    description:
      "Certificate of Participation of 24 Hours Offline Diploma Level Hackathon at VESP, Chembur.",
    images: ["awards/vesp-technothon.jpg"],
  },

  {
    id: 9,
    title: "Code Odyssey Hackathon",
    description:
      "Certificate of Excellence of 24 Hours Offline Hackathon at KJSIT, Sion.",
    images: ["awards/code-odyssey.jpg"],
  },

  {
    id: 10,
    title: "PICT Hackathon Certificate",
    description:
      "Certificate of Participation, 24 Hours Offline Hackathon, PICT - Pune.",
    images: ["awards/PICT.jpg"],
  },
];
