import Marquee from "react-fast-marquee";
const TrustedPartners = () => {
  return (
    <div className='merqueMain h-[500px] lg:h-[700px] bg-[url("/tpfiles/marqueBg.webp")] flex-col bg-cover bg-center flex justify-end'>
      
      <div className="max-w-[1250px] w-[90%] mx-auto mt-14 xl:mb-[70px] ">
        <h2 className="text-left w-full text-xl font-semibold text-[#092241]">
          Our Trusted Partners
        </h2>
      </div>

      <div className="bg-white gap-[26px] flex flex-col merqueSlider fix12 border mx-auto h-auto md:h-[415px] md:px-[65px] md:py-[40px]">
        <div className="merqueSlide flex items-center justify-between h-[90px]">
          <Marquee direction="left" speed={150}>
            <div className="flex space-x-12 md:space-x-28">
              <img src="/tpfiles/jcb.svg" alt="JCB" className="ml-28" />
              <img src="/tpfiles/envs.svg" alt="JCB" />
              <img src="/tpfiles/mgh.svg" alt="JCB" />
              <img src="/tpfiles/htl.svg" alt="JCB" />
              <img src="/tpfiles/apm.svg" alt="JCB" />
              <img src="/tpfiles/unsc.svg" alt="JCB" />
            </div>
          </Marquee>
        </div>
        <div className="merqueSlide flex items-center justify-between h-[90px]">
          <Marquee direction="right" speed={150}>
            <div className="flex space-x-12 md:space-x-28">
              <img src="/tpfiles/apm.svg" alt="JCB" className="ml-28" />
              <img src="/tpfiles/call.svg" alt="JCB" />
              <img src="/tpfiles/kclk.svg" alt="JCB" />
              <img src="/tpfiles/rtr.svg" alt="JCB" />
              <img src="/tpfiles/nsn.svg" alt="JCB" />
              <img src="/tpfiles/hndi.svg" alt="JCB" />
            </div>
          </Marquee>
        </div>
        <div className="merqueSlide flex items-center justify-between h-[90px]">
          <Marquee direction="left" speed={150}>
            <div className="flex space-x-12 md:space-x-28">
              <img src="/tpfiles/jcb.svg" alt="JCB" className="ml-28" />
              <img src="/tpfiles/envs.svg" alt="JCB" />
              <img src="/tpfiles/mgh.svg" alt="JCB" />
              <img src="/tpfiles/htl.svg" alt="JCB" />
              <img src="/tpfiles/apm.svg" alt="JCB" />
              <img src="/tpfiles/unsc.svg" alt="JCB" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default TrustedPartners;
