"use client";

import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import Spinner from "./Spinner";

const Page404 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-6">
      {isLoading ? (
        <div className="relative bg-black-100 flex justify-center items-center -pt-6 flex-col w-full h-screen overflow-clip">
          <Spinner />
        </div>
      ) : (
        <>
          <Spotlight />

          <div className="h-screen w-full dark:bg-black-100 bg-white bg-grid-white absolute top-0 left-0 flex items-center justify-center">
            <div
              className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
          </div>

          <div className="flex justify-center relative">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/assets/elements/404error.webp"
                alt="404 Error"
                className="max-w-[40vw] md:max-w-[30vw] lg:max-w-[20vw] flex flex-col items-center justify-center"
              />
              <Link href="/" passHref>
                <MagicButton
                  title="Go Back to Home"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page404;
