"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex items-center justify-center h-[100px] bg-gradient-to-b from-gray-800 to-transparent fixed top-0 left-0 z-[1000000000] w-screen">
      <div className="max-w-[1250px] w-[90%] flex justify-between relative">
        <div>
          <img src="/navlogo.svg" alt="Nav Logo" />
        </div>

        {/* Animated Dropdown */}
        <motion.div
          className="hidden md:flex  w-[85%] p-4 absolute top-0 right-0  items-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: isHover ? 0 : -100, opacity: isHover ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="flex justify-start items-center gap-[42px]  mr-[23px]">

            {["About", "Parks", "Capabilities", "Sustainability", "Invsetor", "Carrer", "Contact"].map((item, index) => (
              <p key={index} className="fsans-600 text-white">{item}</p>
            ))}
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#092241] flex items-center justify-center mr-[10px]"><img src="/user.svg" alt="" /></div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#092241] flex items-center justify-center mr-[10px]"><img src="/search.svg" alt="" /></div>
          <div className="bg-[#E30613] w-[175px] flex items-center text-base fsans-600 text-white justify-around py-2 rounded-3xl" > <p>Enquire Now</p> <img  src="/rightUpArrow.svg" alt="" /> </div>
        </motion.div>

        {/* Menu Icon */}
        <div
          className={`${isHover ? 'opacity-0 absolute' : 'flex'}  flex gap-[20px] justify-center items-center cursor-pointer relative p-2`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="text-white font-semibold text-[16px]">Menu</div>
          <img src="/hbrg.svg" alt="Hamburger Menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
