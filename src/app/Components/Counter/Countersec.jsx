"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

const StatsSection = () => {
  const parksTotal = 5;
  const equityDeployment = 143555;
  const totalInvestments = 1200;
  const approxPortfolio = 4;
  const numberOfClients = 25;

  const useAnimatedNumber = (finalValue) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const [displayValue, setDisplayValue] = useState("0");
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2, once: true });

    useEffect(() => {
      if (isInView) {
        const animation = animate(count, finalValue, {
          duration: 1.9,
          delay: 0.1,
        });
        const unsubscribe = rounded.on("change", (v) => {
          setDisplayValue(v.toLocaleString());
        });

        return () => {
          animation.stop();
          unsubscribe();
        };
      }
    }, [isInView, finalValue]);

    return { ref, displayValue };
  };

  const parksTotalData = useAnimatedNumber(parksTotal);
  const equityDeploymentData = useAnimatedNumber(equityDeployment);
  const totalInvestmentsData = useAnimatedNumber(totalInvestments);
  const approxPortfolioData = useAnimatedNumber(approxPortfolio);
  const numberOfClientsData = useAnimatedNumber(numberOfClients);

  return (
    <div className="grid md:grid-cols-5 grid-cols-2 relative z-0 xl:pb-[50px] pb-0">
      <motion.div
        ref={parksTotalData.ref}
        className="flex countersec flex-col items-left text-left px-[30px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[30px] border-t border-r border-gray-300"
        // initial={{ y: 200, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ once: true, amount: 0.1 }}
        // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
      >
        <p className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            0{parksTotalData.displayValue}
          </span>{" "}
          Parks
        </p>
        <p className="2xl:text-[20px] group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
          Total
        </p>
      </motion.div>

      <motion.div
        ref={approxPortfolioData.ref}
        className="flex fsans-600 flex-col items-left text-left countersec px-[30px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[30px] border-t border-r border-b-0 md:border-b border-gray-300"
        // initial={{ y: 200, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ once: true, amount: 0.1 }}
        // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
      >
        <p className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            {approxPortfolioData.displayValue}
          </span>
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            MN
          </span>
          SQ.FT.
        </p>
        <p className="2xl:text-[20px] group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[gray-500]  text-[#9da7b3]">
          Approx Portfolio
        </p>
      </motion.div>
      {/*  */}
      <motion.div
        ref={totalInvestmentsData.ref}
        className="flex flex-col items-left text-left countersec px-[30px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[30px] border-t border-r border-gray-300"
        // initial={{ y: 200, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ once: true, amount: 0.1 }}
        // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
      >
        <p className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] text-[14px] fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            {totalInvestmentsData.displayValue}+
          </span>{" "}
          CR
        </p>
        <p className="2xl:text-[20px] group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600">
          Total Investments
        </p>
      </motion.div>

      <motion.div
        ref={equityDeploymentData.ref}
        className="md:border-b-0 border-b flex flex-col items-left text-left countersec px-[30px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] md:border-t lg:py-[56px] py-[30px] border-t border-r border-gray-300"
        // initial={{ y: 200, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ once: true, amount: 0.1 }}
        // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
      >
        <p className="fsans-600 text-[#092241] group-hover:text-white">
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            {equityDeploymentData.displayValue}
          </span>
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            +
          </span>
        </p>
        <p className="2xl:text-[20px] group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px] text-[#9da7b3] fsans-600 text-left">
          Targeted Equity Deployment
        </p>
      </motion.div>

      <motion.div
        ref={numberOfClientsData.ref}
        className="flex flex-col items-left text-left countersec px-[30px] xl:px-[42px] group hover:bg-[#E30613] hover:text-white gap-[12px] 2xl:py-[75px] xl:py-[66px] lg:py-[56px] py-[30px] border-t sm:border-r-0 border-r sm:border-b-0 border-b border-gray-300"
        // initial={{ y: 200, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ once: true, amount: 0.1 }}
        // transition={{ duration: 1.5, ease: [0.7, 0, 0.4, 1] }}
      >
        <p className="text-[#092241] group-hover:text-white">
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            {numberOfClientsData.displayValue}
          </span>
          <span className="fsans-600 2xl:text-[40px] xl:text-[32px] lg:text-[28px] text-[20px] leading-[111%]">
            +
          </span>
        </p>
        <p className="fsans-600 text-[#9da7b3] 2xl:text-[20px] group-hover:text-white transition xl:text-[18px] lg:text-[16px] text-[14px]">
          No of Clients
        </p>
      </motion.div>
    </div>
  );
};

export default StatsSection;
