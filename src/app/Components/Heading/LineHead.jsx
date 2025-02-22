"use client";
import React from "react";
import { motion } from "framer-motion";

const LineHead = ({ heading, clr, bclr, bopacity }) => {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="overflow-hidden whitespace-nowrap"
      >
        <h2
          className={`leading-[26px] w-full text-[20px] pb-[20px] border-b lg:mb-[66px] mb-[36px] border-[${bclr}] border-opacity-[${bopacity}] fsans-600 text-[#092241] ${clr}`}
        >
          {heading}
        </h2>
      </motion.div>
    </div>
  );
};

export default LineHead;






