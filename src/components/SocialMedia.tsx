import { socialMedia } from "../../data/index";

interface SocialMediaProps {
  filterIds?: number[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ filterIds }) => {
  const dimensions = {
    1: { width: 24, height: 24 },
    2: { width: 18, height: 18 },
    3: { width: 19, height: 19 },
    4: { width: 19, height: 19 },
    5: { width: 16, height: 16 },
    6: { width: 20, height: 20 },
    7: { width: 24, height: 24 },
  };

  const filteredSocialMedia = filterIds
    ? filterIds.map((id) => socialMedia.find((info) => info.id === id))
    : socialMedia;

  return (
    <div className="flex items-center md:gap-3 gap-6">
      {filteredSocialMedia.map((info) => {
        const { width, height } = dimensions[info.id] || {
          width: 16,
          height: 16,
        };

        return (
          <a
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" width={width} height={height} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
