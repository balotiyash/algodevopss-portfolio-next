/**
 * File: src/data/MoreProject.ts
 * Author: Harshita Gawas
 * Description: More project data for the Resume page.
 * Created on: 16/03/2026
 */

// Data model for more-project cards.
export interface MoreProject {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Sample project entries for paginated listing.
export const moreProjects: MoreProject[] = [
  {
    id: 1,
    title: "Guide-MTS",
    description:
      "Built a desktop-first customer and business management system for Guide Motor Training School to streamline daily operations, student/customer records, process tracking, and administrative workflows across the organization.",
    image: "/projects/guide-mts/1.png",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/example/cloud-native-ecommerce",
  },
  {
    id: 2,
    title: "ICreateConference",
    description:
      "Built and managed the official conference website for iCreate, presenting event highlights across Computer Science, Control, Electrical, Electronics, and Telecommunication Engineering. The platform was designed to showcase research-focused sessions, publish conference details, and support visibility for the joint organization with IJREAM.",
    image: "/projects/icreateconference/1.png",
    techStack: ["Next.js", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "PWA", "Hostinger VPS"],
    githubUrl: "https://github.com/example/devops-monitoring-dashboard",
    liveUrl: "https://icreateconference.in/",
  },
  {
    id: 3,
    title: "IJREAM",
    description:
      "Developed and maintained the official digital presence for IJREAM, an international open-access, peer-reviewed engineering and management journal (ISSN: 2454-9150) with a 2025 impact factor of 8.128. The platform highlights calls for papers, publication scope, and review standards, while clearly presenting submission quality criteria such as originality, technical depth, correctness, relevance, contribution, and readability for a broad research audience.",
    image: "/projects/ijream/1.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "PWA", "Hostinger VPS"],
    githubUrl: "https://github.com/example/devops-monitoring-dashboard",
    liveUrl: "https://ijream.aytechinsight.com/",
  },
  {
    id: 4,
    title: "Shree Self Adhesive Tapes",
    description:
      "Designed and delivered the business website for Shree Self Adhesive Tapes, a BOPP tapes and packaging products company operating since 2021. The platform presents their product portfolio, including self-adhesive and printed BOPP tapes, masking tapes, stretch films, floor marking solutions, and jumbo rolls, with a clear structure for customer discovery.",
    image: "/projects/ssatapes/1.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PWA", "Hostinger VPS"],
    githubUrl: "https://github.com/example/k8s-release-automation",
    liveUrl: "https://ssatapes.aytechinsight.com/",
  },
  {
    id: 5,
    title: "WhatsApp Chatbot for Mumbai Police",
    description:
      "Developed a WhatsApp chatbot solution for Mumbai Police to support complaint registration and structured information sharing with citizens through an accessible conversational interface.",
    image: "/projects/police-chatbot/1.png",
    techStack: ["Meta", "LLM", "WhatsApp API", "Next.js", "Node.js", "Express.js", "MongoDB", "Hostinger VPS"],
  },
  {
    id: 6,
    title: "Rupie Finance",
    description:
      "Developed the main Rupie Finance landing website as the brand and information hub, covering company overview, loan offerings, and contact details. This project serves as the public-facing marketing and discovery platform, while the separate Rupie Finance Loans project handles the end-to-end loan application workflow.",
    image: "/projects/rupie-finance/1.png",
    techStack: ["Next.js", "TypeScript", "CSS", "Hostinger VPS"],
    githubUrl: "https://github.com/balotiyash/rupie-finance-next",
    liveUrl: "https://www.rupiefinance.com/",

  },
  {
    id: 7,
    title: "SAI NGO",
    description:
      "Developed the digital platform for SAI NGO to present their large-scale social impact programs across HIV/AIDS prevention, public health awareness, and community care. The initiative supports vulnerable groups including female sex workers, their children, and tribal communities through health screening access, treatment linkage, education integration, rehabilitation, women empowerment, vocational training, and long-term livelihood support. It also highlights major relief efforts such as sustained food support during the COVID-19 lockdown period.",
    image: "/projects/sai-ngo/1.png",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Hostinger"],
    githubUrl: "https://github.com/balotiyash/sai-ngo-frontend",
    liveUrl: "https://www.saingo.org/public/",

  },
  {
    id: 8,
    title: "AY Techinsight",
    description:
      "Built the corporate website for AY Techinsight, a service-based IT software company with multiple in-house business verticals. The platform communicates core services, company capabilities, and internship opportunities where students can gain hands-on experience by working on live projects.",
    image: "/projects/aytechinsight/1.png",
    techStack: ["React.js", "CSS", "JavaScript", "Node.js", "MySQL", "Hostinger"],
    liveUrl: "https://aytechinsight.com/main/",

  },
  {
    id: 9,
    title: "DJGSONYYYYY v3",
    description:
      "Designed and developed the third version of DJ Ganesh's official website to showcase his professional DJ brand, event expertise, and signature music style. The platform highlights services across weddings, corporate events, and festivals, with a strong focus on audience engagement, high-energy performance identity, and memorable event storytelling.",
    image: "/projects/djgsonyyyyy-v3/1.png",
    techStack: ["HTML", "JavaScript", "CSS", "GoDaddy", "Hostinger VPS"],
    githubUrl: "https://github.com/balotiyash/djgsonyyyyy-v3",

  },
  {
    id: 10,
    title: "Analytical Equipment Solutions",
    description:
      "Developed the website for Analytical Equipment Solutions (AES), a provider of analytical instruments and technical services across India. The platform showcases laboratory instruments, gas generators, and accessories, while highlighting end-to-end support such as installation, maintenance, technical assistance, customization, and upgrade or trade-in programs focused on long-term customer value.",
    image: "/projects/aes/1.png",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySql", "Django", "Hostinger"],
    githubUrl: "https://github.com/balotiyash/analytical-equipment-solutions",
    liveUrl: "https://www.analyticalequipmentsolutions.com/",

  },
  {
    id: 11,
    title: "Santani Life Care Foundation",
    description:
      "Developed the official digital platform for Santani Life Care Foundation, a Mumbai-based non-profit established in 2024, to communicate its mission across health, AYUSH awareness, skill-based education, employment, technology, human rights, women empowerment, art and culture, and animal welfare. The platform highlights community programs such as affordable wellness and healthcare initiatives, inclusive opportunities for specially abled individuals, and social-impact efforts focused on equity, dignity, and sustainable development.",
    image: "/projects/santani/1.png",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySql", "Ajax", "JQuery", "Bootstrap", "Hostinger"],
    githubUrl: "https://github.com/balotiyash/santani-life-care-foundation",

  },
  {
    id: 12,
    title: "TaxPeCharcha",
    description:
      "Built TaxPeCharcha as a tax-focused blogging web application for publishing practical updates and insights. The platform is structured around three core categories: Income Tax, GST, and Customs, making it easy for readers to find relevant topic-wise content.",
    image: "/projects/taxpecharcha/1.png",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySql", "Django", "Hostinger"],
    githubUrl: "https://github.com/balotiyash/taxpecharcha-php",

  },
  {
    id: 13,
    title: "VES Polytechnic Online Examination Portal",
    description:
      "Built an online examination portal for Vivekanand Education Society's Polytechnic, Chembur, designed for students, teachers, and administrators. The platform centralizes exam workflows with role-based access to support assessment management, submissions, and academic coordination in a structured digital environment.",
    image: "/projects/vesp-oep/1.jpg",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySql", "Django", "Hostinger"],
    githubUrl: "https://github.com/balotiyash/VESP-OEP",
  },
  {
    id: 14,
    title: "VES Polytechnic App",
    description:
      "Built a student-focused mobile app for VES Polytechnic to simplify campus life by bringing essential college and academic information into one place. The app helps students quickly access day-to-day institutional updates, academic resources, schedules, and other key details needed throughout their college journey.",
    image: "/projects/vesp-app/1.png",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "Android Studio", "Google Sheets API", "Google Calendar API", "Google Drive API", "Google Maps API", "Google Authentication API"],
    githubUrl: "https://github.com/balotiyash/VES-Polytechnic",
  },
  {
    id: 15,
    title: "DJGSONYYYYY v1",
    description:
      "Designed and developed the first version of DJ Ganesh's official website to establish his digital identity and event presence. The site introduced his DJ profile, service offerings, and performance style for weddings, corporate events, and private celebrations, laying the foundation for later platform upgrades.",
    image: "/projects/djgsonyyyyy-v1/1.png",
    techStack: ["HTML", "JavaScript", "CSS", "GoDaddy", "Hostinger VPS"],
    githubUrl: "https://github.com/balotiyash/djgsonyyyyy",
  },
];
