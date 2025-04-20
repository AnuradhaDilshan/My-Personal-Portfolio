import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import SocialMedia from "./SocialMedia";
import { useEffect, useState, useRef } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialMediaIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const intervalDelay = 600;

  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full pb-10 mb-[100px] md:mb-5"
      id="contact"
    >
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/assets/background/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
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
          {socialMediaIds.map((id, index) => (
            <div
              key={id}
              className={`zoom-in`}
              style={{
                animationDelay: isVisible
                  ? `${index * intervalDelay}ms`
                  : "0ms", // Trigger animation when visible
                animationDuration: "1s",
                animationFillMode: "forwards",
                opacity: isVisible ? 1 : 0, // Show only when visible
              }}
            >
              <SocialMedia filterIds={[index]} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
