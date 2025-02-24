const Footer = () => {
  return (
    <div className="footerMain bg-[#141D28]">
      <div className="fix12 mx-auto ">
        {/* Footer Top */}
        <div className="newLetterSection lg:flex justify-between items-end md:pt-[105px] pt-[60px] pb-[40px] md:pb-[60px] border-b-[rgba(215, 215, 215, 0.34)] border-b-[1px]">
          <div className="leftCon">
            <h2 className="text-3xl w-fit pb-1 font-semibold text-white border-b-[5px] border-[#F7E327]">
              Get the latest <br /> updates & insights
            </h2>
          </div>
          <div className="rightCon pt-9 lg:pt-0">
            <p className="text-base text-[#6c8dab80] pb-[10px]">
              Subscribe to our newsletter
            </p>
            <form
              action=""
              className="md:w-[512px] border-2 border-white bg-white h-10  md:h-[70px] rounded-full flex justify-between pl-2 md:pl-6 md:pr-4 pr-2 items-center"
            >
              <div className="flex items-center gap-4">
                <img src="/emailIcon.svg" alt="" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id=""
                  className="border-none outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex gap-2 text-sm font-semibold items-center justify-between px-2 py-1 md:px-4 rounded-full md:w-[150px] md:h-[50px] bg-[#E30613] text-white"
              >
                Subscribe
                <img
                  src="/rightUpArrow.svg"
                  alt=""
                  className="md:w-auto md:h-auto w-[15px] h-[15px]"
                />
              </button>
            </form>
          </div>
        </div>
        {/* Footer middle */}
        <div className="text-white flex-col gap-[40px] md:flex-row flex pt-[35px] w-full justify-between md:pt-[60px] pb-[41px] border-[#D7D7D7] border-b-[1px]">
          <div className="">
            <img src="/footerIcon.svg" alt="" />
          </div>
          <div className="">
            <h2 className="pb-5 text-base font-semibold">Quick links</h2>
            <div className="flex flex-col gap-4 text-[#6c8dab80] text-base font-semibold">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Insights</a>
              <a href="">Sustainability</a>
              <a href="">Careers</a>
              <a href="">Contact Us</a>
            </div>
          </div>
          <div className="">
            <h2 className="pb-5 text-base font-semibold">Our Parks</h2>
            <div className="flex flex-col gap-4 text-[#6c8dab80] text-base font-semibold">
              <a href="">Park 01</a>
              <a href="">Park 02</a>
              <a href="">Park 03</a>
              <a href="">Park 04</a>
              <a href="">Park 05</a>
              <a href="">Park 06</a>
            </div>
          </div>
          <div className="">
            <h2 className="pb-5 text-base font-semibold">Sectors</h2>
            <div className="flex flex-col gap-4 text-[#6c8dab80] text-base font-semibold">
              <a href="">Automotive</a>
              <a href="">ecommerce & Retail</a>
              <a href="">Healthcare</a>
              <a href="">Hi Tech</a>
              <a href="">Hospitality</a>
              <a href="">Perishable</a>
              <a href="">Renewable Energy</a>
              <a href="">Retail and Fashion</a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="text-white flex md:flex-row flex-col lg:gap-0 gap-[20px] lg:flex-nowrap flex-wrap whitespace-nowrap items-start justify-between pt-[32px] ">
          <div className="pt-5 md:pt-0 flex gap-3">
            <div
              className="iconBox h-11 w-11 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
            >
              <img src="/socials/map.svg" alt="" />
            </div>
            <div className="text-[#6c8dab80] text-sm font-semibold leading-6">
              <p>KSH INFRA,</p>
              <p>
                Gokhale Sanchit, Office No. 4, <br /> Survey No. 846, Servants
                of India Society, <br /> Pune - 411 004, Maharashtra, India
              </p>
            </div>
          </div>
          <div className="pt-5 md:pt-0 flex flex-col gap-5">
            <div className="flex items-center gap-3 md:gap-[28px]">
              <div
                className="iconBox h-11 w-11 rounded-full flex items-center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
              >
                <img src="/socials/footerEmail.svg" alt="" />
              </div>
              <p className="text-[#6c8dab80] text-sm font-semibold leading-6">
                sales@kshinfra.com
              </p>
            </div>
            <div className="flex items-center gap-3 md:gap-[28px]">
              <div
                className="iconBox h-11 w-11 rounded-full flex items-center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}
              >
                <img src="/socials/Phone.svg" alt="" />
              </div>
              <p className="text-[#6c8dab80] text-sm font-semibold leading-6">
                1800-212-2030 (Toll-Free)
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] items-center justify-center h-fit w-full md:w-auto my-auto lg:pt-0 pt-[50px]">
            <div className="h-[32px] w-[32px]">
              <img
                className="object-cover w-full"
                src="/socials/youtube.svg"
                alt=""
              />
            </div>
            <div className="h-[24px] w-[24px]">
              <img
                className="object-cover w-full"
                src="/socials/facebook.svg"
                alt=""
              />
            </div>
            <div className="h-[24px] w-[24px]">
              <img
                className="object-cover w-full"
                src="/socials/instagram.svg"
                alt=""
              />
            </div>
            <div className="h-[24px] w-[24px]">
              <img
                className="object-cover w-full"
                src="/socials/linkedin.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Foooter End */}
        <div className="pt-[84px] pb-[23px] flex flex-col md:flex-row gap-2 items-center justify-between text-[#6c8dab80] text-sm font-semibold leading-6">
          <p>© 2024. KSH INFRA. All rights reserved.</p>
          <p>Design & Developed by Parashift technologies</p>
          <p>Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;