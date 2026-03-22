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
    title: "Cloud Native Ecommerce Platform",
    description:
      "A scalable ecommerce platform with microservices, containerized workloads, and CI/CD-driven deployments.",
    image: "/pngs/try.png",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/example/cloud-native-ecommerce",
    liveUrl: "https://example-ecommerce.vercel.app",
  },
  {
    id: 2,
    title: "DevOps Monitoring Dashboard",
    description:
      "A real-time dashboard for application health, deployment metrics, and infrastructure events across environments.",
    image: "/pngs/sample.png",
    techStack: ["React", "Tailwind CSS", "Express", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/example/devops-monitoring-dashboard",
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    description:
      "An AI-assisted resume analyzer that scores profiles, extracts insights, and recommends targeted improvements.",
    image: "/pngs/portrait1.png",
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI API", "Redis"],
    liveUrl: "https://example-resume-ai.vercel.app",
  },
  {
    id: 4,
    title: "Kubernetes Release Automation",
    description:
      "Release automation toolkit for blue-green and canary rollouts with safe rollback and verification pipelines.",
    image: "/pngs/try.png",
    techStack: ["Go", "Kubernetes", "Helm", "Argo CD", "GitHub Actions"],
    githubUrl: "https://github.com/example/k8s-release-automation",
    liveUrl: "https://example-k8s-release.dev",
  },
  {
    id: 5,
    title: "Progressive Web CRM",
    description:
      "A high-performance PWA CRM for field teams with offline sync, lead tracking, and role-based access.",
    image: "/pngs/sample.png",
    techStack: ["Vue", "TypeScript", "Node.js", "MongoDB", "PWA"],
    githubUrl: "https://github.com/example/pwa-crm",
    liveUrl: "https://example-crm.app",
  },
  {
    id: 6,
    title: "Intelligent Support Chatbot",
    description:
      "A domain-tuned chatbot for customer support with context retention, escalation workflows, and analytics.",
    image: "/pngs/portrait1.png",
    techStack: ["Next.js", "LangChain", "Python", "Vector DB", "Azure OpenAI"],
    githubUrl: "https://github.com/example/intelligent-support-chatbot",
  },
];
