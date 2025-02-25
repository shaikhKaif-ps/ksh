// "use client";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import Landing from "./Landing";
// import VidLand from "./VidLand";

// const LandingSwiper = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div style={{ position: "relative" }}>
//       <Swiper
//         slidesPerGroup={1}
//         className="max-w-full"
//         speed={1500}
//         modules={[FreeMode, Navigation]}
//         navigation={{ nextEl: ".landingr", prevEl: ".landingl" }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//       >
//         <SwiperSlide>
//           <VidLand />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Landing isActive={activeIndex === 1} />
//         </SwiperSlide>
//       </Swiper>
//       <div className="flex gap-10 items-center lg:justify-start justify-between absolute firstswbtns bottom-[20px] lg:bottom-[30px] z-10">
//         <p className="text-white opacity-60 fsans-400 text-[16px]">
//           Explore the Advantage <br />
//           with KSH INFRA
//         </p>
//         <div className="flex items-center justify-center gap-5">
//           <button className="landingl w-fit">
//             <img className="w-10 h-10" src="/landingr.svg" alt="Prev" />
//           </button>
//           <button className="landingr w-10 h-10">
//             <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingSwiper;

"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Landing from "./Landing";
import VidLand from "./VidLand";

const LandingSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling after animation
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isAnimating]);

  return (
    <div className="h-screen">
      <motion.div
        className="relative overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: "100vh" }}
        transition={{
          duration: 1,
          ease: [1, 0, 0.6, 0.2],
        }}
        onAnimationComplete={() => setIsAnimating(false)} // Unlock scrolling after animation
      >
        <Swiper
          slidesPerGroup={1}
          className="max-w-full"
          speed={1000}
          modules={[FreeMode, Navigation]}
          navigation={{ nextEl: ".landingr", prevEl: ".landingl" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          <SwiperSlide>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: activeIndex === 0 ? "100%" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <VidLand />
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: activeIndex === 1 ? "100%" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Landing isActive={activeIndex === 1} />
            </motion.div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex gap-10 items-center lg:justify-start justify-between absolute firstswbtns bottom-[20px] lg:bottom-[30px] z-10">
          <p className="text-white opacity-60 fsans-400 text-[16px]">
            Explore the Advantage <br />
            with KSH INFRA
          </p>
          <div className="flex items-center justify-center gap-5">
            <button className="landingl w-fit">
              <img className="w-10 h-10" src="/landingr.svg" alt="Prev" />
            </button>
            <button className="landingr w-10 h-10">
              <img className="w-10 h-10" src="/landingl.svg" alt="Next" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingSwiper;
