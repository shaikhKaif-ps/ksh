"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
const SlideSection = () => {
  const tabs = ["Growth", "Culture", "Opportunities"];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  // Handle tab click (updates both tab and slide)
  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    }
  };
  // Handle navigation
  const handleNext = () => {
    if (swiperRef.current && activeIndex < tabs.length - 1) {
      setActiveIndex(activeIndex + 1);
      swiperRef.current.slideNext();
    }
  };
  const handlePrev = () => {
    if (swiperRef.current && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      swiperRef.current.slidePrev();
    }
  };
  return (
    <div
      className="h-auto lg:h-[690px] flex overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff 50%, #092241 50%)",
      }}
    >
     

      <div className="relative h-fit lg:h-[596px] flex lg:flex-row flex-col overflow-hidden  w-[100%] xl-1920:mr-[17.4%] xl-1600:mr-[172px] xl-1536:mr-[140px] xl-1440:mr-[94px] xl-1366:mr-[66px] xl-1280:mr-[62px] xl-1024:mr-[50px] ">
        

        {/* Left Section */}
        <div className="leftCon bg-[#141D28] w-full lg:w-[60%] xl-1920:pl-[21%] xl-1600:pl-[174px] xl-1536:pl-[140px] xl-1440:pl-[90px] xl-1366:pl-[70px] xl-1280:pl-[64px] xl-1024:pl-[50px] xl-768:pl-[40px]">
          
            {/* Heading & Tabs */}
          <div className="px-[5%] md:px-0 md:flex items-center justify-between xl-1024:w-[90%] xl-768:pr-[40px] lg:w-[600px] pt-[70px] border-b-[1px] pb-3 border-[#D7D7D7] border-opacity-50 xl-1920:w-[80%]">
            
              <h1 className="text-xl pb-4 md:pb-0 text-white font-semibold">Careers at KSH</h1>
              {/* Tabs */}
              <div className="tabs flex gap-4">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    className={`px-3 h-[46px] border-[#D7D7D7] border-opacity-50 border-[2px] text-white rounded-[10px] ${
                      activeIndex === index ? "bg-red-700" : "bg-transparent"
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
          </div>
          
            {/* Animated Content Section */}
            <div className="relative w-full h-[300px] xl-1024:h-[350px] overflow-hidden px-[5%] md:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ x: 500, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -500, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute text-white "
                >
                  <h1 className="text-3xl md:text-6xl font-medium border-b-[8px] border-[#F7E327] w-fit pb-3 pt-16">
                    {tabs[activeIndex]}
                  </h1>
                  <p className="md:w-[60%] pt-6 md:pt-12 md:pb-12 text-base text-[#6C8DAB]">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrum exercitationem ullam
                    corporis suscipit.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Navigation Buttons */}
          <div className="flex items-center pt-[45px] px-[5%] md:px-0 md:w-[60%] justify-between pb-[70px]">
            
              <div className="flex items-center gap-4 text-[#fff] text-[16px] group cursor-pointer">
                <img src="/buttonarrows/redarico.svg" className="group-hover:rotate-0 transition-transform duration-[400ms] ease-in-out  h-10 w-10 rotate-45 hover:rotate-0 cursor-pointer" alt="" />
                Explore Careers
              </div>
              
              <div className="flex gap-2 items-center">
                <button
                  className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                >
                  <img className="h-10 w-10" src="/landingr.svg" alt="" />
                </button>
                <div className="text-base text-[#6C8DAB]">
                  {activeIndex + 1} / {tabs.length}
                </div>
                <button
                  className="w-10 h-10 flex items-center justify-center disabled:opacity-50"
                  onClick={handleNext}
                  disabled={activeIndex === tabs.length - 1}
                >
                  <img className="h-10 w-10" src="/landingl.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        
          {/* Middle Section (Dynamic Image) */}
          <div className="middleSection w-[205px] left-[52%] z-10 h-full absolute lg:inline-block hidden">
            <img
              src={`/Slideimgs/${tabs[activeIndex]}-middle.png`}
              alt={tabs[activeIndex]}
              className="w-full h-auto transition-opacity duration-500 ease-in-out object-cover mt-[125%]"
            />
          </div>




        

          {/* Right Section (Swiper) */}
          <div className="rightCon w-full lg:w-[40%] h-full rigthSectionOfCarrer">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {tabs.map((tab) => (
                  <SwiperSlide key={tab}>
                    <img
                      src={`/Slideimgs/${tab}.png`}
                      alt={tab}
                      className="max-w-none w-full xl-1440:w-auto xl-1366:w-auto xl-1280:w-auto xl-1024:w-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        
        </div>
      </div>
  
  );
};
export default SlideSection;
// xl-1440:pl-[90px] xl-1536:pl-[138px] xl-1600:pl-[170px]