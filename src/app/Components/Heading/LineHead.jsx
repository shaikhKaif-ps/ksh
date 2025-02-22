"use client";
import React from "react";
import { motion } from "framer-motion";
const LineHead = ({ heading, clr }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      style={{
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "nowrap", // Prevent text from wrapping
      }}
      className="overflow-hidden inline-block whitespace-nowrap max-w-[1250px] mx-auto"
    >
      <h2
        className={`leading-[26px] text-[20px] pb-[20px] border-b lg:mb-[66px] mb-[36px] border-[#D7D7D7] fsans-600 text-[#092241] ${clr}`}
      >
        {heading}
      </h2>
    </motion.div>
  );
};

export default LineHead;
