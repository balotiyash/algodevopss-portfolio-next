/*
 * File: src/data/Experience.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Data for the Experience section of the Portfolio application.
 * Created on: 24/04/2026
 * Last modified: 13/05/2026
 */

/* ─── Experience data ─── */
export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  from: string;
  to: string;
  description: string;
  type: "education" | "work";
}

export const experiences: Experience[] = [
  /* 🎓 Education */
  {
    id: 1,
    role: "Secondary School Certificate (SSC)",
    company: "Adarsha Vidyalaya (KPES) - MSBSHSE",
    location: "Chembur, Mumbai",
    from: "2017",
    to: "2018",
    description: "Completed secondary education with a focus on science subjects, achieving strong academic performance and developing foundational knowledge in mathematics, physics, and chemistry.",
    type: "education",
  },
  {
    id: 2,
    role: "Industrial Training Institute (ITI) - Electrical",
    company: "K J Somaiya Pvt. ITI - NCVT",
    location: "Vidyavihar, Mumbai",
    from: "2018",
    to: "2020",
    description: "Completed ITI in Electrical, gaining practical skills in electrical systems, wiring, and maintenance. Developed a strong understanding of electrical principles and hands-on experience with tools and equipment used in the field.",
    type: "education",
  },
  {
    id: 3,
    role: "Higher Secondary Certificate (HSC) - Technical Science",
    company: "K J Somaiya College of Science and Commerce - MSBSHSE",
    location: "Vidyavihar, Mumbai",
    from: "2021",
    to: "2022",
    description: "Completed higher secondary education with a focus on technical science subjects, achieving strong academic performance and developing foundational knowledge in physics, chemistry, and mathematics.",
    type: "education",
  },
  {
    id: 4,
    role: "Diploma in Computer Engineering",
    company: "Vivekanand Education Society's Polytechnic (VESP) - MSBTE",
    location: "Chembur, Mumbai",
    from: "2022",
    to: "2024",
    description: "Completed a diploma in computer engineering, gaining practical skills in programming, software development, and computer systems. Developed a strong foundation in computer science principles and hands-on experience with various programming languages and technologies.",
    type: "education",
  },
  {
    id: 5,
    role: "B. Tech. (IT) - Honors in AI/ML - Minor in IoT",
    company: "K J Somaiya Institute of Technology (KJSIT) - MU",
    location: "Sion, Mumbai",
    from: "2022",
    to: "Present",
    description: "Pursuing a B.Tech degree in Information Technology with honors in Artificial Intelligence and Machine Learning, and a minor in Internet of Things. Gaining in-depth knowledge and practical skills in AI/ML algorithms, IoT technologies, and software development through coursework, projects, and internships.",
    type: "education",
  },

  /* 💼 Work */
  {
    id: 6,
    role: "Full Stack Android App Development Intern",
    company: "Mobond Software Consultancy Services Pvt. Ltd. (m-Indicator app)",
    location: "Belapur, Navi Mumbai",
    from: "June 2023",
    to: "July 2023",
    description: "Worked on developing and maintaining Android applications, focusing on both frontend and backend aspects. Gained experience in Java/Kotlin programming, API integration, and debugging.",
    type: "work",
  },
  {
    id: 7,
    role: "Full Stack Web Development Intern",
    company: "Analytical Equipment Solutions",
    location: "Airoli, Navi Mumbai",
    from: "September 2024",
    to: "December 2024",
    description: "Contributed to the development of web applications, working on both frontend and backend tasks. Assisted in building responsive user interfaces and integrating APIs for seamless functionality.",
    type: "work",
  },
  {
    id: 8,
    role: "Team Lead Intern - Web,  ML & DL Model Development",
    company: "AY Techinsight Pvt. Ltd. (AY IT Solutions)",
    location: "Thane, MMR",
    from: "December 2024",
    to: "June 2025",
    description: "Led a team of interns in developing web applications and machine learning/deep learning models. Coordinated project tasks, mentored team members, and contributed to both frontend/backend development and AI model training.",
    type: "work",
  },
  {
    id: 9,
    role: "Full Stack Development Intern",
    company: "Audix Techno Consulting Solutions Pvt. Ltd.",
    location: "Thane, MMR",
    from: "June 2025",
    to: "January 2026",
    description: "Worked on full stack development projects, contributing to both frontend and backend development tasks. Gained experience in web technologies, database management, and API integration while collaborating with a team of developers.",
    type: "work",
  },
  {
    id: 10,
    role: "Research & Development Trainee - AI/ML & IoT",
    company: "JalViks Pvt. Ltd. (IIT Bombay)",
    location: "Powai, Mumbai",
    from: "February 2026",
    to: "May 2027",
    description: "Conducted research and development in the fields of Artificial Intelligence, Machine Learning, and Internet of Things. Worked on projects involving AI/ML, NLP models development, IoT device integration, and data analysis to create innovative solutions for real-world problems.",
    type: "work",
  },
  {
    id: 11,
    role: "Founder",
    company: "AlgoDevOpss Pvt. Ltd.",
    location: "Chembur, Mumbai",
    from: "September 2023",
    to: "Present",
    description: "Founded a startup focused on providing software development and DevOps solutions. Responsible for overseeing all aspects of the business, including project management, client relations, and technical development. Led a team of developers to deliver high-quality software solutions to clients across various industries.",
    type: "work",
  },
];
