import React from "react";

import { FaReact } from "react-icons/fa";

import SketchStream from "@/public/SketchStream.png";
import CodeSnipper from "@/public/CodeSnipper.png";
import VelocityXD from "@/public/VelocityXD.png";
import QuantumConsole from "@/public/QuantumConsole.png";
import CulinaryExplorer from "@/public/CulinaryExplorer.png";

import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SketchStream.io",
    description: "A docs and diagrams platform for engineering teams , consider it as Eraser.io ",
    tags: ["React", "Next.js", "Tailwind ", "TypeScript", "Kinde Auth", "Convex"],
    imageUrl: SketchStream,
  },
  {
    title: "Code Snipper",
    description: "A feature-rich code snippet sharing tool",
    tags: ["React", "Tailwind", " Shadcn UI", "Zustand", "Highlight.js"],
    imageUrl: CodeSnipper,
  },
  {
    title: "Velocity-XD",
    description: "A minimalistic speed typing Practice application",
    tags: ["React", "Tailwind ", "TypeScript", "Framer Motion"],
    imageUrl: VelocityXD,
  },
  {
    title: "Culinary Explorer",
    description: "Find Top Restaurants near you",
    tags: ["React", "Next.js", "Tailwind ", "Google Maps API", "Google Places API"],
    imageUrl: CulinaryExplorer,
  },
  {
    title: "Quantum Console",
    description: "A powerfull feature-rich admin dashboard ",
    tags: ["React", "Material UI", "Zustand", " E-charts"],
    imageUrl: QuantumConsole,
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
