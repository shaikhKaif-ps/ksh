import React from "react";

const SwiperCard = ({ title, icon, content }) => {
  const swcontent = [
    {
      title: "Positioned at a prime location seamless connectivity",
      icon: "/uspicons/icon1.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      title: "Positioned at a prime location seamless connectivity",
      icon: "/uspicons/icon1.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      title: "Positioned at a prime location seamless connectivity",
      icon: "/uspicons/icon1.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
  ];
  return (
    <div className="flex gap-4">
      <div className="flex w-[320px] flex-col bg-[#EEF0F3] justify-between h-[410px] p-[40px]">
        <div className="flex justify-start items-start">
          <img src={icon} alt="Icon" />
        </div>
        <div className="flex flex-col gap-[18px]">
          <h3 className="text-[#092241] fsans-700 text-[22px] leading-[130%]">
            {title}
          </h3>
          <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
