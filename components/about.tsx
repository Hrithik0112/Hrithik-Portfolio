"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3">
        <p>
          I ignited my passion for programming during my high school years, laying the foundation
          for my journey into the world of software development. Specializing in frontend
          technologies, particularly React, became my forte during my B.Tech in Computer Science at
          Techno International Batanagar. Projects like Code-Sniper and Velocity-XD showcase my
          adeptness in crafting elegant and intuitive interfaces with tools like Tailwind CSS and
          TypeScript.
          <br />
          <br />
          Transitioning into a full-stack enthusiast, I explored the intricacies of the MERN stack,
          evident in projects like Culinary Explorer and SketchStream.io. These ventures underscore
          my ability to seamlessly integrate frontend and backend technologies for dynamic web
          applications. Currently, I'm delving deeper into animations and sharpening my skills in
          TypeScript, fueled by a commitment to continuous learning.
        </p>
      </div>

      <div>
        <p>
          Beyond coding, I prioritize quality time with family and indulge in occasional gaming
          sessions for balance. With a strong foundation in JavaScript and TypeScript, coupled with
          expertise in frameworks like React and Next.js, I'm poised to tackle new challenges and
          make meaningful contributions to the dynamic landscape of software development.
        </p>
      </div>
    </motion.section>
  );
}
