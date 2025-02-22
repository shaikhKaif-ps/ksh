"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Landing from "./Landing";
import VidLand from "./VidLand";

const LandingSwiper = () => {
  return (
    <div style={{ position: "relative" }}>
      <Swiper
        slidesPerGroup={1} // Ensures 1 slide per group
        className="max-w-full"
        modules={[FreeMode, Navigation]}
        navigation={{ nextEl: ".landingr", prevEl: ".landingl" }}
      >
        <SwiperSlide>
          <Landing />
        </SwiperSlide>
        <SwiperSlide>
          <VidLand />
        </SwiperSlide>
      </Swiper>
      <div className="flex gap-10 items-center lg:justify-start justify-between absolute left-[30px] bottom-[20px]  lg:bottom-[30px] lg:left-[300px] z-10">
        <p className="text-white opacity-60 fsans-400 text-[16px]">
          Explore the Advantage <br />
          with KSH INFRA
        </p>
        <div className="flex items-center justify-center gap-5">
          <button className="landingl w-fit">
            <img className="w-10 h-10" src="/landingr.svg" alt="" />
          </button>
          <button className="landingr w-10 h-10">
            <img className="w-10 h-10" src="/landingl.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingSwiper;
