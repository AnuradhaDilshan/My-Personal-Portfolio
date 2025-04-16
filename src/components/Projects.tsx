"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { project_data } from "../../data/index";
import NotFound from "@/app/not-found";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import ReadmeViewer from "@/components/ReadmeViewer";
import { FaArrowLeftLong } from "react-icons/fa6";
import Spinner from "./Spinner";

const Projects = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const project = project_data.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="mt-20 mb-15">
      {isLoading ? (
        <div className="relative bg-black-100 flex justify-center items-center -mt-20 -mb-15 flex-col w-full h-screen overflow-clip">
          <Spinner />
        </div>
      ) : (
        <>
          <Spotlight />

          <div className="flex justify-center relative z-10">
            <div className="max-w-[95vw] md:max-w-2xl lg:max-w-[90vw] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-15">
              <div className="flex flex-col items-start justify-start w-full lg:w-1/2 space-y-6">
                <h1 className="text-5xl font-bold text-purple-500">
                  {project.title}
                </h1>
                <p className="text-md md:text-lg lg:text-[1rem] text-gray-200 text-justify">
                  {project.des}
                </p>
                <p className="uppercase tracking-widest text-xl text-center text-blue-100 mt-5">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.iconLists?.map((iconItem, index) => (
                    <div key={index}>
                      <div className="border border-white/[.2] rounded-2xl bg-black lg:w-15 lg:h-15 w-10 h-10 flex flex-col justify-center items-center">
                        <img src={iconItem.icon} className="p-2.5" />
                      </div>
                      <p className="text-[0.7rem] text-gray-300 text-center items-center mt-1">
                        {iconItem.name}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="uppercase tracking-widest text-xl text-center text-blue-100 mt-5">
                  Project Link
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.visit?.map((iconItem, index) => (
                    <div key={index}>
                      <Link
                        href={iconItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="border border-white/[.2] bg-black lg:w-25 lg:h-8 w-10 h-10 flex flex-col justify-center items-center">
                          <img src={iconItem.icon} className="-p-2" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <hr className="my-5 border-t border-gray-600 w-full" />
                <p className="uppercase tracking-widest text-xl text-center text-blue-100 mt-5">
                  README
                </p>
                <div className="w-full flex flex-col justify-start">
                  <div className="w-full max-w-[100%]">
                    <ReadmeViewer url={project.readme} />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-5">
                <img
                  src={project.image}
                  alt="project_cover"
                  className="rounded-lg w-full max-w-4xl"
                />
                <img
                  src={project.image_ui}
                  className="rounded-lg w-full max-w-4xl mt-10"
                />
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-5 z-990">
            <Link href="/#portfolio" passHref>
              <button className="bg-purple-700 text-white text-[0.85rem] px-3 py-1.5 rounded-lg shadow-lg hover:bg-purple-600 transition flex items-center gap-1">
                <FaArrowLeftLong />
                <span>Home</span>
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
