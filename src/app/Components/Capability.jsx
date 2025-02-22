"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import LineHead from "./Heading/LineHead";
const Capabilities = () => {
  const tabs = [
    {
      title: "Capital Deployment",
      heading: "Capital Deployment",
      content:
        "Capital Deployment Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      images: {
        top: ["/OurCapabilities/top1.png"],
        bottom1: ["/OurCapabilities/bottom1_1.png"],
        bottom2: ["/OurCapabilities/bottom2_1.png"],
      },
    },
    {
      title: "Development",
      heading: "Development",
      content:
        "Development Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      images: {
        top: ["/OurCapabilities/dev_top1.png"],
        bottom1: ["/OurCapabilities/dev_bottom1_1.png"],
        bottom2: ["/OurCapabilities/dev_bottom2_1.png"],
      },
    },
    // {
    //     title: "Property Management",
    //     heading: "Property Management",
    //     content: "Property Management Lorem ipsum dolor sit amet...",
    //     images: {
    //         top: ["/OurCapabilities/pm_top1.png", "/OurCapabilities/pm_top2.png"],
    //         bottom1: ["/OurCapabilities/pm_bottom1_1.png", "/OurCapabilities/pm_bottom1_2.png"],
    //         bottom2: ["/OurCapabilities/pm_bottom2_1.png", "/OurCapabilities/pm_bottom2_2.png"]
    //     }
    // }
  ];
  const [activeTab, setActiveTab] = useState(0); // Track active tab index
  return (
    <div className="bg-[#092241] ">
      <div className="bg-[#092241] md:h-auto h-fit flex items-end justify-end">

        <div className="border-white w-full  maxTab xl-1024:ml-[44px] xl-1280:ml-[59px] xl-1366:ml-[60px] xl-1440:ml-[90px] xl-1536:ml-[137px] xl-1600:ml-[175px] xl-1920:ml-[17.5%]  lg:pb-0 pb-[100px] lg:gap-0 gap-[50px] flex lg:flex-row flex-col overflow-hidden">
          <div className="leftCon flex-1 h-full">
            <div className="pt-[40px]">
              <LineHead heading="Our Capabilities" clr="text-white" />
            </div>
            {/* Tabs */}
            <div className="tabs flex gap-4">
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  className={`px-3 h-[46px] border border-[#D7D7D7] border-opacity-50 text-white rounded-[6px]
                                ${
                                  activeTab === index
                                    ? "bg-[#E30613] text-black"
                                    : ""
                                }`}
                  onClick={() => setActiveTab(index)} // Update active tab
                >
                  {tab.title}
                </button>
              ))}
            </div>
            {/* Animated Content Section */}
            <div className="w-full h-auto pt-[30px]">
              <div className="w-[516px] xl-1024:w-[400px]">
                <h1 className="tabHeading text-4xl md:text-5xl lg:text-[60px] text-white font-medium border-b-[8px] border-[#F7E327] pb-[20px]">
                  {tabs[activeTab].heading}
                </h1>
                <p className="tabContent pt-12 text-xl gradinetText">
                  {tabs[activeTab].content}
                </p>
              </div>
            </div>
            {/* Navigation Buttons */}
            <div className="flex items-center pt-[35px] xl:w-[60%] xl-1024:w-[90%] md:w-[70%] w-[100%] justify-between">
              <div className="flex items-center gap-4 text-[#fff] text-[16px]">
                <img src="/buttonarrows/redarico.svg" alt="" />
                Explore Capabilities
              </div>
              <div className="flex gap-2 items-center">
                <button
                  className="rounded-full border flex items-center justify-center disabled:opacity-50"
                  onClick={() => setActiveTab((prev) => Math.max(prev - 1, 0))}
                  disabled={activeTab === 0}
                >
                  <img className="w-10 h-10" src="/landingr.svg" alt="" />
                </button>
                <div className="text-base text-[#6C8DAB]">
                  {activeTab + 1} / {tabs.length}
                </div>
                <button
                  className="rounded-full border border-[#D7D7D7] border-opacity-50 w-10 h-10 flex items-center justify-center disabled:opacity-50"
                  onClick={() =>
                    setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1))
                  }
                  disabled={activeTab === tabs.length - 1}
                >
                  <img className="w-10 h-10" src="/landingl.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          {/* Right Container with Swipers */}
          <div className="rightCon flex-1">
            {/* Top Image Swiper */}
            <div className="h-[532px]">
              <Swiper
                modules={[EffectFade, Pagination, Navigation]}
                effect="fade"
                pagination={{ clickable: true }}
                navigation
                className="h-full w-full"
              >
                {tabs[activeTab].images.top.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex h-full">
              {/* Bottom Left Image Swiper */}
              <div className="w-[50%] h-[236px]">
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation
                  className="h-full w-full"
                >
                  {tabs[activeTab].images.bottom1.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Bottom Right Image Swiper */}
              <div className="w-[50%] h-[236px]">
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation
                  className="h-full w-full"
                >
                  {tabs[activeTab].images.bottom2.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Capabilities;
