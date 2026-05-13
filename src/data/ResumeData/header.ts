/**
 * File: src/data/ResumeData/header.ts
 * Author: Harshita Gawas, Neha Balotia, Yash Balotiya
 * Description: Header data for the Resume page.
 * Created on: 13/05/2026
 */

export interface ResumeIntro {
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export const resumeIntro: ResumeIntro = {
  name: "Yash Balotiya",
  tagline: "Software Engineer",
  location: "Chembur, Mumbai, India",
  email: "balotiyash@gmail.com",
  phone: "+91 9920780823",
  linkedin: "linkedin.com/in/balotiyash",
  github: "github.com/balotiyash",
};
