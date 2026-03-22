export interface ResumeCertification {
  id: number;
  name: string;
  details?: string;
  image?: string; // NEW
}
export const certifications: ResumeCertification[] = [
  {
    id: 1,
    name: "Google Analytics Certified",
    details: "Advanced proficiency in GA4 reporting and audience segmentation.",
    image: "/pngs/try.png",
  },
  {
    id: 2,
    name: "Facebook Blueprint Certification",
    details: "Certified in Meta Ads campaign management and optimization.",
    image: "/certs/meta.jpg",
  },
  {
    id: 3,
    name: "HubSpot Inbound Marketing Certification",
    details:
      "Expertise in inbound methodology, content strategy, and lead nurturing.",
    image: "/certs/hubspot.jpg",
  },
];
