/**
 * File: src/data/ResumeData/header.ts
 * Author: Harshita Gawas, Neha Balotia
 * Description: Header data for the Resume page.
 * Created on: 26/04/2026
 */

export interface ResumeIntro {
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
}

export const resumeIntro: ResumeIntro = {
  name: "Yash Balotiya",
  tagline: "Software Engineer",
  location: "Mumbai, India",
  email: "balotiyash@algodevopss.in",
  phone: "+91 9920780823",
  linkedin: "https://www.linkedin.com/in/balotiyash/",
};
