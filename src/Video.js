import React from "react";

const VideoPlayer = () => {
  return (
    <video
      controls
      width="600"
      height="400"
      autoPlay
      loop
      // poster="imgs/home/cover-speed-website.png"
    >
    <source src="C:\Users\ITD\Pictures\speed2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
