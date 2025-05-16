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
      <div className="mb-6">
        <p>
          I am particularly inclined toward building products that blend technical excellence with great design. I am always exploring new technologies—currently focusing on advanced animations, state management, and performance optimization in React Native and Expo. My commitment to continuous learning drives me to stay updated with industry trends and best practices.
        </p>
      </div>

      <div>
        <p>
          Outside of coding, I value work-life balance and enjoy spending time with family and gaming. I am motivated by challenges that require creative solutions and am eager to contribute to impactful projects in the ever-evolving field of software development.
        </p>
      </div>
    </motion.section>
  );
}
