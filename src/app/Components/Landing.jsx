// // "use client";
// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // const fadeIn = {
// //   hidden: { opacity: 0, y: 50 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 1.4, ease: "easeInOut" },
// //   },
// //   exit: {
// //     opacity: 0,
// //     y: -50,
// //     transition: { duration: 1.4, ease: "easeInOut" },
// //   },
// // };

// // const Landing = ({ isActive }) => {
// //   return (
// //     <motion.div
// //       className="bg-[url(/fistfold.png)] bg-cover bg-center w-screen"
// //       initial="hidden"
// //       animate={isActive ? "visible" : "hidden"}
// //     >
// //       <div className="fix12 flex items-center lg:justify-center justify-end xl-1920:max-h-fit h-screen py-[50px] md:py-[92px] xl:gap-[100px] md:gap-[50px] gap-[20px] md:flex-row flex-col-reverse">
// //         <motion.div
// //           className="flex flex-col flex-1 max-w-full gap-5 lg:gap-10 xl:flex-[1] lg:h-[450px] justify-center"
// //           variants={fadeIn}
// //           exit="exit"
// //         >
// //           <motion.h1
// //             className="fpt-600 lg:text-[56px] md:text-[32px] text-[20px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]"
// //             variants={fadeIn}
// //           >
// //             Delivering Grade A Industrial & Logistics Parks
// //           </motion.h1>
// //           <motion.p
// //             className="fsans-500 text-[14px] md:text-[20px] leading-[26px]"
// //             style={{
// //               backgroundImage: "linear-gradient(to bottom, #ffffff, #163E71)",
// //               WebkitBackgroundClip: "text",
// //               WebkitTextFillColor: "transparent",
// //               backgroundClip: "text",
// //               color: "transparent",
// //             }}
// //             variants={fadeIn}
// //           >
// //             We deliver on our promises, with expertise in land acquisition, site
// //             selection, and customised facility development to fit your needs and
// //             schedule.
// //           </motion.p>
// //           <motion.div variants={fadeIn}>
// //             <button className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3">
// //               <Image
// //                 src="/buttonarrows/redarico.svg"
// //                 width={0}
// //                 height={0}
// //                 className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
// //                 alt="Red Arrow Icon"
// //               />
// //               <p className="text-[#ffffff] fsans-600">
// //                 Learn More About KSH Infra
// //               </p>
// //             </button>
// //           </motion.div>
// //         </motion.div>
// //         <motion.div
// //           className="xl:min-h-screen flex-1 flex flex-col justify-end"
// //           variants={fadeIn}
// //         >
// //           <motion.div
// //             className="flex items-end justify-end flex-col xl:w-[577px] xl:h-[700px] max-w-full"
// //             variants={fadeIn}
// //           >
// //             <motion.img
// //               src="/firstman.png"
// //               className="object-cover md:inline-block hidden"
// //               alt="some"
// //               variants={fadeIn}
// //             />
// //             <motion.img
// //               src="/landingph.png"
// //               className="object-cover md:hidden inline-block"
// //               alt="some"
// //               variants={fadeIn}
// //             />
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Landing;

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const fadeIn = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.4, ease: "easeInOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: -50,
//     transition: { duration: 1.4, ease: "easeInOut" },
//   },
// };

