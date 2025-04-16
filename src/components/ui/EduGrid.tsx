import React from "react";
import { cn } from "@/lib/utils";

type EduGridItemProps = {
  id: number;
  title: string;
  description: React.ReactNode;
  timePeriod: string; // Add time period for each item
};

export const EduGrid = ({
  items,
  className,
}: {
  items: EduGridItemProps[];
  className?: string;
}) => {
  return (
    <div className={cn("grid", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-18",
            item.id === 2 && "translate-x-121"
          )}
        >
          {/* Render EduGridItem */}
          <EduGridItem
            title={item.title}
            description={item.description}
            className="mt-20"
          />

          {/* Render Time Period */}
          <div
            className={cn(
              "absolute top-10 right-32.5 flex items-center justify-center h-full w-1/2",
              item.id === 2 && "-translate-x-168"
            )}
          >
            <div className="w-30 h-6 rounded-full bg-purple-700 flex items-center justify-center text-white text-sm font-semibold">
              <p>{item.timePeriod}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const EduGridItem = ({
  title,
  description,
  className,
}: {
  title: string;
  description: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-6 rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};
