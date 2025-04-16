"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { projects } from "../../data/index";
import { PinContainer } from "./ui/Pin";

const Portfolio = () => {
  return (
    <div id="portfolio" className="py-15 relative">
      <h1 className="heading">
        My <span className="text-purple-500">Portfolio</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-12 relative">
        {projects.map((item) => {
          const slug = item.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] relative -mb-20"
              key={item.id}
            >
              <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
              >
                <Link href={`/projects/${slug}`}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-7 img-zoom-container">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img
                        src={item.img}
                        alt="cover"
                        className="z-10 bottom-0 rounded-3xl"
                      />
                    </div>
                  </div>

                  <h1 className="font-semibold lg:text-xl md:text-lg text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-sm lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "0.5vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple-400">
                        More Info
                      </p>
                      <FaLocationArrow
                        className="ms-2"
                        color="oklch(71.4% 0.203 305.504)"
                      />
                    </div>
                  </div>
                </Link>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
