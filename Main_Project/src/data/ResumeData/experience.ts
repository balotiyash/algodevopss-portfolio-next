/**
 * File: src/data/ResumeData/experience.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Experience data for the Resume page.
 * Created on: 26/04/2026
 */

export interface ResumeExperience {
  id: number;
  role: string;
  company: string;
  location: string;
  from: string;
  to: string;
  bullets: string[];
  details?: string;
  techStack?: string[];
  features?: string[];
  website?: string;
  images?: string[];
  certificates?: string[];
  period?: string;
  manager?: string[];
}

export const workExperience: ResumeExperience[] = [
  {
    id: 1,
    role: "Freelancer (Full Stack Development)",
    company: "AlgoDevOpss",
    location: "Remote",
    from: "September 2023",
    to: "Present",
    bullets: [
      "Developed and deployed full-stack web applications using modern technologies. Worked on frontend and backend development, including APIs and database integration.",
    ],
    details:
      "Designed and implemented the application architecture, focusing on scalability and maintainability. Handled both frontend and backend integration, optimized performance, and ensured a seamless user experience through structured workflows and efficient data handling.",
    techStack: [
      "User Research",
      "UI/UX Design",
      "Responsive Design",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    features: [
      "Centralized customer and record management system",
      "Role-based access for admin and staff",
      "Process tracking and status updates",
      "Automated data entry and validation workflows",
      "Searchable database for quick information retrieval",
      "Dashboard for monitoring daily operations",
      "Secure data handling and storage"
    ],
    images: [
      "/projects/aes/1.png",
      "/projects/rupie-finance/1.png",
      "/projects/ijream/1.png",
      "/projects/taxpecharcha/1.png",
    ],
    // manager: ["Yash Balotiya", "(Self-Employed)"],
  },
  {
    id: 2,
    role: "Internship Trainee (Full Stack Development)",
    company: "Audix Technologies",
    location: "Hybrid, Thane, Mumbai",
    from: "June 2025",
    to: "December 2025",
    bullets: [
      "Contributed to full-stack application development using modern frameworks. Built and integrated APIs, improved UI components, and handled database operations.",
    ],
    details:
      "Worked across the full-stack development lifecycle, contributing to feature implementation, API integration, and database management. Collaborated with the team to enhance UI components, improve application performance, and ensure smooth frontend-backend communication in a production-oriented environment.",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git & GitHub"
    ],
    features: [
      "User authentication and role-based access control",
      "Responsive UI components for cross-device compatibility",
      "API integration for dynamic data handling",
      "CRUD operations for efficient data management",
      "Form validation with error handling",
      "Dashboard views for structured data presentation",
      "Real-time updates and state management"
    ],
    certificates: ["/certificates/audix_certificate.pdf"],

    period: "6 months",
    // manager: ["Sumi Rani"],
  },
  {
    id: 3,
    role: "Internship Trainee (Full Stack Development)",
    company: "AY IT Soulutions",
    location: "Remote",
    from: "December 2024",
    to: "January 2025",
    bullets: [
      "Developed web applications with focus on frontend and backend integration. Assisted in building responsive UI and handling server-side logic.",
    ],
    details:
      "Gained hands-on experience in full-stack development by contributing to frontend and backend integration tasks. Assisted in building responsive UI components, working with APIs, and understanding server-side logic within a collaborative remote development environment.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git & GitHub"
    ],
    features: [
      "Responsive user interface design",
      "Frontend-backend data integration",
      "Basic CRUD operations",
      "Form handling and validation",
      "API consumption for dynamic content",
      "Structured routing and navigation",
      "Database interaction for data storage"
    ],
    certificates: ["/certificates/ay_certificate.jpeg"],

    period: "2 months",
    // manager: ["Alice Johnson", "Bob Brown"],
  },
  {
    id: 4,
    role: "Internship Trainee (Full Stack Development)",
    company: "Analytical Equipment Soulutions",
    location: "Remote",
    from: "September 2024",
    to: "December 2024",
    bullets: [
      "Worked on developing and maintaining web applications.Gained hands-on experience in API development, database handling, and debugging.",
    ],
    details:
      "Contributed to the development and maintenance of web applications, focusing on API development, database operations, and debugging. Worked on improving application stability and performance while gaining practical exposure to structured backend logic and integration workflows.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git & GitHub"
    ],
    features: [
      "Dynamic web pages with backend data integration",
      "CRUD operations for data management",
      "API development and endpoint handling",
      "Form validation and error handling",
      "Database interaction and data structuring",
      "Debugging and issue resolution",
      "Responsive layout for multiple devices"
    ],

    certificates: ["/certificates/aes_certificate.pdf"],

    period: "4 months",
    // manager: ["Alice Johnson", "Bob Brown"],
  },
  {
    id: 5,
    role: "Internship Trainee (Full Stack Android App Development)",
    company: "Mobond SoftwareConsultancy Services (m-indicator App)",
    location: "Belapur, Navi Mumbai",
    from: "June 2023",
    to: "July 2023",
    bullets: [
      "Assisted in Android application development and feature implementation. Worked on backend integration and improving app functionality.",
    ],
    details:
      "Gained hands-on experience in Android development, working with team members to understand real-world project workflows, debugging processes, and application deployment practices.",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "Android Studio",
      "Google Sheets API",
      "Google Calendar API",
      "Google Drive API",
      "Google Maps API",
      "Google Authentication API",
    ],
    features: [
      "User interface development using Jetpack Compose",
      "REST API integration for data fetching",
      "Firebase integration for backend services",
      "Google Maps integration for location features",
      "Authentication using Google Sign-In",
      "Debugging and performance optimization",
    ],

    images: [
      "/projects/vesp-app/1.png",
      "/projects/vesp-app/2.png",
      "/projects/vesp-app/3.png",
    ],
    certificates: ["/certificates/mobond_certificate.pdf"],
    period: "6 months",
    // manager: ["John Doe", "Jane Smith"],
  },
];
