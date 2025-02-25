"use client";
import React from "react";
import { motion } from "framer-motion";

const MapLineHead = ({ heading, acbtn, setAcBtn }) => {
  const spotlight_btn_content = [
    { title: "All Parks" },
    { title: "Maharashtra" },
    { title: "Tamil Nadu" },
    { title: "Karnataka" },
  ];

  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="pb-[20px] border-b lg:mb-[66px] mb-[36px] border-[#D7D7D7] border-opacity-[34%] overflow-hidden whitespace-nowrap w-[100%] tablinehead"
    >
      <div className="flex items-center justify-between w-[100%] lg:gap-0 gap-[20px]">
        <h2 className="leading-[26px] text-[20px] fsans-600 text-[#ffffff]">
          {heading}
        </h2>
        <div
          className="flex gap-[5px] overflow-x-auto scrollbar"
          style={{
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            msOverflowStyle: "none",
          }}
        >
          {spotlight_btn_content.map((btntitle, index) => (
            <button
              onClick={() => setAcBtn(btntitle.title)}
              key={btntitle.title + " " + String(index)}
              className={`px-[12px] py-[10px] flex items-center justify-center rounded-[10px] border-[#d7d7d7] border-opacity-30 text-white border ${
                acbtn === btntitle.title ? "bg-[#E30613] border-[#E30613]" : ""
              }`}
            >
              {btntitle.title}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MapLineHead;
