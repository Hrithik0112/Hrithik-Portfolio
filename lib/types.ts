import { experiencesData, links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ExperienceData = (typeof experiencesData)[number];
