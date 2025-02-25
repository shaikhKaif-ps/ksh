const Card = ({ todos, activeSidebar }) => {
  const activeItem = todos.find((item) => item.id === activeSidebar);

  return (
    <div className="flex flex-col gap-[23px] xl:w-[710px] xl-1280:w-[650px] w-full lg:pb-[30px] h-[350px] sm:h-[450px] lg:h-[550px]">
      <div className="border-[10px] border-[#6E5E55] xl:min-w-fit lg:min-h-fit max-w-[700px] max-h-[330px]">
        <img
          src="/cnpoex.png"
          alt="CNPO Example"
          className="w-full object-cover"
        />
      </div>
      <h3 className="fsans-600 lg:text-[36px] text-[24px] text-white spotlightheaddd">
        {activeItem ? activeItem.content : "No Data Available"}
      </h3>
      <div className="flex group hover:translate-x-[5px] transition-transform duration-[400ms] cursor-pointer items-center gap-4 justify-between font-semibold text-[#ffffff] text-[16px] w-fit">
        <img
          src="/buttonarrows/redarico.svg"
          className="rotate-45 group-hover:rotate-0 group-hover:scale-[120%] transition-transform duration-[400ms] ease-in-out cursor-pointer"
          alt=""
        />
        Explore More
      </div>
    </div>
  );
};

export default Card;
