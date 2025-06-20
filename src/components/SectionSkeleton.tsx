// src/components/SectionSkeleton.tsx
import React from "react";

const SectionSkeleton = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="h-10 w-64 bg-light-panel-bg/10 rounded-md animate-pulse"></div>
        </div>
        <div className="h-64 bg-light-panel-bg/10 rounded-lg animate-pulse"></div>
      </div>
    </section>
  );
};

export default SectionSkeleton;
