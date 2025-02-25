"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); // To manage the timeout

  // Parent container controlling all animations
  const parentVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1, // Stagger delay between menu items
        delayChildren: 0, // Start menu items immediately
      },
    },
    hidden: {},
  };

  // Menu item animation
  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  // Icons & Button (delayed start after menu finishes)
  const iconsVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1, // Stagger delay between menu items
        delayChildren: 0, // Start menu items immediately
        duration: 0.2,
      },
    },
  };

  // Handle mouse leave with a 4-second delay
  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHover(false);
    }, 10000); // 4000ms = 4 seconds
    setTimeoutId(id); // Store the timeout ID
  };

  // Handle mouse enter and clear any existing timeout
  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear the timeout if it exists
    }
    setIsHover(true);
  };

  return (
    <div className="mainNavbarContainer flex items-center justify-center h-[100px] bg-gradient-to-b from-gray-800 to-transparent fixed top-0 left-0 z-[1000000000] w-screen">
      <div className="max-w-[1250px] w-[90%] flex justify-between relative ">
        <div>
          <img src="/navlogo.svg" alt="Nav Logo" />
        </div>

        <motion.div
          className="hidden md:flex w-[85%] p-4 absolute top-0 right-0 items-center"
          initial="hidden"
          animate={isHover ? "visible" : "hidden"}
          variants={parentVariants}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {/* Menu Items */}
          <motion.div className="flex justify-start items-center gap-[42px] mr-[23px]">
            {[
              "About",
              "Parks",
              "Capabilities",
              "Sustainability",
              "Investor",
              "Career",
              "Contact",
            ].map((item, index) => (
              <motion.p
                key={index}
                className="fsans-600 text-white"
                variants={menuItemVariants}
              >
                {item}
              </motion.p>
            ))}
          </motion.div>

          {/* Icons & Button */}
          <motion.div className="flex items-center gap-[10px]">
            <motion.div
              className="w-[50px] h-[50px] rounded-full bg-[#092241] flex items-center justify-center"
              variants={iconsVariants}
            >
              <img src="/user.svg" alt="User" />
            </motion.div>

            <motion.div
              className="w-[50px] h-[50px] rounded-full bg-[#092241] flex items-center justify-center"
              variants={iconsVariants}
            >
              <img src="/search.svg" alt="Search" />
            </motion.div>

            <motion.div
              className="bg-[#E30613] w-[175px] flex items-center text-base fsans-600 text-white justify-around py-2 rounded-3xl"
              variants={iconsVariants}
            >
              <p>Enquire Now</p>
              <img src="/rightUpArrow.svg" alt="Arrow" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Menu Icon */}
        <motion.div
          className="flex gap-[20px] justify-center items-center cursor-pointer relative p-2 bg-rose-950"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={{ opacity: isHover ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth fade in/out
        >
          <div className="text-white font-semibold text-[16px]">Menu</div>
          <img src="/hbrg.svg" alt="Hamburger Menu" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
