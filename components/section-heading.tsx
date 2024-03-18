import React from "react";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return <div className="mb-8 capitalize font-medium text-3xl">{children}</div>;
}
