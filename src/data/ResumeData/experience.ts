/**
 * File: src/data/ResumeData/experience.ts
 * Author: Harshita Gawas, Neha Balotia, Yash Balotiya
 * Description: Experience data for the Resume page.
 * Created on: 26/04/2026
 * Last modified: 13/05/2026
 */

export interface ResumeExperience {
  id: number;
  role: string;
  company: string;
  location: string;
  from: string;
  to: string;
  bullets?: string[];
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
    role: "Founder",
    company: "AlgoDevOpss Pvt. Ltd.",
    location: "Chembur, Mumbai",
    from: "September 2023",
    to: "Present",
    // bullets: [],
    details: "Founded a startup focused on providing software development and DevOps solutions. Responsible for overseeing all aspects of the business, including project management, client relations, and technical development. Led a team of developers to deliver high-quality software solutions to clients across various industries.",
    // techStack: [],
    features: ["All Modern Web / Mobile Technologies", "Cloud Platforms","DevOps Tools", "AI/ML Frameworks"],
    website: "https://www.algodevopss.in/",
    // images: [],
    // certificates: [],
    // period: "",
    manager: ["Founder: Mr. Yash Balotiya", "Co-Founder: Mr. Ganesh Gupta"],
  },
  {
    id: 2,
    role: "Research & Development Trainee - AI/ML & IoT",
    company: "JalViks Pvt. Ltd. (IIT Bombay)",
    location: "Powai, Mumbai",
    from: "February 2026",
    to: "May 2027",
    // bullets: [],
    details: "Conducted research and development in the fields of Artificial Intelligence, Machine Learning, and Internet of Things. Worked on projects involving AI/ML, NLP models development, IoT device integration, and data analysis to create innovative solutions for real-world problems.",
    techStack: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "IoT", "Arduino", "Raspberry Pi", "Machine Learning", "Data Analysis", "DevOps", "Cloud Computing", "Networking", "Mobile App Development", "Full Stack Development"],
    // features: [],
    period: "1 year 4 months",
    // images: [],
    // certificates: [],
    website: "https://jalviks.com/",
    manager: ["Founder: Mr. Ganesh Gupta"],
  },
  {
    id: 3,
    role: "Full Stack Development Intern",
    company: "Audix Techno Consulting Solutions Pvt. Ltd.",
    location: "Thane, MMR",
    from: "June 2025",
    to: "January 2026",
    // bullets: [],
    details:
      "Worked across the full-stack development lifecycle, contributing to feature implementation, API integration, and database management. Collaborated with the team to enhance UI components, improve application performance, and ensure smooth frontend-backend communication in a production-oriented environment.",
    techStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git & GitHub", "Flask", "Django", "Python", "VPS Hosting", "NLP Chatbot Development"],
    features: ["June 2025 - January 2026"],
    certificates: ["/certificates/audix_certificate.pdf"],
    period: "6 months",
    // images: [],
    website: "https://www.audixindia.in/",
    manager: ["Program Manager: Mr. Nikhil Raut", "Team Lead: Mr. Ruturaj Salunkhe"],
  },
  {
    id: 4,
    role: "Team Lead Intern - Web, ML & DL Model Development",
    company: "AY Techinsight Pvt. Ltd. (AY IT Solutions)",
    location: "Thane, MMR",
    from: "December 2024",
    to: "June 2025",
    // bullets: [],
    details:
      "Led a team of interns in developing web applications and machine learning/deep learning models. Coordinated project tasks, mentored team members, and contributed to both frontend/backend development and AI model training.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git & GitHub", "Python", "TensorFlow", "PyTorch"],
    features: ["December 2024 - June 2025"],
    certificates: ["/certificates/ay_certificate.jpeg"],
    period: "7 months",
    // images: [],
    website: "https://www.aytechinsight.com/",
    manager: ["Founder: Mr. Harsh Bhor"],
  },
  {
    id: 5,
    role: "Full Stack Web Development Intern",
    company: "Analytical Equipment Solutions",
    location: "Airoli, Navi Mumbai",
    from: "September 2024",
    to: "December 2024",
    // bullets: [],
    details:
      "Contributed to the development and maintenance of web applications, focusing on API development, database operations, and debugging. Worked on improving application stability and performance while gaining practical exposure to structured backend logic and integration workflows.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "Django", "MySQL", "REST APIs", "Git & GitHub", "API Creation & Integration", "Mail Server Setup", "Razorpay Payment Gateway Integration", "VPS Hosting"],
    features: ["September 2024 - December 2024"],
    certificates: ["/certificates/aes_certificate.pdf"],
    period: "4 months",
    // images: [],
    website: "https://analyticalequipmentsolutions.com/",
    manager: ["Founder: Mr. Rahul Mallah"],
  },
  {
    id: 6,
    role: "Full Stack Android App Development Intern",
    company: "Mobond Software Consultancy Services Pvt. Ltd. (m-Indicator app)",
    location: "Belapur, Navi Mumbai",
    from: "June 2023",
    to: "July 2023",
    // bullets: [],
    details:
      "Gained hands-on experience in Android development, working with team members to understand real-world project workflows, debugging processes, and application deployment practices.",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "Android Studio", "Google Sheets API", "Google Calendar API", "Google Drive API", "Google Maps API", "Google Authentication API"],
    features: ["June 2023 - July 2023"],
    images: ["/projects/vesp-app/1.png", "/projects/vesp-app/2.png", "/projects/vesp-app/3.png"],
    certificates: ["/certificates/mobond_certificate.pdf"],
    period: "2 months",
    website: "https://www.mobond.com/",
    manager: ["Founder & CEO: Mr. Sachin Teke", "Sales Officer: Mr. Bharat Bhanushali"],
  },
];
