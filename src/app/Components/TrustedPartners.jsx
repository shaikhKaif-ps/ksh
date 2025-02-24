import Marquee from "react-fast-marquee";
const TrustedPartners = () => {
  return (
    <div className='merqueMain h-auto xl-1280:pt-20 pt-16 bg-[url("/tpfiles/marqueBg.webp")] flex-col bg-cover bg-center flex justify-end'>
      
      <div className="max-w-[1250px] w-[90%] mx-auto  pb-9 ">
        <h2 className="text-left w-full text-xl font-semibold text-[#092241] pb-1 ">
          Our Trusted Partners
        </h2>
      </div>

      <div className="max-w-[1250px] w-[90%] bg-white gap-[26px] flex flex-col merqueSlider border mx-auto h-auto md:h-[415px] md:px-[65px] md:py-[40px]">
        <div className="merqueSlide flex items-center justify-between h-[90px]">
          <Marquee direction="left" speed={120}>
            <div className="flex space-x-12 md:space-x-12">
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
          <Marquee direction="right" speed={120}>
            <div className="flex space-x-12 md:space-x-12">
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
          <Marquee direction="left" speed={120}>
            <div className="flex space-x-12 md:space-x-12">
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
