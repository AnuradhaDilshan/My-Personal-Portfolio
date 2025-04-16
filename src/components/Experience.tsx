import React from "react";

import { softwares, workExperience } from "../../data/index";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 relative">
      <h1 className="heading py-1">
        My <span className="text-purple-500">Creative Experience</span>
      </h1>

      <div className="w-full mt-15 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-18 max-lg:mt-10 mt-30 mb-30">
        {softwares.map((software) => (
          <React.Fragment key={software.id}>
            <div
              className={`flex md:max-w-60 max-w-32 gap-1 ${
                software.id === 9 ? "flex-col items-center" : ""
              }`}
            >
              <img
                src={software.img}
                alt={software.name}
                width={software.id === 9 ? 150 : 100}
                className={`${
                  software.id === 9 ? "md:w-20 w-16" : "md:w-10 w-5"
                }`}
              />

              {software.id !== 9 && (
                <img
                  src={software.nameImg}
                  alt={software.name}
                  className="md:w-24 w-20"
                />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experience;
