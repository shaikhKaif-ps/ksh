"use client";
import React from "react";
import { motion } from "framer-motion";
import LineHead from "./Heading/LineHead";

const Esg = () => {
  return (
    <div className="h-fit">
      <div className="WContainer py-[56px] fix12">
        <LineHead heading={"Sustainability"} clr="text-[#092241]" />
        <div className="md:flex md:gap-[20px]">
          <div className="md:w-[40%] ">
            <h3 className="text-[#092241] text-3xl md:text-[60px] font-semibold leading-[105%]">
              Safe Guarding the Nature is part of our DNA
            </h3>
            <div className="pt-[32px]">
              <h3 className="text-[18px] leading-[26px] text-[#6C8DAB]">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et
              </h3>
              <div className="pt-[23px] flex flex-col gap-4 w-[305px]">
                <p className="text-[16px] leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]">
                  <span className="font-bold text-red-700 pr-[11px]">01</span>{" "}
                  Enviroment
                </p>
                <p className="text-[16px] leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]">
                  <span className="font-bold text-red-700 pr-[11px]">02</span>{" "}
                  Social
                </p>
                <p className="text-[16px] leading-[26px] text-[#092241] border-b border-[#D7D7D7] pb-[15px]">
                  <span className="font-bold text-red-700 pr-[11px]">03</span>{" "}
                  Governance
                </p>
              </div>
              <div className="flex items-center gap-4 pt-[45px] justify-between font-semibold text-[#092241] text-[16px] w-fit">
                <img src="/buttonarrows/redarico.svg" className="rotate-45 hover:rotate-0 transition-transform duration-300 cursor-pointer" alt="" />
                Explore More
              </div>
            </div>
          </div>
          <div className="hidden md:w-[60%] md:flex items-center justify-center">
            <video src="/Esg/Frame-48097826.webm" autoPlay loop muted></video>
            {/* <video src="/Esg/EsgGif.webm" autoPlay loop muted></video> */}
            {/* <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.1, once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src="/buttonarrows/arrow.svg" alt="" />
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esg;
