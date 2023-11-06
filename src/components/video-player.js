"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoPlayer = (props) => {
  return <ReactPlayer {...props} />;
};

export default VideoPlayer;
