import { experiencesData } from "@/lib/data";
import React from "react";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type VerticalTimelineElementProps = {
  item: ExperienceData;
};

export type ExperienceData = (typeof experiencesData)[number];

const VerticalTimelineComponent = ({ item }: VerticalTimelineElementProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#f3f4f6",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #9ca3af",
      }}
      // date={item.date}
      icon={item.icon}
      iconStyle={{
        background: "white",
        fontSize: "1.5rem",
      }}
      visible={inView}
    >
      <h3 ref={ref} className="font-semibold capitalize">
        {item.title}
      </h3>
      {/* <p className="font-normal !mt-0">{item.location}</p> */}
      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineComponent;
