import React from "react";

const Card = ({ todos }) => {
  return (
    <div className="flex flex-col gap-[23px] xl:max-w-[710px] xl-1280:max-w-[650px] pb-[30px]">
      <div className="border-[10px] border-[#6E5E55] xl:min-w-fit lg:min-h-fit max-w-[700px] max-h-[330px]">
        <img
          src="/cnpoex.png"
          alt="CNPO Example"
          className="w-full object-cover"
        />
      </div>
      <h3 className="fsans-600 lg:text-[36px] text-[24px] text-white">
        {/* {todos.length > 0 ? todos[0].title : "No Data Available"} */}
        How we built Kawasaki's first integrated manufacturing and R&D facility in India.
      </h3>
      <div className="flex items-center gap-4 justify-between font-semibold text-[#ffffff] text-[16px] w-fit">
        <img src="/buttonarrows/redarico.svg" className="rotate-45 hover:rotate-0 transition-transform duration-300 cursor-pointer" alt="" />
        Explore More
      </div>
    </div>
  );
};

export default Card;
