"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCard from "./SwiperCard";
import LineHead from "../Heading/LineHead";
const Usp = () => {
  const swcontent = [
    {
      title: "Positioned at a prime location seamless connectivity",
      icon: "/uspicons/icon1.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      title: "Equipped with modern warehousing facilities",
      icon: "/uspicons/icon2.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      title: "Offers competitive pricing models and eco-friendly operations",
      icon: "/uspicons/icon3.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      title: "Positioned at a prime location seamless connectivity",
      icon: "/uspicons/icon4.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
  ];
  return (
    <div className="bg-white uspcontainer w-full flex items-center justify-center flex-col">
      <div className="flex flex-col max-w-[100vw] h-fit">
        <div className="px-[30px] relative z-10 pt-[50px] md:px-[118px] md:pt-[92px] h-fit flex flex-col ">
          <LineHead heading={"10 USPs Inside Our Parks"} />
        </div>
        <div className="flex md:flex-row flex-col md:p-0 p-5 max-h-fit">
          <div className="flex items-end justify-center mt-0 max-h-fit">
            {/* I want the height to be full its like height fit instaed */}
            <img className="z-0 object-cover" src="/kshhmn.gif" alt="KSH Man" />
          </div>
          <div className="lg:w-[60%] flex flex-col w-full h-fit max-w-full justify-center items-start  gap-[33px] pb-[110px]">
            <div className="bg-red-500 flex sm:flex-row flex-col sm:items-center items-start justify-start gap-[20px] sm:gap-[92px] md:pr-[330px]">
              <p className="fsans-400 text-[18px] leading-[26px] text-[#6C8DAB]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                aliquid quas sapiente quaerat eligendi voluptatum necessitatibus
                natus, incidunt ipsa ipsum, sequi enim asperiores dolorum.
                Nobis, numquam totam! Ipsam, numquam facilis!
              </p>
              <div className="flex gap-[14px] items-center justify-center">
                <button className="arrowleft h-[41px] w-[41px]">
                  <img
                    className="h-[41px] w-[41px]"
                    src="/buttonarrows/arrowleft.svg"
                    alt="ArrowLeft"
                  />
                </button>
                <button className="arrowright h-[41px] w-[41px]">
                  <img
                    className="h-[41px] w-[41px]"
                    src="/buttonarrows/arrowright.svg"
                    alt="ArrowRight"
                  />
                </button>
              </div>
            </div>
            <Swiper
              slidesPerGroup={1} // Ensures 1 slide per group
              className="max-w-full"
              spaceBetween="40px"
              modules={[FreeMode, Navigation]}
              navigation={{ nextEl: ".arrowright", prevEl: ".arrowleft" }}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                320: {
                  slidesPerView: 1, // Show 1 slide on small screens
                  spaceBetween: "20px",
                },
                768: {
                  slidesPerView: 2, // Show 2 slides on medium screens
                },
                1366: {
                  slidesPerView: 2.5, // Show 2.5 slides on large screens
                },
              }}
            >
              {swcontent.map((slide, index) => (
                <SwiperSlide
                  style={{ maxWidth: "fit-content" }}
                  key={slide.icon}
                >
                  <SwiperCard
                    content={slide.content}
                    title={slide.title}
                    icon={slide.icon}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usp;
