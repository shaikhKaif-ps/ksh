// 'use client'
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="flex items-center justify-center h-[100px] bg-gradient-to-b from-gray-800 to-transparent fixed z-[1000000000] w-screen ml-auto">
//       <div className="max-w-[1250px] w-[90%] flex justify-between">

//         <div>
//           <img src="/navlogo.svg" alt="Nav Logo" />
//         </div>

//         {/* Animated Menu */}
//         <motion.div
//           initial={{ y: -100, opacity: 0 }}
//           animate={isHovered ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
//           transition={{ type: "spring", stiffness: 100, damping: 15 }}
//           className=" flex items-center justify-center bg-red-300 gap-9 p-4"
//         >
//           <p>About</p>
//           <p>About</p>
//           <p>About</p>
//           <p>About</p>
//           <p>About</p>
//           <p>About</p>
//         </motion.div>

//         {/* Menu Icon */}
//         <div
//           className="flex gap-[20px] justify-center items-center cursor-pointer"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <div className="text-white font-semibold text-[16px]">Menu</div>
//           <img src="/hbrg.svg" alt="Hamburger Menu" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-[100px] bg-gradient-to-b from-gray-800 to-transparent absolute z-[100000000] w-full  ml-auto">
      <div className="max-w-[1250px] w-[90%] flex justify-between">

        <div>
          <img src="/navlogo.svg" alt="Nav Logo" />
        </div>



       



        <div className="flex gap-[20px] justify-center items-center">
          <div className="text-white fsans-600 text-[16px]">Menu</div>
          <img src="/hbrg.svg" alt="Hamburger Menu" />
        </div>


      </div>

    </div>
  );
};

export default Navbar;