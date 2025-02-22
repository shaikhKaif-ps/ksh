import React from "react";

const VidLand = () => {
  return (
    <div className="w-screen h-screen">
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
