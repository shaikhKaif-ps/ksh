"use client"; // Add this at the top if using Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Bento from "./Bento";
import BentoHeader from "./BentoHeader";
import { useState } from "react";

const BentoSlider = () => {
  const [sliding, setSliding] = useState(false);
  return (
    <div className='bg-[#092241] lg:pt-0 pt-20'>
      <div className='h-fit fix12'>
        <div className='flex flex-col gap-[30px] sm:gap-[98px] md:pb-[85px] relative'>
          <BentoHeader />
          {/* Navigation Buttons */}
          <div className='absolute top-[15.8%] sm:top-[40%] lg:top-[44%] right-0 z-10'>
            <div className='flex items-center gap-[14px]'>
              <button className='swiper-button-prev-landing'>
                <img className='w-10 h-10' src='/landingr.svg' alt='Previous' />
              </button>
              <button className='swiper-button-next-landing'>
                <img className='w-10 h-10' src='/landingl.svg' alt='Next' />
              </button>
            </div>
          </div>

          {/* Swiper Component */}
          <Swiper
            modules={[Navigation, FreeMode]}
            navigation={{
              prevEl: ".swiper-button-prev-landing",
              nextEl: ".swiper-button-next-landing",
            }}
            spaceBetween={20}
            speed={300}
            freeMode={true}
            preventInteractionOnTransition={true} // Important!
            touchMoveStopPropagation={true}
            onSlideChangeTransitionStart={() => setSliding(true)}
            onSlideChangeTransitionEnd={() => setSliding(false)}
            className='max-w-full'
          >
            <SwiperSlide>
              <Bento pointerEvents={!sliding} />
            </SwiperSlide>
            <SwiperSlide>
              <Bento pointerEvents={!sliding} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BentoSlider;
