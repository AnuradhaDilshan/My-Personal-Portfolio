"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight + 220); // Extend the height of the line
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      {/* Starting Button */}
      <div className="absolute -top-75 left-1/2 transform -translate-x-1/2">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-purple-500 flex h-6 w-6 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#8B5CF6", // Purple color
              borderColor: scrollYProgress.get() > 0 ? "white" : "#6D28D9", // Purple border
            }}
            className="h-3 w-3 rounded-full border border-purple-500 bg-purple-500"
          />
        </motion.div>
      </div>

      {/* SVG Path */}
      <svg
        viewBox={`0 0 2 ${svgHeight}`}
        width="2"
        height={svgHeight} // Set the SVG height
        className="absolute -top-71.5 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2={svgHeight}
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1="0"
            y2={svgHeight}
          >
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ending Button */}
      <div className="absolute bottom-12.5 left-1/2 transform -translate-x-1/2">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-purple-500 flex h-6 w-6 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#8B5CF6", // Purple color
              borderColor: scrollYProgress.get() > 0 ? "white" : "#6D28D9", // Purple border
            }}
            className="h-3 w-3 rounded-full border border-purple-500 bg-purple-500"
          />
        </motion.div>
      </div>

      <div ref={contentRef}></div>
    </motion.div>
  );
};
