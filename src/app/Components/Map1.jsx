import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import MapSC from "./MapSC";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoMdClose } from "react-icons/io";


const Map1 = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [hotspots, setHotspots] = useState([]);

  const mapslided = [
    {
      parkimg: "/firstinfra.jpg",
      title: "KSH Chakan IV",
      city: "Pune, Maharashtra",
      tarea: "0.66MN. SQ. FT.",
      tbuild: "02 BUILDINGS",
    },
    {
      parkimg: "/firstinfra.jpg",
      title: "KSH Chakan III",
      city: "Pune, Maharashtra",
      tarea: "1.49MN. SQ. FT.",
      tbuild: "08 BUILDINGS",
    },
    {
      parkimg: "/firstinfra.jpg",
      title: "KSH Chakan II",
      city: "Pune, Hyderabad",
      tarea: "1.2MN. SQ. FT.",
      tbuild: "05 BUILDINGS",
    },
    {
      parkimg: "/firstinfra.jpg",
      title: "KSH Chakan I",
      city: "Pune, Delhi",
      tarea: "0.85MN. SQ. FT.",
      tbuild: "04 BUILDINGS",
    },
    {
      parkimg: "/firstinfra.jpg",
      title: "KSH Talegaon",
      city: "NCR, Delhi",
      tarea: "0.14MN. SQ. FT.",
      tbuild: "02 BUILDINGS",
    },
  ];

  // Hotspot positions, zoom levels & translation values
  const hotspotData = {
    desktop: [
      { id: 1, park_no: "05", park_name: "Mumbai", x: "35%", y: "66%", scale: 2, translateX: -8, translateY: -8 },
      { id: 2, park_no: "01", park_name: "Pune", x: "38%", y: "71%", scale: 2, translateX: -8, translateY: -8 },
      { id: 3, park_no: "01", park_name: "Goa", x: "36.5%", y: "76%", scale: 2, translateX: -8, translateY: -8 },
    ],
    tablet: [
      { id: 1, park_no: "05", park_name: "Mumbai", x: "38%", y: "66%", scale: 1.8, translateX: -6, translateY: -6 },
      { id: 2, park_no: "01", park_name: "Pune", x: "42%", y: "65%", scale: 1.8, translateX: -6, translateY: -6 },
      { id: 3, park_no: "01", park_name: "Goa", x: "43.5%", y: "68%", scale: 1.8, translateX: -6, translateY: -6 },
    ],
    mobile: []
  };

  // Function to update hotspots based on screen size
  const updateHotspots = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setHotspots(hotspotData.mobile);
    } else if (width < 1024) {
      setHotspots(hotspotData.tablet);
    } else {
      setHotspots(hotspotData.desktop);
    }
  };


  const handleHotspotClick = (id) => {
    setActiveHotspot(activeHotspot === id ? null : id);
   
    // Scroll to the section on click
    // const parkSection = document.getElementById("park_sec");
    // if (parkSection) {
    //   parkSection.scrollIntoView({ behavior: "smooth", block: "start" });
    // }

  };
  
  useEffect(() => {
    updateHotspots();
    window.addEventListener("resize", updateHotspots);
    return () => window.removeEventListener("resize", updateHotspots);
  }, []);

   useEffect(() => {
    const parkSection = document.getElementById("park_sec");
    if (parkSection) {
      if (activeHotspot !== null) {
        parkSection.classList.add("active");
      } else {
        parkSection.classList.remove("active");
      }
    }
  }, [activeHotspot]);

  const active = hotspots.find((h) => h.id === activeHotspot);

  return (
    <div className="hotspot-container" id="park_sec">
      <div
        className="hotspot-map"
        style={{
          transform: active
            ? `scale(${active.scale}) translate(${active.translateX}%, ${active.translateY}%)`
            : "scale(1) translate(0, 0)",
          transformOrigin: active ? `${active.x} ${active.y}` : "center",
          transition: "transform 0.5s ease-in-out",
        }}
      >

        <img src="/map.webp" alt="Map" className="map-image" />

        <div className="hotspot_col_one">
          {hotspots.map((hotspot) =>
            activeHotspot === null || activeHotspot === hotspot.id ? (
              <div
                key={hotspot.id}
                className={`hotspot ${activeHotspot === hotspot.id ? "active" : ""}`}
                style={{ left: hotspot.x, top: hotspot.y }}
                onClick={() => handleHotspotClick(hotspot.id)}
              >
                <div className="hotspot_inn">
                  <span className="park_no">{hotspot.park_no}</span>
                  <span className="park_name">{hotspot.park_name}</span>
                </div>
              </div>
            ) : null
          )}
        </div>

      </div>

      <div className="hotspot_col_two">
         <motion.div
            initial={{ width: "0px", height: "180px" }}
            animate={{
              width: activeHotspot ? "710px" : "0px",
              height: activeHotspot ? "385px" : "180px",
              transformOrigin: "0% 50%",
            }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="overflow-hidden flex flex-col items-center relative"
          >
            {/* Cross Button Container */}
            <div className="w-full flex justify-end p-3">
              <button
               onClick={()=>setActiveHotspot(null)}
                className="w-8 h-8 bg-white text-white flex items-center justify-center rounded-full text-lg font-bold absolute top-[32px] z-10 right-[9px]"
              >
                <IoMdClose className="text-black text-2xl"/>
              </button>
            </div>

            {/* Swiper Wrapper (Inside Flex Col Parent) */}
            <div className="w-[710px] flex flex-col">
              <Swiper
                modules={[Navigation]}
                navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
                slidesPerView={1.06}
                spaceBetween={20}
                breakpoints={{
                  1024: {
                    slidesPerView: 1, // Second slide fully covers
                  },
                }}
                className="w-full h-full"
              >
                {mapslided.map((mapd, index) => (
                  <SwiperSlide key={mapd.title + mapd.city}>
                    <MapSC
                      parkimg={mapd.parkimg}
                      title={mapd.title}
                      tarea={mapd.tarea}
                      tbuild={mapd.tbuild}
                      city={mapd.city}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Navigation Buttons (Below Slider) */}
            <div className="flex flex-row justify-end gap-[10px] mt-[0px] absolute bottom-[25px] z-10 w-fit right-0">
              {/* <button className="prev-btn p-2 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                ←
              </button>
              <button className="next-btn p-2 bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center">
                →
              </button> */}
              <button className="prev-btn arrowleft h-[41px] w-[41px] z-10">
                  <img
                    className="h-[41px] w-[41px] bg-white rounded-full"
                    src="/buttonarrows/arrowleft.svg"
                    alt="ArrowLeft"
                  />
                </button>
                <button className="next-btn arrowright h-[41px] w-[41px]">
                  <img
                    className="h-[41px] w-[41px] bg-white rounded-full"
                    src="/buttonarrows/arrowright.svg"
                    alt="ArrowRight"
                  />
                </button>
            </div>
          </motion.div>
        </div>

    </div>
  );
};

export default Map1;



