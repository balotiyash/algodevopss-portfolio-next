/**
 * File: src/data/ResumeData/header.ts
 * Author: Harshita Gawas
 * Description: Header data for the Resume page.
 * Created on: 16/03/2026
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
  name: "Michael Harris",
  tagline: "Digital Marketing | SEO | SEM | Content Marketing",
  location: "Sydney, Australia",
  email: "michael.harris@email.com",
  phone: "+61 412 345 678",
  linkedin: "linkedin.com/in/michaelharris",
};
