import React from "react";

import { FaReact } from "react-icons/fa";

import SketchStream from "@/public/SketchStream.png";
import CodeSnipper from "@/public/CodeSnipper.png";
import VelocityXD from "@/public/VelocityXD.png";
import QuantumConsole from "@/public/QuantumConsole.png";
import CulinaryExplorer from "@/public/CulinaryExplorer.png";

import { LuGraduationCap } from "react-icons/lu";
import { RiOpenSourceFill } from "react-icons/ri";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MERN Stack bootcamp",
    location: "India",
    description:
      "Completed a comprehensive 6-month web development bootcamp where I gained hands-on experience in frontend and backend technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - July 2023",
  },
  {
    title: "Hacktoberfest",
    location: "Global",
    description:
      "Participated in and successfully completed Hacktoberfest, contributing to open source projects and enhancing collaboration within the developer community.",
    icon: React.createElement(RiOpenSourceFill),
    date: "October - 2023",
  },
  {
    title: "Full Stack Learning Managemnet system",
    location: "india",
    description:
      "Currently developing a full-stack learning management system where users can buy courses, students can enroll in courses, and a full-stack authentication system. Additionally, implementing video uploads to a CDN for seamless content delivery",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Founding Frontend Intern @GyanGrove",
    location: "Bangalore, IN",
    description:
      "As the Founding Frontend Intern at a stealth startup in education, I am developing a cross-platform app using React Native and Expo. Collaborating with product and UI/UX teams, I focus on designing intuitive interfaces and optimizing performance, enhancing my frontend development skills and driving innovation in educational technology.",
    icon: React.createElement(FaReact),
    date: "April ' 24 - present",
  },

] as const;

export const projectsData = [
  {
    title: "SketchStream.io",
    description: "A docs and diagrams platform for engineering teams , consider it as Eraser.io ",
    tags: ["React", "Next.js", "Tailwind ", "TypeScript", "Kinde Auth", "Convex"],
    imageUrl: SketchStream,
    live: "https://sketch-stream-io.vercel.app/",
    github: "https://github.com/Hrithik0112/SketchStream.io",
  },
  {
    title: "CodeSnipper",
    description: "A feature-rich code snippet sharing tool",
    tags: ["React", "Tailwind", " Shadcn UI", "Zustand", "Highlight.js"],
    imageUrl: CodeSnipper,
    live: "https://code-sniper.vercel.app/",
    github: "https://github.com/Hrithik0112/Code-Sniper",
  },
  {
    title: "VelocityXD",
    description: "A minimalistic speed typing Practice application",
    tags: ["React", "Tailwind ", "TypeScript", "Framer Motion"],
    imageUrl: VelocityXD,
    live: "https://velocity-xd.vercel.app/",
    github: "https://github.com/Hrithik0112/Velocity-XD",
  },
  {
    title: "CulinaryExplorer",
    description: "Find Top Restaurants near you",
    tags: ["React", "Next.js", "Tailwind ", "Google Maps API", "Google Places API"],
    imageUrl: CulinaryExplorer,
    live: "https://culinary-explorer-eta.vercel.app/",
    github: "https://github.com/Hrithik0112/Culinary-Explorer",
  },
  {
    title: "QuantumConsole",
    description: "A powerfull feature-rich admin dashboard ",
    tags: ["React", "Material UI", "Zustand", " E-charts"],
    imageUrl: QuantumConsole,
    live: "https://quantum-console.vercel.app/dashboard",
    github: "https://github.com/Hrithik0112/Quantum-Console",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Tailwind",
  "Shadcn UI",
  "Material UI",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Zustand",
  "React Query",
  "Framer Motion",
] as const;
