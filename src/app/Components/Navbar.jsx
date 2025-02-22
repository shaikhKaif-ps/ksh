import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-[100px] bg-gradient-to-b from-gray-800 to-transparent fixed z-[1000000000] w-screen ml-auto">
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