// const Landing = ({ isActive }) => {
//   return (
//     <motion.div
//       className="bg-[url(/fistfold.png)] bg-cover bg-center w-screen"
//       initial="hidden"
//       animate={isActive ? "visible" : "hidden"}
//       exit="exit"
//     >
//       <div className="fix12 flex items-center lg:justify-center justify-end xl-1920:max-h-fit h-screen py-[50px] md:py-[92px] xl:gap-[100px] md:gap-[50px] gap-[20px] md:flex-row flex-col-reverse">
//         <motion.div
//           className="flex flex-col flex-1 max-w-full gap-5 lg:gap-10 xl:flex-[1] lg:h-[450px] justify-center"
//           variants={fadeIn}
//           initial="hidden"
//           animate={isActive ? "visible" : "hidden"}
//           exit="exit"
//         >
//           <motion.h1
//             className="fpt-600 lg:text-[56px] md:text-[32px] text-[20px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]"
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             Delivering Grade A Industrial & Logistics Parks
//           </motion.h1>
//           <motion.p
//             className="fsans-500 text-[14px] md:text-[20px] leading-[26px]"
//             style={{
//               backgroundImage: "linear-gradient(to bottom, #ffffff, #163E71)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//               color: "transparent",
//             }}
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             We deliver on our promises, with expertise in land acquisition, site
//             selection, and customised facility development to fit your needs and
//             schedule.
//           </motion.p>
//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             <button className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3">
//               <Image
//                 src="/buttonarrows/redarico.svg"
//                 width={0}
//                 height={0}
//                 className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
//                 alt="Red Arrow Icon"
//               />
//               <p className="text-[#ffffff] fsans-600">
//                 Learn More About KSH Infra
//               </p>
//             </button>
//           </motion.div>
//         </motion.div>
//         <motion.div
//           className="xl:min-h-screen flex-1 flex flex-col justify-end"
//           variants={fadeIn}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         >
//           <motion.div
//             className="flex items-end justify-end flex-col xl:w-[577px] xl:h-[700px] max-w-full"
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//           >
//             <motion.img
//               src="/firstman.png"
//               className="object-cover md:inline-block hidden"
//               alt="some"
//               variants={fadeIn}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             />
//             <motion.img
//               src="/landingph.png"
//               className="object-cover md:hidden inline-block"
//               alt="some"
//               variants={fadeIn}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Landing;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: "easeInOut", delay: 0.3 },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 1.4, ease: "easeInOut", delay: 0.3 },
  },
};
const fadeIn2 = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.4, ease: "easeInOut", delay: 0.3 },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: { duration: 1.4, ease: "easeInOut", delay: 0.3 },
  },
};

const Landing = ({ isActive }) => {
  return (
    <motion.div
      className="bg-[url(/fistfold.png)] bg-cover bg-center w-screen"
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      exit="exit"
    >
      <div className="fix12 flex items-center lg:justify-center justify-end xl-1920:max-h-fit h-screen py-[50px] md:py-[92px] xl:gap-[100px] md:gap-[50px] gap-[20px] md:flex-row flex-col-reverse">
        {/* Left Side Content */}
        <motion.div
          className="flex flex-col flex-1 max-w-full gap-5 lg:gap-10 xl:flex-[1] lg:h-[450px] justify-center"
          variants={fadeIn2}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          exit="exit"
        >
          <motion.h1
            className="fpt-600 lg:text-[56px] md:text-[32px] text-[20px] text-white border-b-[5px] md:border-b-[10px] border-[#F7E327] leading-[150%] md:leading-[105%] pb-5 2xl:text-[70px]"
            variants={fadeIn2}
          >
            Delivering Grade A Industrial & Logistics Parks
          </motion.h1>
          <motion.p
            className="fsans-500 text-[14px] md:text-[20px] leading-[26px]"
            style={{
              backgroundImage: "linear-gradient(to bottom, #ffffff, #163E71)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
            variants={fadeIn2}
          >
            We deliver on our promises, with expertise in land acquisition, site
            selection, and customised facility development to fit your needs and
            schedule.
          </motion.p>
          <motion.div variants={fadeIn}>
            <button className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] items-center justify-center gap-3">
              <Image
                src="/buttonarrows/redarico.svg"
                width={0}
                height={0}
                className="h-10 w-10 rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-300 cursor-pointer"
                alt="Red Arrow Icon"
              />
              <p className="text-[#ffffff] fsans-600">
                Learn More About KSH Infra
              </p>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="xl:min-h-screen flex-1 flex flex-col justify-end"
          variants={fadeIn}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          exit="exit"
        >
          <motion.div
            className="flex items-end justify-end flex-col xl:w-[577px] xl:h-[700px] max-w-full"
            variants={fadeIn}
          >
            {/* Desktop Image */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src="/firstman.png"
                className="object-cover md:inline-block hidden"
                alt="some"
                variants={fadeIn}
              />
            </motion.div>

            {/* Mobile Image */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                src="/landingph.png"
                className="object-cover md:hidden inline-block"
                alt="some"
                variants={fadeIn}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
