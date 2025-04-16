"use client";

import React from "react";
import { EduGrid } from "./ui/EduGrid";
import { TracingBeam } from "./ui/TracingBeam";

const Education = () => {
  const educationItems = [
    {
      id: 1,
      title: "University Education",
      description: (
        <>
          General Sir John Kotelawala Defence University
          <br />
          BSc. (Hons) Information Technology
          <br />
          <span className="text-white/85">
            Dean&apos;s List Nominated (2022)
            <br />
            <span className="text-purple-400">CGPA :</span> 3.7
          </span>
        </>
      ),
      timePeriod: "2023 - Present",
    },
    {
      id: 2,
      title: "Secondary Education",
      description: (
        <>
          G/Karandeniya Central College
          <br />
          Commerce Stream
        </>
      ),
      timePeriod: "2011 - 2019",
    },
  ];

  return (
    <div id="education" className="py-20 relative">
      <h1 className="heading py-1">
        My <span className="text-purple-500">Education</span> Journey
      </h1>
      <EduGrid items={educationItems} className="max-w-4xl mx-auto" />
      <TracingBeam className="px-1" />
    </div>
  );
};

export default Education;
