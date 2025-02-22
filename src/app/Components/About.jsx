"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Countersec from "./Counter/Countersec";
import Esg from "./Esg";
import ButtomComp from "./ButtonComp";
import Map from "./Map";
import LineHead from "./Heading/LineHead";

const About = () => {
  return (
    <div className="w-full max-h-fit relative">
      <div className="fix12 py-[50px] md:py-[92px] h-full flex flex-col justify-end">
        <LineHead heading={"About us"} clr="text-[#092241]" />
        <div className="flex md:flex-row flex-col justify-start items-start gap-[36px] sm:gap-[44px] md:gap-[84px]">
          <div
            className="hidden xl:flex"
            style={{
              width: "502px !important", // Fixed width for parent container
              height: "500px", // Fixed height for the container
              minWidth: "502px !important",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "502px" }} // Ensures width animation smoothly
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0 }}
              style={{
                width: "502px",
                overflow: "hidden",
                height: "500px",
                display: "block",
              }}
            >
              <img
                src="/firstinfra.jpg"
                alt="Warehouse"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex xl:hidden max-w-full w-full">
            <motion.div
              initial={{ x: "-99.99999%", opacity: 0 }}
              whileInView={{ x: "0", opacity: 1 }}
              viewport={{ amount: 0.01, once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full max-w-full"
            >
              <img src="/firstinfra.jpg" alt="Warehouse" className="w-full" />
            </motion.div>
          </div>

          {/*  */}
          {/*  */}
          <div className="flex flex-col justify-center items-start gap-[28px] lg:gap-[36px] xl:gap-[48px]">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, easing: "easeInOut", delay: 0 }}
            >
              <h2
                className="fsans-700 text-[22px] leading-[130%] 2xl:text-[31px] xl:text-[26px]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #092241, #1757A7)", // Replace with your gradient colors
                  WebkitBackgroundClip: "text", // For WebKit-based browsers
                  WebkitTextFillColor: "transparent", // Ensures only the text takes on the gradient
                  backgroundClip: "text", // Fallback for other browsers (optional)
                  color: "transparent",
                }}
              >
                KSH INFRA is a pioneering developer of Grade A industrial and
                logistics parks, committed to shaping a sustainable future for
                India's manufacturing and logistics sectors.
              </h2>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, easing: "easeInOut", delay: 0.25 }}
            >
              <p className="flato-400 text-[18px] leading-[26px] text-[#6C8DAB]">
                Setting benchmarks in delivering
                <br />
                transform ative infrastructure.
              </p>
            </motion.div>
            <ButtomComp />
          </div>
        </div>

        <div className="absolute right-0 w-[373px] h-[251px] min-w-[373px] xl:flex hidden">
          <motion.div
            className="flex justify-end h-[251px] overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: "373px" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0 }}
          >
            <img
              src="/truckinfra.jpg"
              alt="Truck"
              className="object-cover h-full"
            />
          </motion.div>
        </div>
      </div>
      <Countersec />
      {/* <Map /> */}
    </div>
  );
};

export default About;
