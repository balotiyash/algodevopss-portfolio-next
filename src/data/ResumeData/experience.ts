/**
 * File: src/data/ResumeData/experience.ts
 * Author: Harshita Gawas
 * Description: Experience data for the Resume page.
 * Created on: 16/03/2026
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
    role: "Marketing Manager",
    company: "XYZ Corporation",
    location: "Sydney, NSW",
    from: "January 2022",
    to: "Present",
    bullets: [
      "Lead a team of 5 in creating and executing digital marketing strategies across multiple platforms, including social media, SEO, and email campaigns.",
      "Achieved a 35% increase in website traffic and 50% boost in social media engagement within the first year.",
      "Managed a marketing budget of $200,000, ensuring maximum ROI through cost-effective advertising strategies.",
    ],
    details:
      "Spearheaded the company's digital transformation initiative, introducing data-driven marketing workflows and automating campaign tracking.",
    techStack: [
      "Google Analytics",
      "HubSpot",
      "SEMrush",
      "Mailchimp",
      "Hootsuite",
    ],
    features: [
      "Campaign automation",
      "A/B testing",
      "Performance dashboards",
      "Cross-channel attribution",
    ],

    website: "https://example.com",
    images: [
      "/pngs/img1.png",
      "/pngs/img1.png",
      "/pngs/img1.png",
      "/pngs/img1.png",
    ],
    certificates: ["/pngs/try.png"],
    period: "2 years 2 months",
    manager: ["John Doe", "Jane Smith"],
  },
  {
    id: 2,
    role: "Digital Marketing Specialist",
    company: "ABC Solutions",
    location: "Melbourne, VIC",
    from: "June 2018",
    to: "December 2021",
    bullets: [
      "Developed and executed SEO and SEM strategies that increased organic search traffic by 25%.",
      "Created and managed Google Ads and Facebook Ads campaigns, resulting in a 20% increase in qualified leads.",
      "Produced engaging content for blogs, newsletters, and social media platforms to attract target audiences.",
    ],
    details:
      "Built the company's content marketing engine from scratch, establishing editorial calendars and brand voice guidelines.",
    techStack: [
      "Google Ads",
      "Facebook Ads Manager",
      "WordPress",
      "Canva",
      "Buffer",
    ],
    features: [
      "Content strategy",
      "Lead generation funnels",
      "Social media management",
    ],


    website: "https://example.com",
    images: ["/work1.png", "/work2.png"],
    certificates: ["/cert1.png"],

    period: "2 years 2 months",
    manager: ["Alice Johnson", "Bob Brown"],
  },
];
