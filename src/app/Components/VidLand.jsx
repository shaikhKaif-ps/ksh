import React from "react";
import { motion } from "framer-motion";

const VidLand = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <video
        className="w-screen h-screen object-cover"
        autoPlay
        muted
        playsInline
        loop
        src="/spotlightvid.mp4"
      ></video>
    </div>
  );
};

export default VidLand;
