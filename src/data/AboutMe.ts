/*
 * File: src/data/AboutMe.ts
 * Author: Harshita Gawas
 * Description: Data for the About Me section of the Portfolio application.
 * Created on: 18/03/2026
 */

export const aboutMeData = {
  name: "John Doe",
  title: "UX/UI Designer",

  description: [
    "John Doe is a creative UX/UI designer with a passion for crafting intuitive and visually engaging digital experiences. She specializes in transforming complex ideas into user-friendly designs that not only look beautiful but also solve real problems.",
    "With over 18 years of experience across multiple industries, John has worked on everything from mobile applications to large-scale web platforms. Her approach combines research, strategy, and design systems to deliver consistent and impactful results.",
  ],

  stats: [
    { number: "600+", label: "Project Completed" },
    { number: "50+", label: "Industry Covered" },
    { number: "18+", label: "Years of Experience" },
  ],

  skills: [
    { label: "UX/UI Design", variant: "tagDark", pos: "tag1" },
    { label: "Website Design", variant: "tagLight", pos: "tag2" },
    { label: "Mobile App Design", variant: "tagLight", pos: "tag3" },
    { label: "Design System", variant: "tagHighlight", pos: "tag4" },
    { label: "Wireframe Design", variant: "tagLight", pos: "tag5" },
    { label: "Dashboard", variant: "tagDark", pos: "tag6" },
    { label: "Prototype", variant: "tagLight", pos: "tag7" },
  ],

  image: "/pngs/portrait1.png",
};
