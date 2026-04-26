/**
 * File: src/data/ResumeData/projects.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Project data for the Resume page.
 * Created on: 26/04/2026
 */

export interface ResumeProjectLink {
  label: string;
  url: string;
}

export interface ResumeProject {
  id: number;
  title: string;
  timeline?: string;
  description: string;
  techStack: string[];
  links?: ResumeProjectLink[];
  images?: string[];
}

export const projects: ResumeProject[] = [
  {
    id: 1,
    title: "Guide-MTS",
    description:
      "Built a desktop-first customer and business management system for Guide Motor Training School to streamline daily operations, student/customer records, process tracking, and administrative workflows across the organization.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/guide-mts-electron" },
    ],
    images: ["/projects/guide-mts/1.png", "/projects/guide-mts/2.png", "/projects/guide-mts/3.png", "/projects/guide-mts/4.png", "/projects/guide-mts/5.png", "/projects/guide-mts/6.png"],
  },
  {
    id: 2,
    title: "ICreateConference",
    description:
      "Built and managed the official conference website for iCreate, presenting event highlights across Computer Science, Control, Electrical, Electronics, and Telecommunication Engineering. The platform was designed to showcase research-focused sessions, publish conference details, and support visibility for the joint organization with IJREAM.",
    techStack: ["Next.js", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "PWA", "Hostinger VPS"],
    links: [
      { label: "GitHub", url: "https://example.com/docs" },
      { label: "Live", url: "https://icreateconference.in/" },
    ],
    images: ["/projects/icreateconference/1.png", "/projects/icreateconference/2.png", "/projects/icreateconference/3.png", "/projects/icreateconference/4.png", "/projects/icreateconference/5.png", "/projects/icreateconference/6.png", "/projects/icreateconference/7.png"],
  }, {
    id: 3,
    title: "IJREAM",
    description:
      "Developed and maintained the official digital presence for IJREAM, an international open-access, peer-reviewed engineering and management journal (ISSN: 2454-9150) with a 2025 impact factor of 8.128. The platform highlights calls for papers, publication scope, and review standards, while clearly presenting submission quality criteria such as originality, technical depth, correctness, relevance, contribution, and readability for a broad research audience.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "PWA",
      "Hostinger VPS",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/guide-mts-electron" },
      { label: "Live", url: "https://ijream.aytechinsight.com/" },
    ],
    images: ["/projects/ijream/1.png", "/projects/ijream/2.png", "/projects/ijream/3.png", "/projects/ijream/4.png", "/projects/ijream/5.png", "/projects/ijream/6.png"],
  }, {
    id: 4,
    title: "Shree Self Adhesive Tapes",
    description:
      "Designed and delivered the business website for Shree Self Adhesive Tapes, a BOPP tapes and packaging products company operating since 2021. The platform presents their product portfolio, including self-adhesive and printed BOPP tapes, masking tapes, stretch films, floor marking solutions, and jumbo rolls, with a clear structure for customer discovery.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PWA",
      "Hostinger VPS",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/guide-mts-electron" },
      { label: "Live", url: "https://ssatapes.aytechinsight.com/" },
    ],
    images: ["/projects/ssatapes/1.png", "/projects/ssatapes/2.png", "/projects/ssatapes/3.png", "/projects/ssatapes/4.png", "/projects/ssatapes/5.png"],
  }, {
    id: 5,
    title: "WhatsApp Chatbot for Mumbai Police",
    description:
      "Developed a WhatsApp chatbot solution for Mumbai Police to support complaint registration and structured information sharing with citizens through an accessible conversational interface.",
    techStack: [
      "Next.js",
      "Meta",
      "LLM",
      "WhatsApp API",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Hostinger VPS",
    ],
    images: ["/projects/police-chatbot/1.png", "/projects/police-chatbot/2.png"],
  }, {
    id: 6,
    title: "Rupie Finance",
    description:
      "Developed the main Rupie Finance landing website as the brand and information hub, covering company overview, loan offerings, and contact details. This project serves as the public-facing marketing and discovery platform, while the separate Rupie Finance Loans project handles the end-to-end loan application workflow.",
    techStack: [
      "Next.js",
      "TypeScript",
      "CSS",
      "Hostinger VPS",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/rupie-finance-next" },
      { label: "Live", url: "https://www.rupiefinance.com/" },
    ],
    images: ["/projects/rupie-finance/1.png", "/projects/rupie-finance/2.png", "/projects/rupie-finance/3.png", "/projects/rupie-finance/4.png"],
  }, {
    id: 7,
    title: "SAI NGO",
    description:
      "Developed the digital platform for SAI NGO to present their large-scale social impact programs across HIV/AIDS prevention, public health awareness, and community care. The initiative supports vulnerable groups including female sex workers, their children, and tribal communities through health screening access, treatment linkage, education integration, rehabilitation, women empowerment, vocational training, and long-term livelihood support. It also highlights major relief efforts such as sustained food support during the COVID-19 lockdown period.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Hostinger",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/sai-ngo-frontend" },
      { label: "Live", url: "https://www.saingo.org/public/" },
    ],
    images: ["/projects/sai-ngo/1.png", "/projects/sai-ngo/2.png", "/projects/sai-ngo/3.png", "/projects/sai-ngo/4.png", "/projects/sai-ngo/5.png"],
  }, {
    id: 8,
    title: "AY Techinsight",
    description:
      "Built the corporate website for AY Techinsight, a service-based IT software company with multiple in-house business verticals. The platform communicates core services, company capabilities, and internship opportunities where students can gain hands-on experience by working on live projects.",
    techStack: [
      "React.js",
      "CSS",
      "JavaScript",
      "Node.js",
      "MySQL",
      "Hostinger",
    ],
    links: [
      { label: "Live", url: "https://aytechinsight.com/main/" },
    ],
    images: ["/projects/aytechinsight/1.png", "/projects/aytechinsight/2.png", "/projects/aytechinsight/3.png", "/projects/aytechinsight/4.png", "/projects/aytechinsight/5.png"],
  }, {
    id: 9,
    title: "DJGSONYYYYY v3",
    description:
      "Designed and developed the third version of DJ Ganesh's official website to showcase his professional DJ brand, event expertise, and signature music style. The platform highlights services across weddings, corporate events, and festivals, with a strong focus on audience engagement, high-energy performance identity, and memorable event storytelling.",
    techStack: ["HTML",
      "JavaScript",
      "CSS",
      "GoDaddy",
      "Hostinger VPS",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/djgsonyyyyy-v3" },
    ],
    images: ["/projects/djgsonyyyyy-v3/1.png", "/projects/djgsonyyyyy-v3/2.png", "/projects/djgsonyyyyy-v3/3.png", "/projects/djgsonyyyyy-v3/4.png", "/projects/djgsonyyyyy-v3/5.png", "/projects/djgsonyyyyy-v3/6.png", "/projects/djgsonyyyyy-v3/7.png", "/projects/djgsonyyyyy-v3/8.png"],
  }, {
    id: 10,
    title: "Analytical Equipment Solutions",
    description:
      "Developed the website for Analytical Equipment Solutions (AES), a provider of analytical instruments and technical services across India. The platform showcases laboratory instruments, gas generators, and accessories, while highlighting end-to-end support such as installation, maintenance, technical assistance, customization, and upgrade or trade-in programs focused on long-term customer value.",
    techStack: ["HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Django",
      "Hostinger",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/analytical-equipment-solutions" },
      { label: "Live", url: "https://www.analyticalequipmentsolutions.com/" },
    ],
    images: ["/projects/aes/1.png", "/projects/aes/2.png", "/projects/aes/3.png", "/projects/aes/4.png", "/projects/aes/5.png", "/projects/aes/6.png", "/projects/aes/7.png"],
  }, {
    id: 11,
    title: "Santani Life Care Foundation",
    description:
      "Developed the official digital platform for Santani Life Care Foundation, a Mumbai-based non-profit established in 2024, to communicate its mission across health, AYUSH awareness, skill-based education, employment, technology, human rights, women empowerment, art and culture, and animal welfare. The platform highlights community programs such as affordable wellness and healthcare initiatives, inclusive opportunities for specially abled individuals, and social-impact efforts focused on equity, dignity, and sustainable development.",
    techStack: ["HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Ajax",
      "jQuery",
      "Bootstrap",
      "Hostinger",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/santani-life-care-foundation" },
    ],
    images: ["/projects/santani/1.png", "/projects/santani/2.png", "/projects/santani/3.png", "/projects/santani/4.png", "/projects/santani/5.png"],
  }, {
    id: 12,
    title: "TaxPeCharcha",
    description:
      "Built TaxPeCharcha as a tax-focused blogging web application for publishing practical updates and insights. The platform is structured around three core categories: Income Tax, GST, and Customs, making it easy for readers to find relevant topic-wise content.",
    techStack: ["HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Django",
      "Hostinger",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/taxpecharcha-php" },
    ],
    images: ["/projects/taxpecharcha/1.png", "/projects/taxpecharcha/2.png", "/projects/taxpecharcha/3.png", "/projects/taxpecharcha/4.png", "/projects/taxpecharcha/5.png", "/projects/taxpecharcha/6.png"],
  }, {
    id: 13,
    title: "VES Polytechnic Online Examination Portal",
    description:
      "Built an online examination portal for Vivekanand Education Society's Polytechnic, Chembur, designed for students, teachers, and administrators. The platform centralizes exam workflows with role-based access to support assessment management, submissions, and academic coordination in a structured digital environment.",
    techStack: ["HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Django",
      "Hostinger",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/VESP-OEP" },
    ],
    images: ["/projects/vesp-oep/1.jpg", "/projects/vesp-oep/2.jpg", "/projects/vesp-oep/3.jpg", "/projects/vesp-oep/4.jpg", "/projects/vesp-oep/5.jpg", "/projects/vesp-oep/6.jpg", "/projects/vesp-oep/7.jpg", "/projects/vesp-oep/8.jpg"],
  }, {
    id: 14,
    title: "VES Polytechnic App",
    description:
      "Built a student-focused mobile app for VES Polytechnic to simplify campus life by bringing essential college and academic information into one place. The app helps students quickly access day-to-day institutional updates, academic resources, schedules, and other key details needed throughout their college journey.",
    techStack: ["Kotlin",
      "Jetpack Compose",
      "Firebase",
      "Android Studio",
      "Google Sheets API",
      "Google Calendar API",
      "Google Drive API",
      "Google Maps API",
      "Google Authentication API",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/VES-Polytechnic" },
    ],
    images: ["/projects/vesp-app/1.png", "/projects/vesp-app/2.png", "/projects/vesp-app/3.png"],
  }, {
    id: 15,
    title: "DJGSONYYYYY v1",
    description:
      "Designed and developed the first version of DJ Ganesh's official website to establish his digital identity and event presence. The site introduced his DJ profile, service offerings, and performance style for weddings, corporate events, and private celebrations, laying the foundation for later platform upgrades.",
    techStack: ["HTML",
      "CSS",
      "JavaScript",
      "GoDaddy",
      "Hostinger",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/balotiyash/djgsonyyyyy" },
    ],
    images: ["/projects/djgsonyyyyy-v1/1.png", "/projects/djgsonyyyyy-v1/2.png", "/projects/djgsonyyyyy-v1/3.png", "/projects/djgsonyyyyy-v1/4.png"],
  },
];
