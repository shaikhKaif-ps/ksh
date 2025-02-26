// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import MapSC from "./AboutComponents/MapSC";

// const InteractiveSlider = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="flex items-start gap-5">
//       {/* Left Section - Button */}
//       <motion.button
//         className="relative w-16 h-16 bg-yellow-400 rounded-full flex flex-col items-center justify-center font-bold overflow-visible border-4 border-blue-500"
//         onClick={() => setIsOpen(!isOpen)}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//         animate={{
//           borderColor: isOpen || isHovered ? "red" : "blue",
//           borderWidth: isOpen || isHovered ? 20 : 4,
//           width: isOpen || isHovered ? 80 : 64,
//           height: isOpen || isHovered ? 80 : 64,
//         }}
//         transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//       >
//         <span className="text-black">05</span>

//         {/* PUNE Text (Appears when entire button is hovered) */}
//         <motion.span
//           initial={{ opacity: 0, y: 0 }}
//           animate={
//             isHovered || isOpen ? { opacity: 1, y: 30 } : { opacity: 0, y: 0 }
//           }
//           transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
//           className="absolute text-black text-sm"
//         >
//           PUNE
//         </motion.span>
//       </motion.button>

//       {/* Connecting Line */}
//       <div className="h-16 flex flex-col justify-center w-[200px]">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isOpen ? 1 : 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="h-[2px] w-[200px] bg-gray-400"
//         ></motion.div>
//       </div>

//       {/* Expandable Section (Slider + Buttons) */}
//       <motion.div
//         initial={{ width: "0px" }}
//         animate={{ width: isOpen ? "710px" : "0px" }}
//         transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
//         className="overflow-hidden bg-white shadow-lg flex flex-col items-center"
//       >
//         {/* Cross Button Container */}
//         <div className="w-full flex justify-end p-3">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full text-lg font-bold"
//           >
//             ×
//           </button>
//         </div>

//         {/* Swiper Wrapper (Inside Flex Col Parent) */}
//         <div className="w-[710px] flex flex-col">
//           <Swiper
//             modules={[Navigation]}
//             navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
//             slidesPerView={1.2}
//             spaceBetween={20}
//             breakpoints={{
//               1024: {
//                 slidesPerView: 1, // Second slide fully covers
//               },
//             }}
//             className="w-full h-full"
//           >
//             <SwiperSlide>
//               <MapSC />
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="p-5 h-[272px] flex items-center justify-center bg-green-300 whitespace-nowrap">
//                 <h2 className="text-xl font-bold overflow-hidden text-ellipsis">
//                   Another Slide - Another Location
//                 </h2>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>

//         {/* Navigation Buttons (Below Slider) */}
//         <div className="flex flex-row justify-end w-full gap-[10px] mt-2">
//           <button className="prev-btn p-2 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
//             ←
//           </button>
//           <button className="next-btn p-2 bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
//             →
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default InteractiveSlider;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MapSC from "./AboutComponents/MapSC";

const InteractiveSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-start gap-5">
      {/* Left Section - Button */}
      <motion.button
        className="relative w-8 h-8 bg-yellow-400 rounded-full flex flex-col items-center justify-center font-bold overflow-visible border-2 border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          borderColor: isOpen || isHovered ? "red" : "blue",
          outline:
            isOpen || isHovered ? "24px solid red" : "0px solid transparent",
        }}
        transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
      >
        <span className="text-black">05</span>

        {/* PUNE Text (Appears when entire button is hovered) */}
        <motion.span
          initial={{ opacity: 0, y: 0 }}
          animate={
            isHovered || isOpen ? { opacity: 1, y: 25 } : { opacity: 0, y: 0 }
          }
          transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
          className="absolute text-black text-sm"
        >
          PUNE
        </motion.span>
      </motion.button>

      {/* Connecting Line */}
      <div className="h-8 flex flex-col justify-center w-[200px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[2px] w-[200px] bg-gray-400"
        ></motion.div>
      </div>

      {/* Expandable Section (Slider + Buttons) */}
      <motion.div
        initial={{ width: "0px" }}
        animate={{ width: isOpen ? "710px" : "0px" }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.4, 1] }}
        className="overflow-hidden flex flex-col items-center"
      >
        {/* Cross Button Container */}
        <div className="w-full flex justify-end p-3">
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 bg-red-500 text-white flex items-center justify-center rounded-full text-lg font-bold"
          >
            ×
          </button>
        </div>

        {/* Swiper Wrapper (Inside Flex Col Parent) */}
        <div className="w-[710px] flex flex-col">
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              1024: {
                slidesPerView: 1, // Second slide fully covers
              },
            }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <MapSC />
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 h-[272px] flex items-center justify-center bg-green-300 whitespace-nowrap">
                <h2 className="text-xl font-bold overflow-hidden text-ellipsis">
                  Another Slide - Another Location
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Navigation Buttons (Below Slider) */}
        <div className="flex flex-row justify-end w-full gap-[10px] mt-2">
          <button className="prev-btn p-2 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
            ←
          </button>
          <button className="next-btn p-2 bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
            →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveSlider;
