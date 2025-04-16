import { skills } from "../../data/index";
import { HoverEffect } from "./ui/CardHoverEffect";

export function Skills() {
  return (
    <div className="py-30 w-full -mb-20">
      <h1 className="heading">
        My <span className="text-purple-500">Technical Proficiency</span>
      </h1>

      <div className="py-6 flex flex-col items-center justify-center w-full">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}
