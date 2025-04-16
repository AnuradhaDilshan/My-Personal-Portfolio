import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/assets/background/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple-500">your</span> digital
          presence to the next level?
        </h1>
        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-170 md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:anuradha256kcc@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-36 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-light font-light">
          Copyright &copy; {currentYear} Anuradha Dilshan
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
