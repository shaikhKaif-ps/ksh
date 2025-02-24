import React from "react";
import LineHead from "./Heading/LineHead";

const Bento = ({ pointerEvents }) => {
  return (
    <div className="flex pt-[20px] sm:flex-row flex-col gap-[10px] items-center justify-between h-fit">
      <div
        className={`h-[585px] transition-[transform] duration-300 ${
          pointerEvents ? "pointer-events-auto" : "pointer-events-none"
        } md:hover:translate-y-[-20px] transition-[transform] duration-300 ease-in-out w-full sm:w-[33%] xl:w-[385px] bg-[url(/bentobg1.png)] bg-cover bg-center flex flex-col justify-end  px-4 xl:px-[25px] pb-[50px] gap-[10px]`}
      >
        <p className="fsans-400 text-[22px] leading-[130%] text-white">
          Warehousing were evaluated for a smooth, stress-free import/export
          program
        </p>
        <p className="fsans-400 text-[16px] leading-[130%] text-white opacity-50">
          Road Freight | 14 Dec 24
        </p>
        <button>
          <img className="h-10 w-10" src="/buttonarrows/bentor1.svg" alt="r1" />
        </button>
      </div>
      <div
        className={`h-[585px] transition-[transform] duration-300 ${
          pointerEvents ? "pointer-events-auto" : "pointer-events-none"
        } md:hover:translate-y-[-20px] transition-[transform] duration-300 ease-in-out w-full sm:w-[33%] xl:w-[315px] bg-[url(/bentobg2.png)] bg-cover bg-center flex flex-col justify-end sm:justify-start px-4 xl:px-[31px] pb-[50px] sm:pt-[50px] gap-[10px]`}
      >
        <p className="fsans-400 text-[22px] leading-[130%] text-white sm:text-[#092241]">
          Warehousing were evaluated for a smooth, stress-free import/export
          program
        </p>
        <p className="fsans-400 text-[16px] leading-[130%] text-white sm:text-[#6C8DAB] sm:opacity-50">
          Road Freight | 14 Dec 24
        </p>
        <button>
          <img className="h-10 w-10" src="/buttonarrows/bentor2.svg" alt="r1" />
        </button>
      </div>
      <div
        className={`h-[578px] transition-[transform] duration-300 ${
          pointerEvents ? "pointer-events-auto" : "pointer-events-none"
        } w-full sm:w-[33%] xl:w-[515px] flex justify-end flex-col-reverse sm:flex-col gap-[30px]`}
      >
        <div
          className={`${
            pointerEvents ? "pointer-events-auto" : "pointer-events-none"
          } md:hover:translate-y-[-20px] transition-[transform] duration-300 ease-in-out h-[479px] bg-[url(/bentobg3.png)] bg-cover bg-center flex flex-col items-start justify-end px-4 xl:pl-[50px] xl:pr-[125px] pb-[50px] gap-[10px]`}
        >
          <p className="fsans-400 text-[22px] leading-[130%] text-white">
            Warehousing were evaluated for a smooth, stress-free import/export
            program
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
  );
};

export default Bento;
