import { FaLocationArrow } from "react-icons/fa6";
import SocialMedia from "./SocialMedia";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Home = () => {
  return (
    <div id="home" className="pb-20 pt-36">
      {/* Spotlight */}
      <div>
        <Spotlight />
      </div>

      {/* Grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white bg-grid-white absolute top-0 left-0 flex items-center justify-center">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hi! I'm Anuradha Dilshan"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl">
            Full Stack Developer <span className="text-xl"> | </span> Blockchain
            Enthusiast
          </p>

          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-170">
            &quot;Final year IT undergraduate at KDU, specializing in full-stack
            development and crafting innovative tech solutions through hands-on
            project experience.&quot;
          </p>

          <a
            href="https://drive.google.com/file/d/1qwg6aAE1lgVxmpBklNHLWAxNkKgHbtKg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1"
          >
            <MagicButton
              title="My Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <div className="flex items-center justify-center mt-9 md:gap-3 gap-6">
            <SocialMedia filterIds={[5, 7, 4, 6]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
