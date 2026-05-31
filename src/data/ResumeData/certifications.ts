/**
 * File: src/data/ResumeData/certifications.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Certification data for the Resume page.
 * Updated on: 01/06/2026
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
    name: "Java Training",
    details: "Strong understanding of object-oriented programming, data structures, and building scalable backend applications using Java.",
    image: "/certificates/Java.jpg",
  },
  {
    id: 2,
    name: "Python 3.4.3 Training",
    details: "Proficient in Python for scripting, data handling, and developing efficient applications with clean and readable code.",
    image: "/certificates/Python.jpg",
  },
  {
    id: 3,
    name: "IoT Workshop",
    details: "Hands-on experience with IoT systems, including sensor integration, data collection, and basic hardware-software interfacing.",
    image: "/certificates/IoT.jpg",
  },
  {
    id: 4,
    name: "Photoshop Training",
    details: "Skilled in Adobe Photoshop for photo editing, graphic design, and creating visually appealing digital content.",
    image: "/certificates/Photoshop.jpg",
  },
  {
    id: 5,
    name: "PHP Crash Course",
    details: "Completed an intensive PHP crash course covering backend fundamentals, server-side scripting, forms, sessions, and database connectivity.",
    image: "/certificates/php.jpg",
  },
  {
    id: 6,
    name: "Python for Beginners Training",
    details: "Completed foundational Python training covering programming logic, problem-solving, data structures, and practical application development.",
    image: "/certificates/Python-beginners.jpg",
  },
  {
    id: 7,
    name: "Selenium Fundamentals",
    details: "Certified in Selenium Automation Testing with hands-on experience in automated web testing and testing workflows.",
    image: "/certificates/selenium.jpg",
  },
  {
    id: 8,
    name: "Android Basics with Java",
    details: "Learned Android application development fundamentals using Java, including UI design, activity lifecycle, and mobile app functionality.",
    image: "/certificates/android-java.jpg",
  },
  {
    id: 9,
    name: "Selenium Fundamentals",
    details: "Certified in Selenium Automation Testing with hands-on experience in automated web testing and testing workflows.",
    image: "/certificates/selenium.jpg",
  },
  {
    id: 10,
    name: "Financial Literacy Program",
    details: "Completed training in financial literacy covering budgeting, saving, investment basics, and personal financial planning.",
    image: "/certificates/Financial_Literacy.jpg",
  },
];
