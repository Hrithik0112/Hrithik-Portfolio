import React from "react";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return <div className="text-3xl font-medium capitalize mb-8 text-center">{children}</div>;
}
