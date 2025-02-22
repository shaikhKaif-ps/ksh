import React from "react";
import LineHead from "./Heading/LineHead";

const Bento = () => {
  return (
    <div className="bg-[#092241]">
      <div className="h-fit fix12">
        <div>
          <LineHead clr="text-white" heading="Our Blog" />
        </div>
        <div className="flex flex-col gap-[118px] pb-[105px]">
          <div className="flex items-center justify-between w-full">
            <div className="w-[60%]">
              <h2 className="text-white text-[88px] fpt-600 w-fit max-w-fit border-b-[10px] border-[#F7E327]">
                Latest <br />
                Insights
              </h2>
            </div>
            <div className="w-[40%] flex flex-col gap-[40px]">
              <p className="gradinetText text-[20px] fsans-400">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid.
              </p>
              <div className="flex items-center gap-4 justify-between font-semibold text-[#ffffff] text-[16px] w-fit">
                <img src="/buttonarrows/redarico.svg" alt="" />
                Explore More
              </div>
            </div>
          </div>
          <div className="flex gap-[10px] items-center justify-between ">
            
            <div className="h-[585px] w-[33%] xl:w-[385px] bg-[url(/bentobg1.png)] bg-cover bg-center flex flex-col justify-end   px-4 xl:px-[25px] pb-[50px] gap-[10px]">
              <p className="fsans-400 text-[22px] leading-[130%] text-white">
                Warehousing were evaluated for a smooth, stress-free
                import/export program
              </p>
              <p className="fsans-400 text-[16px] leading-[130%] text-white opacity-50">
                Road Freight | 14 Dec 24
              </p>
              <button>
                <img
                  className="h-10 w-10"
                  src="/buttonarrows/bentor1.svg"
                  alt="r1"
                />
              </button>
            </div>
            <div className="h-[578px] w-[33%] xl:w-[315px] bg-[url(/bentobg2.png)] bg-cover bg-center flex flex-col justify-start px-4 xl:px-[31px] pt-[50px] gap-[10px]">
              <p className="fsans-400 text-[22px] leading-[130%] text-[#092241]">
                Warehousing were evaluated for a smooth, stress-free
                import/export program
              </p>
              <p className="fsans-400 text-[16px] leading-[130%] text-[#6C8DAB] opacity-50">
                Road Freight | 14 Dec 24
              </p>
              <button>
                <img
                  className="h-10 w-10"
                  src="/buttonarrows/bentor2.svg"
                  alt="r1"
                />
              </button>
            </div>
            <div className="h-[578px] w-[33%] xl:w-[515px] flex justify-end flex-col gap-[30px]">
              <div>
                <div className="flex items-center justify-end gap-[14px]">
                  <button className="landingl w-fit">
                    <img className="w-10 h-10" src="/landingr.svg" alt="" />
                  </button>
                  <button className="landingr w-10 h-10">
                    <img className="w-10 h-10" src="/landingl.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="h-[479px] bg-[url(/bentobg3.png)] bg-cover bg-center flex flex-col items-start justify-end px-4 xl:pl-[50px] xl:pr-[125px] pb-[50px] gap-[10px]">
                <p className="fsans-400 text-[22px] leading-[130%] text-white">
                  Warehousing were evaluated for a smooth, stress-free
                  import/export program
                </p>
                <p className="fsans-400 text-[16px] leading-[130%] text-white opacity-50">
                  Road Freight | 14 Dec 24
                </p>
                <button>
                  <img
                    className="h-10 w-10"
                    src="/buttonarrows/bentor1.svg"
                    alt="r1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
