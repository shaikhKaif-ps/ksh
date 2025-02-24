import React from "react";
import LineHead from "./Heading/LineHead";

const BentoHeader = () => {
  return (
    <div>
      <div>
        <LineHead clr='text-white' heading='Our Blog' />
      </div>
      <div className='flex md:flex-row flex-col md:gap-0 gap-[30px] items-center justify-between max-w-full'>
        <div className='lg:w-[60%] md:w-[50%] w-full'>
          <h2 className='text-white xl:text-[88px] md:leading-[105%] pb-[15px] lg:text-[60px] md:text-[40px] text-3xl fpt-600 w-fit max-w-fit border-b-[10px] border-[#F7E327] fpt-600'>
            Latest <br className='md:flex hidden' />
            Insights
          </h2>
        </div>
        <div className='md:w-[50%] lg:w-[40%] w-full flex flex-col gap-[30px]'>
          <p className='gradinetText text-[16px] lg:text-[20px] fsans-400'>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid.
          </p>
          <div className='flex cursor-pointer group items-center gap-4 justify-between font-semibold text-[#ffffff] text-[16px] w-fit'>
            <img
              src='/buttonarrows/redarico.svg'
              className='rotate-45 group-hover:rotate-0 transition-transform duration-[400ms] ease-in-out cursor-pointer'
              alt=''
            />
            Explore More
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoHeader;