"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="bg-[url(/fistfold.png)] bg-cover bg-center w-screen">
      <div className="fix12 flex items-center lg:justify-center justify-end h-screen py-[50px] md:py-[92px] xl:gap-[100px] md:gap-[50px] gap-[20px] md:flex-row flex-col-reverse">
        <div className="flex flex-col flex-1 max-w-full gap-5 lg:gap-10 xl:flex-[1] lg:h-[450px] justify-center">
          <h1 className="fpt-600 lg:text-[56px] md:text-[32px] text-[20px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]">
            Delivering Grade A Industrial & Logistics Parks
          </h1>
          <p
            className="fsans-500 text-[14px] md:text-[20px] leading-[26px]"
            style={{
              backgroundImage: "linear-gradient(to bottom, #ffffff, #163E71)", // Replace with your gradient colors
              WebkitBackgroundClip: "text", // For WebKit-based browsers
              WebkitTextFillColor: "transparent", // Ensures only the text takes on the gradient
              backgroundClip: "text", // Fallback for other browsers (optional)
              color: "transparent",
            }}
          >
            We deliver on our promises, with expertise in land acquisition, site
            selection, and customised facility development to fit your needs and
            schedule.
          </p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <button className="flex items-center justify-center gap-3">
              <Image
                src="/buttonarrows/redarico.svg"
                width={0}
                height={0}
                className="h-10 w-10"
                alt="Red Arrow Icon"
              />
              <p className="text-[#ffffff] fsans-600">
                Learn More About KSH Infra
              </p>
            </button>
          </motion.div>
        </div>
        <div className="xl:min-h-screen flex-1 flex flex-col justify-end">
          <div className="flex items-end justify-end flex-col xl:w-[577px] xl:h-[700px] max-w-full">
            <img
              src="/firstman.png"
              className="object-cover md:inline-block hidden"
              alt="some"
            />
            <img
              src="/landingph.png"
              className="object-cover md:hidden inline-block"
              alt="some"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;